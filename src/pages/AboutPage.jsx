import React from 'react';
import { 
  Users, 
  Award, 
  HeartHandshake, 
  Sparkles, 
  Star, 
  Calendar, 
  Clock, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

export default function AboutPage() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <div className="about-page-wrapper">
      {/* Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="hero-badge">
            <HeartHandshake size={14} className="badge-icon" />
            <span>Dedicated Recovery & Wellness Sanctuary</span>
          </div>
          <h1 className="hero-title">About Revere Massage & Wellness</h1>
          <p className="hero-subtitle">
            Founded with a vision to deliver exceptional, patient-first care in Newton, Surrey. Combining registered massage therapy, physiotherapy, and restorative bodywork under one tranquil roof.
          </p>

          <div className="hero-quick-cards">
            <Link to="/practitioners" className="quick-card glass-card">
              <div className="card-icon-box gold"><Users size={20} /></div>
              <div>
                <span className="card-lbl">Clinical Team</span>
                <strong>18 Licensed Practitioners</strong>
                <span className="card-hint">RMTs, Physios & Kinesiologists</span>
              </div>
            </Link>

            <div className="quick-card glass-card">
              <div className="card-icon-box sage"><Star size={20} /></div>
              <div>
                <span className="card-lbl">Patient Trust</span>
                <strong>4.8 ★ Google Rating</strong>
                <span className="card-hint">672+ verified five-star reviews</span>
              </div>
            </div>

            <div className="quick-card glass-card">
              <div className="card-icon-box green"><Clock size={20} /></div>
              <div>
                <span className="card-lbl">Accessibility</span>
                <strong>Open 7 Days A Week</strong>
                <span className="card-hint">6:30 AM – 8:00 PM with free parking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Rich About Us Component */}
      <div className="about-main-content">
        <AboutUs />
      </div>

      {/* Meet Team / Booking CTA */}
      <section className="page-cta-banner">
        <div className="container">
          <div className="cta-inner glass-card-dark">
            <div>
              <h3>Ready to Meet Our Caring Practitioners?</h3>
              <p>Explore our therapist bios, specializations, and book your next appointment online anytime.</p>
            </div>
            <div className="cta-btns">
              <Link to="/practitioners" className="btn btn-gold">
                <Users size={16} />
                <span>View All Practitioners</span>
              </Link>
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                <Calendar size={16} />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-page-wrapper {
          min-height: 100vh;
          background: var(--color-bg, #fbfbf9);
        }

        .page-hero-banner {
          background: linear-gradient(135deg, #181c16 0%, #252b22 100%);
          color: #ffffff;
          padding: 68px 0 52px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(216, 178, 141, 0.2);
        }

        .page-hero-banner::before {
          content: '';
          position: absolute;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 350px;
          background: radial-gradient(circle, rgba(216, 178, 141, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(216, 178, 141, 0.15);
          border: 1px solid rgba(216, 178, 141, 0.35);
          color: #eed9c4;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-family: var(--font-heading);
          color: #ffffff;
          margin-bottom: 16px;
          line-height: 1.15;
        }

        .hero-subtitle {
          max-width: 680px;
          margin: 0 auto 36px auto;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.82);
        }

        .hero-quick-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          max-width: 960px;
          margin: 0 auto;
          text-align: left;
        }

        .quick-card {
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .quick-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(216, 178, 141, 0.4);
        }

        .card-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .card-icon-box.gold { background: rgba(216, 178, 141, 0.25); color: #eed9c4; }
        .card-icon-box.green { background: rgba(127, 125, 49, 0.35); color: #c4d79b; }
        .card-icon-box.sage { background: rgba(162, 160, 68, 0.3); color: #dce7be; }

        .card-lbl {
          display: block;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--neutral-400);
          margin-bottom: 2px;
        }
        .quick-card strong {
          display: block;
          font-size: 1.02rem;
          color: #ffffff;
          margin-bottom: 2px;
        }
        .card-hint {
          display: block;
          font-size: 0.78rem;
          color: var(--neutral-300);
        }

        .about-main-content {
          padding: 10px 0;
        }

        .page-cta-banner {
          padding: 0 0 60px 0;
        }
        .cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          padding: 32px 36px;
          border-radius: var(--radius-xl);
          background: #181c16;
          border: 1px solid rgba(216, 178, 141, 0.25);
          color: #ffffff;
        }
        .cta-inner h3 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          margin-bottom: 6px;
          color: #ffffff;
        }
        .cta-inner p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.95rem;
          margin: 0;
        }
        .cta-btns {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .page-hero-banner {
            padding: 50px 0 40px 0;
          }
          .hero-quick-cards {
            grid-template-columns: 1fr;
          }
          .cta-inner {
            flex-direction: column;
            text-align: center;
          }
          .cta-btns {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
