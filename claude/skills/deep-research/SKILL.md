---
name: deep-research
description: Research a topic thoroughly using codebase exploration and available search tools. Use when investigating unfamiliar technologies, debugging complex issues, understanding architecture, or gathering context before implementation.
---

# Deep Research

Research the following topic thoroughly: **$ARGUMENTS**

## Research Process

### 1. Codebase Exploration
- Search for relevant files, functions, and patterns using Glob and Grep
- Read key files to understand the current implementation
- Map module dependencies and data flow
- Identify relevant configuration and environment setup

### 2. Pattern Analysis
- Look for similar patterns or solutions already in the codebase
- Identify conventions, naming patterns, and architectural decisions
- Note any test coverage for the area being researched

### 3. External Context
- Search for relevant documentation, best practices, and known issues
- Check for library-specific patterns or recommendations
- Look for security advisories or deprecation notices

### 4. Synthesize Findings
- Summarize what you found with specific file references
- Identify key decisions and trade-offs
- Note any risks, gaps, or areas that need attention
- Provide actionable recommendations

## Output Format

```
## Research: [topic]

### Summary
Brief overview of findings

### Key Files
- [file:line] - What it does and why it matters

### Current Patterns
How the codebase currently handles this

### Recommendations
Specific, actionable next steps

### Risks & Considerations
What to watch out for
```
