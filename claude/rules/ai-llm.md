---
paths:
  - "**/*.{ts,tsx,py}"
  - "**/ai/**"
  - "**/llm/**"
  - "**/providers/**"
---

# AI / LLM Engineering

## Stack
- **Vercel AI SDK** for app-side LLM calls (streaming, tool calling, structured output)
- A self-hosted **inference gateway** is preferred: one model name `the gateway` backed by Google Vertex (Anthropic Claude) and Azure AI Foundry. Apps call the gateway, not providers directly
- Use the gateway for project features unless there's a specific reason to call a provider SDK

## Prompting & Structure
- Prefer **structured output** (Zod schema via the SDK / tool calls) over parsing free text
- Keep system prompts versioned and in source; don't bury behavior in scattered strings
- Inject only the context the task needs; trim/window long histories deliberately (watch token budget)
- Make tools small, single-purpose, and well-described; validate tool args with Zod before executing

## Reliability
- Stream responses to the UI with a Suspense/live-region boundary (see accessibility)
- Handle provider failure: timeout, bounded retry, and **fail over** between backends; degrade gracefully with a clear user message
- Treat model output as **untrusted input** — validate, sanitize, and never `eval`/execute it or interpolate it into SQL/shell/HTML unescaped
- Guard against prompt injection when input includes user/3rd-party content; keep instructions and data separated

## Encoding Gotcha (Vertex / Anthropic)
- Vertex's JSON parser rejects **lone UTF-16 surrogates** with an opaque `400 input data is not valid json`
- When trimming/slicing text for context windows, don't cut multi-byte/non-BMP chars (emoji) in half; sanitize lone surrogates at the serialization boundary

## Cost & Performance
- Track token usage and cost per request; emit as metrics (see observability) and budget-alert
- Cache deterministic results; avoid re-asking the model for stable data
- Choose the smallest model/setting that meets quality; reserve large contexts for when needed
- Move long generations off the request path where UX allows (jobs/queues)

## Evaluation
- Keep an eval set for prompt/behavior changes; gate risky changes (run the eval gate nightly)
- Log prompts/outputs for debugging **with PII redaction**; never log secrets or raw user PII
