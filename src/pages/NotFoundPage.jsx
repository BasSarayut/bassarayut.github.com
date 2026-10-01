import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';

export default function NotFoundPage() {
  return <section className="shell not-found"><SEO {...pages.notFound} /><p className="not-found-number">404</p><h1>A little off the path.</h1><p>ไม่พบหน้าที่คุณกำลังมองหา กลับไปดูผลงานกันใหม่ได้ครับ</p><Link className="button button-primary" to="/"><ArrowLeft size={18} /> กลับหน้าหลัก</Link></section>;
}
