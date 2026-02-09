import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { profileData } from '../data/profileData';
import profileImage from '../assets/image/profile.jpg';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import GitHubStats from './GitHubStats';

const About = () => {
  return (
    <section id="about" className="container" style={{ padding: '8rem 2rem 4rem' }}>
      <RevealOnScroll>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center' 
        }}>
          
          {/* Left Column: Text & Stats */}
          <div>
             <h2 className="gradient-text" style={{ 
               fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
               marginBottom: '1rem',
               lineHeight: 1.1 
             }}>
               {profileData.title}
             </h2>
             <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--primary-accent)', 
                fontWeight: 600, 
                marginBottom: '2rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
             }}>
                {profileData.subtitle}
             </p>

             <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {profileData.bio_paragraphs.map((para, index) => (
                   <p key={index} style={{ marginBottom: '1.5rem' }}>
                      {para}
                   </p>
                ))}
             </div>

             {/* Stats Row */}
              <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                marginTop: '3rem',
                flexWrap: 'wrap'
              }}>
                {profileData.stats.map((stat, index) => (
                   <div key={index} style={{ textAlign: 'center' }}>
                      <div className="gradient-text" style={{ 
                         fontSize: '2.5rem', 
                         fontWeight: 800,
                         marginBottom: '0.2rem'
                      }}>
                         {stat.value}
                      </div>
                      <div style={{ 
                         fontSize: '0.9rem', 
                         color: 'var(--text-tertiary)',
                         textTransform: 'uppercase',
                         letterSpacing: '1px'
                      }}>
                         {stat.label}
                      </div>
                   </div>
                ))}
              </div>

              {/* Live GitHub Stats */}
              <div style={{ 
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--glass-border)'
              }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '-1rem' }}>
                    Live GitHub Insights
                </div>
                <GitHubStats />
              </div>
          </div>

          {/* Right Column: 3D Image */}
          <div style={{ display: 'flex', justifyContent: 'center',perspective: '1000px' }}>
            <Tilt
               tiltMaxAngleX={5}
               tiltMaxAngleY={5}
               scale={1.02}
               glareEnable={true}
               glareMaxOpacity={0.3}
               glareColor="#ffffff"
               glarePosition="all"
               style={{ width: '100%', maxWidth: '500px' }}
            >
               <div style={{ 
                  position: 'relative',
                  padding: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '30px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
               }}>
                  {/* Image Container */}
                  <div style={{ 
                     borderRadius: '20px', 
                     overflow: 'hidden',
                     aspectRatio: '3/4',
                     position: 'relative'
                  }}>
                      <div style={{
                         position: 'absolute',
                         inset: 0,
                         background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
                         zIndex: 1
                      }}></div>
                      <img 
                         src={profileImage} 
                         alt="Sarayut" 
                         style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                         }}
                      />
                  </div>

                  {/* Floating Badge */}
                  <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     style={{
                        position: 'absolute',
                        bottom: '30px',
                        right: '-20px',
                        background: 'var(--surface-color)',
                        padding: '1rem 2rem',
                        borderRadius: '20px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: 'var(--glass-shadow)',
                        zIndex: 2,
                        backdropFilter: 'blur(10px)'
                     }}
                  >
                     <span style={{ fontSize: '2rem' }}>🚀</span>
                     <span style={{ fontWeight: 700, marginLeft: '0.5rem' }}>Open to Work</span>
                  </motion.div>
               </div>
            </Tilt>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
