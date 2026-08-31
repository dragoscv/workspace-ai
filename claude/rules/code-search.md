---
paths:
  - "**"
---

# Code Search (always applies)

Repos here are large (one monorepo: 2363 `node_modules` dirs, ~24 GB build output).
A naive recursive walk takes 20+ seconds and returns >99% junk. Search cost is
a correctness issue: slow searches get truncated with `-First N`, and the real
match is often not in the first N.

## Always use ripgrep

`rg` is installed (`winget install BurntSushi.ripgrep.MSVC`). It honours
`.gitignore` and `.ignore` automatically … no manual exclude list needed.

- `rg -n "pattern"` … search all source, with line numbers
- `rg -n -t ts "pattern"` … restrict by type (`-t py`, `-t rust`, `-t md`, …)
- `rg -l "pattern"` … filenames only
- `rg -n --glob '!*.d.ts' "pattern"` … skip generated declarations
- `rg -n -g '!**/migrations/**' "pattern"` … ad-hoc path exclusion
- `rg --files | rg "partial/path"` … find files by name (replaces `Get-ChildItem -Recurse -Filter`)
- `rg --no-ignore "pattern"` … deliberately include ignored dirs (rare)
- `rg -n --stats "pattern"` … show how many files were actually searched

Benchmark on one monorepo: `Get-ChildItem -Recurse` = 21.5 s and 99.3 % of hits from
`node_modules`; equivalent `rg` = **0.33 s**, 5 real hits.

## Two PowerShell traps to never repeat

1. **`-Exclude` is silently ignored when combined with `-Recurse -Include`.**
   `Get-ChildItem -Recurse -Include *.ts -Exclude *.d.ts` does NOT filter
   `.d.ts`. It fails open, so the bug is invisible.
2. **A trailing `| Where-Object { $_.FullName -notmatch "node_modules" }`
   filters *after* the full disk walk.** It hides the noise but saves zero
   time … the traversal already happened.

If `Get-ChildItem` is genuinely unavoidable, filter during traversal
(`-Directory` + manual recursion) rather than post-hoc.

## Repo-level ignore files

Extra excludes beyond `.gitignore` belong in a repo-root `/.ignore` … read by
ripgrep, fd, and VS Code search, but **not** by git, so it never affects
commits. Use it for directories that are tracked-but-not-worth-grepping
(large fixture/data dirs, lockfiles, generated code).

## Prefer the right tool

- Semantic/structural questions …' read the file, don't grep blindly
- "Where is X defined?" …' `rg -n "(function|const|class|type|interface) X"`
- "Who calls X?" …' `rg -n "\bX\("`
- Whole-file listings …' `rg --files -g 'pattern'`
