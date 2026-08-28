---
paths:
  - "**/Dockerfile*"
  - "**/docker-compose*.yml"
  - "**/docker-compose*.yaml"
  - "**/.dockerignore"
---

# Containers

~41 Dockerfiles, mostly Cloud Run targets (Node/Hono services, Python FastAPI,
workers). Image size and cold start are user-visible on Cloud Run.

## Build

- **Multi-stage always**: build stage with dev deps, runtime stage with only
  what runs. A single-stage Node image ships the whole toolchain.
- Order layers by change frequency: base â†’ lockfile â†’ `install` â†’ source. Copying
  source before installing busts the dependency cache on every edit.
- `.dockerignore` is mandatory and must contain at least `node_modules`,
  `.git`, `.next`, `dist`, `.env*`, `__pycache__`, `.venv`. Without it the build
  context can be gigabytes.
- Pin base images by minor tag (`node:22-alpine`), not `latest`. Digest-pin for
  anything security-sensitive.
- pnpm: use `--frozen-lockfile`; copy `pnpm-lock.yaml` + workspace manifests
  before the install layer.

## Runtime

- **Run as non-root.** Create a user and `USER app` â€” Cloud Run does not require
  root and a root container is a needless blast radius.
- One process per container. No supervisord to run an app plus a cron.
- `EXPOSE` and bind to `0.0.0.0:$PORT` â€” Cloud Run injects `PORT` and a
  hardcoded port fails silently at deploy.
- Handle `SIGTERM`: Cloud Run sends it before shutdown. An app that ignores it
  drops in-flight requests.
- Health endpoint is `/health`. **Never `/healthz`** â€” that path is reserved by
  Google Frontend and returns a Google 404 that never reaches the container.

## Secrets

- Never `ENV SECRET=...` and never `COPY .env`. Both persist in image layers and
  survive deletion in a later layer.
- Inject at runtime via Secret Manager / Cloud Run env.
- Build args are visible in image history â€” not a secret channel.

## Size & speed

- Alpine or distroless for runtime where the toolchain allows; check native deps
  (`better-sqlite3`, `psycopg`) actually build against musl before choosing.
- Prune dev dependencies in the runtime stage.
- State the image size after a change; a service that doubled in size will cold
  start slower.

## Verify

- After building, **run the image locally** and hit its health endpoint before
  pushing. A build that succeeds can still fail to start.
- A timed-out `gcloud builds submit` may still have succeeded â€” `gcloud builds
  list` before retrying, or you get duplicate builds.
