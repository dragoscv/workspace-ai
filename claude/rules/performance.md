---
paths:
  - "**/*.{ts,tsx,js,jsx}"
  - "**/next.config.*"
---

# Performance Standards

## Budgets (enforce in CI)
- **Core Web Vitals** (p75, field): LCP < 2.5s, INP < 200ms, CLS < 0.1
- Initial JS for a route < 170KB gzipped; flag any single dependency > 50KB
- Lighthouse performance â‰¥ 90 on primary routes
- API/Server Action p95 < 300ms; DB query p95 < 100ms

## Next.js 16 / React 19
- Server-first: keep work in RSC; ship `"use client"` only for interactivity
- Use `"use cache"` + Cache Components for cacheable data; default is dynamic
- Stream with Suspense; show meaningful skeletons, never layout-shifting spinners
- Rely on the React Compiler for memoization; don't hand-wrap everything in `useMemo`/`useCallback`
- Use `next/image` (sized, `priority` only for LCP image) and `next/font` (no layout shift)
- `import defer` / dynamic import heavy client-only modules (charts, editors, 3D)
- Use `updateTag`/`revalidateTag` precisely; avoid over-broad revalidation

## Data & Database
- No N+1: use Drizzle relational queries or explicit joins; batch with `inArray`
- Select only needed columns; paginate or stream large sets (keyset pagination preferred over OFFSET)
- Index columns used in WHERE/JOIN/ORDER BY; verify with `EXPLAIN ANALYZE`
- Cache expensive reads; dedupe in-request with React `cache()`
- Move non-blocking work (emails, webhooks, AI calls) off the request path

## Assets & Bundle
- Audit bundle with `@next/bundle-analyzer` when a route grows
- Prefer tree-shakeable, ESM libs; import submodules (`date-fns/format`) not whole packages
- Use Zod Mini on the client; lazy-load non-critical JS
- Self-host fonts; subset to used glyphs

## Measurement
- Track real CWV via the Next.js metrics hook â†’ analytics/Sentry
- Profile before optimizing; never guess. Confirm the win with a before/after number
- Add a perf check to PRs that touch hot paths (lists, dashboards, search)
