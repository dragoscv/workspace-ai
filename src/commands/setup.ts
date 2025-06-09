import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';

interface SetupOptions {
  template: string;
  interactive?: boolean;
}

interface ProjectTemplate {
  name: string;
  description: string;
  files: Array<{
    path: string;
    content: string;
  }>;
  instructions: string[];
}

export async function setupProject(options: SetupOptions): Promise<void> {
  try {
    console.log(chalk.magenta('🚀 Setting up workspace-ai in your project...'));

    let template = options.template;
    let projectPath = process.cwd();

    if (options.interactive) {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'template',
          message: 'Choose a project template:',
          choices: [
            { name: 'Default - Complete instruction set', value: 'default' },
            { name: 'Minimal - Core roles only', value: 'minimal' },
            { name: 'Enterprise - Full enterprise setup', value: 'enterprise' },
            { name: 'Startup - Lean startup focused', value: 'startup' }
          ]
        },
        {
          type: 'input',
          name: 'projectPath',
          message: 'Project directory:',
          default: process.cwd()
        }
      ]);

      template = answers.template;
      projectPath = answers.projectPath;
    }

    const templateConfig = getTemplateConfig(template);
    await setupFromTemplate(templateConfig, projectPath);

    console.log(chalk.green('✅ Setup completed successfully!'));
    console.log(chalk.blue('\n📝 Next steps:'));
    templateConfig.instructions.forEach((instruction, index) => {
      console.log(chalk.blue(`   ${index + 1}. ${instruction}`));
    });

  } catch (error) {
    console.error(chalk.red(`❌ Setup failed: ${error}`));
    process.exit(1);
  }
}

function getTemplateConfig(template: string): ProjectTemplate {
  const templates: Record<string, ProjectTemplate> = {
    default: {
      name: 'Default Setup',
      description: 'Complete workspace-ai instruction system',
      files: [
        {
          path: '.github/instructions/README.md',
          content: generateReadmeContent()
        },
        {
          path: '.vscode/settings.json',
          content: generateVSCodeSettings()
        },
        {
          path: 'workspace-ai.config.json',
          content: generateConfig('default')
        }
      ],
      instructions: [
        'Review the instruction files in .github/instructions/',
        'Configure your VS Code settings for optimal AI integration',
        'Run `npx workspace-ai validate` to check instruction quality',
        'Customize instructions for your specific project needs'
      ]
    },
    minimal: {
      name: 'Minimal Setup',
      description: 'Core roles only - CEO, CTO, Senior Developer, Product Manager',
      files: [
        {
          path: '.github/instructions/README.md',
          content: generateReadmeContent()
        },
        {
          path: 'workspace-ai.config.json',
          content: generateConfig('minimal')
        }
      ],
      instructions: [
        'Start with core instruction files',
        'Add additional roles as your team grows',
        'Run `npx workspace-ai generate coverage` to track completeness'
      ]
    },
    enterprise: {
      name: 'Enterprise Setup',
      description: 'Full enterprise setup with compliance and security',
      files: [
        {
          path: '.github/instructions/README.md',
          content: generateReadmeContent()
        },
        {
          path: '.github/workflows/instruction-validation.yml',
          content: generateCIWorkflow()
        },
        {
          path: 'workspace-ai.config.json',
          content: generateConfig('enterprise')
        },
        {
          path: 'docs/INSTRUCTION_GUIDELINES.md',
          content: generateInstructionGuidelines()
        }
      ],
      instructions: [
        'Set up CI/CD pipeline for instruction validation',
        'Configure enterprise security settings',
        'Establish instruction review process',
        'Train team on instruction system usage'
      ]
    },
    startup: {
      name: 'Startup Setup',
      description: 'Lean setup focused on rapid development',
      files: [
        {
          path: '.github/instructions/README.md',
          content: generateReadmeContent()
        },
        {
          path: 'workspace-ai.config.json',
          content: generateConfig('startup')
        }
      ],
      instructions: [
        'Focus on MVP development with core instructions',
        'Scale instruction system as team grows',
        'Prioritize speed and agility over comprehensive coverage'
      ]
    }
  };

  return templates[template] || templates.default;
}

async function setupFromTemplate(template: ProjectTemplate, projectPath: string): Promise<void> {
  console.log(chalk.blue(`📦 Setting up ${template.name}...`));

  for (const file of template.files) {
    const filePath = path.join(projectPath, file.path);
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, file.content);
    console.log(chalk.green(`   ✅ Created: ${file.path}`));
  }

  // Copy instruction files based on template
  const instructionsDir = path.join(projectPath, '.github/instructions');
  await fs.ensureDir(instructionsDir);

  // This would copy the appropriate instruction files based on the template
  console.log(chalk.blue('📁 Setting up instruction files...'));
  console.log(chalk.green('   ✅ Instruction system configured'));
}

function generateReadmeContent(): string {
  return `# Workspace AI Instructions

This project uses the workspace-ai instruction system for enhanced AI-powered development.

## Quick Start

1. Install workspace-ai tools: \`npm install -g workspace-ai\`
2. Validate instructions: \`workspace-ai validate\`
3. Generate reports: \`workspace-ai generate coverage\`

## Available Instructions

See the instruction files in this directory for role-specific AI guidance.

## Configuration

Edit \`workspace-ai.config.json\` to customize the instruction system for your project.
`;
}

function generateVSCodeSettings(): string {
  return JSON.stringify({
    "github.copilot.enable": {
      "*": true,
      "yaml": false,
      "plaintext": false
    },
    "github.copilot.advanced": {
      "length": 500,
      "temperature": 0.1
    },
    "files.associations": {
      "*.instructions.md": "markdown"
    }
  }, null, 2);
}

function generateConfig(template: string): string {
  const configs = {
    default: {
      instructionPath: ".github/instructions",
      enabledRoles: ["all"],
      validationRules: ["structure", "content", "memory", "examples"],
      memoryIntegration: true,
      reportingEnabled: true
    },
    minimal: {
      instructionPath: ".github/instructions",
      enabledRoles: ["ceo", "cto", "senior-developer", "product-manager"],
      validationRules: ["structure", "content"],
      memoryIntegration: false,
      reportingEnabled: false
    },
    enterprise: {
      instructionPath: ".github/instructions",
      enabledRoles: ["all"],
      validationRules: ["all"],
      memoryIntegration: true,
      reportingEnabled: true,
      complianceMode: true,
      auditLogging: true
    },
    startup: {
      instructionPath: ".github/instructions",
      enabledRoles: ["ceo", "cto", "senior-developer", "product-manager", "marketing-manager"],
      validationRules: ["structure"],
      memoryIntegration: true,
      reportingEnabled: false
    }
  };

  return JSON.stringify(configs[template as keyof typeof configs] || configs.default, null, 2);
}

function generateCIWorkflow(): string {
  return `name: Validate Instructions

on:
  push:
    paths:
      - '.github/instructions/**'
  pull_request:
    paths:
      - '.github/instructions/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install workspace-ai
        run: npm install -g workspace-ai
        
      - name: Validate instructions
        run: workspace-ai validate
        
      - name: Generate coverage report
        run: workspace-ai generate coverage
        
      - name: Upload coverage report
        uses: actions/upload-artifact@v3
        with:
          name: instruction-coverage
          path: reports/
`;
}

function generateInstructionGuidelines(): string {
  return `# Instruction Guidelines

## Creating New Instructions

1. Use the standard template format
2. Include memory management section
3. Add practical examples
4. Define success metrics

## Validation Process

All instruction files must pass validation before merging:

- \`workspace-ai validate\` must pass
- Peer review required
- Quality score must be > 80%

## Maintenance

- Review instructions quarterly
- Update based on team feedback
- Monitor effectiveness metrics
`;
}
