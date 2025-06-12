---
applyTo: "**"
---

# 🧠 Copilot Agent Instruction Manual

## Overview
This document serves as the foundational instruction manual for GitHub Copilot AI agents, establishing universal standards for code quality, architecture, security, and development practices across all projects. It provides comprehensive guidelines for memory management, testing strategies, accessibility compliance, and collaborative development processes to ensure consistent, high-quality outputs and seamless team coordination.

This document defines the expected behavior, design principles, and generation patterns for the GitHub Copilot Agent across all projects. Before doing something, always check the memory mcp tool for existing context and instructions. Always use vscode tasks to start or check running dev servers, build packages, and run tests. If a task is not available, think and create tasks.

---

## 💡 Code Quality & Architecture

- Follow principles like:
  - **DRY** (Don’t Repeat Yourself)
  - **KISS** (Keep It Simple, Stupid)
  - **YAGNI** (You Aren’t Gonna Need It)
  - **SOLID** (Object-oriented design principles)
- Avoid deeply nested logic and duplicated patterns.
- Ensure all TypeScript code uses strict typing (`noImplicitAny`, `noUnusedLocals`, etc.).

---

## 🎨 Styling & UI Guidelines

- Prefer **Tailwind CSS** (utility-first, responsive, animated).
- Use CSS structuring practices like **BEM**, **SMACSS**, or **OOCSS** where applicable.
- Integrate **Framer Motion** and **Tailwind Animate** for transitions and effects.
- Maintain **light/dark mode**, responsive design, and custom themes.

---

## ⚙️ Tooling & Configuration

- Use `.env` files for all environment-specific variables.
- Ensure `.gitignore` covers common secrets and build artifacts.
- Automatically apply best practices from:
  - `next-safe-env` for environment variables
  - `zod` for schema validation
  - `pnpm` workspaces (if monorepo)

---

## 🔍 Accessibility & SEO

- Adhere to **ARIA** and **WCAG 2.1** accessibility standards.
- Structure pages with semantic HTML and include:
  - Descriptive `meta` tags
  - Schema.org structured data
  - Optimized Open Graph metadata

---

## 🔐 Security Best Practices

- Always sanitize user inputs.
- Validate form data both client-side and server-side.
- Avoid exposing secrets or tokens in client code.

---

## 🧪 Testing Strategy

### Testing Framework Setup
- Generate tests using:
  - **Playwright** for end-to-end tests
  - **Jest/Vitest** for unit tests
- Follow **TDD** and **BDD** methodologies where relevant.
- Aim for minimum **80% coverage** on all critical logic.
- Use `PlaywrightMCPServer` where available to automate UI test generation.

### Unit Testing Example
```typescript
// User service unit test
import { describe, it, expect, vi } from 'vitest';
import { UserService } from '../src/services/UserService';
import { UserRepository } from '../src/repositories/UserRepository';

describe('UserService', () => {
  const mockRepository = {
    findById: vi.fn(),
    save: vi.fn(),
    delete: vi.fn()
  } as jest.Mocked<UserRepository>;

  const userService = new UserService(mockRepository);

  it('should create user successfully', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const expectedUser = { id: '1', ...userData };
    
    mockRepository.save.mockResolvedValue(expectedUser);
    
    const result = await userService.createUser(userData);
    
    expect(result).toEqual(expectedUser);
    expect(mockRepository.save).toHaveBeenCalledWith(userData);
  });
});
```

### Integration Testing Example
```typescript
// API integration test
import { test, expect } from '@playwright/test';

test.describe('User API', () => {
  test('should create and retrieve user', async ({ request }) => {
    // Create user
    const createResponse = await request.post('/api/users', {
      data: {
        name: 'Test User',
        email: 'test@example.com'
      }
    });
    
    expect(createResponse.ok()).toBeTruthy();
    const user = await createResponse.json();
    
    // Retrieve user
    const getResponse = await request.get(`/api/users/${user.id}`);
    expect(getResponse.ok()).toBeTruthy();
    
    const retrievedUser = await getResponse.json();
    expect(retrievedUser.name).toBe('Test User');
  });
});
```

### E2E Testing Example
```typescript
// End-to-end user flow test
import { test, expect } from '@playwright/test';

test('complete user registration flow', async ({ page }) => {
  // Navigate to registration page
  await page.goto('/register');
  
  // Fill registration form
  await page.fill('[data-testid="name-input"]', 'John Doe');
  await page.fill('[data-testid="email-input"]', 'john@example.com');
  await page.fill('[data-testid="password-input"]', 'securePassword123');
  
  // Submit form
  await page.click('[data-testid="submit-button"]');
  
  // Verify success
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  await expect(page).toHaveURL('/dashboard');
});
```

---

## 🔧 Debugging & Development

- Use `console.log()` and `debugger` statements appropriately.
- Auto-fix issues when detected if safe to do so.
- Summarize debugging context where helpful.

---

## 🧠 Memory & Context

- **ALWAYS CHECK MEMORY FIRST**: Before starting any task, use `mcp_memoraimcpser_recall` to check for existing plans, prompts, and task history
- **STORE IMPORTANT CONTEXT**: Store user plans, task lists, and multi-step procedures in memory with entity type 'plan' or 'task_list'
- **PRESERVE PROMPTS**: Keep important user prompts and instructions in memory with entity type 'prompt' or 'user_instructions'
- **MAINTAIN CONTINUITY**: Reference previous work and check for existing plans/prompts before creating new ones
- Use `MemoraiMCPServer` to retain context and optimize completions across files and sessions
- Always consider local file context, open tabs, selection history, and stored memory when generating or editing
- Follow the comprehensive guidelines in `memory-mcp-usage.instructions.md` for proper memory management

---

## 📚 Documentation & PRs

- Ensure `README.md`, `DESCRIPTION.md`, and `.env.example` are always updated.
- When generating pull requests:
  - Include a descriptive title and checklist.
  - Follow format from `pr-guidelines.instructions.md`.
- Always include test coverage with new features.

---

## 🧾 Commit & Review Conventions

- Follow the **Conventional Commits** format:
  - `feat:`, `fix:`, `chore:`, `refactor:`, etc.
- Format PRs and code reviews using these instruction files:
  - `commit-guidelines.instructions.md`
  - `test-guidelines.instructions.md`
  - `code-review.instructions.md`
  - `pr-guidelines.instructions.md`

---

## 🧠 Copilot Agent-Specific Behavior

- Apply behavior defined in this file in all contexts (generation, review, summarization, testing).
- Always check for:
  - Existing project configuration
  - Workspace-specific instructions
  - Instruction `.md` files defined in `settings.json`
- Think critically: if an existing approach is suboptimal, suggest improvements.

---

## 🛠️ Collaboration & Process

- Use Agile and Scrum principles for tasks, branches, and releases.
- Reference GitHub Issues and Projects where relevant.
- Maintain clear commit messages and linked issues.

---

## 🤖 Agent Awareness Summary

Always use:
- `.github/instructions/` files for scoped guidance.
- `MemoraiMCPServer` for context.
- `PlaywrightMCPServer` for test automation.
- The latest experimental Copilot Agent capabilities as defined in global settings.

---

## 📊 Success Metrics & Performance Tracking

### Code Quality Metrics
```typescript
interface QualityMetrics {
  test_coverage: number; // Target: >80%
  type_safety_score: number; // Target: >95%
  code_complexity: number; // Target: <10 cyclomatic complexity
  security_vulnerabilities: number; // Target: 0 high/critical
  performance_score: number; // Target: >90 Lighthouse score
}
```

### Development Velocity Metrics
- **Feature Delivery Time**: Average time from concept to production
- **Bug Resolution Time**: Mean time to resolution for defects
- **Code Review Efficiency**: Time from PR creation to merge
- **Developer Satisfaction**: Team satisfaction with development experience
- **Technical Debt Ratio**: Percentage of effort spent on maintenance vs new features

### Success Criteria
1. **Quality Gates**: All code must pass automated quality checks
2. **Performance Standards**: Applications must meet performance benchmarks
3. **Security Compliance**: Zero tolerance for security vulnerabilities
4. **Accessibility Standards**: WCAG 2.1 AA compliance required
5. **Documentation Coverage**: All public APIs must be documented
6. **Test Coverage**: Minimum 80% code coverage for critical paths

### Continuous Improvement Process
```typescript
// Example metrics tracking implementation
export class MetricsTracker {
  async trackCodeQuality(metrics: QualityMetrics): Promise<void> {
    await this.storeMetrics('code_quality', metrics);
    await this.checkThresholds(metrics);
    await this.generateQualityReport();
  }
  
  async generatePerformanceReport(): Promise<Report> {
    const data = await this.gatherMetrics();
    return this.createReport(data);
  }
}
```

---

## 🎯 Agent Performance Standards

### Response Quality Criteria
- **Accuracy**: Solutions must be technically correct and implementable
- **Completeness**: Responses must address all aspects of the request
- **Clarity**: Communication must be clear and well-structured
- **Efficiency**: Solutions should be optimized for performance and maintainability
- **Best Practices**: All recommendations must follow industry standards

### Continuous Learning Metrics
- **Knowledge Application**: Successful application of best practices
- **Problem Resolution**: Speed and accuracy of problem-solving
- **Innovation**: Introduction of improved approaches and techniques
- **Collaboration**: Effectiveness in multi-agent scenarios
- **Adaptability**: Ability to work across different project contexts

