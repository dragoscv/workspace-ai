---
mode: agent
---
# Plan Sprint

## Description
Create sprint backlog with user stories, acceptance criteria, and resource allocation planning.

## Usage
Use this prompt to plan development sprints with proper story breakdown and estimation.

## Prompt
PLAN SPRINT: [duration] for [project-name]

Create sprint backlog with user stories and acceptance criteria.

## Context
This prompt activates:
- Product Manager Agent for requirement definition
- Project Manager for coordination and timeline management
- User story creation with Definition of Done (DoD)
- Resource allocation and timeline planning
- Integration with agile development practices

## Examples
```
PLAN SPRINT: 2-week sprint for TaskMaster MVP
```

```
PLAN SPRINT: 3-week sprint for EcommerceHub payment integration
```

```
PLAN SPRINT: 1-week sprint for critical bug fixes in ProductionApp
```

## References
- #file:.github/instructions/product-manager-agent.instructions.md
- #file:.github/instructions/project-manager-agent.instructions.md
- #file:.github/instructions/multi-agent-coordination.instructions.md

## Expected Output
- Sprint goal and objectives
- User stories with acceptance criteria
- Task breakdown and estimation
- Resource allocation and capacity planning
- Sprint backlog prioritization
- Risk assessment and mitigation
- Sprint retrospective preparation
- Plan saved as file