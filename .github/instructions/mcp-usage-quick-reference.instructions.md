---
applyTo: "**'
---

# 🧠 MCP Usage Guide - Quick Reference

## 🔧 9 Active MCP Servers
**Location**: `C:\Users\vladu\VS Code Insiders Profiles\Dragos_metu\User\profiles\2843e\mcp.json`

### Core Tools
**MemoraiMCP** (localhost:4950) - `mcp_memoraimcp_remember`, `mcp_memoraimcp_recall`, `mcp_memoraimcp_forget`, `mcp_memoraimcp_context`  
**GitHub Copilot Todos** (Built-in) - `manage_todo_list`  
**Context7MCP** (stdio) - `resolve-library-id`, `get-library-docs` - Add "use context7"  
**Sequential-thinking MCP** (stdio) - `sequential_thinking`  
**Web Search MCP** (Extension) - `vscode-websearchforcopilot_webSearch`  

### Automation & Testing
**GlassMCP** (stdio) - 8 tools: `window_list`, `window_focus`, `window_send_text`, `window_send_text_by_title`, `window_extract_text`, `window_extract_text_by_title`, `clipboard_get_text`, `clipboard_set_text`  
**PlaywrightMCP** (stdio) - 25+ tools: Browser automation, navigation, content extraction, HTTP operations, console logs, code generation sessions  
**Microsoft Docs MCP** (HTTP) - `microsoft_docs_search`  

### Memory & Knowledge
**SimpleMemoryMCP** (stdio) - 9 tools: `create_entities`, `create_relations`, `add_observations`, `delete_entities`, `delete_observations`, `delete_relations`, `read_graph`, `search_nodes`, `open_nodes`  

## ⚡ Essential Workflow

1. **Check Memory First**: `mcp_memoraimcp_recall` with agent ID and search query
2. **Plan Complex Work**: `manage_todo_list` with operation="write"
3. **Get Current Docs**: Add "use context7" to prompts or use `mcp_context7mcp_resolve-library-id` + `mcp_context7mcp_get-library-docs`
4. **Search Web Info**: `vscode-websearchforcopilot_webSearch` for current information and trends
5. **Store Decisions**: `mcp_memoraimcp_remember` with agent ID, content, and metadata
6. **Complex Analysis**: Use `mcp_sequentialthi_sequentialthinking` tool

## 🎯 Best Practices

**Memory Management**:
- Start sessions with recall searches
- Store plans, decisions, and outcomes
- Use structured metadata for organization

**Task Management**:
- Use todos for multi-step work
- Mark in-progress before starting
- Mark completed immediately after finishing

**Documentation**:
- "use context7" for up-to-date library docs
- "use library /library-name" for specific libraries
- Search Microsoft docs for official guidance
- Use web search for current trends and real-time information

**Tool Selection**:
- All tools available in agent mode
- Match tool capabilities to task requirements
- Use confirmation dialogs wisely
- 128 tool limit per request

## 🚀 Quick Start Checklist

- [ ] Enable agent mode in VS Code chat
- [ ] Test memory recall with MemoraiMCP
- [ ] Try "use context7" for documentation
- [ ] Use manage_todo_list for complex tasks
- [ ] Confirm tools appear in agent mode picker

**Remember**: These MCP servers extend your capabilities significantly - use them actively!
