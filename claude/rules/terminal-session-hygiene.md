# Terminal & Long-Session Hygiene (always applies)

Sessions here routinely run for hours with multiple terminals, background watchers, and cloud jobs in flight. Do not disrupt in-flight work.

## Terminals
- Before running commands, check the existing terminals list — a watcher/poller running in one of them is probably load-bearing. Never kill or reuse a terminal running a watcher, dev server, or long job unless asked
- One long-running process per terminal; start new work in a fresh terminal
- Never poll or sleep waiting for a background command — end the turn and act on the completion notification
- A timed-out command may still be running AND may have succeeded — check the resulting state before retrying (duplicate-launch trap)
- Exit code 0 with a tool error flag = trust the exit code + output, not the flag

## Long sessions
- When context gets long or work will resume later, write a compact handoff/status note to session memory (or invoke session-handoff) BEFORE quality degrades — include: current state, in-flight jobs with IDs, next step, open questions
- Track multi-step work in the todo list; mark items done immediately, not in batches
- In-flight cloud jobs (Vertex, Cloud Run deploys, Cloud Build) must be recorded with job ID + region the moment they launch — a lost job ID means orphaned spend
- On resume, verify the CURRENT state of every in-flight item empirically (list jobs, read logs) — never trust the previous session's last-known state

## Cost awareness
- GPU jobs and paid API calls: before launching, state the expected cost/duration; after finishing, confirm the job reached a terminal state (no orphaned RUNNING jobs burning quota)
- Cancel losing racers/siblings promptly; verify cancellation took effect (state=CANCELLED, not just the cancel command exiting 0)
