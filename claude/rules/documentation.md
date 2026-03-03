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
