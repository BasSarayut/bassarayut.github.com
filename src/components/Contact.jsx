import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      label: "Email",
      value: "sarayut.ap8@gmail.com",
      link: "mailto:sarayut.ap8@gmail.com",
      color: "#EA4335" // Friendly Gmail Red
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      label: "GitHub",
      value: "bassarayut",
      link: "https://github.com/bassarayut",
      color: "var(--text-primary)"
    },
    {
       icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      label: "Phone (Thailand)",
      value: "061-328-5127",
      link: "tel:0613285127",
      color: "#34D399" // Soft/Mint Green (Friendly)
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M4.93 4.93l14.14 14.14"></path>
        </svg>
      ),
      label: "Discord",
      value: "marron88",
      link: null, // Just copy
      color: "#7289DA" // Softer Discord Blue
    },
     {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      label: "Line",
      value: "bbassarayut",
      link: "https://line.me/ti/p/~bbassarayut", 
      color: "#00B900" // Standard Line Green
    }
  ];

  return (
    <section id="contact" className="container" style={{ padding: '6rem 2rem 4rem', textAlign: 'center' }}>
      <RevealOnScroll>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
            Whether you have a project in mind or just want to chat about tech, I'm always open to new opportunities.
          </p>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5rem',
                justifyContent: 'center'
            }}>
                {contactMethods.map((method, index) => (
                    <a 
                        key={index}
                        href={method.link || '#'}
                        onClick={(e) => {
                            if (!method.link) {
                                e.preventDefault();
                                navigator.clipboard.writeText(method.value);
                                alert(`Copied ${method.label} to clipboard!`);
                            }
                        }}
                        className="glass-card"
                        style={{
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            textDecoration: 'none',
                            transition: 'transform 0.3s var(--fluid-ease), box-shadow 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = 'var(--glass-shadow), 0 10px 20px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '16px',
                            // Handle background opacity safely
                            background: method.color.startsWith('var') 
                                ? `rgba(255,255,255,0.1)` // Fallback for vars in dark mode
                                : `${method.color}15`, 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: method.color,
                            // Handle border opacity safely
                            border: method.color.startsWith('var')
                                ? `1px solid var(--glass-border)`
                                : `1px solid ${method.color}30`,
                            transition: 'all 0.3s ease'
                        }}>
                            {method.icon}
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: 600 }}>
                                {method.label}
                            </div>
                            <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500, wordBreak: 'break-all' }}>
                                {method.value}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
          
          <footer style={{ marginTop: '6rem', fontSize: '0.9rem', color: 'var(--text-tertiary)', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
            © {new Date().getFullYear()} Sarayut. Built with React & Vibe Code.
          </footer>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
