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
**Memory**: `mcp_memoraimcp_recall` + `mcp_memoraimcp_remember` - Check context first, store decisions  
**Documentation**: Context7MCP - Add "use context7" for current library docs  
**Thinking**: Sequential-thinking MCP - For complex problem analysis  
**Automation**: GlassMCP (8 Windows tools), PlaywrightMCP (25+ browser tools), Microsoft Docs MCP  

**Critical Usage Pattern**:
1. Check memory with `recall` before starting any task
2. Use `manage_todo_list` for multi-step work
3. Store important decisions with `remember`
4. Use "use context7" for up-to-date documentation

## 🔧 VS Code Extensions Integration

**Essential Extensions**: GitHub Pull Requests, GitLens, Git Graph, Todo Tree, Project Manager  
**Usage Pattern**: Use extensions for UI workflows, MCP servers for AI automation  
**GitHub Workflow**: Extension for PR management, MCP for programmatic operations  
**Task Management**: Todo Tree for code comments, Copilot todos for project planning  
**Project Navigation**: Project Manager for workspace switching, memory MCP for context preservation

## ⚡ Core Principles

**Agent Mode First**: Let Copilot work autonomously, break large requests into focused prompts  
**Memory First**: Always check `mcp_memoraimcp_recall` before starting tasks  
**Todo Planning**: Use `manage_todo_list` for complex work - mark in-progress, complete immediately  
**Verify Everything**: Don't trust completion claims, double-check results  
**Terminal Direct**: Run commands directly, prefer terminal over UI automation  
**Context Preservation**: Store decisions and outcomes in memory for continuity

## 🔧 Problem Solving

1. **Plan**: Use `manage_todo_list` for multi-step troubleshooting
2. **Think**: Use sequential-thinking MCP for structured analysis  
3. **Research**: Check Context7 ("use context7") and recall memory
4. **Execute**: Break into components, solve systematically
5. **Store**: Save solutions in memory for future reference

## 🎯 MCP Best Practices

### Task Management:
- Use `manage_todo_list` for complex work - mark in-progress before starting, completed immediately after finishing
- Include specific file paths and acceptance criteria in descriptions

### Memory Usage:
- Start sessions by recalling relevant context: `mcp_memoraimcp_recall`
- Store important decisions: `mcp_memoraimcp_remember`
- Use structured data in SimpleMemoryMCP for entity relationships

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
- Keep user instructions and preferences in memory
- Stay practical and results-focused
- Terminal commands are preferred over UI automation
- Double-check everything, trust but verify
- Store important outcomes for future reference
- Leverage the full MCP ecosystem for maximum efficiency
