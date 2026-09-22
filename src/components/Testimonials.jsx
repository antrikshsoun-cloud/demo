import React from 'react';

const REVIEWS = [
  {
    initials: 'AT',
    name: 'Alex T.',
    role: 'FLI Capital Trader',
    quote:
      'Great experience with FLI Capital so far. The platform is easy to use, and customer support is quick and helpful. Everything has been smooth and professional.',
  },
  {
    initials: 'BJ',
    name: 'Brandon J.',
    role: 'FLI Capital Trader',
    quote:
      "Fli Capital has been very instrumental in how I've been able to navigate trading Futures. Their strategy and TradingView indicators are amazing, and they've been super consistent in building a better trading community.",
  },
  {
    initials: 'DC',
    name: 'Daimon C.',
    role: 'FLI Capital Trader',
    quote:
      'Customer service is amazing. The CEO himself will reach out and answer your questions and help solve your issues. 10/10 communication. I hope this firm goes a long way',
  },
];

export default function Testimonials() {
  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
            Testimonials
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              color: '#F0F6FF',
              margin: '8px 0 0',
            }}
          >
            What Our Traders Say
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}
        >
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="aether-glass"
              style={{
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ color: '#C9A45E', letterSpacing: '2px', fontSize: '16px', marginBottom: '16px' }}>
                  ★★★★★
                </div>
                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.65,
                    color: 'rgba(240, 246, 255, 0.8)',
                    margin: 0,
                  }}
                >
                  "{review.quote}"
                </p>
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '28px', paddingTop: '16px', borderTop: '1px solid rgba(185, 229, 255, 0.08)' }}>
                <div
                  className="font-mono"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(10, 19, 32, 0.9)',
                    border: '1px solid rgba(201, 164, 94, 0.35)',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 700,
                    fontSize: '13px',
                    color: '#C9A45E',
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#F0F6FF' }}>
                    {review.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(240, 246, 255, 0.5)' }}>
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
