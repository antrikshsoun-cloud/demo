import React from 'react';
import { Calendar, Clock, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';

const PAYOUT_CAPS = [
  { size: '$25K', cap: '$2,500' },
  { size: '$50K', cap: '$5,000' },
  { size: '$100K', cap: '$10,000' },
  { size: '$150K', cap: '$15,000' },
];

const PAYOUT_CARDS = [
  {
    icon: Calendar,
    title: 'Withdraw Every 7 Winning Days',
    desc: 'Payouts run on a 7-winning day cycle. You can request a withdrawal every 7 winning days from your trader dashboard, $150 or more counts as a winning day.',
  },
  {
    icon: Clock,
    title: 'Fast Payouts',
    desc: 'Once approved, your payout is processed quickly — typically within 24–48 hours via the available outbound payment solutions.',
  },
  {
    icon: DollarSign,
    title: 'Keep 90% of your Profit',
    desc: 'You keep 90% of the gains on your Funded Account. The more your account earns, the more stays in your pocket.',
  },
  {
    icon: TrendingUp,
    title: 'Industry-Leading Payout Caps',
    desc: 'Request up to 10% of your account size as your maximum payout cap per cycle.',
  },
];

export default function Payouts() {
  return (
    <section id="payouts" style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Top Grid: Progress bar & table on left, 4 cards on right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '32px',
          }}
        >
          {/* Left Column: 90% Meter & Caps Table */}
          <div>
            <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
              Payouts
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                color: '#F0F6FF',
                margin: '8px 0 16px',
              }}
            >
              Keep 90% Of Your Profit
            </h2>
            <p style={{ color: 'rgba(240, 246, 255, 0.7)', fontSize: '15.5px', lineHeight: 1.6, margin: '0 0 28px' }}>
              Our profit share to traders is 90%. After 7 winning days, you can request a payout, $150 or more counts as a winning day.
            </p>

            {/* 90% Share Progress Meter */}
            <div className="aether-glass" style={{ padding: '24px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', color: 'rgba(240, 246, 255, 0.75)', fontWeight: 600 }}>
                  Your Share
                </span>
                <span className="font-mono" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#C9A45E' }}>
                  90%
                </span>
              </div>
              <div
                style={{
                  height: '12px',
                  borderRadius: '999px',
                  background: 'rgba(5, 10, 18, 0.8)',
                  overflow: 'hidden',
                  border: '1px solid rgba(185, 229, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    width: '90%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #C9A45E 0%, #F3CA65 100%)',
                    borderRadius: '999px',
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '12px', color: 'rgba(240, 246, 255, 0.5)' }}>
                <span>FLI Capital retains the remainder</span>
                <span className="font-mono">10% Firm</span>
              </div>
            </div>

            {/* Max Payout Table */}
            <div className="aether-glass" style={{ overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', borderBottom: '1px solid rgba(185, 229, 255, 0.1)' }}>
                <h3 className="font-display" style={{ fontSize: '15px', fontWeight: 700, color: '#C9A45E' }}>
                  Max Payout by Account Size
                </h3>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(185, 229, 255, 0.08)', textAlign: 'left' }}>
                    <th className="label-caps" style={{ padding: '12px 24px', fontSize: '10.5px', color: 'rgba(240, 246, 255, 0.5)' }}>
                      Account Size
                    </th>
                    <th className="label-caps" style={{ padding: '12px 24px', fontSize: '10.5px', textAlign: 'right', color: 'rgba(240, 246, 255, 0.5)' }}>
                      Payout Cap Per Cycle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PAYOUT_CAPS.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < PAYOUT_CAPS.length - 1 ? '1px solid rgba(185, 229, 255, 0.06)' : 'none' }}>
                      <td style={{ padding: '14px 24px', color: 'rgba(240, 246, 255, 0.85)', fontWeight: 600 }}>
                        {row.size}
                      </td>
                      <td className="font-mono" style={{ padding: '14px 24px', textAlign: 'right', fontWeight: 700, color: '#C9A45E' }}>
                        {row.cap}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '16px',
            }}
          >
            {PAYOUT_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="aether-glass"
                  style={{
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(201, 164, 94, 0.12)',
                      border: '1px solid rgba(201, 164, 94, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <IconComp size={20} color="#C9A45E" />
                  </div>
                  <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#C9A45E', marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(240, 246, 255, 0.65)', margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Methods Banner */}
        <div
          className="aether-glass"
          style={{
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          <div>
            <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#C9A45E' }}>
              Payment Methods
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(240, 246, 255, 0.7)', marginTop: '6px', maxWidth: '650px' }}>
              Approved payouts are paid out through <strong style={{ color: '#F0F6FF' }}>Rise</strong> or <strong style={{ color: '#F0F6FF' }}>Crypto</strong>. Choose whichever suits you when you request your withdrawal from the trader dashboard.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 800,
                color: '#F0F6FF',
                letterSpacing: '-0.02em',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              Rise
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#F0F6FF',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <span style={{ color: '#C9A45E', fontSize: '18px' }}>₿</span>
              Crypto
            </span>
          </div>
        </div>

        {/* Simulated Capital Notice */}
        <div
          className="aether-glass-gold"
          style={{
            padding: '24px 32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <ShieldCheck size={18} color="#C9A45E" />
            <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#C9A45E' }}>
              Simulated Capital
            </h3>
          </div>
          <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'rgba(240, 246, 255, 0.7)', margin: 0 }}>
            Assessments are conducted in a simulated trading environment. Funded Accounts are provided with notional capital backed by the Firm — the capital is notional and may not match the amount on deposit with the Liquidity Provider. Notional funding does not impact your trading conditions in any way.
          </p>
        </div>

      </div>
    </section>
  );
}
