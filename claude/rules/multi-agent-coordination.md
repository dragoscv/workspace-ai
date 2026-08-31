---
paths:
  - "**"
---

# Multi-Agent Coordination (always applies)

Multiple agents routinely work in the SAME clone at the same time (large monorepos). The working tree and git index are shared mutable state �?" treat them as contested.

## Git in a shared clone
- **Never `git add -A`, `git add .`, or `git commit -a`** �?" stage only explicit paths you changed. Other agents' uncommitted work is in the working tree and `-A` sweeps it into your commit
- The rule above is about not *causing* it. If foreign files are **already** staged when you look, that is a different situation: **keep them and commit anyway** — do not `git reset <path>`. Unstaging races another agent that may be mid-`git add`, and a commit is recoverable while a lost stage is not. Before committing, run `git diff --cached --name-only` so you KNOW what is going in, and name any foreign files in your report so the other agent can see where their work landed
- A commit mutex may exist (e.g. `.git/commit.lock` via pre-commit hook). If blocked with "another commit is in progress": wait 30�?"60s and retry. Only delete the lock if the holder PID is dead
- Never bare `git stash`, `git checkout <branch>`, `git rebase`, `git reset --hard`, or `git clean` while other agents are active — these mutate the shared working tree and destroy their in-progress work. If a branch switch is unavoidable, ask the user first
- `git stash push -- <path>` (path-scoped) IS allowed and is the safe way to set your own changes aside: it touches only that file and keeps the content recoverable via `git stash list`. Bare `git stash` is banned precisely because it sweeps the entire tree, other agents included
- Never amend or force-push a commit you didn't just make �?" it may be another agent's
- After committing, re-run `git status` �?" leftover changes may belong to another agent; leave them alone

## Working tree & files
- Don't edit a file that a running build/test task in another terminal is actively using if avoidable; expect transient compile errors from other agents' half-written edits �?" re-check before "fixing" them
- Don't revert or "clean up" unfamiliar changes in files you didn't touch �?" they're probably another agent's work in progress. If something looks broken, check `git log`/blame before restoring
- Version bumps and CHANGELOG: expect merge contention; re-read the file immediately before editing (another agent may have bumped it since you last looked)

## Processes & resources
- `pnpm install` rewrites `node_modules` under every other session in the clone, breaking builds already in flight. Run it only when the lockfile actually changed, and say so in your report. If a build lock is held (`run-build.ps1 -Status`), wait for it to clear first

## Builds are serialised — one per repo

Measured on this machine: 231 pairs of sessions were active in the monorepo within
5 minutes of each other (97 and 93 in two other repos). Two `turbo`/`tsc` runs in one clone
share `.next`, `.turbo` and `*.tsbuildinfo`, so a concurrent run corrupts
incremental state and produces phantom errors the other agent then tries to
"fix".

Run builds through the wrapper — a `PreToolUse` hook enforces this, so a bare
`pnpm build` is refused:

```powershell
pwsh -NoProfile -File "$env:USERPROFILE\.copilot\hooks\run-build.ps1" -Command 'pnpm build'
pwsh -NoProfile -File "$env:USERPROFILE\.copilot\hooks\run-build.ps1" -Status        # who holds the lock
pwsh -NoProfile -File "$env:USERPROFILE\.copilot\hooks\run-build.ps1" -Command 'pnpm build' -Wait
```

- Output always goes to `.copilot-tmp/build-logs/<timestamp>-<cmd>.log`, with
  the exit code appended. **Read the newest log before starting a build** — if
  another session just built the same tree, you already have the answer.
- Exit 3 means someone else is mid-build. Read their log or pass `-Wait`; do
  not work around the lock.
- A crashed build leaves a lock file behind; the wrapper reclaims it
  automatically by checking the PID. Never delete `build.lock` by hand.

## Never overwrite a file wholesale

A `PreToolUse` hook refuses a whole-file write when another live session
touched that file in the last 15 minutes — this is the upstream cause of the
CHANGELOG incident. Targeted edits (`apply_patch`, `replace_string`) are always
allowed, and are what you should use anyway: a stale anchor fails loudly
instead of silently discarding someone's work.

## When another agent's work blocks you

You share the tree on purpose. Being blocked is normal — handle it, do not stall
and do not wipe.

**Fix forward when it blocks you.** A missing export, a half-finished import, a
type error in a file someone else is mid-edit on: if it stops your work, repair
it minimally so both of you compile. Add the missing export; don't rewrite their
function.

**Never delete, revert, or "clean up" their work.** Not `git checkout <file>`,
not deleting an unfamiliar file, not reverting a commit you didn't make, not
removing code that looks unused. Unused-looking code is usually half of
something in progress.

**Wait when waiting is cheap.** A transient compile error often disappears
within a minute as they save the next file. Re-read before acting: the problem
you were about to fix may already be gone.

**Check before you assume.** "Another agent is probably mid-edit" is a guess,
and when it is wrong the error sits there while every agent politely steps over
it. Ask:

```powershell
pwsh -NoProfile -File "$env:USERPROFILE\.copilot\hooks\who-owns-file.ps1" -Path <file>
```

It reads `session_files` from every local session store and reports which
sessions touched that file recently (default 30 min).

- `NOBODY-ACTIVE` (exit 0) → nobody owns it. **Fix it properly**, don't skip it.
  A stale error is yours to repair, not to route around.
- `ACTIVE-OWNER` (exit 3) → it lists the session, profile and last-active time.
  Fix forward only if it blocks you; never delete or revert.

Use it before "leaving a file alone", before reporting something as broken but
untouched, and before a large refactor of an unfamiliar file.

**Say what you touched.** If you modified a file that is clearly someone else's
work in progress, state it explicitly in your final report so the change isn't
mistaken for their own.

Rule of thumb: **additive is fine, subtractive is not.**

## Undoing your own mistake must not destroy theirs

Observed failure: an agent noticed it had clobbered another agent's CHANGELOG
edits, tried to fix it with `git checkout -- CHANGELOG.md`, and thereby
discarded that agent's remaining uncommitted work — turning a recoverable
mistake into an unrecoverable one.

**Never use a discard command as a fix.** `git checkout -- <path>`,
`git restore`, `git reset --hard` and `git clean -f` all throw away
uncommitted changes, and in a shared clone those changes are usually not
yours. Uncommitted-and-unstaged work leaves no dangling blob: it is simply
gone. A guard hook blocks these, but do not rely on it.

When you realise you overwrote someone's edits:

1. **Stop touching the file.** Every further command narrows recovery.
2. **Commit what is there**, even if it is a mix. Committed is recoverable;
  working-tree state is not.
3. Recover their version from a source that still has it — `git stash list`,
  `git fsck --lost-found` if it was ever staged, the editor's local history
  (`File: Open Timeline`), or the chat-editing snapshots under
  `workspaceStorage/*/chatEditingSessions/`.
4. **Say plainly what you overwrote**, in your report, naming the file.

Prevention: read a file immediately before writing it, and prefer targeted
edits over rewriting a whole file. `WriteAllLines`-style full-file rewrites are
what clobber a concurrent edit — they replace content written seconds ago by
someone else.

## Escalation
- A commit that includes another agent's files is **not** an incident. Nothing is lost — it is committed. Report which files were foreign and move on; do not offer to split, revert or amend it
- If a foreign rebase or history rewrite broke you: STOP, report to the user, don't attempt unilateral history surgery
- The durable fix for repeated contention is per-agent `git worktree` �?" suggest the `worktree-setup` skill if collisions recur
