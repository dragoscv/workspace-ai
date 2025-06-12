#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

/**
 * Core utilities for the workspace-ai system
 */

export interface ProjectConfig {
  version: string;
  projectType: string;
  teamSize: string;
  setupDate: string;
  features: {
    validation: boolean;
    metrics: boolean;
    automation: boolean;
  };
}

export interface InstructionMetadata {
  title: string;
  role: string;
  type: string;
  version: string;
  lastUpdated: string;
  tags: string[];
  dependencies?: string[];
}

export class WorkspaceAI {
  private configPath: string;
  private config: ProjectConfig | null = null;

  constructor(projectRoot: string = process.cwd()) {
    this.configPath = path.join(projectRoot, '.workspace-ai.json');
  }

  async loadConfig(): Promise<ProjectConfig> {
    if (this.config) return this.config;

    try {
      if (await fs.pathExists(this.configPath)) {
        this.config = await fs.readJSON(this.configPath);
        return this.config!;
      }
    } catch (error) {
      console.warn(chalk.yellow('⚠️  Could not load workspace-ai config'));
    }

    // Return default config
    this.config = {
      version: '2.0.0',
      projectType: 'unknown',
      teamSize: 'unknown',
      setupDate: new Date().toISOString(),
      features: {
        validation: true,
        metrics: true,
        automation: true
      }
    };

    return this.config;
  }

  async saveConfig(config: ProjectConfig): Promise<void> {
    this.config = config;
    await fs.writeJSON(this.configPath, config, { spaces: 2 });
  }
  async getInstructionFiles(instructionsPath: string = '.github/instructions'): Promise<string[]> {
    try {
      const files = await fs.readdir(instructionsPath, { recursive: true });
      return files
        .filter(file => typeof file === 'string' && file.endsWith('.instructions.md'))
        .map(file => path.join(instructionsPath, file as string));
    } catch (error) {
      return [];
    }
  }

  async parseInstructionFile(filePath: string): Promise<{ metadata: InstructionMetadata; content: string }> {
    const content = await fs.readFile(filePath, 'utf-8');

    // Extract frontmatter if present
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    let metadata: Partial<InstructionMetadata> = {};

    if (frontmatterMatch) {
      try {
        // Simple YAML parsing for basic fields
        const yamlContent = frontmatterMatch[1];
        const lines = yamlContent.split('\n');

        for (const line of lines) {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim();
            switch (key.trim()) {
              case 'title':
                metadata.title = value.replace(/["']/g, '');
                break;
              case 'role':
                metadata.role = value.replace(/["']/g, '');
                break;
              case 'type':
                metadata.type = value.replace(/["']/g, '');
                break;
              case 'version':
                metadata.version = value.replace(/["']/g, '');
                break;
              case 'lastUpdated':
                metadata.lastUpdated = value.replace(/["']/g, '');
                break;
              case 'tags':
                metadata.tags = value.replace(/[\[\]"']/g, '').split(',').map(t => t.trim());
                break;
            }
          }
        }
      } catch (error) {
        console.warn(chalk.yellow(`⚠️  Could not parse frontmatter in ${filePath}`));
      }
    }    // Fill in defaults
    const basename = path.basename(filePath, '.instructions.md');
    const fullMetadata: InstructionMetadata = {
      title: metadata.title || basename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      role: metadata.role || basename.split('-')[0] || 'unknown',
      type: metadata.type || 'agent',
      version: metadata.version || '1.0.0',
      lastUpdated: metadata.lastUpdated || new Date().toISOString(),
      tags: metadata.tags || [],
      ...(metadata.dependencies && { dependencies: metadata.dependencies })
    };

    return { metadata: fullMetadata, content };
  }

  async generateProjectReport(): Promise<any> {
    const config = await this.loadConfig();
    const instructionFiles = await this.getInstructionFiles();

    const report = {
      project: {
        config,
        generatedAt: new Date().toISOString(),
        totalInstructions: instructionFiles.length
      },
      instructions: [],
      coverage: {
        business: 0,
        development: 0,
        operations: 0,
        communication: 0,
        advanced: 0
      },
      quality: {
        averageSize: 0,
        withMetadata: 0,
        withTags: 0
      }
    };

    let totalSize = 0;
    let withMetadata = 0;
    let withTags = 0;

    for (const filePath of instructionFiles) {
      try {
        const { metadata, content } = await this.parseInstructionFile(filePath);
        const size = content.length;

        (report.instructions as any[]).push({
          file: path.relative(process.cwd(), filePath),
          metadata,
          size,
          category: this.categorizeInstruction(filePath)
        });

        totalSize += size;
        if (metadata.title !== path.basename(filePath, '.instructions.md')) withMetadata++;
        if (metadata.tags.length > 0) withTags++;

        // Update coverage
        const category = this.categorizeInstruction(filePath);
        if (category in report.coverage) {
          (report.coverage as any)[category]++;
        }
      } catch (error) {
        console.warn(chalk.yellow(`⚠️  Could not process ${filePath}`));
      }
    }

    report.quality.averageSize = Math.round(totalSize / instructionFiles.length);
    report.quality.withMetadata = withMetadata;
    report.quality.withTags = withTags;

    return report;
  }

  private categorizeInstruction(filePath: string): string {
    const relativePath = path.relative(process.cwd(), filePath);

    if (relativePath.includes('/business/')) return 'business';
    if (relativePath.includes('/development/')) return 'development';
    if (relativePath.includes('/operations/')) return 'operations';
    if (relativePath.includes('/communication/')) return 'communication';
    if (relativePath.includes('/advanced/')) return 'advanced';

    return 'general';
  }
}
