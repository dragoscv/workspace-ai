---
paths:
  - "**/*.{yml,yaml}"
  - "**/Dockerfile*"
  - "**/vercel.json"
  - "**/cloudbuild*.yaml"
  - "**/infra/**"
  - "**/deploy/**"
  - "**/.github/workflows/**"
---

# Deployment Verification Recipes (always applies to deploys)

"Deployed" is a claim about LIVE state, not about a command exiting 0. Verify with these recipes, then say VERIFIED.

## Vercel (web apps: the web app, other web apps)
- Deploys auto-trigger from `main` push (~90s'3min). Verify:
  `npx vercel ls <project> 2>&1 | Select-Object -First 6` '' newest deployment `…-… Ready` AND its age matches your push
- Or wait deterministically: `npx vercel inspect <deployment-url> --wait --timeout 5m`
- Then hit the live route: `curl.exe -s -o NUL -w "%{http_code}" https://<domain>/<changed-route>` ' check the actual changed behavior, not just 200
- Failed builds: `npx vercel inspect <url> --logs 2>&1 | Select-Object -Last 50`

## Cloud Run (gateway/auth/mgmt services, gateway/worker/mcp services, Python compute services)
- After deploy: `gcloud run services describe <svc> --region=<region> --format=json | ConvertFrom-Json` '' check `.status.latestReadyRevisionName` == `.status.latestCreatedRevisionName` and traffic is on it
- Hit `/health` on the live URL (NEVER `/healthz` ' reserved by Google Frontend, returns Google-branded 404 that never reaches the container)
- Logs for the new revision: `gcloud run services logs read <svc> --region=<region> --limit=30`
- Cloud Build: a timed-out `gcloud builds submit` may still be running/succeeded ' `gcloud builds list --limit=3` BEFORE retrying (duplicate-build trap)

## Database migrations
- After prod migrate: verify the actual schema, not the migration exit code ' query `information_schema.columns` for the new column, or run the app query that needed it
- Check the drizzle journal matches applied migrations in `__drizzle_migrations`

## General rules
- Verify the LIVE state (endpoint response, live revision, live schema), not the local diff or CI green
- A deploy is not done until the specific behavior you changed is observed working in the deployed environment
- If verification is impossible (no access, missing env), say EXPECTED not VERIFIED, and say why
- After a rollback, verify the rollback too ' same recipes
