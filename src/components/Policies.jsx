import React, { useState } from 'react';
import { 
  FileText, 
  AlertCircle, 
  CreditCard, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Calendar,
  ChevronDown,
  Layers
} from 'lucide-react';

export default function Policies() {
  const [activeTab, setActiveTab] = useState('cancellation');

  const policies = {
    cancellation: {
      title: '24-Hour Cancellation & No-Show Policy',
      icon: Clock,
      content: (
        <>
          <div className="policy-callout alert-warning">
            <AlertCircle size={20} className="callout-icon" />
            <div>
              <strong>Strict 24-Hour Notice Required</strong>
              <p>Appointments cancelled or rescheduled with less than 24 hours notice, as well as missed appointments (no-shows), will be charged the <strong>full treatment fee</strong> to the credit card on file.</p>
            </div>
          </div>

          <div className="policy-details-text">
            <h4>Why We Have This Policy</h4>
            <p>
              When you schedule an appointment at Revere Massage & Wellness, that dedicated treatment time is reserved exclusively for you. 
              Our therapists are paid per service; when a late cancellation or no-show occurs, it directly impacts our therapists and prevents other patients in pain on our waitlist from receiving care.
            </p>

            <h4>How to Modify or Cancel Your Booking</h4>
            <ul>
              <li><strong>Online Booking Portal:</strong> You can easily cancel or reschedule your booking online up to 24 hours prior to the start time.</li>
              <li><strong>By Phone:</strong> If you are within the 24-hour window or experiencing an unexpected medical emergency, please immediately call our clinic front desk at <a href="tel:6045030855" className="inline-phone">(604) 503-0855</a> or <a href="tel:2363127451" className="inline-phone">(236) 312-7451</a>.</li>
            </ul>

            <h4>Emergency Exceptions</h4>
            <p>
              We recognize that genuine medical emergencies, sudden illness, or severe hazardous weather occur. Please communicate with us directly as early as possible so management can review emergency considerations fairly.
            </p>
          </div>
        </>
      )
    },
    creditcard: {
      title: 'Credit Card Security & Booking Policy',
      icon: CreditCard,
      content: (
        <>
          <div className="policy-callout alert-info">
            <ShieldCheck size={20} className="callout-icon" />
            <div>
              <strong>No Upfront Charges Upon Booking</strong>
              <p>Your credit card information is required to reserve your appointment spot, but will <strong>not</strong> be charged at the time of booking.</p>
            </div>
          </div>

          <div className="policy-details-text">
            <h4>Bank-Grade PCI-DSS Compliant Encryption</h4>
            <p>
              All payment credentials entered during online scheduling are encrypted using industry-standard AES-256 bank-level security. 
              Our staff cannot view your full credit card number, and your card details are never stored on local clinic computers.
            </p>

            <h4>Accepted Forms of Payment at Front Desk</h4>
            <p>Upon finishing your session, you can pay using:</p>
            <div className="payment-badges-grid">
              <span className="pay-badge">Visa</span>
              <span className="pay-badge">MasterCard</span>
              <span className="pay-badge">Interac Debit</span>
              <span className="pay-badge">Direct Billing (Extended Health)</span>
              <span className="pay-badge">ICBC Direct Claim</span>
            </div>
          </div>
        </>
      )
    },
    intake: {
      title: 'Health Intake Forms & Medical History',
      icon: FileText,
      content: (
        <>
          <div className="policy-details-text">
            <h4>Mandatory Online Health History Form</h4>
            <p>
              In accordance with BC health regulatory standards, all new and returning patients must complete a confidential Health Intake Form online prior to their appointment.
            </p>
            <ul>
              <li><strong>Automated Email Link:</strong> You will receive a secure digital intake form link via email immediately after confirming your appointment online.</li>
              <li><strong>Complete in Advance:</strong> Please submit your form at least 2 hours before arriving so your therapist can review any contraindications, surgeries, or injuries.</li>
              <li><strong>Arrive 5 Minutes Early:</strong> For your first session, please arrive 5–10 minutes early to ensure all direct billing details are registered.</li>
            </ul>
          </div>
        </>
      )
    },
    stacking: {
      title: 'Treatment Duration & Stacking Guidelines',
      icon: Layers,
      content: (
        <>
          <div className="policy-details-text">
            <h4>Single vs Multiple Modality Bookings</h4>
            <p>
              To ensure optimal patient safety and prevent muscular over-treatment, the College of Massage Therapists of BC prohibits stacking the same modality consecutively on the same day (e.g., booking two consecutive 60-minute RMT sessions for one patient).
            </p>
            <ul>
              <li><strong>Cross-Modality Combination:</strong> You are welcome to combine complementary modalities in one visit, such as a <strong>45-Minute Physiotherapy Assessment</strong> followed by a <strong>45-Minute RMT Massage</strong>.</li>
              <li><strong>Custom Treatment Plans:</strong> Speak with your therapist to design a progressive weekly treatment schedule tailored to your recovery goals.</li>
            </ul>
          </div>
        </>
      )
    }
  };

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <section id="policies" className="policies-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} /> Clinic Policies & Terms
          </div>
          <h2 className="section-title">Transparent Policies for Seamless Care</h2>
          <p className="section-desc">
            We prioritize mutual respect, punctual scheduling, and high clinical standards. Please review our 
            clinic policies before your appointment.
          </p>
        </div>

        {/* Tabbed Policy Interface */}
        <div className="policies-wrapper glass-card">
          {/* Navigation Sidebar / Tabs */}
          <div className="policy-tabs-nav">
            <button 
              className={`policy-tab-btn ${activeTab === 'cancellation' ? 'active' : ''}`}
              onClick={() => setActiveTab('cancellation')}
            >
              <Clock size={18} />
              <span>24-Hour Cancellation Policy</span>
            </button>
            <button 
              className={`policy-tab-btn ${activeTab === 'creditcard' ? 'active' : ''}`}
              onClick={() => setActiveTab('creditcard')}
            >
              <CreditCard size={18} />
              <span>Credit Card & Payments</span>
            </button>
            <button 
              className={`policy-tab-btn ${activeTab === 'intake' ? 'active' : ''}`}
              onClick={() => setActiveTab('intake')}
            >
              <FileText size={18} />
              <span>Intake Forms & Arrival</span>
            </button>
            <button 
              className={`policy-tab-btn ${activeTab === 'stacking' ? 'active' : ''}`}
              onClick={() => setActiveTab('stacking')}
            >
              <Layers size={18} />
              <span>Duration & Stacking Rules</span>
            </button>

            <div className="policy-support-box">
              <Phone size={20} className="support-icon" />
              <div>
                <strong>Questions About Policy?</strong>
                <p>Call our reception team:</p>
                <a href="tel:6045030855" className="support-phone">(604) 503-0855</a>
              </div>
            </div>
          </div>

          {/* Policy Detail Panel */}
          <div className="policy-content-panel">
            <h3 className="policy-panel-title">
              {policies[activeTab].title}
            </h3>
            <div className="policy-panel-body">
              {policies[activeTab].content}
            </div>

            <div className="policy-panel-footer">
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <Calendar size={17} />
                <span>Agree & Book Appointment Online</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .policies-section {
          background: #f8faf9;
        }

        .policies-wrapper {
          display: grid;
          grid-template-columns: 320px 1fr;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--neutral-300);
          box-shadow: 0 20px 40px -15px rgba(27, 67, 50, 0.08);
        }

        .policy-tabs-nav {
          background: var(--neutral-100);
          border-right: 1px solid var(--neutral-200);
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .policy-tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          text-align: left;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--neutral-700);
          transition: var(--transition);
        }

        .policy-tab-btn:hover {
          background: rgba(82, 183, 136, 0.12);
          color: var(--primary-900);
        }

        .policy-tab-btn.active {
          background: var(--primary-800);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(27, 67, 50, 0.25);
        }

        .policy-support-box {
          margin-top: auto;
          padding: 16px;
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-300);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .support-icon {
          color: var(--primary-700);
          margin-top: 2px;
        }

        .policy-support-box strong {
          display: block;
          font-size: 0.86rem;
          color: var(--primary-900);
        }

        .policy-support-box p {
          font-size: 0.78rem;
          color: var(--neutral-600);
          margin: 2px 0 4px 0;
        }

        .support-phone {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary-700);
        }

        .policy-content-panel {
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .policy-panel-title {
          font-size: 1.6rem;
          color: var(--primary-900);
          margin-bottom: 24px;
          border-bottom: 1px solid var(--neutral-200);
          padding-bottom: 16px;
        }

        .policy-callout {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 22px;
          border-radius: var(--radius-md);
          margin-bottom: 26px;
        }

        .alert-warning {
          background: #fff8e6;
          border: 1px solid #ffe199;
          color: #7a5800;
        }

        .alert-warning .callout-icon {
          color: #c5a059;
        }

        .alert-info {
          background: #f0f7f3;
          border: 1px solid #b7e4c7;
          color: var(--primary-900);
        }

        .alert-info .callout-icon {
          color: var(--primary-700);
        }

        .policy-callout strong {
          display: block;
          font-size: 0.96rem;
          margin-bottom: 4px;
        }

        .policy-callout p {
          font-size: 0.88rem;
          line-height: 1.5;
          margin: 0;
        }

        .policy-details-text h4 {
          font-size: 1.1rem;
          color: var(--primary-900);
          margin: 20px 0 8px 0;
        }

        .policy-details-text p {
          font-size: 0.94rem;
          color: var(--neutral-700);
          line-height: 1.65;
          margin-bottom: 14px;
        }

        .policy-details-text ul {
          margin: 12px 0 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .policy-details-text li {
          font-size: 0.92rem;
          color: var(--neutral-700);
          line-height: 1.55;
        }

        .inline-phone {
          color: var(--primary-700);
          font-weight: 700;
          text-decoration: underline;
        }

        .payment-badges-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .pay-badge {
          background: var(--primary-50);
          color: var(--primary-800);
          font-size: 0.82rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--primary-200);
        }

        .policy-panel-footer {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid var(--neutral-200);
        }

        @media (max-width: 900px) {
          .policies-wrapper {
            grid-template-columns: 1fr;
          }
          .policy-tabs-nav {
            border-right: none;
            border-bottom: 1px solid var(--neutral-200);
          }
          .policy-content-panel {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
