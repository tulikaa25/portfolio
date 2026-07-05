import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Milestones() {
  const { milestones } = portfolioData;

  return (
    <section id="experience">
      <div className="radial-glow" style={{ bottom: '10%', right: '-10%' }}></div>
      <div className="container">
        <h2 className="section-title">Experience & Milestones</h2>
        
        <div className="timeline">
          {milestones.map((item, idx) => (
            <div className={`timeline-item reveal delay-${(idx + 1) * 100}`} key={idx}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.period}</div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-org">
                  {item.organization} <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 'normal' }}>| {item.location}</span>
                </div>
                <ul className="timeline-list">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
