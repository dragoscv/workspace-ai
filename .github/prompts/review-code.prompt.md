---
mode: agent
---
# Code Review

## Description
Perform comprehensive code quality analysis and provide improvement recommendations with security assessment.

## Usage
Use this prompt to conduct thorough code reviews for specific components or modules.

## Prompt
REVIEW CODE: [component/module] in [project-name]

Perform comprehensive code quality analysis and provide improvement recommendations.

## Context
This prompt activates:
- Senior Developer + Security Engineer combination
- Code quality analysis with SOLID principles
- Security vulnerability assessment
- Performance and maintainability recommendations
- Architecture pattern validation

## Examples
```
REVIEW CODE: payment processing module in ecommerce-platform
```

```
REVIEW CODE: user authentication system in TaskMaster
```

```
REVIEW CODE: API gateway implementation in MicroserviceApp
```

## References
- #file:.github/instructions/senior-developer-agent.instructions.md
- #file:.github/instructions/security-engineer-agent.instructions.md
- #file:.github/instructions/general.instructions.md

## Expected Output
- Code quality assessment report
- Security vulnerability analysis
- Performance optimization recommendations
- Refactoring suggestions with priorities
- Architecture improvement proposals
- Technical debt identification and remediation plan
