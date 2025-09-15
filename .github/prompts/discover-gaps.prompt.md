---
mode: agent
---
# Discover Implementation Gaps

## Description
Comprehensive discovery and analysis workflow for when you need to continue implementation but don't know exactly what's missing or incomplete.

## Usage
Use this prompt when resuming work on a project where the implementation status is unclear, to identify gaps, missing features, and technical debt.

## Prompt
DISCOVER GAPS: [project-name]

Perform comprehensive analysis to identify missing implementations, incomplete features, and technical gaps.

## Context
This prompt activates:
- Memory-first discovery using MemoraiMCP for existing context
- Deep codebase audit and architectural analysis
- Gap identification and priority classification
- Comprehensive code review for completeness
- Strategic remediation planning with actionable steps
- Context preparation for seamless continuation

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

## Workflow Sequence
```
1. DISCOVER GAPS: [project-name]
2. ANALYZE PROJECT: [project-name] (if deeper analysis needed)
3. REVIEW CODE: [critical-components] in [project-name]
4. CONTINUE: [project-name] (resume with full context)
```

## Examples
```
DISCOVER GAPS: TaskMaster
```

```
DISCOVER GAPS: EcommerceHub backend implementation
```

```
DISCOVER GAPS: MigrationProject database layer
```

## Discovery Phases

### Phase 0: Memory-First Discovery
- Check existing plans: `mcp_memoraimcp_recall("plan task_list implementation_gaps")`
- Check project status: `mcp_memoraimcp_recall("[project] status technical_debt")`
- Check previous analysis: `mcp_memoraimcp_recall("analysis audit findings")`
- Check feature completeness: `mcp_memoraimcp_recall("feature missing incomplete")`

### Phase 1: Contextual Analysis
- Analyze project type, stack, and lifecycle stage
- Determine if it's MVP, production SaaS, design system, CLI tool, or hybrid
- Identify which improvement phases apply fully, partially, or not at all
- Apply pragmatism and outcome-driven thinking over generic perfection

### Phase 2: Comprehensive Audit & Strategic Planning
- Perform complete audit of the codebase
- Check every file for missing implementations, incorrect logic, outdated libraries
- Identify incomplete types and unused or redundant code
- Challenge existing architecture and library choices
- Flag suboptimal or outdated patterns and suggest modern alternatives
- Document all findings and classify issues by severity and category
- Build step-by-step remediation plan with priorities

### Phase 3: Gap Classification & Prioritization
**Critical (Fix immediately):**
- Security vulnerabilities and data loss risks
- Broken core functionality and system crashes
- Authentication and authorization failures

**High (Next sprint):**
- Missing key features and incomplete user flows
- Performance bottlenecks and scalability issues
- User experience problems and accessibility gaps

**Medium (Planned work):**
- Technical debt and code quality improvements
- Documentation gaps and maintainability issues
- Testing coverage and CI/CD improvements

**Low (Future consideration):**
- Nice-to-have features and aesthetic improvements
- Minor optimizations and code style issues
- Advanced features and experimental functionality

### Phase 4: Implementation Planning
- Create actionable task list with dependencies
- Estimate effort and timeline for each gap
- Identify required agent coordination
- Plan testing and validation strategies
- Define success criteria and acceptance criteria

## Analysis Categories

### 🏗️ Architecture & Design
- System architecture completeness
- Design pattern consistency
- Scalability and performance considerations
- Integration points and dependencies

### 💾 Data & Backend
- Database schema completeness
- API endpoint implementation
- Data validation and sanitization
- Backup and recovery procedures

### 🎨 Frontend & UX
- UI component completeness
- User flow implementation
- Responsive design coverage
- Accessibility compliance (WCAG 2.1)

### 🔒 Security & Compliance
- Authentication and authorization
- Input validation and sanitization
- Data encryption and protection
- Compliance requirements (GDPR, SOX, etc.)

### 🧪 Testing & Quality
- Unit test coverage
- Integration test completeness
- End-to-end test scenarios
- Performance and load testing

### 📚 Documentation & Maintenance
- Code documentation completeness
- API documentation accuracy
- Setup and deployment guides
- Troubleshooting and maintenance procedures

## References
- #file:E:/GitHub/workspace-ai/.github/instructions/initial.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/mcp-usage.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/multi-agent-coordination.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/validation-feedback-system.instructions.md
- #file:E:/GitHub/workspace-ai/.github/prompts/old/continue-web-new-conversation.prompt.md

## Expected Output
- Comprehensive gap analysis report with priority classification
- Detailed inventory of missing implementations and incomplete features
- Technical debt assessment with remediation recommendations
- Security vulnerability assessment and mitigation strategies
- Performance optimization opportunities and implementation roadmap
- Actionable task list with effort estimates and dependencies
- Context preparation for seamless development continuation
- Memory storage of analysis results for future reference

## Success Criteria
- 100% codebase coverage in analysis
- Clear priority classification of all identified gaps
- Actionable remediation plan with timelines
- Risk assessment for each identified issue
- Stakeholder impact analysis for missing features
- Resource requirements and skill gap identification
- Quality gates and success metrics definition