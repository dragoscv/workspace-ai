---
applyTo: "**"
---

# Pull Request Guidelines for Copilot Agent

Use these guidelines to generate, validate, or improve pull request descriptions, ensuring clarity, completeness, and alignment with project standards.

General Structure

Every pull request should follow this structure:

## What does this PR do?

Briefly describe the purpose and scope of this pull request. What feature, fix, or improvement does it introduce?

## Why is it needed?

Explain the motivation behind the change. Is it addressing a bug, feature request, performance issue, or technical debt?

## How was it tested?

Describe how this change was verified. Mention any manual testing, automated tests, or CI pipelines used.

## Any relevant issues?

Reference related GitHub issues, if applicable, using "Closes #123" or "Fixes #456" syntax.

## Screenshots or demos (if applicable):

Include UI screenshots, video links, or GIFs showing the feature or fix in action.

## Checklist

* [ ] Code is clean and follows project conventions
* [ ] Tests are written and passing
* [ ] No console errors or warnings
* [ ] PR is linked to an issue or feature
* [ ] All relevant files are included
* [ ] UI/UX is reviewed (if applicable)
* [ ] Accessibility is considered (if applicable)

Content Guidelines

* Be concise, but include enough context for reviewers to understand the scope.
* Use Markdown formatting for readability.
* Avoid generic titles like "Update code" or "Fix bugs" — be specific.
* Keep descriptions updated if changes are made during review.

Agent Behavior Notes

* **MEMORY CONTEXT**: Check for existing PR patterns, templates, and project conventions in memory before generating descriptions
* **STORE PATTERNS**: Preserve effective PR templates and successful patterns in memory for future use
* Use this structure as a template for auto-generating PR descriptions
* Infer the content from diffs, filenames, commit messages, file context, and stored project patterns
* Populate checklist items based on actual verification steps or detected changes
* If screenshots or demos are available, link or embed them
* Ensure the description is human-readable and reviewer-friendly
