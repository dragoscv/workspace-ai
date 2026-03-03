---
name: test-generator
description: Generate comprehensive tests for code including unit tests, integration tests, and edge cases. Use when adding test coverage, implementing TDD, or when the user asks to write tests for existing code.
---

# Test Generator

Generate comprehensive tests for: **$ARGUMENTS**

## Process

### 1. Analyze the Code
- Read the code to understand its purpose, inputs, outputs, and side effects
- Identify the public API (what should be tested through its interface)
- Map dependencies that need mocking
- Identify edge cases or boundary conditions

### 2. Determine Test Types Needed
- **Unit tests**: for pure functions, business logic, utilities
- **Component tests**: Vitest 4 Browser Mode for real DOM testing; visual regression for UI-critical components
- **Integration tests**: for API endpoints, database operations, module interactions
- **E2E tests**: for critical user flows (only when explicitly requested)

### 3. Generate Tests

#### Unit Tests (Vitest/Jest)
```typescript
import { describe, it, expect, vi } from 'vitest';

describe('ModuleName', () => {
  describe('functionName', () => {
    it('should [expected behavior] when [condition]', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

#### Test Cases to Cover
- **Happy path**: normal expected usage with valid inputs
- **Edge cases**: empty inputs, null/undefined, boundary values, max/min
- **Error cases**: invalid inputs, network failures, timeout scenarios
- **Type safety**: ensure TypeScript types are enforced correctly

### 4. Quality Checks
- Each test is independent and can run in isolation
- No test depends on execution order
- Mocks are properly cleaned up between tests
- Test names clearly describe the scenario being tested
- Assertions are specific (prefer `toEqual` over `toBeTruthy`)

## Guidelines
- Test behavior, not implementation; tests should survive refactoring
- One logical assertion per test (related assertions on the same outcome are fine)
- Use test data builders or factories; avoid raw object literals
- Mock external boundaries (APIs, database, file system); never mock internal logic
- Include comments explaining non-obvious test setups
