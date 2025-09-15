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
- #file:E:/GitHub/workspace-ai/.github/instructions/auditor-release.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/devops-engineer-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/project-manager-agent.instructions.md

## Expected Output
- Release strategy and deployment plan
- Feature changelog and release notes
- Quality gates and testing procedures
- Risk assessment and rollback plan
- Stakeholder communication timeline

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.
- Monitoring and validation procedures
- Post-release support plan
- Plan saved as file
