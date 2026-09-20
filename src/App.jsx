import React, { useState, useEffect } from 'react';
import InstitutionalTerminal from './components/InstitutionalTerminal.jsx';
import GlobalFixedCanvas from './components/GlobalFixedCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatsBar from './components/StatsBar.jsx';
import LivePayoutTicker from './components/LivePayoutTicker.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import PlanMatrix from './components/PlanMatrix.jsx';
import ProfitCalculator from './components/ProfitCalculator.jsx';
import Payouts from './components/Payouts.jsx';
import VerifiedPayoutProof from './components/VerifiedPayoutProof.jsx';
import Testimonials from './components/Testimonials.jsx';
import Community from './components/Community.jsx';
import PlatformLogos from './components/PlatformLogos.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import CompanyDisclaimer from './components/CompanyDisclaimer.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <div
      style={{
        backgroundColor: '#050A12',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* 1. Pinned 3D Background: fixed across the screen, visible throughout scrolling */}
      <GlobalFixedCanvas />

      {/* 2. Sticky Glass Navbar with Scroll Progress Bar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* 3. Page Content Flow - reveals naturally over the fixed 3D canvas */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Dedicated Hero Section: spacious framing with zero overlap */}
        <Hero />

        {/* 4-Stat Metric Bar */}
        <StatsBar />

        {/* 21st.dev Live Streaming Payout Activity Ticker */}
        <LivePayoutTicker />

        {/* 3-Step "How It Works" + Trust Bar */}
        <HowItWorks />

        {/* Assessment & Instant Funded Plan Matrices with 21st.dev Spotlight Cards */}
        <PlanMatrix />

        {/* 21st.dev Interactive Payout Calculator + Embedded WebGL Liquid Gold Shader */}
        <ProfitCalculator />

        {/* 90% Profit Share, Caps Table, Payout Features, Payment Methods & Simulated Capital */}
        <Payouts />

        {/* Real Verified Payouts Marquee Proof */}
        <VerifiedPayoutProof />

        {/* Real Trader Testimonials */}
        <Testimonials />

        {/* Community / Discord Section */}
        <Community />

        {/* Partner Platform Logos Marquee */}
        <PlatformLogos />

        {/* Real 9-Question FAQ Accordion */}
        <FAQ />

        {/* Golden Final CTA */}
        <FinalCTA />
      </main>

      {/* 4. Company Disclaimer & Footer */}
      <CompanyDisclaimer />
      <Footer />

      {/* 5. Floating Back To Top Button */}
      <BackToTop />

      <InstitutionalTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
