---
paths:
  - "**/*.md"
  - "**/docs/**"
  - "README*"
  - "CHANGELOG*"
---

# Documentation Standards

## Project Documentation
- `README.md`: project purpose, setup instructions, key commands, architecture overview
- `CHANGELOG.md`: auto-generated from conventional commits; review before release
- `.env.example`: document every environment variable with descriptions and example values
- Keep documentation next to the code it describes

## Architecture Decisions
- Use ADR (Architecture Decision Records) for significant technical decisions
- Format: title, status, context, decision, consequences
- Store in `docs/adr/` or `docs/decisions/`
- Reference ADRs in PRs that implement them

## Trackers and status docs

A status file that lies is worse than no status file — it hides work instead of
surfacing it. One repo here reached **26 competing trackers, 2566 rows**, where
the file that called itself "single source of truth" was the 23rd most recently
updated.

- **One tracker per initiative.** Before creating a new tracker or `*_MASTER.md`,
  search `docs/` for an existing one and extend it. If you supersede one, mark
  the old file archived at the top and say where its open items went.
- **Reality-check before marking anything done.** "Done" means verified in the
  code or by running it — not "I wrote the code earlier in this session".
- **Reality-check before trusting a status.** A tracker older than the last few
  dozen commits is a hypothesis. Items marked open may be finished; items marked
  done may have regressed. Verify before planning from it.
- Record the date and what evidence justified the status change.
- Update the tracker **as you go**, not in one pass at the end.

## Keep docs true after a change

When behaviour changes, the description of that behaviour changes with it, in
the same commit:

- README, setup steps and any command you renamed or removed.
- `.env.example` for every new or removed variable.
- Public/user-facing docs, API references and SDK docs if the surface changed.
- The ADR that recorded the old decision — supersede it, do not silently
  contradict it.
- Code comments that now describe something that no longer happens.

Deleting a stale paragraph is a real contribution. Do not leave documentation
that describes a version of the system that no longer exists.

## API Documentation
- OpenAPI/Swagger for REST APIs; keep spec in sync with implementation
- Document every public endpoint: method, path, parameters, request/response schemas, error codes
- Include example requests and responses

## Code Comments
- Only add comments for non-obvious logic; good code is self-documenting
- Use JSDoc/TSDoc for public APIs and exported functions
- TODO comments must include a tracking issue: `// TODO(#123): description`
- Never leave commented-out code; delete it (git has history)

## PR Documentation
- Every PR that changes user-facing behavior must update relevant docs
- Include demo evidence (screenshots, GIFs, or test output) for UI changes
- Link related issues and ADRs in PR description
