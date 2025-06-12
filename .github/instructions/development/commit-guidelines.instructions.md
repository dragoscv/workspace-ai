---
applyTo: "**"
---

# Commit Message Guidelines for Copilot Agent

## Overview
The Commit Message Guidelines establish a standardized approach to Git commit messages that enhances code history readability, enables automated tooling, and facilitates efficient collaboration. These guidelines implement Conventional Commits standards to create self-documenting code history that supports automated changelog generation, semantic versioning, and improved development workflows.

The system ensures that every commit message provides clear context about the change's purpose, scope, and impact, making it easier for team members to understand project evolution and for automated tools to process repository history for release management and deployment automation.

## Memory Management - CHECK FIRST
Before creating or reviewing commit messages, ALWAYS:
1. **Search for project patterns**: `mcp_memoraimcpser_recall("commit_patterns project_standards")`
2. **Check previous commits**: `mcp_memoraimcpser_recall("commit_history similar_changes")`
3. **Reference scope conventions**: `mcp_memoraimcpser_recall("commit_scope project_modules")`
4. **Store effective patterns**: Save successful commit formats with entity type `'commit_template'` or `'commit_pattern'`
5. **Track conventions**: Maintain project-specific scopes and standards with entity type `'commit_standards'`

Use these conventions to generate, validate, or suggest improvements for all Git commit messages in this project.

General Principles

* Write clear, concise, and meaningful messages that explain what and why, not how.
* Use the imperative mood (e.g., "Add tests", not "Added tests" or "Adding tests").
* Avoid vague terms like "fix stuff", "update code", "refactor things".

Commit Format

Use the Conventional Commits style:

<type>(<scope>): <short summary>

Optional sections:

<type>(<scope>): <short summary>

\[body — optional, details or reasoning]

\[footer — optional, metadata like BREAKING CHANGE or issue refs]

Common Types

feat: New features or user-facing functionality
fix: Bug fixes or behavior corrections
chore: Non-code tasks (e.g., tooling, config)
docs: Documentation-only changes
style: Formatting, whitespace, no code logic changes
refactor: Internal code changes that don't affect behavior
test: Adding or updating tests
perf: Performance improvements
ci: Changes to CI/CD pipelines
revert: Reverting a previous commit

## Advanced Commit Examples

### Feature Implementation
```bash
feat(auth): implement OAuth2 integration with Google and GitHub

- Add OAuth2 service with provider abstraction
- Implement token refresh and validation
- Add user profile synchronization
- Include comprehensive error handling

Closes #234
BREAKING CHANGE: Legacy session tokens are no longer supported
```

### Bug Fix with Analysis
```bash
fix(api): resolve race condition in concurrent user updates

The previous implementation had a race condition when multiple
requests tried to update user data simultaneously, causing
data corruption.

- Add optimistic locking to user update operations
- Implement retry logic for failed updates
- Add monitoring for concurrent update attempts

Fixes #456
Performance: Reduced update conflicts by 95%
```

### Performance Optimization
```bash
perf(db): optimize user query with database indexing

- Add composite index on (user_id, created_at, status)
- Implement query result caching with 5-minute TTL
- Add query performance monitoring
- Update pagination to use cursor-based approach

Impact: Query time reduced from 2.3s to 45ms (95% improvement)
Refs #789
```

### Refactoring with Architecture Change
```bash
refactor(api): migrate to clean architecture pattern

- Separate business logic from HTTP handlers
- Implement repository pattern for data access
- Add domain entities and use cases
- Improve testability with dependency injection

No breaking changes to public API
Related to technical debt issue #123
```

## Automated Commit Message Generation

### Commit Analysis Framework
```typescript
interface CommitAnalysis {
  type: CommitType;
  scope: string;
  summary: string;
  body?: string;
  footer?: string;
  breakingChange: boolean;
  issueReferences: string[];
  impact: {
    performance?: string;
    security?: string;
    usability?: string;
  };
}

enum CommitType {
  FEAT = 'feat',
  FIX = 'fix',
  DOCS = 'docs',
  STYLE = 'style',
  REFACTOR = 'refactor',
  PERF = 'perf',
  TEST = 'test',
  CHORE = 'chore',
  CI = 'ci',
  REVERT = 'revert'
}

// Example automated commit analysis
function analyzeChanges(diff: GitDiff): CommitAnalysis {
  const analysis: CommitAnalysis = {
    type: inferCommitType(diff.files, diff.changes),
    scope: determineScope(diff.files),
    summary: generateSummary(diff.changes),
    breakingChange: detectBreakingChanges(diff.changes),
    issueReferences: extractIssueReferences(diff.commitMessage),
    impact: analyzeImpact(diff.changes)
  };
  
  return analysis;
}
```

### Smart Commit Generator
```typescript
function generateCommitMessage(analysis: CommitAnalysis): string {
  let message = `${analysis.type}`;
  
  if (analysis.scope) {
    message += `(${analysis.scope})`;
  }
  
  message += `: ${analysis.summary}`;
  
  if (analysis.body) {
    message += `\n\n${analysis.body}`;
  }
  
  if (analysis.footer) {
    message += `\n\n${analysis.footer}`;
  }
  
  if (analysis.breakingChange) {
    message += `\n\nBREAKING CHANGE: ${analysis.impact.description}`;
  }
  
  return message;
}

// Example usage
const commitMessage = generateCommitMessage({
  type: CommitType.FEAT,
  scope: 'auth',
  summary: 'add two-factor authentication support',
  body: `- Implement TOTP-based 2FA with QR code generation
- Add backup codes for account recovery
- Include security audit logging
- Add comprehensive test coverage`,
  footer: 'Closes #567',
  breakingChange: false,
  issueReferences: ['#567'],
  impact: {
    security: 'Enhanced account security with 2FA',
    usability: 'Improved user account protection'
  }
});
```
