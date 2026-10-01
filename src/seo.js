import { blogPosts } from './data/blogPosts.js';
import { caseStudies } from './data/caseStudies.js';
import { profileData } from './data/profileData.js';

export const SITE_URL = 'https://sarayuts.com';
const SITE_NAME = 'Sarayut (Bas)';
const OG_IMAGE = `${SITE_URL}/images/og.jpg`;
const DEFAULT_TITLE = 'Sarayut (Bas) — Software Developer · Flutter, React, Full-stack';
const DEFAULT_DESCRIPTION = 'Sarayut (Bas) Software Developer ในกรุงเทพฯ และรับงาน Remote พัฒนา Flutter Mobile App, เว็บ React และ Backend ด้วย Laravel/Node.js ดูผลงาน ประสบการณ์ และช่องทางติดต่อ';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profileData.name,
  alternateName: ['Bas', 'Bas Sarayut'],
  url: SITE_URL,
  image: `${SITE_URL}/images/sarayut.webp`,
  email: `mailto:${profileData.email}`,
  jobTitle: profileData.title,
  address: { '@type': 'PostalAddress', addressLocality: 'Bangkok', addressCountry: 'TH' },
  knowsAbout: ['Flutter', 'Mobile App Development', 'Android', 'React', 'Frontend Development', 'Full-stack Development', 'Laravel', 'Node.js', 'MySQL', 'REST API', 'POS/EDC'],
  alumniOf: profileData.education.map(item => ({ '@type': 'EducationalOrganization', name: item.school })),
  sameAs: [profileData.github],
};

export const pages = {
  home: { path: '/' },
  about: { title: 'About', path: '/about', description: 'รู้จัก Sarayut (Bas) Software Developer ประสบการณ์ Flutter, Android, POS/EDC, เว็บ React และ API ด้วย Laravel/Node.js พร้อมประวัติการทำงานและการศึกษา' },
  blog: { title: 'Journal', path: '/blog', description: 'บทความเกี่ยวกับการพัฒนาเว็บ การออกแบบ และเทคโนโลยี โดย Sarayut (Bas) Software Developer' },
  notFound: { title: 'ไม่พบหน้านี้', noindex: true },
};

export const projectMeta = project => ({ title: `${project.name} · Case study`, description: project.description, path: `/project/${project.id}` });
export const postMeta = post => ({ title: post.title, description: post.excerpt, path: `/blog/${post.id}`, type: 'article' });

export const indexableRoutes = () => [pages.home, pages.about, ...caseStudies.map(projectMeta), pages.blog, ...blogPosts.map(postMeta)];

export function headTags({ title, description, path = '/', noindex = false, type = 'website' }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
  const summary = description || DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${path}`;
  const meta = (key, name, content) => ({ tag: 'meta', attrs: { [key]: name, content } });
  return {
    title: fullTitle,
    tags: [
      meta('name', 'description', summary),
      meta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow'),
      { tag: 'link', attrs: { rel: 'canonical', href: canonical } },
      meta('property', 'og:site_name', SITE_NAME),
      meta('property', 'og:title', fullTitle),
      meta('property', 'og:description', summary),
      meta('property', 'og:url', canonical),
      meta('property', 'og:type', type),
      meta('property', 'og:locale', 'th_TH'),
      meta('property', 'og:image', OG_IMAGE),
      meta('property', 'og:image:width', '1200'),
      meta('property', 'og:image:height', '630'),
      meta('property', 'og:image:alt', 'Sarayut (Bas) — Software Developer'),
      meta('name', 'twitter:card', 'summary_large_image'),
      meta('name', 'twitter:title', fullTitle),
      meta('name', 'twitter:description', summary),
      meta('name', 'twitter:image', OG_IMAGE),
      { tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify(personSchema) },
    ],
  };
}
