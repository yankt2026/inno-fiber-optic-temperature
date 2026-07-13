# Card Interaction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify listing-card links and add consistent accessible hover behavior.

**Architecture:** Existing Astro list templates retain heading anchors. A `linked-card` class enables a stretched heading link and shared CSS interaction states; product images receive explicit anchors.

**Tech Stack:** Astro, native CSS, Node test runner.

## Global Constraints

- Preserve static HTML and existing routes.
- Preserve product images with `object-fit: contain`.
- Do not add client-side JavaScript.

---

### Task 1: Card behavior

**Files:** Modify `src/pages/index.astro`, `src/pages/products/index.astro`, `src/pages/solutions/index.astro`, `src/pages/technology/index.astro`, `src/pages/resources/index.astro`, `src/styles/global.css`; test `tests/site.test.mjs`.

**Interfaces:** `linked-card` marks cards whose heading anchor expands across the card; `product-image-link` marks linked product images.

- [ ] Add a failing source test requiring linked cards, linked product images, removed duplicate CTA labels, and hover/focus/reduced-motion CSS.
- [ ] Run `npm test` and confirm the new test fails for missing `linked-card` behavior.
- [ ] Update the five Astro listing templates and shared CSS.
- [ ] Run `npm test`, `npm run check`, and `npm run build`.
