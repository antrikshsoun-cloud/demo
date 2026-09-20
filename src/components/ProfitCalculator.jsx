import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Zap, DollarSign } from 'lucide-react';
import WebGLShader from './WebGLShader';
import SpotlightCard from './SpotlightCard';
import { playRelayClick, playSliderPurr } from '../utils/audioHaptics';

const TIERS = [
  { size: '$25,000', value: 25000, target: 1500, drawdown: '$1,500', contracts: '3 Contracts', price: '$150' },
  { size: '$50,000', value: 50000, target: 3000, drawdown: '$2,500', contracts: '6 Contracts', price: '$250' },
  { size: '$100,000', value: 100000, target: 6000, drawdown: '$3,500', contracts: '12 Contracts', price: '$450' },
  { size: '$150,000', value: 150000, target: 9000, drawdown: '$5,000', contracts: '15 Contracts', price: '$650', popular: true },
  { size: '$250,000', value: 250000, target: 15000, drawdown: '$6,500', contracts: '20 Contracts', price: '$950' },
  { size: '$1,000,000', value: 1000000, target: 40000, drawdown: '$20,000', contracts: '30 Contracts', price: 'Custom' },
];

export default function ProfitCalculator() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(3); // default $150K
  const currentTier = TIERS[selectedTierIndex];
  
  const [profitTarget, setProfitTarget] = useState(currentTier.target * 1.5);

  const traderShare = Math.round(profitTarget * 0.9);
  const fliShare = Math.round(profitTarget * 0.1);

  const handleTierChange = (index) => {
    playRelayClick();
    setSelectedTierIndex(index);
    setProfitTarget(TIERS[index].target * 1.5);
  };

  return (
    <section id="calculator" style={{ position: 'relative', zIndex: 10, padding: '70px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div
            className="aether-glass-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              marginBottom: '16px',
              border: '1px solid rgba(201, 164, 94, 0.35)',
            }}
          >
            <Calculator size={14} color="#F3CA65" />
            <span className="label-caps" style={{ color: '#F3CA65', fontSize: '11px', letterSpacing: '0.12em' }}>
              Interactive Payout Simulator
            </span>
          </div>

          <h2
            className="font-display gold-grad-text"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 16px',
            }}
          >
            Calculate Your 90% Profit Potential
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
            See exactly what disciplined trading pays out with FLI Capital's 90/10 split on real simulated futures accounts.
          </p>
        </div>

        {/* Calculator Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Interactive Controls */}
          <SpotlightCard style={{ padding: '36px 32px' }}>
            {/* Tier Selector Chips */}
            <div style={{ marginBottom: '28px' }}>
              <label
                className="label-caps"
                style={{ display: 'block', fontSize: '11px', color: 'rgba(240, 246, 255, 0.6)', marginBottom: '12px' }}
              >
                1. Select Account Size
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                }}
              >
                {TIERS.map((tier, idx) => {
                  const active = idx === selectedTierIndex;
                  return (
                    <button
                      key={tier.size}
                      type="button"
                      onClick={() => handleTierChange(idx)}
                      style={{
                        padding: '12px 8px',
                        borderRadius: '12px',
                        border: active
                          ? '1px solid #C9A45E'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        background: active
                          ? 'linear-gradient(135deg, rgba(201, 164, 94, 0.25), rgba(201, 164, 94, 0.08))'
                          : 'rgba(255, 255, 255, 0.03)',
                        color: active ? '#F3CA65' : '#E2E8F0',
                        fontWeight: active ? 800 : 600,
                        fontSize: '13.5px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {tier.size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Profit Target Slider */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
                <label className="label-caps" style={{ fontSize: '11px', color: 'rgba(240, 246, 255, 0.6)' }}>
                  2. Simulated Monthly Profit
                </label>
                <span className="font-mono" style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>
                  ${profitTarget.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={Math.round(currentTier.value * 0.03)}
                max={Math.round(currentTier.value * 0.35)}
                step={250}
                value={profitTarget}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setProfitTarget(val);
                  const min = Math.round(currentTier.value * 0.03);
                  const max = Math.round(currentTier.value * 0.35);
                  const factor = (val - min) / Math.max(1, (max - min));
                  playSliderPurr(factor);
                }}
                style={{
                  width: '100%',
                  accentColor: '#C9A45E',
                  cursor: 'pointer',
                  height: '6px',
                  borderRadius: '3px',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '11px', color: 'rgba(240, 246, 255, 0.4)' }}>
                <span>Min: ${Math.round(currentTier.value * 0.03).toLocaleString()}</span>
                <span>Max: ${Math.round(currentTier.value * 0.35).toLocaleString()}</span>
              </div>
            </div>

            {/* Plan Specific Rules Pill Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                padding: '16px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)', textTransform: 'uppercase' }}>
                  Assessment Target
                </span>
                <span className="font-mono" style={{ fontSize: '14px', fontWeight: 700, color: '#F0F6FF' }}>
                  ${currentTier.target.toLocaleString()}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)', textTransform: 'uppercase' }}>
                  Max Trailing Drawdown
                </span>
                <span className="font-mono" style={{ fontSize: '14px', fontWeight: 700, color: '#F0F6FF' }}>
                  {currentTier.drawdown}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)', textTransform: 'uppercase' }}>
                  Position Sizing
                </span>
                <span className="font-mono" style={{ fontSize: '14px', fontWeight: 700, color: '#F0F6FF' }}>
                  {currentTier.contracts}
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)', textTransform: 'uppercase' }}>
                  Profit Split
                </span>
                <span className="font-mono" style={{ fontSize: '14px', fontWeight: 800, color: '#F3CA65' }}>
                  90% to You
                </span>
              </div>
            </div>
          </SpotlightCard>

          {/* Right Column: Live Payout Output + WebGL Shader Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <SpotlightCard style={{ padding: '36px 32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Zap size={16} color="#C9A45E" />
                  <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E' }}>
                    Your Estimated Take-Home Payout
                  </span>
                </div>

                <div
                  className="font-display font-mono"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: '#F3CA65',
                    margin: '8px 0 16px',
                    textShadow: '0 0 30px rgba(243, 202, 101, 0.35)',
                  }}
                >
                  ${traderShare.toLocaleString()}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(201, 164, 94, 0.08)',
                    border: '1px solid rgba(201, 164, 94, 0.2)',
                    fontSize: '13px',
                    marginBottom: '24px',
                  }}
                >
                  <span style={{ color: 'rgba(240, 246, 255, 0.7)' }}>FLI Capital Performance Fee (10%):</span>
                  <span className="font-mono" style={{ fontWeight: 700, color: '#C9A45E' }}>
                    ${fliShare.toLocaleString()}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(240, 246, 255, 0.8)' }}>
                    <ShieldCheck size={16} color="#C9A45E" />
                    <span>Daily automated payouts via RiseWorks or Direct Crypto</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(240, 246, 255, 0.8)' }}>
                    <ShieldCheck size={16} color="#C9A45E" />
                    <span>No daily drawdown limit · Only end-of-day trailing balance</span>
                  </div>
                </div>
              </div>

              {/* Direct Assessment CTA Button */}
              <a
                href="http://dashboard.flicapital.com/challenges"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aether-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 28px',
                  fontSize: '15px',
                  fontWeight: 800,
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 30px -4px rgba(201, 164, 94, 0.45)',
                }}
              >
                <span>Get Started on {currentTier.size} Plan</span>
                <ArrowRight size={17} />
              </a>
            </SpotlightCard>

            {/* Embedded 21st.dev WebGL Liquid Shader Interactive Window */}
            <div
              style={{
                height: '140px',
                borderRadius: '20px',
                border: '1px solid rgba(201, 164, 94, 0.25)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -8px rgba(0,0,0,0.7)',
              }}
            >
              <WebGLShader />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 24px',
                  pointerEvents: 'none',
                  background: 'linear-gradient(90deg, rgba(5, 10, 18, 0.82) 0%, rgba(5, 10, 18, 0.45) 50%, rgba(5, 10, 18, 0.82) 100%)',
                }}
              >
                <div>
                  <span className="label-caps" style={{ fontSize: '9.5px', color: '#F3CA65', display: 'block' }}>
                    Institutional Execution Engine
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>
                    GPU-Accelerated WebGL Prop Core
                  </span>
                </div>
                <div
                  style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    background: 'rgba(201, 164, 94, 0.2)',
                    border: '1px solid rgba(201, 164, 94, 0.4)',
                    fontSize: '11px',
                    color: '#F3CA65',
                    fontWeight: 700,
                  }}
                >
                  Interactive Fluid Canvas
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
