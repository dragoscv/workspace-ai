---
paths:
  - "**/*.rs"
  - "**/Cargo.toml"
  - "**/tauri.conf.json"
  - "**/src-tauri/**"
---

# Rust & Tauri 2

Applies to Tauri 2 desktop shells and native Rust helpers (audio/DSP, exporters).
Tauri 2 is the default for new native desktop; Electron only survives in legacy.

## Security — the part that is easy to get wrong

- **The IPC boundary is a trust boundary.** Anything a command accepts comes
  from the webview and must be validated in Rust. Never take a path from the
  frontend and open it unchecked.
- Tauri 2 uses **capabilities** (`src-tauri/capabilities/*.json`), not the v1
  allowlist. Grant the narrowest permission set; never `"**"` on `fs` scope.
- Keep the CSP restrictive in `tauri.conf.json`. `"csp": null` disables it
  entirely — that is not an acceptable shortcut.
- Secrets belong in the OS keychain (`keyring`), never in `tauri.conf.json`,
  never in localStorage on the webview side.
- Validate deep-link / custom-protocol input the same as any network input.

## Commands

- `#[tauri::command]` functions should be thin: validate → call a plain Rust
  function → map the error. Business logic in a testable non-Tauri module.
- Return `Result<T, String>` (or a serializable error enum) — a panic in a
  command kills the app with no useful message.
- Long work must be `async` or spawned; blocking the command thread freezes the
  UI.

## Rust hygiene

- `cargo clippy -- -D warnings` and `cargo fmt --check` in CI. Treat clippy
  warnings as errors.
- No `unwrap()` / `expect()` on anything that can fail at runtime — reserve them
  for genuine invariants and comment why.
- `anyhow` for application errors, `thiserror` for library error enums.
- `unsafe` requires a comment stating the invariant being upheld.

## Audio / realtime DSP

- The audio callback is hard-realtime: **no allocation, no locks, no I/O, no
  logging** inside it. Use a lock-free ring buffer to hand data out.
- Sample-rate and buffer-size changes are runtime events, not constants.

## Build & release

- `cargo build --release` for anything you benchmark; debug builds are 10–100×
  slower and will mislead you.
- Cross-compiling from Windows to macOS/Linux needs the target toolchain — this
  usually belongs in CI, not on the dev box.
- The frontend build must run before `tauri build`; a stale `dist/` ships
  silently.
- Bundle identifiers and signing config are per-platform — verify the artifact,
  don't assume the bundler produced what you expect.
