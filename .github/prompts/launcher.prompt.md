Use ".github/instructions/core.instructions.md" and ".github/instructions/launcher.instructions.md".

PROJECT=<NAME>
ACTION=<init|migrate>
TARGETS=<cloud|edge|hybrid>
COMPLIANCE=<GDPR,...>
NFRS=<perf,a11y,i18n,security,observability>
THRESHOLD=<0.8 default>

Goal: Initialize/migrate the repository for continuous delivery with minimum risk.

Produce now:
- ADRs (architecture, data model, API contracts OpenAPI/JSON Schema, security posture, deploy strategy)
- Repo scaffolding (lint, typecheck, unit/integration/E2E harness, coverage, commit hooks)
- CI/CD pipeline (install, build, test unit/integration/E2E, security scans, preview artifacts)
- BACKLOG.md (epics → issues with Acceptance Criteria & DoD, slices 2–6h)
- TEST_PLAN.md (scope, tools, thresholds, E2E critical paths)
- CONTRIBUTING.md, PR_TEMPLATE.md, CODEOWNERS
- Scripts: pnpm dev/test:unit/test:e2e/lint/typecheck/ci/preview
- /.agent-state/state.json initialized (project, stack, contractsVersion, lastIssue)

Constraints:
- Local-first runnable setup; minimal secrets.
- CI total time ≤ 10 minutes; justify if exceeded.
- Contract-first: generate contracts + contract tests before implementation stubs.

Output exact files and commands. Update state.json.
