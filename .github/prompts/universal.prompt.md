# One prompt to rule them all
Use ".github/instructions/core.instructions.md" and the appropriate role instructions based on ROLE.

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

Always:
- Output exact files and local commands.
- Update "/.agent-state/state.json".
- If an input is missing, choose safe defaults, state them explicitly, and proceed.
