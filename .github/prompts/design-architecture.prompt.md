---
mode: agent
---
# Design Architecture

## Description
Create comprehensive technical architecture with trade-offs analysis and strategic decision documentation.

## Usage
Use this prompt to design system architecture for new applications or major architectural changes.

## Prompt
DESIGN ARCHITECTURE: [system-description] for [project-name]

Create comprehensive technical architecture with trade-offs analysis.

## Context
This prompt activates:
- CTO Agent for strategic decisions
- Senior Developer for technical implementation details
- Security Engineer for security considerations
- Complete architecture documentation with ADRs (Architecture Decision Records)
- Integration with enterprise patterns

## Examples
```
DESIGN ARCHITECTURE: microservices backend for TaskMaster
```

```
DESIGN ARCHITECTURE: real-time messaging system for ChatApp
```

```
DESIGN ARCHITECTURE: scalable data processing pipeline for AnalyticsHub
```

## References
- #file:E:/GitHub/workspace-ai/.github/instructions/cto-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/senior-developer-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/security-engineer-agent.instructions.md

## Expected Output
- Comprehensive architecture documentation
- Technology stack recommendations with rationale
- Architecture Decision Records (ADRs)
- Security architecture considerations
- Scalability and performance planning
- Integration patterns and API design
- Infrastructure requirements specification

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.
