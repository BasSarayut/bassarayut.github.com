import { Link } from 'react-router-dom';
import { ArrowUpRight, Coffee, Disc3, Utensils } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';
import Career from '../components/Career';
import { profileData } from '../data/profileData';

export default function AboutPage() {
  return <>
    <SEO {...pages.about} />
    <section className="shell about-page-intro">
      <div><h1>Hi, I’m Sarayut.<br /><em>I like making things.</em></h1><p className="large-copy">{profileData.bio}</p><p>ผมทำงานเป็น Programmer ที่บริษัท ดอนเมืองพัฒนา จำกัด ดูแลระบบ E-commerce ของตลาดสี่มุมเมือง ทั้งแอปของผู้ซื้อ ผู้ขาย เว็บ และ API</p><p>ผมชอบงานที่ได้เข้าใจปัญหา ร่วมคิดวิธีทำกับทีม และลงมือพัฒนาจนใช้งานได้จริง ตั้งแต่การเชื่อม Hardware กับ Software ไปจนถึงฟีเจอร์ที่ช่วยให้ขนส่งหาจุดหมายได้ง่ายขึ้น</p><a href="#contact" className="text-link">คุยเรื่องโอกาสร่วมงาน <ArrowUpRight size={18} /></a></div>
      <figure className="about-photo"><img src="/images/sarayut.webp" alt="Sarayut" width="600" height="676" /><figcaption>Usually building something. Sometimes brewing tea.</figcaption></figure>
    </section>
    <section className="shell about-career"><div className="section-heading"><div><h2>The journey <em>so far.</em></h2><p>ประสบการณ์ที่ค่อย ๆ ต่อกันเป็นวิธีคิดและวิธีทำงาน</p></div></div><Career education /></section>
    <section className="about-band"><div className="shell personal-section"><div><h2>Beyond the <em>keyboard.</em></h2><p>สิ่งเล็ก ๆ ที่ทำให้ยังอยากลองอะไรใหม่อยู่เสมอ</p></div><div className="personal-interests"><article><Coffee size={27} strokeWidth={1.4} /><h3>Tea, one cup at a time.</h3><p>ชอบชงชา หาข้อมูล และทดลองปรับให้ได้รสชาติที่ถูกใจ โดยเฉพาะความสนใจที่เริ่มจากชาของไต้หวัน</p></article><article><Utensils size={27} strokeWidth={1.4} /><h3>A recipe of my own.</h3><p>ชอบทำอาหารและลองสูตรใหม่ ๆ ได้ลงมือ ปรับส่วนผสม และเห็นผลลัพธ์จากสิ่งที่ทำด้วยตัวเอง</p></article><article><Disc3 size={27} strokeWidth={1.4} /><h3>Something that feels like me.</h3><p>เพลงและปกอัลบั้มที่ชอบ กลายเป็นแรงบันดาลใจให้สร้าง ill. สำหรับแต่งวอลเปเปอร์ของตัวเอง</p></article></div><Link className="text-link" to="/#work">กลับไปดูผลงาน <ArrowUpRight size={18} /></Link></div></section>
  </>;
}
