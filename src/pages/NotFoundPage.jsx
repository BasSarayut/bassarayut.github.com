import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';

export default function NotFoundPage() {
  return (
    <section className="shell not-found">
      <SEO {...pages.notFound} />
      <div className="section-kicker">
        <strong>ERR // 404</strong>
        <span>SIGNAL LOST</span>
      </div>
      <p className="not-found-number">404</p>
      <h1>[A little off the path]</h1>
      <p>ไม่พบหน้าที่คุณกำลังมองหา กลับไปดูผลงานกันใหม่ได้ครับ</p>
      <Link className="endfield-capsule" to="/">
        <ArrowLeft size={16} style={{ marginRight: '8px' }} /> กลับหน้าหลัก
      </Link>
    </section>
  );
}
