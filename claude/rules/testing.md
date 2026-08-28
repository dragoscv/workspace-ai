---
paths:
  - "**/*.{test,spec}.{ts,tsx,js,jsx}"
  - "**/tests/**"
  - "**/test/**"
  - "**/__tests__/**"
  - "**/e2e/**"
  - "**/playwright/**"
---

# Testing Strategy

## Approach
- Follow TDD when implementing new features: write failing test → implement → refactor
- Test behavior and outcomes, not implementation details
- Each test must be independent, deterministic, and idempotent
- Aim for minimum 80% coverage on critical business logic

## Naming & Structure
- Test names: `should [expected behavior] when [condition]`
- Group related tests with `describe` blocks matching the module/class under test
- Arrange-Act-Assert (AAA) pattern in every test
- One assertion per test when practical; related assertions are acceptable

## Unit Tests (Vitest 4)
- Use Vitest 4 exclusively; never Jest
- Use Browser Mode for component tests that need real DOM (stable in Vitest 4)
- Use Visual Regression testing for UI-critical components
- Mock external dependencies (APIs, databases, file system)
- Never mock internal module logic; test through the public interface
- Use factories or builders for test data; avoid raw object literals
- Keep tests fast: unit test suite should complete in under 30 seconds
- Use Testing Library (@testing-library/react) for React component tests

## Integration Tests
- Test module interactions and API endpoints
- Use test databases or in-memory alternatives
- Verify request/response contracts
- Clean up test state after each test

## End-to-End Tests (Playwright)
- Use `data-testid` attributes for element selectors; avoid CSS selectors
- Test critical user flows: authentication, core features, payment flows
- Keep E2E tests stable: use explicit waits, avoid timing-based assertions
- Run E2E in CI against a preview/staging environment

## Coverage
- Measure coverage but don't chase 100%; focus on critical paths
- Uncovered code should be a conscious decision, not an oversight
- Coverage reports in CI; block merges that drop below threshold
