---
paths:
  - "**/drizzle/**"
  - "**/migrations/**"
  - "**/schema/**"
  - "**/*.sql"
---

# Migration Operations & Journal Discipline

Applies to Drizzle migration OPERATIONS (generating, applying, journal integrity). Schema design conventions live in database.md.

## Generating
- Always `pnpm db:generate` â€” never hand-write migration SQL files unless doing a data backfill the generator can't express
- Immediately after generating, verify the new file is REGISTERED in `drizzle/meta/_journal.json` â€” an orphaned .sql file will never run in prod (this has happened: the monorepo 0252)
- Commit the migration .sql + `_journal.json` + snapshot TOGETHER, in the same commit as the schema change. A schema module referenced from `index.ts` but not committed breaks prod builds
- In a shared clone, another agent may generate a migration concurrently â†’ numbering collision. Re-check `drizzle/` right before committing; regenerate if your number is taken

## Applying
- Local: `pnpm db:push` for dev iteration; `pnpm db:migrate:local` (backup + migrate) when testing the real migration path
- Staging/prod: ONLY via the backup-and-confirm scripts (`db:migrate:staging`, `db:migrate:prod`) â€” never raw `drizzle-kit push` against prod
- Never run migrations against prod without a fresh backup verified to exist
- `db:push` against a large DB can hang minutes on introspection â€” that's normal; don't kill-and-retry blindly

## Expand â†’ migrate â†’ contract (zero downtime)
- New column: nullable/defaulted first, deploy code that writes both, backfill, then tighten constraints in a LATER migration
- Never drop or rename a column in the same release that stops using it
- Destructive ops (DROP, TRUNCATE, type narrowing) require explicit user confirmation â€” always

## Backfills
- Write idempotent backfills (WHERE new_col IS NULL) in batches; log progress
- Backfill scripts live in `scripts/`, take DATABASE_URL from env, and never hardcode prod credentials

## Drift
- If `db:generate` produces an unexpected diff you didn't cause, STOP â€” likely another agent's uncommitted schema change or prod drift. Investigate before committing
- Periodically verify applied migrations (`__drizzle_migrations` table) match the journal; unexplained gaps = drift investigation
