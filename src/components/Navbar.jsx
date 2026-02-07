import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { menuItems } from '../data/menuData';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Divide as Hamburger } from 'hamburger-react';
import { Home } from 'lucide-react'; // Example extra icon if needed

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll Progress Logic
    const { scrollYProgress, scrollY } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Smart Hide Logic
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    // Lock body scroll when mobile menu is open
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
            {/* Smart Navbar Container */}
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    padding: scrolled ? '1rem' : '1.5rem',
                }}
            >
                <div style={{
                    width: '100%',
                    maxWidth: '1000px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1.75rem',
                    background: scrolled || mobileMenuOpen ? 'var(--surface-color)' : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    borderRadius: '50px',
                    border: '1px solid var(--glass-border)',
                    borderTop: '1px solid var(--glass-highlight)',
                    boxShadow: scrolled ? 'var(--glass-shadow)' : 'none',
                    transition: 'all 0.4s var(--fluid-ease)',
                    position: 'relative',
                    overflow: 'hidden' // For progress bar containment
                }}>
                    
                    {/* Logo */}
                    <a href="/" onClick={(e) => handleNavigation(e, '#root')} style={{
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        letterSpacing: '-0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        position: 'relative',
                        zIndex: 10
                    }}>
                        Sarayut
                        <div className="logo-dot"></div>
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
                        <div style={{ marginLeft: '1rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '1rem' }}>
                             <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="mobile-actions" style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
                         <ThemeToggle />
                         {/* Hamburger React Component */}
                         <div style={{ color: 'var(--text-primary)', zIndex: 101 }}>
                            <Hamburger 
                                toggled={mobileMenuOpen} 
                                toggle={setMobileMenuOpen} 
                                size={20} 
                                rounded 
                            />
                         </div>
                    </div>

                    {/* Reading Progress Bar (Desktop & Mobile) */}
                    <motion.div 
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: 'var(--primary-accent)',
                            scaleX: scaleX,
                            transformOrigin: "0%",
                            zIndex: 5
                        }}
                    />
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--surface-color)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                         <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2.5rem',
                            fontSize: '1.2rem',
                            fontWeight: 600
                        }}>
                            {menuItems.map((item, index) => (
                                <motion.a 
                                    key={index}
                                    href={item.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    style={{ 
                                        color: 'var(--text-primary)', 
                                        textDecoration: 'none',
                                        fontSize: '1.5rem'
                                    }}
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
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .nav-item {
          color: var(--text-secondary);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.8);
        }
        
        /* Dark mode adjustment for hover */
        :global(.dark) .nav-item:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
        
        .logo-dot {
          width: 8px;
          height: 8px;
          background: var(--primary-accent);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-accent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(14, 165, 233, 0); }
          100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
        }
      `}</style>
        </>
    );
};

export default Navbar;
