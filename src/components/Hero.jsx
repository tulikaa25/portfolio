import React from 'react';
import Typewriter from 'typewriter-effect';
import { portfolioData } from '../data/portfolioData';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="radial-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', width: '100%' }}>

          {/* ── Text column ── */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>

            <p style={{
              color: 'var(--accent-cyan)',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '0.9rem',
              marginBottom: '0.75rem',
              animation: 'fadeSlideIn 0.6s ease both',
              animationDelay: '0.1s',
            }}>
              Welcome to my space
            </p>

            <h1 style={{
              fontSize: 'calc(2.5rem + 1.5vw)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '1rem',
              letterSpacing: '-1.5px',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              animation: 'fadeSlideIn 0.6s ease both',
              animationDelay: '0.25s',
            }}>
              Hi, I'm{' '}
              <span className="gradient-text">
                <Typewriter
                  options={{ delay: 95 }}
                  onInit={(typewriter) => {
                    typewriter.typeString(personalInfo.name).start();
                  }}
                />
              </span>
            </h1>

            <h2 style={{
              fontSize: 'calc(1.2rem + 0.5vw)',
              fontWeight: '600',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              animation: 'fadeSlideIn 0.6s ease both',
              animationDelay: '0.4s',
            }}>
              {personalInfo.title}
            </h2>

            <p style={{
              fontSize: 'calc(0.9rem + 0.2vw)',
              fontWeight: '700',
              color: 'var(--accent-orange)',
              marginBottom: '1rem',
              letterSpacing: '0.5px',
              animation: 'fadeSlideIn 0.6s ease both',
              animationDelay: '0.55s',
            }}>
              {personalInfo.hookLine}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '600px', marginTop: '1rem', animation: 'fadeSlideIn 0.6s ease both', animationDelay: '0.7s' }}>
              {personalInfo.bio.map((para, pIdx) => (
                <p key={pIdx} style={{
                  fontSize: '1.05rem',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: '1.7',
                  margin: 0,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Social icon row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap', animation: 'fadeSlideIn 0.6s ease both', animationDelay: '0.9s' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Find me on
              </span>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LeetCode"
                  style={{ fontSize: '0.7rem', fontWeight: '800', fontFamily: 'var(--font-family-mono)', letterSpacing: '-0.5px' }}>
                  LC
                </a>
                <a href={personalInfo.socials.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GeeksforGeeks"
                  style={{ fontSize: '0.62rem', fontWeight: '800', fontFamily: 'var(--font-family-mono)', letterSpacing: '-0.5px' }}>
                  GFG
                </a>
                <a href={`mailto:${personalInfo.email}`} className="hero-social-link" title="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* ── Illustration column ── */}
          <div className="hero-illus-col">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
