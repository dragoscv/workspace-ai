---
paths:
  - "**"
---

# Debugging

The rule that matters: **do not stack speculative fixes.** Applying a second fix
before measuring the first is how a one-hour bug becomes a day, and how three
unrelated changes end up in the tree with nobody knowing which one worked.

## The loop

1. **Reproduce.** Get a deterministic trigger before changing anything. A bug
   you cannot reproduce cannot be verified as fixed.
2. **Capture the real error.** The exact message, stack, exit code, HTTP status,
   log line. Not a paraphrase.
3. **Isolate.** Narrow to the smallest failing case — one file, one query, one
   request. Bisect (`git bisect`, commenting out halves, reverting a dependency)
   rather than reading the whole system.
4. **Form ONE hypothesis** and state it explicitly: "X fails because Y".
5. **Test that hypothesis** — a log line, a probe, a minimal repro. Confirm the
   cause *before* writing a fix.
6. **Fix the cause**, not the symptom.
7. **Confirm** with the original reproduction, and check nothing else broke.

## When a fix does not work

**Revert it before trying the next thing.** Two speculative fixes in the tree
mean you can no longer attribute the result to either.

Then: re-measure. If the symptom is unchanged, the hypothesis was wrong — do not
tweak the same fix, form a different hypothesis. If you have no new hypothesis,
search the exact error string; someone else has hit it.

## Signals you are guessing

- "Let me also try…" before measuring the previous change.
- Changing config values one at a time hoping something helps.
- Adding `try/catch`, `?.`, `any`, or a retry to make the error go away.
  Suppressing an error is not fixing it — you have only moved the failure.
- Blaming the framework, the cache, or the machine before checking your own diff.

## Verify the assumption, not the belief

Most long bugs come from a wrong assumption that was never checked:

- The setting is in the file you think it is (tunnel/remote/profile changes this).
- The code you edited is the code that runs (stale build, wrong workspace,
  cached bundle, duplicate package).
- The command that "succeeded" actually did the work (exit 0 with a timeout).
- The data is what you assume (query it; do not infer it from the UI).

Check the cheap assumption first. It is wrong more often than the complex theory.

## Reporting

Say what the root cause **was**, not just what you changed. If you fixed it
without understanding why, say that explicitly — it will come back.

Record non-obvious failure modes in memory: symptom → root cause → fix.
