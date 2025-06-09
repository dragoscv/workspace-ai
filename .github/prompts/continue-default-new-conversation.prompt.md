---
mode: agent
---
Read prompt.md. After that:

Step 0: Self-Scope and Adaptation
Before doing anything, determine the project's type, lifecycle stage, and stack: Is it a frontend web app, backend API, CLI tool, AI agent, design system, or infrastructure script? Is it an MVP, production system, or experimental prototype? Based on this, decide which steps below are necessary, which can be skipped, and which should be expanded. Tailor every suggestion to match the actual needs of the project. Clean up unneeded files. Clean up the tests. I want the tests specific to the project and flows. Think for a plan and after start working on the plan

Step 1: Audit
Analyze the entire codebase. Flag missing, broken, redundant, outdated, or inconsistent code, types, logic, or tooling. Do not assume anything is optimal. Question the current libraries, patterns, structure, and architecture. Suggest alternatives when tools are outdated, overcomplicated, or not justified. Make suggestions based on modern, well-maintained alternatives.

Step 2: Refactor and Simplify
Apply necessary improvements using best practices that fit the tech stack. Remove dead code, reduce complexity, and ensure maintainability. Use appropriate design principles (DRY, KISS, SOLID, YAGNI). Match the project’s needs: in a backend, improve service separation and data flow clarity; in frontend apps, improve component modularity and styling system; in CLIs, focus on argument parsing and user feedback.

Step 3: Configuration and Tooling
Audit and improve configuration files (.env, package.json, tsconfig, build scripts, dockerfiles, etc.). Remove unused or outdated dependencies. Improve build and deployment flows. Question if tools used are optimal—if not, suggest faster, leaner, or more modern alternatives.

Step 4: Testing
Ensure test coverage where it matters. Remove unnecessary tests and write clear, relevant ones. If no tests exist and the project is in production or mission-critical, define a lightweight testing plan. Use tools appropriate to the stack (e.g. Playwright, Jest, Pytest, Go’s testing module, etc.). Don't over-test prototypes or under-test critical flows.

Step 5: Performance and Optimization
Apply performance improvements relevant to the environment. For web apps: lazy loading, code splitting, compression. For APIs: response time improvements, database indexing, caching. For ML: optimize data loading and model inference. Always question if any bottleneck can be mitigated with better architecture or smarter design.

Step 6: Security and Stability
Validate the attack surface. Sanitize inputs, isolate environments, and encrypt credentials. Review access controls and secrets management. For AI agents or APIs, rate-limit and sandbox where needed. Flag any insecure patterns and suggest hardened alternatives.

Step 7: Documentation and Developer Experience
Add or improve documentation. Include README, setup guides, usage examples, and purpose-driven comments. Add copilot-instructions.md and structured intent files if this will be used by AI agents. If APIs exist, generate schemas (OpenAPI, JSONSchema, etc.). Keep it easy to onboard, extend, and debug.

Step 8: SEO/AEO if applicable
If the project is public-facing, ensure SEO: metadata, structured data, canonical links, hreflang. If the project is intended to be AI-augmented or agent-extendable, apply AEO: clear structure, strong naming, doc-comments, copilot instructions, consistent file layout, and descriptive interfaces that LLMs can reason about.

Final Instruction
Your role is not just to fix and build—it is to think. Always ask: Why is this here? Can it be done better? Is this the right tool for this problem? If something can be improved, do it. Question, challenge, simplify, modernize. Make this project maintainable by humans and understandable by AI. Build it so the next dev—or agent—knows exactly what, how, and why.

After running a command, check the background terminal until it finishes. If the command fails, try to fix it and run it again. If you can't fix it, ask for help. If you need to run multiple commands, run them one by one and check the output of each command before running the next one. If you need to run a command that requires user input, use the `--yes` flag to automatically answer yes to all prompts.Don't asume it's done just by checking a document, check yourself
