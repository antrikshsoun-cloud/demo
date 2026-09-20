import React, { useState } from 'react';
import { Check, ArrowRight, RotateCw } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { playRelayClick } from '../utils/audioHaptics';

const ASSESSMENT_PLANS = [
  {
    size: '$25K',
    tier: 'Starter · One-Step',
    origPrice: '$112.50',
    salePrice: '$67.50',
    discountMsg: 'Save $45 (40% off) with code LEAF40',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=90&category=35',
    isPopular: false,
    evalRules: [
      'Profit Target: $1,500',
      'Max Drawdown: $1,000 (4%)',
      'Trailing Type: EOD',
      'Max Contract: 1/10',
      'Consistency Rule: 50% (Assessment Only)',
      'Payout Cap Per Cycle: $2,500',
      'Profit Split: 90%',
      'No Activation Fee',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$2,500' },
      { label: 'Consistency', val: 'None' },
      { label: 'Daily Loss Limit', val: 'None' },
      { label: 'Max Drawdown (EOD)', val: '$1,000' },
    ],
  },
  {
    size: '$50K',
    tier: 'Essential · One-Step',
    origPrice: '$162.50',
    salePrice: '$97.50',
    discountMsg: 'Save $65 (40% off) with code LEAF40',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=92&category=35',
    isPopular: true,
    evalRules: [
      'Profit Target: $3,000',
      'Max Drawdown: $2,000 (4%)',
      'Trailing Type: EOD',
      'Max Contract: 3/30',
      'Consistency Rule: 50% (Assessment Only)',
      'Payout Cap Per Cycle: $5,000',
      'Profit Split: 90%',
      'No Activation Fee',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$5,000' },
      { label: 'Consistency', val: 'None' },
      { label: 'Daily Loss Limit', val: 'None' },
      { label: 'Max Drawdown (EOD)', val: '$2,000' },
    ],
  },
  {
    size: '$100K',
    tier: 'Professional · One-Step',
    origPrice: '$187.50',
    salePrice: '$112.50',
    discountMsg: 'Save $75 (40% off) with code LEAF40',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=94&category=35',
    isPopular: false,
    evalRules: [
      'Profit Target: $6,000',
      'Max Drawdown: $3,000 (3%)',
      'Trailing Type: EOD',
      'Max Contract: 6/60',
      'Consistency Rule: 50% (Assessment Only)',
      'Payout Cap Per Cycle: $10,000',
      'Profit Split: 90%',
      'No Activation Fee',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$10,000' },
      { label: 'Consistency', val: 'None' },
      { label: 'Daily Loss Limit', val: 'None' },
      { label: 'Max Drawdown (EOD)', val: '$3,000' },
    ],
  },
  {
    size: '$150K',
    tier: 'Advanced · One-Step',
    origPrice: '$250',
    salePrice: '$150',
    discountMsg: 'Save $100 (40% off) with code LEAF40',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=96&category=35',
    isPopular: false,
    evalRules: [
      'Profit Target: $9,000',
      'Max Drawdown: $4,500 (3%)',
      'Trailing Type: EOD',
      'Max Contract: 9/90',
      'Consistency Rule: 50% (Assessment Only)',
      'Payout Cap Per Cycle: $15,000',
      'Profit Split: 90%',
      'No Activation Fee',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$15,000' },
      { label: 'Consistency', val: 'None' },
      { label: 'Daily Loss Limit', val: 'None' },
      { label: 'Max Drawdown (EOD)', val: '$4,500' },
    ],
  },
];

const INSTANT_PLANS = [
  {
    size: '$25K',
    tier: 'Starter · Instant Funded',
    origPrice: '$307.00',
    salePrice: '$230.25',
    discountMsg: 'Save $76.75 (25% off) with code FLIGHT',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=103&category=35',
    isPopular: false,
    evalRules: [
      'No Profit Target',
      'Max Drawdown: $1,000 (4%)',
      'Daily Loss Limit: $0',
      'Trailing Type: EOD',
      'Max Contract: 1/10',
      'Consistency Rule: 20%',
      'Payout Cap Per Cycle: $2,500',
      'Profit Split: 90%',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$2,500' },
      { label: 'Consistency', val: '20%' },
      { label: 'Daily Loss Limit', val: 'None' },
      { label: 'Max Drawdown (EOD)', val: '$1,000' },
    ],
  },
  {
    size: '$50K',
    tier: 'Essential · Instant Funded',
    origPrice: '$481.00',
    salePrice: '$360.75',
    discountMsg: 'Save $120.25 (25% off) with code FLIGHT',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=104&category=35',
    isPopular: false,
    evalRules: [
      'No Profit Target',
      'Max Drawdown: $2,000 (4%)',
      'Daily Loss Limit: $1,000 (2%)',
      'Trailing Type: EOD',
      'Max Contract: 3/30',
      'Consistency Rule: 20%',
      'Payout Cap Per Cycle: $5,000',
      'Profit Split: 90%',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$5,000' },
      { label: 'Consistency', val: '20%' },
      { label: 'Daily Loss Limit', val: '$1,000' },
      { label: 'Max Drawdown (EOD)', val: '$2,000' },
    ],
  },
  {
    size: '$100K',
    tier: 'Professional · Instant Funded',
    origPrice: '$653.00',
    salePrice: '$489.75',
    discountMsg: 'Save $163.25 (25% off) with code FLIGHT',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=105&category=35',
    isPopular: true,
    evalRules: [
      'No Profit Target',
      'Max Drawdown: $3,000 (3%)',
      'Daily Loss Limit: $2,000 (2%)',
      'Trailing Type: EOD',
      'Max Contract: 6/60',
      'Consistency Rule: 20%',
      'Payout Cap Per Cycle: $10,000',
      'Profit Split: 90%',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$10,000' },
      { label: 'Consistency', val: '20%' },
      { label: 'Daily Loss Limit', val: '$2,000' },
      { label: 'Max Drawdown (EOD)', val: '$3,000' },
    ],
  },
  {
    size: '$150K',
    tier: 'Advanced · Instant Funded',
    origPrice: '$781.00',
    salePrice: '$585.75',
    discountMsg: 'Save $195.25 (25% off) with code FLIGHT',
    url: 'https://dashboard.flicapital.com/en/challenges/purchase?planid=106&category=35',
    isPopular: false,
    evalRules: [
      'No Profit Target',
      'Max Drawdown: $4,500 (3%)',
      'Daily Loss Limit: $3,000 (2%)',
      'Trailing Type: EOD',
      'Max Contract: 9/90',
      'Consistency Rule: 20%',
      'Payout Cap Per Cycle: $15,000',
      'Profit Split: 90%',
    ],
    fundedRules: [
      { label: 'Payout Cycle', val: '7 Days' },
      { label: 'Max Payout', val: '$15,000' },
      { label: 'Consistency', val: '20%' },
      { label: 'Daily Loss Limit', val: '$3,000' },
      { label: 'Max Drawdown (EOD)', val: '$4,500' },
    ],
  },
];

export default function PlanMatrix() {
  const [activeTab, setActiveTab] = useState('flex'); // 'flex' (Assessments) or 'instant'
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (cardKey) => {
    playRelayClick();
    setFlippedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

  const plans = activeTab === 'flex' ? ASSESSMENT_PLANS : INSTANT_PLANS;

  return (
    <section id="plans" style={{ position: 'relative', zIndex: 10, padding: '90px 24px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header */}
        <div>
          <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
            One-Step Plans
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
            Select Your Account Size
          </h2>
          <p style={{ color: 'rgba(240, 246, 255, 0.7)', fontSize: '16px', maxWidth: '720px', margin: '0 0 20px', lineHeight: 1.6 }}>
            Every plan follows the same one-step rules: a 6% profit target, 3-4% trailing max drawdown, and no time limit. All accounts trade live futures markets.
          </p>

          {/* Promo Pill from Real Site */}
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            <span
              className="label-caps"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid rgba(201, 164, 94, 0.5)',
                background: 'rgba(201, 164, 94, 0.1)',
                color: '#C9A45E',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              40% Off Assessments · Code LEAF40
              <span style={{ color: 'rgba(240, 246, 255, 0.3)' }}>|</span>
              25% Off Instant Funded · Code FLIGHT
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '5px',
              borderRadius: '14px',
              background: 'rgba(10, 19, 32, 0.85)',
              border: '1px solid rgba(185, 229, 255, 0.15)',
            }}
          >
            <button
              type="button"
              onClick={() => { setActiveTab('flex'); playRelayClick(); }}
              className="label-caps"
              style={{
                padding: '10px 24px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'flex' ? 'rgba(201, 164, 94, 0.2)' : 'transparent',
                color: activeTab === 'flex' ? '#C9A45E' : 'rgba(240, 246, 255, 0.6)',
                boxShadow: activeTab === 'flex' ? 'inset 0 0 0 1px rgba(201, 164, 94, 0.5)' : 'none',
              }}
            >
              Assessments
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('instant'); playRelayClick(); }}
              className="label-caps"
              style={{
                padding: '10px 24px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === 'instant' ? 'rgba(201, 164, 94, 0.2)' : 'transparent',
                color: activeTab === 'instant' ? '#C9A45E' : 'rgba(240, 246, 255, 0.6)',
                boxShadow: activeTab === 'instant' ? 'inset 0 0 0 1px rgba(201, 164, 94, 0.5)' : 'none',
              }}
            >
              Instant Funded
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {plans.map((plan, idx) => {
              const cardKey = `${activeTab}-${idx}`;
              const isFlipped = !!flippedCards[cardKey];

              return (
                <SpotlightCard
                  key={idx}
                                  className={plan.isPopular ? 'aether-glass-gold' : 'aether-glass'}
                style={{
                  borderWidth: plan.isPopular ? '2px' : '1px',
                  borderColor: plan.isPopular ? 'rgba(201, 164, 94, 0.65)' : 'rgba(201, 164, 94, 0.22)',
                }}
              >
                <div
                  style={{
                    padding: '30px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                {/* Most Popular Badge */}
                {plan.isPopular && (
                  <span
                    className="label-caps"
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #C9A45E, #A9884A)',
                      color: '#070D08',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      boxShadow: '0 4px 15px rgba(201, 164, 94, 0.4)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Most Popular
                  </span>
                )}

                {/* Card Top */}
                <div style={{ marginBottom: '18px' }}>
                  <div
                    className="font-display"
                    style={{ fontSize: '1.9rem', fontWeight: 800, color: '#C9A45E' }}
                  >
                    {plan.size}
                  </div>
                  <div className="label-caps" style={{ fontSize: '10px', color: 'rgba(240, 246, 255, 0.5)', marginTop: '2px' }}>
                    {plan.tier}
                  </div>
                </div>

                {/* Price Display */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'rgba(5, 10, 18, 0.65)',
                    border: '1px solid rgba(185, 229, 255, 0.08)',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'rgba(240, 246, 255, 0.4)',
                      textDecoration: 'line-through',
                    }}
                  >
                    {plan.origPrice}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '1.9rem',
                      fontWeight: 800,
                      color: '#C9A45E',
                    }}
                  >
                    {plan.salePrice}
                  </span>
                </div>

                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#C9A45E',
                    marginBottom: '20px',
                  }}
                >
                  {plan.discountMsg}
                </div>

                {/* Rules List / Flip Back */}
                {!isFlipped ? (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                      {plan.evalRules.map((rule, rIdx) => (
                        <li
                          key={rIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '13px',
                            color: 'rgba(240, 246, 255, 0.78)',
                            marginBottom: '10px',
                            lineHeight: 1.4,
                          }}
                        >
                          <Check size={14} color="#C9A45E" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Interactive Flip Trigger */}
                    <button
                      type="button"
                      onClick={() => toggleFlip(cardKey)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(240, 246, 255, 0.7)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        marginBottom: '16px',
                        transition: 'color 0.2s',
                      }}
                      className="hover:text-gold"
                    >
                      <RotateCw size={13} />
                      <span>View Funded Rules</span>
                    </button>
                  </div>
                ) : (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div
                      className="label-caps"
                      style={{
                        textAlign: 'center',
                        fontSize: '11px',
                        color: '#C9A45E',
                        marginBottom: '14px',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                      }}
                    >
                      Funded Account Rules
                    </div>

                    <div style={{ flex: 1, marginBottom: '24px' }}>
                      {plan.fundedRules.map((item, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderBottom: '1px solid rgba(185, 229, 255, 0.08)',
                            fontSize: '13px',
                          }}
                        >
                          <span style={{ color: 'rgba(240, 246, 255, 0.65)' }}>{item.label}</span>
                          <span className="font-mono" style={{ fontWeight: 700, color: '#C9A45E' }}>{item.val}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleFlip(cardKey)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(240, 246, 255, 0.7)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        marginBottom: '16px',
                        transition: 'color 0.2s',
                      }}
                      className="hover:text-gold"
                    >
                      <RotateCw size={13} />
                      <span>View Assessment Rules</span>
                    </button>
                  </div>
                )}

                {/* Get Started Button */}
                <a
                  href={plan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.isPopular ? 'btn-aether-primary' : 'btn-aether-ghost'}
                  style={{
                    width: '100%',
                    padding: '13px',
                    fontSize: '14px',
                    fontWeight: 700,
                    borderRadius: '10px',
                    color: plan.isPopular ? '#070D08' : '#C9A45E',
                    borderColor: plan.isPopular ? 'none' : 'rgba(201, 164, 94, 0.4)',
                  }}
                >
                  <span>Get Started</span>
                </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Real Regulatory Risk Warning */}
        <p style={{ marginTop: '32px', fontSize: '14px', lineHeight: 1.6, color: 'rgba(240, 246, 255, 0.55)' }}>
          Trading involves substantial risk of loss. Funded account capital is notional and no outcome, funding, or profit is guaranteed.
        </p>

        {/* Real Official Add-Ons Section */}
        <div style={{ marginTop: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ width: '28px', height: '1px', background: '#C9A45E' }} />
            <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
              Upgrades
            </span>
          </div>

          <h3
            className="font-display"
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              color: '#F0F6FF',
              margin: '0 0 28px',
            }}
          >
            Two Add-Ons. <span className="gold-grad-text">Customize Your Assessment Plan.</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            {/* Add-On 01 */}
            <div className="aether-glass" style={{ padding: '32px' }}>
              <span className="label-caps" style={{ fontSize: '10.5px', color: 'rgba(240, 246, 255, 0.5)' }}>
                Add-On 01
              </span>
              <h4
                className="font-display"
                style={{ fontSize: '1.3rem', fontWeight: 800, color: '#C9A45E', margin: '8px 0 12px' }}
              >
                No Consistency Rule
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(240, 246, 255, 0.7)', margin: 0 }}>
                Removes the 50% consistency requirement from your assessment, so a single strong trading day can help you pass your assessment rather than delay it. You can now pass in a single trading session. Add-Ons are available at checkout.
              </p>
            </div>

            {/* Add-On 02 */}
            <div className="aether-glass" style={{ padding: '32px' }}>
              <span className="label-caps" style={{ fontSize: '10.5px', color: 'rgba(240, 246, 255, 0.5)' }}>
                Add-On 02
              </span>
              <h4
                className="font-display"
                style={{ fontSize: '1.3rem', fontWeight: 800, color: '#C9A45E', margin: '8px 0 12px' }}
              >
                Static Drawdown
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(240, 246, 255, 0.7)', margin: 0 }}>
                Switches your max drawdown from an end-of-day trailing drawdown to a static one set from your starting balance, so your loss limit never moves up with your profits. Add-Ons are available at checkout.
              </p>
            </div>
          </div>

          {/* Real Account Limit Banner */}
          <div
            className="aether-glass-gold"
            style={{
              padding: '28px 34px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
                Account Limit
              </div>
              <div
                className="font-display"
                style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F0F6FF', marginTop: '4px' }}
              >
                Maximum of $1M in total active funded accounts per trader
              </div>
            </div>

            <a
              href="http://dashboard.flicapital.com/challenges"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aether-primary"
              style={{
                padding: '13px 28px',
                fontSize: '14px',
                borderRadius: '10px',
              }}
            >
              <span>Start Assessment</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
