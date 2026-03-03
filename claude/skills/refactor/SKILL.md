---
name: refactor
description: Refactor code to improve structure, readability, and maintainability while preserving behavior. Use when code needs cleanup, optimization, architectural improvement, or technical debt reduction.
---

# Refactor Code

Refactor the code at `$ARGUMENTS` to improve its quality while preserving existing behavior.

## Process

### 1. Assess Current State
- Read and understand the existing code thoroughly
- Identify code smells: duplication, long functions, deep nesting, unclear naming, tight coupling
- Check for existing test coverage (refactoring without tests is risky)
- Map dependencies: what uses this code, what does this code depend on

### 2. Plan the Refactoring
- Define clear goals: what specific improvements will be made
- Choose appropriate refactoring techniques:
  - **Extract Function**: break long functions into focused, named pieces
  - **Extract Variable**: name complex expressions for clarity
  - **Inline**: remove unnecessary indirection
  - **Rename**: improve naming to reveal intent
  - **Move**: relocate code to where it logically belongs
  - **Replace Conditional with Polymorphism**: simplify complex branching
  - **Introduce Parameter Object**: group related parameters
- Plan incremental steps; each step should leave the code in a working state

### 3. Ensure Safety Net
- Verify existing tests pass before starting
- Add tests for any untested code paths being refactored
- Each refactoring step should be independently verifiable

### 4. Execute Incrementally
- Make one refactoring change at a time
- Run tests after each change to verify behavior is preserved
- Commit at logical checkpoints so changes can be reviewed individually

### 5. Verify
- All existing tests still pass
- No functionality has changed (unless explicitly requested)
- Code is measurably improved: fewer lines, lower complexity, better naming
- No new warnings from linter or type checker

## Guidelines
- Preserve external behavior; refactoring should be invisible to callers
- Don't mix refactoring with feature changes or bug fixes
- If tests are missing, add them before refactoring
- Follow existing codebase patterns; don't introduce inconsistencies
- Keep the scope focused; resist the urge to "fix everything"
