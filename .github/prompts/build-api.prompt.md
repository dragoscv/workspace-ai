---
mode: agent
---
# Build API

## Description
Design and implement RESTful API with comprehensive documentation, testing, and integration guides.

## Usage
Use this prompt to develop API endpoints with contract-first approach and comprehensive testing.

## Prompt
BUILD API: [endpoints] for [project-name]

Design and implement RESTful API with documentation.

## Context
This prompt activates:
- Senior Developer Agent for API implementation
- OpenAPI/JSON Schema contracts first approach
- Comprehensive testing strategy (unit, integration, contract)
- Documentation and integration guides
- Security and authentication implementation

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

## Examples
```
BUILD API: task management endpoints for TaskMaster
```

```
BUILD API: payment processing API for EcommerceHub
```

```
BUILD API: user authentication and authorization for SocialApp
```

## References
- #file:E:/GitHub/workspace-ai/github/instructions/senior-developer-agent.instructions.md
- #file:E:/GitHub/workspace-ai/github/instructions/feature-builder.instructions.md
- #file:E:/GitHub/workspace-ai/github/instructions/security-engineer-agent.instructions.md

## Expected Output
- OpenAPI specification with detailed schemas
- API implementation with proper error handling
- Comprehensive test suite (unit, integration, contract)
- Authentication and authorization implementation
- Rate limiting and security measures
- API documentation and integration guides
- Monitoring and logging setup
