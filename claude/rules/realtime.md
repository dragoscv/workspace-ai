---
paths:
  - "**/ws/**"
  - "**/websocket*/**"
  - "**/*websocket*.{ts,tsx,js,py,rs}"
  - "**/*realtime*.{ts,tsx,js,py,rs}"
  - "**/hub/**"
  - "**/relay/**"
---

# Realtime: WebSockets, Sync, CRDT

Applies to sync hubs, relay servers, voice/streaming pipelines and Yjs-based
collaboration.

## Connections are unreliable by definition

- **Always implement reconnect with exponential backoff + jitter.** A fixed
  retry interval turns one server restart into a thundering herd.
- Cap backoff (e.g. 30 s) and reset it after a stable connection, not after a
  successful handshake — a connect/drop loop otherwise never backs off.
- Assume messages are lost across a reconnect. Either the protocol is
  idempotent, or the client resyncs from a sequence number/version on reconnect.
- Heartbeat both directions. A TCP connection can be dead for minutes without
  either side noticing; ping/pong with a timeout is the only reliable liveness.

## Backpressure

- A slow consumer must not grow an unbounded server-side queue. Bound the
  buffer and decide explicitly: drop oldest, drop newest, or disconnect.
- For high-frequency updates (cursors, audio meters, tick data) **coalesce**:
  send the latest state on an interval rather than every change.
- Never `await send()` per client in a broadcast loop — one stalled socket
  blocks everyone. Fan out concurrently with per-client timeouts.

## Auth

- Authenticate on **connect**, and re-check authorization per message for
  anything mutating — a long-lived socket outlives the token that opened it.
- Handle token expiry mid-session: refresh over the socket or force a
  reconnect; do not silently keep serving an expired identity.
- Scope every message to the tenant/room derived server-side from the session,
  never from a field in the client payload.

## CRDT / Yjs

- The CRDT is the source of truth for document state; the DB is a snapshot.
  Persist periodically and on disconnect, not on every update.
- Never mutate shared types outside a transaction — you get partial states
  broadcast to peers.
- Awareness (cursors, presence) is ephemeral: do not persist it, and clear it
  on disconnect or clients see ghosts.
- Garbage-collect / compact history; an unbounded Yjs doc grows forever and
  eventually blows out memory on load.

## Observability

- Log connect/disconnect with a reason code and duration. "It disconnects
  sometimes" is undebuggable without it.
- Track concurrent connections, message rate, and dropped-due-to-backpressure
  as metrics — the last one is the early warning.

## Testing

- Test the reconnect path explicitly: kill the server mid-session and assert
  the client recovers and resyncs.
- Test two clients converging on the same document — CRDT bugs only appear with
  concurrency.
