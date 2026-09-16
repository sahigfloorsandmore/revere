import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Sparkles, 
  Check, 
  MapPin, 
  Users,
  Calendar
} from 'lucide-react';

export default function AboutUs() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual & Story Highlights */}
          <div className="about-visuals">
            <div className="about-image-card main-card glass-card">
              <div className="card-badge">
                <Sparkles size={14} className="text-gold" />
                <span>Newton, Surrey Clinic</span>
              </div>
              <h3 className="visual-quote">
                "Restoring balance, alleviating tension, and empowering lifelong vitality in our community."
              </h3>
              <p className="visual-author">— The Revere Clinical Care Team</p>
              
              <div className="stats-strip">
                <div className="stat-box">
                  <span className="stat-number">7</span>
                  <span className="stat-label">Days Open Weekly</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Direct Insurers</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Registered RMTs</span>
                </div>
              </div>
            </div>

            {/* Zero Tolerance Safety Badge */}
            <div className="safety-guarantee-card glass-card">
              <div className="safety-icon-box">
                <ShieldCheck size={28} className="text-primary" />
              </div>
              <div>
                <h4 className="safety-title">Zero-Tolerance Professional Guarantee</h4>
                <p className="safety-text">
                  Our clinic strictly adheres to the College of Complementary Health Professionals of BC (CCHPBC) 
                  code of ethics. We maintain rigorous professional boundaries, pristine sanitation, and patient-first confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="about-content">
            <div className="section-tag">
              <Award size={14} /> About Revere Wellness
            </div>
            <h2 className="about-title">
              Your Trusted Healthcare & Recovery Destination in Surrey
            </h2>
            <p className="about-lead">
              At <strong>Revere Massage and Wellness Centre</strong>, we believe authentic healing occurs when 
              advanced clinical science meets compassionate, individualized care.
            </p>
            <p className="about-body">
              Located conveniently in Newton, Surrey (directly across from Krispy Kreme and Walmart on 120th Street), 
              our clinic was founded to provide a peaceful oasis from the stresses of modern life while delivering targeted 
              rehabilitation for acute injuries, chronic muscular tension, and post-accident recovery.
            </p>

            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-check"><Check size={14} /></div>
                <div>
                  <strong>Registered & Regulated Therapists</strong>
                  <p>All massage therapies are administered by BC Registered Massage Therapists (RMTs) eligible for extended health direct billing.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-check"><Check size={14} /></div>
                <div>
                  <strong>Collaborative Multidisciplinary Care</strong>
                  <p>Seamlessly integrate RMT bodywork, Physiotherapy assessments, IMS, and therapeutic modalities under one welcoming roof.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-check"><Check size={14} /></div>
                <div>
                  <strong>Stress-Free Insurance Direct Billing</strong>
                  <p>We process ICBC claims and direct bill over 20 extended health plans so you can concentrate purely on your recovery.</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                <Calendar size={18} />
                <span>Meet Our Practitioners & Book Online</span>
              </a>
              <a href="#location" className="btn btn-outline">
                <MapPin size={18} />
                <span>Visit Our Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: #ffffff;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        .about-visuals {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-image-card {
          padding: 40px;
          background: linear-gradient(135deg, #0d2818 0%, #1b4332 100%);
          color: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(82, 183, 136, 0.3);
          box-shadow: 0 25px 50px -12px rgba(13, 40, 24, 0.35);
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          color: #e9c46a;
          margin-bottom: 24px;
        }

        .visual-quote {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          font-style: italic;
          line-height: 1.4;
          color: #f2f9f5;
          margin-bottom: 12px;
          font-weight: 400;
        }

        .visual-author {
          font-size: 0.88rem;
          color: var(--primary-300);
          margin-bottom: 30px;
        }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .stat-box {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #e9c46a;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.72rem;
          color: var(--primary-200);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
        }

        .safety-guarantee-card {
          padding: 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: var(--neutral-50);
          border: 1px solid var(--neutral-300);
        }

        .safety-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--primary-100);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .safety-title {
          font-size: 1rem;
          color: var(--primary-900);
          margin-bottom: 6px;
        }

        .safety-text {
          font-size: 0.85rem;
          color: var(--neutral-600);
          line-height: 1.5;
        }

        .about-title {
          font-size: clamp(2rem, 3.8vw, 2.6rem);
          color: var(--primary-900);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .about-lead {
          font-size: 1.12rem;
          color: var(--neutral-800);
          font-weight: 500;
          line-height: 1.65;
          margin-bottom: 16px;
        }

        .about-body {
          font-size: 0.98rem;
          color: var(--neutral-600);
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 36px;
        }

        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .pillar-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--primary-100);
          color: var(--primary-800);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .pillar-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--primary-900);
          margin-bottom: 2px;
        }

        .pillar-item p {
          font-size: 0.88rem;
          color: var(--neutral-600);
          line-height: 1.5;
          margin: 0;
        }

        .about-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
