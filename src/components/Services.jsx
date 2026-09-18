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
  Flame,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  const servicesData = [
    {
      id: 'deep-tissue',
      category: 'rmt',
      title: 'Deep Tissue Massage',
      subtitle: 'Targeted Chronic Tension & Muscle Release',
      description: 'Realigns deeper layers of muscles and connective tissue. Ideal for stiff necks, tight shoulders, and chronic lower back pain.',
      durations: ['30 Min', '45 Min', '60 Min'],
      benefits: ['Releases deep stubborn adhesions', 'Alleviates tension headaches & postural strain', 'Improves blood circulation & mobility'],
      icon: Activity,
      badge: 'RMT Registered',
      badgeColor: 'badge-green'
    },
    {
      id: 'swedish',
      category: 'rmt',
      title: 'Swedish Relaxation Massage',
      subtitle: 'Gentle, Calming & Restorative Care',
      description: 'Long, fluid strokes and rhythmic pressure to calm the central nervous system, improve lymphatic drainage, and relieve daily stress.',
      durations: ['30 Min', '45 Min', '60 Min'],
      benefits: ['Lowers stress & cortisol levels', 'Enhances lymphatic fluid circulation', 'Deeply soothes nervous system fatigue'],
      icon: Heart,
      badge: 'Restorative',
      badgeColor: 'badge-gold'
    },
    {
      id: 'prenatal',
      category: 'rmt',
      title: 'Prenatal & Postnatal Massage',
      subtitle: 'Nurturing Care for Expectant & New Mothers',
      description: 'Specialized supportive bodywork using safe side-lying positioning and cushions to alleviate hip strain, sciatica, and nursing tension.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Relieves pregnancy low back & pelvic strain', 'Reduces peripheral swelling & leg edema', 'Restores core and postural vitality postpartum'],
      icon: Sparkles,
      badge: 'Pregnancy Safe',
      badgeColor: 'badge-green'
    },
    {
      id: 'sports-massage',
      category: 'rmt',
      title: 'Sports Massage Therapy',
      subtitle: 'Athletic Recovery & Range of Motion',
      description: 'Dynamic stretching, myofascial release, and rapid muscle flushing to accelerate recovery and optimize athletic performance.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Accelerates post-training muscle recovery', 'Restores joint flexibility & range of motion', 'Helps prevent acute muscle strains'],
      icon: Activity,
      badge: 'Performance',
      badgeColor: 'badge-gold'
    },
    {
      id: 'physiotherapy',
      category: 'physio-kin',
      title: 'Physiotherapy Assessment & Rehab',
      subtitle: 'Clinical Musculoskeletal Evaluation',
      description: 'Detailed diagnostic assessment, joint mobilization, and evidence-based manual therapy for spinal injuries, whiplash, and sports trauma.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Evidence-based exercise prescription', 'Manual joint mobilization & alignment', 'Pre-approved direct billing to ICBC'],
      icon: Activity,
      badge: 'ICBC Covered',
      badgeColor: 'badge-green'
    },
    {
      id: 'kinesiology-active',
      category: 'physio-kin',
      title: 'Kinesiology & Active Rehab',
      subtitle: '1-on-1 Guided Movement & Strength',
      description: 'Individualized functional exercise therapy to rebuild spinal stability, correct muscular imbalances, and return safely to work and sport.',
      durations: ['45 Min', '60 Min'],
      benefits: ['Customized progressive movement plans', 'Core stabilization & postural correction', 'Direct billing for ICBC active recovery'],
      icon: Activity,
      badge: 'Active Rehab',
      badgeColor: 'badge-green'
    },
    {
      id: 'ims-dry-needling',
      category: 'specialized',
      title: 'Intramuscular Stimulation (IMS)',
      subtitle: 'Deep Trigger Point Dry Needling',
      description: 'Fine acupuncture needles inserted into hypertonic muscle bands to stimulate a twitch response that immediately resets contracted muscle fibers.',
      durations: ['30 Min', '45 Min'],
      benefits: ['Deactivates deep chronic trigger points', 'Relieves nerve root irritation & sciatica', 'Restores natural muscle length & function'],
      icon: Zap,
      badge: 'Specialized Tech',
      badgeColor: 'badge-gold'
    },
    {
      id: 'shockwave',
      category: 'specialized',
      title: 'Radial Shockwave Therapy',
      subtitle: 'Acoustic Waves for Chronic Tendonitis',
      description: 'High-energy acoustic sound waves penetrate connective tissue to stimulate new blood vessel growth and break down calcifications.',
      durations: ['30 Min'],
      benefits: ['Heals chronic plantar fasciitis', 'Treats stubborn tennis/golfer’s elbow', 'Dissolves calcific shoulder tendinopathy'],
      icon: Zap,
      badge: 'Specialized Tech',
      badgeColor: 'badge-gold'
    },
    {
      id: 'hot-stone',
      category: 'specialized',
      title: 'Hot Stone Therapy',
      subtitle: 'Deep Thermal Basalt Stone Therapy',
      description: 'Smooth, heated volcanic basalt stones glide over key energy points to melt away deep muscular knots through radiant thermal heat.',
      durations: ['60 Min'],
      benefits: ['Deep thermal relaxation of tense muscles', 'Promotes deep restorative sleep', 'Increases circulation without excessive pressure'],
      icon: Flame,
      badge: 'Luxury Ritual',
      badgeColor: 'badge-gold'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} /> Comprehensive Treatment Directory
          </div>
          <h2 className="section-title">Explore All Services & Specialized Modalities</h2>
          <p className="section-desc">
            Learn more about our individual treatment techniques, durations, and clinical benefits. 
            All treatments are eligible for direct billing to 20+ insurance providers and ICBC claims.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="services-filter-tabs">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Treatments ({servicesData.length})
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'rmt' ? 'active' : ''}`}
            onClick={() => setActiveCategory('rmt')}
          >
            Massage Therapy (RMT)
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'physio-kin' ? 'active' : ''}`}
            onClick={() => setActiveCategory('physio-kin')}
          >
            Physiotherapy & Kinesiology
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'specialized' ? 'active' : ''}`}
            onClick={() => setActiveCategory('specialized')}
          >
            Specialized Modalities (IMS / Shockwave)
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
                    <span>Session Durations:</span>
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
          padding: 80px 0 100px 0;
          background: #ffffff;
          position: relative;
        }

        .services-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 44px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 22px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #4a5b51;
          background: #f7faf8;
          border: 1.5px solid #dce8e0;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }

        .filter-btn:hover {
          border-color: #388242;
          color: #0d2818;
          background: #ffffff;
        }

        .filter-btn.active {
          background: #1b4332;
          color: #ffffff;
          border-color: #1b4332;
          box-shadow: 0 4px 14px rgba(27, 67, 50, 0.25);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          padding: 30px;
          background: #FAF9F6;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition);
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: var(--radius-xl);
          position: relative;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px -10px rgba(13, 40, 24, 0.12);
          border-color: #52b788;
          background: #ffffff;
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #e8f5ee;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          color: #2d6a4f;
        }

        .service-card-title {
          font-size: 1.3rem;
          color: #0d2818;
          margin-bottom: 4px;
          font-weight: 800;
        }

        .service-card-subtitle {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #b38b34;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .service-card-desc {
          font-size: 0.92rem;
          color: #55665c;
          line-height: 1.55;
          margin-bottom: 18px;
        }

        .service-benefits {
          background: #ffffff;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 22px;
          border: 1px solid #eef3f0;
        }

        .service-benefits strong {
          display: block;
          font-size: 0.82rem;
          color: #0d2818;
          margin-bottom: 8px;
        }

        .service-benefits ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .service-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          color: #2b3b32;
        }

        .benefit-check {
          color: #2d6a4f;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-card-footer {
          border-top: 1px solid #eaf0ec;
          padding-top: 18px;
        }

        .service-durations {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #55665c;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .duration-tags {
          display: flex;
          gap: 6px;
        }

        .duration-tag {
          background: #ffffff;
          border: 1px solid #d2dfd6;
          padding: 2px 7px;
          border-radius: 6px;
          font-weight: 600;
          color: #0d2818;
          font-size: 0.76rem;
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
