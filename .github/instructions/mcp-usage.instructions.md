---
applyTo: '**'
---

# 🧠 Model Context Protocol (MCP) Usage Guide

This guide provides comprehensive instructions for using the configured MCP servers in your VS Code development environment. All servers are properly configured and ready for use in agent mode.

## 🔧 Current MCP Configuration
**Location**: `C:\Users\vladu\VS Code Insiders Profiles\Dragos_metu\User\profiles\2843e\mcp.json`

Your environment includes 7 active MCP servers providing specialized tools and capabilities.

---

## 🧠 MemoraiMCP - Advanced Memory Management
**Transport**: HTTP (localhost:4950)
**Purpose**: Persistent agent memory across sessions with agent isolation

### Available Tools:
- `remember` - Store information with metadata
- `recall` - Search and retrieve stored information
- `forget` - Delete specific memories
- `context` - Get contextual information for current task

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

## 🖼️ GlassMCP - Windows Automation
**Transport**: stdio via npx
**Command**: `npx -y @codai/glass-mcp`
**Purpose**: Windows management and UI automation

### Available Tools (8 tools):
- `window_list` - List all open windows with handles, titles, and properties
- `window_focus` - Focus a specific window by title or handle
- `window_send_text` - Send text input to a window by handle or title
- `window_send_text_by_title` - Send text to window found by title (exact/partial match)
- `window_extract_text` - Extract all text content from window using UI Automation
- `window_extract_text_by_title` - Extract text from window by finding it by title
- `clipboard_get_text` - Get text content from system clipboard
- `clipboard_set_text` - Set text content to system clipboard

### Tool Parameters:
```yaml
window_list:
  query (optional): Query for help/system information (e.g., "help", "capabilities")

window_focus:
  title (required): Window title to focus
  exact (optional, default: false): Whether to match title exactly

window_send_text_by_title:
  title (required): Window title to send text to
  text (required): Text to send to the window
  exact (optional, default: false): Whether to match title exactly

window_extract_text_by_title:
  title (required): Window title to extract text from
  exact (optional, default: false): Whether to match title exactly

clipboard_get_text: No parameters required
clipboard_set_text:
  text (required): Text to set in clipboard
```

### Usage Examples:
```
Focus on the browser window
Get the current clipboard content
Send text to the active terminal window
Extract all text from a specific application window
```
Maintain context across development sessions
```

**Memory Best Practices**:
1. Always begin sessions by recalling relevant context
2. Store important decisions and insights
3. Use agent isolation for different projects
4. Regularly update stored information

---

##  PlaywrightMCP - Browser Automation
**Transport**: stdio via npx
**Command**: `@executeautomation/playwright-mcp-server`

### Capabilities (25+ tools):
- **Navigation & Page Management**: `playwright_navigate`, `playwright_go_back`, `playwright_go_forward`
- **Element Interaction**: `playwright_click`, `playwright_fill`, `playwright_hover`, `playwright_select`, `playwright_press_key`
- **Content Extraction**: `playwright_get_visible_text`, `playwright_get_visible_html`
- **Browser Automation**: `playwright_close`, `playwright_custom_user_agent`, `playwright_save_as_pdf`
- **Advanced Interactions**: `playwright_drag`, `playwright_upload_file`, `playwright_evaluate`
- **Tab Management**: `playwright_click_and_switch_tab`
- **HTTP Operations**: `playwright_get`, `playwright_post`, `playwright_put`, `playwright_patch`, `playwright_delete`
- **Response Handling**: `playwright_expect_response`, `playwright_assert_response`
- **Console & Logging**: `playwright_console_logs`
- **iFrame Support**: `playwright_iframe_click`, `playwright_iframe_fill`
- **Code Generation**: Session management with `start_codegen_session`, `get_codegen_session`, `end_codegen_session`, `clear_codegen_session`

### Key Tool Parameters:
```yaml
playwright_navigate:
  url (required): URL to navigate to
  browserType (optional): chromium, firefox, webkit (default: chromium)
  headless (optional, default: false): Run in headless mode
  width (optional, default: 1280): Viewport width
  height (optional, default: 720): Viewport height
  timeout (optional): Navigation timeout in milliseconds

playwright_click:
  selector (required): CSS selector for element to click

playwright_fill:
  selector (required): CSS selector for input field
  value (required): Value to fill

playwright_get_visible_html:
  selector (optional): CSS selector to limit HTML to specific container
  removeScripts (optional, default: true): Remove script tags
  cleanHtml (optional, default: false): Comprehensive HTML cleaning
  maxLength (optional, default: 20000): Maximum characters to return

playwright_post:
  url (required): URL for POST operation
  value (required): Data to post in body
  headers (optional): Additional headers
  token (optional): Bearer token for authorization

start_codegen_session:
  options (required):
    outputPath (required): Directory for generated tests (absolute path)
    testNamePrefix (optional, default: 'GeneratedTest'): Prefix for test names
    includeComments (optional): Include descriptive comments in tests
```

### Usage Examples:
```
Navigate to a website and extract content
Automate form submissions and user flows
Generate Playwright test code from recorded actions
Monitor browser console for errors
Capture screenshots for documentation
```

---

## 🧠 SimpleMemoryMCP - Knowledge Graph Memory
**Transport**: stdio via npx
**Command**: `@modelcontextprotocol/server-memory`

### Available Tools (9 tools):
- `create_entities` - Create new knowledge entities
- `create_relations` - Define relationships between entities
- `add_observations` - Add facts about entities
- `delete_entities` - Remove entities and relations
- `delete_observations` - Remove specific facts
- `delete_relations` - Remove relationships
- `read_graph` - Read the entire knowledge graph
- `search_nodes` - Search for specific entities
- `open_nodes` - Retrieve specific entities by name

### Tool Parameters:
```yaml
create_entities:
  entities (array of objects, required):
    - name (string): Entity identifier
    - entityType (string): Type classification
    - observations (string[]): Associated observations

create_relations:
  relations (array of objects, required):
    - from (string): Source entity name
    - to (string): Target entity name
    - relationType (string): Relationship type in active voice

add_observations:
  observations (array of objects, required):
    - entityName (string): Target entity
    - contents (string[]): New observations to add

delete_entities:
  entityNames (string[]): Names of entities to delete

search_nodes:
  query (string): Search query to match against entity names, types, and observations

open_nodes:
  names (string[]): Array of entity names to retrieve

read_graph: No parameters required
```

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

## 📚 Context7MCP - Up-to-Date Documentation
**Transport**: stdio via npx
**Command**: `@upstash/context7-mcp`

### Available Tools:
- `resolve-library-id` - Find Context7-compatible library IDs
- `get-library-docs` - Fetch current documentation for libraries

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

### Available Tools (1 tool):
- `sequential_thinking` - Structured step-by-step analysis

### Tool Parameters:
```yaml
sequential_thinking:
  thought (string, required): Current thinking step
  nextThoughtNeeded (boolean, required): Whether another step is needed
  thoughtNumber (integer, required): Current thought number
  totalThoughts (integer, required): Estimated total thoughts needed
  isRevision (boolean, optional): Whether revising previous thinking
  revisesThought (integer, optional): Which thought is being reconsidered
  branchFromThought (integer, optional): Branching point
  branchId (string, optional): Branch identifier
  needsMoreThoughts (boolean, optional): If more thoughts are needed
```

### Use Cases:
- Breaking down complex problems into manageable steps
- Planning and design with room for revision
- Analysis that might need course correction
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

### Available Tools (1 tool):
- `microsoft_docs_search` - Search Microsoft official technical documentation

### Tool Parameters:
```yaml
microsoft_docs_search:
  query (string, required): The search query for retrieval
```

### Capabilities:
- **High-Quality Content Retrieval** from Microsoft Learn, Azure docs, Microsoft 365 docs
- **Semantic Understanding** using advanced vector search
- **Optimized Chunking**: Returns up to 10 high-quality content chunks (max 500 tokens each)
- **Real-time Updates**: Access the latest Microsoft documentation

### Usage Examples:
```
Give me the Azure CLI commands to create an Azure Container App. search Microsoft docs
How do I implement IHttpClientFactory in .NET 8 minimal API? search Microsoft docs
Is gpt-4.1-mini available in EU regions? search Microsoft docs
```

---

---

## � GitHub Copilot Todos Tool - Task Management
**Transport**: Built-in VS Code Copilot tool
**Purpose**: Structured task planning and progress tracking

### Available Tools:
- `manage_todo_list` - Create, read, update, and track todo items with status management

### Tool Parameters:
- `operation` (required): "write" to replace entire list, "read" to retrieve current list
- `todoList` (array, required for write): Complete array of all todo items

### Todo Item Structure:
```json
{
  "id": 1,
  "title": "Concise action-oriented label (3-7 words)",
  "description": "Detailed context, requirements, file paths, acceptance criteria",
  "status": "not-started" | "in-progress" | "completed"
}
```

### Usage Workflow:
**CRITICAL**: Use this tool VERY frequently for complex multi-step work

1. **Plan Tasks**: Write todo list with specific, actionable items before starting work
2. **Mark In-Progress**: Mark ONE todo as in-progress before starting work (limit one at a time)
3. **Complete Work**: Do the actual work for that specific todo
4. **Mark Completed**: Mark todo as completed IMMEDIATELY after finishing
5. **Move to Next**: Repeat process for next todo

### When to Use:
- ✅ Complex multi-step work requiring planning and tracking
- ✅ When user provides multiple tasks or requests (numbered/comma-separated)
- ✅ After receiving new instructions that require multiple steps
- ✅ BEFORE starting work on any todo (mark as in-progress)
- ✅ IMMEDIATELY after completing each todo (mark completed individually)
- ✅ When breaking down larger tasks into smaller actionable steps
- ✅ To give users visibility into your progress and planning

### When NOT to Use:
- ❌ Single, trivial tasks that can be completed in one step
- ❌ Purely conversational/informational requests
- ❌ When just reading files or performing simple searches

### Best Practices:
1. **Complete Lists Only**: Always provide complete todo arrays when writing - partial updates not supported
2. **Immediate Updates**: Mark todos completed as soon as they are done - do not batch completions
3. **One In-Progress**: Limit to ONE todo marked as in-progress at a time
4. **Specific Descriptions**: Include file paths, specific methods, or acceptance criteria in descriptions
5. **Frequent Usage**: Use for ANY complex work to ensure task visibility and proper planning

### Usage Examples:
```
# Planning Phase
Write todo list: [
  {id: 1, title: "Update MCP instructions", description: "Remove controlai references, add todos tool usage", status: "not-started"},
  {id: 2, title: "Update initial instructions", description: "Add latest Copilot best practices from Microsoft docs", status: "not-started"}
]

# Starting Work
Mark todo 1 as in-progress

# Completing Work
Mark todo 1 as completed immediately after finishing

# Moving Forward
Mark todo 2 as in-progress and continue
```

---

### Agent Mode Integration:
- All MCP tools are automatically available in VS Code agent mode
- Tools are invoked intelligently based on task requirements
- Use the tools picker (Configure Tools) to enable/configure specific tools
- Confirmation dialogs appear for non-read-only tools
- Edit parameters in the tool confirmation dialog before execution

### MCP vs VS Code Extensions - Usage Guidelines:

#### Use MCP Servers For:
- **AI Agent Automation**: Programmatic operations that AI agents need to perform
- **Cross-Application Integration**: Windows automation, browser automation, external APIs
- **Memory & Context Management**: Persistent memory, knowledge graphs, structured thinking
- **Documentation & Research**: Up-to-date library docs, Microsoft documentation search
- **Background Processing**: Tasks that don't require user interaction

#### Use VS Code Extensions For:
- **UI-Based Workflows**: Visual operations like Git blame, PR reviews, project navigation
- **Interactive Development**: Code exploration, visual graphs, interactive debugging
- **User Experience Enhancement**: Better UI for common development tasks
- **Real-time Feedback**: Live syntax highlighting, error detection, intellisense

#### Integration Strategy:
```yaml
Optimal Workflow:
  GitHub Integration:
    - Use GitHub Pull Requests extension for UI-based PR management
    - Use MCP tools for automated GitHub operations and data analysis
    - Use GitLens extension for visual Git history and blame annotations
    - Use Git Graph extension for visual branch management
    
  Task Management:
    - Use Todo Tree extension for code-level TODO/FIXME tracking
    - Use GitHub Copilot todos tool (MCP) for project-level task planning
    - Use Project Manager extension for workspace switching
    
  Documentation & Research:
    - Use Context7MCP for up-to-date library documentation
    - Use Microsoft Docs MCP for official Microsoft documentation
    - Use VS Code's built-in documentation viewers for local docs
```

### Best Practices:
1. **Memory First**: Always check memory servers for context before starting tasks
2. **Tool Selection**: Use specific tools for their intended purposes - match tool capabilities to task needs
3. **Context Preservation**: Store important information in memory systems for future reference
4. **Documentation**: Use Context7 for up-to-date library information and code examples
5. **Structured Thinking**: Apply sequential-thinking for complex multi-step problems
6. **Windows Automation**: Use GlassMCP for UI automation and system integration tasks
7. **Extension Complement**: Use VS Code extensions to enhance the development experience alongside MCP capabilities

### Development Workflow:
1. **Start with Memory**: Check MemoraiMCP or SimpleMemoryMCP for relevant context
2. **Gather Documentation**: Use Context7MCP for up-to-date API docs and examples
3. **Structure Complex Tasks**: Apply Sequential-thinking for multi-step problems
4. **Automate UI Tasks**: Use GlassMCP for Windows automation when needed
5. **Store Results**: Save important outcomes in memory for future reference

### Troubleshooting:
- Check MCP server status: `MCP: List Servers` command
- View server logs: "Show Output" option in Extensions view
- Restart servers: From Extensions view MCP servers section
- Verify configuration: Check mcp.json file syntax
- Test individual tools: Use tools picker to test specific MCP tools

### MCP Server Management:
- **Start/Stop/Restart**: Control server lifecycle from Extensions view
- **Show Configuration**: View current MCP server settings
- **Browse Resources**: Access MCP server resources directly
- **Configure Model Access**: Set which models MCP servers can use for sampling
- **Show Sampling Requests**: Monitor MCP server model usage

### Development Mode:
For MCP development, add `dev` property to server configuration:
```json
"dev": {
  "watch": "src/**/*.ts",
  "debug": { "type": "node" }
}
```

---

## 🚀 Quick Start Checklist

### Initial Setup:
- [ ] Verify all MCP servers are running (check port 4950 for MemoraiMCP HTTP server)
- [ ] Enable agent mode in VS Code chat
- [ ] Configure tools picker with desired MCP tools
- [ ] Check MCP server status with `MCP: List Servers`

### Test Each Server:
- [ ] Test memory recall with MemoraiMCP or SimpleMemoryMCP
- [ ] Try Context7 with a documentation query (add "use context7")
- [ ] Use GlassMCP for a simple window operation
- [ ] Test sequential-thinking for a complex problem
- [ ] Verify Playwright MCP for browser automation

### Integration Verification:
- [ ] Confirm tools appear in agent mode tools picker
- [ ] Test tool confirmation dialogs
- [ ] Verify non-read-only tools require confirmation
- [ ] Check that tools can access workspace context
- [ ] Validate model access permissions for sampling-enabled servers

---

## 📋 GitHub Copilot Todos Tool - Task Management
**Transport**: Built-in VS Code Copilot tool
**Purpose**: Structured task planning and progress tracking

### Available Tools (1 tool):
- `manage_todo_list` - Create, read, update, and track todo items with status management

### Tool Parameters:
```yaml
manage_todo_list:
  operation (required): "write" to replace entire list, "read" to retrieve current list
  todoList (array, required for write): Complete array of all todo items
```

### Todo Item Structure:
```json
{
  "id": 1,
  "title": "Concise action-oriented label (3-7 words)",
  "description": "Detailed context, requirements, file paths, acceptance criteria",
  "status": "not-started" | "in-progress" | "completed"
}
```

### Usage Workflow:
**CRITICAL**: Use this tool VERY frequently for complex multi-step work

1. **Plan Tasks**: Write todo list with specific, actionable items before starting work
2. **Mark In-Progress**: Mark ONE todo as in-progress before starting work (limit one at a time)
3. **Complete Work**: Do the actual work for that specific todo
4. **Mark Completed**: Mark todo as completed IMMEDIATELY after finishing
5. **Move to Next**: Repeat process for next todo

### When to Use:
- ✅ Complex multi-step work requiring planning and tracking
- ✅ When user provides multiple tasks or requests (numbered/comma-separated)
- ✅ After receiving new instructions that require multiple steps
- ✅ BEFORE starting work on any todo (mark as in-progress)
- ✅ IMMEDIATELY after completing each todo (mark completed individually)
- ✅ When breaking down larger tasks into smaller actionable steps
- ✅ To give users visibility into your progress and planning

### When NOT to Use:
- ❌ Single, trivial tasks that can be completed in one step
- ❌ Purely conversational/informational requests
- ❌ When just reading files or performing simple searches

### Best Practices:
1. **Complete Lists Only**: Always provide complete todo arrays when writing - partial updates not supported
2. **Immediate Updates**: Mark todos completed as soon as they are done - do not batch completions
3. **One In-Progress**: Limit to ONE todo marked as in-progress at a time
4. **Specific Descriptions**: Include file paths, specific methods, or acceptance criteria in descriptions
5. **Frequent Usage**: Use for ANY complex work to ensure task visibility and proper planning

**Remember**: These MCP servers significantly extend your development capabilities. Use them actively and strategically to enhance your workflow efficiency and code quality!
