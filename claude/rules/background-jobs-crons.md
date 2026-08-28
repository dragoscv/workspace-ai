---
paths:
  - "**/worker/**"
  - "**/workers/**"
  - "**/cron*/**"
  - "**/jobs/**"
  - "**/scheduler*/**"
  - "**/vercel.json"
---

# Background Jobs, Workers & Crons

Applies to worker apps, Cloud Run jobs, Vercel crons, schedulers (worker/scheduler apps, a benchmarks worker, Python APScheduler jobs, sync workers).

## Correctness
- Every job must be IDEMPOTENT â€” it will be retried, double-triggered, and re-run after a partial failure. Guard with a processed-marker, unique constraint, or upsert; never assume exactly-once
- Prevent overlap: a long job must not run concurrently with itself (DB advisory lock, a `running` row, or provider-level concurrency=1). State the strategy in code
- Make jobs resumable/batched â€” process in chunks with a cursor so a timeout doesn't lose all work
- Jobs mutating tenant data must respect the org-scoping rules (never bypass the org-scoped helper because "it's a background job")

## Safety & gating
- Cron/webhook endpoints must authenticate (shared secret header / `Authorization: Bearer $CRON_SECRET` / OIDC) â€” never an unauthenticated public route that mutates data
- Respect safe-mode / env gates: a job touching an external provider must no-op cleanly when its secret is absent, and must be disabled in non-prod unless explicitly enabled
- Never send real emails/SMS/invoices from dev or staging â€” route to a sink or hard-guard on env

## Scheduling & cost
- Cron frequency is a cost decision: on serverless (Vercel Fluid, Cloud Run) a frequent cron with a long default timeout burns provisioned time. Pick the loosest interval that meets the requirement
- Set an explicit timeout/maxDuration per job; don't inherit a 300s platform default
- Long/heavy work belongs in a Cloud Run job or worker, not a serverless request handler

## Observability
- Log start/finish with a job name, run id, duration, and items processed (structured)
- Report failures to Sentry with the job name as context; a silently failing cron is the worst failure mode
- Track last-successful-run somewhere queryable so staleness is detectable (status page / health check)
- Emit a metric or log line even on no-op runs, so "is it running at all?" is answerable

## Verifying
- After deploying/changing a job, trigger it manually once and read the logs â€” don't wait for the schedule to prove it works
- Confirm the job reached a TERMINAL state; an orphaned RUNNING cloud job burns quota
