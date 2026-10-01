import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url = '/', noindex = false }) {
  const fullTitle = title ? `${title} — Sarayut` : 'Sarayut — Software Developer';
  const summary = description || 'Software Developer ที่พัฒนา Mobile, Web และ Backend ชอบแก้ปัญหาและสร้างเครื่องมือที่ใช้ได้จริง รู้จัก Sarayut ผ่านผลงานและประสบการณ์การทำงาน';
  const canonical = `https://sarayuts.com${url}`;
  return <Helmet><title>{fullTitle}</title><meta name="description" content={summary} /><meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} /><link rel="canonical" href={canonical} /><meta property="og:title" content={fullTitle} /><meta property="og:description" content={summary} /><meta property="og:url" content={canonical} /><meta property="og:type" content="website" /><meta property="og:image" content="https://sarayuts.com/images/sarayut.webp" /><meta property="og:locale" content="th_TH" /><meta name="twitter:card" content="summary" /><script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Sarayut', url: 'https://sarayuts.com', jobTitle: 'Software Developer', sameAs: ['https://github.com/bassarayut'] })}</script></Helmet>;
}
