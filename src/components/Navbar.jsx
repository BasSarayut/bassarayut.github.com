import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    color: 'var(--text-secondary)',
    fontWeight: 500,
    fontSize: '0.95rem',
    transition: 'color 0.3s'
  };

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      padding: scrolled ? '1rem 0' : '2rem 0', 
      zIndex: 100, 
      transition: 'all 0.3s var(--algo-ease)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-1px' }}>
          Sarayut<span style={{ color: 'var(--primary-accent)' }}>.</span>
        </a>
        
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          <a href="#about" style={navLinkStyle} className="nav-link">About</a>
          <a href="#skills" style={navLinkStyle} className="nav-link">Skills</a>
          <a href="#projects" style={navLinkStyle} className="nav-link">Projects</a>
          <a href="#contact" style={navLinkStyle} className="nav-link">Contact</a>
        </div>
      </div>
      <style>{`
        .nav-link:hover { color: var(--text-primary) !important; }
      `}</style>
    </nav>
  );
};

export default Navbar;
