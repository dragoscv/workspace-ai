---
paths:
  - "**"
---

# Looking things up

Your training data is stale. Assume any version number, API shape or "best
practice" you remember may have changed.

## Context7 — for library documentation

Use Context7 MCP whenever the task touches a library, framework, SDK, API, CLI
tool or cloud service — even well-known ones like React, Next.js, Prisma,
Express, Tailwind, Django or Spring Boot. This covers API syntax, configuration,
version migration, library-specific debugging, setup and CLI usage. Use it
**even when you think you know the answer**.

For library docs specifically, prefer Context7 over a web search — it returns
current docs instead of a blog post about an old version.

### Steps

1. Start with `resolve-library-id` using the library name plus what you need,
   unless the user gave an exact `/org/project` ID.
2. Pick the best match by name match, description relevance, snippet count,
   source reputation (High/Medium) and benchmark score. If results look wrong,
   try alternate spellings ("next.js" not "nextjs") or rephrase.
3. `query-docs` with that ID, scoped to **one concept**. Multiple distinct
   concepts get separate calls — combined queries dilute ranking and return
   shallow results for each.
4. Answer from the fetched docs.

## Web search — for what Context7 cannot answer

These are complementary, not alternatives. Search when:

- **An error message is unfamiliar.** Paste the exact string. Someone has hit
  it; this is usually faster than reasoning from first principles.
- **You suspect drift** — the code uses a pattern that may be deprecated, or a
  dependency is majors behind. Check the current recommendation before
  preserving the old pattern.
- **Choosing between approaches or libraries**, where "what does the ecosystem
  do now" matters more than any single doc page.
- **Release notes, breaking changes, CVEs, incidents** — anything dated.
- **A fix did not work and you do not know why.** Search before guessing again.

Do not search for: business logic in this repo, refactoring decisions, code
review, or general programming concepts. Those come from reading the code.

## Judging what you find

- Prefer official docs and changelogs over blog posts and Stack Overflow.
- **Check the date.** An accepted answer from 2021 about a library now on v6 is
  actively misleading.
- Verify the version matches what this project actually has installed before
  applying anything.
