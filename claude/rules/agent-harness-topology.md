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

## Hooks run in BOTH Copilot CLI and VS Code

`~/.copilot/hooks/the gateway-hooks.json` is read by Copilot CLI **and** by the VS
Code chat extension. An earlier version of this rule claimed VS Code ignored
hooks; that was wrong, and it meant a broken Stop hook went undiagnosed for
months because it was assumed inert.

Verify with the extension's own log — `GitHub Copilot Chat Hooks.log` under
`%APPDATA%\Code - Insiders\logs\<ts>\window<N>\exthost\GitHub.copilot-chat\`
for a local window, or `~/.vscode-server-insiders/data/logs/<session>/` for a
tunnel session — it records `[PreToolUse] Executing N hook(s)` for every
invocation. If an event shows a count of zero while others run, the hook is
misconfigured, not unsupported.

Two things that make a hook silently never fire:

- **Casing is per-event, so copy what already works.** `preToolUse` and
  `sessionStart` are camelCase in the live config and `preToolUse` fires
  thousands of times; the turn-end event only matched as PascalCase `Stop`,
  never `stop`. Check the log rather than assuming a convention.
- **VS Code passes only `transcript_path`**, never the response text. The
  payload is: `timestamp`, `hook_event_name`, `session_id`, `transcript_path`,
  `tool_name`, `tool_input`, `tool_use_id`, `cwd`. The transcript is JSONL, so
  parse the last `role: assistant` line rather than reading the file raw.

A hook that is configured but never fires looks exactly like a hook that fires
and finds nothing. Check the event count before trusting a guard is active.

Which events actually fire, measured 2026-08-31 in a local VS Code window:
`PreToolUse` **2146**, `Stop` **9**, `SessionStart` **0**. So both guards and
both Stop hooks are live in VS Code; `session-start.ps1` is the one that does
not run there.

Note the casing is NOT uniform, and the working config proves it: `preToolUse`
and `sessionStart` are camelCase in `the gateway-hooks.json` and `preToolUse` fires
fine, while the turn-end event only matched as PascalCase `Stop`. Do not
"correct" a working key — check the log before changing casing.

A repo-level gate (pre-commit, CI) is still the strongest layer, because it is
harness-independent. That is why the build lock lives in `run-build.ps1` behind
an OS mutex rather than in a hook alone.

## Diagnosing "my instructions aren't applied"

1. Right-click the Chat view → **Diagnostics** — lists every loaded instruction,
   agent and skill plus errors.
2. Check the **References** section of a chat response.
3. Verify the glob actually matches the file being edited.
4. Confirm `chat.includeApplyingInstructions` / `chat.useAgentsMdFile` /
   `chat.useClaudeMdFile` are enabled.
