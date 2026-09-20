import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" style={{ position: 'relative', zIndex: 10, padding: '70px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        <div
          className="aether-glass-gold"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '28px',
            padding: '70px 32px',
            textAlign: 'center',
          }}
        >
          {/* Subtle Discord decorative SVG background mark */}
          <svg
            style={{
              position: 'absolute',
              left: '-20px',
              bottom: '-20px',
              width: '180px',
              height: '180px',
              opacity: 0.05,
              pointerEvents: 'none',
              transform: 'rotate(-15deg)',
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
          </svg>

          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
              Community
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                color: '#F0F6FF',
                textTransform: 'uppercase',
                margin: '12px 0 18px',
                lineHeight: 1.1,
              }}
            >
              Join the FLI Capital Discord
            </h2>

            <p style={{ color: 'rgba(240, 246, 255, 0.7)', fontSize: '15.5px', lineHeight: 1.65, margin: '0 auto 36px', maxWidth: '580px' }}>
              Connect with funded traders, talk strategy, ask questions about the assessment rules, and be the first to hear about new plans and promotions.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a
                href="https://discord.gg/flicapital"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aether-primary"
                style={{
                  padding: '15px 32px',
                  fontSize: '15px',
                  borderRadius: '12px',
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
                </svg>
                <span>Join Our Discord</span>
              </a>

              <a
                href="http://dashboard.flicapital.com/challenges"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aether-ghost"
                style={{
                  padding: '15px 30px',
                  fontSize: '15px',
                  borderRadius: '12px',
                }}
              >
                <span>Get Funded</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Feature Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span
                className="label-caps"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  background: 'rgba(5, 10, 18, 0.7)',
                  border: '1px solid rgba(185, 229, 255, 0.12)',
                  fontSize: '11px',
                  color: 'rgba(240, 246, 255, 0.75)',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981' }} />
                Active Community
              </span>

              <span
                className="label-caps"
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  background: 'rgba(5, 10, 18, 0.7)',
                  border: '1px solid rgba(185, 229, 255, 0.12)',
                  fontSize: '11px',
                  color: 'rgba(240, 246, 255, 0.75)',
                }}
              >
                Trade Discussion
              </span>

              <span
                className="label-caps"
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  background: 'rgba(5, 10, 18, 0.7)',
                  border: '1px solid rgba(185, 229, 255, 0.12)',
                  fontSize: '11px',
                  color: 'rgba(240, 246, 255, 0.75)',
                }}
              >
                Education Channels
              </span>

              <span
                className="label-caps"
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  background: 'rgba(5, 10, 18, 0.7)',
                  border: '1px solid rgba(185, 229, 255, 0.12)',
                  fontSize: '11px',
                  color: 'rgba(240, 246, 255, 0.75)',
                }}
              >
                Announcements & Promos
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
