---
mode: agent
---
Read prompt.md from .github folder. Think. If doesn't exist, check project, think and create prompt.md in .github folder as it would have been the first prompt to create this project. After that:

Phase 0: Contextual Analysis
Before starting, analyze the project type, stack, and lifecycle stage. Determine if it’s an MVP, production SaaS, design system, CLI tool, or hybrid project. Decide which phases apply fully, partially, or not at all. Tailor all decisions accordingly. Apply pragmatism and outcome-driven thinking over generic perfection.

Phase 1: Audit and Strategic Planning
Perform a complete audit of the codebase. Check every file for missing implementations, incorrect logic, outdated libraries, incomplete types, and unused or redundant code. Do not trust existing logic blindly—challenge everything. Flag any architecture or library choices that are suboptimal or outdated, and suggest better modern alternatives. Document all findings and classify issues by severity and category. Build a step-by-step remediation plan with priorities.

Phase 2: Refactoring and Modernization
Implement the remediation plan. Apply strict TypeScript rules with no implicit any, full typing, and strong interface design. Refactor logic using DRY, KISS, YAGNI, and SOLID principles. Use Tailwind CSS with utility-first design and no hardcoded spacing or color values. Replace outdated or verbose logic with simpler alternatives. Keep all code highly readable and maintainable.

Phase 3: Tooling and Configuration
Ensure the project uses the latest version of pnpm with workspace optimizations. Configure ESLint, Prettier, tsconfig, and .env files cleanly. Add git hooks, semantic-release workflows, and conventional commit enforcement. If a current tool or setup is outdated or overly complex, suggest replacements and explain why. Structure everything for team scaling and reproducibility. Use always real data, no mock data or files. The environment variables are set in .env.

Phase 4: Test Strategy
Review the test suite critically. Remove low-value or generic tests. Keep only tests that verify real, project-specific behavior. Add missing tests for core user flows and edge cases. Use Playwright for E2E and Storybook for UI components. Prefer TDD or BDD when applicable. Ensure CI runs tests reliably and efficiently.

Phase 5: Performance Optimization
Apply lazy loading, dynamic imports, tree-shaking, and code splitting. Evaluate build size, runtime performance, and unnecessary rerenders. Analyze third-party libraries and Firebase usage for bloat. Replace bulky packages with lightweight alternatives if justified. Use Next.js features like SSG, SSR, ISR appropriately per route.

Phase 6: Security and Compliance
Audit input validation, backend sanitization, and Firebase rules (Firestore, Realtime DB, Storage). Use encrypted credentials and secure cookies. Review authentication logic for vulnerabilities. Ensure environment separation for dev, staging, and prod. Suggest best-practice improvements for any surface not hardened.

Phase 7: Accessibility and UX
Run a WCAG audit. Apply ARIA roles, ensure keyboard navigation, proper contrast ratios, and semantic HTML. Evaluate if UX flows are intuitive and frictionless. If anything feels off, suggest better flows or interface structures. Apply motion guidelines and responsive behavior via framer-motion and Tailwind.

Phase 8: Design System and Brand
Unify all design decisions into a coherent system. Use Tailwind theme extensions for tokens. Enforce consistent typography, spacing, and color usage. Remove duplicated or inconsistent components. Apply logo guidelines, content tone, and branding rules across the UI. Respect dark/light theme conventions.

Phase 9: SEO and AEO
For SEO: Add complete meta tags, Open Graph metadata, canonical URLs, hreflang, structured data, and robots directives. Ensure clean, readable URLs. For AEO (Artificial Engine Optimization): Add rich internal comments, descriptive variable/function names, structured documentation, copilot-instructions.md, and intent files. Create README files and API schemas that allow AI tools to quickly understand and assist with the repo.

Phase 10: Documentation and Developer Enablement
Document everything: README, DESCRIPTION, setup guide, architectural decisions, and API schemas. Include a copilot-instructions.md file to help GitHub Copilot Agents understand the repo’s purpose. Annotate code with purpose-driven comments. Create dev onboarding steps, CI/CD instructions, and issue templates.

Final Instruction
Do not assume existing code is correct. Think critically. Challenge libraries, patterns, data flows, and UX interactions. If something can be done better, simpler, faster, or safer—change it. Question with intent. Simplify with purpose. Build a codebase that’s clean, self-healing, extensible, and AEO/SEO-ready.

Don't asume something it's done or completed just by finding this documented, always check yourself again to be sure. Clean up unneeded files. Clean up the tests. I want the tests specific to the project and flows. Use the error check tool after every edit of a file. Don't make any changes now. First think for a plan and after ask me permission to proceed.
