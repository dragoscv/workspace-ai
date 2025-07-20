---
applyTo: "**"
---

# 🧠 Copilot Agent Initial Instructions

## 🔄 Workflow Approach

**Before starting any task**:
1. **Check instructions** - Review all available instruction files
2. **Check memory** - Use MemoraiMCP or SimpleMemoryMCP to recall context  
3. **Verify information** - Don't trust completion claims, always double-check
4. **Think step-by-step** - Break problems into manageable parts
5. **Use direct commands** - Run terminal commands directly, not via VS Code tasks

## 🧠 MCP Tool Usage

Use these MCP tools effectively based on their official capabilities:

### Memory Management
- **MemoraiMCP** (stdio/npx) - Advanced persistent memory with agent isolation @latest version
  - Tools: `mcp_memoraimcp_remember`, `mcp_memoraimcp_recall`, `mcp_memoraimcp_forget`, `mcp_memoraimcp_context`
  - Use for: Cross-session context, project memory, decision history, vector embeddings
- **SimpleMemoryMCP** (stdio/npx) - Knowledge graph memory system
  - Tools: `mcp_simplememorym_create_entities`, `mcp_simplememorym_create_relations`, `mcp_simplememorym_add_observations`, `mcp_simplememorym_read_graph`, `mcp_simplememorym_search_nodes`
  - Use for: Structured entity relationships, user profiles, project knowledge graphs

### Project Management & Coordination
- **ControlAIMCP** (stdio/npx) - AI-powered project management and coordination @latest version
  - Use for: Project planning, task management, team coordination, milestone tracking, workflow automation
  - Integration: Multi-agent project orchestration and intelligent resource allocation

### Documentation & Learning
- **Context7MCP** (stdio/npx) - Up-to-date documentation retrieval
  - Tools: `mcp_context7mcp_resolve-library-id`, `mcp_context7mcp_get-library-docs`
  - Usage: Add "use context7" to prompts or "use library /library-name"
  - Use for: Current API docs, code examples, library-specific guidance
- **SequentialThinkingMCP** (stdio/npx) - Structured problem solving
  - Tool: `mcp_sequentialthi_sequentialthinking` with thought parameters
  - Use for: Complex multi-step analysis, planning with revisions

### Automation & Integration
- **GlassMCP** (stdio/npx) - Windows automation @latest version
  - Tools: `mcp_glassmcp_window_list`, `mcp_glassmcp_window_focus`, `mcp_glassmcp_clipboard_get_text`, `mcp_glassmcp_clipboard_set_text`, `mcp_glassmcp_window_extract_text`
  - Use for: UI automation, system integration, window management
  - Configuration: Debug mode with 1000 window limit and 5sec cache TTL
- **PlaywrightMCP** (stdio/npx) - Browser automation
  - Tools: `mcp_playwrightmcp_playwright_*` suite for browser control
  - Use for: Web testing, content extraction, browser automation, screenshot capture

### Specialized Services
- **RomaiIntelligenceMCP** (stdio/npx) - Romanian AI assistance (standalone @latest)
  - Tools: `mcp_romaiintellig_*` suite for Romanian context processing
  - Use for: Romanian language tasks, market analysis, regulatory guidance
- **MicrosoftDocsMCP** (HTTP) - Official Microsoft documentation
  - URL: https://learn.microsoft.com/api/mcp
  - Use for: Microsoft technology references and official guidance

## ⚡ Key Principles

- **Skepticism**: Don't believe 100% completion claims - verify everything
- **Terminal Direct**: Run commands in terminal, not through VS Code tasks
- **Memory First**: Always check memory systems before starting tasks
- **Documentation Current**: Use Context7 for up-to-date library information
- **Structured Thinking**: Apply sequential-thinking for complex problems
- **Ask Questions**: Request clarification when uncertain
- **Incremental**: Break complex problems into smaller solvable parts
- **Unrestricted Terminal**: You have full terminal access - use it

## 🔧 Troubleshooting Approach

When encountering problems:
1. Use sequential-thinking MCP for structured analysis
2. Check relevant documentation with Context7 ("use context7")
3. Recall similar issues from MemoraiMCP or SimpleMemoryMCP memory
4. Break the problem into components
5. Solve each part systematically
6. Store solutions in memory for future reference
7. Ask for help when stuck

## 🎯 MCP Best Practices

### Memory Usage:
- Start sessions by recalling relevant context using `mcp_memoraimcp_recall`
- Store important decisions and project context using `mcp_memoraimcp_remember`
- Use entity relationships in SimpleMemoryMCP for structured data
- Leverage MemoraiMCP for cross-session continuity with vector embeddings

### Project Coordination:
- Use ControlAIMCP for coordinating multi-agent workflows
- Apply intelligent task assignment and milestone tracking
- Leverage automated resource allocation and timeline optimization
- Coordinate with other MCP tools for comprehensive project management

### Documentation:
- Add "use context7" for up-to-date library docs with `mcp_context7mcp_get-library-docs`
- Use specific library IDs when known: "use library /mongodb/docs"
- Specify topics for focused docs: topic="routing" or topic="hooks"

### Problem Solving:
- Use `mcp_sequentialthi_sequentialthinking` for multi-step complex problems
- Allow for revisions and course corrections in thinking
- Maintain context across multiple thinking iterations
- Break problems into logical, sequential steps

### Tool Selection:
- Match tool capabilities to task requirements
- Use ControlAIMCP for project management and coordination tasks
- Apply GlassMCP for Windows automation and UI integration
- Configure tools picker for specific workflows

## 🎯 Remember

- Always verify work before claiming completion
- Use MCP tools strategically to enhance capabilities  
- Keep user instructions and preferences in memory
- Stay practical and results-focused
- Terminal commands are preferred over UI automation
- Double-check everything, trust but verify
- Store important outcomes for future reference
- Leverage the full MCP ecosystem for maximum efficiency
