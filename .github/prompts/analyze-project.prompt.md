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

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

## Examples
```
ANALYZE PROJECT: ecommerce-platform
```

```
ANALYZE PROJECT: payment-service - Focus on backend architecture, API contracts, and security patterns for upcoming feature development.
```

## References
- #file:E:/GitHub/workspace-ai/.github/instructions/context-aware-selector.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/senior-developer.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/general.instructions.md

## Expected Output
- Project structure analysis
- Technology stack identification
- Architecture overview
- Development workflow assessment
- Next steps recommendations
- Context saved to MemoraiMCP for seamless agent handoff