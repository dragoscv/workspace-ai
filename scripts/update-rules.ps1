<#
.SYNOPSIS
  Refresh this PUBLIC repo's rule/skill snapshot from the live machine config.

.DESCRIPTION
  This repo is PUBLIC. The live config in ~/.claude also drives private work and
  names private projects, so files are copied only after a redaction check.

  Anything matching $private below is reported and SKIPPED unless -Force.
  Personal, unredacted config belongs in the private `workspace` repo.
#>
[CmdletBinding()]
param([switch]$Force)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$live = "$env:USERPROFILE\.claude"

# Identifiers that must not appear in a public repo.
$private = 'brivio|codai|metu|money|mmo|cursuri|notai|studiai|evocrm|dragos-dev|inferance|bancai|facturai'

if (-not (Get-Command rg -ErrorAction SilentlyContinue)) {
  throw "ripgrep required. winget install BurntSushi.ripgrep.MSVC"
}

New-Item -ItemType Directory -Force -Path "$repo\claude\rules" | Out-Null
$copied = 0; $skipped = @()

foreach ($f in Get-ChildItem "$live\rules" -File -Filter '*.md') {
  $hits = @(rg -n -i $private $f.FullName 2>$null)
  if ($hits.Count -gt 0 -and -not $Force) {
    $skipped += [pscustomobject]@{ File = $f.Name; Refs = $hits.Count }
    continue
  }
  Copy-Item $f.FullName "$repo\claude\rules\$($f.Name)" -Force
  $copied++
}

Write-Host ""
Write-Host "copied : $copied rule(s)" -ForegroundColor Green
if ($skipped) {
  Write-Host "skipped (private project references):" -ForegroundColor Yellow
  $skipped | ForEach-Object { "  {0,-34} {1} ref(s)" -f $_.File, $_.Refs }
  Write-Host ""
  Write-Host "Redact these by hand, or keep them only in the private repo." -ForegroundColor DarkGray
}
Write-Host ""
Write-Host "Review before committing:  git -C `"$repo`" diff --stat"
