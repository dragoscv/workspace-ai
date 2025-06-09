#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { validateInstructions } from './commands/validate.js';
import { generateReport } from './commands/generate.js';
import { getMetrics } from './commands/metrics.js';
import { setupProject } from './commands/setup.js';

const program = new Command();

program
  .name('workspace-ai')
  .description('World-class AI agent instruction system automation tools')
  .version('2.0.0');

program
  .command('validate')
  .description('Validate all instruction files for quality and completeness')
  .option('-p, --path <path>', 'Path to instruction files', '.github/instructions')
  .option('-r, --rules <rules>', 'Validation rules to apply', 'all')
  .option('-f, --fix', 'Auto-fix issues where possible')
  .action(async (options) => {
    console.log(chalk.blue('🔍 Validating instruction files...'));
    await validateInstructions(options);
  });

program
  .command('generate')
  .description('Generate reports and documentation')
  .option('-t, --type <type>', 'Report type: coverage, quality, metrics', 'coverage')
  .option('-o, --output <path>', 'Output path', './reports')
  .action(async (options) => {
    console.log(chalk.green('📊 Generating reports...'));
    await generateReport(options);
  });

program
  .command('metrics')
  .description('Analyze instruction effectiveness and usage metrics')
  .option('-p, --period <period>', 'Time period: day, week, month', 'week')
  .option('-e, --export <format>', 'Export format: json, csv, html', 'json')
  .action(async (options) => {
    console.log(chalk.yellow('📈 Analyzing metrics...'));
    await getMetrics(options);
  });

program
  .command('setup')
  .description('Set up workspace-ai in a new project')
  .option('-t, --template <template>', 'Project template', 'default')
  .option('-i, --interactive', 'Interactive setup')
  .action(async (options) => {
    console.log(chalk.magenta('🚀 Setting up workspace-ai...'));
    await setupProject(options);
  });

program.parse();
