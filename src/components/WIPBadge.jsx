import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Construction } from 'lucide-react';

const WIPBadge = () => {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null);

    return (
        <>
            {/* Draggable Badge */}
            <Draggable nodeRef={nodeRef}>
                <div 
                    ref={nodeRef}
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '20px', // Default to left to balance BackToTop on right
                        zIndex: 990, // Below modal
                        cursor: 'grab',
                        display: 'inline-flex'
                    }}
                >
                    <div 
                        className="glass-card"
                        style={{
                            padding: '0.6rem 1.2rem',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--glass-shadow)',
                            transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.borderColor = 'var(--primary-accent)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                        }}
                    >
                         {/* Status Dot */}
                        <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#F59E0B', // Amber
                            borderRadius: '50%',
                            boxShadow: '0 0 10px #F59E0B',
                            animation: 'pulse 2s infinite'
                        }}></div>
                        
                        <span style={{ 
                            fontSize: '0.85rem', 
                            fontWeight: 600, 
                            color: 'var(--text-secondary)',
                            pointerEvents: 'none', // Prevent text selection while dragging
                            userSelect: 'none'
                        }}>
                             Status: <span style={{ color: 'var(--text-primary)' }}>Beta</span>
                        </span>
                    </div>
                </div>
            </Draggable>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 10000,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '1rem'
                        }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card"
                            style={{
                                padding: '3rem',
                                maxWidth: '500px',
                                width: '100%',
                                textAlign: 'center',
                                position: 'relative',
                                background: 'var(--surface-color)'
                            }}
                        >
                            <button 
                                onClick={() => setIsOpen(false)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--text-secondary)'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 2rem'
                            }}>
                                <Construction size={40} color="#F59E0B" />
                            </div>

                            <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                Work in Progress
                            </h3>

                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                                You are viewing the <strong>Beta Release</strong> of my portfolio. 
                                Some features (like the Blog backend) are still under construction.
                                <br/><br/>
                                <em>Tip: You can drag the status badge!</em>
                            </p>

                            <button 
                                onClick={() => setIsOpen(false)}
                                style={{
                                    background: 'var(--text-primary)',
                                    color: 'var(--background-color)',
                                    padding: '1rem 2.5rem',
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    boxShadow: '0 10px 20px -10px rgba(0,0,0,0.2)',
                                    transition: 'transform 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                Got it
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <style>{`
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); }
                    70% { box-shadow: 0 0 0 6px rgba(245, 158, 11, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
                }
            `}</style>
        </>
    );
};

export default WIPBadge;
