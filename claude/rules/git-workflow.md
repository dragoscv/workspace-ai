---
paths:
  - "**"
---

# Git Workflow & Conventions

> **Which mode am I in?** This file describes the PR-based flow — feature
> branches, review, squash merge. Most work on this machine happens in a
> **shared clone with several agents committing directly to `dev`**, where
> `multi-agent-coordination.md` takes precedence: it forbids `rebase`, branch
> switching, history rewriting and **bare** `git stash`. Path-scoped
> `git stash push -- <file>` stays allowed — it touches only that file.
>
> Use this file when you own the branch (a real PR, a solo repo, an
> open-source contribution). In a shared clone, follow the commit-message and
> SemVer conventions here, and ignore the branch/PR/rebase mechanics.

## Branch Strategy

Applies to PR-based work only — see the note above.

- Protected `main` branch; all changes via pull requests
- Feature branches from `main`: `feat/short-description`, `fix/issue-number-description`
- Delete branches after merge
- Rebase feature branches on `main` before PR; resolve conflicts locally.
  **Never while another agent is active in the same clone** — rebase rewrites
  the working tree under them. Ask the user first.

## Commit Messages (Conventional Commits)
- Format: `type(scope): description`
- Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `test`, `perf`, `ci`, `style`, `build`
- Scope is optional but recommended: `feat(auth): add OAuth2 login`
- Description: imperative mood, lowercase, no period at end
- Body for context when the change is non-trivial
- Footer for breaking changes: `BREAKING CHANGE: description`
- Reference issues: `Fixes #123` or `Closes #456`

## Pull Requests
- One concern per PR; keep PRs small and focused (under 400 lines of diff)
- PR title follows conventional commit format
- Include description: what changed, why, and how to test
- PR checklist: tests pass, docs updated, no lint errors, no security issues
- Require at least one approval before merge
- Squash merge to `main` for clean history

## Releases
- Tag releases with SemVer: `v1.2.3`
- Generate changelogs from conventional commits
- Document breaking changes prominently
- Deployment: canary —' staged —' full rollout with monitoring
