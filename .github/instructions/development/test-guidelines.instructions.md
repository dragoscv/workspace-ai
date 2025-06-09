---
applyTo: "**"
---

# Test Generation Guidelines for Copilot Agent

Use these guidelines to generate, validate, or suggest improvements for automated tests across all projects.

General Principles

* Every new feature or logic branch must have associated test coverage.
* Tests should be deterministic, repeatable, and easy to understand.
* Use descriptive names that clearly state the behavior being tested.

Test Types

* Unit Tests: Focused, fast tests for individual functions, hooks, or components.
* Integration Tests: Validate the interaction between multiple parts (e.g., API + logic).
* E2E Tests: Simulate user flows using tools like Playwright.

Frameworks and Tools

* Use Jest or Vitest for unit and integration tests.
* Use Playwright for E2E tests.
* Use Testing Library for UI testing in React or Next.js.
* Use MCP servers (like PlaywrightMCPServer) where available to automate test generation.

Test Structure

* Name tests with the pattern: should do X when Y
* Organize tests by feature, not by file type.
* Keep test files colocated with source files if project conventions allow.

Examples

* should return null when input is undefined
* should redirect to login if user is not authenticated
* should render submit button with correct label

Best Practices

* Use mock functions to isolate external dependencies.
* Avoid mocking too much; aim for realistic behavior when possible.
* Test both expected and edge cases.
* Prefer data-testids for UI selectors to avoid brittle tests.
* Use setup/teardown hooks for shared configuration.

Coverage and Quality

* Aim for at least 80% coverage on new logic and components.
* Flag missing or redundant tests during review.
* Check for flaky or timing-sensitive tests and improve stability.

Agent Behavior Notes

* **MEMORY-AWARE TESTING**: Check memory for existing test plans, patterns, and testing context before generating new tests
* **STORE TEST STRATEGIES**: Preserve important testing approaches and patterns in memory for consistency across projects
* Automatically generate relevant tests based on code changes, context, and stored testing guidelines
* Use MCP servers (like PlaywrightMCPServer and MemoryMCPServer) to enhance accuracy and coverage of generated tests
* Suggest improvements to existing tests where applicable, referencing stored best practices
* When in doubt, add a test that proves the feature works or a bug is fixed
* If a test is not needed, explain why it can be skipped or removed based on stored testing principles