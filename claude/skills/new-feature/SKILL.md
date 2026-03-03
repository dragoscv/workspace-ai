---
name: new-feature
description: Implement a new feature following TDD and vertical slice approach with proper planning and testing.
disable-model-invocation: true
argument-hint: "[feature-description]"
---

# New Feature Implementation

Implement the following feature: **$ARGUMENTS**

## Process

### 1. Requirements Analysis
- Understand the feature requirements completely
- Identify acceptance criteria: what does "done" look like?
- Map out the affected areas: UI, API, database, business logic
- Identify dependencies on existing code or external services
- Check for existing patterns in the codebase to follow

### 2. Design
- Define the API contract first (interfaces, types, endpoints)
- Plan the data model (if new entities or schema changes needed)
- Sketch the component/module structure
- Identify what needs to be created vs modified
- Keep design minimal; meet requirements without over-engineering
- Decide caching strategy: default dynamic, use `"use cache"` for cacheable routes
- Choose form approach: `useActionState` for simple forms, react-hook-form for complex ones

### 3. Implementation Plan
Break the feature into small vertical slices (each delivers end-to-end value):

```
Slice 1: [minimal working version]
  - Define types/interfaces
  - Write tests for core logic
  - Implement core business logic
  
Slice 2: [add API layer]
  - Write API endpoint tests
  - Implement API endpoint
  - Add input validation
  
Slice 3: [add UI]
  - Write component tests
  - Implement UI components
  - Connect to API
  
Slice 4: [polish]
  - Error handling and edge cases
  - Loading states and feedback
  - Documentation
```

### 4. Implement with TDD
For each slice:
1. Write a failing test that defines the expected behavior
2. Write the minimum code to make the test pass
3. Refactor while keeping tests green
4. Move to the next test case

### 5. Quality Checks
- [ ] All acceptance criteria met
- [ ] Tests cover happy path, edge cases, and error cases
- [ ] Types are strict and complete
- [ ] Error handling is appropriate
- [ ] Accessibility requirements met (if UI)
- [ ] No security issues introduced
- [ ] Server Actions validate all inputs with Zod
- [ ] Uses `proxy.ts` (not middleware.ts) for route protection
- [ ] Documentation updated
- [ ] Linting and type checking pass

### 6. Commit
- Commit each slice separately with conventional commit messages
- `feat(scope): description` for the feature
- Reference the issue or ticket number
