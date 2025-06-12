---
applyTo: "**"
---

# 🧠 Memory MCP Server Usage Instructions for Copilot Agent

## Overview
The Memory MCP Server Usage Instructions provide a comprehensive framework for efficient memory system interaction that maximizes performance while minimizing resource consumption. This document establishes mandatory protocols for memory access patterns, context loading strategies, and data management practices that ensure optimal agent operation.

The instructions address common memory performance issues including context overflow, irrelevant information retrieval, and inefficient search patterns. By following these progressive loading strategies and targeted search approaches, agents can achieve significant improvements in response time, accuracy, and resource utilization while maintaining comprehensive context awareness.

This document defines the mandatory approach for using the Memory MCP Server efficiently across all projects and contexts.

---

## 🚨 Critical Rules

### Rule #1: NEVER Start with `mcp_memoraimcpser_context()`
- **Why:** Returns 15k+ characters of overwhelming data
- **Impact:** Poor performance, context overflow, irrelevant information
- **Exception:** Only when you absolutely need the complete knowledge graph structure

### Rule #2: Always Use Progressive Context Loading
Start with the most specific query possible, then broaden only if needed.

### Rule #3: Match Query Intent to Method
Different user intents require different memory access patterns.

### Rule #4: MANDATORY Memory Check Before Any Task
Before starting any new task or conversation, you MUST:
1. Search for existing plans: `search_nodes("plan task_list [keyword]")`
2. Check for previous prompts: `search_nodes("prompt user_instructions [keyword]")`
3. Look for task history: `search_nodes("[task] history context")`
4. Review relevant project context: `search_nodes("[project] status")`

### Rule #5: Store Important Context
You MUST store in memory:
- User plans and multi-step procedures (`plan`, `task_list`)
- Important user prompts and instructions (`prompt`, `user_instructions`)
- Task progress and next steps (`task_progress`, `context`)
- User preferences and requirements (`user_preferences`)

---

## ✅ Mandatory Usage Patterns

### For Project Status Inquiries
```javascript
// First: Try specific project search
const result = await mcp_memoraimcpser_recall({ 
  query: "[ProjectName] status completion" 
});

// If empty: Broaden to general status
if (result.entities.length === 0) {
  const broader = await mcp_memoraimcpser_recall({ 
    query: "project status" 
  });
}

// Last resort: Get specific entity
const specific = await mcp_memoraimcpser_recall({ 
  agentId: "user-agent",
  query: "ProjectName Project"
});
```

### For Technical Issues/Debugging
```javascript
// Search for error patterns
const errors = await mcp_memoraimcpser_recall({ 
  query: "error issue failed [TechnologyName]" 
});

// Search by date for recent issues
const recent = await mcp_memoraimcpser_recall({ 
  query: "error June 8 2025" 
});
```

### For Implementation Context
```javascript
// Search for implementation details
const impl = await mcp_memoraimcpser_recall({ 
  query: "implementation architecture [FeatureName]" 
});

// Search by entity type
const gaps = await mcp_memoraimcpser_recall({ 
  query: "implementation_gaps missing" 
});
```

### For Recent Updates/Current Work
```javascript
// Always include current date in searches
const current = await mcp_memoraimcpser_recall({ 
  query: "June 8 2025 current recent today" 
});
```

### For Plans and Task Management
```javascript
// Search for existing plans before creating new ones
const existingPlans = await mcp_memoraimcpser_recall({ 
  query: "plan task_list [taskKeyword]" 
});

// Store new plans with proper structure
await mcp_memoraimcpser_remember({
  entities: [{
    entityType: "plan",
    name: "[Task/Project] Plan",
    observations: [
      "PLAN: [Brief description]",
      "Step 1: [First step]",
      "Step 2: [Second step]",
      "Status: [Current progress]",
      "Date: June 8, 2025"
    ]
  }]
});
```

### For Prompt and Context History
```javascript
// Check for previous prompts and instructions
const previousContext = await mcp_memoraimcpser_recall({ 
  query: "prompt user_instructions [contextKeyword]" 
});

// Store important user instructions
await mcp_memoraimcpser_remember({
  entities: [{
    entityType: "user_instructions",
    name: "[Context] Instructions",
    observations: [
      "USER REQUEST: [Key user requirements]",
      "CONTEXT: [Important context]",
      "PREFERENCES: [User preferences]",
      "Date: June 8, 2025"
    ]
  }]
});
```

### For Task Continuity
```javascript
// Always check for related work before starting
const taskHistory = await mcp_memoraimcpser_recall({ 
  query: "[taskName] history context plan" 
});

// Maintain ongoing task state
await mcp_memoraimcpser_remember({
  observations: [{
    entityName: "[Task] Progress",
    contents: [
      "PROGRESS: [Current status]",
      "NEXT: [Next steps]",
      "UPDATED: June 8, 2025"
    ]
  }]
});
```

---

## 📋 Required Query Strategies

### Entity Type Targeting
Include these entity types in your searches:
- `project_status` - Project completion information
- `technical_debt` - Known issues and blockers  
- `implementation_gaps` - Missing features/components
- `milestone` - Project milestones and phases
- `project_analysis` - High-level project overviews
- `bug` - Specific bugs and issues
- `feature` - Feature implementations
- `plan` - User plans and task lists
- `task_list` - Multi-step procedures and workflows
- `prompt` - Important user prompts and instructions
- `user_instructions` - User preferences and requirements

### Time-Based Filtering
Always include temporal context:
- `"June 8 2025"` - Current date
- `"recent"` - Recent updates
- `"current"` - Current status
- `"December 2024"` - Specific timeframes

### Project Name Patterns
Use these project name patterns:
- `"GangGPT"` - Gaming project
- `"AIDE"` - AI development environment
- `"METU Template"` - Next.js template
- `"GlassMCP"` - Desktop automation
- `"Raimixer"` - Audio mixing application

---

## 🎯 Method Selection Guide

| User Intent | Primary Method | Fallback Method | Last Resort |
|-------------|---------------|-----------------|-------------|
| Project status | `search_nodes("[Project] status")` | `search_nodes("project status")` | `open_nodes(["[Project]"])` |
| Technical errors | `search_nodes("error [tech]")` | `search_nodes("issue failed")` | `search_nodes("technical_debt")` |
| Implementation details | `search_nodes("[feature] implementation")` | `search_nodes("implementation")` | `open_nodes(["[Component]"])` |
| Recent updates | `search_nodes("June 8 2025")` | `search_nodes("recent current")` | `search_nodes("today")` |
| General overview | `search_nodes("project_analysis")` | `search_nodes("overview")` | `read_graph()` |
| User plans/tasks | `search_nodes("plan task_list [keyword]")` | `search_nodes("plan")` | `search_nodes("task_list")` |
| Previous prompts | `search_nodes("prompt user_instructions")` | `search_nodes("prompt")` | `search_nodes("user_instructions")` |
| Task context | `search_nodes("[task] history context")` | `search_nodes("context")` | `search_nodes("history")` |

---

## 🔧 Implementation Requirements

### Progressive Loading Pattern (Mandatory)
```javascript
async function getMemoryContext(userQuery, projectHint = null) {
  // Step 1: Most specific search
  let query = projectHint ? `${projectHint} ${extractKeywords(userQuery)}` : extractKeywords(userQuery);
  let result = await mcp_memoraimcpser_recall({ query });
  
  // Step 2: If no results, broaden search
  if (result.entities.length === 0) {
    query = extractKeywords(userQuery);
    result = await mcp_memoraimcpser_recall({ query });
  }
  
  // Step 3: If still no results, try entity type search
  if (result.entities.length === 0 && projectHint) {
    result = await mcp_memoraimcpser_recall({ 
      agentId: "user-agent",
      query: projectHint
    });
  }
  
  // Step 4: Last resort - never use read_graph() unless absolutely necessary
  return result;
}
```

### Query Optimization (Required)
```javascript
function extractKeywords(userQuery) {
  const intentMap = {
    'status': 'status completion ready',
    'error': 'error issue failed',
    'implementation': 'implementation architecture',
    'recent': 'June 8 2025 recent current',
    'complete': 'complete finished ready production'
  };
  
  // Extract intent and enhance query
  for (const [intent, keywords] of Object.entries(intentMap)) {
    if (userQuery.toLowerCase().includes(intent)) {
      return keywords;
    }
  }
  
  return userQuery;
}
```

---

## 📊 Performance Requirements

### Response Size Targets
- `search_nodes()`: Target ≤ 3k characters (80% reduction from full graph)
- `open_nodes()`: Target ≤ 2k characters (87% reduction from full graph)  
- `read_graph()`: Only when no alternative exists (15k+ characters)

### Efficiency Metrics
You must achieve:
- **≥80% reduction** in data size vs `read_graph()`
- **≥90% relevance** of information to user query
- **≤3 seconds** processing time for memory queries
- **Zero context overflow** incidents

---

## 🚫 Prohibited Patterns

### Never Do This:
```javascript
// ❌ WRONG: Starting with full graph
const memory = await mcp_memoraimcpser_context();

// ❌ WRONG: Vague queries
const result = await mcp_memoraimcpser_recall({ query: "info" });

// ❌ WRONG: No progressive loading
const result = await mcp_memoraimcpser_recall({ query: "project" });
if (result.entities.length === 0) {
  // Give up - wrong approach
}
```

### Always Do This:
```javascript
// ✅ CORRECT: Specific, progressive approach
const specific = await mcp_memoraimcpser_recall({ 
  query: "GangGPT status June 8 2025" 
});

if (specific.entities.length === 0) {
  const broader = await mcp_memoraimcpser_recall({ 
    query: "project status" 
  });
}
```

---

## 🎯 Success Criteria

### For Every Memory Query:
1. **Relevance**: ≥90% of returned information must be relevant to user query
2. **Efficiency**: ≤3k characters in response (unless specifically needed)
3. **Speed**: ≤3 seconds total processing time
4. **Accuracy**: Information must be current and correct
5. **Context**: Must not overflow agent context window

### Required Validation:
Before using any memory response:
1. Check if entities array has relevant results
2. Verify information is recent (check observation dates)
3. Filter for user's specific project/domain if applicable
4. Prioritize entities with entityType matching user intent

---

## 📝 Documentation Requirements

### Always Include in Responses:
- **Data Source**: Which memory method was used
- **Query Strategy**: Why this approach was chosen  
- **Relevance Filter**: How results were filtered for user intent
- **Completeness**: Whether additional context might be needed

### Example Response Pattern:
```
Based on targeted memory search for "GangGPT status" (2.1k chars, 95% relevant):
[Your response content]

Memory source: search_nodes() - optimized for project status queries
```

---

## 🤖 Agent Behavior Summary

1. **Always start specific** - Use project names and key terms
2. **Progressive broadening** - Expand search only if needed  
3. **Entity type awareness** - Target appropriate entity types
4. **Time context** - Include dates in searches
5. **Efficiency first** - Prioritize smaller, relevant responses
6. **Never default to read_graph()** - Use as absolute last resort
7. **Check context first** - Always search for existing plans, prompts, and task history
8. **Store important information** - Save user plans, prompts, and preferences for continuity
9. **Maintain task state** - Update progress and next steps in memory
10. **Reference previous work** - Check memory history before starting new tasks

## 🔄 Mandatory Workflow Pattern

Every agent interaction MUST follow this pattern:

### Phase 1: Context Discovery (REQUIRED)
```javascript
// 1. Check for existing plans
const plans = await mcp_memoraimcpser_recall({ query: "plan task_list" });

// 2. Check for previous prompts/instructions  
const prompts = await mcp_memoraimcpser_recall({ query: "prompt user_instructions" });

// 3. Check task history if applicable
const history = await mcp_memoraimcpser_recall({ query: "[task] history context" });

// 4. Check relevant project status
const project = await mcp_memoraimcpser_recall({ query: "[project] status" });
```

### Phase 2: Task Execution
Execute the user's request with full context from Phase 1.

### Phase 3: Context Storage (REQUIRED)
```javascript
// Store important plans, prompts, or progress updates
await mcp_memoraimcpser_remember({ /* store relevant context */ });
// OR update existing entities
await mcp_memoraimcpser_remember({ /* update progress */ });
```

This approach ensures optimal memory usage while maintaining comprehensive context awareness across all agent interactions.
