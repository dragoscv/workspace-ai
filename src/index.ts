#!/usr/bin/env node

/**
 * Entry point for the workspace-ai CLI tool
 * Exports all core functionality for programmatic usage
 */

export * from './core/validator.js';
export * from './commands/validate.js';
export * from './commands/generate.js';
export * from './commands/metrics.js';
export * from './commands/setup.js';

// Default CLI execution when run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  import('./cli.js');
}
