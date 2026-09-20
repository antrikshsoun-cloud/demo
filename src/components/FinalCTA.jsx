import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section style={{ position: 'relative', zIndex: 10, padding: '40px 24px 90px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        <div
          style={{
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #C9A45E 0%, #E0C286 50%, #A9884A 100%)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            padding: '64px 32px',
            textAlign: 'center',
            color: '#070D08',
            boxShadow: '0 24px 60px -10px rgba(201, 164, 94, 0.45)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle luminous ambient reflection */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '30%',
              width: '40%',
              height: '100%',
              background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.35) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                margin: '0 0 16px',
                color: '#070D08',
              }}
            >
              Start Your One-Step Assessment Today
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                fontWeight: 500,
                color: '#1A291E',
                lineHeight: 1.6,
                margin: '0 auto 32px',
              }}
            >
              Prove your edge once and trade the futures markets with FLI Capital's backing — up to $1M in capital and up to 90% of the profits.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '24px',
              }}
            >
              <a
                href="http://dashboard.flicapital.com/challenges"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 36px',
                  fontSize: '15px',
                  fontWeight: 800,
                  borderRadius: '12px',
                  background: '#070D08',
                  color: '#C9A45E',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.45)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.backgroundColor = '#162319';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#070D08';
                }}
              >
                <span>Get Funded</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="http://dashboard.flicapital.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  fontSize: '15px',
                  fontWeight: 700,
                  borderRadius: '12px',
                  background: 'rgba(7, 13, 8, 0.08)',
                  color: '#070D08',
                  border: '1.5px solid rgba(7, 13, 8, 0.25)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(7, 13, 8, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(7, 13, 8, 0.08)';
                }}
              >
                <span>Login</span>
              </a>
            </div>

            <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(7, 13, 8, 0.7)', margin: 0 }}>
              By purchasing an account, you agree to our{' '}
              <a
                href="https://dashboardanalytix.com/client-terms-and-policies/?v=3acf83834396"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#070D08', textDecoration: 'underline' }}
              >
                terms and services
              </a>
              .
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
