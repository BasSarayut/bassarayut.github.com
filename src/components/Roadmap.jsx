import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { roadmapData } from '../data/roadmapData';
import { CheckCircle2, Loader2, Layers, Rocket } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Roadmap = () => {
    
    // Helper to get icon based on status/type
    const getIcon = (item) => {
        if (item.status === 'completed') return <CheckCircle2 />;
        if (item.status === 'in-progress') return <Loader2 className="spin-slow" />;
        return <Layers />;
    };

    // Helper to get color based on status
    const getColor = (status) => {
        if (status === 'completed') return '#10B981'; // Emerald
        if (status === 'in-progress') return '#F59E0B'; // Amber
        return '#3B82F6'; // Blue
    };

    return (
        <section id="roadmap" className="container" style={{ padding: '6rem 2rem' }}>
            <RevealOnScroll>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>
                        Dev Journey
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        My path to technical excellence.
                    </p>
                </div>
            </RevealOnScroll>

            <div style={{ overflow: 'hidden' }}> {/* Prevent timeline overflow issues */}
                <VerticalTimeline lineColor={'rgba(255,255,255,0.2)'}>
                    {roadmapData.map((item, index) => {
                        const color = getColor(item.status);
                        
                        return (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work"
                                contentStyle={{ 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    backdropFilter: 'blur(10px)',
                                    border: `1px solid ${color}`,
                                    color: 'var(--text-primary)',
                                    boxShadow: 'var(--glass-shadow)',
                                    borderRadius: '20px'
                                }}
                                contentArrowStyle={{ borderRight: `7px solid ${color}` }}
                                date={item.date}
                                dateClassName="timeline-date"
                                iconStyle={{ background: color, color: '#fff' }}
                                icon={getIcon(item)}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                                    {item.title}
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" style={{ color: color, marginTop: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}>
                                    {item.subtitle}
                                </h4>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    {item.desc.map((point, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        );
                    })}
                    
                    {/* Final Star Node */}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'var(--primary-accent)', color: '#fff' }}
                        icon={<Rocket />}
                    />
                </VerticalTimeline>
            </div>

            <style>{`
                .timeline-date {
                    color: var(--text-secondary) !important;
                    font-size: 1.1rem !important;
                    font-weight: 600 !important;
                    padding: 0 1rem !important;
                }
                .spin-slow {
                    animation: spin 3s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Roadmap;
