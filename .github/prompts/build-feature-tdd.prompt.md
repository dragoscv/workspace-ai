---
mode: agent
---
# Build Feature (TDD)

## Description
Implement new features using Test-Driven Development approach with contract-first methodology.

## Usage
Use this prompt for feature development following strict TDD principles.

## Prompt
BUILD FEATURE: [feature-description] for [project-name]

Use TDD approach - tests first, then implementation.

## Context
This prompt activates:
- Feature Builder Agent
- Contract-first development
- Strict TDD workflow (Red → Green → Refactor)
- Git integration with PR workflow

## Examples
```
BUILD FEATURE: user authentication system for TaskMaster
```

```
BUILD FEATURE: real-time notifications for EcommerceHub
```

## References
- #file:.github/instructions/feature-builder.instructions.md
- #file:.github/instructions/core.instructions.md
- #file:.github/instructions/general.instructions.md

## Expected Output
- Test cases written first
- Minimal implementation to pass tests
- Contract compliance verification
- Git branch and PR creation
- Code coverage validation
- Feature documentation