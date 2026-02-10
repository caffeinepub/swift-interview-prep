# Specification

## Summary
**Goal:** Add app-wide light/dark theme support with a persistent, accessible toggle in the header.

**Planned changes:**
- Implement Tailwind class-based dark mode by toggling the `dark` class on `document.documentElement`, leveraging existing CSS variables in `frontend/src/index.css`.
- Add a light/dark theme toggle control to `frontend/src/components/AppHeader.tsx` with accessible English `aria-label` text and full keyboard operability.
- Persist the user’s theme choice in `localStorage`, initialize on app load, and default to the system color scheme (`prefers-color-scheme`) when no saved preference exists.

**User-visible outcome:** Users can switch between Light and Dark themes from the header, see the theme apply across all pages, and have their preference remembered across refreshes (or follow system theme by default).
