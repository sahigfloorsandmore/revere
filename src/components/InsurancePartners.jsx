import React from 'react';
import { Shield, Check, Info } from 'lucide-react';

export default function InsurancePartners() {
  const insurers = [
    { name: 'Pacific Blue Cross', type: 'Direct Billing' },
    { name: 'ICBC Motor Vehicle Accident', type: 'Direct Billing / Claim' },
    { name: 'Canada Life', type: 'Direct Billing' },
    { name: 'Sun Life Financial', type: 'Direct Billing' },
    { name: 'Manulife Financial', type: 'Direct Billing' },
    { name: 'Desjardins Insurance', type: 'Direct Billing' },
    { name: 'Greenshield Canada', type: 'Direct Billing' },
    { name: 'Chamber of Commerce', type: 'Direct Billing' },
    { name: 'ClaimSecure', type: 'Direct Billing' },
    { name: 'Industrial Alliance', type: 'Direct Billing' },
    { name: 'Johnson Inc.', type: 'Direct Billing' },
    { name: 'Equitable Life', type: 'Direct Billing' },
    { name: 'BPA (Benefit Plan Admin)', type: 'Direct Billing' },
    { name: 'GMS (Group Medical Services)', type: 'Direct Billing' }
  ];

  return (
    <section id="insurance" className="insurance-section">
      <div className="container">
        <div className="insurance-header">
          <div className="insurance-tag">
            <Shield size={14} /> Direct Billing & ICBC Coverage
          </div>
          <h2 className="insurance-title">We Bill Directly to 20+ Major Insurance Providers</h2>
          <p className="insurance-subtitle">
            Skip the paperwork hassle. Bring your policy information and photo ID, and our reception team 
            will submit your claim directly upon completion of your appointment.
          </p>
        </div>

        {/* Marquee Insurers Display */}
        <div className="insurance-marquee-wrapper">
          <div className="marquee-track">
            {insurers.concat(insurers).map((item, index) => (
              <div key={index} className="insurance-pill">
                <span className="pill-check"><Check size={13} /></span>
                <span className="pill-name">{item.name}</span>
                <span className="pill-badge">{item.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Billing Key Rules Info Box */}
        <div className="insurance-info-card glass-card">
          <div className="info-icon-wrapper">
            <Info size={24} className="text-primary" />
          </div>
          <div className="info-content">
            <h4>Important Insurance Direct Billing Checklist:</h4>
            <div className="checklist-grid">
              <div className="check-item">
                <strong>1. Primary & Secondary Cards</strong>
                <span>Bring all physical or digital insurance cards with Policy & Member IDs.</span>
              </div>
              <div className="check-item">
                <strong>2. Doctor's Referral</strong>
                <span>Some policies require a physician’s prescription before RMT or Physio claims are eligible.</span>
              </div>
              <div className="check-item">
                <strong>3. Unpaid Deductibles / Copays</strong>
                <span>Any remaining balance not covered by your insurer is settled at the front desk.</span>
              </div>
              <div className="check-item">
                <strong>4. ICBC Claims</strong>
                <span>Please provide your claim number, date of accident, and ICBC adjustor details when booking.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .insurance-section {
          padding: 80px 0;
          background: #ffffff;
          border-bottom: 1px solid var(--neutral-200);
          position: relative;
        }
        .insurance-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px auto;
        }
        .insurance-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-50);
          color: var(--primary-800);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--primary-200);
          margin-bottom: 14px;
        }
        .insurance-title {
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          color: var(--primary-900);
          margin-bottom: 14px;
        }
        .insurance-subtitle {
          font-size: 1.05rem;
          color: var(--neutral-600);
          line-height: 1.6;
        }
        .insurance-marquee-wrapper {
          overflow: hidden;
          padding: 15px 0 35px 0;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .insurance-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--neutral-50);
          border: 1.5px solid var(--neutral-200);
          padding: 10px 18px;
          border-radius: var(--radius-full);
          margin: 0 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: var(--transition);
        }
        .insurance-pill:hover {
          border-color: var(--primary-500);
          transform: translateY(-2px);
          background: #ffffff;
        }
        .pill-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary-100);
          color: var(--primary-800);
        }
        .pill-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--neutral-900);
        }
        .pill-badge {
          font-size: 0.72rem;
          font-weight: 600;
          background: var(--primary-700);
          color: #ffffff;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .insurance-info-card {
          margin-top: 30px;
          padding: 28px 32px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: linear-gradient(135deg, rgba(242, 249, 245, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
          border: 1px solid var(--primary-200);
        }
        .info-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--primary-100);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-content {
          flex: 1;
        }
        .info-content h4 {
          font-size: 1.15rem;
          color: var(--primary-900);
          margin-bottom: 16px;
        }
        .checklist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .check-item strong {
          display: block;
          font-size: 0.92rem;
          color: var(--primary-800);
          margin-bottom: 4px;
        }
        .check-item span {
          font-size: 0.85rem;
          color: var(--neutral-600);
          line-height: 1.45;
        }
        @media (max-width: 768px) {
          .insurance-info-card {
            flex-direction: column;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
