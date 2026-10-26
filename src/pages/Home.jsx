import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Coffee, Disc3, Terminal } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';
import ProjectVisual from '../components/ProjectVisual';
import Career from '../components/Career';
import RevealOnScroll, { ScrambleText, TelemetryBar, TiltSlab } from '../components/RevealOnScroll';
import { caseStudies } from '../data/caseStudies';
import { profileData } from '../data/profileData';

const filters = ['ทั้งหมด', 'งานประจำ', 'โปรเจกต์ส่วนตัว'];

export default function Home() {
  const [filter, setFilter] = useState('ทั้งหมด');
  const projects = caseStudies.filter(project => filter === 'ทั้งหมด' || project.category === filter);

  return (
    <>
      <SEO {...pages.home} />
      <section className="shell hero">
        <TiltSlab intensity={4.5} className="hero-copy reticle-box">
          <span className="hud-watermark" aria-hidden="true">OPERATOR</span>
          <div className="hero-telemetry-header">
            <span className="hud-tag">
              <ScrambleText text="SEC-01 // OPERATOR BRIEFING" />
            </span>
            <span className="hud-serial">CLASS // FULL-STACK &amp; MOBILE</span>
          </div>
          <h1>
            Good things<br />
            start with<br />
            <em>curiosity.</em>
            <span className="hero-period" aria-hidden="true">//01</span>
          </h1>
          <div className="hero-intro">
            <p className="intro-name">
              <ScrambleText text="SARAYUT (BAS)" /> <span>SOFTWARE DEVELOPER</span>
            </p>
            <p>{profileData.bio}</p>
            <TelemetryBar label="OPERATOR SYNC // READINESS" value={98} code="ENDFIELD-OS" />
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              ดูสิ่งที่ผมสร้าง <ArrowDown size={17} />
            </a>
            <Link className="text-link" to="/about">
              รู้จักผมอีกนิด <ArrowUpRight size={16} />
            </Link>
          </div>
        </TiltSlab>

        <TiltSlab intensity={6} className="hero-portrait">
          <figure className="portrait-frame reticle-box">
            <img src="/images/sarayut.webp" alt="Sarayut" width="600" height="676" fetchPriority="high" />
            <figcaption>
              <span>OP // SARAYUT — FIELD ARCHIVE</span>
              <span>LOC: BKK-TH</span>
            </figcaption>
          </figure>
          <div className="portrait-note">
            <Coffee size={22} strokeWidth={1.8} />
            <span>
              CODE, TEA,<br />
              <em>&amp; TACTICAL CURIOSITY.</em>
            </span>
          </div>
          <span className="portrait-side-note">SYS//BIOMETRIC.VERIFIED</span>
        </TiltSlab>
      </section>

      <RevealOnScroll className="shell">
        <div className="practice-strip reticle-box">
          <p>
            <span className="status-dot" /> STATUS: เปิดรับโอกาสใหม่
          </p>
          <p>
            MOBILE <span>//</span> WEB <span>//</span> BACKEND
          </p>
          <a href={profileData.github} target="_blank" rel="noreferrer">
            <ScrambleText text="GITHUB // REPOSITORY" scrambleOnMount={false} /> <ArrowUpRight size={15} />
          </a>
        </div>
      </RevealOnScroll>

      <section id="work" className="shell work-section">
        <RevealOnScroll className="section-heading">
          <span className="hud-watermark" aria-hidden="true">DEPLOYMENT</span>
          <div>
            <span className="hud-tag">
              <ScrambleText text="SEC-02 // DEPLOYED MODULES" />
            </span>
            <h2>
              Selected <em>work.</em>
            </h2>
            <p>ปัญหาจากงานจริง และไอเดียที่อยากทำให้เป็นจริง</p>
          </div>
          <div className="work-filters" role="group" aria-label="กรองผลงาน">
            {filters.map(item => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={filter === item ? 'is-active' : ''}
              >
                {item}
              </button>
            ))}
          </div>
        </RevealOnScroll>
        <p className="sr-only" aria-live="polite">แสดง {projects.length} ผลงาน</p>
        <div className={`project-grid ${projects.length === 1 ? 'single-project' : ''}`}>
          {projects.map((project, idx) => (
            <article className={`work-card reticle-box work-${project.kind}`} key={project.id}>
              <Link to={`/project/${project.id}`} className="project-image-link" aria-label={`อ่านเรื่อง ${project.name}`}>
                <ProjectVisual kind={project.kind} />
                <span className="project-open">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
              <div className="project-info">
                <div className="project-title-row">
                  <h3>
                    <Link to={`/project/${project.id}`}>
                      <ScrambleText text={project.name} scrambleOnMount={false} />
                    </Link>
                  </h3>
                  <span>{project.category}</span>
                </div>
                <p>{project.description}</p>
                <TelemetryBar
                  label={`MODULE // 0${idx + 1}`}
                  value={idx === 0 ? 96 : idx === 1 ? 94 : 90}
                  code="VERIFIED"
                />
                <ul className="tech-list" aria-label="เทคโนโลยี">
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band">
        <RevealOnScroll className="shell about-inner">
          <div className="about-statement">
            <span className="hud-tag hud-tag-cyan">
              <ScrambleText text="SEC-03 // OPERATOR PROFILE" />
            </span>
            <Terminal size={32} aria-hidden="true" />
            <h2>
              A developer.<br />
              A maker.<br />
              <em>Always curious.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>จากแอปที่เชื่อมกับอุปกรณ์จริง สู่ระบบที่คนใช้ซื้อขายทุกวัน ผมชอบเห็นสิ่งที่เขียนกลายเป็นส่วนหนึ่งของชีวิตคน</p>
            <p>นอกเวลางาน ผมอาจกำลังลองสูตรอาหาร ชงชา หรือเขียนเครื่องมือที่อยากใช้เอง ความสนุกอยู่ที่ได้ทดลอง ปรับ และทำให้มันเป็นในแบบของเรา</p>
            <div className="interest-line">
              <span><Code2 size={15} /> Building things</span>
              <span><Coffee size={15} /> Brewing tea</span>
              <span><Disc3 size={15} /> Music &amp; screens</span>
            </div>
            <Link to="/about" className="text-link">
              อ่านเรื่องราวของผม <ArrowUpRight size={16} />
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <section id="experience" className="shell experience-section">
        <RevealOnScroll className="section-heading">
          <span className="hud-watermark" aria-hidden="true">CHRONICLE</span>
          <div>
            <span className="hud-tag">
              <ScrambleText text="SEC-04 // FIELD RECORD" />
            </span>
            <h2>
              Learning by <em>building.</em>
            </h2>
            <p>แต่ละงานทำให้ได้รู้จักปัญหาคนละแบบ</p>
          </div>
          <Link to="/about#education" className="text-link">
            ประวัติการศึกษา <ArrowUpRight size={16} />
          </Link>
        </RevealOnScroll>
        <Career />
      </section>

      <RevealOnScroll>
        <section className="shell toolbox-section" id="skills">
          <div>
            <span className="hud-tag hud-tag-cyan">
              <ScrambleText text="SEC-05 // TECH ARSENAL" />
            </span>
            <h2>Tools I work with.</h2>
            <p>เลือกใช้ให้เหมาะกับสิ่งที่กำลังสร้าง</p>
          </div>
          <div className="toolbox">
            <div className="reticle-box">
              <span>MOD-A // Mobile &amp; devices</span>
              <p>Flutter · Kotlin · Java</p>
              <TelemetryBar label="FIELD DEPLOYMENT" value={95} code="MOBILE" />
            </div>
            <div className="reticle-box">
              <span>MOD-B // Web &amp; backend</span>
              <p>React · TypeScript · Laravel · Node.js · MySQL</p>
              <TelemetryBar label="SYSTEM INTEGRATION" value={92} code="FULL-STACK" />
            </div>
            <div className="reticle-box">
              <span>MOD-C // Personal experiments &amp; delivery</span>
              <p>SwiftUI · AppKit · Canvas · GitHub Actions</p>
              <TelemetryBar label="R&D LABS" value={88} code="UTILITY" />
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll className="shell">
        <section className="journal-prompt reticle-box">
          <div>
            <span className="hud-tag">
              <ScrambleText text="SEC-06 // TRANSMISSION LOGS" />
            </span>
            <h2>A few things along the way.</h2>
            <p>พื้นที่เก็บบทความและเรื่องที่สนใจระหว่างทาง</p>
          </div>
          <Link to="/blog" className="text-link">
            เปิด Journal <ArrowRight size={17} />
          </Link>
        </section>
      </RevealOnScroll>
    </>
  );
}
