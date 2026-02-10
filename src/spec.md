# Specification

## Summary
**Goal:** Make the app feel fully populated with realistic sample content and fix the initial Hints expand behavior so the first hint is shown immediately.

**Planned changes:**
- Expand `frontend/src/lib/data.ts` with richer English-only dummy data: multiple books, multiple sections per book, multiple topics per section, and realistic topic fields (`meta`, `description`, plus some with `content`, `hints`, and `solution`).
- Ensure book/section summary counts (e.g., `sections`, `topics`) accurately match the expanded dataset so list/count UI is correct.
- Update `frontend/src/components/QuestionSections.tsx` so expanding the Hints section reveals the first hint immediately (not just the controls), while keeping Show Next/Show All/Hide All behavior unchanged and continuing to hide Hints entirely when `hints.length === 0`.

**User-visible outcome:** The Books, Topics, Question Detail, and Saved Questions screens look presentable with meaningful sample content, and opening Hints shows the first hint right away along with the hint controls.
