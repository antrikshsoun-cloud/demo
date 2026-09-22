import React, { useRef } from 'react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import HeroFluidShader from './HeroFluidShader';

const BENEFITS = [
  '24 Hour Payouts',
  '90% Profit Split',
  'No Activation Fees',
  'EOD Drawdown',
  'Accounts Up To $150k',
  'Highest Payout Caps',
  'One-Step Assessment',
  'Trade The News',
];

const CONTRACTS = [
  { symbol: 'ES', label: 'E-mini S&P 500' },
  { symbol: 'NQ', label: 'E-mini Nasdaq' },
  { symbol: 'CL', label: 'Crude Oil' },
  { symbol: 'GC', label: 'Gold' },
  { symbol: 'ZB', label: '30-Year T-Bond' },
];

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section
      id="top"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(100px, 14vh, 130px) clamp(14px, 4vw, 24px) 60px',
        textAlign: 'center',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Interactive Transparent WebGL Fluid Shader - Active only in Hero */}
      <HeroFluidShader heroRef={heroRef} />

      <div
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Real Official Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              padding: '8px 20px',
              borderRadius: '999px',
              background: 'rgba(10, 19, 32, 0.85)',
              border: '1px solid rgba(201, 164, 94, 0.35)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              letterSpacing: '0.15em',
              color: '#C9A45E',
              textTransform: 'uppercase',
              fontWeight: 600,
              boxShadow: '0 4px 20px -2px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#C9A45E',
              }}
              className="pulse-aether"
            />
            One-Step Assessment · Futures Markets
          </span>
        </div>

        {/* Real Official Headline */}
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(2.2rem, 6.5vw, 5.2rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            margin: '0 0 24px',
            color: '#F0F6FF',
            textShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          Trade The Futures<br />
          Markets With<br />
          <span className="gold-grad-text">Up to $1M in Capital</span>
        </h1>

        {/* Real Official Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
            lineHeight: 1.65,
            color: '#C3D2E2',
            maxWidth: '680px',
            margin: '0 auto 36px',
            fontWeight: 400,
            textShadow: '0 2px 12px rgba(0,0,0,0.8)',
          }}
        >
          Prove your skill in a single-phase assessment. Pass once, get funded, and keep up to 90% of your profits. Your edge deserves real capital — start trading with us today.
        </p>

        {/* Real CTA Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '44px',
            width: '100%',
          }}
        >
          <a
            href="http://dashboard.flicapital.com/challenges"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aether-primary"
            style={{
              padding: '16px 36px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '12px',
              letterSpacing: '0.01em',
            }}
          >
            <span>Start Assessment</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#how"
            className="btn-aether-ghost"
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '12px',
              background: 'rgba(10, 19, 32, 0.75)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span>See How It Works</span>
          </a>
        </div>

        {/* Official Continuous Benefits Marquee */}
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            maxWidth: '820px',
            margin: '0 auto 36px',
            maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          }}
        >
          <div className="aether-marquee-track" style={{ gap: '12px' }}>
            {[...BENEFITS, ...BENEFITS, ...BENEFITS].map((item, idx) => (
              <span
                key={idx}
                className="label-caps"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(10, 19, 32, 0.8)',
                  border: '1px solid rgba(185, 229, 255, 0.14)',
                  backdropFilter: 'blur(12px)',
                  fontSize: '11px',
                  color: '#F0F6FF',
                  whiteSpace: 'nowrap',
                }}
              >
                <Check size={13} color="#C9A45E" strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Futures Contract Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '32px',
          }}
        >
          {CONTRACTS.map((contract) => (
            <span
              key={contract.symbol}
              className="label-caps"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                borderRadius: '8px',
                background: 'rgba(10, 19, 32, 0.72)',
                border: '1px solid rgba(185, 229, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                fontSize: '12px',
              }}
            >
              <span style={{ color: '#C9A45E', fontWeight: 700 }}>{contract.symbol}</span>
              <span style={{ color: 'rgba(240, 246, 255, 0.55)', letterSpacing: '0.05em' }}>· {contract.label}</span>
            </span>
          ))}
        </div>

        {/* Subtle Scroll Hint */}
        <a
          href="#stats"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#8093A8',
            textDecoration: 'none',
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease',
          }}
          className="hover:text-gold"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={14} color="#79D5F2" className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
