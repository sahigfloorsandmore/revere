import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Sparkles, 
  Check, 
  MapPin, 
  Users,
  Calendar,
  Briefcase,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function AboutUs() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Main Story Grid */}
        <div className="about-grid">
          {/* Left Column: Visual & Story Highlights */}
          <div className="about-visuals">
            <div className="about-image-card main-card glass-card">
              <div className="card-badge">
                <Sparkles size={14} className="text-gold" />
                <span>Newton, Surrey Clinic (Suite 210)</span>
              </div>
              <div className="about-photo-grid">
                <img 
                  src="/images/clinic-treatment-room.jpg" 
                  alt="Revere Wellness Treatment Room" 
                  className="about-thumb-img"
                />
                <img 
                  src="/images/clinic-reception.jpg" 
                  alt="Revere Wellness Reception" 
                  className="about-thumb-img"
                />
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
              our clinic provides a serene haven from the stresses of daily life while delivering targeted 
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
                  <strong>Multidisciplinary Clinical Collaboration</strong>
                  <p>Seamlessly integrate RMT bodywork, Physiotherapy assessments, Kinesiology active rehab, and specialized modalities under one roof.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-check"><Check size={14} /></div>
                <div>
                  <strong>Stress-Free Direct Billing</strong>
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

        {/* Join Our Team / Careers Callout (SB Comment) */}
        <div id="careers" className="careers-card glass-card">
          <div className="careers-left">
            <div className="careers-icon-box">
              <Briefcase size={26} className="careers-icon" />
            </div>
            <div>
              <span className="careers-tag">Careers at Revere</span>
              <h3 className="careers-title">Join Our Collaborative Healthcare Team</h3>
              <p className="careers-desc">
                We are actively welcoming passionate <strong>Registered Massage Therapists (RMTs)</strong>, 
                <strong>Physiotherapists</strong>, and <strong>Kinesiologists</strong> to join our growing clinic in Newton, Surrey. 
                Enjoy competitive splits, fully equipped private hydraulic rooms, reception booking support, linen service, and flexible schedules.
              </p>
            </div>
          </div>
          <a href="mailto:info@reverewellness.ca?subject=Career%20Inquiry%20-%20Revere%20Wellness" className="btn btn-primary careers-btn">
            <Mail size={16} />
            <span>Apply via info@reverewellness.ca</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <style>{`
        .about-section {
          background: #FAF9F6;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 50px;
        }

        .about-visuals {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-image-card {
          padding: 36px;
          background: linear-gradient(135deg, #0d2818 0%, #1b4332 100%);
          color: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(82, 183, 136, 0.3);
          box-shadow: 0 25px 50px -12px rgba(13, 40, 24, 0.35);
        }

        .about-photo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }

        .about-thumb-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: var(--transition);
        }

        .about-thumb-img:hover {
          transform: scale(1.03);
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
          background: #ffffff;
          border: 1px solid #e0ebe3;
          border-radius: var(--radius-lg);
        }

        .safety-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #e8f5ee;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .safety-title {
          font-size: 1rem;
          color: var(--primary-900);
          margin-bottom: 6px;
          font-weight: 800;
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
          font-weight: 800;
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
          background: #e8f5ee;
          color: #2d6a4f;
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

        /* Careers Card */
        .careers-card {
          padding: 36px 40px;
          background: #ffffff;
          border: 1px solid #dce8e0;
          border-radius: var(--radius-xl);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
        }

        .careers-left {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .careers-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #e8f5ee;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2d6a4f;
          flex-shrink: 0;
        }

        .careers-tag {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #388242;
          margin-bottom: 6px;
        }

        .careers-title {
          font-size: 1.35rem;
          color: #0d2818;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .careers-desc {
          font-size: 0.92rem;
          color: #55665c;
          line-height: 1.6;
          max-width: 680px;
          margin: 0;
        }

        .careers-btn {
          padding: 13px 24px;
          font-size: 0.92rem;
          flex-shrink: 0;
          white-space: nowrap;
        }

        @media (max-width: 1040px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .careers-card {
            flex-direction: column;
            text-align: center;
          }
          .careers-left {
            flex-direction: column;
            align-items: center;
          }
          .careers-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
