import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root=dirname(dirname(fileURLToPath(import.meta.url))),dist=join(root,'dist');
const files=[];const walk=d=>{for(const n of readdirSync(d)){const p=join(d,n);statSync(p).isDirectory()?walk(p):files.push(p)}};walk(dist);
const htmlFiles=files.filter(f=>f.endsWith('.html'));

test('static build contains required SEO outputs',()=>{
  assert.ok(existsSync(join(dist,'sitemap-index.xml')));
  assert.ok(existsSync(join(dist,'robots.txt')));
  assert.equal(htmlFiles.length,49);
});

test('every HTML page has one H1 and a unique title',()=>{
  const titles=new Set();
  for(const f of htmlFiles){const h=readFileSync(f,'utf8');assert.equal((h.match(/<h1[ >]/gi)||[]).length,1,f);const title=h.match(/<title>(.*?)<\/title>/i)?.[1];assert.ok(title,f);assert.ok(!titles.has(title),`duplicate title: ${title}`);titles.add(title)}
});

test('local image and internal page targets exist',()=>{
  for(const f of htmlFiles){const h=readFileSync(f,'utf8');for(const [,src] of h.matchAll(/<img[^>]+src="([^"]+)"/gi)){if(src.startsWith('/'))assert.ok(existsSync(join(dist,...src.slice(1).split('/'))),`${f}: ${src}`)}for(const [,href] of h.matchAll(/href="(\/[^"#?]*)"/gi)){if(href==='/404/'||/\.[a-z0-9]+$/i.test(href))continue;const target=href==='/'?join(dist,'index.html'):join(dist,...href.replace(/^\/+|\/+$/g,'').split('/'),'index.html');assert.ok(existsSync(target),`${f}: ${href}`)}}
});

test('built pages contain only the approved contact email',()=>{
  const emails=new Set(htmlFiles.flatMap(f=>[...readFileSync(f,'utf8').matchAll(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g)].map(m=>m[0])));assert.deepEqual([...emails],['fjinnonet@gmail.com']);
});

test('production URLs use baike84.com without the placeholder domain',()=>{
  const output=files.filter(f=>/\.(html|xml|txt)$/.test(f)).map(f=>readFileSync(f,'utf8')).join('\n');
  assert.ok(output.includes('https://baike84.com'));
  assert.ok(!output.includes('example.com'));
});
