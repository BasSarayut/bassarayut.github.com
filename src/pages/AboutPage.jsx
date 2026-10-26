import { Link } from 'react-router-dom';
import { ArrowUpRight, Coffee, Disc3, Utensils } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';
import Career from '../components/Career';
import RevealOnScroll, { ScrambleText, TelemetryBar, TiltSlab } from '../components/RevealOnScroll';
import { profileData } from '../data/profileData';

export default function AboutPage() {
  return (
    <>
      <SEO {...pages.about} />
      <section className="shell about-page-intro">
        <TiltSlab intensity={3.5} className="reticle-box">
          <span className="hud-tag">
            <ScrambleText text="DOSSIER // OPERATOR BIOGRAPHY" />
          </span>
          <h1>
            Hi, I’m Sarayut.<br />
            <em>I like making things.</em>
          </h1>
          <p className="large-copy">{profileData.bio}</p>
          <p>ผมทำงานเป็น Programmer ที่บริษัท ดอนเมืองพัฒนา จำกัด ดูแลระบบ E-commerce ของตลาดสี่มุมเมือง ทั้งแอปของผู้ซื้อ ผู้ขาย เว็บ และ API</p>
          <p>ผมชอบงานที่ได้เข้าใจปัญหา ร่วมคิดวิธีทำกับทีม และลงมือพัฒนาจนใช้งานได้จริง ตั้งแต่การเชื่อม Hardware กับ Software ไปจนถึงฟีเจอร์ที่ช่วยให้ขนส่งหาจุดหมายได้ง่ายขึ้น</p>
          <TelemetryBar label="SYNC RATE // FIELD OPERATION" value={96} code="BKK-SECTOR" />
          <div style={{ marginTop: '22px' }}>
            <a href="#contact" className="text-link">
              คุยเรื่องโอกาสร่วมงาน <ArrowUpRight size={16} />
            </a>
          </div>
        </TiltSlab>
        <TiltSlab intensity={6}>
          <figure className="about-photo reticle-box">
            <img src="/images/sarayut.webp" alt="Sarayut" width="600" height="676" />
            <figcaption>OP-ID: SRY-01 // USUALLY BUILDING. SOMETIMES BREWING TEA.</figcaption>
          </figure>
        </TiltSlab>
      </section>

      <section className="shell about-career">
        <RevealOnScroll className="section-heading">
          <span className="hud-watermark" aria-hidden="true">SERVICE</span>
          <div>
            <span className="hud-tag hud-tag-cyan">
              <ScrambleText text="SEC-02 // SERVICE LOG" />
            </span>
            <h2>
              The journey <em>so far.</em>
            </h2>
            <p>ประสบการณ์ที่ค่อย ๆ ต่อกันเป็นวิธีคิดและวิธีทำงาน</p>
          </div>
        </RevealOnScroll>
        <Career education />
      </section>

      <section className="about-band">
        <RevealOnScroll className="shell personal-section">
          <div>
            <span className="hud-tag">
              <ScrambleText text="SEC-03 // OFF-DUTY PROTOCOLS" />
            </span>
            <h2>
              Beyond the <em>keyboard.</em>
            </h2>
            <p>สิ่งเล็ก ๆ ที่ทำให้ยังอยากลองอะไรใหม่อยู่เสมอ</p>
          </div>
          <div className="personal-interests">
            <article className="reticle-box">
              <Coffee size={25} strokeWidth={1.6} />
              <h3>Tea, one cup at a time.</h3>
              <p>ชอบชงชา หาข้อมูล และทดลองปรับให้ได้รสชาติที่ถูกใจ โดยเฉพาะความสนใจที่เริ่มจากชาของไต้หวัน</p>
            </article>
            <article className="reticle-box">
              <Utensils size={25} strokeWidth={1.6} />
              <h3>A recipe of my own.</h3>
              <p>ชอบทำอาหารและลองสูตรใหม่ ๆ ได้ลงมือ ปรับส่วนผสม และเห็นผลลัพธ์จากสิ่งที่ทำด้วยตัวเอง</p>
            </article>
            <article className="reticle-box">
              <Disc3 size={25} strokeWidth={1.6} />
              <h3>Something that feels like me.</h3>
              <p>เพลงและปกอัลบั้มที่ชอบ กลายเป็นแรงบันดาลใจให้สร้าง ill. สำหรับแต่งวอลเปเปอร์ของตัวเอง</p>
            </article>
          </div>
          <Link className="text-link" to="/#work">
            กลับไปดูผลงาน <ArrowUpRight size={16} />
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
