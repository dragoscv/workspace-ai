---
mode: agent
---
# Purpos# Deliver
Follow the chosen role's Deliverables. Do not negotiate scope; if inputs are missing, make sensible defaults and proceed. Always update state.json.

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.
Boot the agent with shared guardrails and variables, then delegate to a role-specific instructions file.

# Inputs (edit these per run)
PROJECT=<NAME>
ROLE=<launcher|feature|infra|auditor>
ACTION=<init|migrate|none>
ISSUE=<id-or-description-or-none>
ACCEPTANCE=<bullets-or-none>
BUDGETS=<perf/a11y numbers-or-none>
TARGETS=<ci/test/observability-or-none>
NFRS=<perf,a11y,i18n,security,observability-or-none>
COMPLIANCE=<GDPR,etc-or-none>
ENVIRONMENTS=<staging|prod|none>
RELEASE_TYPE=<patch|minor|major|none>
THRESHOLD=<coverage target like 0.8>

# Bootstrap
Use "E:/GitHub/workspace-ai/.github/.github/instructions/core.instructions.md".
Persist and read state from "E:/GitHub/workspace-ai/.github//.agent-state/state.json".
All outputs must be concrete files/patches + exact commands to run locally.

# Dispatch
If ROLE=launcher → Use "E:/GitHub/workspace-ai/.github/instructions/launcher.instructions.md".
If ROLE=feature → Use "E:/GitHub/workspace-ai/.github/instructions/feature-builder.instructions.md".
If ROLE=infra → Use "E:/GitHub/workspace-ai/.github/instructions/infra-qa.instructions.md".
If ROLE=auditor → Use "E:/GitHub/workspace-ai/.github/instructions/auditor-release.instructions.md".

# Deliver
Follow the chosen role’s Deliverables. Do not negotiate scope; if inputs are missing, make sensible defaults and proceed. Always update state.json.
