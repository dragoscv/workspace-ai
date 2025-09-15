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
- #file:E:/GitHub/workspace-ai/.github/instructions/product-manager-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/project-manager-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/multi-agent-coordination.instructions.md

## Expected Output
- Sprint goal and objectives
- User stories with acceptance criteria
- Task breakdown and estimation
- Resource allocation and capacity planning
- Sprint backlog prioritization
- Risk assessment and mitigation
- Sprint retrospective preparation
- Plan saved as file

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.