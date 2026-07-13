import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://baike84.com', output: 'static', trailingSlash: 'always', integrations: [sitemap({ filter: p => !p.includes('/404/') })] });
