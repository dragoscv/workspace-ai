---
mode: agent
---
# Save State

## Description
Store current project state and decisions for future reference and seamless handoffs.

## Usage
Use this prompt to save project progress, decisions, and context for future work sessions or team handoffs.

## Prompt
SAVE STATE: [project-name]

Store current project state and decisions for future reference.

## Context
This prompt activates:
- Memory storage in MemoraiMCP with structured data
- Context preservation for future sessions
- Decision documentation with rationale
- Handoff preparation for other agents or team members
- Progress tracking and milestone recording

## Examples
```
SAVE STATE: TaskMaster development progress
```

```
SAVE STATE: EcommerceHub architecture decisions
```

```
SAVE STATE: MigrationProject current status and blockers
```

## References
- #file:E:/GitHub/workspace-ai/.github/instructions/initial.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/mcp-usage.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/project-manager-agent.instructions.md

## Expected Output
- Comprehensive project state documentation
- Decision log with rationale and trade-offs
- Progress summary with completed milestones
- Identified blockers and risk factors
- Next steps and priority recommendations
- Team handoff documentation if applicable

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.