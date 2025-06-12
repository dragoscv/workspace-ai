---
applyTo: "**"
---

# Pull Request Guidelines for Copilot Agent

## Overview
The Pull Request Guidelines provide a comprehensive framework for creating, reviewing, and managing pull requests that ensure code quality, maintainability, and team collaboration. These guidelines establish consistent standards for PR descriptions, validation criteria, and review processes that streamline development workflows while maintaining high-quality code standards.

This system enables both human developers and AI agents to create well-structured, informative pull requests that facilitate efficient code review, reduce back-and-forth communication, and ensure all necessary validations are completed before code integration.

## Memory Management - CHECK FIRST
Before creating or reviewing pull requests, ALWAYS:
1. **Search for existing patterns**: `mcp_memoraimcpser_recall("pr_template project_patterns")`
2. **Check code standards**: `mcp_memoraimcpser_recall("code_standards review_guidelines")`
3. **Reference similar PRs**: `mcp_memoraimcpser_recall("successful_pr patterns templates")`
4. **Store effective patterns**: Save successful PR formats with entity type `'pr_template'` or `'review_pattern'`
5. **Track review feedback**: Store common review comments and improvements with entity type `'review_insights'`

Use these guidelines to generate, validate, or improve pull request descriptions, ensuring clarity, completeness, and alignment with project standards.

General Structure

Every pull request should follow this structure:

## What does this PR do?

Briefly describe the purpose and scope of this pull request. What feature, fix, or improvement does it introduce?

## Why is it needed?

Explain the motivation behind the change. Is it addressing a bug, feature request, performance issue, or technical debt?

## How was it tested?

Describe how this change was verified. Mention any manual testing, automated tests, or CI pipelines used.

## Any relevant issues?

Reference related GitHub issues, if applicable, using "Closes #123" or "Fixes #456" syntax.

## Screenshots or demos (if applicable):

Include UI screenshots, video links, or GIFs showing the feature or fix in action.

## Checklist

* [ ] Code is clean and follows project conventions
* [ ] Tests are written and passing
* [ ] No console errors or warnings
* [ ] PR is linked to an issue or feature
* [ ] All relevant files are included
* [ ] UI/UX is reviewed (if applicable)
* [ ] Accessibility is considered (if applicable)

## Content Guidelines

* Be concise, but include enough context for reviewers to understand the scope.
* Use Markdown formatting for readability.
* Avoid generic titles like "Update code" or "Fix bugs" — be specific.
* Keep descriptions updated if changes are made during review.

## Automated PR Generation Framework

### PR Analysis Engine
```typescript
interface PRAnalysis {
  changes: {
    filesModified: string[];
    linesAdded: number;
    linesDeleted: number;
    complexity: 'low' | 'medium' | 'high';
  };
  type: 'feature' | 'bugfix' | 'refactor' | 'docs' | 'test' | 'chore';
  scope: string[]; // affected modules/components
  breakingChanges: boolean;
  securityImpact: boolean;
  performanceImpact: boolean;
  testCoverage: number;
  requiredReviewers: string[];
}

// Example automated PR analysis
function analyzePR(diff: GitDiff): PRAnalysis {
  const analysis: PRAnalysis = {
    changes: {
      filesModified: diff.files.map(f => f.path),
      linesAdded: diff.stats.additions,
      linesDeleted: diff.stats.deletions,
      complexity: calculateComplexity(diff)
    },
    type: inferPRType(diff.commitMessages, diff.files),
    scope: extractAffectedModules(diff.files),
    breakingChanges: detectBreakingChanges(diff),
    securityImpact: hasSecurityChanges(diff.files),
    performanceImpact: hasPerformanceChanges(diff.files),
    testCoverage: calculateTestCoverage(diff.files),
    requiredReviewers: determineReviewers(diff.files)
  };
  
  return analysis;
}
```

### Smart PR Description Generator
```typescript
interface PRDescriptionTemplate {
  title: string;
  description: string;
  checklist: string[];
  labels: string[];
  reviewers: string[];
  milestone?: string;
}

function generatePRDescription(analysis: PRAnalysis, context: ProjectContext): PRDescriptionTemplate {
  const template: PRDescriptionTemplate = {
    title: generateTitle(analysis),
    description: buildDescription(analysis, context),
    checklist: generateChecklist(analysis),
    labels: inferLabels(analysis),
    reviewers: analysis.requiredReviewers,
    milestone: determineMilestone(analysis, context)
  };
  
  return template;
}

// Example smart description generation
const smartDescription = `
## What does this PR do?
${analysis.type === 'feature' ? 'Implements' : 'Fixes'} ${extractMainFeature(analysis.scope)}

## Impact Analysis
- **Complexity**: ${analysis.changes.complexity}
- **Breaking Changes**: ${analysis.breakingChanges ? '⚠️ Yes' : '✅ No'}
- **Security Impact**: ${analysis.securityImpact ? '🔒 Review Required' : '✅ None'}
- **Performance Impact**: ${analysis.performanceImpact ? '⚡ Benchmarks Included' : '✅ Minimal'}
- **Test Coverage**: ${analysis.testCoverage}%

## Modified Components
${analysis.scope.map(s => `- ${s}`).join('\n')}

${analysis.breakingChanges ? '## ⚠️ Breaking Changes\n[Auto-generated breaking change analysis]' : ''}
`;
```

### PR Quality Gates
```yaml
# Example PR quality configuration
pr_quality_gates:
  required_checks:
    - name: "Code Coverage"
      threshold: 80
      enforced: true
    
    - name: "Security Scan"
      required_for: ["security", "auth", "api"]
      enforced: true
    
    - name: "Performance Tests"
      required_when: "performance_impact"
      threshold: "95th_percentile < 500ms"
    
    - name: "Accessibility Tests"
      required_for: ["ui", "frontend"]
      enforced: true
  
  review_requirements:
    team_lead_required_for:
      - breaking_changes: true
      - security_impact: true
      - architecture_changes: true
    
    domain_expert_required_for:
      - database_migrations: "database_team"
      - security_changes: "security_team"
      - performance_changes: "performance_team"
  
  auto_merge_criteria:
    - all_checks_passed: true
    - approved_by_required_reviewers: true
    - no_breaking_changes: true
    - branch_up_to_date: true
```
