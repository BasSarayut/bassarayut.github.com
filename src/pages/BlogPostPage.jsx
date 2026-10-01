import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { postMeta } from '../seo';
import NotFoundPage from './NotFoundPage';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(item => String(item.id) === id);
  if (!post) return <NotFoundPage />;
  return <article className="shell article-page"><SEO {...postMeta(post)} /><Link className="text-link back-link" to="/blog"><ArrowLeft size={17} /> กลับไป Journal</Link><header><h1>{post.title}</h1><div className="article-meta"><span>{post.category}</span><time>{post.date}</time></div><p className="large-copy">{post.excerpt}</p></header><div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} /><Link className="text-link" to="/blog"><ArrowLeft size={17} /> บทความทั้งหมด</Link></article>;
}
