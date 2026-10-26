import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';

export default function NotFoundPage() {
  return (
    <section className="shell not-found">
      <SEO {...pages.notFound} />
      <span className="hud-tag hud-tag-orange">ERR // SIGNAL LOST</span>
      <p className="not-found-number">404</p>
      <h1>A little off the path.</h1>
      <p>ไม่พบหน้าที่คุณกำลังมองหา กลับไปดูผลงานกันใหม่ได้ครับ</p>
      <Link className="button button-primary" to="/">
        <ArrowLeft size={17} /> กลับหน้าหลัก
      </Link>
    </section>
  );
}
