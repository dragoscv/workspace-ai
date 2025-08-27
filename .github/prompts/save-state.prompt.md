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
- #file:.github/instructions/initial.instructions.md
- #file:.github/instructions/mcp-usage.instructions.md
- #file:.github/instructions/project-manager-agent.instructions.md

## Expected Output
- Comprehensive project state documentation
- Decision log with rationale and trade-offs
- Progress summary with completed milestones
- Identified blockers and risk factors
- Next steps and priority recommendations
- Team handoff documentation if applicable