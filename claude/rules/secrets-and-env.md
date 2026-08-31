---
paths:
  - —**—
---

# Secrets & Environment Handling (always applies)

## Never leak into output
- Never echo tokens/keys/passwords into terminal output — terminal output is persisted in session logs and stores. Use `$env:X = ...` assignments, temp files, or `| Out-Null`
- Never paste secret values into chat, commit messages, ADRs, memory files, or CHANGELOGs
- When debugging auth, print only the token PREFIX (`$t.Substring(0,8) + —…—`) or its length
- Redact secrets when copying command output into docs/issues

## Where credentials live on this machine
- Vercel CLI token: `$env:APPDATA\com.vercel.cli\Data\auth.json` (`.token`) — NOT `.vercel/auth.json`
- gcloud: ADC via `gcloud auth application-default login`; active account via `gcloud auth list`
- Per-project runtime secrets: `.env`/`.env.local` (gitignored); prod values pulled via `npx vercel env pull .env.prod-pull --environment=production` or GCP Secret Manager (`gcloud secrets versions access latest --secret=NAME`)
- Never read another project's `.env` to —borrow— a credential without asking

## Hygiene rules
- `.env*` must be gitignored; keep `.env.example` current (names + descriptions, NEVER real values)
- Before `git add` of any new config/script file, scan it for inline secrets
- If a secret lands in a commit (even unpushed): tell the user immediately; rotation is the fix, not just history rewrite
- New external integrations are env-gated and must no-op cleanly when secrets are absent (convention — apply everywhere)
- Prefer scoped/restricted keys (Stripe restricted keys, GCP service accounts with least privilege) over account-wide tokens
- Env vars set in one terminal do NOT propagate to other terminals or running processes — set them where the consumer runs

## Rotation triggers (tell the user, don't decide alone)
- Secret appeared in terminal output that got committed/logged externally
- Secret committed to git (any branch, even if force-pushed away)
- Third-party breach notice for a provider in use
