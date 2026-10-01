import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { pages } from '../seo';

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const posts = blogPosts.filter(post => `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="shell journal-page"><SEO {...pages.blog} /><header className="journal-header"><h1>Notes along<br /><em>the way.</em></h1><p>พื้นที่เก็บบทความเรื่องการพัฒนาและการออกแบบ<br />สิ่งที่น่าสนใจระหว่างทางของการสร้างซอฟต์แวร์</p></header><label className="search-field"><Search size={19} aria-hidden="true" /><span className="sr-only">ค้นหาบทความ</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="ค้นหาบทความหรือหัวข้อ…" /></label><div className="journal-list" aria-live="polite">{posts.length ? posts.map(post => <article key={post.id}><div className="journal-date"><span>{post.category}</span><time>{post.date}</time></div><div><h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2><p>{post.excerpt}</p></div><Link to={`/blog/${post.id}`} className="icon-button" aria-label={`อ่าน ${post.title}`}><ArrowUpRight size={25} /></Link></article>) : <div className="empty-state"><h2>ยังไม่พบบทความที่ตรงกัน</h2><p>ลองใช้คำอื่น เช่น React, Design หรือ Cloud</p><button className="button button-secondary" onClick={() => setQuery('')}>ดูบทความทั้งหมด</button></div>}</div></section>;
}
