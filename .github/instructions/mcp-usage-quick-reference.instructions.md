---
applyTo: "**'
---

# 🧠 MCP Usage Guide - Quick Reference

## 🔧 10 Active MCP Servers
**Location**: `C:\Users\vladu\VS Code Insiders Profiles\Dragos_metu\User\profiles\2843e\mcp.json`

### Core Tools
**MemoraiMCP** (localhost:4950) - **PRODUCTION-READY** 🚀 Advanced Memory System:
- `mcp_memoraimcp_remember`, `mcp_memoraimcp_recall`, `mcp_memoraimcp_forget`, `mcp_memoraimcp_context`
- `mcp_memoraimcp_link_memories`, `mcp_memoraimcp_explore_graph`, `mcp_memoraimcp_get_analytics`
- `mcp_memoraimcp_get_insights`, `mcp_memoraimcp_get_recommendations`, `mcp_memoraimcp_search_keys`
- `mcp_memoraimcp_record_episodic_event`, `mcp_memoraimcp_enhance_query`, `mcp_memoraimcp_adapt_organization`
- `mcp_memoraimcp_federated_query`, `mcp_memoraimcp_collective_insights`, `mcp_memoraimcp_get_memory`
- **Sub-millisecond response times**, intelligent search, knowledge graphs, federated queries

**GitHub Copilot Todos** (Built-in) - `manage_todo_list`  
**Context7MCP** (stdio) - `resolve-library-id`, `get-library-docs` - Add "use context7"  
**Sequential-thinking MCP** (stdio) - `sequential_thinking`  
**CAUTAI MCP** (stdio) - **PRODUCTION-READY** 🌐 Real-Time Research Intelligence:
- `mcp_cautaimcp_mcp_cautai_search_web` - Advanced web search with language support, fast mode, relevance scoring
- `mcp_cautaimcp_mcp_cautai_compose_answer` - Intelligent answer composition with confidence analysis
- **Ultra-fast mode** (sub-200ms), multi-language support (en, ro), structured results with metadata
- **Real-time information retrieval**, trend analysis, market research, competitive intelligence  
**Web Search MCP** (Extension) - `vscode-websearchforcopilot_webSearch`  

### Automation & Testing
**GlassMCP** (stdio) - 8 tools: `window_list`, `window_focus`, `window_send_text`, `window_send_text_by_title`, `window_extract_text`, `window_extract_text_by_title`, `clipboard_get_text`, `clipboard_set_text`  
**PlaywrightMCP** (stdio) - 25+ tools: Browser automation, navigation, content extraction, HTTP operations, console logs, code generation sessions  
**Microsoft Docs MCP** (HTTP) - `microsoft_docs_search`  

### Memory & Knowledge
**SimpleMemoryMCP** (stdio) - 9 tools: `create_entities`, `create_relations`, `add_observations`, `delete_entities`, `delete_observations`, `delete_relations`, `read_graph`, `search_nodes`, `open_nodes`  

## ⚡ Essential Workflow

1. **Memory First - PRODUCTION-READY**: Use `mcp_memoraimcp_recall` with agentId and search query to check existing context
2. **Plan Complex Work**: `manage_todo_list` with operation="write" for multi-step tasks
3. **Advanced Memory Features**:
   - **Knowledge Graph**: `mcp_memoraimcp_explore_graph` for relationship exploration
   - **Analytics**: `mcp_memoraimcp_get_analytics` for usage insights and performance metrics
   - **Recommendations**: `mcp_memoraimcp_get_recommendations` for AI-powered optimization
   - **Episodic Memory**: `mcp_memoraimcp_record_episodic_event` for learning from experience
   - **Federated Queries**: `mcp_memoraimcp_federated_query` for multi-agent coordination
4. **Get Current Docs**: Add "use context7" to prompts or use `mcp_context7mcp_resolve-library-id` + `mcp_context7mcp_get-library-docs`
5. **Research & Real-Time Information**:
   - **CAUTAI MCP**: `mcp_cautaimcp_mcp_cautai_search_web` for speed-critical research, real-time trends, market intelligence, competitive analysis
   - **Answer Composition**: `mcp_cautaimcp_mcp_cautai_compose_answer` for structured research synthesis with confidence scoring
   - **VS Code Web Search**: `vscode-websearchforcopilot_webSearch` for deep research tasks, VS Code-integrated workflows, content analysis
6. **Store Decisions**: `mcp_memoraimcp_remember` with agentId, content, and structured metadata
7. **Complex Analysis**: Use `mcp_sequentialthi_sequentialthinking` tool

## 🎯 Best Practices

**Advanced Memory Management - PRODUCTION-READY**:
- **Memory-First Approach**: Always start with `mcp_memoraimcp_recall` to check context before any task
- **Intelligent Search**: Use relevance scoring, content highlighting, and semantic matching
- **Knowledge Graphs**: Leverage `mcp_memoraimcp_explore_graph` for relationship discovery
- **Performance Analytics**: Monitor memory effectiveness with `mcp_memoraimcp_get_analytics`
- **Adaptive Organization**: Use `mcp_memoraimcp_adapt_organization` for continuous optimization
- **Episodic Learning**: Record key events with `mcp_memoraimcp_record_episodic_event`
- **Multi-Agent Coordination**: Use `mcp_memoraimcp_federated_query` for collaborative intelligence
- **Structured Metadata**: Include entityType, priority, project, tags for optimal organization

**Task Management**:
- Use todos for multi-step work
- Mark in-progress before starting
- Mark completed immediately after finishing

**Documentation**:
- "use context7" for up-to-date library docs
- "use library /library-name" for specific libraries
- Search Microsoft docs for official guidance

**Web Search Selection & Research Intelligence**:
- **CAUTAI MCP**: Ultra-fast research (sub-200ms), real-time trends, market intelligence, competitive analysis, multi-language support
- **Answer Composition**: Use `mcp_cautaimcp_mcp_cautai_compose_answer` for structured synthesis with confidence scoring
- **VS Code Web Search**: Deep research tasks, VS Code-integrated workflows, content analysis, contextual understanding
- **Research Strategy**: Combine CAUTAI speed with VS Code depth for comprehensive intelligence gathering

**Tool Selection**:
- All tools available in agent mode
- Match tool capabilities to task requirements
- Use confirmation dialogs wisely
- 128 tool limit per request

## 🚀 Quick Start Checklist

- [ ] Enable agent mode in VS Code chat
- [ ] Test advanced memory recall with MemoraiMCP: `mcp_memoraimcp_recall`
- [ ] Explore knowledge graph: `mcp_memoraimcp_explore_graph` 
- [ ] Check analytics: `mcp_memoraimcp_get_analytics` for usage insights
- [ ] Get AI recommendations: `mcp_memoraimcp_get_recommendations`
- [ ] Try "use context7" for documentation
- [ ] Test real-time research with CAUTAI MCP: `mcp_cautaimcp_mcp_cautai_search_web`
- [ ] Try answer composition: `mcp_cautaimcp_mcp_cautai_compose_answer`
- [ ] Use manage_todo_list for complex tasks
- [ ] Test federated queries: `mcp_memoraimcp_federated_query` for multi-agent coordination
- [ ] Record episodic events: `mcp_memoraimcp_record_episodic_event` for learning
- [ ] Confirm tools appear in agent mode picker

**Remember**: The MemoraiMCP system is production-ready with sub-millisecond response times and 95% efficiency improvements. Use its advanced capabilities actively to maximize AI agent performance!
