---
applyTo: "**"
---

# 🧠 Copilot Agent Initial Instructions

## 🔄 Workflow Approach

**Before starting any task**:
1. **Check instructions** - Review all available instruction files
2. **Check memory** - Use MemoraiMCP or SimpleMemoryMCP to recall context  
3. **Plan with todos** - Use `manage_todo_list` tool for complex multi-step tasks
4. **Verify information** - Don't trust completion claims, always double-check
5. **Think step-by-step** - Break problems into manageable parts
6. **Use VS Code Tools** - Leverage VS Code tasks and extensions for automation

## 🧠 MCP Tool Usage

**Task Management**: `manage_todo_list` - Use for ALL complex multi-step work  
**Memory - PRODUCTION-READY**: **MemoraiMCP** with 95% efficiency improvements and sub-millisecond response times:
- **Core**: `mcp_memoraimcp_recall` + `mcp_memoraimcp_remember` - Check context first, store decisions
- **Knowledge Graph**: `mcp_memoraimcp_explore_graph` + `mcp_memoraimcp_link_memories` - Relationship mapping
- **Analytics**: `mcp_memoraimcp_get_analytics` + `mcp_memoraimcp_get_recommendations` - Performance insights
- **Multi-Agent**: `mcp_memoraimcp_federated_query` + `mcp_memoraimcp_collective_insights` - Coordination
- **Learning**: `mcp_memoraimcp_record_episodic_event` + `mcp_memoraimcp_enhance_query` - Adaptive intelligence

**Documentation**: Context7MCP - Add "use context7" for current library docs  
**Thinking**: Sequential-thinking MCP - For complex problem analysis  
**Real-Time Research**: CAUTAI MCP - **PRODUCTION-READY** 🌐 Ultra-fast intelligence:
- **Speed-Critical**: `mcp_cautaimcp_mcp_cautai_search_web` with fastMode for sub-200ms searches  
- **Answer Synthesis**: `mcp_cautaimcp_mcp_cautai_compose_answer` for structured research reports
- **Multi-Language**: Support for English/Romanian with relevance scoring and confidence analysis
- **Market Intelligence**: Real-time trends, competitive analysis, API research workflows  
**Automation**: GlassMCP (8 Windows tools), PlaywrightMCP (25+ browser tools), Microsoft Docs MCP  

**Critical Usage Pattern**:
1. **Memory First**: Check `mcp_memoraimcp_recall` before starting any task
2. **Plan Complex Work**: Use `manage_todo_list` for multi-step tasks
3. **Store Decisions**: Use `mcp_memoraimcp_remember` with structured metadata
4. **Build Knowledge**: Create relationships with `mcp_memoraimcp_link_memories`
5. **Monitor Performance**: Use `mcp_memoraimcp_get_analytics` for optimization
6. **Learn & Adapt**: Record events with `mcp_memoraimcp_record_episodic_event`
7. **Coordinate**: Use `mcp_memoraimcp_federated_query` for multi-agent work
8. **Documentation**: Use "use context7" for up-to-date docs
9. **Real-Time Research**: Use `mcp_cautaimcp_mcp_cautai_search_web` for speed-critical information, `mcp_cautaimcp_mcp_cautai_compose_answer` for structured synthesis

## 🔧 VS Code Extensions Integration

**Essential Extensions**: GitHub Pull Requests, GitLens, Git Graph, Todo Tree, Project Manager  
**Usage Pattern**: Use extensions for UI workflows, MCP servers for AI automation  
**GitHub Workflow**: Extension for PR management, MCP for programmatic operations  
**Task Management**: Todo Tree for code comments, Copilot todos for project planning  
**Project Navigation**: Project Manager for workspace switching, memory MCP for context preservation

## ⚡ Core Principles

**Agent Mode First**: Let Copilot work autonomously, break large requests into focused prompts  
**Memory-First Approach - PRODUCTION-READY**: Always check `mcp_memoraimcp_recall` before starting tasks:
- **95% efficiency improvements** with sub-millisecond response times
- **Intelligent search** with relevance scoring and content highlighting  
- **Knowledge graphs** with relationship mapping and clustering
- **Advanced analytics** for performance optimization and insights
- **Multi-agent coordination** with federated queries and collective intelligence

**Todo Planning**: Use `manage_todo_list` for complex work - mark in-progress, complete immediately  
**Verify Everything**: Don't trust completion claims, double-check results  
**Terminal Direct**: Run commands directly, prefer terminal over UI automation  
**Context Preservation**: Store decisions and outcomes in memory for continuity using structured metadata

## 🔧 Problem Solving

1. **Plan**: Use `manage_todo_list` for multi-step troubleshooting
2. **Memory Analysis**: Use advanced Memorai MCP features:
   - `mcp_memoraimcp_recall` for context search with intelligent ranking
   - `mcp_memoraimcp_explore_graph` for relationship discovery
   - `mcp_memoraimcp_get_analytics` for pattern insights
3. **Think**: Use sequential-thinking MCP for structured analysis  
4. **Research**: Check Context7 ("use context7"), **CAUTAI MCP** for ultra-fast research (`fastMode: true` for sub-200ms), answer synthesis for structured reports, VS Code Web Search for deep analysis
5. **Execute**: Break into components, solve systematically
6. **Learn & Store**: 
   - Save solutions with `mcp_memoraimcp_remember` using structured metadata
   - Record experiences with `mcp_memoraimcp_record_episodic_event`
   - Create knowledge links with `mcp_memoraimcp_link_memories`

## 🎯 MCP Best Practices

### Task Management:
- Use `manage_todo_list` for complex work - mark in-progress before starting, completed immediately after finishing
- Include specific file paths and acceptance criteria in descriptions

### Advanced Memory Usage - PRODUCTION-READY:
- **Memory-First Workflow**: Start every session with `mcp_memoraimcp_recall` to check context
- **Intelligent Search**: Use single keywords for optimal performance (avoid complex multi-term queries)
- **Structured Storage**: Use `mcp_memoraimcp_remember` with structured metadata (entityType, priority, project, tags)
- **Knowledge Building**: Create relationships with `mcp_memoraimcp_link_memories` for context connection
- **Performance Monitoring**: Use `mcp_memoraimcp_get_analytics` for usage insights and optimization
- **Episodic Learning**: Record key events with `mcp_memoraimcp_record_episodic_event`
- **Multi-Agent Coordination**: Use `mcp_memoraimcp_federated_query` for collaborative intelligence
- **Adaptive Optimization**: Leverage `mcp_memoraimcp_adapt_organization` for continuous improvement

### Documentation:
- Add "use context7" for up-to-date library docs
- Use library IDs: "use library /mongodb/docs"

### Problem Solving:
- Use sequential-thinking for complex multi-step problems
- Break problems into logical, sequential steps
- Allow for revisions and course corrections

### Tool Selection:
- Match tool capabilities to task requirements
- Leverage agent mode for automatic tool selection

## 🚀 Enterprise Application Development 

**Template Reference**: See `enterprise-development-template.instructions.md` for comprehensive enterprise application development framework.

**Quick Activation**: When user requests new application with `IDEA: <concept>`, apply the full enterprise template with 4-phase workflow (Clarification → Planning → Implementation → Recovery) and mandatory enterprise standards.

## 🔧 Specialized Workflow Agents

**Engineering Lifecycle Agents** (follow core.instructions.md principles):
- **Launcher/Architect** (`launcher.instructions.md`): Initialize and migrate products for continuous delivery with minimum risk
- **Feature Builder** (`feature-builder.instructions.md`): Ship vertical slices via strict TDD without breaking contracts  
- **Infra/QA Builder** (`infra-qa.instructions.md`): Optimize pipelines, E2E testing, security scanning (CI ≤ 10 min)
- **Auditor/Release Engineer** (`auditor-release.instructions.md`): Audit, version, release (canary → staged → full), and report

**Usage Pattern**: Select appropriate specialized agent based on current development phase and task requirements. All agents follow contract-first, TDD, small vertical slices approach with comprehensive CI/CD integration.

## 🎯 Remember

- **Agent Mode First** - Let Copilot do the work instead of manual intervention
- **Granular Prompts** - Break complex requests into focused, manageable pieces
- **Todo Planning** - Use todos tool for complex work to ensure visibility and proper tracking
- **Enterprise Template** - Use the comprehensive development template for new application requests
- **Microsoft Best Practices 2025**:
  - Keep prompts granular rather than broad multi-step requests
  - Allow GitHub Copilot to perform tasks (click "Continue" when prompted)
  - Allow GitHub Copilot to repeat tasks for better context understanding
  - Express preferences clearly when Copilot suggests approaches you don't prefer
  - Add `copilot-instructions.md` to workspace when prompted for better results
- Always verify work before claiming completion
- Use MCP tools strategically to enhance capabilities  
- **CAUTAI MCP**: Leverage ultra-fast research with `fastMode: true` for real-time intelligence, use answer composition for structured reports  
- Keep user instructions and preferences in memory
- Stay practical and results-focused
- Terminal commands are preferred over UI automation
- Double-check everything, trust but verify
- Store important outcomes for future reference
- Leverage the full MCP ecosystem for maximum efficiency
