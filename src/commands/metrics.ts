import chalk from 'chalk';

interface MetricsOptions {
  period: string;
  export: string;
}

interface InstructionMetrics {
  usageCount: number;
  effectivenessScore: number;
  lastUsed: Date;
  userFeedback: Array<{
    rating: number;
    comment: string;
    timestamp: Date;
  }>;
  improvementSuggestions: string[];
}

export async function getMetrics(options: MetricsOptions): Promise<void> {
  try {
    console.log(chalk.yellow(`📈 Analyzing metrics for period: ${options.period}`));

    // Simulate metrics data (in real implementation, this would come from usage tracking)
    const metrics = await collectMetrics(options.period);

    console.log(chalk.blue('\n📊 Instruction Effectiveness Metrics:'));
    console.log(chalk.blue(`📅 Period: ${options.period}`));
    console.log(chalk.blue(`📁 Total Instructions Analyzed: ${Object.keys(metrics).length}`));

    // Calculate overall effectiveness
    const overallEffectiveness = calculateOverallEffectiveness(metrics);
    console.log(chalk.green(`🎯 Overall Effectiveness: ${overallEffectiveness.toFixed(1)}%`));

    // Show top performers
    const topPerformers = getTopPerformers(metrics, 5);
    console.log(chalk.green('\n🏆 Top Performing Instructions:'));
    topPerformers.forEach((item, index) => {
      console.log(chalk.green(`   ${index + 1}. ${item.name} (${item.score.toFixed(1)}%)`));
    });

    // Show improvement opportunities
    const improvementOpportunities = getImprovementOpportunities(metrics, 3);
    console.log(chalk.yellow('\n⚠️  Improvement Opportunities:'));
    improvementOpportunities.forEach((item, index) => {
      console.log(chalk.yellow(`   ${index + 1}. ${item.name} (${item.score.toFixed(1)}%)`));
    });

    // Export data if requested
    if (options.export !== 'json') {
      await exportMetrics(metrics, options.export, options.period);
      console.log(chalk.green(`\n💾 Metrics exported to ${options.export} format`));
    }

  } catch (error) {
    console.error(chalk.red(`❌ Metrics analysis failed: ${error}`));
    process.exit(1);
  }
}

async function collectMetrics(period: string): Promise<Record<string, InstructionMetrics>> {
  // Simulate metrics collection
  // In real implementation, this would integrate with usage tracking systems

  const sampleMetrics: Record<string, InstructionMetrics> = {
    'senior-developer-agent': {
      usageCount: 145,
      effectivenessScore: 92,
      lastUsed: new Date(),
      userFeedback: [
        { rating: 5, comment: 'Excellent code quality guidelines', timestamp: new Date() },
        { rating: 4, comment: 'Very helpful for architecture decisions', timestamp: new Date() }
      ],
      improvementSuggestions: ['Add more microservices examples']
    },
    'product-manager-agent': {
      usageCount: 89,
      effectivenessScore: 88,
      lastUsed: new Date(),
      userFeedback: [
        { rating: 4, comment: 'Good roadmap guidance', timestamp: new Date() }
      ],
      improvementSuggestions: ['Include more stakeholder management tips']
    },
    'devops-engineer-agent': {
      usageCount: 67,
      effectivenessScore: 85,
      lastUsed: new Date(),
      userFeedback: [
        { rating: 4, comment: 'Solid deployment strategies', timestamp: new Date() }
      ],
      improvementSuggestions: ['Add Kubernetes troubleshooting section']
    },
    'marketing-manager-agent': {
      usageCount: 34,
      effectivenessScore: 78,
      lastUsed: new Date(),
      userFeedback: [
        { rating: 3, comment: 'Needs more digital marketing focus', timestamp: new Date() }
      ],
      improvementSuggestions: ['Expand social media strategies', 'Add conversion optimization tactics']
    }
  };

  return sampleMetrics;
}

function calculateOverallEffectiveness(metrics: Record<string, InstructionMetrics>): number {
  const scores = Object.values(metrics).map(m => m.effectivenessScore);
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function getTopPerformers(metrics: Record<string, InstructionMetrics>, count: number): Array<{ name: string, score: number }> {
  return Object.entries(metrics)
    .map(([name, data]) => ({ name, score: data.effectivenessScore }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

function getImprovementOpportunities(metrics: Record<string, InstructionMetrics>, count: number): Array<{ name: string, score: number }> {
  return Object.entries(metrics)
    .map(([name, data]) => ({ name, score: data.effectivenessScore }))
    .sort((a, b) => a.score - b.score)
    .slice(0, count);
}

async function exportMetrics(metrics: Record<string, InstructionMetrics>, format: string, period: string): Promise<void> {
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `metrics-${period}-${timestamp}`;

  switch (format) {
    case 'csv':
      const csvContent = generateCSV(metrics);
      console.log(chalk.blue(`📄 CSV export would be saved as: ${filename}.csv`));
      break;
    case 'html':
      const htmlContent = generateHTML(metrics, period);
      console.log(chalk.blue(`🌐 HTML report would be saved as: ${filename}.html`));
      break;
    default:
      console.log(chalk.blue(`📊 JSON export: ${filename}.json`));
  }
}

function generateCSV(metrics: Record<string, InstructionMetrics>): string {
  const headers = 'Instruction,Usage Count,Effectiveness Score,Last Used,Feedback Count,Avg Rating\n';
  const rows = Object.entries(metrics).map(([name, data]) => {
    const avgRating = data.userFeedback.length > 0
      ? data.userFeedback.reduce((sum, f) => sum + f.rating, 0) / data.userFeedback.length
      : 0;
    return `${name},${data.usageCount},${data.effectivenessScore},${data.lastUsed.toISOString()},${data.userFeedback.length},${avgRating.toFixed(1)}`;
  }).join('\n');

  return headers + rows;
}

function generateHTML(metrics: Record<string, InstructionMetrics>, period: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>Instruction Metrics Report - ${period}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #f2f2f2; }
        .high-score { background-color: #d4edda; }
        .low-score { background-color: #f8d7da; }
    </style>
</head>
<body>
    <h1>📈 Instruction Metrics Report</h1>
    <p><strong>Period:</strong> ${period}</p>
    <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
    
    <table>
        <thead>
            <tr>
                <th>Instruction</th>
                <th>Usage Count</th>
                <th>Effectiveness Score</th>
                <th>Feedback Count</th>
                <th>Improvement Suggestions</th>
            </tr>
        </thead>
        <tbody>
            ${Object.entries(metrics).map(([name, data]) => `
                <tr class="${data.effectivenessScore >= 85 ? 'high-score' : data.effectivenessScore < 80 ? 'low-score' : ''}">
                    <td>${name}</td>
                    <td>${data.usageCount}</td>
                    <td>${data.effectivenessScore}%</td>
                    <td>${data.userFeedback.length}</td>
                    <td>${data.improvementSuggestions.join(', ')}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
</body>
</html>
  `;
}
