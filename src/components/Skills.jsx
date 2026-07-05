import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  code: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  globe: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  brain: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  ),
  database: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

const categoryAccents = [
  'var(--accent-cyan)',
  'var(--accent-purple)',
  'var(--accent-pink)',
  'var(--accent-green)',
];

export default function Skills() {
  const { skills } = portfolioData;
  const [activeIdx, setActiveIdx] = useState(null); // null = All

  const visibleCategories = activeIdx === null ? skills : [skills[activeIdx]];

  return (
    <section id="skills">
      <div className="radial-glow" style={{ top: '20%', left: '-10%' }}></div>
      <div className="container">
        <h2 className="section-title reveal">Technical Expertise</h2>

        {/* Filter tabs */}
        <div className="reveal delay-100" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}>
          {/* All tab */}
          <button
            onClick={() => setActiveIdx(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 1.1rem',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              border: activeIdx === null
                ? '1px solid var(--accent-cyan)'
                : '1px solid var(--border-color)',
              background: activeIdx === null
                ? 'rgba(0,242,254,0.1)'
                : 'rgba(255,255,255,0.04)',
              color: activeIdx === null
                ? 'var(--accent-cyan)'
                : 'var(--text-secondary)',
            }}
          >
            All
            <span style={{
              background: activeIdx === null ? 'rgba(0,242,254,0.2)' : 'rgba(255,255,255,0.08)',
              borderRadius: '50px',
              padding: '0 0.5rem',
              fontSize: '0.75rem',
              fontWeight: '700',
            }}>
              {skills.reduce((sum, c) => sum + c.items.length, 0)}
            </span>
          </button>

          {/* Category tabs */}
          {skills.map((cat, idx) => {
            const accent = categoryAccents[idx % categoryAccents.length];
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(isActive ? null : idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  border: isActive ? `1px solid ${accent}` : '1px solid var(--border-color)',
                  background: isActive ? `rgba(${accentToRgb(accent)}, 0.1)` : 'rgba(255,255,255,0.04)',
                  color: isActive ? accent : 'var(--text-secondary)',
                }}
              >
                <span style={{ color: isActive ? accent : 'var(--text-muted)', display: 'flex' }}>
                  {iconMap[cat.icon] || iconMap.code}
                </span>
                {cat.category}
                <span style={{
                  background: isActive ? `rgba(${accentToRgb(accent)}, 0.2)` : 'rgba(255,255,255,0.08)',
                  borderRadius: '50px',
                  padding: '0 0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                }}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills display */}
        <div className="reveal delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {visibleCategories.map((cat) => {
            const origIdx = skills.indexOf(cat);
            const accent = categoryAccents[origIdx % categoryAccents.length];
            return (
              <div key={origIdx} className="glass-card" style={{ borderTop: `2px solid ${accent}`, animation: 'fadeSlideIn 0.3s ease forwards' }}>
                {/* Category header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-color)',
                }}>
                  <span style={{ color: accent, display: 'flex' }}>
                    {iconMap[cat.icon] || iconMap.code}
                  </span>
                  <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1rem' }}>
                    {cat.category}
                  </span>
                  <span style={{
                    marginLeft: 'auto',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-family-mono)',
                  }}>
                    {cat.items.length} skills
                  </span>
                </div>

                {/* Badge cloud */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="skill-badge"
                      title={skill.description}
                      style={{ cursor: 'default' }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function accentToRgb(cssVar) {
  const map = {
    'var(--accent-cyan)':   '0,242,254',
    'var(--accent-purple)': '155,93,229',
    'var(--accent-pink)':   '231,29,54',
    'var(--accent-green)':  '0,245,160',
  };
  return map[cssVar] || '255,255,255';
}
