# INNO Fiber Optic Temperature Website

English static Astro website for point-based fluorescent fiber optic temperature sensing.

## Local development

Install Node.js 20 or newer, then run:

```text
npm install
npm run dev
```

Create a production build with `npm run build`. Output is written to `dist`. Run `npm test` and `npm run check` before deployment.

## GitHub setup

Initialize Git with `git init`, review files, create the first commit, create an empty GitHub repository, add its remote URL, and push the main branch. Do not commit secret form keys or local environment files.

## Cloudflare Pages

Connect the GitHub repository in Cloudflare Pages and use:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Bind the custom domain after the first deployment. Cloudflare provisions HTTPS automatically after DNS validation.

## Production URL

The production URL is `https://baike84.com`. It is configured in `src/config/site.ts`, `astro.config.mjs`, and `public/robots.txt`, so canonical URLs, structured data and the XML sitemap use the live domain.

## Images

Original images remain in the root. Website copies live below `public/images/`. Do not modify the original logo or product images. Preserve proportions and record every assignment in `src/data/imageInventory.ts` and `IMAGE-INVENTORY.md`.

## Products and articles

Add products in `src/data/products.ts`; a static detail page is generated from the slug. Add resource definitions in `src/data/pages.ts`. Astro Content Collections are configured in `src/content.config.ts` for future Markdown editorial migration.

## Contact

The Contact page uses a direct `mailto:` link to `fjinnonet@gmail.com` and does not collect or submit visitor data through a web form. If a form is added later, use a server-side service with validation, rate limiting, privacy disclosure and secret keys stored outside browser code.

## Maintenance

See `CONTENT-GUIDE.md`, `SEO-KEYWORD-MAP.md`, `IMAGE-INVENTORY.md`, and `DEPLOYMENT-CHECKLIST.md`.
