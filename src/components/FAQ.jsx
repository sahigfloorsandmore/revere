import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the difference between an RMT and a non-RMT massage?',
      a: 'A Registered Massage Therapist (RMT) in British Columbia is a licensed healthcare professional regulated by the College of Complementary Health Professionals of BC (CCHPBC). RMTs complete rigorous accredited clinical training (over 2,200 hours) and provincial board examinations. Only treatments performed by an RMT are eligible for direct billing and reimbursement through extended health insurance and ICBC claims.'
    },
    {
      q: 'Do I need a doctor’s referral before booking an appointment?',
      a: 'No doctor’s referral is required by Revere Wellness to receive treatment. You are welcome to book directly at any time. However, a small number of private insurance policies require a physician’s prescription in order to approve direct billing reimbursement. We recommend reviewing your personal benefits policy booklet.'
    },
    {
      q: 'How does ICBC direct billing work for accident recovery?',
      a: 'If you were involved in a motor vehicle accident in BC, you are pre-approved for immediate ICBC care (including RMT massage and Physiotherapy sessions within the initial 12-week window). Simply provide your ICBC Claim Number, date of accident, and adjustor details when booking on JaneApp or at reception, and we will bill ICBC directly on your behalf.'
    },
    {
      q: 'What common health conditions do your practitioners treat?',
      a: 'Our practitioners specialize in acute and chronic conditions, including: Whiplash and motor vehicle injuries, tension headaches and migraines, chronic lower back and neck stiffness, sciatica and disc herniations, rotator cuff issues, frozen shoulder, carpal tunnel syndrome, plantar fasciitis, postural strain from desk work, sports muscle sprains, tendonitis, arthritis, and prenatal/postnatal discomfort.'
    },
    {
      q: 'What should I wear, and what is your draping standard?',
      a: 'Wear comfortable clothing for your visit. During treatment, our therapists follow strict BC regulatory draping standards: you will be covered with a clean sheet and blanket at all times, and only the specific body area being actively treated is uncovered. Your privacy, dignity, and comfort are our absolute highest priority.'
    },
    {
      q: 'Can I book two treatments on the same day?',
      a: 'Yes! While provincial guidelines prohibit stacking the same modality consecutively on one day (e.g. back-to-back 60-minute massages for the same person), you can combine complementary disciplines—such as an assessment with our Physiotherapist followed by a restorative RMT massage.'
    },
    {
      q: 'What is the clinic policy regarding late arrivals and cancellations?',
      a: 'We require a minimum of 24 hours notice to cancel or reschedule an appointment without penalty. Appointments cancelled with less than 24 hours notice or missed appointments (no-shows) will be charged the full service fee to the credit card on file, as that time slot was reserved exclusively for you.'
    }
  ];

  return (
    <section id="faqs" className="faq-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} /> Clear Answers
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about our Registered Massage Therapists, physiotherapy, direct insurance billing, and clinic guidelines.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass-card ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Prompt */}
        <div className="faq-footer-card glass-card">
          <div className="footer-card-content">
            <MessageCircle size={28} className="text-primary" />
            <div>
              <h4>Have another question not listed here?</h4>
              <p>Our friendly front desk team is happy to assist you 7 days a week.</p>
            </div>
          </div>
          <div className="footer-card-actions">
            <a href="tel:6045030855" className="btn btn-outline">
              Call (604) 503-0855
            </a>
            <a href="#contact" className="btn btn-primary">
              Send Us a Message
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background: linear-gradient(180deg, #f4f8f5 0%, #ffffff 100%);
        }

        .faq-container {
          max-width: 860px;
          margin: 0 auto 48px auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          border: 1px solid var(--neutral-300);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
          background: #ffffff;
        }

        .faq-item-open {
          border-color: var(--primary-400);
          box-shadow: 0 10px 24px -6px rgba(27, 67, 50, 0.1);
        }

        .faq-question-btn {
          width: 100%;
          text-align: left;
          padding: 22px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: transparent;
          cursor: pointer;
        }

        .faq-question-text {
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--primary-900);
          line-height: 1.4;
        }

        .faq-toggle-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--neutral-100);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-700);
          flex-shrink: 0;
          transition: var(--transition);
        }

        .faq-item-open .faq-toggle-icon {
          background: var(--primary-800);
          color: #ffffff;
        }

        .faq-answer-panel {
          padding: 0 28px 24px 28px;
          animation: fadeIn 0.3s ease;
        }

        .faq-answer-panel p {
          font-size: 0.96rem;
          color: var(--neutral-700);
          line-height: 1.7;
          border-top: 1px solid var(--neutral-200);
          padding-top: 16px;
          margin: 0;
        }

        .faq-footer-card {
          max-width: 860px;
          margin: 0 auto;
          padding: 28px 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          background: #ffffff;
          border: 1px solid var(--neutral-300);
        }

        .footer-card-content {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-card-content h4 {
          font-size: 1.1rem;
          color: var(--primary-900);
          margin-bottom: 4px;
        }

        .footer-card-content p {
          font-size: 0.88rem;
          color: var(--neutral-600);
          margin: 0;
        }

        .footer-card-actions {
          display: flex;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .faq-footer-card {
            flex-direction: column;
            text-align: center;
          }
          .footer-card-content {
            flex-direction: column;
          }
          .footer-card-actions {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
