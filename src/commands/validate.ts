import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { glob } from 'glob';
import matter from 'gray-matter';
import { InstructionValidator, ValidationResult } from '../core/validator.js';

interface ValidateOptions {
  path: string;
  rules: string;
  fix?: boolean;
}

export async function validateInstructions(options: ValidateOptions): Promise<void> {
  try {
    const instructionPath = path.resolve(options.path);
    
    if (!await fs.pathExists(instructionPath)) {
      console.error(chalk.red(`❌ Instruction path not found: ${instructionPath}`));
      process.exit(1);
    }

    console.log(chalk.blue(`🔍 Scanning instruction files in: ${instructionPath}`));
    
    const instructionFiles = await glob('**/*.instructions.md', {
      cwd: instructionPath,
      absolute: true
    });

    if (instructionFiles.length === 0) {
      console.warn(chalk.yellow('⚠️  No instruction files found'));
      return;
    }

    console.log(chalk.blue(`📁 Found ${instructionFiles.length} instruction files`));

    const validator = new InstructionValidator();
    let totalErrors = 0;
    let totalWarnings = 0;
    let totalFixed = 0;

    for (const filePath of instructionFiles) {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(chalk.gray(`\n📄 Validating: ${relativePath}`));

      const content = await fs.readFile(filePath, 'utf-8');
      const { data: frontmatter, content: markdown } = matter(content);

      const results = await validator.validateFile({
        path: filePath,
        content: markdown,
        frontmatter,
        relativePath
      });

      if (results.length === 0) {
        console.log(chalk.green('   ✅ No issues found'));
        continue;
      }

      for (const result of results) {
        const icon = result.severity === 'error' ? '❌' : 
                    result.severity === 'warning' ? '⚠️' : 'ℹ️';
        const color = result.severity === 'error' ? chalk.red : 
                     result.severity === 'warning' ? chalk.yellow : chalk.blue;
        
        console.log(color(`   ${icon} ${result.message}`));
        
        if (result.line) {
          console.log(color(`      Line ${result.line}`));
        }
        
        if (result.suggestion) {
          console.log(chalk.gray(`      💡 ${result.suggestion}`));
        }

        if (result.severity === 'error') totalErrors++;
        else if (result.severity === 'warning') totalWarnings++;

        // Auto-fix if requested and available
        if (options.fix && result.autoFixAvailable && result.fix) {
          try {
            const fixedContent = await result.fix(content);
            await fs.writeFile(filePath, fixedContent);
            console.log(chalk.green(`      🔧 Auto-fixed`));
            totalFixed++;
          } catch (error) {
            console.log(chalk.red(`      ❌ Failed to auto-fix: ${error}`));
          }
        }
      }
    }

    // Summary
    console.log(chalk.blue('\n📊 Validation Summary:'));
    console.log(chalk.blue(`   📁 Files processed: ${instructionFiles.length}`));
    console.log(chalk.red(`   ❌ Errors: ${totalErrors}`));
    console.log(chalk.yellow(`   ⚠️  Warnings: ${totalWarnings}`));
    
    if (options.fix) {
      console.log(chalk.green(`   🔧 Auto-fixed: ${totalFixed}`));
    }

    if (totalErrors > 0) {
      console.log(chalk.red('\n❌ Validation failed with errors'));
      process.exit(1);
    } else if (totalWarnings > 0) {
      console.log(chalk.yellow('\n⚠️  Validation completed with warnings'));
    } else {
      console.log(chalk.green('\n✅ All instruction files are valid!'));
    }

  } catch (error) {
    console.error(chalk.red(`❌ Validation failed: ${error}`));
    process.exit(1);
  }
}
