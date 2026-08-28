---
paths:
  - "**"
---

# Agent Behavior & Workflow

## Before Starting Work
- Read existing code before suggesting modifications; never edit blind
- Understand the project structure and conventions before making changes
- Check for existing patterns in the codebase; follow them consistently
- Verify assumptions by reading relevant files, not guessing
- Check memory (user/repo gotcha files) before diagnosing an error that looks familiar �?" most failure modes here have recurred at least once
- Use Next.js DevTools MCP when available for route context and unified logs

## During Work
- Break complex tasks into small, verifiable steps
- Make one change at a time; verify it works before moving on
- Prefer editing existing files over creating new ones
- Keep changes minimal and focused on the request; don't add unrequested features
- Don't add comments, docstrings, or type annotations to code you didn't change
- Don't add error handling or validation for scenarios that can't happen
- Run tests after making changes to verify nothing is broken
- If blocked, try alternative approaches rather than brute-forcing

## Don't stop for permission you already have

Measured over 7 days: 101 of 209 user prompts (48%) were just "Continue", "yes"
or "go". That is a turn wasted on latency, tokens and context reload every
time. The cause is agents ending with questions like "Want me to finish it, or
move to the next item?" when the next step was obvious.

- If the next step is implied by the request or by a list already agreed, DO IT.
  Do not stop to ask "shall I continue?", "want me to do X next?", or "which
  one first?" when the order does not matter.
- Finish the whole requested scope before reporting. A list of 5 items means 5
  items, not 1 item plus an offer.
- **Do** stop and ask when: the action is destructive or irreversible; it costs
  real money; requirements are genuinely ambiguous; or there are multiple valid
  approaches with different trade-offs. Use a concise multiple-choice question
  with a recommendation.
- End a turn with a statement of what was done and what remains - not with a
  request for permission to keep going.
- Report blockers as facts, not as questions: "T-026 needs a migration that
  doesn't exist; I did the other four" beats "want me to do the rest?".

## Listen to corrections the first time

When the user restates a request, they are correcting course - re-read the new
wording literally instead of continuing the previous plan. Observed failure: the
same request was rephrased three times, each more explicit, while the agent kept
working on the wrong target.

- A rephrased request means the previous interpretation was wrong. Stop, state
  the new understanding in one line, then act on it.
- Pay attention to negations ("I don't want X, just Y") - the negated part is
  usually what the agent was doing.

## Finish the ripple, not just the file

A feature is not done when the file you edited compiles. Before reporting,
check what else touches what you changed:

- Callers of a changed signature, and the types that flow from it.
- The other surfaces of the same feature: list ? detail ? form ? export ? PDF ?
  email ? API ? mobile.
- Translations for **every** locale in the project, not just the one you added.
- Tests, seed/demo data, and the docs or tracker that describe the old behaviour.
- Permissions, audit logging and cache invalidation on any new mutation.

If a ripple is genuinely out of scope, say so explicitly instead of leaving it
silently broken.

## Recommend what wasn't asked for

The user cannot ask for what they don't know exists. When you finish, add a
short list of what you would do next and why - a missing state, a library that
removes hand-rolled code, an obvious follow-up feature, a risk that will bite
later.

Keep it to a few high-value items, ranked, each one line. Recommend - do not
implement unrequested work.

## Verification & Evidence (empirical proof, always)
- Never claim something works, is fixed, or is deployed without running the verifying command and showing its output
- "Done" requires evidence: test output, curl/HTTP response, log line, file content, or screenshot �?" not inference
- After a deploy/config change, verify the LIVE state (hit the endpoint, read the live revision), not just the local diff
- When a command's success is ambiguous (timeout, partial output, tool error with exit code 0), verify the actual resulting state before retrying �?" retries can duplicate resources
- Distinguish clearly: VERIFIED (ran it, saw it) vs EXPECTED (reasoned it) �?" say which one it is

## Memory Discipline
- When a non-obvious failure mode is solved, append the signature + fix to the relevant memory/gotchas file in the same turn �?" don't defer
- Update or delete memory entries proven wrong; stale memory is worse than none
- Keep entries terse: symptom �?' root cause �?' fix, one entry per failure mode

## Code Generation
- Generate production-ready code, not pseudocode or placeholders
- Include only necessary imports and dependencies
- Follow the project's existing code style and patterns
- Use the project's existing utilities and helpers; don't reinvent them
- Use `proxy.ts` (not middleware.ts) for route interception in Next.js 16 projects
- Use `"use cache"` directive for cacheable components/pages; default is dynamic
- Use `useActionState` for simple forms; react-hook-form only for complex forms

## Communication
- Be concise and direct; match response depth to task complexity
- Explain reasoning for significant decisions
- When uncertain, state assumptions and proceed with the most reasonable approach
- After completing file operations, confirm briefly; don't over-explain
- Never fabricate information; say you don't know when you don't

## Problem Solving
1. Understand the problem completely (read code, check errors, gather context)
2. Identify the root cause, not just symptoms
3. Plan the minimal fix or implementation
4. Implement and verify with tests
5. Review for unintended side effects
