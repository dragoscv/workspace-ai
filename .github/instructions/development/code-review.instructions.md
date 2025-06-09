---
applyTo: "**"
---

# 🔍 Code Review Instructions for Copilot Agent

## Overview
The Code Review Instructions provide a comprehensive framework for conducting thorough, consistent, and constructive code reviews that maintain high code quality standards while fostering team collaboration and knowledge sharing. This system ensures that all code changes meet functional, quality, security, and performance requirements before integration.

The framework establishes systematic review criteria covering functional correctness, code clarity, security considerations, performance impact, and architectural consistency. By following these guidelines, reviewers can provide valuable feedback that improves code quality, reduces technical debt, and ensures maintainable, scalable software solutions.

## Memory Management - CHECK FIRST
Before conducting code reviews, ALWAYS:
1. **Check review patterns**: `mcp_memorymcpserv_search_nodes("code_review patterns standards")`
2. **Reference project guidelines**: `mcp_memorymcpserv_search_nodes("coding_standards project_conventions")`
3. **Search for similar reviews**: `mcp_memorymcpserv_search_nodes("review_feedback similar_issues")`
4. **Store effective feedback**: Save helpful review comments with entity type `'review_template'` or `'review_pattern'`
5. **Track common issues**: Maintain patterns of frequent issues with entity type `'code_quality_issues'`

These guidelines define what to check, how to suggest improvements, and when to reject or flag changes during code review.

---

## ✅ Functional Correctness

- Ensure the code performs its intended function without runtime errors.
- Validate all branches and edge cases are covered.
- Confirm that the logic matches the purpose described in comments, docstrings, or commit messages.

### Code Review Automation Framework
```typescript
interface CodeReviewCriteria {
  functionalCorrectness: {
    logicValidation: boolean;
    edgeCasesCovered: boolean;
    errorHandling: boolean;
    performanceImpact: 'none' | 'minimal' | 'moderate' | 'significant';
  };
  codeQuality: {
    readability: number; // 1-10 score
    maintainability: number;
    complexity: 'low' | 'medium' | 'high';
    testCoverage: number; // percentage
  };
  security: {
    vulnerabilities: string[];
    dataExposure: boolean;
    authenticationChecks: boolean;
    inputValidation: boolean;
  };
  standards: {
    styleCompliance: boolean;
    conventionsFollowed: boolean;
    documentationAdequate: boolean;
    breakingChanges: boolean;
  };
}

// Example automated review analysis
function analyzeCodeChange(diff: GitDiff): CodeReviewCriteria {
  return {
    functionalCorrectness: {
      logicValidation: validateLogic(diff.changes),
      edgeCasesCovered: checkEdgeCases(diff.changes),
      errorHandling: hasProperErrorHandling(diff.changes),
      performanceImpact: assessPerformanceImpact(diff.changes)
    },
    codeQuality: {
      readability: calculateReadabilityScore(diff.changes),
      maintainability: assessMaintainability(diff.changes),
      complexity: calculateComplexity(diff.changes),
      testCoverage: calculateTestCoverage(diff.files)
    },
    security: {
      vulnerabilities: scanSecurityIssues(diff.changes),
      dataExposure: checkDataExposure(diff.changes),
      authenticationChecks: validateAuthChecks(diff.changes),
      inputValidation: checkInputValidation(diff.changes)
    },
    standards: {
      styleCompliance: checkStyleCompliance(diff.changes),
      conventionsFollowed: validateConventions(diff.changes),
      documentationAdequate: checkDocumentation(diff.changes),
      breakingChanges: detectBreakingChanges(diff.changes)
    }
  };
}
```

---

## 🧠 Code Clarity & Readability

- Prioritize clarity over cleverness.
- Prefer descriptive variable and function names (`userSession` > `us`).
- Check for overly nested structures — suggest flattening when possible.
- Avoid unnecessary complexity or premature abstractions.

---

## 🧹 Clean Code Practices

- No unused imports, variables, functions, or props.
- No commented-out blocks of code (unless temporarily marked with a clear `TODO:` or `FIXME:`).
- No `any` types in TypeScript unless explicitly justified.
- No inline magic numbers or string literals — extract as constants or enums.

---

## 💡 Consistency

- Follow project-specific naming conventions, spacing, and code formatting.
- Ensure consistent use of:
  - Async/await vs Promises
  - Function declarations vs arrow functions
  - Imports (absolute vs relative paths)
- Match existing project patterns unless there's a clear reason to deviate.

---

## 🧪 Tests

- Confirm that new or modified code is tested.

### Advanced Code Review Checklist
```yaml
# Comprehensive Code Review Checklist
code_review_checklist:
  functional_requirements:
    - requirement_fulfillment: "Does the code meet the stated requirements?"
    - business_logic: "Is the business logic correct and complete?"
    - edge_cases: "Are edge cases properly handled?"
    - error_scenarios: "Are error scenarios covered?"
    
  code_quality:
    - readability: "Is the code easy to read and understand?"
    - maintainability: "Can the code be easily modified in the future?"
    - reusability: "Are there opportunities for code reuse?"
    - complexity: "Is the code complexity appropriate?"
    
  security_review:
    - input_validation: "Is all user input properly validated?"
    - authentication: "Are authentication checks in place?"
    - authorization: "Are authorization controls correct?"
    - data_exposure: "Is sensitive data properly protected?"
    - injection_attacks: "Is the code protected against injection attacks?"
    
  performance_analysis:
    - algorithm_efficiency: "Are algorithms efficient for expected load?"
    - memory_usage: "Is memory usage optimized?"
    - database_queries: "Are database queries optimized?"
    - caching_strategy: "Is caching used appropriately?"
    
  testing_coverage:
    - unit_tests: "Are unit tests present and comprehensive?"
    - integration_tests: "Are integration points tested?"
    - end_to_end_tests: "Are critical user flows tested?"
    - test_quality: "Are tests maintainable and reliable?"
    
  documentation:
    - code_comments: "Are complex sections properly commented?"
    - api_documentation: "Is API documentation updated?"
    - readme_updates: "Are README files updated if needed?"
    - changelog: "Is the changelog updated for significant changes?"
```

### Smart Review Assistant
```typescript
class CodeReviewAssistant {
  async conductReview(pullRequest: PullRequest): Promise<ReviewReport> {
    const analysis = await this.analyzePR(pullRequest);
    const recommendations = await this.generateRecommendations(analysis);
    const riskAssessment = await this.assessRisk(analysis);
    
    return {
      summary: this.generateSummary(analysis),
      recommendations,
      riskAssessment,
      approvalStatus: this.determineApprovalStatus(analysis),
      requiredActions: this.identifyRequiredActions(analysis)
    };
  }
  
  private async analyzePR(pr: PullRequest): Promise<PRAnalysis> {
    return {
      complexity: this.calculateComplexity(pr.diff),
      testCoverage: await this.getTestCoverage(pr.files),
      securityIssues: await this.scanSecurity(pr.diff),
      performanceImpact: await this.analyzePerformance(pr.diff),
      codeQuality: this.assessCodeQuality(pr.diff),
      breakingChanges: this.detectBreakingChanges(pr.diff)
    };
  }
  
  private generateRecommendations(analysis: PRAnalysis): Recommendation[] {
    const recommendations: Recommendation[] = [];
    
    if (analysis.complexity > 8) {
      recommendations.push({
        type: 'refactor',
        priority: 'high',
        message: 'Consider breaking down complex functions for better maintainability',
        files: analysis.complexFiles
      });
    }
    
    if (analysis.testCoverage < 80) {
      recommendations.push({
        type: 'testing',
        priority: 'medium',
        message: `Test coverage is ${analysis.testCoverage}%. Consider adding more tests.`,
        suggestedTests: this.suggestTests(analysis.untestedCode)
      });
    }
    
    return recommendations;
  }
}

// Example usage
const reviewAssistant = new CodeReviewAssistant();
const reviewReport = await reviewAssistant.conductReview(pullRequest);

console.log(`PR Approval Status: ${reviewReport.approvalStatus}`);
console.log(`Risk Level: ${reviewReport.riskAssessment.level}`);
console.log(`Required Actions: ${reviewReport.requiredActions.length}`);
```

---

## 🧯 Safety & Security

- Flag any usage of `eval`, direct DOM manipulation, or unsafe third-party packages.
- Ensure data is properly validated and sanitized.
- Watch for common security issues (e.g., unescaped output, unvalidated input, overly permissive CORS or access control).

---

## 🎨 Styling & UI (if applicable)

- Confirm UI components are accessible (keyboard nav, ARIA roles, labels).
- Check for responsive behavior (mobile-first layout, safe breakpoints).
- Validate correct use of Tailwind classes and color schemes.

---

## 📦 Performance & Optimization

- Warn against unnecessary re-renders, especially in React.
- Identify large synchronous blocks that could be made async.
- Recommend lazy loading for large components or resources.

---

## 🔄 Suggest Improvements Proactively

- If a better approach or library exists, recommend it.
- Ask clarifying questions in ambiguous situations.
- When possible, auto-suggest fixes or refactors inline.

---

## ❌ Reject When...

- The code introduces obvious bugs or crashes.
- There are serious architecture violations.
- No tests are provided for critical logic.
- The implementation contradicts documented behavior or API contracts.

---

## 📎 Additional Notes

- Always offer context-aware suggestions based on the file structure and imported modules.
- If the repository includes `.github/instructions/`, align with those files for test, commit, and PR guidelines.
- **MEMORY CONTEXT**: Use MCP memory tools to check for existing plans, prompts, and review history before conducting reviews
- **STORE REVIEW INSIGHTS**: Preserve important review findings and patterns in memory for future reference
- If MCP servers are active, use them to gather additional memory or test context for more informed reviews.

---

### Review Feedback Templates
```typescript
interface ReviewFeedback {
  type: 'suggestion' | 'issue' | 'praise' | 'question';
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'logic' | 'style' | 'performance' | 'security' | 'testing';
  message: string;
  codeSnippet?: string;
  suggestedFix?: string;
  lineNumber?: number;
  file?: string;
}

// Example review feedback generation
const reviewFeedbacks: ReviewFeedback[] = [
  {
    type: 'issue',
    severity: 'high',
    category: 'security',
    message: 'SQL injection vulnerability detected',
    codeSnippet: `query = "SELECT * FROM users WHERE id = " + userId`,
    suggestedFix: `query = "SELECT * FROM users WHERE id = ?"
                  params = [userId]`,
    lineNumber: 45,
    file: 'src/services/user.service.ts'
  },
  {
    type: 'suggestion',
    severity: 'medium',
    category: 'performance',
    message: 'Consider using useMemo to optimize expensive calculation',
    codeSnippet: `const expensiveValue = heavyCalculation(data);`,
    suggestedFix: `const expensiveValue = useMemo(() => 
                    heavyCalculation(data), [data]);`,
    lineNumber: 23,
    file: 'src/components/Dashboard.tsx'
  },
  {
    type: 'praise',
    severity: 'low',
    category: 'logic',
    message: 'Excellent error handling with proper user feedback',
    lineNumber: 67,
    file: 'src/utils/api.utils.ts'
  }
];
```

