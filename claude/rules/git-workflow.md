# Git Workflow & Conventions

## Branch Strategy
- Protected `main` branch; all changes via pull requests
- Feature branches from `main`: `feat/short-description`, `fix/issue-number-description`
- Delete branches after merge
- Rebase feature branches on `main` before PR; resolve conflicts locally

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
- Deployment: canary → staged → full rollout with monitoring
