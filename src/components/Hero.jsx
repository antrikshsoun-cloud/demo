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
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 10,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Interactive Transparent WebGL Fluid Shader - Active only in Hero */}
      <HeroFluidShader heroRef={heroRef} />

      <div
        className="hero-content"
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Real Official Badge */}
        <div className="hero-badge-wrap" style={{ display: 'inline-flex' }}>
          <span
            className="hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              borderRadius: '999px',
              background: 'rgba(10, 19, 32, 0.85)',
              border: '1px solid rgba(201, 164, 94, 0.35)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.15em',
              color: '#C9A45E',
              textTransform: 'uppercase',
              fontWeight: 600,
              boxShadow: '0 4px 20px -2px rgba(0,0,0,0.5)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#C9A45E',
              }}
              className="pulse-aether"
            />
            <span>One-Step Assessment · Futures Markets</span>
          </span>
        </div>

        {/* Real Official Headline */}
        <h1
          className="font-display hero-headline"
          style={{
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#F0F6FF',
            textShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          Trade The Futures Markets <br className="hero-br-desktop" />
          With <span className="gold-grad-text">Up to $1M in Capital</span>
        </h1>

        {/* Real Official Subtitle */}
        <p
          className="hero-subtitle"
          style={{
            color: '#C3D2E2',
            margin: '0 auto',
            fontWeight: 400,
            textShadow: '0 2px 12px rgba(0,0,0,0.8)',
          }}
        >
          Prove your skill in a single-phase assessment. Pass once, get funded, and keep up to 90% of your profits. Start trading with real capital today.
        </p>

        {/* Real CTA Buttons */}
        <div
          className="hero-cta-group"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          <a
            href="http://dashboard.flicapital.com/challenges"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aether-primary hero-btn-primary"
            style={{
              fontWeight: 700,
              borderRadius: '12px',
              letterSpacing: '0.01em',
            }}
          >
            <span>Start Assessment</span>
            <ArrowRight size={17} />
          </a>

          <a
            href="#how"
            className="btn-aether-ghost hero-btn-ghost"
            style={{
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
          className="hero-marquee-container"
          style={{
            overflow: 'hidden',
            width: '100%',
            maxWidth: '820px',
            margin: '0 auto',
            maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          }}
        >
          <div className="aether-marquee-track" style={{ gap: '10px' }}>
            {[...BENEFITS, ...BENEFITS, ...BENEFITS].map((item, idx) => (
              <span
                key={idx}
                className="label-caps hero-benefit-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: '999px',
                  background: 'rgba(10, 19, 32, 0.8)',
                  border: '1px solid rgba(185, 229, 255, 0.14)',
                  backdropFilter: 'blur(12px)',
                  color: '#F0F6FF',
                  whiteSpace: 'nowrap',
                }}
              >
                <Check size={12} color="#C9A45E" strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Futures Contract Chips */}
        <div
          className="hero-contracts-wrap"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {CONTRACTS.map((contract) => (
            <span
              key={contract.symbol}
              className="label-caps hero-contract-chip"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '8px',
                background: 'rgba(10, 19, 32, 0.72)',
                border: '1px solid rgba(185, 229, 255, 0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ color: '#C9A45E', fontWeight: 700 }}>{contract.symbol}</span>
              <span className="contract-label" style={{ color: 'rgba(240, 246, 255, 0.55)', letterSpacing: '0.05em' }}>· {contract.label}</span>
            </span>
          ))}
        </div>

        {/* Subtle Scroll Hint */}
        <a
          href="#stats"
          className="hero-scroll-hint hover:text-gold"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#8093A8',
            textDecoration: 'none',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease',
          }}
        >
          <span>Scroll to explore</span>
          <ChevronDown size={14} color="#79D5F2" className="animate-bounce" />
        </a>
      </div>

      <style>{`
        /* Responsive Mobile Fit Styles */
        @media (max-width: 768px) {
          .hero-section {
            padding: clamp(68px, 9vh, 82px) 14px 16px !important;
            justifyContent: center !important;
          }
          .hero-badge-wrap {
            margin-bottom: 10px !important;
          }
          .hero-badge {
            padding: 5px 14px !important;
            font-size: 10px !important;
            gap: 7px !important;
          }
          .hero-headline {
            font-size: clamp(1.8rem, 6.2vw, 2.6rem) !important;
            margin: 0 0 10px !important;
            line-height: 1.12 !important;
          }
          .hero-br-desktop {
            display: none !important;
          }
          .hero-subtitle {
            font-size: 13px !important;
            line-height: 1.45 !important;
            max-width: 440px !important;
            margin: 0 auto 14px !important;
          }
          .hero-cta-group {
            gap: 8px !important;
            margin-bottom: 14px !important;
          }
          .hero-btn-primary {
            padding: 11px 22px !important;
            font-size: 13.5px !important;
          }
          .hero-btn-ghost {
            padding: 11px 18px !important;
            font-size: 13.5px !important;
          }
          .hero-marquee-container {
            margin: 0 auto 12px !important;
          }
          .hero-benefit-pill {
            padding: 5px 12px !important;
            font-size: 9.5px !important;
          }
          .hero-contracts-wrap {
            gap: 6px !important;
            margin-bottom: 14px !important;
          }
          .hero-contract-chip {
            padding: 4px 9px !important;
            font-size: 11px !important;
          }
          .contract-label {
            display: none !important;
          }
          .hero-scroll-hint {
            font-size: 10px !important;
          }
        }

        @media (min-width: 769px) {
          .hero-section {
            padding: 120px 24px 60px !important;
          }
          .hero-badge-wrap {
            margin-bottom: 24px !important;
          }
          .hero-badge {
            padding: 8px 20px !important;
            font-size: 12px !important;
            gap: 9px !important;
          }
          .hero-headline {
            font-size: clamp(2.8rem, 5.5vw, 5.2rem) !important;
            margin: 0 0 24px !important;
          }
          .hero-br-desktop {
            display: inline !important;
          }
          .hero-subtitle {
            font-size: clamp(1.05rem, 1.6vw, 1.25rem) !important;
            line-height: 1.65 !important;
            max-width: 680px !important;
            margin: 0 auto 36px !important;
          }
          .hero-cta-group {
            gap: 16px !important;
            margin-bottom: 40px !important;
          }
          .hero-btn-primary {
            padding: 16px 36px !important;
            font-size: 16px !important;
          }
          .hero-btn-ghost {
            padding: 16px 32px !important;
            font-size: 16px !important;
          }
          .hero-marquee-container {
            margin: 0 auto 32px !important;
          }
          .hero-benefit-pill {
            padding: 8px 16px !important;
            font-size: 11px !important;
          }
          .hero-contracts-wrap {
            gap: 10px !important;
            margin-bottom: 30px !important;
          }
          .hero-contract-chip {
            padding: 7px 16px !important;
            font-size: 12px !important;
            gap: 8px !important;
          }
          .contract-label {
            display: inline !important;
          }
          .hero-scroll-hint {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
}
