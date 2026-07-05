import React from 'react';
import Typewriter from 'typewriter-effect';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="radial-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ maxWidth: '750px' }}>
          <p style={{ 
            color: 'var(--accent-cyan)', 
            fontWeight: '600', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            fontSize: '0.9rem',
            marginBottom: '0.75rem'
          }}>
            Welcome to my space
          </p>
          
          <h1 style={{ 
            fontSize: 'calc(2.5rem + 1.5vw)', 
            fontWeight: '800', 
            lineHeight: '1.1', 
            marginBottom: '1rem',
            letterSpacing: '-1.5px',
            display: 'flex',       // 💡 Ensures name and text stay on the same line smoothly
      gap: '12px',
      flexWrap: 'wrap'
          }}>
           Hi, I'm{' '}
<span className="gradient-text">
  <Typewriter
    options={{
      delay: 95, // Your preferred typing speed
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString(personalInfo.name) // Types out your name from left to right
        .start();                     // Starts the animation and freezes at the end
    }}
  />
</span>
    </h1>
          
          <h2 style={{ 
            fontSize: 'calc(1.2rem + 0.5vw)', 
            fontWeight: '600', 
            color: 'var(--text-primary)',
            marginBottom: '3rem'
          }}>
            {personalInfo.title}
          </h2>

          {/* The Hook Line (Sub-banner) */}
          <p style={{ 
            fontSize: 'calc(0.9rem + 0.2vw)', 
            fontWeight: '700', 
            color: 'var(--accent-orange)',
            marginBottom: '1rem',
            letterSpacing: '0.5px'
          }}>
            {personalInfo.hookLine}
          </p>

          {/* The Core Narrative (The Paragraphs) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '680px', marginTop: '1rem' }}>
            {personalInfo.bio.map((para, pIdx) => (
              <p key={pIdx} style={{ 
                fontSize: '1.05rem', 
                color: 'rgba(255, 255, 255, 0.72)', 
                lineHeight: '1.7',
                margin: 0
              }}>
                {para}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

