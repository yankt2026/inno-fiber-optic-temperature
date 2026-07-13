# INNO Fiber Optic Temperature Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete English Astro/TypeScript static B2B website for INNO fluorescent fiber optic temperature sensing.

**Architecture:** Data-driven Astro pages render confirmed products, solution guides, technology explainers, and resources through shared layouts. Native CSS and minimal browser JavaScript provide responsive navigation and honest static-form behavior. All product images remain local and unmodified.

**Tech Stack:** Astro, TypeScript, Astro Content Collections, Markdown, native CSS, Node test runner.

## Global Constraints

- Static output only; no React, Vue, remote product images, or invented specifications.
- Visible website content is English and uses `fjinnonet@gmail.com` from central configuration.
- Product parameters come only from the permitted INNO Products pages.
- Product images use `object-fit: contain`; image-free products have no placeholder frame.
- Canonicals initially use `https://example.com` and must be replaced before production.

---

### Task 1: Validation contract and project foundation

**Files:** Create `package.json`, `astro.config.mjs`, `tsconfig.json`, `tests/site.test.mjs`.

**Interfaces:** Produces Astro build scripts and an automated acceptance suite consumed by all later tasks.

- [ ] Write tests that require configuration, data, content, metadata, sitemap, image integrity, and email consistency.
- [ ] Run `npm test` and verify failure because implementation files do not exist.
- [ ] Add the minimal Astro project configuration and directory foundation.

### Task 2: Data, imagery, and shared presentation

**Files:** Create `src/config/site.ts`, `src/data/*.ts`, `src/layouts/BaseLayout.astro`, `src/components/*.astro`, `src/styles/global.css`, organized `public/images/**` copies.

**Interfaces:** Data exports drive all pages; BaseLayout accepts title, description, breadcrumbs, schema, and canonical path.

- [ ] Build the local image inventory with exact paths and confidence.
- [ ] Add confirmed product fields and conservative fallback statements.
- [ ] Implement responsive header, footer, breadcrumb, CTA, FAQ, cards, and technical system diagrams.

### Task 3: Product and solution page families

**Files:** Create `src/pages/products/**`, `src/pages/solutions/**`, and reusable detail templates.

**Interfaces:** Static paths consume `products`, `solutions`, and shared SEO metadata.

- [ ] Render category pages and confirmed product pages.
- [ ] Render seven application-specific solution pages with unique risks, measurement points, installation guidance, FAQs, and related products.

### Task 4: Technology, resource, and core pages

**Files:** Create `src/content/resources/*.md`, `src/pages/resources/**`, `src/pages/technology/**`, homepage, About, Contact, Privacy, sitemap, and 404.

**Interfaces:** Astro Content Collection schema validates resource frontmatter and dynamic resource routes.

- [ ] Create substantial query-first technical resources with tables, limitations, FAQs, internal links, and CTA.
- [ ] Implement homepage sections, contact form validation and honest email fallback, plus corporate pages.

### Task 5: Technical SEO and deployment documentation

**Files:** Create `public/robots.txt`, sitemap generation, `README.md`, `DEPLOYMENT-CHECKLIST.md`, `CONTENT-GUIDE.md`, `SEO-KEYWORD-MAP.md`, `IMAGE-INVENTORY.md`.

**Interfaces:** Static output is deployable to Cloudflare Pages with `npm run build` and output `dist`.

- [ ] Add unique metadata, canonicals, Open Graph, JSON-LD, breadcrumbs, and sitemap coverage.
- [ ] Document installation, GitHub, Cloudflare Pages, custom domain, content, images, products, articles, and form integration.
- [ ] Run tests, Astro check, build, and post-build link/image/email audits; correct every failure.
