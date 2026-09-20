import React from 'react';

const STATS = [
  { value: '$1M', label: 'Maximum Funding' },
  { value: '90%', label: 'Max Profit Split' },
  { value: '1-Step', label: 'Assessment Model' },
  { value: 'Unlimited', label: 'Time Limit' },
];

export default function StatsBar() {
  return (
    <section id="stats" style={{ position: 'relative', zIndex: 10, padding: '20px 24px 60px' }}>
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div
          className="aether-glass"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            padding: '12px 8px',
            borderRadius: '20px',
            boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)',
          }}
        >
          {STATS.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px 20px',
                textAlign: 'center',
                borderRight: idx < STATS.length - 1 ? '1px solid rgba(185, 229, 255, 0.1)' : 'none',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
                  fontWeight: 800,
                  color: '#C9A45E',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.value}
              </div>
              <div
                className="label-caps"
                style={{
                  marginTop: '8px',
                  fontSize: '11px',
                  color: 'rgba(240, 246, 255, 0.65)',
                  letterSpacing: '0.14em',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
