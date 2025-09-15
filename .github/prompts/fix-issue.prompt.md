---
mode: agent
---
Use "E:/GitHub/workspace-ai/.github/instructions/senior-developer-agent.instructions.md" and "E:/GitHub/workspace-ai/.github/.github/instructions/qa-engineer-agent.instructions.md".

PROJECT=<NAME>
ISSUE=<issue-id-or-description>
SEVERITY=<critical|high|medium|low>
COMPONENT=<affected-component>

Mission: Investigate, test, and implement bug fixes following TDD principles with root cause analysis.

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

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
