---
applyTo: "**'
---

# 🧠 Model Context Protocol (MCP) Usage Guide

This guide provides comprehensive instructions for using the configured MCP servers in your VS Code development environment. All servers are properly configured and ready for use in agent mode.

## 🔧 Current MCP Configuration
**Location**: `C:\Users\vladu\VS Code Insiders Profiles\Dragos_metu\User\profiles\2843e\mcp.json`

Your environment includes 10 active MCP servers providing specialized tools and capabilities:
- **MemoraiMCP**: Advanced memory management with agent isolation
- **CAUTAI MCP**: Ultra-fast web search and research intelligence
- **GlassMCP**: Windows automation and UI interaction
- **PlaywrightMCP**: Browser automation and web testing
- **SimpleMemoryMCP**: Knowledge graph and entity relationships
- **Context7MCP**: Up-to-date documentation and library information
- **Sequential-thinking MCP**: Structured problem-solving and analysis
- **Microsoft Docs MCP**: Official Microsoft documentation search
- **GitHub MCP**: GitHub repository and issue management
- **Web Search MCP**: Real-time web search for current information

---

## 🧠 MemoraiMCP - Advanced Memory Management (PRODUCTION-READY)
**Transport**: HTTP (localhost:4950)
**Purpose**: Enterprise-grade persistent agent memory with sub-millisecond response times

### ✅ PRODUCTION-READY CAPABILITIES
- **95% efficiency improvements** and **sub-3-second response times**
- **Intelligent search** with relevance scoring and content highlighting
- **Knowledge graph exploration** with relationship mapping and clustering
- **Advanced analytics** with usage insights and performance optimization
- **Episodic memory** for experiential learning and context adaptation
- **Federated queries** for multi-agent coordination and collaborative intelligence
- **Adaptive organization** for continuous memory optimization

### Available Tools (13+ advanced tools):

#### Core Memory Operations (4 tools):
- `mcp_memoraimcp_remember` - Store memories with structured metadata and agent isolation
- `mcp_memoraimcp_recall` - Intelligent semantic search with relevance ranking and content highlighting
- `mcp_memoraimcp_forget` - Delete memories by structured key with validation
- `mcp_memoraimcp_context` - Get recent context for agent with filtering options

#### Knowledge Graph & Relationships (4 tools):
- `mcp_memoraimcp_link_memories` - Create explicit relationships between memories with context and strength
- `mcp_memoraimcp_explore_graph` - Navigate knowledge graph with relationship discovery and clustering
- `mcp_memoraimcp_get_relationships` - Retrieve memory relationships with depth traversal
- `mcp_memoraimcp_search_keys` - Vector similarity search for memory keys

#### Analytics & Intelligence (4 tools):
- `mcp_memoraimcp_get_analytics` - Comprehensive usage analytics and performance insights
- `mcp_memoraimcp_get_insights` - AI-powered insights about memory patterns and knowledge gaps
- `mcp_memoraimcp_get_recommendations` - Intelligent recommendations for memory optimization
- `mcp_memoraimcp_get_memory` - Retrieve specific memory by structured key with metadata

#### Advanced Learning & Coordination (5+ tools):
- `mcp_memoraimcp_record_episodic_event` - Record experiential learning events with context
- `mcp_memoraimcp_enhance_query` - Improve queries using active learning algorithms
- `mcp_memoraimcp_adapt_organization` - Automatically optimize memory organization
- `mcp_memoraimcp_federated_query` - Coordinate queries across multiple agents
- `mcp_memoraimcp_collective_insights` - Generate collaborative knowledge from multiple agents

### Tool Parameters:
```yaml
# Core Memory Operations
mcp_memoraimcp_remember:
  agentId (required): Agent identifier for memory isolation
  content (required): Memory content to store
  metadata (optional):
    entityType (optional): 'plan', 'task_list', 'user_instructions', 'project_context', etc.
    priority (optional): 'low', 'medium', 'high', 'critical'
    project (optional): Project name for organization
    session (optional): Session name for grouping
    tags (optional): Array of strings for categorization

mcp_memoraimcp_recall:
  agentId (required): Agent identifier ('all' for cross-agent search)
  query (required): Natural language search query (use single keywords for best results)
  limit (optional): Maximum results (1-100, default: 10)
  minImportance (optional): Minimum importance score (0.0-1.0)
  project (optional): Filter by project name
  session (optional): Filter by session name

# Knowledge Graph Operations
mcp_memoraimcp_link_memories:
  agentId (required): Agent identifier
  sourceMemoryKey (required): Structured key of source memory
  targetMemoryKey (required): Structured key of target memory
  relationshipType (required): 'related', 'references', 'follows', 'contradicts', 'updates', 'similar'
  strength (optional): Relationship strength (0.0-1.0, default: 0.5)
  context (optional): Context for the relationship

mcp_memoraimcp_explore_graph:
  agentId (required): Agent identifier
  startingMemoryKey (required): Starting point for exploration
  explorationRadius (optional): How far to explore (default: 2)
  includeWeakLinks (optional): Include weak relationships (default: false)

# Analytics & Intelligence
mcp_memoraimcp_get_analytics:
  agentId (required): Agent identifier
  reportType (required): 'usage', 'patterns', 'health', 'gaps', 'recommendations'
  timeRange (optional): {start: 'ISO date', end: 'ISO date'}
  includeVisualizations (optional): Include visualization data (default: false)

mcp_memoraimcp_get_recommendations:
  agentId (required): Agent identifier
  recommendationType (optional): 'review', 'create', 'connect', 'cleanup', 'all' (default: 'all')
  maxRecommendations (optional): Maximum number of recommendations (default: 10)

# Advanced Learning
mcp_memoraimcp_record_episodic_event:
  agentId (required): Agent identifier
  context (required): {task: string, outcome: 'positive'|'negative'|'neutral', environment?: object}
  eventType (optional): 'interaction', 'decision', 'learning', 'error', 'success'
  importance (optional): Event importance (0.0-1.0)
  memoryIds (optional): Array of related memory IDs

mcp_memoraimcp_federated_query:
  requestingAgentId (required): Agent making the request
  query (required): Search query
  targetAgents (required): Array of agent IDs to query
  queryType (required): 'search', 'recommendation', 'insight', 'verification'
  aggregationMethod (required): 'union', 'intersection', 'weighted', 'consensus'
  priority (optional): 'low', 'medium', 'high', 'urgent'
  responseTimeout (optional): Timeout in seconds
```

### Advanced Usage Patterns:

#### Memory-First Workflow (PRODUCTION-READY):
```typescript
// 1. ALWAYS start with context search
await mcp_memoraimcp_recall({
  agentId: "copilot-agent",
  query: "project typescript configuration"
});

// 2. Store important decisions with structured metadata
await mcp_memoraimcp_remember({
  agentId: "copilot-agent",
  content: "TypeScript strict mode enabled with comprehensive type checking",
  metadata: {
    entityType: "technical_decision",
    priority: "high",
    project: "workspace-ai",
    tags: ["typescript", "configuration", "strict-mode"]
  }
});

// 3. Create knowledge relationships
await mcp_memoraimcp_link_memories({
  agentId: "copilot-agent",
  sourceMemoryKey: "workspace-ai_20250915_config_1",
  targetMemoryKey: "workspace-ai_20250915_setup_1",
  relationshipType: "references",
  strength: 0.8,
  context: "TypeScript config affects project setup"
});

// 4. Explore knowledge graph for insights
await mcp_memoraimcp_explore_graph({
  agentId: "copilot-agent",
  startingMemoryKey: "workspace-ai_20250915_config_1",
  explorationRadius: 2,
  includeWeakLinks: true
});

// 5. Get performance analytics
await mcp_memoraimcp_get_analytics({
  agentId: "copilot-agent",
  reportType: "usage",
  includeVisualizations: true
});

// 6. Record learning events
await mcp_memoraimcp_record_episodic_event({
  agentId: "copilot-agent",
  context: {
    task: "TypeScript Configuration",
    outcome: "positive",
    environment: {editor: "vscode", platform: "windows"}
  },
  eventType: "learning",
  importance: 0.8
});
```

#### Multi-Agent Coordination Pattern:
```typescript
// Federated query across multiple agents
await mcp_memoraimcp_federated_query({
  requestingAgentId: "copilot-agent",
  query: "best practices for TypeScript configuration",
  targetAgents: ["copilot-agent", "senior-developer-agent", "architect-agent"],
  queryType: "recommendation",
  aggregationMethod: "consensus",
  priority: "medium"
});

// Generate collective insights
await mcp_memoraimcp_collective_insights({
  participatingAgents: ["copilot-agent", "senior-developer-agent"],
  topic: "workspace development best practices"
});
```

#### Optimization & Learning Pattern:
```typescript
// Get AI-powered recommendations
await mcp_memoraimcp_get_recommendations({
  agentId: "copilot-agent",
  recommendationType: "all",
  maxRecommendations: 5
});

// Adapt memory organization based on performance
await mcp_memoraimcp_adapt_organization({
  agentId: "copilot-agent",
  effectivenessMetrics: {
    retrievalSuccessRate: 0.92,
    averageRetrievalTime: 25,
    memoryUtilizationRate: 0.75,
    contextAccuracy: 0.9
  }
});

// Enhance queries with active learning
await mcp_memoraimcp_enhance_query({
  agentId: "copilot-agent",
  query: "How to configure TypeScript for development"
});
```

**Memory Best Practices**:
1. Always begin sessions by recalling relevant context using mcp_memoraimcp_context
2. Store important decisions and insights with mcp_memoraimcp_remember
3. Use consistent agentId for project isolation
4. Include relevant metadata (project, session, priority, tags)
5. Use semantic search with mcp_memoraimcp_recall for information retrieval

---

## 🌐 CAUTAI MCP - Ultra-Fast Research Intelligence (PRODUCTION-READY)
**Transport**: stdio
**Purpose**: High-speed web search and intelligent answer composition

### ✅ PRODUCTION-READY CAPABILITIES
- **Ultra-fast search** with sub-200ms response times in fast mode
- **Multi-language support** (English, Romanian) with automatic detection
- **Structured results** with relevance scoring and metadata
- **Intelligent answer composition** with confidence analysis
- **Real-time information retrieval** for market research and competitive intelligence
- **Trend analysis** and emerging technology discovery
- **API integration ready** for automated research workflows

### Available Tools (2 core tools):

#### Real-Time Web Search:
**`mcp_cautaimcp_mcp_cautai_search_web`** - Advanced web search with speed optimization
```typescript
interface SearchWebParams {
  query: string;          // Search query for information discovery
  language?: 'en' | 'ro'; // Language preference (default: 'en')
  maxResults?: number;    // Maximum results (1-50, default: 10)
  fastMode?: boolean;     // Ultra-fast mode for speed-critical applications (default: false)
}
```

#### Intelligent Answer Composition:
**`mcp_cautaimcp_mcp_cautai_compose_answer`** - Synthesize structured answers from search results
```typescript
interface ComposeAnswerParams {
  query: string;          // Original research question
  results: SearchResult[]; // Array of search results to compose from
}

interface SearchResult {
  title: string;          // Source title
  url: string;           // Source URL
  content: string;       // Source content
  relevance: number;     // Relevance score (0-1)
}
```

### Usage Examples:

#### Speed-Critical Research:
```typescript
// Ultra-fast competitive intelligence
const competitorData = await mcp_cautaimcp_mcp_cautai_search_web({
  query: "React 19 server components vs Vue 3 Composition API performance 2025",
  language: "en",
  maxResults: 15,
  fastMode: true  // Sub-200ms response time
});

// Immediate trend analysis
const trendAnalysis = await mcp_cautaimcp_mcp_cautai_search_web({
  query: "AI development tools GitHub trending September 2025",
  fastMode: true,
  maxResults: 8
});
```

#### Comprehensive Research with Answer Synthesis:
```typescript
// Multi-step research workflow
const searchResults = await mcp_cautaimcp_mcp_cautai_search_web({
  query: "TypeScript 5.4 new features migration guide enterprise applications",
  maxResults: 20,
  language: "en"
});

// Synthesize comprehensive answer with confidence scoring
const structuredAnswer = await mcp_cautaimcp_mcp_cautai_compose_answer({
  query: "What are the key migration considerations for TypeScript 5.4 in enterprise applications?",
  results: searchResults.results.map(r => ({
    title: r.title,
    url: r.url,
    content: r.snippet,
    relevance: r.relevanceScore
  }))
});

console.log(`Answer confidence: ${structuredAnswer.confidence}`);
console.log(`Sources analyzed: ${structuredAnswer.sources.length}`);
```

#### Market Intelligence & API Research:
```typescript
// Real-time market analysis
const marketData = await mcp_cautaimcp_mcp_cautai_search_web({
  query: "OpenAI API pricing changes GPT-4 Turbo cost optimization September 2025",
  maxResults: 12,
  fastMode: false  // More comprehensive search
});

// Multi-language research for global markets
const globalTrends = await mcp_cautaimcp_mcp_cautai_search_web({
  query: "tehnologii AI dezvoltare software România 2025",
  language: "ro",
  maxResults: 10
});
```

### When to Use CAUTAI MCP:
- ✅ **Speed-critical applications** requiring immediate information
- ✅ **Real-time trend analysis** and market intelligence
- ✅ **Competitive research** with structured data processing
- ✅ **API integration workflows** needing fast response times
- ✅ **Multi-language research** for global market analysis
- ✅ **Answer synthesis** requiring confidence scoring
- ✅ **Research automation** with structured output processing
- ✅ **Emerging technology discovery** and trend monitoring

### Performance Optimization:
```typescript
// Production-ready research pipeline
class ResearchIntelligence {
  async performComprehensiveResearch(topic: string): Promise<ResearchReport> {
    // Step 1: Fast initial search for immediate insights
    const quickInsights = await mcp_cautaimcp_mcp_cautai_search_web({
      query: `${topic} latest trends 2025`,
      fastMode: true,
      maxResults: 8
    });

    // Step 2: Comprehensive deep research
    const deepAnalysis = await mcp_cautaimcp_mcp_cautai_search_web({
      query: `${topic} technical implementation best practices enterprise`,
      fastMode: false,
      maxResults: 25
    });

    // Step 3: Synthesize structured findings
    const synthesizedAnswer = await mcp_cautaimcp_mcp_cautai_compose_answer({
      query: `Comprehensive analysis of ${topic} including trends, implementation, and best practices`,
      results: [...quickInsights.results, ...deepAnalysis.results].map(r => ({
        title: r.title,
        url: r.url,
        content: r.snippet,
        relevance: r.relevanceScore
      }))
    });

    return {
      topic: topic,
      quickInsights: quickInsights.results,
      deepAnalysis: deepAnalysis.results,
      synthesis: synthesizedAnswer,
      confidence: synthesizedAnswer.confidence,
      sourceCount: synthesizedAnswer.sources.length,
      researchTime: quickInsights.searchTime + deepAnalysis.searchTime
    };
  }
}
```

### Best Practices:
- **Fast Mode**: Use for speed-critical applications and real-time dashboards
- **Comprehensive Mode**: Use for detailed research requiring thorough analysis
- **Answer Composition**: Always follow search with composition for structured insights
- **Multi-language**: Leverage language parameter for global market research
- **Result Limits**: Optimize maxResults based on speed vs comprehensiveness needs
- **Integration Ready**: Structure output for API integrations and automated workflows
- **Confidence Scoring**: Use composition confidence for decision-making thresholds

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

**Advanced Memory Best Practices - PRODUCTION-READY**:

#### 🚀 Memory-First Approach (MANDATORY):
1. **ALWAYS begin sessions** with `mcp_memoraimcp_recall` to check existing context
2. **Use single keywords** for optimal search performance (not complex multi-term queries)
3. **Store decisions immediately** with `mcp_memoraimcp_remember` and structured metadata
4. **Create knowledge relationships** with `mcp_memoraimcp_link_memories` for context building
5. **Monitor performance** with `mcp_memoraimcp_get_analytics` for continuous optimization

#### 🧠 Intelligent Search Strategies:
- **Semantic Matching**: Search for concepts, not exact phrases
- **Progressive Refinement**: Start broad, then narrow with specific searches
- **Entity-Based Organization**: Use entityType metadata for structured retrieval
- **Relationship Exploration**: Use `mcp_memoraimcp_explore_graph` for context discovery
- **Cross-Agent Search**: Use agentId "all" for collaborative knowledge access

#### 📊 Performance Optimization:
- **Analytics Monitoring**: Regular `mcp_memoraimcp_get_analytics` for health checks
- **Adaptive Organization**: Use `mcp_memoraimcp_adapt_organization` for automatic optimization
- **Episodic Learning**: Record events with `mcp_memoraimcp_record_episodic_event`
- **Query Enhancement**: Use `mcp_memoraimcp_enhance_query` for improved search accuracy
- **Recommendation Engine**: Leverage `mcp_memoraimcp_get_recommendations` for optimization

#### 🤝 Multi-Agent Coordination:
- **Federated Queries**: Use `mcp_memoraimcp_federated_query` for team collaboration
- **Collective Intelligence**: Generate insights with `mcp_memoraimcp_collective_insights`
- **Knowledge Sharing**: Link memories across agents for unified knowledge base
- **Collaborative Learning**: Record shared experiences for team improvement

#### 📈 Success Metrics:
- **95% efficiency improvements** through optimized memory usage
- **Sub-3-second response times** for all memory operations
- **Intelligent relevance scoring** with content highlighting
- **Automatic relationship detection** and knowledge clustering
- **Production-grade performance** with comprehensive analytics

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

## 📋 GitHub Copilot Todos Tool - Task Management
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

---

## 🚀 AWS MCP Servers - Enterprise Integration

### AWS API MCP Server
**Command**: `awslabs.aws-api-mcp-server`
**Purpose**: Execute AWS CLI commands with validation and intelligent suggestions

#### Available Tools (2 tools):
- `call_aws` - Execute AWS CLI commands with proper error handling and validation
- `suggest_aws_commands` - Get AI-powered AWS CLI command suggestions based on natural language queries

#### Usage Examples:
```
# Execute AWS commands safely
call_aws --command "aws s3 ls" --validate true

# Get command suggestions
suggest_aws_commands --query "list all EC2 instances in us-east-1"
```

### Amazon Rekognition MCP Server
**Command**: `awslabs.amazon-rekognition-mcp-server`
**Purpose**: Computer vision and image analysis using AWS Rekognition

#### Available Tools (5 tools):
- `detect_labels` - Detect objects, scenes, and activities in images
- `detect_faces` - Analyze faces including demographics and emotions
- `detect_text` - Extract text from images (OCR)
- `detect_celebrities` - Identify famous people in images
- `detect_unsafe_content` - Content moderation and safety detection

#### Usage Examples:
```
# Analyze image content
detect_labels --image_path "./product-photo.jpg" --max_labels 10

# Extract text from documents
detect_text --image_path "./invoice.pdf" --confidence_threshold 90
```

### AWS Support MCP Server
**Command**: `awslabs.aws-support-mcp-server`
**Purpose**: AWS support case management and troubleshooting assistance

#### Available Tools (5 tools):
- `create_case` - Create new AWS support cases
- `list_cases` - List existing support cases with filtering
- `get_case` - Retrieve detailed case information
- `add_communication` - Add updates to existing cases
- `resolve_case` - Close resolved support cases

#### Usage Examples:
```
# Create support case
create_case --subject "Database Performance Issue" --service "RDS" --severity "high"

# List recent cases
list_cases --status "open" --limit 10
```

### DynamoDB MCP Server
**Command**: `awslabs.dynamodb-mcp-server`
**Purpose**: NoSQL database operations and management

#### Available Tools (8 tools):
- `list_tables` - List all DynamoDB tables in the account
- `describe_table` - Get detailed table information and schema
- `query_table` - Query table data with conditions
- `scan_table` - Scan entire table with optional filters
- `get_item` - Retrieve specific item by key
- `put_item` - Insert or update item
- `update_item` - Update specific item attributes
- `delete_item` - Remove item from table

#### Usage Examples:
```
# Query user data
query_table --table_name "Users" --key_condition "userId = :uid" --expression_values "{\":uid\": \"12345\"}"

# Create new record
put_item --table_name "Products" --item "{\"productId\": \"ABC123\", \"name\": \"Widget\", \"price\": 29.99}"
```

### ECS MCP Server
**Command**: `ecs-mcp-server`
**Purpose**: Amazon Elastic Container Service management

#### Available Tools (1 comprehensive tool):
- `ecs_resource_management` - Complete ECS resource lifecycle management including:
  - **Clusters**: List, describe, create, update, delete
  - **Services**: List, describe, create, update, delete
  - **Tasks**: List, describe, run, start, stop
  - **Task Definitions**: List, describe, register, deregister
  - **Container Instances**: List, describe, register, deregister
  - **ECR**: List repositories and container images

#### Usage Examples:
```
# List all ECS clusters
ecs_resource_management --operation "list_clusters"

# Describe specific service
ecs_resource_management --operation "describe_service" --cluster "my-cluster" --service "web-app"

# Run new task
ecs_resource_management --operation "run_task" --cluster "production" --task_definition "app:latest"
```

### AWS Configuration Requirements:
- **AWS Profile**: Set `AWS_PROFILE` environment variable
- **AWS Region**: Configure `AWS_REGION` (default: us-east-1)
- **Permissions**: Ensure IAM permissions for respective services
- **Credentials**: Valid AWS credentials configured via AWS CLI or IAM roles

---

## 🐙 Git MCP Server (@cyanheads/git-mcp-server)
**Transport**: stdio  
**Command**: `npx @cyanheads/git-mcp-server`

### Available Tools (25+ Git tools):

#### Core Git Operations:
- `git_init` - Initialize a new Git repository
- `git_clone` - Clone a remote repository
- `git_status` - Show working tree status
- `git_add` - Add files to staging area
- `git_commit` - Create a new commit
- `git_push` - Push changes to remote
- `git_pull` - Pull changes from remote
- `git_fetch` - Fetch from remote without merging

#### Branch Management:
- `git_branch` - List, create, or delete branches
- `git_checkout` - Switch branches or restore files
- `git_merge` - Merge branches
- `git_rebase` - Reapply commits on another base

#### History and Inspection:
- `git_log` - Show commit history
- `git_show` - Show commit details
- `git_diff` - Show differences between commits/files
- `git_blame` - Show who last modified each line

#### Advanced Operations:
- `git_stash` - Temporarily save changes
- `git_tag` - Create, list, or delete tags
- `git_reset` - Reset current HEAD to specified state
- `git_revert` - Create new commit that undoes changes
- `git_cherry_pick` - Apply specific commits
- `git_remote` - Manage remote repositories
- `git_config` - Get/set repository configuration
- `git_clean` - Remove untracked files
- `git_archive` - Create archives of files

#### Usage Examples:
```bash
# Initialize new repository
git_init --directory "/path/to/project"

# Check repository status
git_status

# Add and commit changes
git_add --files "src/main.ts" "package.json"
git_commit --message "feat: add new feature implementation"

# Create and switch to new branch
git_branch --name "feature/new-auth" --create
git_checkout --branch "feature/new-auth"

# View commit history
git_log --max_count 10 --oneline

# Push to remote
git_push --remote "origin" --branch "main"
```

---

## 🐱 GitHub MCP Server
**Transport**: stdio  
**Command**: `npx github-mcp-server`  
**Requirements**: GitHub Personal Access Token

### Configuration:
Set environment variable:
```bash
export GITHUB_TOKEN="your_github_token_here"
```

### Available Tools (Repository & Issue Management):

#### Repository Operations:
- `create_repository` - Create new GitHub repository
- `get_repository` - Get repository information
- `list_repositories` - List user/organization repositories
- `fork_repository` - Fork a repository
- `delete_repository` - Delete repository (use with caution)

#### Issue Management:
- `create_issue` - Create new issue
- `get_issue` - Get issue details
- `list_issues` - List repository issues
- `update_issue` - Update issue details
- `close_issue` - Close an issue
- `reopen_issue` - Reopen a closed issue
- `add_issue_comment` - Add comment to issue

#### Pull Request Management:
- `create_pull_request` - Create new PR
- `get_pull_request` - Get PR details
- `list_pull_requests` - List repository PRs
- `update_pull_request` - Update PR details
- `merge_pull_request` - Merge a PR
- `close_pull_request` - Close PR without merging
- `add_pr_comment` - Add comment to PR
- `request_pr_review` - Request review from users

#### Content Management:
- `get_file_contents` - Read file from repository
- `create_file` - Create new file in repository
- `update_file` - Update existing file
- `delete_file` - Delete file from repository
- `search_repositories` - Search GitHub repositories
- `search_code` - Search code across repositories

#### Organization & Collaboration:
- `list_organization_members` - List organization members
- `get_user` - Get user profile information
- `list_user_repositories` - List user's repositories
- `list_repository_collaborators` - List repository collaborators
- `add_repository_collaborator` - Add collaborator to repository

#### Releases & Tags:
- `create_release` - Create new release
- `list_releases` - List repository releases
- `get_release` - Get release details
- `update_release` - Update release information
- `delete_release` - Delete a release

#### Usage Examples:
```bash
# Create new repository
create_repository --name "my-new-project" --description "A sample project" --private false

# Create issue
create_issue --owner "username" --repo "project" --title "Bug: Login not working" --body "Users cannot log in with valid credentials"

# Create pull request
create_pull_request --owner "username" --repo "project" --title "Fix login bug" --body "This PR fixes the login issue" --head "fix/login" --base "main"

# Get file contents
get_file_contents --owner "username" --repo "project" --path "src/main.ts"

# Search repositories
search_repositories --query "typescript react" --sort "stars" --order "desc"

# List issues
list_issues --owner "username" --repo "project" --state "open" --labels "bug,urgent"
```

### Token Permissions Required:
- `repo` - Full repository access
- `issues` - Read/write issues
- `pull_requests` - Read/write pull requests
- `contents` - Read/write repository contents
- `metadata` - Read repository metadata

### Best Practices:
- Use specific scopes for your GitHub token
- Store token securely in environment variables
- Be cautious with destructive operations (delete_repository, delete_file)
- Always test operations on non-critical repositories first

---

## 🌐 Research Intelligence - CAUTAI MCP vs Web Search MCP
**Both provide real-time web information but with different specializations**

### CAUTAI MCP - Ultra-Fast Research Intelligence
**Transport**: stdio  
**Specialization**: Speed-critical research and structured answer synthesis

#### Key Capabilities:
- **Ultra-fast mode**: Sub-200ms response times for real-time applications
- **Multi-language support**: English and Romanian with automatic detection
- **Answer composition**: Intelligent synthesis with confidence scoring
- **Structured output**: Relevance scoring, metadata, and performance metrics
- **API integration ready**: Designed for automated research workflows

#### Available Tools (2 tools):
- `mcp_cautaimcp_mcp_cautai_search_web` - Advanced web search with speed optimization
- `mcp_cautaimcp_mcp_cautai_compose_answer` - Intelligent answer composition

#### Usage Examples:
```typescript
// Speed-critical competitive intelligence
const fastResearch = await mcp_cautaimcp_mcp_cautai_search_web({
  query: "AI coding assistants market share Q3 2025",
  fastMode: true,
  maxResults: 10
});

// Structured answer synthesis
const synthesizedReport = await mcp_cautaimcp_mcp_cautai_compose_answer({
  query: "What are the leading AI coding assistants and their market positions?",
  results: fastResearch.results
});
```

### Web Search MCP - VS Code Integration
**Transport**: Extension-based  
**Specialization**: Deep research integration with VS Code workflows

#### Available Tools (1 tool):
- `vscode-websearchforcopilot_webSearch` - Search the web for current information

### 🎯 When to Choose Each:

**Use CAUTAI MCP when:**
- ✅ Speed is critical (real-time dashboards, live research)
- ✅ Need structured answer synthesis with confidence scoring
- ✅ Requiring multi-language research capabilities
- ✅ Building automated research workflows and API integrations
- ✅ Need detailed metadata and relevance scoring
- ✅ Performing competitive intelligence and market analysis

**Use Web Search MCP when:**
- ✅ Deep, contextual research integrated with VS Code workflows
- ✅ Need broad, unstructured exploration of topics
- ✅ Working within VS Code environment exclusively
- ✅ General research without speed requirements

### 🚀 Optimal Research Strategy:
```typescript
// Comprehensive research combining both tools
class OptimalResearch {
  async performHybridResearch(topic: string): Promise<ComprehensiveReport> {
    // Step 1: Fast initial insights with CAUTAI
    const rapidInsights = await mcp_cautaimcp_mcp_cautai_search_web({
      query: `${topic} emerging trends 2025`,
      fastMode: true,
      maxResults: 8
    });

    // Step 2: Deep contextual research with Web Search MCP
    const contextualResearch = await vscode-websearchforcopilot_webSearch({
      query: `${topic} implementation best practices case studies`
    });

    // Step 3: Synthesize findings with CAUTAI composition
    const structuredAnalysis = await mcp_cautaimcp_mcp_cautai_compose_answer({
      query: `Comprehensive analysis of ${topic} including trends and implementation strategies`,
      results: rapidInsights.results.map(r => ({
        title: r.title,
        url: r.url,
        content: r.snippet,
        relevance: r.relevanceScore
      }))
    });

    return {
      rapidInsights: rapidInsights.results,
      contextualFindings: contextualResearch,
      structuredAnalysis: structuredAnalysis,
      confidence: structuredAnalysis.confidence,
      recommendedAction: this.determineActionFromConfidence(structuredAnalysis.confidence)
    };
  }
}

**Remember**: These MCP servers significantly extend your development capabilities. Use them actively and strategically to enhance your workflow efficiency and code quality!
