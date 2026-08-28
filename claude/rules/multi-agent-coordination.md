---
paths:
  - "**"
---

# Multi-Agent Coordination (always applies)

Multiple agents routinely work in the SAME clone at the same time (large monorepos). The working tree and git index are shared mutable state â€” treat them as contested.

## Git in a shared clone
- **Never `git add -A`, `git add .`, or `git commit -a`** â€” stage only explicit paths you changed. Other agents' uncommitted work is in the working tree and `-A` sweeps it into your commit
- Before committing, run `git diff --cached --name-only` and verify EVERY listed file is yours; `git reset <path>` any foreign staged files first (another agent may have staged files into the shared index)
- A commit mutex may exist (e.g. `.git/commit.lock` via pre-commit hook). If blocked with "another commit is in progress": wait 30â€“60s and retry. Only delete the lock if the holder PID is dead
- Never `git stash`, `git checkout <branch>`, `git rebase`, `git reset --hard`, or `git clean` while other agents are active â€” these mutate the shared working tree and destroy their in-progress work. If a branch switch is unavoidable, ask the user first
- Never amend or force-push a commit you didn't just make â€” it may be another agent's
- After committing, re-run `git status` â€” leftover changes may belong to another agent; leave them alone

## Working tree & files
- Don't edit a file that a running build/test task in another terminal is actively using if avoidable; expect transient compile errors from other agents' half-written edits â€” re-check before "fixing" them
- Don't revert or "clean up" unfamiliar changes in files you didn't touch â€” they're probably another agent's work in progress. If something looks broken, check `git log`/blame before restoring
- Version bumps and CHANGELOG: expect merge contention; re-read the file immediately before editing (another agent may have bumped it since you last looked)

## Processes & resources
- Don't kill dev servers, watchers, or terminals you didn't start
- Don't run `pnpm install` casually while other agents build â€” it invalidates node_modules under them; coordinate or do it when quiet
- Don't run conflicting DB operations (db:push, migrations, reseeds) while another agent's dev server or tests are hitting the same local DB, unless it's the point of the task

## Escalation
- If the tree is contaminated (your commit swept foreign files, or a foreign rebase broke you): STOP, report to the user, don't attempt unilateral history surgery
- The durable fix for repeated contention is per-agent `git worktree` â€” suggest the `worktree-setup` skill if collisions recur
