# 🤖 AI Agent Reusable Prompts Collection

## 🎯 Quick Reference

This file contains proven, reusable prompts for different AI workflows. Each prompt activates specific agents and follows the memory-first, TDD, Git-centric approach.

---

## 🚀 Project Initialization

### New Project Launch
```
IDEA: [project-name] - [brief description]

Example:
IDEA: TaskMaster - task management application for remote teams
```

**What this activates:**
- Enterprise Development Template (4-phase workflow)
- Launcher/Architect Agent for scaffolding
- Memory storage for continuation
- Complete CI/CD setup

### Existing Project Analysis
```
ANALYZE PROJECT: [project-name]

Understand the codebase, architecture, and prepare workspace for other agents to continue development.

Example:
ANALYZE PROJECT: ecommerce-platform
```

**What this activates:**
- Context-Aware Selector for optimal agent selection
- Senior Developer + Project Manager combination
- Complete codebase analysis and documentation
- Memory context preparation for other agents

---

## 🛠️ Development Workflows

### Feature Development (TDD Approach)
```
BUILD FEATURE: [feature-description] for [project-name]

Use TDD approach - tests first, then implementation.

Example:
BUILD FEATURE: user authentication system for TaskMaster
```

**What this activates:**
- Feature Builder Agent
- Contract-first development
- Strict TDD workflow (Red → Green → Refactor)
- Git integration with PR workflow

### Bug Fix and Investigation
```
FIX ISSUE: [issue-description] in [project-name]

Investigate, test, and implement fix following TDD principles.

Example:
FIX ISSUE: login form validation errors in TaskMaster
```

**What this activates:**
- Senior Developer Agent
- QA Engineer for testing strategy
- Root cause analysis and comprehensive fix
- Test coverage for regression prevention

### Code Review and Quality Audit
```
REVIEW CODE: [component/module] in [project-name]

Perform comprehensive code quality analysis and provide improvement recommendations.

Example:
REVIEW CODE: payment processing module in ecommerce-platform
```

**What this activates:**
- Senior Developer + Security Engineer combination
- Code quality analysis
- Security vulnerability assessment
- Performance and maintainability recommendations

---

## 🏗️ Architecture and Infrastructure

### Architecture Planning
```
DESIGN ARCHITECTURE: [system-description] for [project-name]

Create comprehensive technical architecture with trade-offs analysis.

Example:
DESIGN ARCHITECTURE: microservices backend for TaskMaster
```

**What this activates:**
- CTO Agent for strategic decisions
- Senior Developer for technical implementation
- Security Engineer for security considerations
- Complete architecture documentation with ADRs

### Infrastructure Setup
```
SETUP INFRASTRUCTURE: [requirements] for [project-name]

Configure deployment, monitoring, and operational infrastructure.

Example:
SETUP INFRASTRUCTURE: AWS cloud deployment for TaskMaster
```

**What this activates:**
- DevOps Engineer Agent
- SRE Agent for reliability planning
- Security Engineer for compliance
- Complete CI/CD pipeline with monitoring

### Database Design
```
DESIGN DATABASE: [data-requirements] for [project-name]

Create data model, schema, and migration strategy.

Example:
DESIGN DATABASE: user management and task tracking for TaskMaster
```

**What this activates:**
- Senior Developer for data modeling
- Database specialist patterns
- Migration strategy planning
- Performance optimization considerations

---

## 🚦 Testing and Quality Assurance

### Testing Strategy Setup
```
SETUP TESTING: [scope] for [project-name]

Create comprehensive testing strategy with automation.

Example:
SETUP TESTING: end-to-end user workflows for TaskMaster
```

**What this activates:**
- QA Engineer Agent
- Infra/QA Builder for automation
- Test plan creation and implementation
- Coverage analysis and optimization

### Security Audit
```
SECURITY AUDIT: [scope] for [project-name]

Perform comprehensive security assessment and remediation.

Example:
SECURITY AUDIT: authentication and data protection for TaskMaster
```

**What this activates:**
- Security Engineer Agent
- Vulnerability assessment
- Compliance verification
- Security implementation recommendations

### Performance Optimization
```
OPTIMIZE PERFORMANCE: [area] for [project-name]

Analyze and improve performance with measurable targets.

Example:
OPTIMIZE PERFORMANCE: page load times for TaskMaster dashboard
```

**What this activates:**
- Senior Developer + SRE combination
- Performance profiling and analysis
- Optimization implementation
- Monitoring and alerting setup

---

## 📋 Project Management and Coordination

### Sprint Planning
```
PLAN SPRINT: [duration] for [project-name]

Create sprint backlog with user stories and acceptance criteria.

Example:
PLAN SPRINT: 2-week sprint for TaskMaster MVP
```

**What this activates:**
- Product Manager Agent
- Project Manager for coordination
- User story creation with DoD
- Resource allocation and timeline planning

### Release Planning
```
PLAN RELEASE: [version] for [project-name]

Prepare release strategy, testing, and deployment plan.

Example:
PLAN RELEASE: v1.0.0 for TaskMaster
```

**What this activates:**
- Auditor/Release Engineer Agent
- Release strategy (canary → staged → full)
- Risk assessment and rollback planning
- Stakeholder communication plan

### Team Coordination
```
COORDINATE TEAM: [objective] for [project-name]

Set up multi-agent coordination for complex objectives.

Example:
COORDINATE TEAM: frontend and backend integration for TaskMaster
```

**What this activates:**
- Multi-Agent Coordination Protocol
- Orchestrator for team management
- Clear handoff procedures
- Progress tracking and reporting

---

## 🔧 Specialized Workflows

### Migration Project
```
MIGRATE SYSTEM: [source] to [target] for [project-name]

Plan and execute system migration with risk mitigation.

Example:
MIGRATE SYSTEM: legacy PHP app to Next.js for TaskMaster
```

**What this activates:**
- Launcher/Architect for migration strategy
- Senior Developer for implementation
- DevOps for infrastructure transition
- Comprehensive testing and validation

### API Development
```
BUILD API: [endpoints] for [project-name]

Design and implement RESTful API with documentation.

Example:
BUILD API: task management endpoints for TaskMaster
```

**What this activates:**
- Senior Developer Agent
- OpenAPI/JSON Schema contracts first
- Comprehensive testing strategy
- Documentation and integration guides

### UI/UX Implementation
```
BUILD UI: [components] for [project-name]

Create responsive, accessible user interface components.

Example:
BUILD UI: task dashboard and forms for TaskMaster
```

**What this activates:**
- UX Designer + Senior Developer combination
- Responsive design with Tailwind CSS
- Accessibility compliance (WCAG 2.1 AA)
- Component library and design system

---

## 🧠 Memory and Context Management

### Continue Previous Work
```
CONTINUE: [project-name]

Resume previous work using stored memory context.

Example:
CONTINUE: TaskMaster
```

**What this activates:**
- Memory recall from MemoraiMCP
- Context restoration
- Seamless workflow continuation
- Previous decisions and plans recovery

### Save Project State
```
SAVE STATE: [project-name]

Store current project state and decisions for future reference.

Example:
SAVE STATE: TaskMaster development progress
```

**What this activates:**
- Memory storage in MemoraiMCP
- Context preservation
- Decision documentation
- Handoff preparation for other agents

---

## 🎯 Usage Guidelines

### Prompt Structure:
1. **Action Verb**: ANALYZE, BUILD, SETUP, DESIGN, etc.
2. **Object/Scope**: What you're working on
3. **Project Name**: For memory context and continuity
4. **Optional Details**: Specific requirements or focus areas

### Best Practices:
- **Be Specific**: Include project name for memory tracking
- **Add Context**: Mention previous work or dependencies
- **Set Expectations**: Clarify if you want analysis, implementation, or planning
- **Use Memory**: Reference previous conversations with project name

### Memory Integration:
- Every prompt automatically stores context in MemoraiMCP
- Use project names consistently for context retrieval
- Agents will check memory first before starting work
- Seamless handoffs between different specialized agents

---

## 🔄 Workflow Combinations

### Full Project Cycle:
1. `IDEA: [project]` - Initial launch and planning
2. `ANALYZE PROJECT: [project]` - If joining existing codebase
3. `BUILD FEATURE: [feature] for [project]` - Feature development
4. `SETUP TESTING: [scope] for [project]` - Quality assurance
5. `PLAN RELEASE: [version] for [project]` - Deployment preparation

### Quick Development:
1. `CONTINUE: [project]` - Resume previous work
2. `BUILD FEATURE: [feature] for [project]` - Implement new feature
3. `SAVE STATE: [project]` - Store progress for later

### Code Review Workflow:
1. `ANALYZE PROJECT: [project]` - Understand codebase
2. `REVIEW CODE: [component] in [project]` - Quality analysis
3. `FIX ISSUE: [problems] in [project]` - Implement improvements

---

*This prompt collection implements the launch-first, TDD, Git-centric, memory-persistent AI workflow for maximum development efficiency.*