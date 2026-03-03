---
name: fix-issue
description: Fix a GitHub issue by analyzing, implementing, and testing the solution systematically.
disable-model-invocation: true
argument-hint: "[issue-number-or-description]"
---

# Fix Issue

Fix the issue: **$ARGUMENTS**

## Process

### 1. Understand the Issue
- Read the issue description and any linked discussions
- Identify the expected behavior vs actual behavior
- Determine the scope: what files and modules are affected
- Check for related issues or PRs

### 2. Reproduce (if applicable)
- Set up the conditions to reproduce the bug
- Use Next.js DevTools MCP when available for route context and unified logs
- Verify the issue exists with a failing test if possible
- Document the reproduction steps

### 3. Root Cause Analysis
- Trace the code path involved
- Identify the root cause, not just the symptom
- Check if the same issue exists elsewhere in the codebase

### 4. Plan the Fix
- Design the minimal change that addresses the root cause
- Consider edge cases and side effects
- Ensure the fix doesn't break existing functionality

### 5. Implement
- Write a failing test that captures the bug (TDD)
- Implement the fix
- Keep the change focused; don't mix in unrelated improvements
- Follow existing code patterns and conventions

### 6. Verify
- Run the new test to confirm it passes
- Run the full test suite to check for regressions
- Test edge cases manually if needed
- Run linting and type checking

### 7. Commit
- Use conventional commit format: `fix(scope): description (Fixes #issue-number)`
- Include context in the commit body if the change is non-trivial
