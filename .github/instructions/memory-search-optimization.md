---
applyTo: "**"
---

# Memory Search Optimization Guide

## Overview
This guide provides comprehensive best practices for using `mcp_memoraimcp_recall` effectively based on analysis of search behavior and algorithm limitations.

## Critical Search Principles

### 🎯 Rule 1: Start Simple, Then Narrow
- ✅ **DO**: Begin with single key terms (`"metu"`, `"project"`, `"completion"`)
- ❌ **DON'T**: Use complex multi-term queries (`"metu template project status completion plan"`)

### 🔍 Rule 2: Use Semantic Concepts
- ✅ **DO**: Search for concepts and entity types (`"project_status"`, `"plan"`, `"user_instructions"`)
- ❌ **DON'T**: Expect exact string matching behavior

### 📈 Rule 3: Progressive Search Strategy
1. **Broad search**: Main concept (`"workspace"`)
2. **Focused search**: Add specific term (`"workspace ai"`)
3. **Multiple angles**: Try related terms separately

## Search Algorithm Behavior

### How It Works
- Uses **semantic similarity** matching, not exact text search
- Has **relevance thresholds** that filter out low-scoring results
- Prioritizes **entity names** and **entity types** over observation content
- Struggles with **high term density** and **semantically distant concepts**

### Why Searches Fail
1. **Too Specific**: Complex queries exceed semantic matching capability
2. **Term Density**: Too many concepts in one query confuse the algorithm
3. **Semantic Distance**: Query terms don't match stored vocabulary
4. **Relevance Threshold**: Query doesn't meet minimum similarity score

## Effective Search Patterns

### ✅ Successful Query Examples
```javascript
// Project status queries
search_nodes("project completion")
search_nodes("metu")
search_nodes("workspace ai")

// Entity type searches
search_nodes("project_status")
search_nodes("plan")
search_nodes("user_instructions")

// Time-based searches
search_nodes("June 8 2025")
search_nodes("recent current")
```

### ❌ Problematic Query Examples
```javascript
// Too complex
search_nodes("metu template project status completion plan")

// Too specific
search_nodes("Next.js 15 monorepo template Firebase integration")

// Semantically distant
search_nodes("very specific technical implementation details")
```

## Recovery Strategies

### When You Get Empty Results
1. **Break it down**: Split complex query into individual terms
2. **Try entity types**: Search for `"project_status"`, `"plan"`, etc.
3. **Use entity names**: Search for known entity names
4. **Go broader**: Use more general terms
5. **Multiple searches**: Run several focused searches instead of one

### Progressive Search Example
```javascript
// Instead of this (fails):
search_nodes("metu template project status completion plan")

// Do this (succeeds):
search_nodes("metu")           // Gets METU entities
search_nodes("project_status") // Gets all project status entities  
search_nodes("completion")     // Gets completion-related entities
```

## Memory Storage Best Practices

### Optimize for Searchability
- Include **key search terms** in entity names
- Use **consistent vocabulary** across observations
- Add **entity type tags** for better categorization
- Store **multiple perspectives** of the same information

### Entity Naming Strategy
- Use **descriptive names** with key terms: `"METU Template Project"`
- Include **search keywords**: `"Workspace AI Instruction System"`
- Add **context markers**: `"June 8 2025"`, `"Production Ready"`

### Observation Content
- Start with **status indicators**: `"STATUS: 100% COMPLETE"`
- Include **date markers**: `"as of June 8, 2025"`
- Use **common terminology** that you'll search for later
- Add **cross-references** to related entities

## Implementation Checklist

### Before Searching
- [ ] Identify the main concept you're looking for
- [ ] Choose 1-2 key terms maximum
- [ ] Consider entity types that might contain the information
- [ ] Plan progressive search strategy if initial search fails

### During Search
- [ ] Start with broadest relevant term
- [ ] Check results before adding complexity
- [ ] Try entity type searches if content searches fail
- [ ] Use multiple focused searches rather than one complex query

### After Search
- [ ] Analyze why searches failed (if they did)
- [ ] Store findings using searchable entity names
- [ ] Include key terms in new observations
- [ ] Update search vocabulary for future use

## Troubleshooting Guide

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|--------|----------|
| Empty results | Query too specific | Break into simpler terms |
| No relevant matches | Semantic distance | Use stored vocabulary |
| Overwhelming results | Query too broad | Add one specific term |
| Inconsistent results | Algorithm variation | Use entity type searches |

### Debug Process
1. **Test simple terms**: Try individual words from your complex query
2. **Check entity types**: Search for `"project_status"`, `"plan"`, etc.
3. **Verify storage**: Ensure information was actually stored
4. **Review entity names**: Check if entity names match your expectations

## Success Metrics

### Optimal Search Performance
- **90%+ success rate** with progressive search strategy
- **Consistent results** using entity type and name searches
- **Fast retrieval** through focused queries
- **Comprehensive coverage** via multiple search angles

---

*Last updated: June 8, 2025*
*Based on comprehensive analysis of memory search behavior and algorithm limitations*
