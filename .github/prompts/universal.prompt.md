---
mode: agent
---
# One prompt to rule them all
Use "E:/GitHub/workspace-ai/.github/instructions/core.instructions.md" and the appropriate role instructions based on ROLE.

PROJECT=<NAME>
ROLE=<launcher|feature|infra|auditor>
ACTION=<init|migrate|none>
ISSUE=<id-or-none>
ACCEPTANCE=<bullets-or-none>
BUDGETS=<numbers-or-none>
TARGETS=<stack-or-none>
NFRS=<perf,a11y,i18n,security,observability-or-none>
COMPLIANCE=<GDPR,etc-or-none>
ENVIRONMENTS=<staging|prod|none>
RELEASE_TYPE=<patch|minor|major|none>
THRESHOLD=<0.8 default>

Behavior:
- If ROLE=launcher → deliver all initialization artifacts and CI within 10 minutes budget.
- If ROLE=feature → strict TDD, contract-first, ship a vertical slice and open PR.
- If ROLE=infra → optimize CI/E2E/security, deliver configs and docs.
- If ROLE=auditor → run audits, version, release with canary, and report.

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

Always:
- Output exact files and local commands.
- Update "/.agent-state/state.json".
- If an input is missing, choose safe defaults, state them explicitly, and proceed.