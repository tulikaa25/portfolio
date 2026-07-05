import React from 'react';

export default function HeroIllustration() {
  return (
    <div style={{ width: '100%', maxWidth: '380px' }}>
      <svg
        viewBox="0 0 380 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', overflow: 'visible', filter: 'drop-shadow(0 0 28px rgba(0,242,254,0.12))' }}
      >
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow blob */}
        <ellipse cx="190" cy="170" rx="210" ry="190" fill="url(#heroGlow)" />

        {/* ── Main laptop (floats gently) ── */}
        <g style={{ animation: 'floatCard 6s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>

          {/* Screen outer frame */}
          <rect x="18" y="18" width="344" height="218" rx="12"
            fill="#0d1117" stroke="#30363d" strokeWidth="1.5" />
          {/* Cyan accent glow on screen border */}
          <rect x="18" y="18" width="344" height="218" rx="12"
            fill="none" stroke="rgba(0,242,254,0.22)" strokeWidth="0.8" />

          {/* Screen content bg */}
          <rect x="30" y="30" width="320" height="196" rx="7" fill="#080c10" />

          {/* Title bar */}
          <rect x="30" y="30" width="320" height="28" rx="7" fill="#161b22" />
          <rect x="30" y="48" width="320" height="10" fill="#161b22" />

          {/* Traffic-light dots */}
          <circle cx="50" cy="44" r="6.5" fill="#FF5F57" />
          <circle cx="72" cy="44" r="6.5" fill="#FEBC2E" />
          <circle cx="94" cy="44" r="6.5" fill="#28C840" />

          {/* Filename */}
          <text x="190" y="48" fontSize="9" fontFamily="monospace"
            fill="#8b949e" textAnchor="middle">rag_pipeline.py</text>

          {/* ── Code lines ── */}
          <text x="44" y="76" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#9b5de5">from</tspan><tspan fill="#c9d1d9"> langchain </tspan><tspan fill="#9b5de5">import</tspan><tspan fill="#00f2fe"> FAISS</tspan>
          </text>
          <text x="44" y="90" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#9b5de5">from</tspan><tspan fill="#c9d1d9"> openai </tspan><tspan fill="#9b5de5">import</tspan><tspan fill="#00f2fe"> Embeddings</tspan>
          </text>

          <text x="44" y="108" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#6a737d"># Build vector knowledge store</tspan>
          </text>
          <text x="44" y="122" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#00f5a0">db</tspan><tspan fill="#c9d1d9"> = FAISS.</tspan><tspan fill="#00f2fe">from_documents</tspan><tspan fill="#c9d1d9">(</tspan>
          </text>
          <text x="54" y="136" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#c9d1d9">docs, </tspan><tspan fill="#00f5a0">embeddings</tspan>
          </text>
          <text x="44" y="150" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#c9d1d9">)</tspan>
          </text>

          <text x="44" y="168" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#6a737d"># Semantic retrieval</tspan>
          </text>
          <text x="44" y="182" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#00f5a0">result</tspan><tspan fill="#c9d1d9"> = db.</tspan><tspan fill="#00f2fe">similarity_search</tspan><tspan fill="#c9d1d9">(</tspan>
          </text>
          <text x="54" y="196" fontFamily="monospace" fontSize="9.5">
            <tspan fill="#c9d1d9">query=</tspan><tspan fill="#e6895a">prompt</tspan>
          </text>

          {/* Blinking cursor */}
          <rect x="44" y="206" width="6" height="11" rx="1" fill="#00f2fe">
            <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
          </rect>

          {/* ── Keyboard base ── */}
          <rect x="0" y="236" width="380" height="22" rx="3"
            fill="#161b22" stroke="#30363d" strokeWidth="1" />
          {/* Key rows (purely decorative) */}
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={i} x={8 + i * 33} y="240" width="26" height="8" rx="1.5"
              fill="#21262d" />
          ))}
          {/* Trackpad */}
          <rect x="148" y="242" width="84" height="12" rx="3"
            fill="#21262d" stroke="#30363d" strokeWidth="0.8" />
          {/* Base edge */}
          <rect x="0" y="258" width="380" height="5" rx="2.5" fill="#21262d" />
        </g>

        {/* ── Floating tech icons ── */}

        {/* Database — top-left */}
        <g transform="translate(-14, 108)"
          style={{ animation: 'floatA 11s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
          <circle cx="0" cy="0" r="26" fill="rgba(0,245,160,0.1)" stroke="rgba(0,245,160,0.4)" strokeWidth="1.5" />
          <ellipse cx="0" cy="-8" rx="10" ry="4" fill="none" stroke="#00f5a0" strokeWidth="1.5" />
          <line x1="-10" y1="-8" x2="-10" y2="7" stroke="#00f5a0" strokeWidth="1.5" />
          <line x1="10" y1="-8" x2="10" y2="7" stroke="#00f5a0" strokeWidth="1.5" />
          <ellipse cx="0" cy="7" rx="10" ry="4" fill="none" stroke="#00f5a0" strokeWidth="1.5" />
          <ellipse cx="0" cy="0" rx="10" ry="4" fill="none" stroke="#00f5a0" strokeWidth="1" opacity="0.45" />
        </g>

        {/* Code tag </> — top-right */}
        <g transform="translate(394, 88)"
          style={{ animation: 'floatB 13s ease-in-out -3s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
          <circle cx="0" cy="0" r="26" fill="rgba(155,93,229,0.1)" stroke="rgba(155,93,229,0.4)" strokeWidth="1.5" />
          <text x="0" y="5" fontSize="14" fontFamily="monospace" fill="#9b5de5"
            textAnchor="middle" fontWeight="800">&lt;/&gt;</text>
        </g>

        {/* AI — bottom-right */}
        <g transform="translate(394, 280)"
          style={{ animation: 'floatC 15s ease-in-out -6s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
          <circle cx="0" cy="0" r="26" fill="rgba(0,242,254,0.1)" stroke="rgba(0,242,254,0.4)" strokeWidth="1.5" />
          <text x="0" y="4" fontSize="12" fontFamily="monospace" fill="#00f2fe"
            textAnchor="middle" fontWeight="800">AI</text>
          <circle cx="-8" cy="-10" r="2.5" fill="#00f2fe" opacity="0.4" />
          <circle cx="8" cy="-10" r="2.5" fill="#00f2fe" opacity="0.4" />
          <circle cx="-8" cy="13" r="2.5" fill="#00f2fe" opacity="0.4" />
          <circle cx="8" cy="13" r="2.5" fill="#00f2fe" opacity="0.4" />
        </g>

        {/* Lambda — bottom-left */}
        <g transform="translate(-14, 272)"
          style={{ animation: 'floatD 10s ease-in-out -2s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
          <circle cx="0" cy="0" r="26" fill="rgba(255,159,28,0.1)" stroke="rgba(255,159,28,0.4)" strokeWidth="1.5" />
          <text x="0" y="7" fontSize="19" fontFamily="serif" fill="#FF9F1C"
            textAnchor="middle">λ</text>
        </g>

        {/* Dashed connection lines */}
        <line x1="12" y1="108" x2="38" y2="135"
          stroke="rgba(0,245,160,0.2)" strokeWidth="1" strokeDasharray="4 5" />
        <line x1="368" y1="88" x2="348" y2="118"
          stroke="rgba(155,93,229,0.2)" strokeWidth="1" strokeDasharray="4 5" />

        {/* Small floating code symbols (very faint) */}
        <text x="125" y="13" fontSize="10" fontFamily="monospace"
          fill="rgba(0,242,254,0.28)"
          style={{ animation: 'floatA 18s ease-in-out -4s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
          {'{ }'}
        </text>
        <text x="214" y="12" fontSize="9.5" fontFamily="monospace"
          fill="rgba(155,93,229,0.28)"
          style={{ animation: 'floatB 16s ease-in-out -7s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
          {'=>'}
        </text>
        <text x="295" y="14" fontSize="10" fontFamily="monospace"
          fill="rgba(0,245,160,0.28)"
          style={{ animation: 'floatC 14s ease-in-out -2s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
          {'[ ]'}
        </text>

      </svg>
    </div>
  );
}
