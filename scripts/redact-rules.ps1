<#
.SYNOPSIS
  Copy rules from the live machine into this PUBLIC repo, redacting private
  project names into generic equivalents.

.DESCRIPTION
  The rules are genuinely useful to others, but they cite private repos as
  examples. Rather than withhold them, rewrite the identifiers:

      brivio   -> "a large SaaS monorepo"
      codai    -> "the inference gateway"
      metu/mmo/money/... -> "other apps"

  Anything still matching the private pattern after substitution is a bug in
  this script: the file is reported and NOT written.
#>
[CmdletBinding()]
param([switch]$WhatIf)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$live = "$env:USERPROFILE\.claude\rules"
$dest = "$repo\claude\rules"

# Ordered: longest/most-specific first so shorter names don't corrupt them.
$subs = [ordered]@{
  'brivio-web'                = 'the web app'
  'brivio/apps/web'           = 'apps/web'
  'brivio worker/scheduler'   = 'worker/scheduler apps'
  'codai benchmarks-worker'   = 'a benchmarks worker'
  'money APScheduler'         = 'Python APScheduler jobs'
  'metu worker'               = 'sync workers'
  'codai gateway/auth/mgmt'   = 'gateway/auth/mgmt services'
  'brivio gateway/worker/mcp' = 'gateway/worker/mcp services'
  'money quant'               = 'Python compute services'
  'brivio, codai, metu, money' = 'large monorepos'
  'brivio: `.git/brivio-commit.lock`' = 'e.g. `.git/commit.lock`'
  'brivio convention'         = 'convention'
  'brivio: 2363'              = 'one monorepo: 2363'
  'Measured on brivio:'       = 'Measured on one monorepo:'
  'Benchmark on brivio:'      = 'Benchmark on one monorepo:'
  'On brivio that'            = 'In one case that'
  'hardened in brivio (the reference full-SaaS repo)' = 'hardened on a large full-SaaS monorepo'
  'cursuri, money web'        = 'other web apps'
  'LLM providers in codai'    = 'LLM providers'
  'token/cost usage (codai)'  = 'token/cost usage'
  '(Hono, codai)'             = '(Hono)'
  'codai eval gate is nightly' = 'run the eval gate nightly'
  '**codai** is the inference gateway' = 'A self-hosted **inference gateway** is preferred'
  'Use codai inference'       = 'Use the gateway'
  '(codai/Vertex)'            = '(Vertex / Anthropic)'
  'Apps (money, mmo, etc.)'   = 'Apps'
  'brivio'                    = 'the monorepo'
  'codai'                     = 'the gateway'
}

# Post-substitution guard. Word-boundaried to avoid false positives like
# "bani" inside a sentence.
$private = '\b(brivio|codai|metu|cursuri|notai|studiai|evocrm|dragos-dev|inferance|bancai|facturai)\b'

if (-not (Get-Command rg -ErrorAction SilentlyContinue)) {
  throw 'ripgrep required: winget install BurntSushi.ripgrep.MSVC'
}
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$written = 0; $blocked = @()
foreach ($f in Get-ChildItem $live -File -Filter '*.md') {
  $text = Get-Content $f.FullName -Raw
  foreach ($k in $subs.Keys) {
    $text = $text -replace [regex]::Escape($k), $subs[$k]
  }

  if ($text -imatch $private) {
    $leftover = ([regex]::Matches($text, $private, 'IgnoreCase') |
                 ForEach-Object { $_.Value } | Sort-Object -Unique) -join ', '
    $blocked += [pscustomobject]@{ File = $f.Name; Leftover = $leftover }
    continue
  }

  if ($WhatIf) {
    Write-Host ("  would write {0}" -f $f.Name) -ForegroundColor DarkGray
  } else {
    Set-Content -LiteralPath "$dest\$($f.Name)" -Value $text -Encoding UTF8 -NoNewline
  }
  $written++
}

Write-Host ""
Write-Host "redacted + written : $written" -ForegroundColor Green
if ($blocked) {
  Write-Host "BLOCKED (identifier survived substitution):" -ForegroundColor Red
  $blocked | ForEach-Object { "  {0,-34} -> {1}" -f $_.File, $_.Leftover }
  exit 1
}
