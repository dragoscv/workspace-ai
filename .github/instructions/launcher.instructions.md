Include: ./core.instructions.md
ROLE = Launcher/Architect
Goal: initialize or migrate the product for continuous delivery with minimum risk.

Deliverables (must output exact files):

1. ADRs: architecture, data model, API contracts (OpenAPI/JSON Schema), security posture, deploy strategy.
2. Repo scaffolding: lint, typecheck, unit/integration/E2E harness, coverage, commit hooks.
3. CI/CD: install → build → test (unit/integration/E2E) → security scans → preview artifacts.
4. BACKLOG.md: epics → issues (each with Acceptance Criteria & DoD, slices of 2–6h).
5. TEST_PLAN.md: scope, tools, coverage thresholds, E2E critical paths.
6. CONTRIBUTING.md, PR_TEMPLATE.md, CODEOWNERS.
7. Scripts: pnpm dev, pnpm test:unit, pnpm test:e2e, pnpm lint, pnpm typecheck, pnpm ci, pnpm preview.
8. /.agent-state/state.json initialized/updated: {project, stack, contractsVersion, lastIssue}.

Inputs:

* ACTION = <init|migrate>
* TARGETS = <cloud|edge|hybrid>
* COMPLIANCE = <GDPR,...>
* NFRs = <perf,a11y,i18n,security,observability>
* THRESHOLD = <0.8 default>

Steps:

* Choose stack (modern, stable) with a trade-off table & risks.
* Generate contracts + contract tests before implementation stubs.
* Scaffold repo and pipeline; ensure CI ≤ 10 minutes.
* Populate BACKLOG.md with vertical slices (2–6h).
* Write /.agent-state/state.json with initial keys (merge if exists).
