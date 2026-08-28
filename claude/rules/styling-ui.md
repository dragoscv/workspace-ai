---
paths:
  - "**/*.{tsx,jsx,css,html,svelte,vue}"
---

# Styling & UI Guidelines

## CSS Framework
- Use Tailwind CSS exclusively (utility-first); no inline styles
- Use Tailwind theme configuration for consistent spacing, colors, and typography
- Apply `@apply` sparingly; prefer utility classes in markup

## Component Library
- Use shadcn/ui as the standard component system (Radix UI + CVA + clsx + tailwind-merge)
- Install shadcn components via CLI; customize in `components/ui/`
- Use lucide-react for icons; cmdk for command palettes
- Use sonner for toasts; never build custom toast systems

## Responsive Design
- Mobile-first approach: design for small screens, then add breakpoints for larger
- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Test layouts at 320px, 768px, 1024px, and 1440px breakpoints
- Avoid fixed widths; use max-width with responsive containers

### Ultrawide (above 21:9) — required, not optional
- Never let a layout stretch edge-to-edge on an ultrawide monitor. Decide per
  surface:
  - **Reading/forms/detail** → centred with a max width (`max-w-3xl`/`4xl`).
    Text lines longer than ~80 characters are unreadable.
  - **Dashboards/lists/tables** → use the space: multi-column grids,
    master–detail, or a persistent side panel. Do not centre a table in a sea
    of empty background.
- Add a `3xl`/`4xl` breakpoint when the design changes above ~1920px; `2xl`
  (1536px) is not the end of the range on these monitors.
- Verify at 2560×1080 and 3440×1440, not just at 1440px.

### Mobile must feel native, not like a shrunk desktop
- Touch targets ≥ 44×44px under `pointer:coarse`.
- Dialogs become bottom sheets on small screens; do not show a centred desktop
  modal on a phone.
- Respect safe areas (`env(safe-area-inset-*)`) so content clears the notch and
  the home indicator.
- No horizontal scroll at any breakpoint — assert it, don't assume it.
- Primary actions reachable with a thumb; don't put them top-right on mobile.

## Theming
- Support light and dark mode using Tailwind's `dark:` variant
- Tailwind v4: use `@theme` in CSS for theming; no `tailwind.config.js`
- Define design tokens in `@theme` block: colors, spacing, fonts, border-radius
- Consistent color system: define semantic color names (primary, secondary, accent, error)
- **Every new surface must work across the whole theme system**, not just the
  mode you happened to develop in: light/dark, the accent colour, and the
  surface/elevation mode. A component that only looks right on dark + default
  accent is unfinished.
- Read colours from theme tokens only. A hardcoded hex or a bare Tailwind colour
  (`bg-slate-800`) breaks the moment the accent or surface changes.
- Check contrast in **both** modes — a token that passes on dark can fail on light.

## Loading, empty and error states
Treat these as one contract: no surface is complete until all four exist.
- **Loading** → skeletons that match the real layout's shape and size, so
  nothing shifts when data arrives (CLS). A centred spinner is a fallback, not
  a design.
- **Empty** → explain what goes here and give the action that fills it. Never a
  blank panel.
- **Error** → say what failed and offer a retry; never a raw stack or a silent
  blank.
- **Loaded** → the real thing.
- Long or destructive actions show progress and disable double-submit.

## Transitions & Navigation
- Use React View Transitions (`<ViewTransition>`) for page navigation animations
- Use `startTransition` for state updates that trigger UI transitions
- Use `<Activity>` component to preserve state while hiding UI (`display: none`)

## Accessibility (WCAG 2.1 AA)
- Use semantic HTML elements: `nav`, `main`, `article`, `section`, `aside`, `header`, `footer`
- Include ARIA attributes where semantic HTML is insufficient
- All images need meaningful `alt` text (or `alt=""` for decorative)
- Minimum color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- All interactive elements must be keyboard accessible
- Focus indicators must be visible
- Form inputs must have associated labels

## Animations
- Use Framer Motion or Tailwind Animate for transitions and effects
- Respect `prefers-reduced-motion` media query
- Keep animations under 300ms for UI feedback; longer only for deliberate emphasis
- **React 19 + Motion crash-safety** (recurred 5+ times): NEVER use a shared `layoutId` across conditionally-rendered siblings (tab/nav active indicators) — use a static per-item `<span>` instead. Keyed `AnimatePresence mode="wait"` is the SAFE pattern. Don't wrap HeroUI `<Tab>` content in `motion.div` + variants. When syncing tab state to a dynamic-segment URL, use `history.replaceState`, not `router.push` (segment re-render races setState). Symptom of all these: `NotFoundError: removeChild` (Safari: "The object can not be found here"). Full detail in user memory `react19-framer-motion-crashes.md`

## SEO
- Descriptive `<title>` and `<meta description>` on every page
- Proper heading hierarchy: single `<h1>`, sequential heading levels
- Include Schema.org structured data where applicable
- Optimized Open Graph and Twitter Card metadata
