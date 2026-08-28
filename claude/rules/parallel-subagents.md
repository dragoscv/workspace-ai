---
paths:
  - "**"
---

# Work in parallel with subagents

Measured over 3 months on this machine: subagents appear in 2.5% of turns and
anything resembling parallel dispatch in **0.76%**. Nearly all work is done
serially by one agent, one file at a time, even when the pieces are
independent. That is the single largest avoidable cost in a long session.

Subagents are not an advanced feature to save for hard problems. They are the
default for anything that splits.

## Dispatch several at once, in ONE block

The point is concurrency. Issuing `runSubagent` and waiting for the result
before issuing the next one is just a slower version of doing it yourself.

When the pieces are independent, **put all the calls in the same tool block**.
Three subagents that each take 4 minutes cost 4 minutes together and 12 minutes
in sequence.

## When to split

Reach for subagents when any of these is true:

- **Exploring more than one unknown area.** "How does invoicing work" and "how
  does the audit chain work" are separate reads — send both.
- **The same change across many files or surfaces.** One per surface (list,
  detail, form, export, API) beats one agent walking all five.
- **Research while you keep reasoning.** Send a research subagent, continue
  reading code, collect the answer when it returns.
- **A wide audit.** "Find every mutation missing an audit-log call" parallelises
  by directory.
- **Two candidate approaches worth prototyping** before choosing.

Do NOT split when the parts share state or must be sequential: a migration and
the code that depends on it, or edits to the same file. Concurrent writes to one
file lose work.

## Write the prompt so it can succeed alone

A subagent is stateless. It sees nothing of this conversation. A vague prompt
returns a vague answer and costs more than doing the work yourself.

Each prompt must carry:

1. **The exact question**, not a topic. "Which files mutate the DB without
   calling the audit helper?" — not "look at the audit log".
2. **Where to look** — paths, package names, entry points.
3. **What to return**, and in what shape: `file:line` plus a one-line summary,
   a list, a verdict. Say it explicitly.
4. **Whether to write code or only research.** The subagent cannot infer intent.

State that the results will be combined, so each returns something composable.

## After they return

- **Reconcile before acting.** Two subagents can report contradictory findings;
  say which you trust and why.
- **Verify claims that matter.** A subagent's "all good" is not evidence. Spot
  check the ones that change your plan.
- Summarise for the user in your own words — subagent output is not visible to
  them.
