---
name: explain-code
description: Explain how code works with analogies, ASCII diagrams, and step-by-step walkthroughs. Use when teaching, onboarding, understanding unfamiliar code, or when the user asks "how does this work?"
---

# Explain Code

Explain the code at `$ARGUMENTS` clearly and thoroughly.

## Explanation Structure

### 1. Analogy First
Start with an everyday analogy that captures the core concept. Make it relatable and memorable.

### 2. Visual Diagram
Create an ASCII art diagram showing the flow, structure, or relationships:

```
┌─────────┐    ┌──────────┐    ┌─────────┐
│  Input   │───▶│ Process  │───▶│ Output  │
└─────────┘    └──────────┘    └─────────┘
```

Use boxes, arrows, and labels to make the architecture or data flow clear.

### 3. Step-by-Step Walkthrough
Walk through the code explaining what happens at each step:
- What triggers the execution
- How data flows through the code
- Key decision points and branching logic
- What the output or side effects are

### 4. Key Concepts
Highlight important patterns, design decisions, or language features used:
- Why was it built this way?
- What patterns or principles does it follow?
- How does it fit into the larger system?

### 5. Common Gotchas
Point out potential pitfalls, edge cases, or common mistakes:
- What could go wrong?
- What are common misconceptions?
- What should someone new watch out for?

## Guidelines
- Keep language conversational and accessible
- Use concrete examples, not abstract descriptions
- For complex code, break the explanation into sections
- Link to related files or documentation when helpful
- Adjust depth based on the complexity of the code
