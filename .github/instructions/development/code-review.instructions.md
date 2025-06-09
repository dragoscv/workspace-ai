---
applyTo: "**"
---

# 🔍 Code Review Instructions for Copilot Agent

These guidelines define what to check, how to suggest improvements, and when to reject or flag changes during code review.

---

## ✅ Functional Correctness

- Ensure the code performs its intended function without runtime errors.
- Validate all branches and edge cases are covered.
- Confirm that the logic matches the purpose described in comments, docstrings, or commit messages.

---

## 🧠 Code Clarity & Readability

- Prioritize clarity over cleverness.
- Prefer descriptive variable and function names (`userSession` > `us`).
- Check for overly nested structures — suggest flattening when possible.
- Avoid unnecessary complexity or premature abstractions.

---

## 🧹 Clean Code Practices

- No unused imports, variables, functions, or props.
- No commented-out blocks of code (unless temporarily marked with a clear `TODO:` or `FIXME:`).
- No `any` types in TypeScript unless explicitly justified.
- No inline magic numbers or string literals — extract as constants or enums.

---

## 💡 Consistency

- Follow project-specific naming conventions, spacing, and code formatting.
- Ensure consistent use of:
  - Async/await vs Promises
  - Function declarations vs arrow functions
  - Imports (absolute vs relative paths)
- Match existing project patterns unless there's a clear reason to deviate.

---

## 🧪 Tests

- Confirm that new or modified code is tested.
- Check that tests:
  - Use consistent structure and naming
  - Cover success and failure cases
  - Avoid duplication or fragile logic

---

## 🧯 Safety & Security

- Flag any usage of `eval`, direct DOM manipulation, or unsafe third-party packages.
- Ensure data is properly validated and sanitized.
- Watch for common security issues (e.g., unescaped output, unvalidated input, overly permissive CORS or access control).

---

## 🎨 Styling & UI (if applicable)

- Confirm UI components are accessible (keyboard nav, ARIA roles, labels).
- Check for responsive behavior (mobile-first layout, safe breakpoints).
- Validate correct use of Tailwind classes and color schemes.

---

## 📦 Performance & Optimization

- Warn against unnecessary re-renders, especially in React.
- Identify large synchronous blocks that could be made async.
- Recommend lazy loading for large components or resources.

---

## 🔄 Suggest Improvements Proactively

- If a better approach or library exists, recommend it.
- Ask clarifying questions in ambiguous situations.
- When possible, auto-suggest fixes or refactors inline.

---

## ❌ Reject When...

- The code introduces obvious bugs or crashes.
- There are serious architecture violations.
- No tests are provided for critical logic.
- The implementation contradicts documented behavior or API contracts.

---

## 📎 Additional Notes

- Always offer context-aware suggestions based on the file structure and imported modules.
- If the repository includes `.github/instructions/`, align with those files for test, commit, and PR guidelines.
- **MEMORY CONTEXT**: Use MCP memory tools to check for existing plans, prompts, and review history before conducting reviews
- **STORE REVIEW INSIGHTS**: Preserve important review findings and patterns in memory for future reference
- If MCP servers are active, use them to gather additional memory or test context for more informed reviews.

---

