import React, { useEffect, useState } from 'react';
import { Activity, ArrowLeft, Radio, Server, Shield, Zap } from 'lucide-react';
import { playRelayClick } from '../utils/audioHaptics';

// Simulated CME DOM Ladder for NQ
const INITIAL_BIDS = [
  { price: '20,845.25', size: 142, bar: 88 },
  { price: '20,845.00', size: 198, bar: 95 },
  { price: '20,844.75', size: 85, bar: 55 },
  { price: '20,844.50', size: 120, bar: 72 },
  { price: '20,844.25', size: 210, bar: 100 },
];

const INITIAL_ASKS = [
  { price: '20,846.50', size: 165, bar: 82 },
  { price: '20,846.25', size: 130, bar: 68 },
  { price: '20,846.00', size: 92, bar: 50 },
  { price: '20,845.75', size: 178, bar: 90 },
  { price: '20,845.50', size: 220, bar: 100 },
];

export default function InstitutionalTerminal({ isOpen, onClose }) {
  const [bids, setBids] = useState(INITIAL_BIDS);
  const [asks, setAsks] = useState(INITIAL_ASKS);
  const [latency, setLatency] = useState(7.8);
  const [tickCount, setTickCount] = useState(489201);

  // Live Simulated High-Frequency CME Market Data Feed
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setLatency((prev) => +(7.4 + Math.random() * 0.9).toFixed(1));
      setTickCount((prev) => prev + Math.floor(Math.random() * 8) + 1);

      setBids((prevBids) =>
        prevBids.map((b) => ({
          ...b,
          size: Math.max(20, b.size + (Math.floor(Math.random() * 15) - 7)),
        }))
      );

      setAsks((prevAsks) =>
        prevAsks.map((a) => ({
          ...a,
          size: Math.max(20, a.size + (Math.floor(Math.random() * 15) - 7)),
        }))
      );
    }, 450);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExit = () => {
    playRelayClick();
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#04070B',
        color: '#E0E7FF',
        fontFamily: 'monospace, "Courier New", Courier',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      {/* Top Bloomberg Terminal Status Bar */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          background: 'rgba(8, 14, 22, 0.95)',
          borderBottom: '1px solid rgba(201, 164, 94, 0.35)',
          fontSize: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            type="button"
            onClick={handleExit}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '6px',
              background: 'rgba(201, 164, 94, 0.15)',
              border: '1px solid #C9A45E',
              color: '#FBE07A',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <ArrowLeft size={14} />
            <span>RETURN TO LUXURY VIEW [ESC]</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E676', boxShadow: '0 0 8px #00E676' }} />
            <span style={{ color: '#00E676', fontWeight: 700 }}>CME DIRECT NODE ONLINE</span>
          </div>

          <span style={{ color: 'rgba(240, 246, 255, 0.45)' }}>|</span>
          <span>ROUTING: AURORA DATA CENTER (IL)</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FBE07A' }}>
            <Zap size={14} />
            <span>LATENCY: {latency} MS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#70D6FF' }}>
            <Activity size={14} />
            <span>TICKS/SEC: {tickCount.toLocaleString()}</span>
          </div>
        </div>
      </header>

      {/* Main Terminal Dashboard Grid */}
      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '360px 1fr 320px',
          gap: '1px',
          background: 'rgba(201, 164, 94, 0.15)',
          padding: '1px',
          overflow: 'hidden',
        }}
      >
        {/* Column 1: CME Level 2 DOM Ladder */}
        <div style={{ background: '#050A10', padding: '18px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontWeight: 800, color: '#C9A45E' }}>NQ // E-MINI NASDAQ DOM</span>
            <span style={{ color: '#00E676', fontSize: '11px' }}>SPREAD: 0.25</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', fontSize: '11px', color: 'rgba(240, 246, 255, 0.45)', paddingBottom: '6px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span>PRICE</span>
            <span style={{ textAlign: 'center' }}>SIZE</span>
            <span style={{ textAlign: 'right' }}>VOLUME</span>
          </div>

          {/* Asks (Red) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', margin: '8px 0' }}>
            {asks.map((ask, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  fontSize: '11.5px',
                  padding: '3px 0',
                }}
              >
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: `${ask.bar}%`, background: 'rgba(255, 59, 48, 0.15)', zIndex: 0 }} />
                <span style={{ color: '#FF453A', position: 'relative', zIndex: 1 }}>{ask.price}</span>
                <span style={{ textAlign: 'center', color: '#F0F6FF', position: 'relative', zIndex: 1 }}>{ask.size}</span>
                <span style={{ textAlign: 'right', color: 'rgba(240, 246, 255, 0.65)', position: 'relative', zIndex: 1 }}>{ask.bar * 12}</span>
              </div>
            ))}
          </div>

          {/* Current Mid Price Banner */}
          <div
            style={{
              padding: '8px 12px',
              margin: '4px 0',
              borderRadius: '4px',
              background: 'rgba(201, 164, 94, 0.18)',
              border: '1px solid #C9A45E',
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 800,
              color: '#FBE07A',
            }}
          >
            <span>LAST: 20,845.50</span>
            <span>VOL: 1.48M</span>
          </div>

          {/* Bids (Green) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', margin: '8px 0' }}>
            {bids.map((bid, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  fontSize: '11.5px',
                  padding: '3px 0',
                }}
              >
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${bid.bar}%`, background: 'rgba(0, 230, 118, 0.15)', zIndex: 0 }} />
                <span style={{ color: '#00E676', position: 'relative', zIndex: 1 }}>{bid.price}</span>
                <span style={{ textAlign: 'center', color: '#F0F6FF', position: 'relative', zIndex: 1 }}>{bid.size}</span>
                <span style={{ textAlign: 'right', color: 'rgba(240, 246, 255, 0.65)', position: 'relative', zIndex: 1 }}>{bid.bar * 15}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Institutional Execution Analytics */}
        <div style={{ background: '#050A10', padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h4 style={{ margin: 0, fontSize: '15px', color: '#FBE07A', fontWeight: 800 }}>
              FLI CAPITAL // INSTITUTIONAL LIQUIDITY TELEMETRY
            </h4>
            <span style={{ color: 'rgba(240, 246, 255, 0.5)', fontSize: '11px' }}>REFRESH: 60 FPS STREAM</span>
          </div>

          {/* 4 Telemetry Benchmark Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' }}>
            <div style={{ padding: '14px', borderRadius: '8px', background: 'rgba(10, 18, 28, 0.8)', border: '1px solid rgba(201, 164, 94, 0.25)' }}>
              <div style={{ fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)' }}>EXECUTION LATENCY</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#00E676', marginTop: '4px' }}>&lt; 8.2ms</div>
              <div style={{ fontSize: '10px', color: '#70D6FF', marginTop: '2px' }}>Aurora CME Cross-Connect</div>
            </div>

            <div style={{ padding: '14px', borderRadius: '8px', background: 'rgba(10, 18, 28, 0.8)', border: '1px solid rgba(201, 164, 94, 0.25)' }}>
              <div style={{ fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)' }}>PROFIT SHARE</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#FBE07A', marginTop: '4px' }}>90% / 10%</div>
              <div style={{ fontSize: '10px', color: '#FBE07A', marginTop: '2px' }}>Bi-Weekly Payout Cycles</div>
            </div>

            <div style={{ padding: '14px', borderRadius: '8px', background: 'rgba(10, 18, 28, 0.8)', border: '1px solid rgba(201, 164, 94, 0.25)' }}>
              <div style={{ fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)' }}>MAX POOL ALLOCATION</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#F0F6FF', marginTop: '4px' }}>$1,000,000</div>
              <div style={{ fontSize: '10px', color: '#00E676', marginTop: '2px' }}>Instant Scaling Engine</div>
            </div>

            <div style={{ padding: '14px', borderRadius: '8px', background: 'rgba(10, 18, 28, 0.8)', border: '1px solid rgba(201, 164, 94, 0.25)' }}>
              <div style={{ fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)' }}>SLIPPAGE PROTECTION</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#00E676', marginTop: '4px' }}>ACTIVE</div>
              <div style={{ fontSize: '10px', color: '#70D6FF', marginTop: '2px' }}>Direct Market Access (DMA)</div>
            </div>
          </div>

          {/* Institutional Simulated Order Form */}
          <div style={{ flex: 1, borderRadius: '8px', border: '1px solid rgba(185, 229, 255, 0.12)', background: 'rgba(8, 14, 22, 0.65)', padding: '20px' }}>
            <div style={{ color: '#FBE07A', fontWeight: 700, marginBottom: '14px' }}>INSTITUTIONAL SIMULATION CONSOLE</div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(240, 246, 255, 0.7)' }}>
              You are currently viewing FLI Capital's low-latency institutional execution telemetry interface. All assessment tiers feature direct CME Level 2 order routing with no internal dealer intervention or trailing drawdown traps.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
              <a
                href="#plans"
                onClick={handleExit}
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  background: '#C9A45E',
                  color: '#050A10',
                  fontWeight: 800,
                  fontSize: '13px',
                  textDecoration: 'none',
                }}
              >
                DEPLOY CAPITAL ON #PLANS
              </a>

              <button
                type="button"
                onClick={handleExit}
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  background: 'transparent',
                  border: '1px solid rgba(240, 246, 255, 0.3)',
                  color: '#F0F6FF',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                DISMISS TERMINAL HUD
              </button>
            </div>
          </div>
        </div>

        {/* Column 3: Live Liquidity Tape */}
        <div style={{ background: '#050A10', padding: '18px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 800, color: '#C9A45E', marginBottom: '12px' }}>LIVE CME ORDER TAPE</div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
            <div style={{ color: '#00E676' }}>[FILL] 12:44:02 · NQ 10x @ 20,845.50 BUY</div>
            <div style={{ color: '#FF453A' }}>[FILL] 12:44:01 · ES 25x @ 5,820.25 SELL</div>
            <div style={{ color: '#00E676' }}>[FILL] 12:44:00 · NQ 4x @ 20,845.25 BUY</div>
            <div style={{ color: '#00E676' }}>[FILL] 12:43:59 · CL 15x @ 71.40 BUY</div>
            <div style={{ color: '#FF453A' }}>[FILL] 12:43:58 · NQ 8x @ 20,845.75 SELL</div>
            <div style={{ color: '#00E676' }}>[FILL] 12:43:56 · GC 6x @ 2,680.10 BUY</div>
            <div style={{ color: '#00E676' }}>[FILL] 12:43:55 · NQ 20x @ 20,845.25 BUY</div>
            <div style={{ color: '#FF453A' }}>[FILL] 12:43:54 · ES 12x @ 5,820.50 SELL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
