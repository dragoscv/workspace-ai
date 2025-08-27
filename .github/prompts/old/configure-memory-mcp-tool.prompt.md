---
mode: agent
---
---
applyTo: "**"
---

# 🧠 Memory MCP Server Optimization Procedure

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
  entities: [{
    entityType: "agent_instructions",
    name: "MCP Memory Usage Instructions",
    observations: [
      "MEMORY MCP TOOL USAGE GUIDELINES FOR AGENTS",
      "1. READ MEMORY FIRST: Always check existing memory using mcp_memoraimcpser_context or mcp_memoraimcpser_recall before adding new information",
      "2. AVOID DUPLICATION: Search for existing entities before creating new ones to prevent redundancy",
      "3. BE CONCISE: Keep observations brief, specific, and factual. Avoid verbose descriptions or redundant information",
      "4. USE DESCRIPTIVE ENTITY NAMES: Choose clear, unique names that reflect the entity's purpose (e.g., 'ProjectX Status', 'Security Incident ABC-123')",
      "5. APPROPRIATE ENTITY TYPES: Use meaningful entity types like 'project', 'task', 'bug', 'feature', 'incident', 'configuration', etc.",
      "6. UPDATE EXISTING ENTITIES: Use mcp_memoraimcpser_remember to update existing entities rather than creating duplicates",
      "7. CLEAN UP OUTDATED INFO: Use mcp_memoraimcpser_forget to remove obsolete or incorrect information",
      "8. CREATE MEANINGFUL RELATIONS: Use mcp_memoraimcpser_remember to link related entities with descriptive relation types",
      "9. MEMORY HYGIENE: Regularly review and clean up memory to maintain efficiency and prevent bloat",
      "10. SEARCH BEFORE CREATE: Always search memory before creating new entities to maintain a clean, organized knowledge graph",
      "11. USE PROGRESSIVE SEARCH: Start with mcp_memoraimcpser_recall with specific queries, never begin with read_graph",
      "12. DATE CONTEXT: Always include current date (June 8, 2025) in status-related observations",
      "13. RELATIONS REQUIRED: Create meaningful relations between related entities using descriptive relation types",
      "14. CONDENSED FORMAT: Keep observations under 100 characters when possible, focus on essential facts",
      "15. ENTITY NAMING: Use format '[ProjectName] [Type]' for consistency (e.g., 'GangGPT Project', 'AIDE Issues')",
      "16. LOCATION TRACKING: Include file paths or repository locations in project entities",
      "17. STATUS PREFIXES: Start project observations with 'STATUS: [percentage]% COMPLETE' for clarity"
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
- **17 comprehensive rules** for memory usage
- **Progressive search patterns** defined
- **Condensed format requirements** specified
- **Relation creation mandate** established
- **Entity naming conventions** standardized

### Quality Indicators
- ✅ No verbose observations
- ✅ All entities have clear purpose
- ✅ Meaningful relationships exist
- ✅ Date context included
- ✅ Location tracking present
- ✅ Status prefixes used
- ✅ Search optimization ready

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
