import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ padding: '8rem 2rem 4rem', textAlign: 'center' }}>
      <RevealOnScroll>
        <div className="glass-card" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(180deg, var(--glass-bg) 0%, rgba(0,0,0,0) 100%)' }}>
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's Work Together</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
          </p>
          
          <a href="mailto:example@email.com" style={{ 
            display: 'inline-block',
            backgroundColor: 'var(--text-primary)', 
            color: 'var(--bg-color)', 
            fontWeight: 700,
            padding: '1.2rem 3rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            Say Hello
          </a>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <a href="#" style={{ hover: { color: 'var(--primary-accent)' } }}>GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
          
          <footer style={{ marginTop: '4rem', fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} Sarayut. All rights reserved.
          </footer>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
