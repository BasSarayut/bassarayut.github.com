import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Mail, Github, Phone, Gamepad2, MessageCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { toast } from 'sonner';

const Contact = () => {
    const contactMethods = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "contact@sarayuts.com",
            link: "mailto:contact@sarayuts.com",
            color: "#EA4335"
        },
        {
            icon: <Github size={24} />,
            label: "GitHub",
            value: "bassarayut",
            link: "https://github.com/bassarayut",
            color: "var(--text-primary)"
        },
        {
            icon: <Phone size={24} />,
            label: "Phone (Thailand)",
            value: "061-328-5127",
            link: "tel:0613285127",
            color: "#34D399"
        },
        {
            // Discord brand icon isn't in Lucide, but Gamepad2 is a good semantic match
            // Or we keep the SVG. Let's keep the SVG for brand recognition but wrap it to look like Lucide.
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M4.93 4.93l14.14 14.14"></path>
                </svg>
            ),
            label: "Discord",
            value: "marron88",
            link: null,
            color: "#7289DA"
        },
        {
            // Line brand icon
            icon: (
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                 </svg>
            ),
            label: "Line",
            value: "bbassarayut",
            link: "https://line.me/ti/p/~bbassarayut",
            color: "#00B900"
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
                            <Tilt 
                                key={index}
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                perspective={1000}
                                scale={1.05}
                                transitionSpeed={1000}
                                glareEnable={true}
                                glareMaxOpacity={0.4}
                                glareColor="rgba(255, 255, 255, 0.4)"
                                glarePosition="all"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <a
                                    href={method.link || '#'}
                                    onClick={(e) => {
                                        if (!method.link) {
                                            e.preventDefault();
                                            navigator.clipboard.writeText(method.value);
                                            toast.success(`Copied ${method.label} to clipboard!`);
                                        }
                                    }}
                                    className="glass-card"
                                    style={{
                                        padding: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        height: '100%' // Ensure consistent height
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
                                        
                                        // Removing redundant transition since Tilt handles it
                                    }}>
                                        {React.cloneElement(method.icon, { strokeWidth: 2 })}
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
                            </Tilt>
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
