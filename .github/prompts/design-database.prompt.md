---
mode: agent
---
# Design Database

## Description
Create data model, schema, and migration strategy with performance optimization considerations.

## Usage
Use this prompt to design database architecture and data models for your applications.

## Prompt
DESIGN DATABASE: [data-requirements] for [project-name]

Create data model, schema, and migration strategy.

## Context
This prompt activates:
- Senior Developer for data modeling expertise
- Database specialist patterns and best practices
- Migration strategy planning with zero-downtime approaches
- Performance optimization considerations
- Data security and compliance requirements

## Examples
```
DESIGN DATABASE: user management and task tracking for TaskMaster
```

```
DESIGN DATABASE: product catalog and order processing for EcommerceHub
```

```
DESIGN DATABASE: time-series data storage for IoT monitoring system
```

## References
- #file:.github/instructions/senior-developer-agent.instructions.md
- #file:.github/instructions/security-engineer-agent.instructions.md
- #file:.github/instructions/general.instructions.md

## Expected Output
- Entity Relationship Diagram (ERD)
- Database schema with proper indexing
- Migration scripts and rollback procedures
- Performance optimization strategies
- Data security and privacy considerations
- Backup and recovery procedures
- Scaling strategies for future growth