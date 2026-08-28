---
paths:
  - "**/*.{ts,tsx,js,jsx}"
---

# Error Handling

## Philosophy
- **Fail fast at boundaries, trust internal code.** Validate external input (user, network, env, third-party) at the edge; don't re-validate trusted internal calls
- Distinguish **expected** outcomes (validation failure, not found, conflict) from **unexpected** errors (bugs, outages). Model the first as values, the second as thrown errors
- Never swallow errors silently. If you catch, you either handle, rethrow, or log with context

## Result Pattern (expected failures)
- Server actions and domain functions return a typed result: `{ ok: true, data } | { ok: false, error: { code, message } }`
- Don't throw for validation/business-rule failures the caller is expected to handle
- Reserve exceptions for truly exceptional/unrecoverable situations

## Throwing & Catching
- Throw `Error` (or typed subclasses), never strings or plain objects
- Add context when rethrowing (`cause`), don't lose the original stack
- Catch narrowly; never `catch {}` that hides failures
- No control flow via exceptions for normal paths

## React / Next.js
- Use **error boundaries** (`error.tsx`) per route segment for render-time crashes; provide a recovery action
- `not-found.tsx` for 404s; `global-error.tsx` as last resort
- Server Action errors â†’ return typed error â†’ surface via `useActionState` and a **sonner toast**; never leave the user with a dead button
- Streamed/Suspense errors get their own boundary so one widget failing doesn't blank the page

## User-Facing Messages
- Messages are actionable and human ("Couldn't save the invoice â€” check the CUI and try again"), localized (see i18n-romanian)
- Never expose stack traces, SQL, internal IDs, or secrets to users
- Log the technical detail server-side with a correlation id; show the safe message client-side

## External Calls
- Wrap third-party/network calls with timeouts and bounded retries (exponential backoff + jitter) for idempotent ops only
- Use circuit-breaker / fallback for critical dependencies (LLM providers: fail over, degrade gracefully)
- Validate third-party responses; don't assume schema stability
