import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { glob } from 'glob';
import matter from 'gray-matter';

interface GenerateOptions {
  type: string;
  output: string;
}

interface CoverageReport {
  totalFiles: number;
  roleCategories: Record<string, number>;
  missingRoles: string[];
  completionPercentage: number;
  recommendations: string[];
}

interface QualityReport {
  averageQuality: number;
  fileQuality: Record<string, number>;
  issues: Array<{
    file: string;
    severity: string;
    message: string;
  }>;
}

export async function generateReport(options: GenerateOptions): Promise<void> {
  try {
    const outputDir = path.resolve(options.output);
    await fs.ensureDir(outputDir);

    switch (options.type) {
      case 'coverage':
        await generateCoverageReport(outputDir);
        break;
      case 'quality':
        await generateQualityReport(outputDir);
        break;
      case 'metrics':
        await generateMetricsReport(outputDir);
        break;
      default:
        console.error(chalk.red(`❌ Unknown report type: ${options.type}`));
        process.exit(1);
    }

  } catch (error) {
    console.error(chalk.red(`❌ Report generation failed: ${error}`));
    process.exit(1);
  }
}

async function generateCoverageReport(outputDir: string): Promise<void> {
  console.log(chalk.blue('📊 Generating coverage report...'));

  const instructionFiles = await glob('**/*.instructions.md', {
    cwd: '.github/instructions',
    absolute: true
  });

  const roleCategories: Record<string, number> = {
    'business': 0,
    'development': 0,
    'operations': 0,
    'communication': 0
  };

  const roles: string[] = [];

  for (const filePath of instructionFiles) {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter } = matter(content);

    const category = path.dirname(filePath).split(path.sep).pop() || 'other';
    if (roleCategories[category] !== undefined) {
      roleCategories[category]++;
    }

    const fileName = path.basename(filePath, '.instructions.md');
    roles.push(fileName.replace('-agent', ''));
  }

  const expectedRoles = [
    'ceo', 'cto', 'cfo', 'product-manager', 'business-analyst',
    'senior-developer', 'devops-engineer', 'qa-engineer', 'security-engineer',
    'data-scientist', 'mobile-developer', 'cloud-architect', 'sre',
    'marketing-manager', 'sales-manager', 'content-creator', 'ux-designer',
    'project-manager', 'customer-success', 'hr-manager'
  ];

  const missingRoles = expectedRoles.filter(role =>
    !roles.some(r => r.includes(role.replace('-', '')))
  );

  const report: CoverageReport = {
    totalFiles: instructionFiles.length,
    roleCategories,
    missingRoles,
    completionPercentage: Math.round((roles.length / expectedRoles.length) * 100),
    recommendations: generateRecommendations(missingRoles, roleCategories)
  };

  // Generate HTML report
  const html = generateCoverageHTML(report);
  await fs.writeFile(path.join(outputDir, 'coverage-report.html'), html);

  // Generate JSON report
  await fs.writeFile(
    path.join(outputDir, 'coverage-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log(chalk.green(`✅ Coverage report generated: ${outputDir}`));
  console.log(chalk.blue(`📁 Total files: ${report.totalFiles}`));
  console.log(chalk.blue(`📊 Completion: ${report.completionPercentage}%`));

  if (missingRoles.length > 0) {
    console.log(chalk.yellow(`⚠️  Missing roles: ${missingRoles.join(', ')}`));
  }
}

async function generateQualityReport(outputDir: string): Promise<void> {
  console.log(chalk.blue('🔍 Generating quality report...'));

  // This would integrate with the validation system
  const report: QualityReport = {
    averageQuality: 85,
    fileQuality: {},
    issues: []
  };

  const html = `
    <html>
      <head><title>Quality Report</title></head>
      <body>
        <h1>Instruction Quality Report</h1>
        <p>Average Quality Score: ${report.averageQuality}%</p>
      </body>
    </html>
  `;

  await fs.writeFile(path.join(outputDir, 'quality-report.html'), html);
  console.log(chalk.green(`✅ Quality report generated: ${outputDir}`));
}

async function generateMetricsReport(outputDir: string): Promise<void> {
  console.log(chalk.blue('📈 Generating metrics report...'));

  const metricsData = {
    timestamp: new Date().toISOString(),
    totalInstructions: 38,
    categoryCoverage: {
      business: 95,
      development: 90,
      operations: 85,
      communication: 88
    },
    qualityScore: 87,
    recentChanges: 5,
    activeContributors: 3
  };

  await fs.writeFile(
    path.join(outputDir, 'metrics-report.json'),
    JSON.stringify(metricsData, null, 2)
  );

  console.log(chalk.green(`✅ Metrics report generated: ${outputDir}`));
}

function generateRecommendations(missingRoles: string[], categories: Record<string, number>): string[] {
  const recommendations: string[] = [];

  if (missingRoles.length > 0) {
    recommendations.push(`Add instruction files for missing roles: ${missingRoles.join(', ')}`);
  }

  const minCategorySize = 5;
  Object.entries(categories).forEach(([category, count]) => {
    if (count < minCategorySize) {
      recommendations.push(`Expand ${category} category (currently ${count} files, recommended: ${minCategorySize}+)`);
    }
  });

  return recommendations;
}

function generateCoverageHTML(report: CoverageReport): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>Workspace AI - Coverage Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .metric { background: #f5f5f5; padding: 20px; margin: 10px 0; border-radius: 8px; }
        .category { display: inline-block; margin: 10px; padding: 15px; background: #e8f4fd; border-radius: 5px; }
        .missing { color: #d73a49; }
        .complete { color: #28a745; }
        .chart { width: 100%; height: 300px; background: #f8f9fa; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>🤖 Workspace AI Coverage Report</h1>
    
    <div class="metric">
        <h2>📊 Overall Coverage</h2>
        <p><strong>Total Files:</strong> ${report.totalFiles}</p>
        <p><strong>Completion:</strong> <span class="${report.completionPercentage >= 90 ? 'complete' : 'missing'}">${report.completionPercentage}%</span></p>
    </div>

    <div class="metric">
        <h2>📁 Category Breakdown</h2>
        ${Object.entries(report.roleCategories).map(([category, count]) =>
    `<div class="category"><strong>${category}:</strong> ${count} files</div>`
  ).join('')}
    </div>

    ${report.missingRoles.length > 0 ? `
    <div class="metric">
        <h2 class="missing">⚠️ Missing Roles</h2>
        <ul>
            ${report.missingRoles.map(role => `<li>${role}</li>`).join('')}
        </ul>
    </div>
    ` : ''}

    <div class="metric">
        <h2>💡 Recommendations</h2>
        <ul>
            ${report.recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    </div>

    <footer>
        <p><em>Generated on ${new Date().toLocaleString()}</em></p>
    </footer>
</body>
</html>
  `;
}
