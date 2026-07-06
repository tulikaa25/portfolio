import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const FOOTER_LINES = [
  '// console.log("thanks for scrolling this far");',
  '// This portfolio is running on caffeine and semicolons;',
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
      <span style={{ fontSize: '0.7rem', fontWeight: '800', fontFamily: 'var(--font-family-mono)', letterSpacing: '-0.5px' }}>
        LC
      </span>
    ),
  },
  {
    href: personalInfo.socials.geeksforgeeks,
    label: 'GFG',
    color: '#2F8D46',
    bg: 'rgba(47,141,70,0.1)',
    border: 'rgba(47,141,70,0.3)',
    icon: (
      <span style={{ fontSize: '0.62rem', fontWeight: '800', fontFamily: 'var(--font-family-mono)', letterSpacing: '-0.5px' }}>
        GFG
      </span>
    ),
  },
];

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [footerLineIdx, setFooterLineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFooterLineIdx(i => (i + 1) % FOOTER_LINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact">
      <div className="radial-glow" style={{ top: '-10%', right: '-15%' }}></div>
      <div className="container">

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

          {/* Colorful social profile icons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {socialLinks(personalInfo).map(({ href, label, color, bg, border, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '42px', height: '42px',
                  borderRadius: '50%',
                  background: bg,
                  border: `1px solid ${border}`,
                  color,
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'none'; }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
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
          <div style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
            {FOOTER_LINES[footerLineIdx]}
          </div>
          &copy; {new Date().getFullYear()} {personalInfo.name}.
        </div>
      </div>
    </section>
  );
}
