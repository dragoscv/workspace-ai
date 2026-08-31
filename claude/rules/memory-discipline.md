---
paths:
  - "**"
---

# Use memory, in every phase

Memory guidance was once scattered across four rules that no agent could act
on: the `memory` tool was absent from every whitelist, so "check memory before
diagnosing" was unsatisfiable rather than ignored. All 12 agents now grant it
(enforced by `test-config-integrity.ps1`), so there is no excuse left.

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

## Learn from your OWN turns, not just from the code

This is the part that makes memory compound instead of merely accumulate.
Measured on this machine: memory is touched in 19 of 34 recent sessions and
read early in 17 of those — so recall is not the problem. What was missing is
that nothing recorded what the agent itself got right or wrong, so the same
wrong hypothesis kept being re-derived weeks apart.

**Write a note when you were WRONG.** Not the bug — *your* error:

- A hypothesis you were confident about that the data killed. Record the
  hypothesis, the evidence that refuted it, and the signal you should have
  checked first. ("Listener leaks cause the reloads" — refuted three times;
  the session with the most leaks had zero reloads.)
- A verification you skipped that would have caught it in one command.
- A wrong assumption about the environment: which file is read, which process
  is which, what a default value actually is.
- A correction the user had to make twice. That is a config gap, not a
  misunderstanding — see `capture-standing-preferences.md`.

**Write a note when something WORKED and was not obvious.** A reusable
procedure is worth more than a fact:

- The command sequence that finally isolated a problem, in order.
- The discriminating signal — the single measurement that separated two
  competing explanations.
- A fix that is easy to get subtly wrong, with the exact working form.

**Prefer the shape that helps next time**: *symptom → what I first believed →
what actually proved it → fix*. The middle term is the valuable one and it is
the one always omitted.

Before ending a non-trivial session, ask: **did I learn anything that would
have saved me time if I had known it at the start?** If yes, that is a memory
write, and it belongs in this turn, not the next one.

## Pick the right scope

- `/memories/` — **user**: preferences, cross-project patterns, machine facts.
  Loaded into context automatically, so keep entries to a line or two.
- `/memories/repo/` — **repository**: build commands, conventions, verified
  practices, gotchas for this codebase.
- `/memories/session/` — **session**: task state, plans in progress, handoff
  notes. Write one before context gets long, not after quality degrades.

Prefer updating an existing file over creating a new one. Before adding, view
the directory — duplicates make memory less useful, not more.

**Keep `/memories/000-index.md` current.** Only the first ~200 lines of user
memory load automatically; total content here is ~980 lines, so most of it is
invisible unless something points at it. When you add or retire a user memory,
update the index in the same turn — an unindexed memory is one nobody reads.

**Never write session state into `/memories/`.** Eight base64-named session
folders (104 KB of July/August plans) had accumulated in user memory, competing
for the auto-loaded window with facts that matter every day. Task state goes in
`/memories/session/`, repo facts in `/memories/repo/`.

## Keep it true

**Stale memory is worse than none**, because it is trusted. When something you
recorded turns out to be wrong, correct or delete it immediately — do not leave
both versions and let the next agent guess.

Say when a claim came from memory rather than from checking, so the reader can
tell the difference. Memory records what *was* true; a deploy may have changed
it since.
