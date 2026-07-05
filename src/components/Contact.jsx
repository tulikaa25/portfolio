import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo, achievements } = portfolioData;

  return (
    <section id="contact">
      <div className="radial-glow" style={{ top: '-10%', right: '-15%' }}></div>
      <div className="container">
        
        {/* Achievements Section integrated here for visual balance */}
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="achievements-grid" style={{ marginBottom: '6rem' }}>
          {achievements.map((ach, idx) => (
            <div className="achievement-card" key={idx}>
              <div className="achievement-year">{ach.year}</div>
              <h3 className="achievement-title">{ach.title}</h3>
              <div className="achievement-issuer">{ach.issuer}</div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <h2 className="section-title" id="connect">Get In Touch</h2>
        <div className="contact-container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            I am currently looking for **Full-Time Software Engineering, Backend Developer, or GenAI / RAG Engineer** roles. If you have an opportunity that matches my skill set, or just want to chat tech, feel free to reach out!
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href={personalInfo.resumeLink} download="Tulika_Basu_Resume.pdf" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.25rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.25rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Send an Email
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Profiles</span>
            <div style={{ width: '40px', height: '1px', background: 'var(--border-color)' }}></div>
            
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>

              <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" title="LeetCode" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.727-.75l-4.52-4.512a2.264 2.264 0 0 1 0-3.225l4.52-4.512a2.274 2.274 0 0 1 3.238 0l2.36 2.36a.75.75 0 0 1-1.06 1.061l-2.36-2.36a.774.774 0 0 0-1.118 0l-4.52 4.512a.765.765 0 0 0 0 1.103l4.52 4.513c.29.29.744.29 1.034 0l2.69-2.607a.75.75 0 1 1 1.061 1.06zM20.878 12.01a.75.75 0 0 1-.75.75H13.64a.75.75 0 1 1 0-1.5h6.488a.75.75 0 0 1 .75.75zm-3.805-4.482a.75.75 0 0 1-.75.75H13.64a.75.75 0 1 1 0-1.5h2.683a.75.75 0 0 1 .75.75z"/></svg>
              </a>

              <a href={personalInfo.socials.geeksforgeeks} target="_blank" rel="noopener noreferrer" title="GeeksforGeeks" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5c-1.8 0-3.3-1.3-3.7-3h7.4c-.4 1.7-1.9 3-3.7 3zm3.7-5.5H6.5c.4-1.7 1.9-3 3.7-3s3.3 1.3 3.7 3z"/></svg>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>{personalInfo.phone}</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Vanilla CSS.
        </div>
      </div>
    </section>
  );
}
