---
paths:
  - "**/*.{ts,tsx,js,jsx,py}"
---

# Observability

## Logging
- Use **structured JSON logs** (key/value), never bare `console.log` in production code paths
- Levels: `error` (action needed), `warn` (degraded), `info` (business events), `debug` (dev only)
- Every log in a request carries a correlation/request id; propagate it across services (gateway → providers)
- **Never log secrets, tokens, passwords, full PII, card data, or full request bodies.** Redact (`***`) at the logger boundary
- Log decisions and side effects (payment captured, invoice submitted, webhook received), not noise

## Error Tracking (Sentry)
- Wire Sentry via `instrumentation.ts` + `instrumentation-client.ts` (Next.js 16 / @sentry/nextjs v10); legacy `sentry.client.config.ts` is dead
- Set `NEXT_PUBLIC_SENTRY_DSN` (+ `SENTRY_AUTH_TOKEN` for source maps) per environment or Sentry is a no-op
- Attach user id (not PII), release/version, and environment to every event
- Use `treeshake: { removeDebugLogging: true }` (NOT deprecated `disableLogger`)
- Capture handled errors with context; don't swallow exceptions silently
- Tag intentional telemetry (e.g. `auth-stuck-loading`) so it isn't mistaken for a bug

## Tracing & Metrics
- Trace cross-service calls (gateway, providers, DB, external APIs) with spans + timings
- Emit metrics for the things you'd page on: error rate, latency p95/p99, throughput, queue depth, token/cost usage
- Record business KPIs as events: signups, invoices issued, payments, failed submissions

## Health & Readiness
- Expose `/health` (liveness) and a readiness check that verifies DB connectivity
- **Cloud Run gotcha: `/healthz` is reserved by Google Frontend — use `/health`**
- Health endpoints return fast, do no auth, and never leak internal detail

## Alerting
- Alert on symptoms users feel (elevated 5xx, latency, failed payments/submissions), not raw CPU
- Every alert links to a runbook; no alert without an owner and an action
- Budget-based alerts for cost-sensitive paths (LLM spend, egress)
