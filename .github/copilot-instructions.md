# GitHub Copilot Instructions for Workspace AI

## Overview
This workspace contains a comprehensive instruction files system designed to enable world-class AI agent operation across all business and technical roles. These instructions ensure consistent, professional, and highly effective agent behavior for project development.

## Instruction Files Structure

### Business Leadership (`.github/instructions/business/`)
- **CEO Agent** (`ceo-agent.instructions.md`) - Executive leadership, strategy, and vision
- **CTO Agent** (`cto-agent.instructions.md`) - Technical leadership and architecture
- **CFO Agent** (`cfo-agent.instructions.md`) - Financial management and operations
- **Product Manager Agent** (`product-manager-agent.instructions.md`) - Product strategy and roadmap

### Development Team (`/instructions/development/`)
- **Senior Developer Agent** (`senior-developer-agent.instructions.md`) - Architecture and code excellence
- **DevOps Engineer Agent** (`devops-engineer-agent.instructions.md`) - Infrastructure and deployment
- **QA Engineer Agent** (`qa-engineer-agent.instructions.md`) - Quality assurance and testing

### Communication & Marketing (`.github/instructions/communication/`)
- **Marketing Manager Agent** (`marketing-manager-agent.instructions.md`) - Marketing strategy and campaigns
- **Sales Manager Agent** (`sales-manager-agent.instructions.md`) - Revenue generation and sales process
- **UX Designer Agent** (`ux-designer-agent.instructions.md`) - User experience and design
- **Content Creator Agent** (`content-creator-agent.instructions.md`) - Content strategy and creation

### Operations & Support (`/instructions/operations/`)
- **Project Manager Agent** (`project-manager-agent.instructions.md`) - Project execution and coordination
- **Customer Success Agent** (`customer-success-agent.instructions.md`) - Customer relationship management

## Memory Integration Requirements

### MANDATORY: Check Memory First
Before starting any task, ALL agents MUST:
1. Search memory using `mcp_memoraimcpser_recall` for:
   - Existing plans: `search_nodes("plan task_list [keyword]")`
   - Previous prompts: `search_nodes("prompt user_instructions [keyword]")`
   - Task history: `search_nodes("[task] history context")`
   - Project status: `search_nodes("[project] status")`

### MANDATORY: Store Important Context
ALL agents MUST store in memory:
- User plans and procedures (`entity_type: 'plan'` or `'task_list'`)
- Important prompts and instructions (`entity_type: 'prompt'` or `'user_instructions'`)
- Task progress and status (`entity_type: 'task_progress'`)
- Project context and decisions (`entity_type: 'project_context'`)

### Progressive Memory Loading
1. Start with specific searches, never use `read_graph()` first
2. Use targeted queries for better performance
3. Reference previous work to maintain continuity
4. Update memory with new insights and decisions
5. **Follow memory search optimization guide** at `/instructions/memory-search-optimization.md`

### CRITICAL: Memory Search Best Practices
- Use **single key terms** rather than complex multi-term queries
- Start **broad**, then **narrow down** with progressive searches
- Search by **entity types**: `'project_status'`, `'plan'`, `'user_instructions'`
- Use **semantic matching** - search for concepts, not exact phrases
- **Multiple focused searches** are better than one complex query
- ✅ EFFECTIVE: `"metu"`, `"template"`, `"project completion"`
- ❌ INEFFECTIVE: `"metu template project status completion plan"`

## Universal Agent Behavior

### Core Principles
1. **Memory-First Approach**: Always check memory before starting new work
2. **Context Continuity**: Reference and build upon previous conversations and decisions
3. **Role Expertise**: Apply role-specific knowledge and best practices
4. **Quality Standards**: Maintain the highest standards of professional excellence
5. **Collaborative Integration**: Work seamlessly with other agents and stakeholders

### Communication Standards
- Clear, professional, and role-appropriate communication
- Comprehensive documentation of decisions and rationale
- Transparent progress reporting and status updates
- Proactive identification and escalation of issues
- Stakeholder-focused presentations and deliverables

### Technical Excellence
- Use appropriate tools and technologies for each role
- Follow industry best practices and standards
- Maintain up-to-date knowledge of trends and innovations
- Implement proper security, accessibility, and compliance measures
- Optimize for performance, scalability, and maintainability

## Global Standards
This workspace adheres to global standards across all roles and projects. These standards ensure consistency, quality, and professionalism in all deliverables.

Key global standards maintained:
- **Code Quality**: TypeScript strict mode, SOLID principles, clean architecture
- **Testing**: 80%+ coverage, TDD/BDD methodologies, Playwright automation
- **Security**: Input sanitization, data protection, compliance standards
- **Accessibility**: WCAG 2.1 AA compliance, inclusive design
- **Development**: Conventional commits, proper PR processes, comprehensive documentation

## Usage Guidelines

### For Project Development
1. Start by selecting the appropriate agent instruction file for your role
2. Check memory for existing project context and plans
3. Apply role-specific expertise while coordinating with other agents
4. Store decisions, progress, and learnings in memory
5. Follow global standards for code quality, testing, and documentation

### For New Projects
1. Review CEO and CTO instructions for strategic alignment
2. Apply Product Manager instructions for requirements and roadmap
3. Use Developer and DevOps instructions for technical implementation
4. Implement Marketing and Sales instructions for go-to-market strategy
5. Apply Customer Success instructions for user experience optimization

### For Ongoing Operations
1. Use Project Manager instructions for coordination and delivery
2. Apply QA Engineer instructions for quality assurance
3. Follow Customer Success instructions for user satisfaction
4. Use appropriate communication role instructions for stakeholder engagement

## Success Metrics

Each agent role includes specific success metrics and KPIs that should be tracked and optimized. Regular review of these metrics ensures continuous improvement and world-class performance.

## Professional Development

All agents should:
- Stay current with industry trends and best practices
- Maintain relevant certifications and knowledge
- Share learnings and insights across the team
- Contribute to the improvement of these instruction files
- Build expertise in their specific domain while understanding other roles

---

This instruction system is designed to enable the highest level of professional excellence across all aspects of project development. By following these guidelines and leveraging the role-specific expertise contained in each instruction file, teams can achieve world-class results consistently.
