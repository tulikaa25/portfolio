import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Tulika Basu DevShell [Version 1.0.0]' },
    { type: 'output', text: 'Type "help" to see available commands or click around.' },
    { type: 'output', text: '' }
  ]);
  const [inputVal, setInputVal] = useState('');
  
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const commandText = inputVal.trim().toLowerCase();
    setInputVal('');

    if (!commandText) return;

    // Add command to history
    setHistory(prev => [...prev, { type: 'prompt', text: commandText }]);

    // Process command
    let response = [];
    switch (commandText) {
      case 'help':
        response = [
          'Available commands:',
          '  about       - General information about me',
          '  skills      - List my technical skills matrix',
          '  projects    - Summary of featured engineering projects',
          '  contact     - Reach out via email, phone, or profiles',
          '  clear       - Clear the terminal screen',
          '  hack        - Launch a diagnostic test sequence :)'
        ];
        break;
      case 'about':
        response = [
          `Name:       ${portfolioData.personalInfo.name}`,
          `Role:       ${portfolioData.personalInfo.title}`,
          `Location:   ${portfolioData.personalInfo.location}`,
          `Summary:    ${portfolioData.personalInfo.subTitle}`,
          `Education:  B.Tech in Computer Science & Eng. @ VIT Bhopal (CGPA: 8.71)`
        ];
        break;
      case 'skills':
        response = ['Technical Skills Matrix:'];
        portfolioData.skills.forEach(cat => {
          const names = cat.items.map(i => i.name).join(', ');
          response.push(`  • ${cat.category}:`);
          response.push(`    ${names}`);
        });
        break;
      case 'projects':
        response = ['Featured Projects:'];
        portfolioData.projects.forEach(p => {
          response.push(`  • ${p.title} (${p.tech.join(', ')})`);
          response.push(`    ${p.description}`);
          response.push(`    Challenge: ${p.challenge}`);
          response.push(`    Solution:  ${p.solution}`);
          response.push(`    Impact:    ${p.impact}`);
          response.push('');
        });
        break;
      case 'contact':
        response = [
          'Contact Details:',
          `  Email:    ${portfolioData.personalInfo.email}`,
          `  Phone:    ${portfolioData.personalInfo.phone}`,
          `  LinkedIn: ${portfolioData.personalInfo.socials.linkedin}`,
          `  GitHub:   ${portfolioData.personalInfo.socials.github}`
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'hack':
        response = [
          'Initializing core-diagnostic override protocol...',
          'Loading LangChain models... SUCCESS',
          'Vector Store FAISS... CONNECTED',
          'RAG Grounding Integrity... 100%',
          'Status: System stable. Tulika Basu is ready to be hired!',
        ];
        break;
      default:
        response = [`Command not found: "${commandText}". Type "help" for a list of valid commands.`];
    }

    // Append response to history
    setHistory(prev => [...prev, ...response.map(text => ({ type: 'output', text }))]);
  };

  return (
    <section id="terminal">
      <div className="container">
        <h2 className="section-title">Developer Console</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2.5rem', marginTop: '-2rem' }}>
          For command-line enthusiasts: interact directly with my resume data.
        </p>

        <div className="terminal-wrapper" onClick={handleTerminalClick}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn close"></span>
              <span className="terminal-btn minimize"></span>
              <span className="terminal-btn maximize"></span>
            </div>
            <div className="terminal-title">bash - tulika@brightrays-devshell</div>
            <div style={{ width: '48px' }}></div>
          </div>
          
          <div className="terminal-body" ref={bodyRef}>
            {history.map((line, idx) => (
              <div key={idx} className={line.type === 'prompt' ? 'terminal-prompt-line' : 'terminal-output-line'}>
                {line.type === 'prompt' && <span className="terminal-prompt-sym">tulika$</span>}
                <span>{line.text}</span>
              </div>
            ))}
            
            <form onSubmit={handleCommandSubmit} className="terminal-prompt-line">
              <span className="terminal-prompt-sym">tulika$</span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label="Terminal Input"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
