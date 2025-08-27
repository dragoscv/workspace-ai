# GitHub Copilot Instructions for Workspace AI

## 🎯 Quick Start

**Core Instructions**: `initial.instructions.md` - Main workflow and MCP usage  
**Enterprise Template**: `enterprise-development-template.instructions.md` - For new app development  
**Memory System**: MemoraiMCP - Always check context first, store decisions  

## 📁 Instruction Files Structure

**Core System**:
- `initial.instructions.md` - Main entry point, workflow, MCP tools
- `general.instructions.md` - Code quality, testing, documentation standards
- `core.instructions.md` - Fundamental engineering principles and guardrails
- `mcp-usage-quick-reference.instructions.md` - Streamlined MCP tool guide

**Specialized Workflow Agents**:
- `launcher.instructions.md` - Launcher/Architect: Initialize and migrate products for continuous delivery
- `feature-builder.instructions.md` - Feature Builder: Ship vertical slices via strict TDD
- `infra-qa.instructions.md` - Infra/QA Builder: Pipeline optimization, E2E testing, security
- `auditor-release.instructions.md` - Auditor/Release Engineer: Audit, version, release management

**Business Leadership**: CEO, CTO, CFO, Product Manager agents  
**Development Team**: Senior Developer, DevOps, QA, Security Engineer agents  
**Communication**: Marketing, Sales, UX Designer, Content Creator agents  
**Operations**: Project Manager, Customer Success agents  

**System Architecture**: Multi-agent coordination, orchestrator, context-aware selector, templates/decision trees

## 🧠 Memory Integration - PRODUCTION READY
The Memorai MCP Server is **fully operational and production-ready**, providing advanced memory management capabilities for all AI agents in this workspace.

### MANDATORY: Check Memory First
Before starting any task, ALL agents MUST:
1. Search memory using `mcp_memoraimcp_recall` for:
   - Existing plans: `mcp_memoraimcp_recall("plan task_list [keyword]")`
   - Previous prompts: `mcp_memoraimcp_recall("prompt user_instructions [keyword]")`
   - Task history: `mcp_memoraimcp_recall("[task] history context")`
   - Project status: `mcp_memoraimcp_recall("[project] status")`

### MANDATORY: Store Important Context
ALL agents MUST store in memory using `mcp_memoraimcp_remember`:
- User plans and procedures (`metadata: {entityType: 'plan'}` or `{entityType: 'task_list'}`)
- Important prompts and instructions (`metadata: {entityType: 'prompt'}` or `{entityType: 'user_instructions'}`)
- Task progress and status (`metadata: {entityType: 'task_progress'}`)
- Project context and decisions (`metadata: {entityType: 'project_context'}`)

### Progressive Memory Loading - OPTIMIZED FOR PRODUCTION
1. Start with specific searches using `mcp_memoraimcp_recall`, never use `mcp_memoraimcp_context()` first
2. Use targeted, single-keyword queries for better performance
3. Reference previous work to maintain continuity
4. Update memory with new insights and decisions using `mcp_memoraimcp_remember`
5. **Follow production-grade memory optimization procedures** - all patterns are battle-tested

### CRITICAL: Memory Search Best Practices - PRODUCTION GUIDELINES
- Use **single key terms** rather than complex multi-term queries
- Start **broad**, then **narrow down** with progressive searches
- Search by **entity types**: `'project_status'`, `'plan'`, `'user_instructions'`
- Use **semantic matching** - search for concepts, not exact phrases
- **Multiple focused searches** are better than one complex query
- ✅ EFFECTIVE: `"metu"`, `"template"`, `"project completion"`
- ❌ INEFFECTIVE: `"metu template project status completion plan"`

**PERFORMANCE GUARANTEE**: The memorai MCP system delivers 95% memory efficiency reduction and sub-3-second response times.

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

## VS Code Extensions & MCP Integration

### Essential Extensions Configuration
The workspace includes carefully selected VS Code extensions that complement our MCP server ecosystem:

**GitHub Workflow Extensions**:
- **GitHub Pull Requests and Issues** - UI-based PR and issue management
- **GitLens** - Enhanced Git capabilities with blame annotations and history
- **Git Graph** - Visual repository graph for branch management

**Development Productivity Extensions**:
- **Todo Tree** - Code-level task tracking (TODO, FIXME, NOTE comments)
- **Project Manager** - Quick workspace switching and project organization

### MCP vs Extension Usage Strategy

**Use VS Code Extensions For**:
- Visual Git operations and history exploration
- Interactive PR reviews and GitHub issue management
- Code-level TODO management and navigation
- Project workspace switching and organization
- Real-time code annotations and blame information

**Use MCP Servers For**:
- AI agent automation and programmatic operations
- Persistent memory management across sessions
- Cross-application integration (Windows, browser automation)
- Up-to-date documentation retrieval and research
- Structured problem-solving and complex reasoning

### Integration Best Practices
```yaml
Optimal Workflow Integration:
  GitHub Operations:
    - Use GitHub Pull Requests extension for UI-based PR management
    - Use GitLens for code history and blame annotations
    - Use Git Graph for visual branch management
    - Use MCP tools for automated GitHub operations and analysis
    
  Task Management:
    - Use Todo Tree extension for in-code task tracking
    - Use Copilot todos tool (MCP) for project-level task planning
    - Combine both for comprehensive task visibility
    
  Documentation & Research:
    - Use Context7MCP for up-to-date library documentation
    - Use Microsoft Docs MCP for official documentation
    - Use Web Search MCP for current trends and real-time information
    - Use VS Code's built-in viewers for local documentation
```

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
