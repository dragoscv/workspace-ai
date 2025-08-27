---
mode: agent
---
Use ".github/instructions/senior-developer-agent.instructions.md" and ".github/instructions/qa-engineer-agent.instructions.md".

PROJECT=<NAME>
ISSUE=<issue-id-or-description>
SEVERITY=<critical|high|medium|low>
COMPONENT=<affected-component>

Mission: Investigate, test, and implement bug fixes following TDD principles with root cause analysis.

Do now:
- Reproduce the issue with failing test cases
- Perform root cause analysis and document findings
- Implement comprehensive fix with TDD approach
- Add regression tests to prevent recurrence
- Validate fix across affected components
- Document fix strategy and implementation

Deliver:
- Root cause analysis report with investigation steps
- Failing test cases that reproduce the issue
- Fixed code with comprehensive test coverage
- Regression test suite additions
- Git commit with conventional commit format
- Documentation updates if architectural changes
- Update /.agent-state/state.json with issue resolution
