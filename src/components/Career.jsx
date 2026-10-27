import { profileData } from '../data/profileData';
import RevealOnScroll from './RevealOnScroll';

export default function Career({ education = false }) {
  return (
    <>
      <div className="career-list">
        {profileData.experience.map((job, index) => (
          <RevealOnScroll key={job.company} delay={index * 60}>
            <article className="career-row">
              <div className="career-period">
                <span className={index === 0 ? 'career-dot current' : 'career-dot'} />
                // {job.year}
              </div>
              <div className="career-details">
                <h3>[{job.role}]</h3>
                <p className="company-name">{job.company}</p>
                <p>{job.description}</p>
                <ul className="tech-list" aria-label="เทคโนโลยี">
                  {job.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
      {education && (
        <RevealOnScroll>
          <section className="education-section" id="education">
            <div className="section-kicker">
              <strong>// EDUCATION</strong>
              <span>ACADEMIC RECORD</span>
            </div>
            <h2>Learning foundations.</h2>
            <div className="education-list">
              {profileData.education.map(item => (
                <article key={item.school}>
                  <span className="education-year">// จบ {item.year}</span>
                  <div>
                    <h3>[{item.school}]</h3>
                    <p>{item.degree}</p>
                    {item.faculty && <p>{item.faculty}</p>}
                  </div>
                  <span className="education-gpa">
                    GPA <strong>{item.gpa}</strong>
                  </span>
                </article>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      )}
    </>
  );
}
