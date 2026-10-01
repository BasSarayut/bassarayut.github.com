import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import ProjectVisual from '../components/ProjectVisual';
import SEO from '../components/SEO';
import NotFoundPage from './NotFoundPage';

export default function ProjectPage() {
  const { id } = useParams();
  const project = caseStudies.find(item => item.id === id);
  if (!project) return <NotFoundPage />;
  const nextProject = caseStudies[(caseStudies.indexOf(project) + 1) % caseStudies.length];
  return <article className="shell project-page">
    <SEO title={project.name} description={project.description} url={`/project/${project.id}`} />
    <Link className="text-link back-link" to="/#work"><ArrowLeft size={17} /> ผลงานทั้งหมด</Link>
    <header className="case-header"><h1>{project.title}</h1><p className="case-introduction">{project.description}</p><div className="case-meta"><div><span>Project</span><strong>{project.name}</strong></div><div><span>My role</span><strong>{project.role}</strong></div><div><span>Tools</span><strong>{project.tech.join(' · ')}</strong></div></div>{project.url && <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">ลองใช้เว็บไซต์ <ArrowUpRight size={18} /></a>}</header>
    <ProjectVisual kind={project.kind} large />
    {project.note && <p className="visual-note">{project.note}</p>}
    <div className="case-story">{[{ title: 'จุดเริ่มต้น', text: project.challenge }, { title: 'สิ่งที่ลงมือทำ', text: project.solution }, { title: 'สิ่งที่เปลี่ยนไป', text: project.impact }].map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</div>
    <ol className="workflow" aria-label="ลำดับการใช้งาน">{project.steps.map(step => <li key={step}>{step}<ArrowRight size={18} aria-hidden="true" /></li>)}</ol>
    <Link className="next-project" to={`/project/${nextProject.id}`}><span>Next project<strong>{nextProject.name}</strong></span><ArrowUpRight size={34} /></Link>
  </article>;
}
