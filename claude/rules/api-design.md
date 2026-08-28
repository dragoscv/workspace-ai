---
paths:
  - "**/*.{ts,tsx}"
  - "**/actions/**"
  - "**/api/**"
  - "**/route.ts"
---

# API Design

## Choose the Right Tool
- **Server Actions** for all mutations from your own UI (forms, buttons) â€” default
- **API routes (`route.ts`)** only for webhooks, OAuth callbacks, and external/third-party integrations
- **Gateway endpoints (Hono)** for service-to-service and public APIs
- Contract-first: define the input/output types and error shape before implementing

## Server Actions
- Always `"use server"` at the top; one action = one responsibility
- **Validate every input with Zod at the top of the action** â€” never trust `FormData` or client payloads
- **Check authentication and authorization before any mutation** â€” deny by default
- Return a typed result (`{ ok: true, data } | { ok: false, error }`); don't throw for expected validation failures
- Use `updateTag`/`revalidateTag`/`revalidatePath` to refresh affected data after writes
- Keep actions thin: validate â†’ authorize â†’ call service/domain layer â†’ revalidate

## REST / Gateway Endpoints
- Resource-oriented paths, plural nouns (`/invoices`, `/invoices/:id`)
- Correct verbs (GET safe/idempotent, POST create, PUT/PATCH update, DELETE remove) and status codes (200/201/204/400/401/403/404/409/422/429/500)
- Validate input with Zod; reject unknown fields
- Version public APIs (`/v1`); never break a published contract â€” add, don't mutate
- Paginate list endpoints (keyset/cursor); document limits and defaults
- Rate-limit public and auth endpoints; return `429` with `Retry-After`

## Error Contract (consistent everywhere)
- Stable shape: `{ error: { code, message, details? } }` with machine-readable `code`
- Messages are user-safe; never leak stack traces, SQL, or internal paths
- Map domain errors â†’ HTTP status deliberately (validation â†’ 422, conflict â†’ 409, authz â†’ 403)
- Log the full error server-side with correlation id; return the safe version to the client

## Idempotency & Safety
- Mutations triggered by external systems (webhooks, payments) must be idempotent (idempotency key or natural dedupe)
- Verify webhook signatures (Stripe, ANAF, etc.) before processing
- Make retries safe; never double-charge or double-submit an invoice
