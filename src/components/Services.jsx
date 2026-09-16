import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Layers, 
  Heart,
  ExternalLink,
  Flame
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  const servicesData = [
    {
      id: 'deep-tissue',
      category: 'rmt',
      title: 'Deep Tissue Massage Therapy',
      subtitle: 'Targeted Chronic Tension & Myofascial Release',
      description: 'Focuses on realigning deeper layers of muscle tissue and fascia. Ideal for persistent aches, postural strain, contracted areas such as stiff neck and upper back, low back tightness, and sore shoulders.',
      durations: ['30 Min', '45 Min', '60 Min'],
      benefits: ['Releases chronic muscle adhesions', 'Improves blood circulation & flexibility', 'Relieves postural strain and headaches'],
      icon: Activity,
      badge: 'Most Popular',
      badgeColor: 'badge-green'
    },
    {
      id: 'swedish',
      category: 'rmt',
      title: 'Swedish Relaxation Massage',
      subtitle: 'Gentle, Calming & Restorative Bodywork',
      description: 'A classic full-body therapeutic modality using long, smooth strokes, kneading, and circular motions. Designed to melt away daily stress, lower cortisol levels, and boost lymphatic drainage.',
      durations: ['30 Min', '45 Min', '60 Min'],
      benefits: ['Reduces systemic stress & anxiety', 'Enhances lymphatic fluid circulation', 'Soothes nervous system fatigue'],
      icon: Heart,
      badge: 'Restorative',
      badgeColor: 'badge-gold'
    },
    {
      id: 'prenatal',
      category: 'rmt',
      title: 'Prenatal Massage',
      subtitle: 'Nurturing Care for Expectant Mothers',
      description: 'Specialized supportive bodywork adapted for every stage of pregnancy using tailored cushions and side-lying positioning. Relieves sciatic nerve pain, lumbar strain, and leg swelling safely.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Alleviates pregnancy back & hip aches', 'Reduces peripheral swelling & edema', 'Improves sleep and nervous system relaxation'],
      icon: Sparkles,
      badge: 'Pregnancy Safe',
      badgeColor: 'badge-green'
    },
    {
      id: 'postnatal',
      category: 'rmt',
      title: 'Postnatal Massage',
      subtitle: 'Restoring Strength & Structural Alignment',
      description: 'Tailored recovery therapy after childbirth. Focuses on releasing nursing neck and shoulder tension, re-establishing core-pelvic balance, and restoring muscular vitality.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Relieves upper back strain from nursing', 'Restores pelvic and lumbar stability', 'Aids emotional restoration and vitality'],
      icon: Layers,
      badge: 'Postpartum Care',
      badgeColor: 'badge-green'
    },
    {
      id: 'sports-massage',
      category: 'rmt',
      title: 'Sports Massage & Rehab',
      subtitle: 'Athletic Recovery, Mobility & Performance',
      description: 'Combines dynamic stretching, active release, and rapid muscle flushing. Ideal for athletes preparing for an event, recovering from high-intensity training, or rehabilitating sports injuries.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Accelerates post-training muscle recovery', 'Restores joint range of motion', 'Helps prevent acute muscle strains & tears'],
      icon: Activity,
      badge: 'High Performance',
      badgeColor: 'badge-gold'
    },
    {
      id: 'hot-stone',
      category: 'specialized',
      title: 'Hot Stone Therapy',
      subtitle: 'Deep Thermal Muscle Melting Therapy',
      description: 'Smooth, heated volcanic basalt stones are strategically placed and glided across key energy points. The radiant thermal heat penetrates deep into muscle bellies to dissolve stubborn tension.',
      durations: ['60 Min'],
      benefits: ['Deep thermal relaxation of tight muscles', 'Promotes deep restorative sleep', 'Increases blood flow without excessive pressure'],
      icon: Flame,
      badge: 'Luxury Ritual',
      badgeColor: 'badge-gold'
    },
    {
      id: 'ims-dry-needling',
      category: 'physio',
      title: 'Intramuscular Stimulation (IMS)',
      subtitle: 'Neuropathic Pain Relief & Trigger Point Needling',
      description: 'Utilizes fine acupuncture needles inserted deep into tight muscle bands (trigger points) without medication. Stimulates a local twitch response that instantly resets hypertonic muscle fibers.',
      durations: ['30 Min', '45 Min'],
      benefits: ['Deactivates deep chronic trigger points', 'Relieves nerve root irritation & sciatica', 'Restores normal muscle length and function'],
      icon: Zap,
      badge: 'Clinical Grade',
      badgeColor: 'badge-green'
    },
    {
      id: 'shockwave',
      category: 'physio',
      title: 'Radial Shockwave Therapy',
      subtitle: 'Acoustic Wave Treatment for Chronic Tendonitis',
      description: 'High-energy acoustic sound waves penetrate stubborn connective tissue to stimulate new blood vessel growth (neovascularization), break down calcifications, and trigger tissue regeneration.',
      durations: ['30 Min'],
      benefits: ['Treats chronic plantar fasciitis', 'Heals stubborn tennis/golfer’s elbow', 'Dissolves shoulder calcific tendinopathy'],
      icon: Zap,
      badge: 'Advanced Tech',
      badgeColor: 'badge-gold'
    },
    {
      id: 'physiotherapy',
      category: 'physio',
      title: 'Comprehensive Physiotherapy',
      subtitle: 'Musculoskeletal Assessment & Rehabilitation',
      description: 'One-on-one clinical evaluation and hands-on rehabilitation for motor vehicle accidents (ICBC), sports trauma, disc injuries, arthritis, and postural imbalances.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Evidence-based exercise prescription', 'Manual joint mobilization techniques', 'Direct billing to ICBC and private insurers'],
      icon: Activity,
      badge: 'ICBC Covered',
      badgeColor: 'badge-green'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Our Healing Treatments
          </div>
          <h2 className="section-title">Therapeutic Services Crafted for Your Wellbeing</h2>
          <p className="section-desc">
            Whether you are recovering from an injury, managing chronic discomfort, or seeking deep restoration,
            our licensed practitioners provide personalized clinical care.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="services-filter-tabs">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Services
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'rmt' ? 'active' : ''}`}
            onClick={() => setActiveCategory('rmt')}
          >
            Registered Massage Therapy (RMT)
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'physio' ? 'active' : ''}`}
            onClick={() => setActiveCategory('physio')}
          >
            Physiotherapy & Modalities
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'specialized' ? 'active' : ''}`}
            onClick={() => setActiveCategory('specialized')}
          >
            Specialized Therapies
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card glass-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={22} className="service-icon" />
                  </div>
                  <span className={`badge-pill ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <span className="service-card-subtitle">{service.subtitle}</span>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-benefits">
                    <strong>Key Therapeutic Benefits:</strong>
                    <ul>
                      {service.benefits.map((b, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className="benefit-check" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-card-footer">
                  <div className="service-durations">
                    <Clock size={15} className="text-neutral-500" />
                    <span>Available Durations:</span>
                    <div className="duration-tags">
                      {service.durations.map((d, idx) => (
                        <span key={idx} className="duration-tag">{d}</span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={JANEAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary service-book-btn"
                  >
                    <Calendar size={16} />
                    <span>Book Treatment Online</span>
                    <ExternalLink size={13} className="external-link-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background: linear-gradient(180deg, #ffffff 0%, #f4f8f5 100%);
          position: relative;
        }

        .services-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 22px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--neutral-700);
          background: #ffffff;
          border: 1.5px solid var(--neutral-300);
          border-radius: var(--radius-full);
          transition: var(--transition);
        }

        .filter-btn:hover {
          border-color: var(--primary-500);
          color: var(--primary-800);
        }

        .filter-btn.active {
          background: var(--primary-800);
          color: #ffffff;
          border-color: var(--primary-800);
          box-shadow: 0 4px 14px rgba(27, 67, 50, 0.25);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition);
          border: 1px solid rgba(27, 67, 50, 0.08);
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(27, 67, 50, 0.15);
          border-color: var(--primary-300);
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .service-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: var(--primary-100);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          color: var(--primary-800);
        }

        .service-card-title {
          font-size: 1.35rem;
          color: var(--primary-900);
          margin-bottom: 4px;
        }

        .service-card-subtitle {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--gold-600);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
        }

        .service-card-desc {
          font-size: 0.94rem;
          color: var(--neutral-600);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-benefits {
          background: var(--neutral-100);
          padding: 16px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .service-benefits strong {
          display: block;
          font-size: 0.84rem;
          color: var(--primary-900);
          margin-bottom: 8px;
        }

        .service-benefits ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .service-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.83rem;
          color: var(--neutral-700);
        }

        .benefit-check {
          color: var(--primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-card-footer {
          border-top: 1px solid var(--neutral-200);
          padding-top: 20px;
        }

        .service-durations {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--neutral-600);
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .duration-tags {
          display: flex;
          gap: 6px;
        }

        .duration-tag {
          background: #ffffff;
          border: 1px solid var(--neutral-300);
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 600;
          color: var(--primary-900);
          font-size: 0.78rem;
        }

        .service-book-btn {
          width: 100%;
          padding: 12px 20px;
          font-size: 0.92rem;
        }

        .external-link-icon {
          opacity: 0.7;
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
