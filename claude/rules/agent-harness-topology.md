---
paths:
  - "**"
---

# Agent Harness Topology (always applies)

Where the agent RUNS determines which config files it reads. Getting this wrong
wastes whole sessions editing files that are never loaded.

## VS Code tunnel / Remote — the extension host is REMOTE

Connecting a thin client (VM, laptop, vscode.dev) to `vscode.dev/tunnel/<name>`
runs the Copilot extension host on the **host** machine, not the client.

- The agent reads the **host's** `~/.claude/*` and `~/.copilot/*`.
- Nothing needs to be installed or copied on the client.
- Machine-scoped settings for a tunnel window live in
  `~/.vscode-server-insiders/data/Machine/settings.json` — **not**
  `%APPDATA%/Code - Insiders/User/settings.json`. Editing the latter for a
  tunnel session silently does nothing. (Verified: `typescript.tsserver.
  maxTsServerMemory` stayed at the 3072 default until set in the Machine file.)

## Config locations by harness

| Harness | Always-on | Path-scoped | Agents | Skills |
|---|---|---|---|---|
| VS Code Copilot | `~/.claude/CLAUDE.md` | `~/.claude/rules`, `~/.copilot/instructions` | `~/.copilot/agents` | `~/.claude/skills`, `~/.copilot/skills`, `~/.agents/skills` |
| Copilot CLI | `~/.copilot/copilot-instructions.md` | `.github/instructions/**` | `~/.copilot/agents` | `~/.copilot/skills` |
| Claude Code | `~/.claude/CLAUDE.md` | `~/.claude/rules` | `~/.claude/agents` | `~/.claude/skills` |
| Agent Host | — | `~/.copilot/instructions`, `~/.claude/rules` | `~/.copilot/agents` | — |

Agent Host reads **harness-agnostic** folders only — never VS Code profile user
data. Anything that must work there belongs in `~/.copilot/instructions` or
`~/.claude/rules`.

## Precedence

1. Personal (user-level) — highest
2. Repository (`.github/copilot-instructions.md`, `AGENTS.md`, `CLAUDE.md`)
3. Organization — lowest

Within a level, all matching files are concatenated; **order is not guaranteed**,
so never write a rule that depends on another rule being loaded first.

## `paths` vs `applyTo` — they are not interchangeable

- `.claude/rules/*.md` → `paths:` (array of globs, Claude Rules format)
- `.github/instructions/*.instructions.md` → `applyTo:` (single glob string)

**Omitting the scope key entirely means the rule loads on EVERY request.** With
28 rules that was ~60 KB of permanent context. State `paths: ["**"]` explicitly
when a rule really is always-on, so the intent is reviewable.

## What syncs, what doesn't

VS Code Settings Sync covers `settings`, `keybindings`, `snippets`, `prompts`,
`agents`, `mcp`, `tasks`. It does **not** cover `~/.claude/*` or any skills
directory — those need a dotfiles repo.

## Diagnosing "my instructions aren't applied"

1. Right-click the Chat view → **Diagnostics** — lists every loaded instruction,
   agent and skill plus errors.
2. Check the **References** section of a chat response.
3. Verify the glob actually matches the file being edited.
4. Confirm `chat.includeApplyingInstructions` / `chat.useAgentsMdFile` /
   `chat.useClaudeMdFile` are enabled.
