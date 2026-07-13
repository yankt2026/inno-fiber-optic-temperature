import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/(.:)/, '$1');
const required = ['astro.config.mjs','src/config/site.ts','src/data/products.ts','src/data/imageInventory.ts','src/pages/index.astro','src/pages/contact.astro','src/pages/404.astro','public/robots.txt','SEO-KEYWORD-MAP.md','IMAGE-INVENTORY.md','README.md'];

test('required site architecture exists', () => {
  for (const file of required) assert.ok(existsSync(join(root, file)), `missing ${file}`);
});

test('source centralizes the required email and avoids image placeholders', () => {
  const files = [];
  const walk = (dir) => { for (const name of readdirSync(dir)) { const p=join(dir,name); statSync(p).isDirectory()?walk(p):files.push(p); } };
  walk(join(root,'src'));
  const source = files.filter(f=>/\.(astro|ts|md)$/.test(f)).map(f=>readFileSync(f,'utf8')).join('\n');
  assert.ok(source.includes('fjinnonet@gmail.com'));
  assert.ok(!source.includes('placeholder.webp'));
  assert.ok(!source.includes('object-fit: cover'));
});

test('listing cards use one primary text link, linked product images, and accessible hover states', () => {
  const listingFiles=['src/pages/index.astro','src/pages/products/index.astro','src/pages/solutions/index.astro','src/pages/technology/index.astro','src/pages/resources/index.astro'];
  const source=listingFiles.map(file=>readFileSync(join(root,file),'utf8')).join('\n');
  for(const label of ['Technical details →','Explore application →','Read guide →','Explore technology →','Review specifications →','Read resource →']) assert.ok(!source.includes(label),`duplicate CTA remains: ${label}`);
  assert.ok(source.includes('linked-card'));
  const home=readFileSync(join(root,'src/pages/index.astro'),'utf8');
  assert.ok(home.includes('product-image-link'));
  assert.ok(!home.includes('<CTA'));
  assert.ok(readFileSync(join(root,'src/pages/products/index.astro'),'utf8').includes('product-image-link'));
  const css=readFileSync(join(root,'src/styles/cards.css'),'utf8');
  assert.match(css,/\.linked-card:hover/);
  assert.match(css,/\.linked-card:focus-within/);
  assert.match(css,/prefers-reduced-motion/);
});

test('contact page uses direct email without an inquiry form', () => {
  const contact=readFileSync(join(root,'src/pages/contact.astro'),'utf8');
  assert.ok(!contact.includes('<form'));
  assert.ok(!contact.includes('fetch('));
  assert.ok(contact.includes('mailto:${site.email}'));
});
