---
mode: agent
---
# Analyze Project

## Description
Comprehensive project analysis prompt that understands the codebase, architecture, and prepares workspace for other agents to continue development.

## Usage
Use this prompt to analyze existing monorepo projects or when joining a new codebase.

## Prompt
ANALYZE PROJECT: [project-name]

Understand the codebase, architecture, and prepare workspace for other agents to continue development.

## Context
This prompt activates:
- Context-Aware Selector for optimal agent selection
- Senior Developer + Project Manager combination
- Complete codebase analysis and documentation
- Memory context preparation for other agents

## Examples
```
ANALYZE PROJECT: ecommerce-platform
```

```
ANALYZE PROJECT: payment-service - Focus on backend architecture, API contracts, and security patterns for upcoming feature development.
```

## References
- #file:.github/instructions/context-aware-selector.instructions.md
- #file:.github/instructions/senior-developer.instructions.md
- #file:.github/instructions/general.instructions.md

## Expected Output
- Project structure analysis
- Technology stack identification
- Architecture overview
- Development workflow assessment
- Next steps recommendations
- Context saved to MemoraiMCP for seamless agent handoff