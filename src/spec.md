# Specification

## Summary
**Goal:** Switch the site’s primary/brand color palette from purple/blue to a green-based palette across both light and dark themes while preserving readability and contrast.

**Planned changes:**
- Update theme design tokens/CSS variables in `frontend/src/index.css` (e.g., `--primary`, `--ring`, and other purple/blue-tinted tokens such as accents/chart colors) to green-toned equivalents for both light and dark mode.
- Adjust any non-component utility styles that hardcode purple/blue hues (e.g., `.gradient-text` using a blue gradient endpoint) so UI accents read as green-themed.
- Verify common UI surfaces (primary buttons, links/accents, focus rings, header/icon accents) no longer show obvious purple/blue brand coloring, while keeping semantic colors (e.g., destructive red) unchanged.

**User-visible outcome:** In both light and dark mode, the app’s primary actions, accents, and focus styles appear green-themed (including gradient text), with good contrast and no lingering purple/blue brand accents.
