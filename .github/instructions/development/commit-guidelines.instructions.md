---
applyTo: "**"
---

# Commit Message Guidelines for Copilot Agent

Use these conventions to generate, validate, or suggest improvements for all Git commit messages in this project.

General Principles

* Write clear, concise, and meaningful messages that explain what and why, not how.
* Use the imperative mood (e.g., "Add tests", not "Added tests" or "Adding tests").
* Avoid vague terms like "fix stuff", "update code", "refactor things".

Commit Format

Use the Conventional Commits style:

<type>(<scope>): <short summary>

Optional sections:

<type>(<scope>): <short summary>

\[body — optional, details or reasoning]

\[footer — optional, metadata like BREAKING CHANGE or issue refs]

Common Types

feat: New features or user-facing functionality
fix: Bug fixes or behavior corrections
chore: Non-code tasks (e.g., tooling, config)
docs: Documentation-only changes
style: Formatting, whitespace, no code logic changes
refactor: Internal code changes that don't affect behavior
test: Adding or updating tests
perf: Performance improvements
ci: Changes to CI/CD pipelines
revert: Reverting a previous commit

Scope Examples

Use a meaningful scope when applicable:

auth, api, db, hooks, ui, infra, firestore, router, etc.
For tooling: build, eslint, tailwind, vite, etc.

Example:
feat(auth): add passwordless login with magic link

Summary Line Rules

* Max 72 characters
* No period at the end
* Capitalize the first word

Bad:
added button.

Good:
feat(ui): add animated submit button

Body (Optional but Encouraged)

Use the body to:

* Explain why the change was made
* Highlight relevant technical decisions
* Add links to designs, issues, specs if needed

Footer (Optional)

Use the footer for:

* Breaking changes:
  BREAKING CHANGE: removes legacy auth endpoint

* Issue linking:
  Closes #123

Agent Behavior Notes

* **CHECK MEMORY**: Review stored commit patterns and project history before generating commit messages
* **STORE PATTERNS**: Preserve effective commit message templates and conventions in memory for consistency
* Auto-generate commit messages based on file diffs and commit scopes.
* Match formatting rules above, or revise existing messages that don’t comply.
* Use context from .github/instructions/copilot-instructions.md to refine summaries.
* If no clear scope can be inferred, omit it gracefully:
  fix: prevent crash when parsing empty input
