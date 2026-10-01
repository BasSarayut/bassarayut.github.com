import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Coffee, Disc3, Asterisk } from 'lucide-react';
import SEO from '../components/SEO';
import { pages } from '../seo';
import ProjectVisual from '../components/ProjectVisual';
import Career from '../components/Career';
import { caseStudies } from '../data/caseStudies';
import { profileData } from '../data/profileData';

const filters = ['ทั้งหมด', 'งานประจำ', 'โปรเจกต์ส่วนตัว'];

export default function Home() {
  const [filter, setFilter] = useState('ทั้งหมด');
  const projects = caseStudies.filter(project => filter === 'ทั้งหมด' || project.category === filter);
  return <>
    <SEO {...pages.home} />
    <section className="shell hero">
      <div className="hero-copy"><h1>Good things<br />start with<br /><em>curiosity.</em><span className="hero-period" aria-hidden="true">*</span></h1><div className="hero-intro"><p className="intro-name">Hi, I’m Sarayut. <span>Software Developer.</span></p><p>{profileData.bio}</p></div><div className="hero-actions"><a className="button button-primary" href="#work">ดูสิ่งที่ผมสร้าง <ArrowDown size={18} /></a><Link className="text-link" to="/about">รู้จักผมอีกนิด <ArrowUpRight size={17} /></Link></div></div>
      <div className="hero-portrait"><figure className="portrait-frame"><img src="/images/sarayut.webp" alt="Sarayut" width="600" height="676" fetchPriority="high" /><figcaption><span>Sarayut, away from the keyboard.</span><span>TH</span></figcaption></figure><div className="portrait-note"><Coffee size={25} strokeWidth={1.4} /><span>Code, tea,<br /><em>& a little curiosity.</em></span></div><span className="portrait-side-note">A person behind the pixels.</span></div>
    </section>
    <div className="shell practice-strip"><p><span className="status-dot" /> เปิดรับโอกาสใหม่</p><p>Mobile <span>/</span> Web <span>/</span> Backend</p><a href={profileData.github} target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={16} /></a></div>
    <section id="work" className="shell work-section"><div className="section-heading"><div><h2>Selected <em>work.</em></h2><p>ปัญหาจากงานจริง และไอเดียที่อยากทำให้เป็นจริง</p></div><div className="work-filters" role="group" aria-label="กรองผลงาน">{filters.map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? 'is-active' : ''}>{item}</button>)}</div></div><p className="sr-only" aria-live="polite">แสดง {projects.length} ผลงาน</p><div className={`project-grid ${projects.length === 1 ? 'single-project' : ''}`}>{projects.map(project => <article className={`work-card work-${project.kind}`} key={project.id}><Link to={`/project/${project.id}`} className="project-image-link" aria-label={`อ่านเรื่อง ${project.name}`}><ProjectVisual kind={project.kind} /><span className="project-open"><ArrowUpRight size={23} /></span></Link><div className="project-info"><div className="project-title-row"><h3><Link to={`/project/${project.id}`}>{project.name}</Link></h3><span>{project.category}</span></div><p>{project.description}</p><ul className="tech-list" aria-label="เทคโนโลยี">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul></div></article>)}</div></section>
    <section className="about-band"><div className="shell about-inner"><div className="about-statement"><Asterisk size={37} aria-hidden="true" /><h2>A developer.<br />A maker.<br /><em>Always curious.</em></h2></div><div className="about-copy"><p>จากแอปที่เชื่อมกับอุปกรณ์จริง สู่ระบบที่คนใช้ซื้อขายทุกวัน ผมชอบเห็นสิ่งที่เขียนกลายเป็นส่วนหนึ่งของชีวิตคน</p><p>นอกเวลางาน ผมอาจกำลังลองสูตรอาหาร ชงชา หรือเขียนเครื่องมือที่อยากใช้เอง ความสนุกอยู่ที่ได้ทดลอง ปรับ และทำให้มันเป็นในแบบของเรา</p><div className="interest-line"><span><Code2 size={17} /> Building things</span><span><Coffee size={17} /> Brewing tea</span><span><Disc3 size={17} /> Music & screens</span></div><Link to="/about" className="text-link">อ่านเรื่องราวของผม <ArrowUpRight size={18} /></Link></div></div></section>
    <section id="experience" className="shell experience-section"><div className="section-heading"><div><h2>Learning by <em>building.</em></h2><p>แต่ละงานทำให้ได้รู้จักปัญหาคนละแบบ</p></div><Link to="/about#education" className="text-link">ประวัติการศึกษา <ArrowUpRight size={17} /></Link></div><Career /></section>
    <section className="shell toolbox-section" id="skills"><div><h2>Tools I work with.</h2><p>เลือกใช้ให้เหมาะกับสิ่งที่กำลังสร้าง</p></div><div className="toolbox"><div><span>Mobile & devices</span><p>Flutter · Kotlin · Java</p></div><div><span>Web & backend</span><p>React · TypeScript · Laravel · Node.js · MySQL</p></div><div><span>Personal experiments & delivery</span><p>SwiftUI · AppKit · Canvas · GitHub Actions</p></div></div></section>
    <section className="shell journal-prompt"><div><h2>A few things along the way.</h2><p>พื้นที่เก็บบทความและเรื่องที่สนใจระหว่างทาง</p></div><Link to="/blog" className="text-link">เปิด Journal <ArrowRight size={19} /></Link></section>
  </>;
}
