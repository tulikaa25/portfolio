import React from 'react';

const WEEKS = 53;
const DAYS = 7;
const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAY_LABELS  = ['Mon', '', 'Wed', '', 'Fri', '', ''];

const levelColors = [
  'rgba(255,255,255,0.05)',
  'rgba(155,93,229,0.18)',
  'rgba(155,93,229,0.42)',
  'rgba(155,93,229,0.70)',
  'rgba(155,93,229,0.95)',
];

function seededRandom(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function getLevel(idx) {
  const r = seededRandom(idx);
  if (r < 0.52) return 0;
  if (r < 0.72) return 1;
  if (r < 0.86) return 2;
  if (r < 0.95) return 3;
  return 4;
}

export default function Heatmap() {
  const today = new Date();

  // Align so the last column ends on the current week's Sunday
  const dayOfWeek = today.getDay(); // 0=Sun
  const daysToSun = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  const weekEnd = new Date(today);
  weekEnd.setDate(weekEnd.getDate() + daysToSun);

  const startDate = new Date(weekEnd);
  startDate.setDate(startDate.getDate() - (WEEKS * 7 - 1));

  // Build grid [week][day]
  const grid = [];
  for (let w = 0; w < WEEKS; w++) {
    const week = [];
    for (let d = 0; d < DAYS; d++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + w * 7 + d);
      const isFuture = date > today;
      week.push({
        date,
        level: isFuture ? 0 : getLevel(w * DAYS + d),
        isFuture,
        label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      });
    }
    grid.push(week);
  }

  // Month labels — only show when month changes at start of week
  const monthLabels = [];
  let lastMonth = -1;
  grid.forEach((week, wIdx) => {
    const m = week[0].date.getMonth();
    if (m !== lastMonth) {
      lastMonth = m;
      monthLabels.push({ wIdx, label: MONTH_NAMES[m] });
    }
  });

  const total = grid.flat().filter(d => !d.isFuture && d.level > 0).length;
  const fakeContribs = Math.floor(total * 2.8);

  return (
    <div style={{ marginTop: '2.75rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          Coding Activity
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-family-mono)' }}>
          <span style={{ color: 'var(--accent-purple)', fontWeight: '700' }}>{fakeContribs}</span> contributions in the last year
        </span>
      </div>

      {/* Scrollable wrapper */}
      <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
        <div style={{ display: 'inline-flex', gap: '6px', alignItems: 'flex-start' }}>

          {/* Day labels */}
          <div style={{
            display: 'grid',
            gridTemplateRows: `repeat(7, ${CELL}px)`,
            gap: `${GAP}px`,
            paddingTop: '18px',
            flexShrink: 0,
          }}>
            {DAY_LABELS.map((label, i) => (
              <div key={i} style={{
                height: `${CELL}px`,
                lineHeight: `${CELL}px`,
                fontSize: '0.62rem',
                color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
                textAlign: 'right',
                paddingRight: '2px',
              }}>
                {label}
              </div>
            ))}
          </div>

          {/* Grid + month labels */}
          <div>
            {/* Month labels */}
            <div style={{ position: 'relative', height: '16px', marginBottom: '3px' }}>
              {monthLabels.map(({ wIdx, label }) => (
                <span key={label + wIdx} style={{
                  position: 'absolute',
                  left: `${wIdx * STEP}px`,
                  fontSize: '0.62rem',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  lineHeight: '16px',
                }}>
                  {label}
                </span>
              ))}
            </div>

            {/* Squares */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${WEEKS}, ${CELL}px)`,
              gridTemplateRows: `repeat(${DAYS}, ${CELL}px)`,
              gap: `${GAP}px`,
              gridAutoFlow: 'column',
            }}>
              {grid.map((week, wIdx) =>
                week.map((day, dIdx) => (
                  <div
                    key={`${wIdx}-${dIdx}`}
                    title={day.isFuture ? '' : `${day.label}${day.level > 0 ? ` · ${day.level * 3} contributions` : ' · no contributions'}`}
                    style={{
                      width: `${CELL}px`,
                      height: `${CELL}px`,
                      borderRadius: '2px',
                      background: levelColors[day.level],
                      transition: 'transform 0.1s ease, filter 0.1s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.35)';
                      if (day.level > 0) e.currentTarget.style.filter = 'brightness(1.3)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'none';
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginRight: '2px' }}>Less</span>
        {levelColors.map((color, i) => (
          <div key={i} style={{
            width: '10px', height: '10px',
            borderRadius: '2px',
            background: color,
          }} />
        ))}
        <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginLeft: '2px' }}>More</span>
      </div>

    </div>
  );
}
