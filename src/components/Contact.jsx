import React from 'react';
import { portfolioData } from '../data/portfolioData';

const achColors = [
  { accent: '#FFB347', bg: 'rgba(255,179,71,0.07)', border: 'rgba(255,179,71,0.25)', icon: '🏅' },
  { accent: '#00f2fe', bg: 'rgba(0,242,254,0.07)', border: 'rgba(0,242,254,0.25)', icon: '🚀' },
  { accent: '#00f5a0', bg: 'rgba(0,245,160,0.07)', border: 'rgba(0,245,160,0.25)', icon: '⭐' },
  { accent: '#c77dff', bg: 'rgba(199,125,255,0.07)', border: 'rgba(199,125,255,0.25)', icon: '🏆' },
];

const socialLinks = (personalInfo) => [
  {
    href: personalInfo.socials.linkedin,
    label: 'LinkedIn',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.12)',
    border: 'rgba(10,102,194,0.35)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: personalInfo.socials.github,
    label: 'GitHub',
    color: '#e6edf3',
    bg: 'rgba(230,237,243,0.08)',
    border: 'rgba(230,237,243,0.2)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    href: personalInfo.socials.leetcode,
    label: 'LeetCode',
    color: '#FFA116',
    bg: 'rgba(255,161,22,0.1)',
    border: 'rgba(255,161,22,0.3)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.727-.75l-4.52-4.512a2.264 2.264 0 0 1 0-3.225l4.52-4.512a2.274 2.274 0 0 1 3.238 0l2.36 2.36a.75.75 0 0 1-1.06 1.061l-2.36-2.36a.774.774 0 0 0-1.118 0l-4.52 4.512a.765.765 0 0 0 0 1.103l4.52 4.513c.29.29.744.29 1.034 0l2.69-2.607a.75.75 0 1 1 1.061 1.06zM20.878 12.01a.75.75 0 0 1-.75.75H13.64a.75.75 0 1 1 0-1.5h6.488a.75.75 0 0 1 .75.75zm-3.805-4.482a.75.75 0 0 1-.75.75H13.64a.75.75 0 1 1 0-1.5h2.683a.75.75 0 0 1 .75.75z"/>
      </svg>
    ),
  },
  {
    href: personalInfo.socials.geeksforgeeks,
    label: 'GFG',
    color: '#2F8D46',
    bg: 'rgba(47,141,70,0.1)',
    border: 'rgba(47,141,70,0.3)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5c-1.8 0-3.3-1.3-3.7-3h7.4c-.4 1.7-1.9 3-3.7 3zm3.7-5.5H6.5c.4-1.7 1.9-3 3.7-3s3.3 1.3 3.7 3z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const { personalInfo, achievements } = portfolioData;

  return (
    <section id="contact">
      <div className="radial-glow" style={{ top: '-10%', right: '-15%' }}></div>
      <div className="container">

        {/* ── Certifications & Achievements ── */}
        <h2 className="section-title reveal">Certifications & Achievements</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.25rem',
          marginBottom: '6rem',
        }}>
          {achievements.map((ach, idx) => {
            const theme = achColors[idx % achColors.length];
            return (
              <div key={idx} className={`reveal delay-${(idx + 1) * 100}`} style={{
                background: theme.bg,
                border: `1px solid ${theme.border}`,
                borderRadius: '14px',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition-smooth)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${theme.bg}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Big background emoji */}
                <span style={{
                  position: 'absolute', right: '-4px', bottom: '-8px',
                  fontSize: '4.5rem', opacity: 0.12, lineHeight: 1, pointerEvents: 'none',
                }}>{theme.icon}</span>

                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{theme.icon}</div>

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

                {/* Accent bottom bar */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0,
                  width: '100%', height: '3px',
                  background: `linear-gradient(90deg, ${theme.accent}, transparent)`,
                }} />
              </div>
            );
          })}
        </div>

        {/* ── Get In Touch ── */}
        <h2 className="section-title reveal" id="connect">Get In Touch</h2>
        <div className="reveal delay-100" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            I am currently looking for{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>
              Full-Time Software Engineering, Backend Developer, or GenAI / RAG Engineer
            </strong>{' '}
            roles. If you have an opportunity that matches my skill set, or just want to chat tech, feel free to reach out!
          </p>

          {/* Primary CTAs */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href={personalInfo.resumeLink} download="Tulika_Basu_Resume.pdf" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send an Email
            </a>
          </div>

          {/* Colorful social profile pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {socialLinks(personalInfo).map(({ href, label, color, bg, border, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '50px',
                  background: bg,
                  border: `1px solid ${border}`,
                  color,
                  fontSize: '0.85rem', fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
              >
                {icon}{label}
              </a>
            ))}
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{personalInfo.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Vanilla CSS.
        </div>
      </div>
    </section>
  );
}
