---
mode: agent
---
# Setup Infrastructure

## Description
Configure deployment, monitoring, and operational infrastructure with comprehensive CI/CD pipeline setup.

## Usage
Use this prompt to set up production-ready infrastructure for your applications.

## Prompt
SETUP INFRASTRUCTURE: [requirements] for [project-name]

Configure deployment, monitoring, and operational infrastructure.

## Context
This prompt activates:
- DevOps Engineer Agent for infrastructure automation
- SRE Agent for reliability planning
- Security Engineer for compliance and security
- Complete CI/CD pipeline with monitoring and alerting
- Infrastructure as Code (IaC) implementation

## Examples
```
SETUP INFRASTRUCTURE: AWS cloud deployment for TaskMaster
```

```
SETUP INFRASTRUCTURE: Kubernetes cluster with auto-scaling for EcommerceHub
```

```
SETUP INFRASTRUCTURE: multi-region deployment with disaster recovery for FinanceApp
```

## References
- #file:E:/GitHub/workspace-ai/.github/instructions/devops-engineer-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/sre-agent.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/security-engineer-agent.instructions.md

## Expected Output
- Infrastructure as Code (Terraform/CloudFormation)
- CI/CD pipeline configuration
- Monitoring and alerting setup
- Security configuration and compliance
- Disaster recovery and backup strategies
- Documentation and runbooks
- Cost optimization recommendations

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.