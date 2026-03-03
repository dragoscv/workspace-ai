---
name: code-review
description: Review code for quality, security, performance, and adherence to best practices. Use when the user asks to review a PR, audit code, check code quality, or wants a second opinion on their implementation.
---

# Code Review

Review the code at `$ARGUMENTS` systematically using the checklist below. Provide actionable feedback organized by severity (critical → suggestion).

## Review Checklist

### 1. Security
- [ ] No hardcoded secrets, API keys, or credentials
- [ ] User inputs validated and sanitized
- [ ] No SQL injection, XSS, or command injection vectors
- [ ] Authentication and authorization properly enforced
- [ ] Sensitive data not logged or exposed in error messages

### 2. Correctness
- [ ] Logic handles edge cases (null, empty, boundary values)
- [ ] Error handling is explicit and appropriate
- [ ] Async operations properly awaited; no unhandled promises
- [ ] No race conditions or shared mutable state issues
- [ ] Types are correct and specific (no `any`)

### 3. Performance
- [ ] No N+1 queries or unnecessary database calls
- [ ] No memory leaks (event listeners cleaned up, subscriptions unsubscribed)
- [ ] Large data sets paginated or streamed
- [ ] Expensive computations memoized or cached where appropriate
- [ ] No blocking operations on the main thread

### 4. Code Quality
- [ ] Functions are focused (single responsibility, under 50 lines)
- [ ] No deeply nested logic (max 3 levels)
- [ ] Meaningful naming; code reads like prose
- [ ] No dead code, commented-out code, or TODO without issue reference
- [ ] DRY: no unnecessary duplication

### 5. Testing
- [ ] New behavior has corresponding tests
- [ ] Tests verify behavior, not implementation
- [ ] Edge cases tested
- [ ] Test names describe expected behavior

### 6. Maintainability
- [ ] Changes are consistent with existing codebase patterns
- [ ] No unnecessary abstractions or over-engineering
- [ ] Dependencies are justified and audited
- [ ] Breaking changes documented

### 7. Stack Compliance (Next.js 16+)
- [ ] Uses `proxy.ts` not `middleware.ts` for route interception
- [ ] Uses identity columns not `serial` for new Drizzle schemas
- [ ] Server Actions validate inputs with Zod before mutations
- [ ] Uses `"use cache"` directive instead of old caching APIs
- [ ] Uses ESLint flat config (`eslint.config.mjs`), not `.eslintrc`
- [ ] Simple forms use `useActionState`, not always react-hook-form

## Output Format

```
## Code Review: [file/path]

### Critical Issues (must fix)
- **[Category]**: Description → Suggested fix

### Warnings (should fix)
- **[Category]**: Description → Suggested fix

### Suggestions (nice to have)
- **[Category]**: Description → Suggested improvement

### Positive Notes
- What was done well
```
