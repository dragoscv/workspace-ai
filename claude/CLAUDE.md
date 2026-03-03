# Personal Preferences — Dragos Catalin Vladulescu

## Context
- Full-stack developer building SaaS products, primarily B2B/enterprise
- Romanian market focus (e-Factura, RON, Romanian business rules)
- Projects live in `E:\gh/`; active: **evocrm** (production), **brivio** (next)
- Windows + VS Code Insiders + pnpm

## Golden Stack (New Projects)
- **Framework**: Next.js 16+ with App Router, RSC, Server Actions, Turbopack (default bundler)
- **React**: 19.2+ (View Transitions, `useEffectEvent`, `<Activity>`, React Compiler)
- **TypeScript**: 5.9+ strict mode (`noImplicitAny`, `strictNullChecks`, `noUnusedLocals`, `noUncheckedIndexedAccess`); use `import defer` for heavy modules
- **ORM**: Drizzle ORM (SQL-first, type-safe) — Prisma only in legacy projects
- **Database**: PostgreSQL (Neon for serverless, GCP Cloud SQL for production); use identity columns not serial
- **Auth**: Auth.js v5 with Drizzle adapter — self-hosted, no vendor lock-in
- **Validation**: Zod v4 (14x faster, `z.email()`, `z.file()`, `.check()`, `z.toJSONSchema()`; use Zod Mini for client bundles)
- **CSS**: Tailwind CSS v4 — CSS-first config with `@theme`, `@tailwindcss/postcss`; no `tailwind.config.js`
- **UI**: shadcn/ui (Radix UI + CVA + clsx + tailwind-merge); treat as owned source code
- **Icons**: lucide-react
- **Forms**: Simple forms → `useActionState` + server action; Complex forms → react-hook-form + `@hookform/resolvers/zod`
- **Server state**: TanStack Query v6 (`useSuspenseQuery` for Suspense, streaming with RSC)
- **Client state**: Zustand (when needed)
- **URL state**: nuqs
- **Toasts**: sonner
- **Animations**: framer-motion + React View Transitions for navigation
- **Charts**: recharts
- **Command palette**: cmdk
- **Dates**: date-fns
- **i18n**: next-intl
- **Email**: react-email + resend
- **Payments**: Stripe
- **Testing**: Vitest 4 (unit, Browser Mode) + Playwright (E2E) + Testing Library (React)
- **Linting**: ESLint flat config (`eslint.config.mjs`) + typescript-eslint + Prettier; `next lint` removed in Next.js 16
- **Build**: pnpm (with catalogs for version management) + Turborepo monorepo
- **Deployment**: Docker + GCP (Cloud Run/Cloud SQL), GitHub Actions CI/CD

## Next.js 16 Specifics
- **Cache Components**: `"use cache"` directive for opt-in caching; config: `cacheComponents: true`
- **`proxy.ts`**: replaces `middleware.ts` (deprecated). Rename and export `proxy` function
- **React Compiler**: `reactCompiler: true` in next.config.ts for automatic memoization
- **Turbopack FS cache**: `experimental.turbopackFileSystemCacheForDev: true` for faster restarts
- **Caching APIs**: `updateTag()` for read-your-writes in Server Actions; `revalidateTag(tag, profile)` for SWR; `refresh()` for uncached data
- **Next.js DevTools MCP**: AI-assisted debugging with route context and logs

## Monorepo Conventions
- Workspace: `apps/` + `packages/` (pnpm-workspace.yaml with catalogs)
- Package naming: `@project-name/package-name` (e.g., `@brivio/db`, `@brivio/ui`)
- Shared packages: `db` (Drizzle schema + migrations), `config` (tsconfig), `lib` (utilities), `ui` (shadcn), `email` (templates)
- Each app has a unique dev port
- Root scripts: `dev`, `build`, `lint`, `typecheck`, `clean`, `db:generate`, `db:push`, `db:studio`, `db:seed`
- Use pnpm catalogs in `pnpm-workspace.yaml` to pin shared dependency versions

## Code Patterns
- Server-first: prefer RSC and Server Actions; use `"use client"` only when necessary
- API routes only for webhooks and external integrations; Server Actions for all mutations
- shadcn/ui components in `packages/ui/src/components/` or `app/src/components/ui/`
- Simple form: `useActionState` → zod validation in server action → return errors
- Complex form: `useForm()` → zod schema → `@hookform/resolvers/zod` → server action on submit
- Data tables: TanStack Table with server-side pagination/filtering
- Error handling: sonner toast for user feedback, error boundaries for crashes
- Auth: `proxy.ts` for route protection + server-side session checks
- Drizzle schemas: identity columns (`generatedAlwaysAsIdentity()`), relational queries, `withTimezone: true` on timestamps
- Caching: default dynamic, opt-in with `"use cache"` + Cache Components

## Active Projects
- **evocrm**: Production CRM (Next.js 16, Prisma, PostgreSQL/GCP, next-auth v4, Tailwind v3). Modules: clients, contracts, invoices, documents, arrears, legal cases, RBAC, WebAuthn/Passkeys
- **brivio**: Document management + invoicing SaaS (Next.js 16, Drizzle, PostgreSQL/Neon, Auth.js v5, Tailwind v4, Stripe). In development
- **facturai**: AI-powered document processing (Next.js 16, Drizzle, Tailwind v4, Zod v4)
- **cautai**: AI research tool with web search capabilities
- **memorai**: AI memory system with knowledge graphs

## MCP Tools Available
- **Context7**: `resolve-library-id` → `get-library-docs` for up-to-date library documentation
- **Sequential Thinking**: `sequentialthinking` for complex multi-step reasoning and planning
- **Web Search**: `webSearch` for real-time information, latest releases, current best practices
- **Playwright MCP**: Browser automation for testing and scraping
- **Next.js DevTools MCP**: Route-aware debugging, unified browser/server logs, error access
- **Microsoft Docs**: `microsoft_docs_search`, `microsoft_code_sample_search`, `microsoft_docs_fetch`
- **Simple Memory**: Knowledge graph for persistent entity/relation storage across sessions

## Communication
- Be concise and direct; skip preambles
- Code over explanations; show the implementation
- Romanian language understood (business terms: factura, contract, societate, CUI, etc.)
- When uncertain between approaches, pick the one closer to the golden stack above
- Don't suggest libraries outside the golden stack without explaining why
