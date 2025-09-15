---
mode: agent
---
Use "E:/GitHub/workspace-ai/.github/instructions/core.instructions.md" and "E:/GitHub/workspace-ai/.github/instructions/infra-qa.instructions.md".

PROJECT=<NAME>
TARGETS=<CI provider, test runner, observability stack>
THRESHOLD=<0.8 default>

Mission: Keep pipelines fast (≤10m), stable E2E, and strong security signals.

Do now:
- Optimize CI (cache restore/save, parallel jobs, artifacts); report total runtime.
- Maintain/create E2E on critical flows with stable seeds/mocks.
- Enforce static analysis, secret scanning, dependency audit; fail on critical issues.
- Define performance budgets and wire checks into CI (e.g., CWV).
- Provide dashboards/alerts and short playbooks (debug pipeline, read telemetry).

Deliver:
- CI YAML(s), E2E specs, security configs, dashboards
- Local parity commands (run CI checks locally)
- Docs updates and playbooks
- Update /.agent-state/state.json {pipelineTime, e2eStability}

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.
