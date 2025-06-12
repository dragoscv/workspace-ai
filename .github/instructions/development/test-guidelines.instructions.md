---
applyTo: "**"
---

# Test Generation Guidelines for Copilot Agent

## Overview
Comprehensive testing guidelines for AI agents to generate, validate, and improve automated tests across all project types. These guidelines ensure consistent test quality, maintainable test suites, and effective coverage strategies while integrating memory management for continuous improvement of testing approaches.

## Memory Management - CHECK FIRST

### MANDATORY: Search Memory Before Test Generation
```typescript
// Search for existing test patterns and strategies
await searchMemory("test_strategy project_type [specific_type]");
await searchMemory("testing_patterns [framework_name]");
await searchMemory("test_coverage metrics [project_context]");
await searchMemory("testing_best_practices [domain]");
```

### Store Testing Insights and Patterns
```typescript
// Store test strategies and effectiveness
await createEntity({
  name: "[ProjectName] Testing Strategy",
  entityType: "test_strategy",
  observations: [
    "Testing framework: [framework] for project type: [type]",
    "Coverage achieved: [percentage] across [modules]",
    "Test patterns used: [list effective patterns]",
    "Performance insights: [test execution times, bottlenecks]",
    "Quality metrics: [flaky test rate, maintenance overhead]"
  ]
});

// Track test automation success
await createEntity({
  name: "[Feature] Test Automation",
  entityType: "test_automation",
  observations: [
    "Test generation approach: [method used]",
    "Coverage analysis: [areas tested, gaps identified]",
    "Automation effectiveness: [time saved, quality improved]",
    "Maintenance requirements: [ongoing effort needed]"
  ]
});
```

### Testing Memory Structure
```typescript
interface TestingMemoryStructure {
  test_strategies: {
    framework_patterns: "Effective patterns for each testing framework",
    coverage_strategies: "Approaches for achieving comprehensive coverage",
    performance_optimization: "Techniques for fast, reliable test execution"
  },
  test_automation: {
    generation_patterns: "Successful test generation approaches",
    maintenance_insights: "Strategies for sustainable test suites",
    quality_metrics: "Historical test quality and effectiveness data"
  },
  domain_expertise: {
    testing_approaches: "Domain-specific testing strategies",
    edge_case_patterns: "Common edge cases and testing approaches",
    integration_strategies: "Effective integration testing patterns"
  }
}
```

Use these guidelines to generate, validate, or suggest improvements for automated tests across all projects.

## General Principles

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
* Use MCP servers (like PlaywrightMCPServer and MemoraiMCPServer) to enhance accuracy and coverage of generated tests
* Suggest improvements to existing tests where applicable, referencing stored best practices
* When in doubt, add a test that proves the feature works or a bug is fixed
* If a test is not needed, explain why it can be skipped or removed based on stored testing principles

## 🔧 Advanced Testing Examples

### Test-Driven Development Pattern
```typescript
// 1. Write failing test first
describe('UserValidator', () => {
  it('should validate email format correctly', () => {
    const validator = new UserValidator();
    
    expect(validator.isValidEmail('test@example.com')).toBe(true);
    expect(validator.isValidEmail('invalid-email')).toBe(false);
    expect(validator.isValidEmail('')).toBe(false);
    expect(validator.isValidEmail(null)).toBe(false);
  });
});

// 2. Implement minimal code to pass
export class UserValidator {
  isValidEmail(email: string | null): boolean {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// 3. Refactor with confidence
```

### Comprehensive Component Testing
```typescript
// React component testing with multiple scenarios
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserForm } from '../UserForm';
import { mockApiCall } from '../__mocks__/api';

describe('UserForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render form fields correctly', () => {
    render(<UserForm />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should show validation errors for invalid input', async () => {
    render(<UserForm />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });
  });

  it('should submit form with valid data', async () => {
    mockApiCall.mockResolvedValue({ success: true });
    
    render(<UserForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(mockApiCall).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com'
      });
    });
  });
});
```

### API Testing with Error Scenarios
```typescript
// Comprehensive API testing with error handling
import { test, expect } from '@playwright/test';

test.describe('User API Error Handling', () => {
  test('should handle validation errors gracefully', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: {
        name: '', // Invalid: empty name
        email: 'invalid-email' // Invalid: bad format
      }
    });
    
    expect(response.status()).toBe(400);
    
    const error = await response.json();
    expect(error.errors).toContain('Name is required');
    expect(error.errors).toContain('Invalid email format');
  });

  test('should handle duplicate email conflict', async ({ request }) => {
    // Create first user
    await request.post('/api/users', {
      data: {
        name: 'First User',
        email: 'duplicate@example.com'
      }
    });
    
    // Attempt to create duplicate
    const response = await request.post('/api/users', {
      data: {
        name: 'Second User',
        email: 'duplicate@example.com'
      }
    });
    
    expect(response.status()).toBe(409);
    const error = await response.json();
    expect(error.message).toContain('Email already exists');
  });

  test('should handle server errors with proper response', async ({ request }) => {
    // Mock server error condition
    const response = await request.post('/api/users', {
      data: {
        name: 'Test User',
        email: 'trigger-server-error@example.com'
      }
    });
    
    expect(response.status()).toBe(500);
    const error = await response.json();
    expect(error.message).toBe('Internal server error');
    expect(error.requestId).toBeDefined(); // For debugging
  });
});
```

### Performance Testing Example
```typescript
// Performance and load testing
import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should handle concurrent user creation', async ({ browser }) => {
    const contexts = await Promise.all([
      browser.newContext(),
      browser.newContext(),
      browser.newContext()
    ]);
    
    const results = await Promise.all(
      contexts.map(async (context, index) => {
        const page = await context.newPage();
        const startTime = Date.now();
        
        const response = await page.request.post('/api/users', {
          data: {
            name: `User ${index}`,
            email: `user${index}@example.com`
          }
        });
        
        const endTime = Date.now();
        await context.close();
        
        return {
          status: response.status(),
          responseTime: endTime - startTime
        };
      })
    );
    
    // Verify all requests succeeded
    results.forEach(result => {
      expect(result.status).toBe(201);
      expect(result.responseTime).toBeLessThan(5000); // 5 second max
    });
    
    // Verify average response time
    const avgResponseTime = results.reduce((sum, r) => sum + r.responseTime, 0) / results.length;
    expect(avgResponseTime).toBeLessThan(2000); // 2 second average
  });
});
```

## 📊 Testing Success Metrics

### Coverage Metrics
```typescript
interface TestCoverageMetrics {
  statement_coverage: number; // Target: >80%
  branch_coverage: number; // Target: >75%
  function_coverage: number; // Target: >90%
  line_coverage: number; // Target: >80%
  uncovered_lines: string[]; // For targeted improvement
}
```

### Quality Metrics
```typescript
interface TestQualityMetrics {
  test_reliability: number; // Target: >95% non-flaky
  execution_speed: number; // Target: <30s for unit tests
  maintenance_overhead: number; // Target: <20% of dev time
  bug_detection_rate: number; // Target: >80% of bugs caught
  false_positive_rate: number; // Target: <5%
}
```

### Test Effectiveness Tracking
```typescript
// Example metrics collection
export class TestMetricsCollector {
  async trackTestRun(results: TestResults): Promise<void> {
    const metrics = {
      total_tests: results.total,
      passed_tests: results.passed,
      failed_tests: results.failed,
      execution_time: results.duration,
      coverage: results.coverage,
      timestamp: new Date()
    };
    
    await this.storeMetrics('test_execution', metrics);
    await this.updateTrends(metrics);
    await this.generateReport();
  }
}
```

### Continuous Improvement Process
1. **Daily Metrics**: Track test execution times and failure rates
2. **Weekly Reviews**: Analyze flaky tests and coverage gaps
3. **Monthly Assessments**: Evaluate test suite maintainability
4. **Quarterly Planning**: Set testing strategy improvements
5. **Annual Reviews**: Assess overall testing effectiveness and ROI

## 🎯 Test Automation Success Criteria

### Automation Goals
- **Speed**: Unit tests complete in <30 seconds
- **Reliability**: <2% flaky test rate
- **Coverage**: >80% code coverage on critical paths
- **Maintainability**: Test updates require <20% additional effort
- **Detection**: >90% of bugs caught before production

### Quality Gates
- All new features must include comprehensive tests
- No reduction in overall test coverage
- All tests must pass before merge
- Performance regression tests for critical paths
- Security testing for authentication and data handling
