# Deployment Checklist

- [x] Production domain set to `https://baike84.com` in site configuration, Astro configuration, and robots.txt.
- [ ] Run `npm install`, `npm test`, `npm run check`, and `npm run build`.
- [ ] Confirm `dist/sitemap-index.xml` and `dist/robots.txt` use the production domain.
- [ ] Confirm every product specification against the selected model datasheet.
- [ ] Configure `formEndpoint` or retain the honest email fallback.
- [ ] Push the repository to GitHub.
- [ ] Connect the repository in Cloudflare Pages with preset Astro, build command `npm run build`, output `dist`, root `/`.
- [ ] Bind the custom domain and verify HTTPS, canonical URLs, Open Graph metadata and redirects.
- [ ] Submit the production sitemap in Google Search Console.
