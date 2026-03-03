---
paths:
  - "**/*.{ts,tsx,js,jsx,py,go,rs}"
---

# Code Quality Standards

## TypeScript / JavaScript
- Strict TypeScript: enable `strict`, `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`
- Never use `any`; use `unknown` with type guards or proper generic types
- Use `const` by default; `let` only when reassignment is required; never `var`
- Prefer `interface` for object shapes; use `type` for unions, intersections, and mapped types

## General Code Quality
- Functions should do one thing; keep them under 50 lines
- Maximum 3 levels of nesting; extract early returns or helper functions
- Meaningful names: `getUserById` not `getU`; `isAuthenticated` not `auth`
- No magic numbers or strings; extract to named constants
- Handle errors explicitly; never swallow errors with empty catch blocks
- Use Zod v4 for runtime validation at system boundaries (API inputs, form data, env vars)
- Use Zod top-level formats: `z.email()`, `z.uuid()`, `z.url()` (not `z.string().email()`)
- Use `z.file()` for file upload validation; `z.toJSONSchema()` for schema export
- Use Zod Mini (`@zod/mini`) in client bundles for smaller bundle size
- Prefer immutable data patterns; avoid mutating function arguments
- Use `import defer` (TS 5.9) for heavyweight modules to improve startup time
- No circular dependencies between modules
- Export only what is needed; prefer named exports over default exports
- Delete dead code; don't comment it out

## Database Schema (Drizzle + PostgreSQL)
- Use identity columns (`generatedAlwaysAsIdentity()`) not `serial` for primary keys
- Use `withTimezone: true` on all timestamp columns
- Define relational queries with `relations()` from `drizzle-orm`
- Use `pgEnum` for constrained string columns; define as const arrays for type reuse
