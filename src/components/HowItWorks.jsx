import React from 'react';
import { ShoppingCart, TrendingUp, DollarSign, Shield, Zap, MessageSquare, Lock, ArrowRight, Check } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: ShoppingCart,
    title: 'Purchase your account',
    desc: 'Select an account size from $25K to $150K and receive your platform login within minutes.',
    tag: 'Fast Account Delivery',
  },
  {
    num: '02',
    icon: TrendingUp,
    title: 'Trade your account',
    desc: 'Hit the profit target while respecting the drawdown rules. Trade at your own pace across the available markets.',
    tag: 'No Time Limits',
  },
  {
    num: '03',
    icon: DollarSign,
    title: 'Get paid',
    desc: 'Complete KYC and your Trader Agreement, then request withdrawals of your share of the gains.',
    tag: '90% Profit Split',
  },
];

const TRUST_POINTS = [
  {
    icon: Shield,
    title: 'Trusted By Traders',
    desc: 'Worldwide community',
  },
  {
    icon: Zap,
    title: 'One-Step Assessment',
    desc: 'No second phase',
  },
  {
    icon: MessageSquare,
    title: '24/7',
    desc: 'Support',
  },
  {
    icon: Lock,
    title: 'Clear & Transparent',
    desc: 'Rules published up front',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ position: 'relative', zIndex: 10, padding: '70px 24px 90px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Main Grid: Intro Column + 3 Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Intro column */}
          <div
            className="aether-glass"
            style={{
              padding: '44px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span
                className="label-caps"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: '1px solid rgba(201, 164, 94, 0.4)',
                  background: 'rgba(201, 164, 94, 0.1)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#C9A45E',
                }}
              >
                ⚡ How It Works
              </span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#F0F6FF',
                margin: '0 0 16px',
              }}
            >
              Get funded in<br />
              <span className="gold-grad-text">3 simple</span> steps
            </h2>

            <p
              style={{
                color: 'rgba(240, 246, 255, 0.7)',
                fontSize: '15.5px',
                lineHeight: 1.65,
                margin: '0 0 28px',
              }}
            >
              Choose your account size, trade the one-step assessment, and get rewarded — no second phase and no time limit.
            </p>

            <div>
              <a
                href="http://dashboard.flicapital.com/challenges"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aether-primary"
                style={{
                  padding: '14px 28px',
                  fontSize: '14px',
                  borderRadius: '10px',
                }}
              >
                <span>Purchase Challenge</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Steps container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px',
            }}
          >
            {STEPS.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="aether-glass"
                  style={{
                    padding: '32px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                      <span
                        className="font-mono"
                        style={{
                          display: 'grid',
                          placeItems: 'center',
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: 'rgba(10, 19, 32, 0.9)',
                          border: '1px solid rgba(201, 164, 94, 0.3)',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#C9A45E',
                        }}
                      >
                        {step.num}
                      </span>
                      <IconComp size={22} color="#C9A45E" />
                    </div>

                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#F0F6FF',
                        marginBottom: '12px',
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: 'rgba(240, 246, 255, 0.65)',
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <span
                      className="label-caps"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(201, 164, 94, 0.3)',
                        background: 'rgba(201, 164, 94, 0.1)',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: '#C9A45E',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                      {step.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flow Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            margin: '48px 0 32px',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'rgba(185, 229, 255, 0.12)' }} />
          <span
            className="label-caps"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              color: 'rgba(240, 246, 255, 0.65)',
              fontWeight: 600,
            }}
          >
            <Check size={14} color="#C9A45E" strokeWidth={3} />
            From Purchase To Payout In A Simple 3-Step Flow
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(185, 229, 255, 0.12)' }} />
        </div>

        {/* 4-Item Trust Bar */}
        <div
          className="aether-glass"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            padding: '24px',
            gap: '24px',
            borderRadius: '16px',
          }}
        >
          {TRUST_POINTS.map((tp, idx) => {
            const IconC = tp.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  borderLeft: idx > 0 ? '1px solid rgba(185, 229, 255, 0.08)' : 'none',
                  paddingLeft: idx > 0 ? '18px' : '0',
                }}
              >
                <div
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    background: 'rgba(201, 164, 94, 0.1)',
                    border: '1px solid rgba(201, 164, 94, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconC size={18} color="#C9A45E" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#F0F6FF' }}>
                    {tp.title}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(240, 246, 255, 0.55)', marginTop: '2px' }}>
                    {tp.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
