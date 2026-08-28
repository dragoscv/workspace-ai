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

## Hooks are Copilot CLI only — VS Code does not run them

`~/.copilot/hooks/the gateway-hooks.json` is read by **Copilot CLI**. The VS Code
chat extension has no equivalent registration point, so every hook is inert
there.

Verified 2026-08-28, two independent ways:

- `session-start.ps1` appends to `~/.the gateway/copilot-sessions.log` on every
  session. 202 entries, none for the VS Code workspace that was open at the
  time.
- `guard-command.ps1` refuses `pnpm typecheck` (exit 2) when piped the payload
  by hand — yet that exact command ran unblocked in the VS Code session minutes
  earlier.

What this means in practice:

- The guards (`guard-command`, `guard-write`), the Stop hooks
  (`no-permission-stop`, `nudge-parallel`) and the session-start tool audit
  protect **CLI sessions only**.
- In VS Code the same protection has to come from the **rules**, which are
  loaded there — so a rule is not redundant just because a hook covers it.
- Anything that must hold everywhere belongs in a **repo-level gate**
  (pre-commit, CI). That layer is harness-independent and is why the build
  lock also lives in `run-build.ps1` behind an OS mutex rather than in a hook
  alone.

Do not cite hook coverage as proof a behaviour is enforced without saying which
harness you mean.

## Diagnosing "my instructions aren't applied"

1. Right-click the Chat view → **Diagnostics** — lists every loaded instruction,
   agent and skill plus errors.
2. Check the **References** section of a chat response.
3. Verify the glob actually matches the file being edited.
4. Confirm `chat.includeApplyingInstructions` / `chat.useAgentsMdFile` /
   `chat.useClaudeMdFile` are enabled.
