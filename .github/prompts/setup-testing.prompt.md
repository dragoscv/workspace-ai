---
mode: agent
---
# Setup Testing

## Description
Create comprehensive testing strategy with automation, covering unit, integration, and end-to-end testing.

## Usage
Use this prompt to establish a complete testing framework for your application.

## Prompt
SETUP TESTING: [scope] for [project-name]

Create comprehensive testing strategy with automation.

## Context
This prompt activates:
- QA Engineer Agent for testing strategy
- Infra/QA Builder for test automation
- Test plan creation and implementation
- Coverage analysis and optimization
- Integration with CI/CD pipeline

## Examples
```
SETUP TESTING: end-to-end user workflows for TaskMaster
```

```
SETUP TESTING: API testing and load testing for EcommerceHub
```

```
SETUP TESTING: security testing and penetration testing for FinanceApp
```

## References
- #file:.github/instructions/qa-engineer-agent.instructions.md
- #file:.github/instructions/infra-qa.instructions.md
- #file:.github/instructions/general.instructions.md

## Expected Output
- Comprehensive test strategy document
- Unit test framework setup (Jest/Vitest)
- Integration test implementation
- End-to-end test automation (Playwright)
- Performance and load testing setup
- Security testing procedures
- Test coverage reporting and CI integration
- Testing best practices documentation