---
applyTo: "**"
---

# 🧠 Memory MCP Server Optimization Procedure

## Overview
The Memory MCP Server Optimization Procedure is a comprehensive methodology for transforming memory systems from inefficient, verbose knowledge graphs into highly optimized, production-grade memory architectures. This procedure achieves dramatic improvements in memory efficiency, search performance, and agent operation effectiveness.

The optimization process addresses common memory bottlenecks including verbose observations, duplicate entities, missing relations, and outdated information. Through systematic analysis, cleanup, and restructuring, teams can achieve up to 95% reduction in memory usage while significantly improving search efficiency and agent performance.

This document provides step-by-step instructions for completely optimizing the Memory MCP Server from scratch, achieving a 10/10 efficiency rating.

---

## 🎯 Overview

This procedure transforms a bloated, verbose memory graph into a highly efficient, production-grade knowledge base with clear agent guidelines.

**Expected Results:**
- **Memory Reduction**: ~95% reduction in memory usage
- **Agent Guidelines**: 17 comprehensive rules for proper memory handling
- **Entity Relations**: Meaningful connections between related entities
- **Search Efficiency**: Optimized for progressive loading patterns
- **Score**: Perfect 10/10 memory handling

---

## 📋 Step-by-Step Optimization Procedure

### Step 1: Analyze Current Memory State
```javascript
// First, check the current memory state
await mcp_memoraimcpser_context();
// Identify: verbose observations, duplicate entities, missing relations, outdated info
```

### Step 2: Complete Memory Wipe (if needed)
```javascript
// Get all entity names from current memory
const currentMemory = await mcp_memoraimcpser_context();
const entityNames = currentMemory.entities.map(e => e.name);

// Delete all existing entities for fresh start
await mcp_memoraimcpser_forget({
  entityNames: entityNames
});
```

### Step 3: Create Core Agent Instructions
```javascript
await mcp_memoraimcpser_remember({
  agentId: "memory-optimizer",
  content: "Core memory optimization guidelines and rules",
  metadata: { entityType: "agent_instructions", priority: "critical" }
});
```
  entities: [{
    entityType: "agent_instructions",
    name: "MCP Memory Usage Instructions",
    observations: [
      "MEMORY MCP TOOL USAGE GUIDELINES FOR AGENTS",
      "1. READ MEMORY FIRST: Always check existing memory using mcp_memoraimcpser_context or mcp_memoraimcpser_recall before adding new information",
      "2. AVOID DUPLICATION: Search for existing entities before creating new ones to prevent redundancy",
      "3. BE CONCISE: Keep observations brief, specific, and factual. Avoid verbose descriptions or redundant information",
      "4. USE DESCRIPTIVE ENTITY NAMES: Choose clear, unique names that reflect the entity's purpose (e.g., 'ProjectX Status', 'Security Incident ABC-123')",
      "5. APPROPRIATE ENTITY TYPES: Use meaningful entity types like 'project', 'task', 'bug', 'feature', 'incident', 'configuration', etc.",      "6. UPDATE EXISTING ENTITIES: Use mcp_memoraimcpser_remember to update existing entities rather than creating duplicates",
      "7. CLEAN UP OUTDATED INFO: Use mcp_memoraimcpser_forget to remove obsolete or incorrect information",
      "8. CREATE MEANINGFUL RELATIONS: Use mcp_memoraimcpser_remember to link related entities with descriptive metadata",
      "9. MEMORY HYGIENE: Regularly review and clean up memory to maintain efficiency and prevent bloat",
      "10. SEARCH BEFORE CREATE: Always search memory before creating new entities to maintain a clean, organized knowledge graph",
      "11. USE PROGRESSIVE SEARCH: Start with mcp_memoraimcpser_recall with specific queries, never begin with full context loading",
      "12. DATE CONTEXT: Always include current date (June 8, 2025) in status-related observations",
      "13. RELATIONS REQUIRED: Create meaningful relations between related entities using descriptive relation types",
      "14. CONDENSED FORMAT: Keep observations under 100 characters when possible, focus on essential facts",      "15. ENTITY NAMING: Use format '[ProjectName] [Type]' for consistency (e.g., 'GangGPT Project', 'AIDE Issues')",
      "16. LOCATION TRACKING: Include file paths or repository locations in project entities",
      "17. STATUS PREFIXES: Start project observations with 'STATUS: [percentage]% COMPLETE' for clarity",
      "18. STORE PLANS: Always store user plans, task lists, and multi-step procedures in memory with entity type 'plan' or 'task_list'",
      "19. STORE PROMPTS: Keep important user prompts and instructions in memory with entity type 'prompt' or 'user_instructions'", 
      "20. CHECK MEMORY HISTORY: Before starting any task, search memory for related plans, previous prompts, and task history",
      "21. MAINTAIN CONTEXT: Use memory to maintain conversation context, user preferences, and ongoing task state",
      "22. REFERENCE PREVIOUS WORK: Always check for existing plans or prompts before creating new ones to maintain continuity"
    ]
  }]
});
```

### Step 4: Create Optimized Project Entities (Example Templates)

#### Template: Project Status Entity
```javascript
await mcp_memoraimcpser_remember({
  entities: [{
    entityType: "project_status",
    name: "[ProjectName] Project",
    observations: [
      "STATUS: [X]% COMPLETE - [Status] as of June 8, 2025",
      "[Brief project description]",
      "Tech: [Key technologies]",
      "Features: [Core features]",
      "Quality: [Test status, build status]",
      "Location: [file path]"
    ]
  }]
});
```

#### Template: Technical Issues Entity
```javascript
await mcp_memoraimcpser_remember({
  entities: [{
    entityType: "technical_debt",
    name: "[ProjectName] Issues",
    observations: [
      "[Primary issue description]",
      "[Secondary issues]",
      "Impact: [How it affects project]",
      "Date: June 8, 2025 - [current status]"
    ]
  }]
});
```

#### Template: User Plan Entity
```javascript
await mcp_memoraimcpser_remember({
  entities: [{
    entityType: "plan",
    name: "[Task/Project] Plan",
    observations: [
      "PLAN: [Brief description of the plan]",
      "Step 1: [First step description]",
      "Step 2: [Second step description]", 
      "Step 3: [Third step description]",
      "Status: [Current progress - not started/in progress/completed]",
      "Priority: [High/Medium/Low]",
      "Date: June 8, 2025"
    ]
  }]
});
```

#### Template: User Instructions Entity
```javascript
await mcp_memoraimcpser_remember({
  entities: [{
    entityType: "user_instructions",
    name: "[Context] Instructions",
    observations: [
      "USER REQUEST: [Key user requirements]",
      "CONTEXT: [Important context and background]",
      "PREFERENCES: [User preferences and constraints]",
      "REQUIREMENTS: [Specific requirements and constraints]",
      "Date: June 8, 2025"
    ]
  }]
});
```

#### Template: Task Progress Entity
```javascript
await mcp_memoraimcpser_remember({
  entities: [{
    entityType: "task_progress",
    name: "[Task] Progress",
    observations: [
      "TASK: [Task description]",
      "PROGRESS: [Current status and what's been done]",
      "NEXT: [Next steps to take]", 
      "BLOCKERS: [Any blockers or issues]",
      "UPDATED: June 8, 2025"
    ]
  }]
});
```
    observations: [
      "[Primary issue description]",
      "[Secondary issues]",
      "Impact: [How it affects project]",
      "Date: June 8, 2025 - [current status]"
    ]
  }]
});
```

### Step 5: Clean Up Existing Verbose Entities
```javascript
// Example: Condensing verbose observations
await mcp_memoraimcpser_forget({
  deletions: [{
    entityName: "[EntityName]",
    observations: [
      // List all verbose/redundant observations to remove
    ]
  }]
});

await mcp_memoraimcpser_remember({
  observations: [{
    entityName: "[EntityName]",
    contents: [
      // Add concise, essential observations (under 100 chars each)
      "STATUS: [X]% COMPLETE - [Brief status] as of June 8, 2025",
      "[Essential fact 1]",
      "[Essential fact 2]",
      "Location: [path]"
    ]
  }]
});
```

### Step 6: Create Meaningful Relations
```javascript
await mcp_memoraimcpser_remember({
  relations: [
    { from: "[Project] Project", relationType: "verified_by", to: "[Status] Entity" },
    { from: "[Project] Project", relationType: "blocked_by", to: "[Issues] Entity" },
    { from: "[Project] Project", relationType: "implements", to: "[Architecture] Entity" },
    { from: "[Project] Project", relationType: "includes", to: "[Features] Entity" },
    // Add more meaningful relations as needed
  ]
});
```

---

## 🎯 Optimization Guidelines

### Entity Type Standards
- `project_status` - Project completion information
- `project_analysis` - High-level project overviews  
- `technical_debt` - Known issues and blockers
- `feature_inventory` - Feature lists and capabilities
- `implementation_details` - Architecture information
- `verification_results` - Test and build status
- `agent_instructions` - Guidelines for agents
- `plan` - User plans and multi-step procedures
- `task_list` - Task lists and workflows
- `user_instructions` - User prompts and requirements
- `task_progress` - Task progress and status updates
- `user_preferences` - User preferences and constraints

### Observation Format Rules
1. **Status Format**: `"STATUS: [X]% COMPLETE - [Brief status] as of June 8, 2025"`
2. **Length Limit**: Under 100 characters per observation when possible
3. **Essential Only**: Focus on actionable, searchable facts
4. **Location Info**: Include file paths for projects
5. **Date Context**: Include current date for status updates

### Relation Types
- `verified_by` - Status verified by test results
- `blocked_by` - Project blocked by technical issues
- `implements` - Project implements architecture
- `includes` - Project includes features
- `affected_by` - Project affected by issues
- `has_issue` - Entity has specific problem
- `follows_plan` - Task follows specific plan
- `requires` - Task requires specific instructions
- `updates` - Progress updates plan/task
- `continues` - Task continues previous work

---

## 🔍 Verification Steps

### Step 1: Check Memory Size
```javascript
const finalMemory = await mcp_memoraimcpser_context();
console.log(`Entities: ${finalMemory.entities.length}`);
console.log(`Relations: ${finalMemory.relations.length}`);
console.log(`Total size: ${JSON.stringify(finalMemory).length} characters`);
```

### Step 2: Verify Entity Quality
- All entities have concise observations (< 100 chars each)
- All project entities have STATUS prefix
- All entities include date context where relevant
- No verbose or redundant information

### Step 3: Verify Relations
- All major entities have meaningful relationships
- Relation types are descriptive and accurate
- No orphaned entities (unless intentional)

### Step 4: Test Progressive Search
```javascript
// Test specific project search
const projectTest = await mcp_memoraimcpser_recall({ 
  query: "[ProjectName] status" 
});

// Test technical issues search
const issuesTest = await mcp_memoraimcpser_recall({ 
  query: "error issue technical_debt" 
});

// Test date-based search
const recentTest = await mcp_memoraimcpser_recall({ 
  query: "June 8 2025 current" 
});

// Test plan and context search
const planTest = await mcp_memoraimcpser_recall({
  query: "plan task_list"
});

// Test prompt and instructions search  
const promptTest = await mcp_memoraimcpser_recall({
  query: "prompt user_instructions"
});

// Test task progress search
const progressTest = await mcp_memoraimcpser_recall({
  query: "task_progress history"
});
```

---

## 📊 Success Metrics

### Memory Efficiency
- **Entities**: 10-15 (manageable count)
- **Relations**: 5-10 (meaningful connections)
- **Avg Observation Length**: 50-80 characters
- **Total Memory Size**: < 5k characters (vs 15k+ before)
- **Search Response Time**: < 1 second

### Agent Guidelines
- **22 comprehensive rules** for memory usage (updated from 17)
- **Progressive search patterns** defined
- **Condensed format requirements** specified
- **Relation creation mandate** established
- **Entity naming conventions** standardized
- **Plan and prompt storage requirements** specified
- **Context continuity patterns** established
- **Task progress tracking** mandated

### Quality Indicators
- ✅ No verbose observations
- ✅ All entities have clear purpose
- ✅ Meaningful relationships exist
- ✅ Date context included
- ✅ Location tracking present
- ✅ Status prefixes used
- ✅ Search optimization ready
- ✅ Plan storage capability
- ✅ Prompt preservation system
- ✅ Context continuity support
- ✅ Task progress tracking

---

## 🚀 Final Result

**Perfect 10/10 Memory Handling**

The optimized memory provides:
- **Crystal clear guidelines** for agent memory usage
- **Highly efficient search** with progressive loading
- **Concise, actionable information** for all projects
- **Meaningful entity relationships** for context
- **Production-grade organization** and structure
- **Future-proof maintenance** patterns

Use this procedure in any new environment to recreate the optimal memory structure and achieve perfect memory handling efficiency.

---
