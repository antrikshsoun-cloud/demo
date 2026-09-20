import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';

const LIVE_EVENTS = [
  { trader: 'David M.', action: 'Payout Approved', amount: '$14,280', method: 'RiseWorks', time: '2m ago' },
  { trader: 'Alex V.', action: 'Passed Assessment', amount: '$150,000 Account', method: 'Tradovate', time: '5m ago' },
  { trader: 'Sarah T.', action: 'Payout Processed', amount: '$8,940', method: 'USDT', time: '11m ago' },
  { trader: 'Julian K.', action: 'Passed 1-Step Assessment', amount: '$100,000 Account', method: 'NinjaTrader', time: '16m ago' },
  { trader: 'Michael B.', action: 'Payout Approved', amount: '$21,500', method: 'Bank Wire', time: '23m ago' },
  { trader: 'Elena R.', action: 'Funded Master Account', amount: '$250,000 Account', method: 'TradingView', time: '34m ago' },
  { trader: 'Lucas P.', action: 'Payout Processed', amount: '$11,720', method: 'RiseWorks', time: '41m ago' },
];

export default function LivePayoutTicker() {
  const doubleList = [...LIVE_EVENTS, ...LIVE_EVENTS];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'rgba(5, 10, 18, 0.85)',
        borderTop: '1px solid rgba(201, 164, 94, 0.18)',
        borderBottom: '1px solid rgba(201, 164, 94, 0.18)',
        padding: '12px 0',
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Fixed Left Live Badge */}
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0 24px',
            borderRight: '1px solid rgba(201, 164, 94, 0.2)',
            background: 'rgba(5, 10, 18, 0.95)',
            zIndex: 2,
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px #10B981',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }}
          />
          <span className="label-caps" style={{ fontSize: '11px', color: '#F3CA65', fontWeight: 800 }}>
            Live Feed
          </span>
        </div>

        {/* Scrolling Ticker Stream */}
        <div
          style={{
            display: 'flex',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '32px',
              animation: 'marquee 38s linear infinite',
              willChange: 'transform',
            }}
          >
            {doubleList.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: 'rgba(240, 246, 255, 0.75)',
                }}
              >
                <ShieldCheck size={14} color="#C9A45E" />
                <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{item.trader}</span>
                <span style={{ color: 'rgba(240, 246, 255, 0.5)' }}>{item.action}</span>
                <span className="font-mono" style={{ fontWeight: 800, color: '#F3CA65' }}>{item.amount}</span>
                <span
                  style={{
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: 'rgba(201, 164, 94, 0.12)',
                    border: '1px solid rgba(201, 164, 94, 0.25)',
                    color: '#C9A45E',
                    fontWeight: 600,
                  }}
                >
                  {item.method}
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(240, 246, 255, 0.4)' }}>• {item.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
