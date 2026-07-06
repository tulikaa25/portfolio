import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const cardAccents = [
  {
    color: '#FF6B6B',
    placeholderGrad: 'linear-gradient(135deg, rgba(255, 107, 107, 0.14) 0%, rgba(255, 107, 107, 0.03) 100%)',
    labelColor: 'rgba(255, 107, 107, 0.5)',
  },
  {
    color: '#00f5a0',
    placeholderGrad: 'linear-gradient(135deg, rgba(0, 245, 160, 0.14) 0%, rgba(0, 245, 160, 0.03) 100%)',
    labelColor: 'rgba(0, 245, 160, 0.5)',
  },
  {
    color: '#4CC9F0',
    placeholderGrad: 'linear-gradient(135deg, rgba(76, 201, 240, 0.14) 0%, rgba(76, 201, 240, 0.03) 100%)',
    labelColor: 'rgba(76, 201, 240, 0.5)',
  },
];

export default function Projects() {
  const { projects } = portfolioData;
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const CARD_WIDTH = 620;
  const GAP = 28;

  const updateState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < maxScroll - 8);
    const idx = el.scrollLeft >= maxScroll - 8
      ? projects.length - 1
      : Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
    setActiveIdx(Math.min(idx, projects.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateState, { passive: true });
    updateState();
    return () => el.removeEventListener('scroll', updateState);
  }, []);

  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * (CARD_WIDTH + GAP), behavior: 'smooth' });
  };

  const prev = () => scrollTo(Math.max(0, activeIdx - 1));
  const next = () => scrollTo(Math.min(projects.length - 1, activeIdx + 1));

  return (
    <section id="projects">
      <div className="radial-glow" style={{ bottom: '-10%', left: '10%' }}></div>
      <div className="container">

        {/* Header row with title + nav buttons */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0, textAlign: 'left' }}>
            Showcase Projects
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Counter */}
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-family-mono)', fontWeight: '600' }}>
              <span style={{ color: 'var(--text-primary)' }}>{String(activeIdx + 1).padStart(2, '0')}</span>
              {' / '}
              {String(projects.length).padStart(2, '0')}
            </span>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={prev}
                disabled={!canPrev}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: `1px solid ${canPrev ? 'var(--border-color)' : 'var(--border-dark)'}`,
                  background: canPrev ? 'rgba(255,255,255,0.05)' : 'transparent',
                  color: canPrev ? 'var(--text-primary)' : 'var(--text-muted)',
                  cursor: canPrev ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'var(--transition-smooth)',
                  flexShrink: 0,
                }}
                onMouseEnter={e => { if (canPrev) e.currentTarget.style.borderColor = 'var(--accent-purple)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = canPrev ? 'var(--border-color)' : 'var(--border-dark)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
              </button>

              <button
                onClick={next}
                disabled={!canNext}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: `1px solid ${canNext ? 'var(--accent-purple)' : 'var(--border-dark)'}`,
                  background: canNext ? 'rgba(155,93,229,0.08)' : 'transparent',
                  color: canNext ? 'var(--accent-purple)' : 'var(--text-muted)',
                  cursor: canNext ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'var(--transition-smooth)',
                  flexShrink: 0,
                }}
                onMouseEnter={e => { if (canNext) e.currentTarget.style.background = 'rgba(155,93,229,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = canNext ? 'rgba(155,93,229,0.08)' : 'transparent'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel wrapper — fade on right edge */}
        <div className="reveal-left" style={{ position: 'relative' }}>
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '1.5rem',
              scrollSnapType: 'x mandatory',
            }}
          >
            {projects.map((project, idx) => {
              const accent = cardAccents[idx % cardAccents.length];
              return (
                <div
                  key={project.id}
                  className="glass-card project-card"
                  style={{
                    minWidth: `${CARD_WIDTH}px`,
                    flex: `0 0 ${CARD_WIDTH}px`,
                    padding: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: `2px solid ${accent.color}`,
                    scrollSnapAlign: 'start',
                    opacity: idx === activeIdx ? 1 : 0.6,
                    transform: idx === activeIdx ? 'scale(1)' : 'scale(0.97)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                  }}
                >
                  {/* Card body: left image col + right content col */}
                  <div style={{ display: 'flex', flexGrow: 1 }}>

                    {/* Left — image + title + tags */}
                    <div style={{
                      width: '220px', flexShrink: 0,
                      display: 'flex', flexDirection: 'column',
                      borderRight: '1px solid var(--border-color)',
                    }}>
                      <div style={{
                        height: '180px',
                        background: accent.placeholderGrad,
                        borderBottom: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 1.25rem',
                      }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: accent.color, letterSpacing: '0.3px', margin: 0, textAlign: 'center' }}>
                          {project.title}
                        </h3>
                      </div>
                      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {project.tech.map((tag, tIdx) => (
                            <span className="project-tag" key={tIdx}>{tag}</span>
                          ))}
                        </div>
                        {/* Links at bottom of left col */}
                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" style={{ fontSize: '0.82rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            Source Code
                          </a>
                          {project.demo && project.demo !== '#' && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" style={{ fontSize: '0.82rem' }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right — description + challenge/solution/impact */}
                    <div style={{ flexGrow: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', scrollbarWidth: 'none' }}>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.65', margin: 0 }}>
                        {project.description}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.25rem' }}>
                        <div style={{
                          padding: '0.75rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid var(--border-color)',
                        }}>
                          <span style={{ color: 'var(--accent-pink)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.7rem' }}>Challenge</span>
                          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0.2rem 0 0', fontSize: '0.83rem' }}>{project.challenge}</p>
                        </div>

                        <div style={{
                          padding: '0.75rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid var(--border-color)',
                        }}>
                          <span style={{ color: accent.color, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.7rem' }}>Solution</span>
                          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0.35rem 0 0', paddingLeft: '1.1rem', fontSize: '0.83rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                            {project.solution.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right fade gradient — only shown while there's more to scroll to */}
          <div style={{
            position: 'absolute',
            top: 0, right: 0,
            width: '120px', height: 'calc(100% - 1.5rem)',
            background: 'linear-gradient(to left, var(--bg-primary) 0%, transparent 100%)',
            pointerEvents: 'none',
            opacity: canNext ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }} />
        </div>

        {/* Dot indicators */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              style={{
                width: idx === activeIdx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: idx === activeIdx ? 'var(--accent-purple)' : 'var(--border-color)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
