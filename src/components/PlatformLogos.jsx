import React from 'react';

const PLATFORMS = [
  {
    name: 'Volumetrica',
    url: 'https://volumetricatrading.com/en/index',
    logo: '/assets/real/volumetrica-logo_1783584225397-oq_zAujy.png',
  },
  {
    name: 'DeepCharts',
    url: 'https://deepcharts.com/',
    logo: '/assets/real/deepcharts_trimmed-sAVg6-GQ.png',
  },
  {
    name: 'TradingThings',
    url: 'https://tradingthings.io',
    logo: '/assets/real/tradingthings_dark_trimmed-Bhk-nmck.png',
  },
  {
    name: 'TradingView',
    url: 'https://www.tradingview.com/',
    logo: '/assets/real/TradingView_Logo_-_Black_-_985x128_-_zonalogo.com.png',
    isTV: true,
  },
];

export default function PlatformLogos() {
  return (
    <section id="platforms" style={{ position: 'relative', zIndex: 10, padding: '80px 24px 70px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
        
        <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
          Platforms
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
          Trade On Platforms You Trust
        </h2>
        <p style={{ color: 'rgba(240, 246, 255, 0.7)', fontSize: '16px', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.6 }}>
          Connect through our integrated futures technology and trade from your preferred platform.
        </p>

        {/* Marquee with real partner logos */}
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
            padding: '16px 0',
          }}
        >
          <div className="aether-marquee-track" style={{ gap: '28px', alignItems: 'center' }}>
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="aether-glass"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                  minWidth: '220px',
                  padding: '0 32px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(201, 164, 94, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(185, 229, 255, 0.14)';
                }}
              >
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  style={{
                    maxHeight: item.isTV ? '40px' : '44px',
                    maxWidth: '170px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: item.isTV ? 'invert(1)' : 'none',
                    opacity: 0.9,
                    transition: 'opacity 0.2s',
                  }}
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
