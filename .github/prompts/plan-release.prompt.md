---
mode: agent
---
# Plan Release

## Description
Prepare release strategy, testing, and deployment plan with risk assessment and rollback procedures.

## Usage
Use this prompt to plan application releases with comprehensive deployment strategy.

## Prompt
PLAN RELEASE: [version] for [project-name]

Prepare release strategy, testing, and deployment plan.

## Context
This prompt activates:
- Auditor/Release Engineer Agent for release management
- Release strategy (canary → staged → full deployment)
- Risk assessment and rollback planning
- Stakeholder communication plan
- Quality gates and validation procedures

It should use Microsoft Docs MCP for best practices.
It should use web search for latest information.

## Examples
```
PLAN RELEASE: v1.0.0 for TaskMaster
```

```
PLAN RELEASE: v2.1.0 hotfix for EcommerceHub
```

```
PLAN RELEASE: v3.0.0 major version for ProductionApp
```

## References
- #file:.github/instructions/auditor-release.instructions.md
- #file:.github/instructions/devops-engineer-agent.instructions.md
- #file:.github/instructions/project-manager-agent.instructions.md

## Expected Output
- Release strategy and deployment plan
- Feature changelog and release notes
- Quality gates and testing procedures
- Risk assessment and rollback plan
- Stakeholder communication timeline
- Monitoring and validation procedures
- Post-release support plan
- Plan saved as file
