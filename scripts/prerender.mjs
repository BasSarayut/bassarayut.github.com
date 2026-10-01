import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { headTags, indexableRoutes, pages, SITE_URL } from '../src/seo.js';

const dist = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', dist), 'utf8');
const escape = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderHead(meta) {
  const { title, tags } = headTags(meta);
  const html = tags.map(({ tag, attrs, content }) => {
    const attributes = Object.entries({ ...attrs, 'data-rh': 'true' }).map(([key, value]) => `${key}="${escape(value)}"`).join(' ');
    return tag === 'script' ? `<script ${attributes}>${content.replace(/</g, '\\u003c')}</script>` : `<${tag} ${attributes}>`;
  });
  return [`<title>${escape(title)}</title>`, ...html].join('\n    ');
}

async function writePage(file, meta) {
  const target = new URL(file, dist);
  await mkdir(dirname(fileURLToPath(target)), { recursive: true });
  await writeFile(target, template.replace(/<title>.*?<\/title>/s, renderHead(meta)));
}

const routes = indexableRoutes();
// Cloudflare Pages serves `about.html` at `/about`; a top-level 404.html returns a real 404 status for unknown paths.
for (const meta of routes) await writePage(meta.path === '/' ? 'index.html' : `${meta.path.slice(1)}.html`, meta);
await writePage('404.html', pages.notFound);

const urls = routes.map(({ path }) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n');
await writeFile(new URL('sitemap.xml', dist), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`prerendered ${routes.length} routes + 404.html, sitemap.xml`);
