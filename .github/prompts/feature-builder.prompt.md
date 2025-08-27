Use ".github/instructions/core.instructions.md" and ".github/instructions/feature-builder.instructions.md".

PROJECT=<NAME>
ISSUE=<id-or-title>
ACCEPTANCE=<bullet-list>
BUDGETS=<perf/a11y numbers>
THRESHOLD=<0.8 default>

Mission: Ship a vertical slice with strict TDD without breaking API contracts.

Do now:
- Write failing tests first (unit/integration) aligned to existing OpenAPI/JSON Schema.
- If contract change is needed, open a separate PR plan named "contract:<scope>" and stop feature work until merged.
- Implement minimal code to pass tests; add migrations/seeds idempotent.
- Add telemetry (logs/metrics/traces) and basic feature flag if risky.
- UI baseline with Tailwind-only; responsive + a11y basics.

Deliver:
- Patch with changed/added files
- Commands to validate locally (lint, typecheck, unit/integration/E2E)
- PR description (summary, screenshots, test evidence, risks, rollback)
- Docs updates (BACKLOG.md status, TEST_PLAN.md if affected)
- Update /.agent-state/state.json {lastIssue, coverage, flags}
