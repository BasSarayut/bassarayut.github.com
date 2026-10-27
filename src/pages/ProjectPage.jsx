import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import ProjectVisual from '../components/ProjectVisual';
import SEO from '../components/SEO';
import { projectMeta } from '../seo';
import RevealOnScroll from '../components/RevealOnScroll';
import NotFoundPage from './NotFoundPage';

export default function ProjectPage() {
  const { id } = useParams();
  const project = caseStudies.find(item => item.id === id);
  if (!project) return <NotFoundPage />;
  const index = caseStudies.indexOf(project);
  const nextProject = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="shell project-page">
      <SEO {...projectMeta(project)} />
      <Link className="text-link back-link" to="/#work">
        <ArrowLeft size={15} /> [ผลงานทั้งหมด]
      </Link>
      <header className="case-header">
        <div className="section-kicker">
          <strong>{`0${index + 1} / 0${caseStudies.length}`}</strong>
          <span>// CASE FILE · [{project.category}]</span>
        </div>
        <h1>{project.title}</h1>
        <p className="case-introduction">{project.description}</p>
        <div className="case-meta">
          <div>
            <span>Project / โปรเจกต์</span>
            <strong>[{project.name}]</strong>
          </div>
          <div>
            <span>My role / บทบาท</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Tools / เทคโนโลยี</span>
            <strong>{project.tech.join(' · ')}</strong>
          </div>
        </div>
        {project.url && (
          <a className="endfield-capsule" href={project.url} target="_blank" rel="noreferrer">
            ลองใช้เว็บไซต์
          </a>
        )}
      </header>
      <ProjectVisual kind={project.kind} large />
      {project.note && <p className="visual-note">// หมายเหตุ: {project.note}</p>}
      <div className="case-story">
        {[
          { code: '01 / 03', title: 'จุดเริ่มต้น', text: project.challenge },
          { code: '02 / 03', title: 'สิ่งที่ลงมือทำ', text: project.solution },
          { code: '03 / 03', title: 'สิ่งที่เปลี่ยนไป', text: project.impact },
        ].map(section => (
          <RevealOnScroll key={section.title}>
            <section>
              <div>
                <div className="section-kicker">
                  <strong>{section.code}</strong>
                </div>
                <h2>[{section.title}]</h2>
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
            <ArrowRight size={15} aria-hidden="true" />
          </li>
        ))}
      </ol>
      <Link className="next-project" to={`/project/${nextProject.id}`}>
        <span>
          NEXT // โปรเจกต์ถัดไป<strong>[{nextProject.name}]</strong>
        </span>
        <ArrowUpRight size={28} />
      </Link>
    </article>
  );
}
