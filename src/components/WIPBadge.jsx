import React, { useState } from 'react';

const WIPBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {/* Badge Trigger */}
        <div 
            onClick={() => setIsOpen(true)}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                padding: '0.8rem 1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
        >
            <span style={{
                display: 'block',
                width: '10px',
                height: '10px',
                background: '#fbbf24', // Amber for WIP
                borderRadius: '50%',
                boxShadow: '0 0 10px #fbbf24',
                animation: 'pulse 2s infinite'
            }}></span>
            <span style={{
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '0.5px'
            }}>
                Work in Progress
            </span>
        </div>

        {/* Modal Overlay */}
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            zIndex: 10000,
            display: isOpen ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'all' : 'none',
            transition: 'opacity 0.3s ease'
        }}
        onClick={() => setIsOpen(false)}
        >
            <div 
                className="glass-card"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
                style={{
                    padding: '3rem',
                    maxWidth: '500px',
                    width: '90%',
                    textAlign: 'center',
                    transform: isOpen ? 'scale(1)' : 'scale(0.9)',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(251, 191, 36, 0.2)',
                    color: '#fbbf24',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '1.5rem',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
                }}>
                    🚧
                </div>

                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#000' }}>Under Construction</h3>
                
                <p style={{ color: '#333', marginBottom: '2rem', lineHeight: 1.6, fontSize: '1.1rem' }}>
                    Welcome to the <strong>beta version</strong> of my portfolio. <br />
                    I'm actively building and refining features every week.
                </p>

                <button 
                    onClick={() => setIsOpen(false)}
                    style={{
                        background: 'var(--text-primary)',
                        color: 'white',
                        padding: '1rem 3rem',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Got it, thanks!
                </button>
            </div>
        </div>

        <style>{`
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(251, 191, 36, 0); }
                100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0); }
            }
        `}</style>
    </>
  );
};

export default WIPBadge;
