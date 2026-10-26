import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import ProjectVisual from '../components/ProjectVisual';
import SEO from '../components/SEO';
import { projectMeta } from '../seo';
import RevealOnScroll, { ScrambleText, TelemetryBar } from '../components/RevealOnScroll';
import NotFoundPage from './NotFoundPage';

export default function ProjectPage() {
  const { id } = useParams();
  const project = caseStudies.find(item => item.id === id);
  if (!project) return <NotFoundPage />;
  const nextProject = caseStudies[(caseStudies.indexOf(project) + 1) % caseStudies.length];

  return (
    <article className="shell project-page">
      <SEO {...projectMeta(project)} />
      <Link className="text-link back-link" to="/#work">
        <ArrowLeft size={16} /> ผลงานทั้งหมด
      </Link>
      <header className="case-header">
        <span className="hud-tag">
          <ScrambleText text={`CASE FILE // ${project.id.toUpperCase()}`} />
        </span>
        <h1>{project.title}</h1>
        <p className="case-introduction">{project.description}</p>
        <div className="case-meta">
          <div className="reticle-box">
            <span>MODULE // Project</span>
            <strong>{project.name}</strong>
          </div>
          <div className="reticle-box">
            <span>ASSIGNMENT // My role</span>
            <strong>{project.role}</strong>
          </div>
          <div className="reticle-box">
            <span>STACK // Tools</span>
            <strong>{project.tech.join(' · ')}</strong>
          </div>
        </div>
        {project.url && (
          <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">
            ลองใช้เว็บไซต์ <ArrowUpRight size={17} />
          </a>
        )}
      </header>
      <ProjectVisual kind={project.kind} large />
      {project.note && <p className="visual-note">NOTE // {project.note}</p>}
      <div className="case-story">
        {[
          { code: 'PHASE 01', title: 'จุดเริ่มต้น', text: project.challenge, sync: 100 },
          { code: 'PHASE 02', title: 'สิ่งที่ลงมือทำ', text: project.solution, sync: 100 },
          { code: 'PHASE 03', title: 'สิ่งที่เปลี่ยนไป', text: project.impact, sync: 100 },
        ].map(section => (
          <RevealOnScroll key={section.title}>
            <section className="reticle-box">
              <div>
                <span className="hud-serial">{section.code}</span>
                <h2>{section.title}</h2>
                <TelemetryBar label={section.code} value={section.sync} code="COMPLETE" />
              </div>
              <p>{section.text}</p>
            </section>
          </RevealOnScroll>
        ))}
      </div>
      <ol className="workflow" aria-label="ลำดับการใช้งาน">
        {project.steps.map(step => (
          <li key={step}>
            {step}
            <ArrowRight size={16} aria-hidden="true" />
          </li>
        ))}
      </ol>
      <Link className="next-project reticle-box" to={`/project/${nextProject.id}`}>
        <span>
          NEXT TRANSMISSION //<strong>{nextProject.name}</strong>
        </span>
        <ArrowUpRight size={30} />
      </Link>
    </article>
  );
}
