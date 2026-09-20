import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'How much of the profit do I keep?',
    a: 'You keep 90% of the profit on your funded account.',
  },
  {
    q: 'What plans are available?',
    a: 'We offer a One Step plan framework, available across multiple account sizes. The funded account follows the same rules as the assessment, with no profit target.',
  },
  {
    q: 'Is there a daily loss limit?',
    a: 'No — our plan does not have a daily loss limit. You manage your risk against the Max Drawdown and Inactivity rules.',
  },
  {
    q: 'How does the Max Drawdown work?',
    a: 'Max Drawdown is the most your account can draw down before a hard breach. On trailing plans it is set at a defined percentage and trails your closed balance until you reach a pre-defined return, after which it locks at your starting balance. On static plans the percentage is set at your starting balance and never trails.',
  },
  {
    q: 'Can I hold positions over the weekend?',
    a: 'No — we do not offer weekend holding. All trades must be closed by 3:45pm EST on Friday. Any trades left open after that time are automatically closed (a soft breach).',
  },
  {
    q: 'How long does it take to receive my funded account?',
    a: 'Upon passing your assessment, you will complete Know Your Customer verification and your Trader Agreement. Once both are completed and supporting documentation is provided, your funded account is typically created within 24–48 business hours.',
  },
  {
    q: 'How do I withdraw my profits?',
    a: 'Request a withdrawal from your trader dashboard by clicking "Withdraw Profits." Withdrawals are available every 7 days on balances above $150, and are paid subject to the applicable profit split.',
  },
  {
    q: 'How long does it take to receive my payout?',
    a: 'Once approved, your payout is typically processed within 24–48 hours via the available outbound payment solutions.',
  },
  {
    q: 'What is the difference between a hard breach and a soft breach?',
    a: 'In a soft breach we close the trades that violated the rule, but you can continue trading. A hard breach — violating the Max Drawdown or Inactivity rule — fails the assessment or removes your funded account.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700 }}>
            FAQ
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              color: '#F0F6FF',
              margin: '8px 0 0',
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="aether-glass"
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'rgba(201, 164, 94, 0.4)' : 'rgba(185, 229, 255, 0.12)',
                  transition: 'all 0.25s ease',
                }}
                onClick={() => toggle(idx)}
              >
                <div
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '15.5px',
                      fontWeight: 600,
                      color: isOpen ? '#C9A45E' : '#F0F6FF',
                      margin: 0,
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      color: '#C9A45E',
                    }}
                  >
                    <Plus size={20} />
                  </div>
                </div>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      color: 'rgba(240, 246, 255, 0.72)',
                      fontSize: '14.5px',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(185, 229, 255, 0.08)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
