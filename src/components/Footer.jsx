import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(185, 229, 255, 0.1)',
        background: 'rgba(3, 7, 12, 0.96)',
        padding: '60px 24px 40px',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Top 5-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Logo & Info (takes 2 cols on wide screens) */}
          <div style={{ gridColumn: 'span 2' }}>
            <a href="#top" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="/assets/real/FLILogo1.png"
                alt="FLI Capital"
                style={{ height: '36px', width: 'auto' }}
              />
            </a>
            <p style={{ color: 'rgba(240, 246, 255, 0.55)', fontSize: '14px', lineHeight: 1.6, marginTop: '16px', maxWidth: '380px' }}>
              A futures prop firm funding disciplined traders with a transparent, one-step assessment and up to $1M in capital.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@flicapital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="aether-glass"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'rgba(240, 246, 255, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.53A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.89.53 9.39.53 9.39.53s7.5 0 9.39-.53a3 3 0 0 0 2.11-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.24 3.6Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/flicapital_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="aether-glass"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'rgba(240, 246, 255, 0.7)',
                  textDecoration: 'none',
                }}
              >
                <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.net/flicapital_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="aether-glass"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'rgba(240, 246, 255, 0.7)',
                  textDecoration: 'none',
                }}
              >
                <svg style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.19 21.5c-2.9-.02-5.13-.98-6.63-2.85C4.22 17 3.55 14.77 3.5 12.02v-.04c.05-2.75.72-4.98 2.06-6.63C7.06 3.48 9.29 2.52 12.19 2.5c2.22.02 4.07.58 5.5 1.66a7.4 7.4 0 0 1 2.36 3.19l-1.94.73a5.5 5.5 0 0 0-1.68-2.28c-1.04-.78-2.44-1.19-4.24-1.2-2.28.02-4 .77-5.13 2.16-1.05 1.3-1.6 3.14-1.64 5.45.04 2.31.59 4.15 1.64 5.46 1.13 1.39 2.85 2.13 5.13 2.16 2.06-.02 3.42-.5 4.34-1.4.85-.83 1.2-1.86 1.24-2.71-.14-.99-.66-1.75-1.62-2.32a6.3 6.3 0 0 0-.6-.31c-.13.93-.42 1.68-.9 2.26-.65.79-1.6 1.22-2.82 1.28-.94.05-1.85-.18-2.55-.65-.83-.56-1.32-1.42-1.37-2.42-.1-1.96 1.46-3.37 3.98-3.51.9-.05 1.74-.01 2.51.11-.1-.62-.31-1.11-.62-1.46-.42-.47-1.08-.71-1.95-.72h-.03c-.7 0-1.65.19-2.26 1.1l-1.65-1.11c.81-1.2 2.13-1.86 3.9-1.86h.05c2.97.02 4.73 1.83 5.01 5l.01.06c.16.08.31.17.46.26 1.31.77 2.27 1.92 2.51 3.55l.01.06v.06c-.05 1.55-.67 3.02-1.75 4.07-1.28 1.24-3.16 1.88-5.75 1.9Zm1.13-9.02c-.28 0-.57 0-.86.03-1.9.11-2.15 1.02-2.11 1.65.04.79.9 1.16 1.72 1.11.75-.04 1.6-.33 1.95-2.02.06-.24.1-.5.14-.76-.3-.02-.6-.03-.9-.02Z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://www.x.com/flicapital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="aether-glass"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'rgba(240, 246, 255, 0.7)',
                  textDecoration: 'none',
                }}
              >
                <svg style={{ width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2h3.3l-7.2 8.24L23.7 22h-6.6l-5.18-6.77L5.99 22H2.68l7.7-8.8L2 2h6.77l4.68 6.19Zm-1.16 18h1.83L7.34 3.9H5.38Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="label-caps" style={{ fontSize: '10.5px', color: 'rgba(240, 246, 255, 0.45)', marginBottom: '16px' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#how" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>How It Works</a></li>
              <li><a href="#payouts" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Payouts</a></li>
              <li><a href="#community" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Community</a></li>
              <li><a href="#faq" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>FAQ</a></li>
            </ul>
          </div>

          {/* Program Column */}
          <div>
            <h3 className="label-caps" style={{ fontSize: '10.5px', color: 'rgba(240, 246, 255, 0.45)', marginBottom: '16px' }}>
              Program
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#plans" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Plans</a></li>
              <li><a href="http://dashboard.flicapital.com/challenges" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Get Funded</a></li>
              <li><a href="https://dashboard.flicapital.com/en/affiliates/request" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Become An Affiliate</a></li>
            </ul>
          </div>

          {/* Platforms & Access Column */}
          <div>
            <h3 className="label-caps" style={{ fontSize: '10.5px', color: 'rgba(240, 246, 255, 0.45)', marginBottom: '16px' }}>
              Platforms &amp; Access
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="https://dashboard.flicapital.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Login</a></li>
              <li><a href="https://volumetricatrading.com/en/index" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Volumetrica</a></li>
              <li><a href="https://tradingthings.io" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Trading Things</a></li>
              <li><a href="https://dashboardanalytix.com/client-terms-and-policies/?v=3acf83834396" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240, 246, 255, 0.65)', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Risk Disclaimer & Copyright */}
        <div style={{ borderTop: '1px solid rgba(185, 229, 255, 0.08)', paddingTop: '28px' }}>
          <p style={{ fontSize: '12px', lineHeight: 1.7, color: 'rgba(240, 246, 255, 0.45)', margin: 0 }}>
            <strong style={{ color: 'rgba(240, 246, 255, 0.65)' }}>Risk Disclaimer:</strong> Trading futures and other leveraged products carries a substantial risk of loss and is not suitable for every investor. Past performance is not indicative of future results. Nothing on this site is a guarantee of funding, profit, or income, and no result is risk-free. Only trade with capital you can afford to lose. FLI Capital provides evaluation services and does not provide investment advice.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(240, 246, 255, 0.35)', marginTop: '16px' }}>
            © 2026 FLI Capital. All rights reserved. Charges appear on statements as dashboardanalytix.com.
          </p>
        </div>

      </div>
    </footer>
  );
}
