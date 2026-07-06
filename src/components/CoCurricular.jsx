import React from 'react';
import { portfolioData } from '../data/portfolioData';

const achColors = [
  { accent: '#FFB347', bg: 'rgba(255,179,71,0.07)', border: 'rgba(255,179,71,0.25)', icon: '🏅' },
  { accent: '#9b5de5', bg: 'rgba(155,93,229,0.07)', border: 'rgba(155,93,229,0.25)', icon: '🚀' },
  { accent: '#00f5a0', bg: 'rgba(0,245,160,0.07)', border: 'rgba(0,245,160,0.25)', icon: '⭐' },
  { accent: '#c77dff', bg: 'rgba(199,125,255,0.07)', border: 'rgba(199,125,255,0.25)', icon: '🏆' },
];

export default function CoCurricular() {
  const { achievements } = portfolioData;

  return (
    <section id="cocurricular">
      <div className="radial-glow" style={{ top: '-10%', right: '-15%' }}></div>
      <div className="container">
        <h2 className="section-title reveal">Co-Curricular & Achievements</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.25rem',
        }}>
          {achievements.map((ach, idx) => {
            const theme = achColors[idx % achColors.length];
            const CardTag = ach.link ? 'a' : 'div';
            const linkProps = ach.link
              ? { href: ach.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <CardTag key={idx} {...linkProps} className={`reveal delay-${(idx + 1) * 100}`} style={{
                background: theme.bg,
                border: `1px solid ${theme.border}`,
                borderRadius: '14px',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition-smooth)',
                display: 'block',
                textDecoration: 'none',
                cursor: ach.link ? 'pointer' : 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${theme.bg}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Big background emoji (hidden once a real image is provided) */}
                {!ach.image && (
                  <span style={{
                    position: 'absolute', right: '-4px', bottom: '-8px',
                    fontSize: '4.5rem', opacity: 0.12, lineHeight: 1, pointerEvents: 'none',
                  }}>{theme.icon}</span>
                )}

                {ach.image ? (
                  <img
                    src={ach.image}
                    alt={ach.title}
                    style={{
                      width: '100%', height: '110px', objectFit: 'cover',
                      borderRadius: '8px', marginBottom: '0.9rem',
                      border: `1px solid ${theme.border}`,
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{theme.icon}</div>
                )}

                <div style={{
                  fontSize: '0.75rem', fontWeight: '700',
                  color: theme.accent, letterSpacing: '0.5px',
                  textTransform: 'uppercase', marginBottom: '0.5rem',
                }}>
                  {ach.year}
                </div>
                <h3 style={{
                  fontSize: '0.95rem', fontWeight: '700',
                  color: 'var(--text-primary)', lineHeight: '1.4',
                  marginBottom: '0.4rem',
                }}>
                  {ach.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{ach.issuer}</div>

                {ach.link && (
                  <div style={{
                    fontSize: '0.75rem', fontWeight: '600',
                    color: theme.accent, marginTop: '0.75rem',
                  }}>
                    View credential ↗
                  </div>
                )}

                {/* Accent bottom bar */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0,
                  width: '100%', height: '3px',
                  background: `linear-gradient(90deg, ${theme.accent}, transparent)`,
                }} />
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
