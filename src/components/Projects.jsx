import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function ProjectImage({ src, title }) {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    return (
      <div style={{
        height: '140px',
        background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(155, 93, 229, 0.12) 100%)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        fontSize: '1.25rem',
        color: 'rgba(255, 255, 255, 0.35)',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        {title}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={title} 
      onError={() => setError(true)} 
      style={{
        width: '100%',
        height: '140px',
        objectFit: 'cover',
        borderBottom: '1px solid var(--border-color)'
      }}
    />
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects">
      <div className="radial-glow" style={{ bottom: '-10%', left: '10%' }}></div>
      <div className="container">
        <h2 className="section-title">Showcase Projects</h2>
        
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, idx) => (
            <div className={`glass-card project-card reveal delay-${(idx + 1) * 100}`} key={project.id} style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <ProjectImage src={project.thumbnail} title={project.title} />
              
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div className="project-tags" style={{ marginBottom: '1rem' }}>
                  {project.tech.map((tag, tIdx) => (
                    <span className="project-tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
                
                <h3 className="project-title" style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: '700' }}>{project.title}</h3>
                <p className="project-description" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                
                {/* Challenge, Solution, Impact details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <span style={{ color: 'var(--accent-pink)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>The Challenge</span>
                    <span style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{project.challenge}</span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>The Solution</span>
                    <span style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{project.solution}</span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <span style={{ color: 'var(--accent-green)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Impact</span>
                    <span style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{project.impact}</span>
                  </div>
                </div>
                
                <div className="project-links" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1.5rem' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" style={{ fontSize: '0.85rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    Source Code
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" style={{ fontSize: '0.85rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
