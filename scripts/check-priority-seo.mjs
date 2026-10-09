import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const routes = [
  '/solutions/dry-type-transformer-temperature-monitoring/',
  '/solutions/transformer-fiber-optic-temperature-monitoring/',
  '/products/',
  '/resources/what-is-a-fiber-optic-temperature-sensor/',
  '/resources/how-fiber-optic-temperature-sensors-work/'
];
const sitemap = readFileSync(resolve('dist/sitemap.xml'), 'utf8');
const bodies = new Set();
for (const route of routes) {
  const html = readFileSync(resolve('dist', `.${route}`, 'index.html'), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.ok(html.includes(`<link rel="canonical" href="https://rootsir.com${route}"`), route);
  assert.ok(sitemap.includes(`<loc>https://rootsir.com${route}</loc>`), route);
  assert.doesNotMatch(html, /<meta[^>]+(?:name="robots"[^>]+content="[^"]*noindex|content="[^"]*noindex[^>]+name="robots")/i);
  for (const [, json] of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(json);
  const body = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>\s*<p>([\s\S]*?)<\/p>/g)].map(match => match[2]).join('\n');
  assert.ok(body.length > 0, route);
  assert.ok(!bodies.has(body), `Duplicate main text: ${route}`);
  bodies.add(body);
  if (route.startsWith('/resources/')) {
    const related = html.match(/<h2>Related products and engineering guides<\/h2>([\s\S]*?)<\/ul>/)?.[1];
    assert.ok(related, `Missing related reading: ${route}`);
    assert.ok(!related.includes(`href="${route}"`), `Self-link in related reading: ${route}`);
  }
  console.log(`PASS ${route}: H1, metadata, canonical, sitemap, schema and distinct main text`);
}
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 48);
assert.equal(new Set(urls).size, 48);
assert.ok(urls.every(url => url.startsWith('https://rootsir.com/') && !url.includes('/404')));
assert.ok(readFileSync(resolve('dist/robots.txt'), 'utf8').includes('Sitemap: https://rootsir.com/sitemap.xml'));
console.log('PASS sitemap: 48 unique canonical URLs; robots advertises the generated sitemap');
