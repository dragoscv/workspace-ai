---
mode: agent
---
# Continue Work

## Description
Resume previous work using stored memory context for seamless workflow continuation.

## Usage
Use this prompt to continue working on a project where you left off, leveraging stored context and decisions.

## Prompt
CONTINUE: [project-name]

Resume previous work using stored memory context.

## Context
This prompt activates:
- Memory recall from MemoraiMCP for project context
- Context restoration with previous decisions and plans
- Seamless workflow continuation without starting over
- Previous decisions and plans recovery
- Agent coordination based on stored state

## Examples
```
CONTINUE: TaskMaster
```

```
CONTINUE: EcommerceHub development
```

```
CONTINUE: MigrationProject database work
```

## References
- #file:.github/instructions/initial.instructions.md
- #file:.github/instructions/mcp-usage.instructions.md
- #file:.github/instructions/general.instructions.md

## Expected Output
- Restored project context and current status
- Summary of previous work and decisions
- Updated project plan with next steps
- Identification of pending tasks and blockers
- Seamless continuation of development workflow
- Progress report with completed milestones
