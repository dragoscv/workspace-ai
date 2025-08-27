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
- #file:.github/instructions/cto-agent.instructions.md
- #file:.github/instructions/senior-developer-agent.instructions.md
- #file:.github/instructions/security-engineer-agent.instructions.md

## Expected Output
- Comprehensive architecture documentation
- Technology stack recommendations with rationale
- Architecture Decision Records (ADRs)
- Security architecture considerations
- Scalability and performance planning
- Integration patterns and API design
- Infrastructure requirements specification
