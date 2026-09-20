import React from 'react';

export default function CompanyDisclaimer() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(201, 164, 94, 0.15)',
        background: 'rgba(5, 10, 18, 0.92)',
        padding: '40px 24px',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 className="label-caps" style={{ fontSize: '11px', color: '#C9A45E', fontWeight: 700, marginBottom: '12px' }}>
          Company Disclaimer
        </h2>
        <p style={{ fontSize: '12.5px', lineHeight: 1.7, color: 'rgba(240, 246, 255, 0.55)', margin: 0 }}>
          FLI Capital is an affiliate of Prop Account, LLC. All funding assessments are provided by Prop Account, LLC and all assessment fees are paid to Prop Account, LLC. If you qualify for a Funded Account, you will be required to enter into a Trader Agreement with Prop Account LC. Neither Prop Account, LLC nor Prop Account LC provides any trading education or other services. All such services are provided by FLI Capital. For complete terms and conditions, please visit our{' '}
          <a
            href="https://dashboardanalytix.com/client-terms-and-policies/?v=3acf83834396"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#C9A45E', textDecoration: 'underline' }}
          >
            Terms and Conditions
          </a>
          .
        </p>
      </div>
    </section>
  );
}
