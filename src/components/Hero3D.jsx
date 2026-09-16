import React from 'react';
import HeroCanvas from './HeroCanvas';
import { 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  CreditCard,
  HeartPulse
} from 'lucide-react';

export default function Hero3D() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <section className="hero-section">
      {/* Background 3D Canvas */}
      <HeroCanvas />

      {/* Decorative gradient overlay */}
      <div className="hero-overlay-gradient"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top pill badge */}
          <div className="hero-badge">
            <Sparkles size={15} className="text-gold" />
            <span>Newton Surrey’s Premier Wellness & RMT Sanctuary</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="hero-title">
            Restorative Therapy. <br />
            <span className="gradient-text">Exceptional Healing.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="hero-description">
            Experience expert Registered Massage Therapy (RMT), advanced Physiotherapy, 
            IMS, and specialized modalities in a serene, state-of-the-art sanctuary. 
            We bill direct to 20+ insurers and process ICBC claims effortlessly.
          </p>

          {/* Clear Call to Action Buttons */}
          <div className="hero-ctas">
            <a 
              href={JANEAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary hero-btn-main"
            >
              <Calendar size={20} />
              <span>Book Appointment Online</span>
              <ArrowRight size={18} className="cta-arrow" />
            </a>
            
            <a 
              href="#services" 
              className="btn btn-outline hero-btn-secondary"
            >
              <span>Explore Treatments</span>
            </a>
          </div>

          {/* Key Value Propositions */}
          <div className="hero-trust-grid">
            <div className="trust-item">
              <ShieldCheck className="trust-icon text-primary" size={20} />
              <div>
                <strong>ICBC Approved</strong>
                <p>Covered RMT & Physio</p>
              </div>
            </div>

            <div className="trust-item">
              <CreditCard className="trust-icon text-gold" size={20} />
              <div>
                <strong>Direct Billing</strong>
                <p>To most insurance providers</p>
              </div>
            </div>

            <div className="trust-item">
              <Clock className="trust-icon text-primary" size={20} />
              <div>
                <strong>Open 7 Days</strong>
                <p>6:30 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="trust-item">
              <MapPin className="trust-icon text-gold" size={20} />
              <div>
                <strong>Free Reserved Parking</strong>
                <p>Stalls 36, 37, 38 in basement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Action Card */}
        <div className="hero-floating-card glass-card">
          <div className="floating-card-header">
            <div className="pulse-indicator"></div>
            <span>Instant Online Scheduling Available</span>
          </div>

          <div className="floating-card-body">
            <h3 className="floating-card-title">Ready for Relief & Restoration?</h3>
            <p className="floating-card-text">
              Select your favorite therapist, choose 30, 45, or 60 minute sessions, and confirm your time instantly.
            </p>

            <ul className="floating-card-features">
              <li>
                <CheckCircle2 size={16} className="feature-check" />
                <span>No upfront charge (card on file for 24h cancellation policy)</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feature-check" />
                <span>Direct billing submitted immediately after treatment</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feature-check" />
                <span>Zero-tolerance safe & professional therapeutic environment</span>
              </li>
            </ul>

            <a 
              href={JANEAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold floating-book-btn"
            >
              <Calendar size={18} />
              <span>Select Therapist on JaneApp</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - 110px);
          display: flex;
          align-items: center;
          padding: 60px 0 100px 0;
          overflow: hidden;
          background: linear-gradient(180deg, #f8faf9 0%, #eaf1ed 100%);
        }

        .hero-3d-canvas-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: auto;
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 40%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.2) 80%);
          z-index: 2;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        .hero-content {
          max-width: 650px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(82, 183, 136, 0.35);
          box-shadow: 0 4px 16px rgba(27, 67, 50, 0.06);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--primary-900);
          margin-bottom: 24px;
        }

        .text-gold {
          color: var(--gold-600);
        }

        .text-primary {
          color: var(--primary-700);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5.2vw, 3.8rem);
          line-height: 1.15;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary-800) 0%, var(--primary-600) 50%, var(--gold-600) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--neutral-700);
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 44px;
          flex-wrap: wrap;
        }

        .hero-btn-main {
          padding: 16px 36px;
          font-size: 1.05rem;
          font-weight: 700;
        }

        .cta-arrow {
          transition: transform 0.2s ease;
        }

        .hero-btn-main:hover .cta-arrow {
          transform: translateX(4px);
        }

        .hero-btn-secondary {
          padding: 16px 28px;
          font-size: 1rem;
        }

        .hero-trust-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid rgba(27, 67, 50, 0.12);
        }

        .trust-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .trust-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .trust-item strong {
          display: block;
          font-size: 0.92rem;
          color: var(--primary-900);
        }

        .trust-item p {
          font-size: 0.8rem;
          color: var(--neutral-600);
          margin: 0;
        }

        /* Floating Card */
        .hero-floating-card {
          padding: 32px;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 30px 60px -15px rgba(27, 67, 50, 0.12);
          position: relative;
        }

        .floating-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-700);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 18px;
        }

        .pulse-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #52b788;
          box-shadow: 0 0 0 0 rgba(82, 183, 136, 0.7);
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(82, 183, 136, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(82, 183, 136, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(82, 183, 136, 0);
          }
        }

        .floating-card-title {
          font-size: 1.45rem;
          color: var(--primary-900);
          margin-bottom: 10px;
        }

        .floating-card-text {
          font-size: 0.95rem;
          color: var(--neutral-600);
          margin-bottom: 20px;
          line-height: 1.55;
        }

        .floating-card-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 26px;
        }

        .floating-card-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--neutral-700);
          line-height: 1.45;
        }

        .feature-check {
          color: var(--primary-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .floating-book-btn {
          width: 100%;
          padding: 14px 20px;
          font-size: 1rem;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-content {
            max-width: 100%;
          }
          .hero-floating-card {
            max-width: 600px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 40px 0 60px 0;
          }
          .hero-trust-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
