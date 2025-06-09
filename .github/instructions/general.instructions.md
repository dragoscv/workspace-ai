---
applyTo: "**"
---

# 🧠 Copilot Agent Instruction Manual

This document defines the expected behavior, design principles, and generation patterns for the GitHub Copilot Agent across all projects. Before doing something, always check the memory mcp tool for existing context and instructions. Always use vscode tasks to start or check running dev servers, build packages, and run tests. If a task is not available, think and create tasks.

---

## 💡 Code Quality & Architecture

- Follow principles like:
  - **DRY** (Don’t Repeat Yourself)
  - **KISS** (Keep It Simple, Stupid)
  - **YAGNI** (You Aren’t Gonna Need It)
  - **SOLID** (Object-oriented design principles)
- Avoid deeply nested logic and duplicated patterns.
- Ensure all TypeScript code uses strict typing (`noImplicitAny`, `noUnusedLocals`, etc.).

---

## 🎨 Styling & UI Guidelines

- Prefer **Tailwind CSS** (utility-first, responsive, animated).
- Use CSS structuring practices like **BEM**, **SMACSS**, or **OOCSS** where applicable.
- Integrate **Framer Motion** and **Tailwind Animate** for transitions and effects.
- Maintain **light/dark mode**, responsive design, and custom themes.

---

## ⚙️ Tooling & Configuration

- Use `.env` files for all environment-specific variables.
- Ensure `.gitignore` covers common secrets and build artifacts.
- Automatically apply best practices from:
  - `next-safe-env` for environment variables
  - `zod` for schema validation
  - `pnpm` workspaces (if monorepo)

---

## 🔍 Accessibility & SEO

- Adhere to **ARIA** and **WCAG 2.1** accessibility standards.
- Structure pages with semantic HTML and include:
  - Descriptive `meta` tags
  - Schema.org structured data
  - Optimized Open Graph metadata

---

## 🔐 Security Best Practices

- Always sanitize user inputs.
- Validate form data both client-side and server-side.
- Avoid exposing secrets or tokens in client code.

---

## 🧪 Testing Strategy

- Generate tests using:
  - **Playwright** for end-to-end tests
  - **Jest/Vitest** for unit tests
- Follow **TDD** and **BDD** methodologies where relevant.
- Aim for minimum **80% coverage** on all critical logic.
- Use `PlaywrightMCPServer` where available to automate UI test generation.

---

## 🔧 Debugging & Development

- Use `console.log()` and `debugger` statements appropriately.
- Auto-fix issues when detected if safe to do so.
- Summarize debugging context where helpful.

---

## 🧠 Memory & Context

- **ALWAYS CHECK MEMORY FIRST**: Before starting any task, use `mcp_memorymcpserv_search_nodes` to check for existing plans, prompts, and task history
- **STORE IMPORTANT CONTEXT**: Store user plans, task lists, and multi-step procedures in memory with entity type 'plan' or 'task_list'
- **PRESERVE PROMPTS**: Keep important user prompts and instructions in memory with entity type 'prompt' or 'user_instructions'
- **MAINTAIN CONTINUITY**: Reference previous work and check for existing plans/prompts before creating new ones
- Use `MemoryMCPServer` to retain context and optimize completions across files and sessions
- Always consider local file context, open tabs, selection history, and stored memory when generating or editing
- Follow the comprehensive guidelines in `memory-mcp-usage.instructions.md` for proper memory management

---

## 📚 Documentation & PRs

- Ensure `README.md`, `DESCRIPTION.md`, and `.env.example` are always updated.
- When generating pull requests:
  - Include a descriptive title and checklist.
  - Follow format from `pr-guidelines.instructions.md`.
- Always include test coverage with new features.

---

## 🧾 Commit & Review Conventions

- Follow the **Conventional Commits** format:
  - `feat:`, `fix:`, `chore:`, `refactor:`, etc.
- Format PRs and code reviews using these instruction files:
  - `commit-guidelines.instructions.md`
  - `test-guidelines.instructions.md`
  - `code-review.instructions.md`
  - `pr-guidelines.instructions.md`

---

## 🧠 Copilot Agent-Specific Behavior

- Apply behavior defined in this file in all contexts (generation, review, summarization, testing).
- Always check for:
  - Existing project configuration
  - Workspace-specific instructions
  - Instruction `.md` files defined in `settings.json`
- Think critically: if an existing approach is suboptimal, suggest improvements.

---

## 🛠️ Collaboration & Process

- Use Agile and Scrum principles for tasks, branches, and releases.
- Reference GitHub Issues and Projects where relevant.
- Maintain clear commit messages and linked issues.

---

## 🤖 Agent Awareness Summary

Always use:
- `.github/instructions/` files for scoped guidance.
- `MemoryMCPServer` for context.
- `PlaywrightMCPServer` for test automation.
- The latest experimental Copilot Agent capabilities as defined in global settings.

---

