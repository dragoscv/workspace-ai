---
applyTo: '**'
---

# 🧠 Model Context Protocol (MCP) Usage Guide

This guide provides comprehensive instructions for using the configured MCP servers in your VS Code development environment. All servers are properly configured and ready for use in agent mode.

## 🔧 Current MCP Configuration
**Location**: `C:\Users\vladu\VS Code Insiders Profiles\ghcp1_metu\User\profiles\25baaa05\mcp.json`

Your environment includes 9 active MCP servers providing specialized tools and capabilities.

---

## � ControlAIMCP - AI-Powered Project Management
**Transport**: stdio via npx
**Command**: `controlai-mcp@latest`
**Purpose**: Multi-agent project coordination and intelligent workflow automation

### Available Tools:
- Project planning and milestone tracking
- Task assignment and resource allocation
- Team coordination and workflow automation
- Performance monitoring and optimization
- Multi-agent orchestration and collaboration

### Usage Examples:
```
Coordinate development team for sprint planning
Allocate resources across multiple projects
Track milestone dependencies and critical path
Automate status reporting and stakeholder updates
```

---

## 🧠 MemoraiMCP - Advanced Memory Management
**Transport**: stdio via npx
**Command**: `@codai/memorai-mcp@latest`
**Purpose**: Persistent agent memory across sessions with agent isolation

### Available Tools:
- `mcp_memoraimcp_remember` - Store information with metadata
- `mcp_memoraimcp_recall` - Search and retrieve stored information
- `mcp_memoraimcp_forget` - Delete specific memories
- `mcp_memoraimcp_context` - Get contextual information for current task

### Usage Pattern:
```
Remember user preferences and project context
Recall previous conversations and decisions
Store important project information
Maintain context across development sessions
```

**Memory Best Practices**:
1. Always begin sessions by recalling relevant context
2. Store important decisions and insights
3. Use agent isolation for different projects
4. Regularly update stored information

---

## 🖼️ GlassMCP - Advanced Windows Automation
**Transport**: stdio via npx
**Command**: `@codai/glass-mcp@latest`
**Purpose**: Windows management and UI automation with production features

### Available Tools:
- `mcp_glassmcp_window_list` - List all open windows
- `mcp_glassmcp_window_focus` - Focus a specific window  
- `mcp_glassmcp_window_send_text` - Send text to a window
- `mcp_glassmcp_window_extract_text` - Extract text from a window
- `mcp_glassmcp_clipboard_get_text` - Get clipboard content
- `mcp_glassmcp_clipboard_set_text` - Set clipboard content

### Configuration:
- Debug logging enabled with configurable levels
- Max windows: 1000 (configurable)
- Window cache TTL: 5 seconds
- Development environment support

### Usage Examples:
```
Focus on the browser window
Get the current clipboard content
Send text to the active terminal window
Extract text from specific application windows
```

---
## 🎭 PlaywrightMCP - Browser Automation
**Transport**: stdio via npx
**Command**: `@executeautomation/playwright-mcp-server`

### Capabilities:
- Browser automation and control
- Web page content extraction
- Browser console log monitoring
- Dynamic web testing

### Usage Examples:
```
Extract content from a webpage
Monitor browser console for errors
Automate web form submissions
Capture screenshots for documentation
```

---

## 🇷🇴 RomaiIntelligenceMCP - Romanian AI Assistant
**Transport**: stdio via npx
**Command**: `@codai/romai-mcp-standalone@latest`
**Purpose**: Romanian language AI assistance and specialized intelligence

### Available Tools:
- `mcp_romaiintellig_analyze_romanian_text` - Analyze Romanian text for patterns and context
- `mcp_romaiintellig_romanian_culture_context` - Provide Romanian cultural context
- `mcp_romaiintellig_translate_to_romanian` - Translate to Romanian with cultural awareness

### Usage Examples:
```
Get Romanian market analysis for a product
Translate technical documentation to Romanian
Understand Romanian regulatory requirements
Analyze Romanian text for sentiment and cultural context
```

---

## 🧠 SimpleMemoryMCP - Knowledge Graph Memory
**Transport**: stdio via npx
**Command**: `@modelcontextprotocol/server-memory`

### Available Tools:
- `mcp_simplememorym_create_entities` - Create new knowledge entities
- `mcp_simplememorym_create_relations` - Define relationships between entities
- `mcp_simplememorym_add_observations` - Add facts about entities
- `mcp_simplememorym_delete_entities` - Remove entities and relations
- `mcp_simplememorym_delete_observations` - Remove specific facts
- `mcp_simplememorym_delete_relations` - Remove relationships
- `mcp_simplememorym_read_graph` - Read the entire knowledge graph
- `mcp_simplememorym_search_nodes` - Search for specific entities
- `mcp_simplememorym_open_nodes` - Retrieve specific entities by name

---

## 📚 Context7MCP - Up-to-Date Documentation
**Transport**: stdio via npx
**Command**: `@upstash/context7-mcp`

### Available Tools:
- `mcp_context7mcp_resolve-library-id` - Find Context7-compatible library IDs
- `mcp_context7mcp_get-library-docs` - Fetch current documentation for libraries

### Tool Parameters:
- **resolve-library-id**:
  - `libraryName` (required): The name of the library to search for
- **get-library-docs**:
  - `context7CompatibleLibraryID` (required): Exact library ID (e.g., `/mongodb/docs`, `/vercel/next.js`)
  - `topic` (optional): Focus on specific topic (e.g., "routing", "hooks")
  - `tokens` (optional, default 10000): Max tokens to return

### Usage Pattern:
1. Write your prompt naturally
2. Add "use context7" to your prompt
3. Get working code with up-to-date examples

### Examples:
```
Create a Next.js middleware for JWT validation. use context7
Configure Cloudflare Worker for API caching. use context7
Implement authentication with Supabase. use library /supabase/supabase
```

### Pro Tips:
- Use exact library IDs when known (e.g., `/mongodb/docs`, `/vercel/next.js`)
- Add VS Code rules to auto-invoke Context7 for code questions
- Specify topics for focused documentation (e.g., "routing", "hooks")
- Use slash syntax for direct library access: `use library /supabase/supabase`

---

## 🤔 Sequential-thinking MCP - Structured Problem Solving
**Transport**: stdio via npx
**Command**: `@modelcontextprotocol/server-sequential-thinking`

### Available Tools:
- `mcp_sequentialthi_sequentialthinking` - Structured step-by-step analysis

### Tool Parameters:
- `thought` (string): Current thinking step
- `nextThoughtNeeded` (boolean): Whether another step is needed
- `thoughtNumber` (integer): Current thought number
- `totalThoughts` (integer): Estimated total thoughts needed
- `isRevision` (boolean, optional): Whether revising previous thinking
- `revisesThought` (integer, optional): Which thought is being reconsidered
- `branchFromThought` (integer, optional): Branching point
- `branchId` (string, optional): Branch identifier
- `needsMoreThoughts` (boolean, optional): If more thoughts are needed

### Use Cases:
- Breaking down complex problems into manageable steps
- Planning and design with room for revision
- Analysis that might need course corrections
- Problems where the full scope might not be clear initially
- Tasks requiring context maintenance over multiple steps
- Filtering irrelevant information from complex scenarios

### Best Practices:
- Use for complex problem-solving that benefits from structured thinking
- Allow for revisions and course corrections in your thinking process
- Break problems into logical, sequential steps
- Maintain context across multiple thinking iterations

---

## 📖 Microsoft Learn Docs MCP
**Transport**: HTTP  
**URL**: `https://learn.microsoft.com/api/mcp`

### Available Tools:
- `microsoft_docs_search` - Search Microsoft official technical documentation

### Tool Parameters:
- `query` (string): The search query for retrieval

### Capabilities:
- High-Quality Content Retrieval from Microsoft Learn, Azure docs, Microsoft 365 docs
- Semantic Understanding using advanced vector search
- Optimized Chunking: Returns up to 10 high-quality content chunks (max 500 tokens each)
- Real-time Updates: Access the latest Microsoft documentation

### Usage Examples:
```
Give me the Azure CLI commands to create an Azure Container App. search Microsoft docs
How do I implement IHttpClientFactory in .NET 8 minimal API? search Microsoft docs
Is gpt-4.1-mini available in EU regions? search Microsoft docs
```

---

### Knowledge Graph Usage:
Follow these steps for each interaction:

1. **User Identification**:
   - Assume interaction with default_user
   - Proactively identify user context

2. **Memory Retrieval**:
   - Begin by saying "Remembering..." and retrieve relevant information
   - Reference the knowledge graph as "memory"

3. **Information Categories**:
   a) Basic Identity (age, location, job title, etc.)
   b) Behaviors (interests, habits, etc.)
   c) Preferences (communication style, language, etc.)
   d) Goals (targets, aspirations, etc.)
   e) Relationships (personal and professional up to 3 degrees)

4. **Memory Updates**:
   - Create entities for recurring organizations, people, events
   - Connect entities using relations
   - Store facts as observations

### Entity Structure Examples:
```json
{
  "name": "John_Smith",
  "entityType": "person",
  "observations": ["Speaks fluent Spanish", "Graduated in 2019", "Prefers morning meetings"]
}
```

### Relations Structure:
```json
{
  "from": "John_Smith",
  "to": "Anthropic", 
  "relationType": "works_at"
}
```

---
>>
## 📚 Context7MCP - Up-to-Date Documentation
**Transport**: stdio via npx
**Command**: `@upstash/context7-mcp`
>>
### Available Tools:
- `resolve-library-id` - Find Context7-compatible library IDs
- `get-library-docs` - Fetch current documentation for libraries
>>
### Tool Parameters:
- **resolve-library-id**:
  - `libraryName` (required): The name of the library to search for
- **get-library-docs**:
  - `context7CompatibleLibraryID` (required): Exact library ID (e.g., `/mongodb/docs`, `/vercel/next.js`)
  - `topic` (optional): Focus on specific topic (e.g., "routing", "hooks")
  - `tokens` (optional, default 10000): Max tokens to return
>>
### Usage Pattern:
1. Write your prompt naturally
2. Add "use context7" to your prompt
3. Get working code with up-to-date examples
>>
### Examples:
```
Create a Next.js middleware for JWT validation. use context7
Configure Cloudflare Worker for API caching. use context7
Implement authentication with Supabase. use library /supabase/supabase
```
>>
### Pro Tips:
- Use exact library IDs when known (e.g., `/mongodb/docs`, `/vercel/next.js`)
- Add VS Code rules to auto-invoke Context7 for code questions
- Specify topics for focused documentation (e.g., "routing", "hooks")
- Use slash syntax for direct library access: `use library /supabase/supabase`
>>
---
>>
## 🤔 Sequential-thinking MCP - Structured Problem Solving
**Transport**: stdio via npx
**Command**: `@modelcontextprotocol/server-sequential-thinking`
>>
### Available Tools:
- `sequential_thinking` - Structured step-by-step analysis
>>
### Tool Parameters:
- `thought` (string): Current thinking step
- `nextThoughtNeeded` (boolean): Whether another step is needed
- `thoughtNumber` (integer): Current thought number
- `totalThoughts` (integer): Estimated total thoughts needed
- `isRevision` (boolean, optional): Whether revising previous thinking
- `revisesThought` (integer, optional): Which thought is being reconsidered
- `branchFromThought` (integer, optional): Branching point
- `branchId` (string, optional): Branch identifier
- `needsMoreThoughts` (boolean, optional): If more thoughts are needed
>>
### Use Cases:
- Breaking down complex problems into manageable steps
- Planning and design with room for revision
- Analysis that might need course correction
- Problems where the full scope might not be clear initially
- Tasks requiring context maintenance over multiple steps
- Filtering irrelevant information from complex scenarios
>>
### Best Practices:
- Use for complex problem-solving that benefits from structured thinking
- Allow for revisions and course corrections in your thinking process
- Break problems into logical, sequential steps
- Maintain context across multiple thinking iterations
>>
---
>>
## 📖 Microsoft Learn Docs MCP
**Transport**: HTTP  
**URL**: `https://learn.microsoft.com/api/mcp`

### Available Tools:
- `microsoft_docs_search` - Search Microsoft official technical documentation

### Tool Parameters:
- `query` (string): The search query for retrieval

### Capabilities:
- High-Quality Content Retrieval from Microsoft Learn, Azure docs, Microsoft 365 docs
- Semantic Understanding using advanced vector search
- Optimized Chunking: Returns up to 10 high-quality content chunks (max 500 tokens each)
- Real-time Updates: Access the latest Microsoft documentation

### Usage Examples:
```
Give me the Azure CLI commands to create an Azure Container App. search Microsoft docs
How do I implement IHttpClientFactory in .NET 8 minimal API? search Microsoft docs
Is gpt-4.1-mini available in EU regions? search Microsoft docs
```
>>
---
>>
## 🔧 General MCP Usage Guidelines
>>
### Agent Mode Integration:
- All MCP tools are automatically available in VS Code agent mode
- Tools are invoked intelligently based on task requirements
- Use the tools picker (Configure Tools) to enable/configure specific tools
- Confirmation dialogs appear for non-read-only tools
- Edit parameters in the tool confirmation dialog before execution
>>
### Best Practices:
1. **Memory First**: Always check memory servers for context before starting tasks
2. **Tool Selection**: Use specific tools for their intended purposes - match tool capabilities to task needs
3. **Context Preservation**: Store important information in memory systems for future reference
4. **Documentation**: Use Context7 for up-to-date library information and code examples
5. **Structured Thinking**: Apply sequential-thinking for complex multi-step problems
6. **Windows Automation**: Use GlassMCP for UI automation and system integration tasks
7. **Romanian Context**: Leverage RomaiIntelligenceMCP for Romanian-specific needs and localization
>>
### Development Workflow:
1. **Start with Memory**: Check MemoraiMCP or SimpleMemoryMCP for relevant context
2. **Gather Documentation**: Use Context7MCP for up-to-date API docs and examples
3. **Structure Complex Tasks**: Apply Sequential-thinking for multi-step problems
4. **Automate UI Tasks**: Use GlassMCP for Windows automation when needed
5. **Store Results**: Save important outcomes in memory for future reference
>>
### Troubleshooting:
- Check MCP server status: `MCP: List Servers` command
- View server logs: "Show Output" option in Extensions view
- Restart servers: From Extensions view MCP servers section
- Verify configuration: Check mcp.json file syntax
- Test individual tools: Use tools picker to test specific MCP tools
>>
### MCP Server Management:
- **Start/Stop/Restart**: Control server lifecycle from Extensions view
- **Show Configuration**: View current MCP server settings
- **Browse Resources**: Access MCP server resources directly
- **Configure Model Access**: Set which models MCP servers can use for sampling
- **Show Sampling Requests**: Monitor MCP server model usage
>>
### Development Mode:
For MCP development, add `dev` property to server configuration:
```json
"dev": {
  "watch": "src/**/*.ts",
  "debug": { "type": "node" }
}
```
>>
---
>>
## 🚀 Quick Start Checklist
>>
### Initial Setup:
- [ ] Verify all MCP servers are running (check ports 8001-8003 for HTTP servers)
- [ ] Enable agent mode in VS Code chat
- [ ] Configure tools picker with desired MCP tools
- [ ] Check MCP server status with `MCP: List Servers`
>>
### Test Each Server:
- [ ] Test memory recall with MemoraiMCP or SimpleMemoryMCP
- [ ] Try Context7 with a documentation query (add "use context7")
- [ ] Use GlassMCP for a simple window operation
- [ ] Test sequential-thinking for a complex problem
- [ ] Verify Playwright MCP for browser automation
- [ ] Test RomaiIntelligenceMCP for Romanian context
>>
### Integration Verification:
- [ ] Confirm tools appear in agent mode tools picker
- [ ] Test tool confirmation dialogs
- [ ] Verify non-read-only tools require confirmation
- [ ] Check that tools can access workspace context
- [ ] Validate model access permissions for sampling-enabled servers
>>
**Remember**: These MCP servers significantly extend your development capabilities. Use them actively and strategically to enhance your workflow efficiency and code quality!