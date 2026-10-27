import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Coffee, Disc3 } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';
import ProjectVisual from '../components/ProjectVisual';
import Career from '../components/Career';
import RevealOnScroll, { TelemetryBar } from '../components/RevealOnScroll';
import { caseStudies } from '../data/caseStudies';
import { profileData } from '../data/profileData';

const filters = ['ทั้งหมด', 'งานประจำ', 'โปรเจกต์ส่วนตัว'];

const aicModules = [
  {
    code: '01 / 03',
    id: 'AIC-MOB',
    title: 'Mobile & Hardware Integration',
    subtitle: 'แอปพลิเคชันมือถือและอุปกรณ์หน้างานจริง',
    stack: ['Flutter', 'Kotlin', 'Java', 'POS / EDC', 'Google Maps SDK'],
    summary:
      'พัฒนาแอปทั้งฝั่งผู้ซื้อและผู้ขายในระบบ E-commerce รวมถึงการเชื่อมต่อ Hardware หน้างาน เช่น เครื่อง POS, EDC, เครื่องอ่านบัตรประชาชน และ Passport บนระบบ Android Kiosk',
    metric: 96,
  },
  {
    code: '02 / 03',
    id: 'AIC-WEB',
    title: 'Web Platform & Backend API',
    subtitle: 'ระบบเว็บแอดมินและ API ที่รองรับการซื้อขายทุกวัน',
    stack: ['React', 'TypeScript', 'Laravel', 'Node.js', 'MySQL'],
    summary:
      'ออกแบบและพัฒนา REST API, ระบบจัดการหลังบ้าน และเชื่อมต่อข้อมูลพิกัด/คำสั่งซื้อระหว่างแอปผู้ซื้อ ผู้ขาย และทีมขนส่งให้ทำงานบนฐานข้อมูลเดียวกันอย่างแม่นยำ',
    metric: 94,
  },
  {
    code: '03 / 03',
    id: 'AIC-LAB',
    title: 'Personal Utilities & Creative Tools',
    subtitle: 'เครื่องมือบน macOS และเว็บสตูดิโอที่สร้างขึ้นมาใช้เอง',
    stack: ['SwiftUI', 'AppKit', 'HTML5 Canvas', 'GitHub Actions'],
    summary:
      'ทดลองสร้างเครื่องมือที่แก้ปัญหาในชีวิตประจำวัน เช่น สตูดิโอแต่งวอลเปเปอร์ ill. บนเว็บ และแอป Notchy ที่เปลี่ยนพื้นที่รอบ Notch บน Mac ให้เป็นศูนย์รวมเพลงและโน้ต',
    metric: 91,
  },
];

export default function Home() {
  const [filter, setFilter] = useState('ทั้งหมด');
  const [activeWorkIdx, setActiveWorkIdx] = useState(0);
  const [activeAicIdx, setActiveAicIdx] = useState(0);

  const projects = caseStudies.filter(project => filter === 'ทั้งหมด' || project.category === filter);
  const safeWorkIdx = projects.length ? activeWorkIdx % projects.length : 0;
  const activeAic = aicModules[activeAicIdx];

  const stepWork = dir => {
    if (!projects.length) return;
    setActiveWorkIdx(prev => (prev + dir + projects.length) % projects.length);
  };

  const stepAic = dir => {
    setActiveAicIdx(prev => (prev + dir + aicModules.length) % aicModules.length);
  };

  return (
    <>
      <SEO {...pages.home} />
      <section id="hero-sec" className="shell hero crosshair-frame">
        <span className="corner-plus corner-tl" aria-hidden="true">+</span>
        <span className="corner-plus corner-tr" aria-hidden="true">+</span>
        <span className="corner-plus corner-bl" aria-hidden="true">+</span>
        <span className="corner-plus corner-br" aria-hidden="true">+</span>

        <div className="hero-copy">
          <div>
            <div className="operator-rec-bar">
              <span className="rec-badge">
                <span className="rec-dot" aria-hidden="true" />
                ENDFIELD // [REC]
              </span>
              <span className="operator-fraction">
                <strong>Sr</strong> 01 / 01
              </span>
            </div>

            <div className="operator-bracket-name">
              <span>[Sarayut]</span>
              <span>/// ศรายุทธ (บาส) · OP-01</span>
            </div>

            <h1>
              Good things<br />
              start with<br />
              <em>curiosity.</em>
            </h1>

            <div className="operator-meta-grid" aria-label="ข้อมูลสรุปผู้พัฒนา">
              <div className="operator-meta-cell">
                <span>สังกัด / Faction</span>
                <strong>ดอนเมืองพัฒนา (ตลาดสี่มุมเมือง)</strong>
              </div>
              <div className="operator-meta-cell">
                <span>สายงาน / Class</span>
                <strong>Software Developer</strong>
              </div>
              <div className="operator-meta-cell">
                <span>เทคโนโลยีหลัก / Stack</span>
                <strong>Flutter · React · Laravel · Node.js</strong>
              </div>
              <div className="operator-meta-cell">
                <span>พื้นที่ / Sector</span>
                <strong>Bangkok, TH · Remote</strong>
              </div>
            </div>

            <blockquote className="operator-quote">
              “{profileData.bio}”
            </blockquote>
          </div>

          <div className="hero-actions">
            <a className="endfield-capsule" href="#work">
              ดูสิ่งที่ผมสร้าง
            </a>
            <Link className="text-link bracket-anim" to="/about">
              [รู้จักผมอีกนิด] <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <figure className="portrait-frame crosshair-frame">
            <span className="corner-plus corner-tl" aria-hidden="true">+</span>
            <span className="corner-plus corner-tr" aria-hidden="true">+</span>
            <img src="/images/sarayut.webp" alt="Sarayut" width="600" height="676" fetchPriority="high" />
            <figcaption>
              <span>[Sarayut, away from the keyboard]</span>
              <span>01 / 01 · TH</span>
            </figcaption>
          </figure>
          <div className="portrait-note">
            <Coffee size={20} strokeWidth={1.6} />
            <span>
              Code, tea, <em>&amp; a little curiosity.</em>
            </span>
          </div>
        </div>
      </section>

      <div className="shell practice-strip">
        <p>
          <span className="status-dot" /> /// เปิดรับโอกาสใหม่ (Available for Hire)
        </p>
        <p>
          Mobile <span>/</span> Web <span>/</span> Backend
        </p>
        <a className="bracket-anim" href={profileData.github} target="_blank" rel="noreferrer">
          [GitHub Profile] <ArrowUpRight size={14} />
        </a>
      </div>

      <section id="work" className="shell work-section">
        <RevealOnScroll className="section-heading">
          <div>
            <div className="section-kicker">
              <strong>01 / 04</strong>
              <span>/// SELECTED WORK · ผลงานคัดสรร</span>
            </div>
            <h2>
              Selected <em>work.</em>
            </h2>
            <p>ปัญหาจากงานจริง และไอเดียที่อยากทำให้เป็นจริง</p>
          </div>

          <div className="work-controls-cluster">
            <div className="endfield-pager" aria-label="สลับโปรเจกต์">
              <button type="button" onClick={() => stepWork(-1)} aria-label="โปรเจกต์ก่อนหน้า">
                <ArrowLeft size={13} /> LAST
              </button>
              <span className="pager-count">
                0{safeWorkIdx + 1} / 0{projects.length}
              </span>
              <button type="button" onClick={() => stepWork(1)} aria-label="โปรเจกต์ถัดไป">
                NEXT <ArrowRight size={13} />
              </button>
            </div>

            <div className="work-filters" role="group" aria-label="กรองผลงาน">
              {filters.map(item => (
                <button
                  key={item}
                  onClick={() => {
                    setFilter(item);
                    setActiveWorkIdx(0);
                  }}
                  aria-pressed={filter === item}
                  className={filter === item ? 'is-active' : ''}
                >
                  [{item}]
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <p className="sr-only" aria-live="polite">แสดง {projects.length} ผลงาน</p>

        <div className={`project-grid ${projects.length === 1 ? 'single-project' : ''}`}>
          {projects.map((project, idx) => (
            <article
              className={`work-card crosshair-frame work-${project.kind} ${idx === safeWorkIdx ? 'is-spotlight' : ''}`}
              key={project.id}
              onMouseEnter={() => setActiveWorkIdx(idx)}
            >
              <span className="corner-plus corner-tl" aria-hidden="true">+</span>
              <span className="corner-plus corner-tr" aria-hidden="true">+</span>
              <span className="corner-plus corner-bl" aria-hidden="true">+</span>
              <span className="corner-plus corner-br" aria-hidden="true">+</span>

              <div className="work-card-topbar" aria-hidden="true">
                <span>{`0${idx + 1} / 0${projects.length}`}</span>
                <span>/// [{project.category}]</span>
              </div>
              <Link to={`/project/${project.id}`} className="project-image-link" aria-label={`อ่านเรื่อง ${project.name}`}>
                <ProjectVisual kind={project.kind} />
                <span className="project-open">
                  <ArrowUpRight size={19} />
                </span>
              </Link>
              <div className="project-info">
                <div className="project-title-row">
                  <h3>
                    <Link className="bracket-anim" to={`/project/${project.id}`}>
                      [{project.name}]
                    </Link>
                  </h3>
                  <span>{project.role}</span>
                </div>
                <p>{project.description}</p>
                <TelemetryBar
                  label={`AIC // MODULE 0${idx + 1}`}
                  value={idx === 0 ? 96 : idx === 1 ? 94 : 90}
                  code="DEPLOYED"
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

      <section id="lore-sec" className="about-band">
        <RevealOnScroll className="shell about-inner crosshair-frame">
          <span className="corner-plus corner-tl" aria-hidden="true">+</span>
          <span className="corner-plus corner-tr" aria-hidden="true">+</span>
          <span className="corner-plus corner-bl" aria-hidden="true">+</span>
          <span className="corner-plus corner-br" aria-hidden="true">+</span>

          <div className="about-statement">
            <div>
              <div className="section-kicker">
                <strong>02 / 04</strong>
                <span>/// WORLDVIEW &amp; APPROACH</span>
              </div>
              <h2>
                A developer.<br />
                A maker.<br />
                <em>Always curious.</em>
              </h2>
            </div>
            <div className="operator-fraction">
              <strong>DIJIANG</strong> 02 / 04
            </div>
          </div>
          <div className="about-copy">
            <p>จากแอปที่เชื่อมกับอุปกรณ์จริง สู่ระบบที่คนใช้ซื้อขายทุกวัน ผมชอบเห็นสิ่งที่เขียนกลายเป็นส่วนหนึ่งของชีวิตคน</p>
            <p>นอกเวลางาน ผมอาจกำลังลองสูตรอาหาร ชงชา หรือเขียนเครื่องมือที่อยากใช้เอง ความสนุกอยู่ที่ได้ทดลอง ปรับ และทำให้มันเป็นในแบบของเรา</p>
            <div className="interest-line">
              <span><Code2 size={15} /> [Building things]</span>
              <span><Coffee size={15} /> [Brewing tea]</span>
              <span><Disc3 size={15} /> [Music &amp; screens]</span>
            </div>
            <Link to="/about" className="text-link bracket-anim">
              [อ่านเรื่องราวของผม] <ArrowUpRight size={15} />
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <section id="experience" className="shell experience-section">
        <RevealOnScroll className="section-heading">
          <div>
            <div className="section-kicker">
              <strong>03 / 04</strong>
              <span>/// VERSION CALENDAR · ประสบการณ์ทำงาน</span>
            </div>
            <h2>
              Learning by <em>building.</em>
            </h2>
            <p>แต่ละงานทำให้ได้รู้จักปัญหาคนละแบบ</p>
          </div>
          <Link to="/about#education" className="text-link bracket-anim">
            [ประวัติการศึกษา] <ArrowUpRight size={15} />
          </Link>
        </RevealOnScroll>
        <Career />
      </section>

      <RevealOnScroll>
        <section className="shell toolbox-section crosshair-frame" id="skills">
          <div>
            <div className="section-kicker">
              <strong>04 / 04</strong>
              <span>/// AIC SYSTEM · เครื่องมือที่ใช้</span>
            </div>
            <h2>Tools I work with.</h2>
            <p>เลือกใช้ให้เหมาะกับสิ่งที่กำลังสร้าง กดสลับดูรายละเอียดแต่ละหมวดได้</p>

            <div className="aic-switcher-controls">
              <div className="endfield-pager" aria-label="สลับหมวดเครื่องมือ">
                <button type="button" onClick={() => stepAic(-1)} aria-label="หมวดก่อนหน้า">
                  <ArrowLeft size={13} /> LAST
                </button>
                <span className="pager-count">{activeAic.code}</span>
                <button type="button" onClick={() => stepAic(1)} aria-label="หมวดถัดไป">
                  NEXT <ArrowRight size={13} />
                </button>
              </div>
            </div>

            <div className="aic-spotlight-card crosshair-frame">
              <span className="corner-plus corner-tl" aria-hidden="true">+</span>
              <span className="corner-plus corner-br" aria-hidden="true">+</span>
              <div className="aic-spotlight-head">
                <span>/// {activeAic.id}</span>
                <strong>{activeAic.code}</strong>
              </div>
              <h3>[{activeAic.title}]</h3>
              <p className="aic-spotlight-sub">{activeAic.subtitle}</p>
              <p>{activeAic.summary}</p>
              <TelemetryBar label={activeAic.id} value={activeAic.metric} code="ONLINE" />
            </div>
          </div>

          <div className="toolbox" role="tablist" aria-label="หมวดหมู่เครื่องมือ">
            {aicModules.map((mod, idx) => (
              <div
                key={mod.id}
                role="tab"
                tabIndex={0}
                aria-selected={activeAicIdx === idx}
                className={activeAicIdx === idx ? 'is-active' : ''}
                onClick={() => setActiveAicIdx(idx)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveAicIdx(idx);
                  }
                }}
              >
                <div className="toolbox-row-head">
                  <span>/// {mod.code} · {mod.title}</span>
                  <span className="toolbox-id">[{mod.id}]</span>
                </div>
                <p>{mod.stack.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll className="shell">
        <section className="journal-prompt crosshair-frame">
          <span className="corner-plus corner-tl" aria-hidden="true">+</span>
          <span className="corner-plus corner-tr" aria-hidden="true">+</span>
          <div>
            <div className="section-kicker">
              <strong>// NOTICE</strong>
              <span>/// JOURNAL &amp; NOTES</span>
            </div>
            <h2>A few things along the way.</h2>
            <p>พื้นที่เก็บบทความและเรื่องที่สนใจระหว่างทาง</p>
          </div>
          <Link to="/blog" className="text-link bracket-anim">
            [เปิด Journal] <ArrowRight size={16} />
          </Link>
        </section>
      </RevealOnScroll>
    </>
  );
}
