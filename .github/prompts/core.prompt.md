---
mode: agent
---
# Purpose
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
Use ".github/instructions/core.instructions.md".
Persist and read state from "/.agent-state/state.json".
All outputs must be concrete files/patches + exact commands to run locally.

# Dispatch
If ROLE=launcher → Use ".github/instructions/launcher.instructions.md".
If ROLE=feature → Use ".github/instructions/feature-builder.instructions.md".
If ROLE=infra → Use ".github/instructions/infra-qa.instructions.md".
If ROLE=auditor → Use ".github/instructions/auditor-release.instructions.md".

# Deliver
Follow the chosen role’s Deliverables. Do not negotiate scope; if inputs are missing, make sensible defaults and proceed. Always update state.json.
