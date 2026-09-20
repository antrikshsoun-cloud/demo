import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Terminal } from 'lucide-react';
import { toggleAudioMute, getAudioMuted, subscribeAudioMute, playRelayClick } from '../utils/audioHaptics';

export default function Navbar({ onOpenTerminal }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(getAudioMuted());

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      setScrollProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const unsubscribe = subscribeAudioMute(setMuted);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleMuteClick = () => {
    const nextMuted = toggleAudioMute();
    setMuted(nextMuted);
    if (!nextMuted) playRelayClick();
  };

  const handleTerminalClick = () => {
    playRelayClick();
    if (onOpenTerminal) onOpenTerminal();
  };

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          background: 'linear-gradient(90deg, #C9A45E, #F3CA65)',
          zIndex: 100,
          transition: 'width 0.1s linear',
        }}
      />

      {/* Main Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(5, 10, 18, 0.85)',
          borderBottom: '1px solid rgba(185, 229, 255, 0.12)',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img
              src="/assets/real/FLILogo1.png"
              alt="FLI Capital"
              style={{ height: '36px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
          >
            <a href="#how" className="nav-link">How It Works</a>
            <a href="#plans" className="nav-link">Plans</a>
            <a href="#platforms" className="nav-link">Platforms</a>
            <a href="#calculator" className="nav-link">Calculator</a>
            <a href="#payouts" className="nav-link">Payouts</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#community" className="nav-link">Community</a>
          </nav>

          {/* Action CTAs & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Audio Haptics Toggle Button */}
            <button
              type="button"
              onClick={handleMuteClick}
              title={muted ? 'Unmute Haptic Audio' : 'Mute Haptic Audio'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: muted ? 'rgba(255, 255, 255, 0.05)' : 'rgba(201, 164, 94, 0.15)',
                border: muted ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(243, 202, 101, 0.5)',
                color: muted ? 'rgba(240, 246, 255, 0.45)' : '#F3CA65',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Toggle Haptic Sound"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* CME Terminal Mode HUD Toggle Button */}
            <button
              type="button"
              onClick={handleTerminalClick}
              className="desktop-login"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '7px',
                padding: '7px 14px',
                borderRadius: '8px',
                background: 'rgba(201, 164, 94, 0.12)',
                border: '1px solid rgba(201, 164, 94, 0.45)',
                color: '#FBE07A',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 0 15px rgba(201, 164, 94, 0.15)',
              }}
            >
              <Terminal size={13} />
              <span>Terminal</span>
            </button>

            <a
              href="http://dashboard.flicapital.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'none',
                color: 'rgba(240, 246, 255, 0.75)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'color 0.2s',
              }}
              className="desktop-login hover:text-gold"
            >
              Login
            </a>

            <a
              href="http://dashboard.flicapital.com/challenges"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aether-primary"
              style={{
                padding: '9px 20px',
                fontSize: '13.5px',
                borderRadius: '8px',
              }}
            >
              <span>Get Funded</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: '#F0F6FF',
                cursor: 'pointer',
                padding: '4px',
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '16px 24px 24px',
              backgroundColor: '#070D16',
              borderTop: '1px solid rgba(185, 229, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleTerminalClick();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '8px',
                background: 'rgba(201, 164, 94, 0.15)',
                border: '1px solid #C9A45E',
                color: '#FBE07A',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              <Terminal size={15} />
              <span>Launch CME Terminal Mode</span>
            </button>

            <a href="#how" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F0F6FF', textDecoration: 'none', fontSize: '15px' }}>How It Works</a>
            <a href="#plans" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F0F6FF', textDecoration: 'none', fontSize: '15px' }}>Plans</a>
            <a href="#platforms" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F0F6FF', textDecoration: 'none', fontSize: '15px' }}>Platforms</a>
            <a href="#payouts" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F0F6FF', textDecoration: 'none', fontSize: '15px' }}>Payouts</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F0F6FF', textDecoration: 'none', fontSize: '15px' }}>FAQ</a>
            <a href="#community" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F0F6FF', textDecoration: 'none', fontSize: '15px' }}>Community</a>
            <a href="http://dashboard.flicapital.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A45E', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>Login</a>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-login {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-toggle {
            display: block !important;
          }
        }
        .nav-link {
          color: rgba(240, 246, 255, 0.75);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #C9A45E;
        }
      `}</style>
    </>
  );
}
