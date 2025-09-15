---
mode: agent
---
Use "E:/GitHub/workspace-ai/.github/instructions/core.instructions.md" and "E:/GitHub/workspace-ai/.github/.github/instructions/feature-builder.instructions.md".

PROJECT=<NAME>
ISSUE=<id-or-title>
ACCEPTANCE=<bullet-list>
BUDGETS=<perf/a11y numbers>
THRESHOLD=<0.8 default>

Mission: Ship a vertical slice with strict TDD without breaking API contracts.

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

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
