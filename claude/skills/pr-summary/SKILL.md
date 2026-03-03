---
name: pr-summary
description: Summarize changes in a pull request with impact analysis and review notes. Use when creating PR descriptions, reviewing PR diffs, or preparing release notes.
---

# PR Summary

Summarize the current pull request changes.

## Gather Context

Collect PR information:
- PR diff: !`gh pr diff`
- PR metadata: !`gh pr view`
- Changed files list: !`gh pr diff --name-only`

## Analysis Structure

### 1. Overview
- One-paragraph summary of what this PR accomplishes
- Motivation: why this change is needed

### 2. Changes Breakdown
Categorize changes by type:
- **Features**: new user-facing functionality
- **Bug Fixes**: issues resolved
- **Refactoring**: structural improvements without behavior change
- **Tests**: new or modified tests
- **Configuration**: build, CI, or config changes
- **Documentation**: doc additions or updates

### 3. Key Files Changed
List the most important files with a brief description of what changed and why.

### 4. Impact Analysis
- **Breaking changes**: anything that breaks existing APIs or behavior
- **Performance**: any expected performance impact (positive or negative)
- **Security**: any security-relevant changes
- **Database**: any schema changes or migrations

### 5. Review Focus Areas
Highlight areas that need careful review attention.

### 6. Testing
- What tests were added or modified
- How to manually test the changes
- Any areas lacking test coverage

## Output Format

```markdown
## Summary
[One-paragraph overview]

## Changes
- feat: [description]
- fix: [description]

## Key Files
| File | Change |
|------|--------|
| path/file | description |

## Impact
- Breaking: [none / description]
- Performance: [none / description]
- Security: [none / description]

## Review Focus
- [area that needs careful review]

## Testing
- [how to verify the changes]
```
