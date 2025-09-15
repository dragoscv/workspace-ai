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

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

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
- #file:E:/GitHub/workspace-ai/.github/instructions/qa-engineer-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/infra-qa.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/general.instructions.md

## Expected Output
- Comprehensive test strategy document
- Unit test framework setup (Jest/Vitest)
- Integration test implementation
- End-to-end test automation (Playwright)
- Performance and load testing setup
- Security testing procedures
- Test coverage reporting and CI integration
- Testing best practices documentation