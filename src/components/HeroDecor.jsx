import React from 'react';

const tags = [
  { text: 'LangChain',   top: '12%', left: '58%', size: '0.82rem', opacity: 0.55, color: '#00f2fe', anim: 'floatA', dur: '13s', delay: '0s'   },
  { text: 'RAG',         top: '7%',  left: '78%', size: '1.15rem', opacity: 0.45, color: '#9b5de5', anim: 'floatB', dur: '10s', delay: '-4s'  },
  { text: 'Spring Boot', top: '28%', left: '62%', size: '0.76rem', opacity: 0.4,  color: '#00f5a0', anim: 'floatC', dur: '15s', delay: '-2s'  },
  { text: 'FAISS',       top: '22%', left: '85%', size: '0.78rem', opacity: 0.5,  color: '#00f2fe', anim: 'floatA', dur: '11s', delay: '-7s'  },
  { text: 'GenAI',       top: '42%', left: '70%', size: '1rem',    opacity: 0.5,  color: '#00f5a0', anim: 'floatB', dur: '14s', delay: '-1s'  },
  { text: 'Python',      top: '55%', left: '60%', size: '0.9rem',  opacity: 0.45, color: '#FFD166', anim: 'floatD', dur: '12s', delay: '-6s'  },
  { text: 'Java',        top: '48%', left: '82%', size: '0.82rem', opacity: 0.4,  color: '#FF9F1C', anim: 'floatC', dur: '16s', delay: '-3s'  },
  { text: 'LLM',         top: '68%', left: '73%', size: '1.05rem', opacity: 0.5,  color: '#E71D36', anim: 'floatA', dur: '9s',  delay: '-5s'  },
  { text: 'n8n',         top: '63%', left: '88%', size: '0.75rem', opacity: 0.4,  color: '#9b5de5', anim: 'floatB', dur: '13s', delay: '-8s'  },
  { text: 'pgvector',    top: '78%', left: '65%', size: '0.73rem', opacity: 0.38, color: '#00f2fe', anim: 'floatD', dur: '17s', delay: '-2s'  },
  { text: 'React',       top: '82%', left: '83%', size: '0.82rem', opacity: 0.42, color: '#61DAFB', anim: 'floatC', dur: '11s', delay: '-9s'  },
  { text: 'Supabase',    top: '35%', left: '91%', size: '0.73rem', opacity: 0.38, color: '#00f5a0', anim: 'floatA', dur: '18s', delay: '-4s'  },
  { text: 'Microservices', top: '17%', left: '68%', size: '0.7rem', opacity: 0.35, color: '#00f2fe', anim: 'floatB', dur: '20s', delay: '-6s' },
  { text: 'Node.js',     top: '73%', left: '56%', size: '0.78rem', opacity: 0.4,  color: '#00f5a0', anim: 'floatD', dur: '14s', delay: '-1s'  },
];

export default function HeroDecor() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0,
    }}>
      {tags.map((tag, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: tag.top,
            left: tag.left,
            fontSize: tag.size,
            fontWeight: '600',
            fontFamily: 'var(--font-family-mono)',
            color: tag.color,
            opacity: tag.opacity,
            background: `${tag.color}12`,
            border: `1px solid ${tag.color}28`,
            borderRadius: '50px',
            padding: '0.25rem 0.75rem',
            whiteSpace: 'nowrap',
            animation: `${tag.anim} ${tag.dur} ease-in-out ${tag.delay} infinite`,
            userSelect: 'none',
          }}
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
}
