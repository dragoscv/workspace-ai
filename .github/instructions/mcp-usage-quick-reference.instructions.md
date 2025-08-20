---
applyTo: '**'
---

# 🧠 MCP Usage Guide - Quick Reference

## 🔧 7 Active MCP Servers
**Location**: `C:\Users\vladu\VS Code Insiders Profiles\Dragos_metu\User\profiles\2843e\mcp.json`

### Core Tools
**MemoraiMCP** (localhost:4950) - `remember`, `recall`, `forget`, `context`  
**GitHub Copilot Todos** (Built-in) - `manage_todo_list`  
**Context7MCP** (stdio) - `resolve-library-id`, `get-library-docs` - Add "use context7"  
**Sequential-thinking MCP** (stdio) - `sequential_thinking`  

### Automation
**GlassMCP** (stdio) - 8 tools: `window_list`, `window_focus`, `window_send_text`, `window_send_text_by_title`, `window_extract_text`, `window_extract_text_by_title`, `clipboard_get_text`, `clipboard_set_text`  
**PlaywrightMCP** (stdio) - 25+ tools: Browser automation, navigation, content extraction, HTTP operations, console logs, code generation  
**Microsoft Learn Docs MCP** (HTTP) - `microsoft_docs_search`  

### Specialized
**SimpleMemoryMCP** (stdio) - 9 tools: `create_entities`, `create_relations`, `add_observations`, `delete_entities`, `delete_observations`, `delete_relations`, `read_graph`, `search_nodes`, `open_nodes`  

## ⚡ Essential Workflow

1. **Check Memory First**: `mcp_memoraimcp_recall("context keywords")`
2. **Plan Complex Work**: `manage_todo_list` with operation="write"
3. **Get Current Docs**: Add "use context7" to prompts
4. **Store Decisions**: `mcp_memoraimcp_remember` with metadata
5. **Complex Analysis**: Use `sequential_thinking` tool

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