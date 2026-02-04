import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { menuItems } from '../data/menuData';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenuOpen]);

    const handleNavigation = (e, targetId) => {
        e.preventDefault();
        
        if (location.pathname === '/') {
            if (targetId === '#root') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            navigate('/');
            setTimeout(() => {
                if (targetId === '#root') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const element = document.querySelector(targetId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        setMobileMenuOpen(false);
    };

    const handleBlogNavigation = (e) => {
        e.preventDefault();
        navigate('/blog');
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                padding: scrolled ? '1rem' : '1.5rem',
                transition: 'all 0.4s var(--algo-ease)'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1000px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1.75rem',
                    background: scrolled || mobileMenuOpen ? 'var(--surface-color)' : 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    borderRadius: '50px',
                    border: '1px solid var(--glass-border)',
                    borderTop: '1px solid var(--glass-highlight)',
                    boxShadow: scrolled ? 'var(--glass-shadow)' : 'none',
                    transition: 'all 0.4s var(--fluid-ease)'
                }}>
                    <a href="/" onClick={(e) => handleNavigation(e, '#root')} style={{
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        letterSpacing: '-0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                    }}>
                        Sarayut<span style={{ color: 'var(--primary-accent)', fontSize: '1.5rem', lineHeight: 0 }}>.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        {menuItems.map((item, index) => (
                            <a 
                                key={index}
                                href={item.path} 
                                className="nav-item" 
                                onClick={(e) => {
                                    if (item.type === 'scroll') {
                                        handleNavigation(e, item.path);
                                    } else {
                                        // For route types like Blog
                                        if (item.label === 'Blog') {
                                            handleBlogNavigation(e);
                                        } else {
                                            // Fallback for other routes
                                            navigate(item.path);
                                            setMobileMenuOpen(false);
                                        }
                                    }
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    fontSize: '1.5rem',
                    fontWeight: 600
                }}>
                    {menuItems.map((item, index) => (
                        <a 
                            key={index}
                            href={item.path} 
                            onClick={(e) => {
                                if (item.type === 'scroll') {
                                    handleNavigation(e, item.path);
                                } else {
                                    if (item.label === 'Blog') {
                                        handleBlogNavigation(e);
                                    } else {
                                        navigate(item.path);
                                        setMobileMenuOpen(false);
                                    }
                                }
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
        .nav-item {
          color: var(--text-secondary);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.8);
        }

        .mobile-menu-btn {
          display: none;
          cursor: pointer;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
        }

        .hamburger {
          width: 20px;
          height: 14px;
          position: relative;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: var(--text-primary);
          border-radius: 2px;
          transition: 0.25s ease-in-out;
        }

        .hamburger span:nth-child(1) { top: 0; }
        .hamburger span:nth-child(2) { top: 6px; }
        .hamburger span:nth-child(3) { top: 12px; }

        .hamburger.open span:nth-child(1) { top: 6px; transform: rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { top: 6px; transform: rotate(-45deg); }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </>
    );
};

export default Navbar;
