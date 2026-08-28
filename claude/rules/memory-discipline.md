---
paths:
  - "**"
---

# Use memory, in every phase

Memory guidance was scattered across four rules and no agent could act on it:
the `memory` tool was absent from every whitelist, so "check memory before
diagnosing" was unsatisfiable, not ignored. That is fixed — now use it.

The cost of not using it is invisible and compounding. A failure mode solved in
March is rediscovered in August by an agent burning twenty minutes on a wrong
hypothesis, because nobody wrote three lines down.

## Read before you work, not after you fail

At the start of any non-trivial task, **check memory first** — it is one call
and it is often the whole answer:

- **Debugging** — before forming a hypothesis. Most failure modes here have
  recurred. Search the error signature.
- **Exploring an unfamiliar area** — someone may have mapped it already.
- **Research** — a library decision may already have been made and justified.
- **Planning** — an approach may have been tried and abandoned for a reason
  worth knowing.
- **Building** — check the repo's conventions before inventing your own.
- **Resuming** — read the session note before trusting your assumptions about
  in-flight state.

Searching and finding nothing is cheap. Not searching and re-solving is not.

## Write when you learn something durable

Write **in the same turn** you learn it. "I'll record it at the end" is how it
never gets recorded.

Worth writing:

- A non-obvious failure mode: **symptom → root cause → fix**. Include the exact
  error string — that is what the next search will match.
- A verified fact that was expensive to establish: which config file is actually
  read, which command works, which flag is required.
- A decision and its reason, so it is not silently reversed later.
- Repo conventions discovered by reading code.
- In-flight state on a long task: job IDs, what is running, the next step.

Not worth writing: anything derivable by reading the code in seconds, one-off
task detail, or restatements of an existing rule.

## Pick the right scope

- `/memories/` — **user**: preferences, cross-project patterns, machine facts.
  Loaded into context automatically, so keep entries to a line or two.
- `/memories/repo/` — **repository**: build commands, conventions, verified
  practices, gotchas for this codebase.
- `/memories/session/` — **session**: task state, plans in progress, handoff
  notes. Write one before context gets long, not after quality degrades.

Prefer updating an existing file over creating a new one. Before adding, view
the directory — duplicates make memory less useful, not more.

## Keep it true

**Stale memory is worse than none**, because it is trusted. When something you
recorded turns out to be wrong, correct or delete it immediately — do not leave
both versions and let the next agent guess.

Say when a claim came from memory rather than from checking, so the reader can
tell the difference. Memory records what *was* true; a deploy may have changed
it since.
