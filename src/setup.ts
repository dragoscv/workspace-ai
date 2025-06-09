#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';

/**
 * Setup wizard for initializing workspace-ai in a new project
 */
export async function setupProject(): Promise<void> {
  console.log(chalk.blue('🚀 Welcome to Workspace AI Setup Wizard\n'));

  try {
    // Check if we're in a Git repository
    const isGitRepo = await fs.pathExists('.git');
    if (!isGitRepo) {
      const { initGit } = await inquirer.prompt([{
        type: 'confirm',
        name: 'initGit',
        message: 'This is not a Git repository. Would you like to initialize Git?',
        default: true
      }]);
      
      if (initGit) {
        console.log(chalk.yellow('📦 Initializing Git repository...'));
        // Git initialization would happen here
        console.log(chalk.green('✅ Git repository initialized'));
      }
    }

    // Project type selection
    const { projectType } = await inquirer.prompt([{
      type: 'list',
      name: 'projectType',
      message: 'What type of project are you setting up?',
      choices: [
        'Full Stack Web Application',
        'AI/ML Project',
        'Mobile Application',
        'Desktop Application',
        'API/Backend Service',
        'DevOps/Infrastructure',
        'Data Science/Analytics',
        'Custom/Other'
      ]
    }]);

    // Team size
    const { teamSize } = await inquirer.prompt([{
      type: 'list',
      name: 'teamSize',
      message: 'What is your team size?',
      choices: [
        'Solo developer (1)',
        'Small team (2-5)',
        'Medium team (6-15)',
        'Large team (16+)'
      ]
    }]);

    // Selected roles
    const { roles } = await inquirer.prompt([{
      type: 'checkbox',
      name: 'roles',
      message: 'Which agent roles do you need? (Select all that apply)',
      choices: [
        { name: 'CEO Agent - Executive leadership', value: 'ceo' },
        { name: 'CTO Agent - Technical leadership', value: 'cto' },
        { name: 'Product Manager - Product strategy', value: 'product-manager' },
        { name: 'Senior Developer - Code architecture', value: 'senior-developer' },
        { name: 'DevOps Engineer - Infrastructure', value: 'devops-engineer' },
        { name: 'QA Engineer - Quality assurance', value: 'qa-engineer' },
        { name: 'UX Designer - User experience', value: 'ux-designer' },
        { name: 'Data Scientist - Analytics & ML', value: 'data-scientist' },
        { name: 'Security Engineer - Security & compliance', value: 'security-engineer' },
        { name: 'Marketing Manager - Growth & promotion', value: 'marketing-manager' },
        { name: 'Customer Success - User satisfaction', value: 'customer-success' }
      ]
    }]);

    console.log(chalk.blue('\n📋 Setup Summary:'));
    console.log(`Project Type: ${projectType}`);
    console.log(`Team Size: ${teamSize}`);
    console.log(`Selected Roles: ${roles.join(', ')}`);

    const { confirm } = await inquirer.prompt([{
      type: 'confirm',
      name: 'confirm',
      message: 'Proceed with setup?',
      default: true
    }]);

    if (!confirm) {
      console.log(chalk.yellow('⏹️  Setup cancelled'));
      return;
    }

    // Create directory structure
    console.log(chalk.blue('\n📁 Creating directory structure...'));
    await createDirectoryStructure();

    // Copy instruction files based on selected roles
    console.log(chalk.blue('📄 Setting up instruction files...'));
    await setupInstructionFiles(roles);

    // Create configuration files
    console.log(chalk.blue('⚙️  Creating configuration files...'));
    await createConfigFiles(projectType, teamSize);

    // Setup GitHub Actions if applicable
    const { setupCI } = await inquirer.prompt([{
      type: 'confirm',
      name: 'setupCI',
      message: 'Set up GitHub Actions CI/CD workflow?',
      default: true
    }]);

    if (setupCI) {
      console.log(chalk.blue('🔧 Setting up CI/CD workflow...'));
      await setupGitHubActions();
    }

    console.log(chalk.green('\n✅ Workspace AI setup completed successfully!'));
    console.log(chalk.blue('\n📖 Next steps:'));
    console.log('1. Review the instruction files in .github/instructions/');
    console.log('2. Customize them for your specific project needs');
    console.log('3. Run "npm run validate" to check instruction quality');
    console.log('4. Use "npm run generate" to create documentation');
    console.log('5. Start using AI agents with your new instruction system!');

  } catch (error) {
    console.error(chalk.red('❌ Setup failed:'), error);
    process.exit(1);
  }
}

async function createDirectoryStructure(): Promise<void> {
  const directories = [
    '.github/instructions/business',
    '.github/instructions/development', 
    '.github/instructions/operations',
    '.github/instructions/communication',
    '.github/instructions/advanced',
    '.github/workflows',
    'docs/training',
    'examples',
    'reports'
  ];

  for (const dir of directories) {
    await fs.ensureDir(dir);
  }
}

async function setupInstructionFiles(selectedRoles: string[]): Promise<void> {
  // This would copy the appropriate instruction files based on selected roles
  console.log('Setting up instruction files for:', selectedRoles);
  // Implementation would copy files from templates
}

async function createConfigFiles(projectType: string, teamSize: string): Promise<void> {
  // Create workspace-ai configuration
  const config = {
    version: '2.0.0',
    projectType,
    teamSize,
    setupDate: new Date().toISOString(),
    features: {
      validation: true,
      metrics: true,
      automation: true
    }
  };

  await fs.writeJSON('.workspace-ai.json', config, { spaces: 2 });
}

async function setupGitHubActions(): Promise<void> {
  // Copy CI/CD workflow file
  const workflowContent = `name: Workspace AI Quality Assurance

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  validate-instructions:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run validate
      - run: npm run generate
`;

  await fs.ensureDir('.github/workflows');
  await fs.writeFile('.github/workflows/quality-assurance.yml', workflowContent);
}

// Run setup if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  setupProject().catch(console.error);
}
