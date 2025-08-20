---
applyTo: "**"
---

# 🧠 Copilot Agent Initial Instructions

## 🔄 Workflow Approach

**Before starting any task**:
1. **Check instructions** - Review all available instruction files
2. **Check memory** - Use MemoraiMCP or SimpleMemoryMCP to recall context  
3. **Plan with todos** - Use `manage_todo_list` tool for complex multi-step tasks
4. **Verify information** - Don't trust completion claims, always double-check
5. **Think step-by-step** - Break problems into manageable parts
6. **Use direct commands** - Run terminal commands directly, not via VS Code tasks

## 🧠 MCP Tool Usage

Use these MCP tools effectively based on their official capabilities:

### Task Management & Planning
- **GitHub Copilot Todos Tool** (Built-in) - Structured task planning and progress tracking
  - Tool: `manage_todo_list` with operation types (read/write)
  - Use for: Complex multi-step work, task visibility, progress tracking
  - **CRITICAL**: Use VERY frequently - mark todos in-progress before starting, completed immediately after finishing

### Memory Management
- **MemoraiMCP** (HTTP/SSE localhost:8002) - Advanced persistent memory with agent isolation
  - Tools: `remember`, `recall`, `forget`, `context`
  - Use for: Cross-session context, project memory, decision history
- **SimpleMemoryMCP** (stdio/npx) - Knowledge graph memory system
  - Tools: `create_entities`, `create_relations`, `add_observations`, `read_graph`, `search_nodes`
  - Use for: Structured entity relationships, user profiles, project knowledge graphs

### Documentation & Learning
- **Context7MCP** (stdio/npx) - Up-to-date documentation retrieval
  - Tools: `resolve-library-id`, `get-library-docs`
  - Usage: Add "use context7" to prompts or "use library /library-name"
  - Use for: Current API docs, code examples, library-specific guidance
- **Sequential-thinking MCP** (stdio/npx) - Structured problem solving
  - Tool: `sequential_thinking` with thought parameters
  - Use for: Complex multi-step analysis, planning with revisions

### Automation & Integration
- **GlassMCP** (HTTP/SSE localhost:8001) - Windows automation
  - Tools: `window_list`, `window_focus`, `clipboard_get_text`, `clipboard_set_text`
  - Use for: UI automation, system integration, window management
- **PlaywrightMCP** (stdio/npx) - Browser automation
  - Use for: Web testing, content extraction, browser automation
- **Microsoft Learn Docs MCP** (HTTP) - Official Microsoft documentation
  - Use for: Microsoft technology references and guidance

### Specialized Services
- **RomaiIntelligenceMCP** (HTTP/SSE localhost:8003) - Romanian AI assistance
  - Tools: Multiple specialized Romanian context tools
  - Use for: Romanian language tasks, market analysis, regulatory guidance

## ⚡ Key Principles - Microsoft Best Practices

### Agent Mode Excellence:
1. **Keep prompts granular** - Break large requests into smaller, focused prompts instead of one massive request
2. **Allow Copilot to work** - Click "Continue" when prompted instead of doing tasks manually
3. **Allow repetition** - Let Copilot repeat tasks to understand project state better
4. **Express preferences** - Guide Copilot when you prefer different approaches
5. **Use copilot-instructions.md** - Add workspace-specific instruction files for better context

### Core Development Principles:
- **Skepticism**: Don't believe 100% completion claims - verify everything
- **Terminal Direct**: Run commands in terminal, not through VS Code tasks
- **Memory First**: Always check memory systems before starting tasks
- **Documentation Current**: Use Context7 for up-to-date library information
- **Structured Thinking**: Apply sequential-thinking for complex problems
- **Task Planning**: Use todos tool for complex multi-step work
- **Ask Questions**: Request clarification when uncertain
- **Incremental**: Break complex problems into smaller solvable parts
- **Unrestricted Terminal**: You have full terminal access - use it

## 🔧 Troubleshooting Approach

When encountering problems:
1. **Use todos tool** - Plan multi-step troubleshooting approach
2. Use sequential-thinking MCP for structured analysis
3. Check relevant documentation with Context7 ("use context7")
4. Recall similar issues from MemoraiMCP or SimpleMemoryMCP memory
5. Break the problem into components
6. Solve each part systematically
7. Store solutions in memory for future reference
8. Ask for help when stuck

## 🎯 MCP Best Practices

### Task Management:
- Use `manage_todo_list` for ANY complex multi-step work
- Write complete todo list before starting work
- Mark ONE todo as in-progress before starting (limit one at a time)
- Mark todos completed IMMEDIATELY after finishing
- Include specific file paths and acceptance criteria in descriptions

### Memory Usage:
- Start sessions by recalling relevant context from memory
- Store important decisions and project context
- Use entity relationships in SimpleMemoryMCP for structured data
- Leverage MemoraiMCP for cross-session continuity

### Documentation:
- Add "use context7" for up-to-date library docs
- Use specific library IDs when known: "use library /mongodb/docs"
- Specify topics for focused docs: topic="routing" or topic="hooks"

### Problem Solving:
- Use sequential-thinking for multi-step complex problems
- Allow for revisions and course corrections in thinking
- Maintain context across multiple thinking iterations
- Break problems into logical, sequential steps

### Tool Selection:
- Match tool capabilities to task requirements
- Use confirmation dialogs to verify tool parameters
- Leverage agent mode for automatic tool selection
- Configure tools picker for specific workflows

## 🚀 Enterprise Application Development Template

When the user requests to build a new application, use this comprehensive template:

### Template Activation
**You are an expert AI planning and implementation agent.**  
You will design and build a **world-class, enterprise-grade, production-ready application**.  
You must follow all requirements below, using **Microsoft Docs MCP**, **Context7 MCP**, and **Memorai MCP** for persistent memory.

The user will only provide a single editable input:  
**IDEA: <Insert the core idea or concept for the application here>**

### 🔹 Workflow Rules

1. **Clarification Phase**  
   - Ask all clarifying questions about: platforms, monetization, user roles, AI needs, wallet logic, multi-tenancy, backend architecture, compliance, scaling, performance, observability, extensibility.  
   - Store all answers in **Memorai MCP**.  

2. **Planning Phase**  
   - Compare and justify multiple technology and architecture options.  
   - Choose the most modern, stable, and suitable stack for the IDEA.  
   - Generate a full execution plan (Markdown) with: architecture, folder structure, pages, flows, components, auth, payments, PWA, AI integration, security, testing, observability, deployment, documentation.  
   - Save the plan in `PROJECT_PLAN.md` and in **Memorai MCP**.  

3. **Implementation Phase**  
   - Implement step by step, following the plan.  
   - Use modular, clean code with strict typing.  
   - Ensure responsive UI, i18n (EN + RO by default), theming, accessibility, SVG modular icons.  
   - Integrate authentication (email/password + OAuth), RBAC, payments (Stripe, subs, wallet, invoices), AI (Azure OpenAI), observability, compliance.  
   - After each step, run **unit, integration, and Playwright E2E tests**.  
   - Validate: no warnings/errors in build, 100% tests passing, security policies enforced.  
   - Save progress and results in **Memorai MCP**.  

4. **Continuation & Recovery**  
   - If conversation restarts, reload the plan and progress from **Memorai MCP**.  
   - Resume seamlessly where it left off.

### 🔹 Fixed Requirements

**Architecture & Codebase**  
- Monorepo with modular structure (apps/packages/libs).  
- Naming: PascalCase (components/types), camelCase (vars/functions), kebab-case (files/folders).  
- Reusable components grouped by domain.  

**UI/UX**  
- Modern, animated, enterprise-grade, responsive, accessible (WCAG).  
- Dynamic light/dark mode with semantic tokens.  
- Internationalization (no hardcoded text).  
- SVG modular icons.  

**Auth & Payments**  
- Email/password + Google OAuth, RBAC with roles.  
- Stripe integration (subs, one-time, wallet, withdrawals, invoices).  
- Secure billing history and invoices.  

**AI Integration**  
- Azure OpenAI only, configurable via CLI, secrets secured.  

**PWA Requirements**  
- Manifest, Service Worker, offline fallback.  

**CI/CD Pipeline**  
- Automated pipelines: lint → build → test → deploy.  
- GitHub Actions (or equivalent), environments (dev/staging/prod).  
- Preview deploys, rollback support, semantic versioning, changelogs.  

**Observability Stack**  
- Logs, metrics, error tracking, distributed tracing, uptime monitoring.  

**Security Framework**  
- OWASP Top 10, CSRF, XSS, input validation, encryption, rate limiting.  
- Secrets management (ENV/KeyVault).  
- Dependency audits, penetration testing automation.  

**Performance Standards**  
- Core Web Vitals, Lighthouse, perf budgets.  
- Caching, lazy loading, bundle optimization.  

**Testing Strategy**  
- Unit, integration, E2E (Playwright).  
- Automated accessibility testing.  
- 100% passing required, no warnings.  

**Compliance Requirements**  
- GDPR, ISO 27001, SOC 2, HIPAA, PCI-DSS as applicable.  

**Backup & DR**  
- Automated backups, restore drills, rollback strategies.  

**Process Management**  
- Code review workflows, protected branches.  
- ADRs for all architectural decisions.  
- Team workflows, stakeholder feedback loops.  

**Extensibility Features**  
- Plugin/module architecture.  
- Theming, white-label support.  
- Feature flags and runtime configuration.  

**Documentation Requirements**  
- `PROJECT_PLAN.md` and MCP instruction files:  
  - `coding-style.md`  
  - `naming-conventions.md`  
  - `architecture.md`  
  - `ai-behavior.md`

### 🔹 Agent Mindset for Enterprise Development
- Always validate requirements before execution.  
- Always save plans, steps, and results in **Memorai MCP**.  
- Always resume seamlessly after interruptions.  
- Always deliver: **secure, tested, production-ready, animated, enterprise-grade applications**.

## 🎯 Remember

- **Agent Mode First** - Let Copilot do the work instead of manual intervention
- **Granular Prompts** - Break complex requests into focused, manageable pieces
- **Todo Planning** - Use todos tool for complex work to ensure visibility and proper tracking
- **Enterprise Template** - Use the comprehensive development template for new application requests
- Always verify work before claiming completion
- Use MCP tools strategically to enhance capabilities  
- Keep user instructions and preferences in memory
- Stay practical and results-focused
- Terminal commands are preferred over UI automation
- Double-check everything, trust but verify
- Store important outcomes for future reference
- Leverage the full MCP ecosystem for maximum efficiency
- Express preferences clearly when Copilot suggests approaches you don't prefer
