#!/usr/bin/env node

/**
 * Comprehensive task automation script for workspace-ai
 * Handles daily operations, CI/CD, and maintenance tasks
 */

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { Command } from 'commander';
import { validateInstructions } from './commands/validate.js';
import { generateReport } from './commands/generate.js';
import { getMetrics } from './commands/metrics.js';

const program = new Command();

interface TaskResult {
  success: boolean;
  message: string;
  details?: any;
}

class TaskAutomation {
  private results: TaskResult[] = [];

  async runDailyOperations(): Promise<void> {
    console.log(chalk.blue('🔄 Running daily operations...\n'));

    // 1. Validate all instructions
    console.log(chalk.yellow('1. Validating instruction files...'));
    const validationResult = await this.runWithErrorHandling(
      () => validateInstructions({ path: '.github/instructions', rules: 'all' }),
      'Instruction validation'
    );

    // 2. Generate reports
    console.log(chalk.yellow('2. Generating reports...'));
    const reportResult = await this.runWithErrorHandling(
      () => generateReport({ type: 'coverage', output: './reports' }),
      'Report generation'
    );

    // 3. Analyze metrics
    console.log(chalk.yellow('3. Analyzing metrics...'));
    const metricsResult = await this.runWithErrorHandling(
      () => getMetrics({ period: 'week', export: 'json' }),
      'Metrics analysis'
    );

    // 4. Update project status
    console.log(chalk.yellow('4. Updating project status...'));
    const statusResult = await this.updateProjectStatus();

    // 5. Generate summary
    this.generateSummary();
  }

  async runCI(): Promise<void> {
    console.log(chalk.blue('🚀 Running CI/CD pipeline...\n'));

    // 1. Pre-commit validation
    console.log(chalk.yellow('1. Pre-commit validation...'));
    const validationResult = await this.runWithErrorHandling(
      () => validateInstructions({ path: '.github/instructions', rules: 'all', fix: true }),
      'Pre-commit validation'
    );

    if (!validationResult.success) {
      console.error(chalk.red('❌ Validation failed. CI pipeline stopped.'));
      process.exit(1);
    }

    // 2. Generate documentation
    console.log(chalk.yellow('2. Generating documentation...'));
    await this.runWithErrorHandling(
      () => generateReport({ type: 'quality', output: './reports' }),
      'Documentation generation'
    );

    // 3. Run quality checks
    console.log(chalk.yellow('3. Running quality checks...'));
    await this.runQualityChecks();

    // 4. Performance analysis
    console.log(chalk.yellow('4. Performance analysis...'));
    await this.runWithErrorHandling(
      () => getMetrics({ period: 'day', export: 'json' }),
      'Performance analysis'
    );

    console.log(chalk.green('✅ CI/CD pipeline completed successfully!'));
  }

  async runMaintenance(): Promise<void> {
    console.log(chalk.blue('🔧 Running maintenance tasks...\n'));

    // 1. Clean old reports
    console.log(chalk.yellow('1. Cleaning old reports...'));
    await this.cleanOldFiles('./reports', 7); // Keep files for 7 days

    // 2. Archive metrics
    console.log(chalk.yellow('2. Archiving metrics...'));
    await this.archiveMetrics();

    // 3. Update dependencies
    console.log(chalk.yellow('3. Checking dependencies...'));
    await this.checkDependencies();

    // 4. Backup configurations
    console.log(chalk.yellow('4. Backing up configurations...'));
    await this.backupConfigurations();

    console.log(chalk.green('✅ Maintenance completed!'));
  }

  private async runWithErrorHandling(
    task: () => Promise<void>,
    taskName: string
  ): Promise<TaskResult> {
    try {
      await task();
      const result: TaskResult = { success: true, message: `${taskName} completed successfully` };
      this.results.push(result);
      console.log(chalk.green(`   ✅ ${result.message}`));
      return result;
    } catch (error) {
      const result: TaskResult = {
        success: false,
        message: `${taskName} failed: ${error instanceof Error ? error.message : String(error)}`
      };
      this.results.push(result);
      console.log(chalk.red(`   ❌ ${result.message}`));
      return result;
    }
  }

  private async updateProjectStatus(): Promise<TaskResult> {
    try {
      const status = {
        lastUpdated: new Date().toISOString(),
        totalInstructions: (await this.getInstructionFileCount()),
        validationStatus: this.results.find(r => r.message.includes('validation'))?.success || false,
        reportsGenerated: await fs.pathExists('./reports'),
        version: '2.0.0'
      };

      await fs.writeJSON('.workspace-ai-status.json', status, { spaces: 2 });
      return { success: true, message: 'Project status updated' };
    } catch (error) {
      return {
        success: false,
        message: `Status update failed: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  private async getInstructionFileCount(): Promise<number> {
    try {
      const files = await fs.readdir('.github/instructions', { recursive: true });
      return files.filter(file => typeof file === 'string' && file.endsWith('.instructions.md')).length;
    } catch {
      return 0;
    }
  }

  private async runQualityChecks(): Promise<TaskResult> {
    try {
      // Check for required sections in key instruction files
      const criticalFiles = [
        '.github/instructions/business/ceo-agent.instructions.md',
        '.github/instructions/development/senior-developer-agent.instructions.md',
        '.github/instructions/operations/project-manager-agent.instructions.md'
      ];

      let allPassed = true;
      for (const file of criticalFiles) {
        if (await fs.pathExists(file)) {
          const content = await fs.readFile(file, 'utf-8');
          if (!content.includes('## Overview') || !content.includes('Memory Management')) {
            allPassed = false;
            console.log(chalk.yellow(`   ⚠️  Quality issue in ${path.basename(file)}`));
          }
        }
      }

      return {
        success: allPassed,
        message: allPassed ? 'Quality checks passed' : 'Quality issues found'
      };
    } catch (error) {
      return {
        success: false,
        message: `Quality checks failed: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  }

  private async cleanOldFiles(directory: string, daysToKeep: number): Promise<void> {
    try {
      if (!await fs.pathExists(directory)) return;

      const files = await fs.readdir(directory);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

      for (const file of files) {
        const filePath = path.join(directory, file);
        const stats = await fs.stat(filePath);

        if (stats.mtime < cutoffDate) {
          await fs.remove(filePath);
          console.log(chalk.gray(`   🗑️  Removed old file: ${file}`));
        }
      }
    } catch (error) {
      console.log(chalk.yellow(`   ⚠️  Could not clean directory ${directory}: ${error}`));
    }
  }

  private async archiveMetrics(): Promise<void> {
    try {
      const archiveDir = './archives/metrics';
      await fs.ensureDir(archiveDir);

      const metricsFile = './reports/metrics.json';
      if (await fs.pathExists(metricsFile)) {
        const timestamp = new Date().toISOString().split('T')[0];
        const archivePath = path.join(archiveDir, `metrics-${timestamp}.json`);
        await fs.copy(metricsFile, archivePath);
        console.log(chalk.gray(`   📦 Archived metrics to ${archivePath}`));
      }
    } catch (error) {
      console.log(chalk.yellow(`   ⚠️  Could not archive metrics: ${error}`));
    }
  }

  private async checkDependencies(): Promise<void> {
    try {
      const packageJson = await fs.readJSON('./package.json');
      const dependencyCount = Object.keys(packageJson.dependencies || {}).length;
      const devDependencyCount = Object.keys(packageJson.devDependencies || {}).length;

      console.log(chalk.gray(`   📦 Dependencies: ${dependencyCount}, Dev dependencies: ${devDependencyCount}`));
    } catch (error) {
      console.log(chalk.yellow(`   ⚠️  Could not check dependencies: ${error}`));
    }
  }

  private async backupConfigurations(): Promise<void> {
    try {
      const backupDir = './backups';
      await fs.ensureDir(backupDir);

      const configFiles = [
        'package.json',
        'tsconfig.json',
        '.workspace-ai.json',
        '.workspace-ai-status.json'
      ];

      const timestamp = new Date().toISOString().split('T')[0];

      for (const file of configFiles) {
        if (await fs.pathExists(file)) {
          const backupPath = path.join(backupDir, `${path.basename(file, path.extname(file))}-${timestamp}${path.extname(file)}`);
          await fs.copy(file, backupPath);
        }
      }

      console.log(chalk.gray(`   💾 Configurations backed up to ${backupDir}`));
    } catch (error) {
      console.log(chalk.yellow(`   ⚠️  Could not backup configurations: ${error}`));
    }
  }

  private generateSummary(): void {
    console.log(chalk.blue('\n📊 Task Summary:'));

    const successCount = this.results.filter(r => r.success).length;
    const totalCount = this.results.length;

    console.log(chalk.green(`✅ Successful: ${successCount}/${totalCount}`));

    const failures = this.results.filter(r => !r.success);
    if (failures.length > 0) {
      console.log(chalk.red(`❌ Failed: ${failures.length}`));
      failures.forEach(failure => {
        console.log(chalk.red(`   • ${failure.message}`));
      });
    }

    console.log(chalk.blue(`\n📅 Run completed at: ${new Date().toISOString()}`));
  }
}

// CLI setup
program
  .name('workspace-ai-tasks')
  .description('Comprehensive task automation for workspace-ai')
  .version('2.0.0');

program
  .command('daily')
  .description('Run daily operations')
  .action(async () => {
    const automation = new TaskAutomation();
    await automation.runDailyOperations();
  });

program
  .command('ci')
  .description('Run CI/CD pipeline')
  .action(async () => {
    const automation = new TaskAutomation();
    await automation.runCI();
  });

program
  .command('maintenance')
  .description('Run maintenance tasks')
  .action(async () => {
    const automation = new TaskAutomation();
    await automation.runMaintenance();
  });

// Export for programmatic use
export { TaskAutomation };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  program.parse();
}
