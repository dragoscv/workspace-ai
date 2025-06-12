export interface ValidationRule {
  id: string;
  name: string;
  description: string;
  severity: 'error' | 'warning' | 'info';
  category: 'structure' | 'content' | 'memory' | 'examples' | 'metrics';
  validator: (instruction: InstructionFile) => Promise<ValidationResult[]>;
}

export interface ValidationResult {
  ruleId: string;
  severity: 'error' | 'warning' | 'info';
  message: string;
  line?: number;
  suggestion?: string;
  autoFixAvailable?: boolean;
  fix?: (content: string) => Promise<string>;
}

export interface InstructionFile {
  path: string;
  content: string;
  frontmatter: Record<string, any>;
  relativePath: string;
}

export class InstructionValidator {
  private rules: ValidationRule[] = [];

  constructor() {
    this.initializeDefaultRules();
  }

  private initializeDefaultRules(): void {
    // Structure validation rules
    this.rules.push({
      id: 'has-title',
      name: 'Has Title',
      description: 'Instruction file must have a clear title',
      severity: 'error',
      category: 'structure',
      validator: this.validateTitle.bind(this)
    });

    this.rules.push({
      id: 'has-overview',
      name: 'Has Overview',
      description: 'Instruction file must have an overview section',
      severity: 'error',
      category: 'structure',
      validator: this.validateOverview.bind(this)
    });

    this.rules.push({
      id: 'has-memory-management',
      name: 'Has Memory Management',
      description: 'Instruction file must include memory management guidelines',
      severity: 'error',
      category: 'memory',
      validator: this.validateMemoryManagement.bind(this)
    });

    this.rules.push({
      id: 'has-examples',
      name: 'Has Examples',
      description: 'Instruction file should include practical examples',
      severity: 'warning',
      category: 'examples',
      validator: this.validateExamples.bind(this)
    });

    this.rules.push({
      id: 'has-success-metrics',
      name: 'Has Success Metrics',
      description: 'Instruction file should define success metrics',
      severity: 'warning',
      category: 'metrics',
      validator: this.validateSuccessMetrics.bind(this)
    });
  }

  async validateFile(instruction: InstructionFile): Promise<ValidationResult[]> {
    const results: ValidationResult[] = [];

    for (const rule of this.rules) {
      try {
        const ruleResults = await rule.validator(instruction);
        results.push(...ruleResults);
      } catch (error) {
        results.push({
          ruleId: rule.id,
          severity: 'error',
          message: `Validation rule '${rule.name}' failed: ${error}`,
          autoFixAvailable: false
        });
      }
    }

    return results;
  }

  private async validateTitle(instruction: InstructionFile): Promise<ValidationResult[]> {
    const titleMatch = instruction.content.match(/^#\s+(.+)$/m);

    if (!titleMatch) {
      return [{
        ruleId: 'has-title',
        severity: 'error',
        message: 'No main title (# heading) found',
        suggestion: 'Add a main title using # at the beginning of the file',
        autoFixAvailable: false
      }];
    }

    const title = titleMatch[1].trim();
    if (title.length < 3) {
      return [{
        ruleId: 'has-title',
        severity: 'warning',
        message: 'Title is too short (less than 3 characters)',
        suggestion: 'Use a more descriptive title',
        autoFixAvailable: false
      }];
    }

    return [];
  }

  private async validateOverview(instruction: InstructionFile): Promise<ValidationResult[]> {
    const overviewMatch = instruction.content.match(/##\s*Overview/i);

    if (!overviewMatch) {
      return [{
        ruleId: 'has-overview',
        severity: 'error',
        message: 'No Overview section found',
        suggestion: 'Add an ## Overview section explaining the purpose and scope',
        autoFixAvailable: true,
        fix: async (content: string) => {
          const titleMatch = content.match(/^#\s+(.+)$/m);
          if (titleMatch) {
            const insertIndex = content.indexOf('\n', titleMatch.index! + titleMatch[0].length);
            return content.slice(0, insertIndex + 1) +
              '\n## Overview\n\nThis instruction file provides...\n' +
              content.slice(insertIndex + 1);
          }
          return content;
        }
      }];
    }

    return [];
  }

  private async validateMemoryManagement(instruction: InstructionFile): Promise<ValidationResult[]> {
    const memoryMatch = instruction.content.match(/Memory Management|CHECK FIRST|mcp_memoraimcpser_recall/i);

    if (!memoryMatch) {
      return [{
        ruleId: 'has-memory-management',
        severity: 'error',
        message: 'No memory management guidelines found',
        suggestion: 'Add a "Memory Management - CHECK FIRST" section with search and storage guidelines',
        autoFixAvailable: false
      }];
    }

    return [];
  }

  private async validateExamples(instruction: InstructionFile): Promise<ValidationResult[]> {
    const codeBlockCount = (instruction.content.match(/```/g) || []).length / 2;

    if (codeBlockCount < 2) {
      return [{
        ruleId: 'has-examples',
        severity: 'warning',
        message: 'Limited examples found (less than 2 code blocks)',
        suggestion: 'Add more practical examples and code snippets',
        autoFixAvailable: false
      }];
    }

    return [];
  }

  private async validateSuccessMetrics(instruction: InstructionFile): Promise<ValidationResult[]> {
    const metricsMatch = instruction.content.match(/Success Metrics|KPIs|Performance|Measurement/i);

    if (!metricsMatch) {
      return [{
        ruleId: 'has-success-metrics',
        severity: 'warning',
        message: 'No success metrics or KPIs defined',
        suggestion: 'Add a section defining success criteria and measurable outcomes',
        autoFixAvailable: false
      }];
    }

    return [];
  }

  addRule(rule: ValidationRule): void {
    this.rules.push(rule);
  }

  removeRule(ruleId: string): void {
    this.rules = this.rules.filter(rule => rule.id !== ruleId);
  }

  getRules(): ValidationRule[] {
    return [...this.rules];
  }
}
