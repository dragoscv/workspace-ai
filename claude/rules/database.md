---
paths:
  - "**/*.sql"
  - "**/db/**"
  - "**/schema/**"
  - "**/migrations/**"
  - "**/drizzle/**"
---

# Database & Drizzle Conventions

## Stack
- **Drizzle ORM** (SQL-first, type-safe) + **PostgreSQL** (Neon serverless / GCP Cloud SQL). Prisma only in legacy code
- Schema lives in the shared `db` package (`@project/db`); apps import from it, never redefine
- Generate migrations with `drizzle-kit`; review the generated SQL before applying

## Schema Design
- Use **identity columns** (`generatedAlwaysAsIdentity()`), not `serial`
- Timestamps are `timestamp with time zone` (`withTimezone: true`); store UTC, default `now()`
- Money: never floats. Use `numeric`/`decimal` with explicit precision, or integer minor units (bani/cents) — be consistent per project
- Enums via pgEnum or a `text` + check constraint; document allowed values
- Name tables snake_case plural, columns snake_case; booleans read as predicates (`is_active`, `has_paid`)
- Add `created_at` / `updated_at` to mutable tables; soft-delete with `deleted_at` only when audit needs it
- Foreign keys with explicit `onDelete` behavior; index every FK

## Querying
- Prefer relational queries (`db.query.x.findMany({ with })`) or explicit joins; never N+1 in a loop
- Select only needed columns; paginate large reads (keyset > OFFSET)
- Wrap multi-write operations in a transaction (`db.transaction`); keep transactions short
- Parameterized queries only — never string-concatenate user input (Drizzle does this for you; don't bypass with raw `sql` + interpolation)
- Index columns in WHERE/JOIN/ORDER BY; verify hot queries with `EXPLAIN ANALYZE`

## Migration Safety
- Migrations are **forward-only and reviewed**; never edit an applied migration
- **Expand → migrate → contract** for breaking changes: add new nullable column → backfill → switch reads/writes → drop old (across deploys, never in one)
- Backfills run in batches, idempotent, outside the schema transaction for big tables
- Adding a NOT NULL column needs a default or a backfill-then-constrain sequence
- Test migrations against a production-like snapshot before prod; have a rollback/down path
- **Destructive ops (DROP, TRUNCATE, wide DELETE/UPDATE without WHERE) require explicit confirmation** and a verified backup — stop and ask

## Multi-tenancy & Access
- Scope every tenant-owned query by tenant/owner id; never trust a client-supplied id alone
- Enforce authorization in the data layer or server action, not just the UI
