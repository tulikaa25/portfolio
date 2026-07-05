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

          {/* Role + meta */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                {item.role}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-cyan)' }}>{item.organization}</span>
                <span style={{ color: 'var(--border-color)' }}>·</span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{item.location}</span>
              </div>
            </div>

            <span style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-family-mono)',
              whiteSpace: 'nowrap',
              paddingTop: '0.25rem',
            }}>
              {item.period}
            </span>
          </div>

          {/* Thin divider */}
          <div style={{ height: '1px', background: 'var(--border-color)', marginBottom: '1.5rem' }} />

          {/* Short description */}
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '1.75rem',
          }}>
            {item.shortDescription}
          </p>

          {/* Highlights — clean left-rail list */}
          <div style={{
            borderLeft: '2px solid rgba(0, 242, 254, 0.25)',
            paddingLeft: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {item.highlights.map((highlight, hIdx) => (
              <div key={hIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{
                  color: 'var(--accent-cyan)',
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
      </div>
    </section>
  );
}
