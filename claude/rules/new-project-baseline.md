---
paths:
  - "**/tsconfig*.json"
  - "**/.gitignore"
  - "**/.ignore"
  - "**/package.json"
---

# New Project Baseline (always applies)

Lessons hardened on a large full-SaaS monorepo. Apply these when
scaffolding a NEW project, and when touching an existing one that lacks them.
Each exists because it caused a real, measured failure.

## 1. Repo-root `/.ignore` â€” search hygiene

Create alongside `.gitignore` in every new repo. Read by ripgrep, fd and
VS Code search; **not** by git, so it never affects commits. It covers the
gaps `.gitignore` cannot: directories that are TRACKED but useless to grep.

```
# Search-tool ignore. NOT a .gitignore -- git never reads this.
# Anything already in .gitignore is skipped by ripgrep automatically;
# list only the gaps here. Use `rg --no-ignore` to search these anyway.
data/                  # large tracked fixtures/datasets
fixtures/
pnpm-lock.yaml         # huge, single-line, never the answer
**/*.generated.ts
**/drizzle/meta/
```

Verify: `rg --files | Measure-Object` should return thousands, not hundreds
of thousands. Measured on one monorepo: 500k+ files on disk -> 10.7k searchable,
full walk 0.19 s.

## 2. Next.js `tsconfig.json` MUST exclude build output

If `include` uses a bare `**/*.ts` / `**/*.tsx` rooted at the app dir, the
`.next` build output is pulled into the TypeScript program. In one case that
was 33 538 extra files / 24 GB, which drove tsserver past its heap limit and
killed it repeatedly with SIGABRT (exit 134) â€” breaking every agent and
IntelliSense in that window.

```jsonc
"exclude": [
  "node_modules",
  ".next/cache", ".next/server", ".next/static", ".next/standalone", ".next/trace",
  ".next-*",              // ad-hoc build dirs (.next-perf, .next-verify, ...)
  "test-results", "playwright-report"
]
```

Exclude the SUBDIRECTORIES, not all of `.next`: `next-env.d.ts` imports
`./.next/dev/types/*.d.ts` (generated route types).

Verify: `npx tsc -p tsconfig.json --listFilesOnly | Measure-Object` â€” should
be ~10k, and no path should contain `\.next\`.

## 3. `.gitignore` must cover ad-hoc build dirs with a glob

Enumerating `.next-perf`, `.next-verify`, `.next-audit`â€¦ grows unbounded.
Use `.next*` plus explicit entries for anything outside the app dir.

## 4. Repo instruction file

Every non-trivial repo gets `.github/copilot-instructions.md` (or
`AGENTS.md`) stating: the tenant/security invariant, the search rule, the
commit rule for shared clones, and the build/test commands. Agents read this
automatically; anything not written there will be re-litigated every session.

## 5. Scratch directory

`.copilot-tmp/` at repo root for agent scratch files, gitignored. Never leave
temp scripts in the repo root.
