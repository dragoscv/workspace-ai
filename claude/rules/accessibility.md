---
paths:
  - "**/*.{tsx,jsx,html,svelte,vue,css}"
---

# Accessibility (WCAG 2.2 AA)

## Baseline
- Target **WCAG 2.2 Level AA** on every user-facing surface; AAA for critical flows (auth, payments, e-Factura submission)
- Accessibility is a definition-of-done item, not a follow-up; never ship a screen that fails keyboard or contrast checks
- Test with keyboard only, a screen reader (NVDA/VoiceOver), and `prefers-reduced-motion` enabled

## Semantics & Structure
- Use native elements first: `<button>`, `<a>`, `<nav>`, `<main>`, `<header>`, `<footer>`, `<dialog>`. Reach for ARIA only when no native element fits
- One `<h1>` per page; never skip heading levels
- Every page has a `<main>` landmark and a skip-to-content link
- Lists use `<ul>/<ol>`; tabular data uses `<table>` with `<th scope>` â€” never divs faking tables
- Buttons do actions, links navigate; never `<div onClick>`

## Keyboard & Focus
- Everything interactive must be reachable and operable by keyboard (Tab, Shift+Tab, Enter, Space, Esc, arrows for composites)
- Visible focus ring on all focusable elements; never `outline: none` without a replacement (`focus-visible:ring-2`)
- Logical tab order matches visual order; no positive `tabindex`
- Trap focus inside modals/dialogs; restore focus to the trigger on close
- Radix UI / shadcn primitives handle most of this â€” prefer them over hand-rolled widgets

## Forms
- Every input has an associated `<label>` (or `aria-label` when visually hidden by design)
- Group related fields with `<fieldset>` + `<legend>`
- Errors: `aria-invalid`, `aria-describedby` pointing to the message, and a text description (never color alone)
- Announce async validation results via a polite live region
- Required fields marked in text, not only with `*`

## Color & Contrast
- Text contrast â‰¥ 4.5:1 (normal), â‰¥ 3:1 (large â‰¥ 24px or 18.66px bold)
- UI components and focus indicators â‰¥ 3:1 against adjacent colors
- Never convey meaning by color alone â€” pair with icon, text, or pattern (critical for accounting status, invoice states)
- Verify both light and dark themes

## Images & Media
- Meaningful images have descriptive `alt`; decorative images use `alt=""`
- Icons that are the only label need an accessible name (`aria-label` / visually-hidden text)
- Video has captions; audio has transcripts

## Motion & Dynamic Content
- Honor `prefers-reduced-motion`: provide a static/reduced variant for animations, parallax, autoplay
- Live regions (`aria-live="polite"`) for toasts, async status, and streamed AI output
- Don't auto-advance carousels or move focus unexpectedly

## Verification
- Run axe (via `@axe-core/playwright`) in E2E for key flows; fail CI on violations
- Manual keyboard pass + screen-reader spot-check before merging new screens
- Lighthouse a11y score â‰¥ 95 on primary routes
