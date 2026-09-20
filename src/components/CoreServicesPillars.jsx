import React from 'react';
import { 
  Heart, 
  Activity, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';

export default function CoreServicesPillars() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  const pillars = [
    {
      id: 'massage-therapy',
      title: 'Massage Therapy (RMT)',
      tagline: 'Therapeutic Bodywork & Pain Relief',
      description: 'Hands-on clinical muscle tension release, myofascial realignment, and relaxation performed by licensed BC Registered Massage Therapists.',
      image: '/images/massage-therapy.png',
      fallbackImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Deep Tissue & Chronic Myofascial Relief',
        'Swedish Relaxation & Stress Reduction',
        'Prenatal & Postnatal Specialized Care',
        'Sports Injury & Postural Realignment'
      ],
      durations: '30, 45, 60 Min Sessions',
      directBilling: 'Covered by ICBC & Extended Health',
      badge: 'Core Pillar 01',
      badgeColor: 'pill-green'
    },
    {
      id: 'physiotherapy',
      title: 'Physiotherapy',
      tagline: 'Assessment & Targeted Rehabilitation',
      description: 'Comprehensive physical evaluation, joint mobilization, and evidence-based clinical rehabilitation to restore full mobility and function.',
      image: '/images/physiotherapy.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Musculoskeletal & Spinal Rehabilitation',
        'ICBC Motor Vehicle Accident Recovery',
        'Joint Mobilization & Manual Therapy',
        'Chronic Neck, Back & Shoulder Rehab'
      ],
      durations: '45, 60 Min Sessions',
      directBilling: 'Pre-Approved ICBC & Direct Billing',
      badge: 'Core Pillar 02',
      badgeColor: 'pill-sage'
    },
    {
      id: 'kinesiology',
      title: 'Kinesiology & Active Rehab',
      tagline: 'Movement Retraining & Core Strength',
      description: 'One-on-one guided exercise therapy and biomechanical movement retraining designed to rebuild core strength, prevent re-injury, and restore vitality.',
      image: '/images/acupuncture-ims.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      highlights: [
        '1-on-1 Customized Exercise Therapy',
        'Postural & Biomechanical Correction',
        'ICBC Active Recovery Programs',
        'Core Stabilization & Functional Strength'
      ],
      durations: '45, 60 Min Sessions',
      directBilling: 'Direct Billing & ICBC Covered',
      badge: 'Core Pillar 03',
      badgeColor: 'pill-gold'
    }
  ];

  return (
    <section id="core-services" className="core-pillars-section">
      <div className="container">
        {/* Section Header */}
        <div className="pillars-header">
          <div className="pillar-tag">
            <Sparkles size={14} /> Our 3 Core Disciplines
          </div>
          <h2 className="pillars-title">
            Tailored Care Built Around Three Foundations
          </h2>
          <p className="pillars-lead">
            <strong>Registered Massage Therapy (RMT), Physiotherapy & Active Rehabilitation.</strong> Our treatments are complemented by specialized modalities, including Intramuscular Stimulation (IMS), Shockwave Therapy, and other targeted treatment techniques, to support your recovery and overall wellness.
          </p>
        </div>

        {/* 3 Prominent Pillar Cards */}
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card glass-card">
              {/* Card Image */}
              <div className="pillar-img-wrapper">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="pillar-photo"
                  onError={(e) => { e.target.src = pillar.fallbackImage; }}
                />
                <span className={`pillar-badge ${pillar.badgeColor}`}>
                  {pillar.badge}
                </span>
              </div>

              {/* Card Content */}
              <div className="pillar-body">
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <span className="pillar-card-tagline">{pillar.tagline}</span>
                <p className="pillar-card-desc">{pillar.description}</p>

                {/* Highlights List */}
                <ul className="pillar-highlights">
                  {pillar.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges / Duration & Billing */}
                <div className="pillar-meta-row">
                  <div className="meta-item">
                    <Clock size={14} className="meta-icon" />
                    <span>{pillar.durations}</span>
                  </div>
                  <div className="meta-item">
                    <ShieldCheck size={14} className="meta-icon-green" />
                    <span>{pillar.directBilling}</span>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="pillar-footer">
                <a 
                  href={JANEAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary pillar-book-btn"
                >
                  <Calendar size={17} />
                  <span>Book {pillar.title.split(' ')[0]}</span>
                  <ArrowRight size={16} className="arrow-btn-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Modalities Anchor Callout */}
        <div id="specialized-services" className="modalities-strip glass-card">
          <div className="strip-left">
            <div className="strip-icon-box">
              <Zap size={22} className="text-gold" />
            </div>
            <div>
              <h4>Looking for Specialized Therapeutic Modalities?</h4>
              <p>
                We also offer <strong>Intramuscular Stimulation (IMS / Dry Needling)</strong>, 
                <strong>Radial Shockwave Therapy</strong>, <strong>Laser Therapy</strong>, and <strong>Hot Stone Therapy</strong>.
              </p>
            </div>
          </div>
          <a href="#services" className="btn btn-outline strip-btn">
            <span>Explore All Specialized Modalities</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .core-pillars-section {
          padding: 105px 0 70px 0;
          background: #FAF9F6;
          position: relative;
        }

        .pillars-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 50px auto;
        }

        .pillar-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #e8f5ee;
          color: #2d6a4f;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(45, 106, 79, 0.25);
          margin-bottom: 16px;
        }

        .pillars-title {
          font-size: clamp(2.1rem, 4vw, 2.9rem);
          color: #0d2818;
          line-height: 1.2;
          margin-bottom: 16px;
          font-weight: 800;
        }

        .pillars-lead {
          font-size: 1.1rem;
          color: #4a5b51;
          line-height: 1.65;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        .pillar-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 16px 36px -10px rgba(13, 40, 24, 0.08);
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }

        .pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px -12px rgba(13, 40, 24, 0.16);
          border-color: #52b788;
        }

        .pillar-img-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #0d2818;
        }

        .pillar-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .pillar-card:hover .pillar-photo {
          transform: scale(1.05);
        }

        .pillar-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(10px);
        }

        .pill-green {
          background: rgba(13, 40, 24, 0.85);
          color: #d8f3dc;
          border: 1px solid rgba(82, 183, 136, 0.4);
        }
        .pill-sage {
          background: rgba(45, 106, 79, 0.85);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .pill-gold {
          background: rgba(179, 139, 52, 0.9);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .pillar-body {
          padding: 28px 26px 20px 26px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .pillar-card-title {
          font-size: 1.42rem;
          color: #0d2818;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .pillar-card-tagline {
          font-size: 0.82rem;
          font-weight: 700;
          color: #b38b34;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 14px;
          display: block;
        }

        .pillar-card-desc {
          font-size: 0.93rem;
          color: #55665c;
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .pillar-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 22px;
          background: #f7faf8;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          border: 1px solid #eaf2ed;
        }

        .pillar-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 0.86rem;
          color: #2b3b32;
          font-weight: 500;
        }

        .check-icon {
          color: #2d6a4f;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pillar-meta-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #edf2ee;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #4a5b51;
          font-weight: 600;
        }

        .meta-icon {
          color: #74c69d;
        }
        .meta-icon-green {
          color: #2d6a4f;
        }

        .pillar-footer {
          padding: 0 26px 26px 26px;
        }

        .pillar-book-btn {
          width: 100%;
          padding: 13px;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .arrow-btn-icon {
          transition: transform 0.2s ease;
        }
        .pillar-book-btn:hover .arrow-btn-icon {
          transform: translateX(4px);
        }

        /* Modalities Strip */
        .modalities-strip {
          padding: 24px 32px;
          background: #ffffff;
          border: 1px solid #e0eae3;
          border-radius: var(--radius-xl);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
        }

        .strip-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .strip-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #fef7e6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .strip-left h4 {
          font-size: 1.1rem;
          color: #0d2818;
          margin-bottom: 4px;
        }

        .strip-left p {
          font-size: 0.88rem;
          color: #55665c;
          margin: 0;
        }

        .strip-btn {
          padding: 11px 22px;
          font-size: 0.88rem;
          flex-shrink: 0;
          white-space: nowrap;
        }

        @media (max-width: 1040px) {
          .core-pillars-section {
            padding-top: 115px;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
            max-width: 580px;
            margin-left: auto;
            margin-right: auto;
          }
          .modalities-strip {
            flex-direction: column;
            text-align: center;
          }
          .strip-left {
            flex-direction: column;
          }
          .strip-btn {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .core-pillars-section {
            padding-top: 145px;
          }
        }
      `}</style>
    </section>
  );
}
