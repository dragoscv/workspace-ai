---
paths:
  - "**/.github/workflows/**"
  - "**/action.yml"
  - "**/action.yaml"
  - "**/turbo.json"
---

# CI/CD Pipelines

~45 workflows across the repos (ci, codeql, e2e-nightly, lighthouse-prod,
backup-verification, chromatic, dr-drillâ€¦). CI is production infrastructure:
treat a broken or lying pipeline as an incident.

## Correctness

- CI must run the **same commands** as local: `pnpm lint`, `pnpm typecheck`,
  `pnpm test`, `pnpm build`. If CI needs a special flag to pass, the flag
  belongs in the script, not the workflow.
- `pnpm install --frozen-lockfile`. A CI run that mutates the lockfile is a bug.
- Pin actions to a **tag or SHA** (`actions/checkout@v5`), never `@main`.
- Concurrency guard on every PR workflow so pushes cancel stale runs:
  ```yaml
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
  ```

## Speed (target: under 10 minutes)

- Cache the pnpm store and the Turborepo cache; a cold `pnpm install` on these
  monorepos dominates runtime.
- Use `turbo run --filter=...[origin/main]` so a one-line change doesn't build
  the world.
- Shard long E2E suites; run the full matrix nightly, a smoke subset on PRs
  (that is what `e2e-pr-smoke` vs `e2e-nightly` already do â€” keep the split).
- Don't run the same job on both `push` and `pull_request` for the same commit.

## Secrets & permissions

- Least privilege: set `permissions:` explicitly per workflow, default to
  `contents: read`.
- Secrets via `secrets.*` only â€” never echoed, never in a step name, never in
  an artifact. Remember logs are public on public repos.
- `pull_request_target` runs with write scope against untrusted code â€” avoid it
  unless there is no alternative, and never check out the PR head in it.
- Prefer OIDC federation over long-lived cloud keys.

## Flaky tests

- A retried-until-green test is not passing. Quarantine it, open an issue, fix
  the race â€” don't add `retries: 3` and move on.
- Distinguish flake from real failure by re-running the **same** commit before
  blaming the test.

## Deploy jobs

- Deploy only from `main`, gated on the full check suite.
- After deploying, the job must **verify the live state** (hit `/health`, read
  the live revision) â€” a green deploy step is not proof (see
  deployment-verification).
- Every deploy job needs a documented rollback path.

## Required checks

- Branch protection lists the checks that actually matter. A required check
  that is `continue-on-error: true` is theatre â€” remove one or the other.
