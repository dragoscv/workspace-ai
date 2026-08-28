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

## Theming
- Support light and dark mode using Tailwind's `dark:` variant
- Tailwind v4: use `@theme` in CSS for theming; no `tailwind.config.js`
- Define design tokens in `@theme` block: colors, spacing, fonts, border-radius
- Consistent color system: define semantic color names (primary, secondary, accent, error)

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
- **React 19 + Motion crash-safety** (recurred 5+ times): NEVER use a shared `layoutId` across conditionally-rendered siblings (tab/nav active indicators) â€” use a static per-item `<span>` instead. Keyed `AnimatePresence mode="wait"` is the SAFE pattern. Don't wrap HeroUI `<Tab>` content in `motion.div` + variants. When syncing tab state to a dynamic-segment URL, use `history.replaceState`, not `router.push` (segment re-render races setState). Symptom of all these: `NotFoundError: removeChild` (Safari: "The object can not be found here"). Full detail in user memory `react19-framer-motion-crashes.md`

## SEO
- Descriptive `<title>` and `<meta description>` on every page
- Proper heading hierarchy: single `<h1>`, sequential heading levels
- Include Schema.org structured data where applicable
- Optimized Open Graph and Twitter Card metadata
