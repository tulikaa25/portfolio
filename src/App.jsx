import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Milestones from './components/Milestones';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CoCurricular from './components/CoCurricular';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { personalInfo } = portfolioData;

  // Custom Cursor States
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Active nav link scroll tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const scrollHandler = () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    scrollHandler();
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  // Scroll Reveal Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));

    // Immediately activate elements already in viewport (e.g. on page load)
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
        el.classList.add('active');
        observer.unobserve(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Custom Cursor mouse listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Interactive Hover Classes
    const addHoverClass = () => setIsHovered(true);
    const removeHoverClass = () => setIsHovered(false);

    const updateHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, .btn, .glass-card, .timeline-content'
      );
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', addHoverClass);
        el.addEventListener('mouseleave', removeHoverClass);
      });
      return interactiveElements;
    };

    const elements = updateHoverListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, [isHidden]);

  return (
    <div className={isHovered ? 'cursor-hovered' : ''}>

      {/* Fixed ambient background blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: '800px', height: '800px',
          top: '-250px', left: '-200px',
          background: 'radial-gradient(circle, rgba(155,93,229,0.18) 0%, transparent 65%)',
          animation: 'bgBlob1 24s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: '700px', height: '700px',
          top: '30%', right: '-200px',
          background: 'radial-gradient(circle, rgba(155,93,229,0.2) 0%, transparent 65%)',
          animation: 'bgBlob2 30s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: '600px', height: '600px',
          bottom: '5%', left: '10%',
          background: 'radial-gradient(circle, rgba(0,245,160,0.14) 0%, transparent 65%)',
          animation: 'bgBlob3 38s ease-in-out infinite',
        }} />
      </div>

      {/* Custom Cursor circles */}
      {!isHidden && (
        <>
          <div 
            className="cursor-dot" 
            style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
          />
          <div 
            className="cursor-ring" 
            style={{ 
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
              left: 0,
              top: 0
            }}
          />
        </>
      )}

      {/* Navigation Header */}
      <header className="header">
        <div className="container nav-container">
          <a href="#hero" className="logo gradient-text">
            &lt;{personalInfo.name.split(' ')[0]} /&gt;
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#hero">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#cocurricular">Co-Curricular</a></li>
              <li><a href="#contact">Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Sections with Scroll Reveal animations */}
      <main style={{ position: 'relative', zIndex: 3 }}>
        <Hero />
        <Milestones />
        <Projects />
        <Skills />
        <CoCurricular />
        <Contact />
      </main>
    </div>
  );
}
