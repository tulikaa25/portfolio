import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Milestones() {
  const { milestones } = portfolioData;
  const item = milestones[0];

  if (!item) return null;

  return (
    <section id="experience">
      <div className="radial-glow" style={{ bottom: '10%', right: '-10%' }}></div>
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>

        <div className="reveal-left" style={{ maxWidth: '820px', margin: '0 auto' }}>

          {/* Company + meta */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                {item.organization}
              </h3>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                {item.location}
              </div>
            </div>

            <span style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#00f2fe',
              fontFamily: 'var(--font-family-mono)',
              whiteSpace: 'nowrap',
              paddingTop: '0.25rem',
            }}>
              {item.period}
            </span>
          </div>

          {/* Thin divider */}
          <div style={{ height: '1px', background: 'var(--border-color)', marginBottom: '1.75rem' }} />

          {/* Per-role blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {item.roles.map((role, rIdx) => (
              <div key={rIdx}>

                {/* Role title + period */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {role.title}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-family-mono)' }}>
                    {role.period}
                  </span>
                </div>

                {/* Tech stack pills */}
                {role.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {role.tech.map((tag, tIdx) => (
                      <span className="project-tag" key={tIdx}>{tag}</span>
                    ))}
                  </div>
                )}

                {/* Short description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  marginBottom: '1.25rem',
                }}>
                  {role.shortDescription}
                </p>

                {/* Highlights — clean left-rail list */}
                <div style={{
                  borderLeft: '2px solid rgba(155, 93, 229, 0.25)',
                  paddingLeft: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                  {role.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{
                        color: '#00f2fe',
                        fontSize: '0.7rem',
                        marginTop: '0.45rem',
                        flexShrink: 0,
                      }}>◆</span>
                      <p style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        margin: 0,
                      }}>
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
