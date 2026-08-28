# CLAUDE.md — template

Personal preferences file for Claude Code / Copilot. Copy to `~/.claude/CLAUDE.md`
and adapt. Keep your real project inventory **out of a public repo** — put it in
a private one (see `scripts/redact-rules.ps1` for how this repo stays clean).

## Context

- Describe yourself in one or two lines: what you build, for whom, on what OS.
- Where your repos live, e.g. `E:\gh/`.
- Which projects are active, and their priority order.

## Golden stack

State the **latest stable** version policy explicitly — agents otherwise default
to whatever was current in their training data.

- **Framework**: Next.js 16+ (App Router, RSC, Server Actions, Turbopack)
- **React**: 19.2+ · **TypeScript**: 6.0+ strict
- **ORM**: Drizzle + PostgreSQL · **Auth**: Auth.js v5 · **Validation**: Zod v4
- **CSS**: Tailwind v4 (CSS-first `@theme`) · **UI**: shadcn/ui · **Icons**: lucide-react
- **State**: TanStack Query v5, Zustand, nuqs · **Toasts**: sonner
- **Testing**: Vitest 4 + Playwright · **Build**: pnpm + Turborepo
- **Services**: Hono 4 · **Deploy**: Vercel (web), GCP Cloud Run (services)

## Code patterns

- Server-first: RSC + Server Actions; `"use client"` only when necessary.
- API routes only for webhooks/external integrations.
- Simple forms → `useActionState`; complex → react-hook-form + zod resolver.
- Every mutation: Zod validate → authn → authz → audit → execute.

## Communication

- Be concise; code over prose; skip preambles.
- Ask before deciding when a trade-off is hard to reverse.
- State whether a claim is VERIFIED (ran it) or EXPECTED (reasoned it).

## Rules

Path-scoped rules live in `~/.claude/rules/` — see this repo's `claude/rules/`
for a full set covering search, security, testing, performance, database,
deployment verification, multi-agent coordination and shell safety.
