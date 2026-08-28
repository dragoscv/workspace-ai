---
paths:
  - "**"
---

# Windows Environment (always applies)

This machine is Windows 11 + VS Code Insiders; the default shell is PowerShell (pwsh 7 preferred, Windows PowerShell 5.1 exists). Projects live under `E:\gh\`.

## Shell rules
- Write PowerShell, never bash-isms: no `&&`/`||` chaining (use `;` or `if ($?)`), no `export` (use `$env:X=`), no `~` (use `$HOME`), no heredocs (use `@'...'@` here-strings)
- `curl` is an alias for Invoke-WebRequest in PS 5.1 �?" use `curl.exe` for real curl flags
- Quote every path; parentheses and spaces in Windows paths break unquoted commands
- Never inline-escape JSON into CLI args �?" write a temp file and pass it (`--flags-file`, `@file`, or `-InFile`)
- Env vars set in one terminal do not propagate to other terminals or already-running processes

## File handling
- Files destined for Linux (shell scripts, YAML for cloud, Dockerfiles) must be LF, no BOM: `Set-Content -NoNewline -Encoding ascii` after `-replace "`r`n","`n"`. Symptom of failure: `bad interpreter: /bin/bash^M`
- Non-BMP chars (emoji) must never be substring-sliced �?" lone UTF-16 surrogates break JSON APIs downstream
- Long paths: `git config core.longpaths true` when a repo hits MAX_PATH

## Tooling
- Package manager is always `pnpm` (never npm/yarn); Python via project venvs, not global pip
- `gcloud ... --format=json | ConvertFrom-Json`; never parse table output; a timed-out `gcloud create` may still have created the resource �?" LIST before retrying
- Validate .ps1 syntax before running unattended: `[System.Management.Automation.Language.Parser]::ParseFile($p,[ref]$t,[ref]$e)`
- Launch unattended scripts with `-NoProfile -ExecutionPolicy Bypass -File`; set `$ErrorActionPreference='Stop'`
