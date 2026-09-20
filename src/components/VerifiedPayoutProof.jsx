import React from 'react';
import { Check } from 'lucide-react';

const PAYOUT_PROOFS = [
  { img: '/assets/real/payout1.png', name: 'Sriharsha', amount: '$3,814.20' },
  { img: '/assets/real/payout2.png', name: 'Sriharsha', amount: '$3,006.00' },
  { img: '/assets/real/payout3.png', name: 'Viktor', amount: '$2,250.00' },
  { img: '/assets/real/payout4.png', name: 'Samantha', amount: '$1,417.50' },
  { img: '/assets/real/payout5.png', name: 'Alex', amount: '$1,415.70' },
  { img: '/assets/real/payout6.png', name: 'Keila', amount: '$2,842.07' },
  { img: '/assets/real/payout7.png', name: 'Samantha', amount: '$1,224.90' },
];

export default function VerifiedPayoutProof() {
  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '40px 24px 80px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 800, color: '#F0F6FF' }}>
              Recent Verified Payouts
            </h2>
            <span
              className="label-caps"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                background: 'rgba(201, 164, 94, 0.12)',
                border: '1px solid rgba(201, 164, 94, 0.35)',
                fontSize: '10.5px',
                fontWeight: 700,
                color: '#C9A45E',
              }}
            >
              Payout Proof
            </span>
          </div>

          <span className="label-caps" style={{ fontSize: '11px', color: 'rgba(240, 246, 255, 0.45)' }}>
            Hover card to zoom
          </span>
        </div>

        {/* Marquee Track */}
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            padding: '24px 0',
          }}
        >
          <div className="aether-marquee-track" style={{ gap: '20px' }}>
            {[...PAYOUT_PROOFS, ...PAYOUT_PROOFS].map((item, idx) => (
              <figure
                key={idx}
                className="aether-glass"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px',
                  borderRadius: '16px',
                  width: '380px',
                  flexShrink: 0,
                  transition: 'all 0.35s cubic-bezier(0.2, 0.7, 0.3, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08) translateY(-4px)';
                  e.currentTarget.style.zIndex = '30';
                  e.currentTarget.style.borderColor = 'rgba(201, 164, 94, 0.6)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.zIndex = '1';
                  e.currentTarget.style.borderColor = 'rgba(185, 229, 255, 0.14)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Media Image */}
                <div
                  style={{
                    width: '190px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(201, 164, 94, 0.25)',
                    flexShrink: 0,
                    backgroundColor: '#000',
                  }}
                >
                  <img
                    src={item.img}
                    alt={`${item.name} payout confirmation`}
                    loading="lazy"
                    style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>

                {/* Info */}
                <figcaption style={{ minWidth: 0, flex: 1 }}>
                  <span
                    className="label-caps"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: '1px solid rgba(201, 164, 94, 0.35)',
                      background: 'rgba(201, 164, 94, 0.1)',
                      fontSize: '9.5px',
                      color: '#C9A45E',
                      fontWeight: 700,
                    }}
                  >
                    <Check size={10} strokeWidth={3} />
                    Verified
                  </span>

                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#F0F6FF', marginTop: '8px' }}>
                    Funded Trader
                  </div>

                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#C9A45E' }}>
                    {item.name}
                  </div>

                  <div className="font-mono" style={{ fontSize: '15px', fontWeight: 800, color: '#F0F6FF', marginTop: '4px' }}>
                    {item.amount}
                  </div>

                  <div style={{ fontSize: '11px', color: 'rgba(240, 246, 255, 0.45)', marginTop: '4px' }}>
                    Paid via Rise
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Real Regulatory Disclaimer */}
        <p style={{ marginTop: '16px', fontSize: '12px', color: 'rgba(240, 246, 255, 0.45)', lineHeight: 1.5 }}>
          Individual results shown are examples only and are not typical. Trading involves substantial risk of loss and past performance does not guarantee future results.
        </p>

      </div>
    </section>
  );
}
