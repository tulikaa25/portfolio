import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Milestones from './components/Milestones';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { personalInfo } = portfolioData;

  // Custom Cursor States
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Scroll Reveal Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
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
        'a, button, input, textarea, select, .btn, .glass-card, .timeline-content, .terminal-header, .terminal-body'
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
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#terminal">Console</a></li>
              <li><a href="#contact">Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Sections with Scroll Reveal animations */}
      <main>
        <div className="reveal"><Hero /></div>
        <div className="reveal"><Milestones /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Terminal /></div>
        <div className="reveal"><Contact /></div>
      </main>
    </div>
  );
}
