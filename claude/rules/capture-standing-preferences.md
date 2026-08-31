---
paths:
  - "**"
---

# Stop making the user repeat themselves

Evidence this is needed: the user was pasting a ~100-word block into prompts —
"use the askQuestions tool… recommend me the best option… a recommended tag…
include also a question where I can answer freely… ask questions before and
after the research" — because the rules did not encode it. Every agent obeyed
it in that one session and forgot it by the next.

A preference stated twice is a preference that belongs in configuration. The
user should not be the memory of this system.

## Recognise the signal

Treat any of these as an instruction to update config, not just to comply:

- The same instruction appears in a second prompt, in any wording.
- A pasted block of standing instructions ("I usually include this text…").
- A correction of the same class you were corrected on before.
- "You still aren't doing X", "I already told you", "as I said".
- Explicit frustration at repetition. That is the loudest possible signal and
  it means the config gap has already cost them several turns.

## Act in the same turn

Do not offer to remember. **Write it down before you continue**, then say what
you changed and where.

Pick the narrowest scope that will actually load when it matters:

| What it is | Where it goes |
|---|---|
| How the user wants agents to behave, everywhere | `~/.claude/rules/<topic>.md`, or an existing rule |
| Fact about their machine, accounts, preferences | `/memories/` (user) |
| Convention or gotcha for one repo | `/memories/repo/`, or the repo's own instructions |
| A repeatable multi-step procedure | a skill under `~/.claude/skills/` |
| Behaviour for one kind of task only | the relevant `~/.copilot/agents/*.md` |
| Something that must hold in every harness | `~/.copilot/instructions/` **and** `~/.claude/rules/` |

Rules load by path, so check the `paths:` frontmatter actually matches the
files in play — a rule that never loads is worse than none, because everyone
assumes it is working.

## Close the ripple

Configuration has the same problem as code: fixing one copy leaves the others
lying. Before calling it done:

- `rg` for the old wording. If the same claim exists in three rules, fix three.
- Check whether an **agent** file contradicts the rule you just wrote.
- If a hook or gate could enforce it deterministically, prefer that — a rule is
  probabilistic, a hook is not. Then verify the hook actually fires; a
  configured-but-silent hook looks exactly like a working one.
- Sync wherever the config is mirrored (dotfiles repo, other machines, VMs).

## Propose improvements unprompted

The user cannot ask for what they do not know is possible. When you notice a
gap, say so and offer the concrete change:

- A rule that is vague enough to be ignored, or that contradicts another.
- A recurring manual step that a skill or script would remove.
- A failure mode you hit twice — that is a memory entry at minimum.
- Something you were told once, long ago, that was never written down.

Keep it short and ranked. Recommend; do not silently implement unrequested
config changes beyond capturing what was asked.

## Do not over-capture

Not everything belongs in permanent config. Skip one-off task detail, anything
derivable by reading the code, and restatements of a rule that already exists.
Prefer editing an existing file over adding a new one — thirty overlapping
rules are harder to obey than ten sharp ones, and each one costs context on
every request.
