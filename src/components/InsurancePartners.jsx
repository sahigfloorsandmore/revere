import React, { useState } from 'react';
import { Shield, Check, Info, LayoutGrid, ArrowRightLeft, ExternalLink } from 'lucide-react';

// Subcomponent to gracefully render Logo.dev logo with fallback
function InsurerLogo({ domain, name, token, size = 32 }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // If no token or image failed to load, show an elegant initial monogram
  if (!token || imgError) {
    const initials = name
      .replace(/[^a-zA-Z\s]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');

    return (
      <div 
        className="insurer-logo-fallback" 
        style={{ width: `${size}px`, height: `${size}px` }}
        title={`${name} (Domain: ${domain})`}
      >
        <span>{initials || name.slice(0, 2).toUpperCase()}</span>
      </div>
    );
  }

  const logoUrl = `https://img.logo.dev/${domain}?token=${token}&size=100&format=png`;

  return (
    <div 
      className="insurer-logo-box" 
      style={{ width: `${size}px`, height: `${size}px` }}
      title={`${name} (${domain})`}
    >
      <img
        src={logoUrl}
        alt={`${name} Logo`}
        loading="lazy"
        className={`insurer-logo-img ${imgLoaded ? 'loaded' : 'loading'}`}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default function InsurancePartners() {
  const [viewMode, setViewMode] = useState('marquee'); // 'marquee' | 'grid'
  
  // Read Logo.dev token from environment (configured in .env)
  const LOGODEV_TOKEN = import.meta.env.VITE_LOGODEV_PUBLIC_KEY || '';

  const insurers = [
    { 
      name: 'Pacific Blue Cross', 
      domain: 'pac.bluecross.ca', 
      type: 'Direct Billing',
      note: "BC's #1 Health Benefits Plan"
    },
    { 
      name: 'ICBC', 
      domain: 'icbc.com', 
      type: 'MVA / Direct Claim',
      note: 'Pre-approved coverage for car accident recovery'
    },
    { 
      name: 'Canada Life', 
      domain: 'canadalife.com', 
      type: 'Direct Billing',
      note: 'Great-West & London Life claims'
    },
    { 
      name: 'Sun Life Financial', 
      domain: 'sunlife.ca', 
      type: 'Direct Billing',
      note: 'Instant electronic submissions'
    },
    { 
      name: 'Manulife Financial', 
      domain: 'manulife.ca', 
      type: 'Direct Billing',
      note: 'eClaims direct settlement'
    },
    { 
      name: 'Desjardins Insurance', 
      domain: 'desjardins.com', 
      type: 'Direct Billing',
      note: 'Comprehensive group benefits'
    },
    { 
      name: 'Green Shield Canada', 
      domain: 'greenshield.ca', 
      type: 'Direct Billing',
      note: 'GSC digital provider network'
    },
    { 
      name: 'Chambers of Commerce', 
      domain: 'chamberplan.ca', 
      type: 'Direct Billing',
      note: "Canada's #1 small business group plan"
    },
    { 
      name: 'ClaimSecure', 
      domain: 'claimsecure.com', 
      type: 'Direct Billing',
      note: 'Automated claim adjudication'
    },
    { 
      name: 'iA Financial Group', 
      domain: 'ia.ca', 
      type: 'Direct Billing',
      note: 'Industrial Alliance health benefits'
    },
    { 
      name: 'Johnson Insurance', 
      domain: 'johnson.ca', 
      type: 'Direct Billing',
      note: 'Group benefit plan claims'
    },
    { 
      name: 'Equitable Life', 
      domain: 'equitable.ca', 
      type: 'Direct Billing',
      note: 'Direct provider e-claims'
    },
    { 
      name: 'BPA (Benefit Plan Admin)', 
      domain: 'bpagroup.com', 
      type: 'Direct Billing',
      note: 'Union & multi-employer plans'
    },
    { 
      name: 'GMS Health Insurance', 
      domain: 'gms.ca', 
      type: 'Direct Billing',
      note: 'Group Medical Services plans'
    },
    { 
      name: 'Medavie Blue Cross', 
      domain: 'medaviebc.ca', 
      type: 'Direct Billing',
      note: 'National Blue Cross coverage'
    },
    { 
      name: 'WorkSafeBC', 
      domain: 'worksafebc.com', 
      type: 'Worker Injury Claim',
      note: 'Authorized workplace injury rehab'
    }
  ];

  return (
    <section id="insurance" className="insurance-section">
      <div className="container">
        
        {/* Header with View Toggle */}
        <div className="insurance-header">
          <div className="insurance-tag">
            <Shield size={14} /> Direct Billing & ICBC Coverage
          </div>
          <h2 className="insurance-title">We Bill Directly to 20+ Major Insurance Providers</h2>
          <p className="insurance-subtitle">
            Skip the out-of-pocket hassle and paperwork. Bring your policy information and photo ID, and our reception team 
            will submit your claim directly upon completion of your appointment.
          </p>

          <div className="insurance-controls-bar">
            <div className="view-toggle-group">
              <button 
                type="button"
                className={`view-toggle-btn ${viewMode === 'marquee' ? 'active' : ''}`}
                onClick={() => setViewMode('marquee')}
                aria-label="View sliding marquee"
              >
                <ArrowRightLeft size={14} /> Sliding Ribbon
              </button>
              <button 
                type="button"
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="View provider grid"
              >
                <LayoutGrid size={14} /> View All Providers ({insurers.length})
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Dynamic Continuous Marquee with Logo.dev Logos */}
        {viewMode === 'marquee' && (
          <div className="insurance-marquee-wrapper">
            <div className="marquee-track">
              {insurers.concat(insurers).map((item, index) => (
                <div key={index} className="insurance-pill">
                  <InsurerLogo domain={item.domain} name={item.name} token={LOGODEV_TOKEN} size={28} />
                  <span className="pill-name">{item.name}</span>
                  <span className="pill-badge">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Structured Brand Grid with Logo.dev Logos */}
        {viewMode === 'grid' && (
          <div className="insurance-grid-container">
            <div className="insurers-grid">
              {insurers.map((item, idx) => (
                <div key={idx} className="insurer-card">
                  <div className="card-top-row">
                    <InsurerLogo domain={item.domain} name={item.name} token={LOGODEV_TOKEN} size={42} />
                    <span className="card-type-badge">{item.type}</span>
                  </div>
                  <div className="card-body">
                    <h4 className="insurer-card-name">{item.name}</h4>
                    <p className="insurer-card-note">{item.note}</p>
                  </div>
                  <div className="card-footer">
                    <span className="card-domain-tag">
                      <Check size={12} className="check-icon" /> {item.domain}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
          max-width: 820px;
          margin: 0 auto 36px auto;
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
          line-height: 1.25;
        }

        .insurance-subtitle {
          font-size: 1.05rem;
          color: var(--neutral-600);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* View Toggle Controls */
        .insurance-controls-bar {
          display: flex;
          justify-content: center;
          margin-top: 12px;
        }

        .view-toggle-group {
          display: inline-flex;
          align-items: center;
          background: var(--neutral-100);
          padding: 4px;
          border-radius: var(--radius-full);
          border: 1px solid var(--neutral-200);
          gap: 4px;
        }

        .view-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--neutral-600);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .view-toggle-btn:hover {
          color: var(--primary-900);
        }

        .view-toggle-btn.active {
          background: #ffffff;
          color: var(--primary-900);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--neutral-200);
        }

        /* Marquee Track */
        .insurance-marquee-wrapper {
          overflow: hidden;
          padding: 20px 0 35px 0;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .insurance-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--neutral-50);
          border: 1.5px solid var(--neutral-200);
          padding: 8px 18px 8px 10px;
          border-radius: var(--radius-full);
          margin: 0 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: var(--transition);
          white-space: nowrap;
        }

        .insurance-pill:hover {
          border-color: var(--primary-400);
          transform: translateY(-2px);
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(51, 50, 19, 0.08);
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

        /* Logo Containers */
        .insurer-logo-box {
          border-radius: 8px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px;
          border: 1px solid var(--neutral-200);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
          flex-shrink: 0;
          overflow: hidden;
        }

        .insurer-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.3s ease;
        }

        .insurer-logo-img.loading {
          opacity: 0;
        }

        .insurer-logo-img.loaded {
          opacity: 1;
        }

        .insurer-logo-fallback {
          border-radius: 8px;
          background: var(--primary-100);
          color: var(--primary-800);
          font-size: 0.75rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--primary-200);
          letter-spacing: -0.02em;
        }

        /* Grid View */
        .insurance-grid-container {
          padding: 10px 0 40px 0;
          animation: fadeIn 0.3s ease;
        }

        .insurers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .insurer-card {
          background: var(--neutral-50);
          border: 1.5px solid var(--neutral-200);
          border-radius: var(--radius-lg);
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition);
        }

        .insurer-card:hover {
          background: #ffffff;
          border-color: var(--primary-400);
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(51, 50, 19, 0.08);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .card-type-badge {
          font-size: 0.7rem;
          font-weight: 700;
          background: var(--primary-100);
          color: var(--primary-800);
          padding: 4px 8px;
          border-radius: 6px;
        }

        .insurer-card-name {
          font-size: 1.05rem;
          color: var(--primary-900);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .insurer-card-note {
          font-size: 0.82rem;
          color: var(--neutral-600);
          line-height: 1.4;
          margin-bottom: 16px;
        }

        .card-footer {
          border-top: 1px solid var(--neutral-200);
          padding-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-domain-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.76rem;
          color: var(--neutral-600);
          font-family: monospace;
        }

        .check-icon {
          color: var(--primary-600);
        }

        /* Checklist Card */
        .insurance-info-card {
          margin-top: 20px;
          padding: 28px 32px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: linear-gradient(135deg, rgba(250, 249, 240, 0.9) 0%, rgba(255, 255, 255, 0.98) 100%);
          border: 1px solid var(--primary-200);
        }

        .info-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--primary-100);
          color: var(--primary-700);
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

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .insurance-info-card {
            flex-direction: column;
            padding: 20px;
          }
          .insurers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
