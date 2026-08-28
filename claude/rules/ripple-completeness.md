---
paths:
  - "**"
---

# Finish the whole change, not just the file

Measured over 3 months in one monorepo (1711 commits): of **309 commits that
added a new endpoint or Server Action**, the change reached the TypeScript SDK
in 6.1%, the MCP server in 3.6%, the PHP SDK in 2.9% and the CLI in 2.3%.
Documentation did better (64–86%), so this is not laziness — it is that docs
are visible and the other surfaces are not.

The result is a codebase where a feature exists in the app and is invisible to
every other consumer. Nobody notices until an integrator asks why the endpoint
is missing from the SDK.

## Before calling a feature done, walk the dependents

A change is finished when everything that *derives from it* has moved too. Ask
which of these consume what you just changed:

**Code surfaces**
- Public API / gateway routes — is the new capability reachable?
- SDKs — every language you ship (TS, PHP, Python). A method missing from one
  SDK is a broken promise, not a gap.
- CLI — commands and flags that mirror the API.
- MCP server — tool definitions, so agents can use the feature.
- Webhooks / events — new state usually means a new event.
- Background jobs, schedulers, workers that act on the same data.

**Data & contracts**
- DB schema → migration (never one without the other).
- Zod schemas / shared types / `protocol` packages.
- OpenAPI or generated clients.
- Seed and demo data, so the feature is visible locally.

**User-facing**
- Every surface of the same feature: list → detail → form → export → PDF →
  email → mobile.
- **All locales**, not just the one you added.
- Permissions/roles, audit logging, cache invalidation on any new mutation.

**Documentation**
- In-repo docs, README, CHANGELOG.
- The public docs site or marketing pages, if the feature is user-visible.
- The tracker or ADR that describes the old behaviour.

## How to actually check

Do not do this from memory — that is exactly how it has been failing.

1. `vscode_listCodeUsages` on the symbol or type you changed. Callers are the
   ripple.
2. `rg` for the sibling pattern: if you added `POST /invoices/:id/void`, search
   the SDK/CLI/MCP for how `/invoices/:id/issue` is wired and mirror it.
3. For a wide surface, **dispatch subagents in parallel** — one per surface.
   This is the common case for the parallel-subagents rule.

## Reporting

State explicitly which adjacent surfaces you updated, and which you
deliberately did not, with the reason. "Not needed — this action is internal
and not exposed publicly" is a fine answer. Silence is not: it reads as done
when it is not.

If a ripple is genuinely out of scope, say so and list it as follow-up work
rather than leaving it silently broken.
