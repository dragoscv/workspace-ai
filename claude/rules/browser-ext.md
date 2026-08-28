---
paths:
  - "**/manifest.json"
  - "**/browser-ext/**"
  - "**/extension/**"
  - "**/content-script*.{ts,js}"
  - "**/background*.{ts,js}"
  - "**/service-worker*.{ts,js}"
---

# Browser Extensions (Manifest V3)

Chrome/Firefox MV3. MV3 is not MV2 with a renamed field â€” the execution model
is fundamentally different and most bugs come from assuming otherwise.

## The service worker is not a background page

- **It is terminated aggressively** (~30 s idle) and restarted on the next
  event. Any state in a module-level variable is gone.
- Persist state in `chrome.storage.session` (in-memory, cleared on browser
  close) or `chrome.storage.local`. Never assume a global survives.
- Register all listeners **synchronously at top level**. A listener registered
  inside an async callback is missed after a restart â€” this is the single most
  common MV3 bug.
- No DOM in the service worker: no `XMLHttpRequest`, no `document`. Use `fetch`
  and `OffscreenCanvas`, or an offscreen document for DOM work.
- Timers do not survive termination. Use `chrome.alarms` (minimum 30 s), not
  `setTimeout` for anything long.

## Permissions

- Request the minimum. Every permission is a store-review question and a user
  scare prompt.
- Prefer `activeTab` + `optional_host_permissions` over `<all_urls>`. Broad host
  permissions are the top cause of review rejection.
- Request optional permissions at the moment of use with
  `chrome.permissions.request`, from a user gesture.

## Content scripts

- They share the page DOM but **not** the page's JS context. To talk to page
  scripts you need `window.postMessage` with an origin check.
- The page is hostile: never trust anything read from the DOM, and never
  `eval` page-provided content.
- Scope CSS or use Shadow DOM â€” injected styles otherwise leak into the host
  page and break it.
- Prefer `chrome.scripting.executeScript` on demand over declaring a content
  script on every page.

## Messaging

- `chrome.runtime.sendMessage` responses require `return true` from the
  listener when responding asynchronously, or the channel closes and the reply
  is lost silently.
- Handle "receiving end does not exist" â€” the service worker or tab may be gone.

## Security

- CSP in MV3 forbids remote code. No CDN scripts, no `eval`, no
  `new Function`. Bundle everything.
- Secrets cannot live in an extension. Anything shipped is readable by any
  user â€” proxy through your own backend.
- Validate messages by `sender.id` / `sender.origin`; any page can attempt to
  message an extension with `externally_connectable`.

## Cross-browser & release

- Firefox uses `browser.*` promises, Chrome `chrome.*` callbacks â€” use
  `webextension-polyfill` rather than branching everywhere.
- Firefox MV3 still uses event pages, not service workers, in places; test both.
- Store review takes days. Version bump + changelog on every submission, and
  keep the previous build so you can roll back.
