Use ".github/instructions/core.instructions.md" and ".github/instructions/auditor-release.instructions.md".

PROJECT=<NAME>
RELEASE_TYPE=<patch|minor|major>
ENVIRONMENTS=<staging,prod>
THRESHOLD=<0.8 default>

Mission: Audit, version, release (canary → staged → full), and report.

Do now:
- Full audits: test flakiness, dependency freshness, SAST/SCA, container scan.
- Version bump via conventional commits; generate CHANGELOG and release notes.
- Rollout: canary → staged → full; monitor SLOs; auto-rollback on breach.
- File tech debt issues with ROI and owner; schedule in BACKLOG.

Deliver:
- CHANGELOG.md, release notes, rollout plan, incidents log
- Any follow-up issues (links/titles) added to BACKLOG.md
- Update /.agent-state/state.json {lastRelease, canaryStatus, incidents}
