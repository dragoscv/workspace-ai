---
paths:
  - "**"
---

# PowerShell Command Safety (always applies)

Agent-authored one-liners hang the user's terminal at the `>>` continuation
prompt. This is not cosmetic: the user must guess which character closes the
open construct, and Ctrl+C does not always work. Prevent it at authoring time.

## The rule: never nest quotes of the same type

`>>` appears when the parser sees an **unterminated** string, brace, paren, or
here-string. In practice it is almost always a quoting collision in a regex or
grep pattern.

BAD �?" a double-quoted string containing escaped double quotes:
```powershell
rg -l "from ['`"].*e2e/" apps/web/src        # ` escaping is fragile
"count: $((rg -c "pat" src).Count)"          # nested "" inside $()
```

GOOD �?" outer single quotes, or avoid the inner quote entirely:
```powershell
rg -l 'from .*e2e/' apps/web/src
$n = (rg -c 'pat' src | Measure-Object).Count; "count: $n"
```

Concrete rules:
1. **Prefer single quotes for any literal that contains quotes, regex, or `$`.**
2. **Never put a double-quoted string inside a `$(...)` that is itself inside a
   double-quoted string.** Assign to a variable on a previous statement instead.
3. **Avoid backtick-escaping quotes** (`` `" ``). It is legal but the most common
   source of these hangs, especially when the command also crosses a tool
   boundary that re-escapes.
4. **Do not embed a regex character class containing quotes** (`['\"]`). Rewrite
   the pattern so quotes are not part of it, or use `-F` / `-SimpleMatch`.
5. **Keep one-liners short.** If it needs `;` more than ~3 times, or any `{ }`
   block, write a `.ps1` under `.copilot-tmp/` and run it with
   `-NoProfile -ExecutionPolicy Bypass -File`.

## Validate before sending anything non-trivial

The parser can prove a command is complete WITHOUT running it:

```powershell
$t=$null; $e=$null
[System.Management.Automation.Language.Parser]::ParseInput($cmd,[ref]$t,[ref]$e) | Out-Null
@($e | Where-Object { $_.IncompleteInput }).Count   # >0 means it WILL hang at >>
```

For a file: `[Parser]::ParseFile($path,[ref]$t,[ref]$e)`.

## Getting out of `>>` (tell the user this, do not make them guess)

In order of preference:
- Type the **closing character** then Enter �?" `"` or `'` or `}` or `)` or `"@`.
  This completes the statement; it may then execute, so prefer Ctrl+C first if
  the command is destructive.
- **Ctrl+C** �?" usual interrupt.
- **Ctrl+Break** �?" harder interrupt; works when Ctrl+C is swallowed by
  PSReadLine mid-parse.
- **Esc** �?" clears the current line only (not the pending block).
- **Ctrl+D** �?" EOF; exits the shell entirely. Last resort.

## Non-obvious trap

Very long single-line commands can be **mangled in transit** (wrapped/truncated
by the terminal), producing a syntax error that does not exist in the string the
agent composed. Observed on this machine. Another reason to keep one-liners
short and move anything substantial into a script file.
