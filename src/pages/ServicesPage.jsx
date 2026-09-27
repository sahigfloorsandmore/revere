import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  ChevronRight,
  CreditCard,
  HeartHandshake
} from 'lucide-react';
import Services from '../components/Services';

export default function ServicesPage() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <div className="services-page">
      {/* Page Hero Header */}
      <section className="services-hero">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Services & Treatments</span>
          </nav>

          <div className="services-hero-content">
            <div className="services-hero-tag">
              <Sparkles size={15} /> Comprehensive Care Directory
            </div>
            <h1 className="services-hero-title">
              Evidence-Based Therapy & Specialized Clinical Treatments
            </h1>
            <p className="services-hero-lead">
              Discover our complete spectrum of licensed restorative healthcare in Surrey, BC. From hands-on <strong>Registered Massage Therapy (RMT)</strong> and <strong>Physiotherapy</strong> to <strong>Active Kinesiology</strong>, <strong>IMS / Dry Needling</strong>, and <strong>Radial Shockwave Therapy</strong>.
            </p>

            {/* Quick Hero Features Bar */}
            <div className="services-feature-pills">
              <div className="feat-pill">
                <ShieldCheck size={16} className="text-gold" />
                <span>ICBC Approved & Direct Billing</span>
              </div>
              <div className="feat-pill">
                <Clock size={16} className="text-green" />
                <span>Open 7 Days (6:30 AM – 8:00 PM)</span>
              </div>
              <div className="feat-pill">
                <HeartHandshake size={16} className="text-gold" />
                <span>No Referral Required for Most Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid Component */}
      <Services />

      {/* Direct Billing & Insurance Assurance Strip */}
      <section className="billing-assurance-section">
        <div className="container">
          <div className="assurance-card glass-card">
            <div className="assurance-left">
              <div className="assurance-icon-box">
                <CreditCard size={32} className="text-green" />
              </div>
              <div>
                <h3>Hassle-Free Direct Billing to 20+ Insurers</h3>
                <p>
                  We bill directly to Pacific Blue Cross, Canada Life, Sun Life, Manulife, ICBC, and more. 
                  Most patients pay zero upfront or only their minor plan deductible.
                </p>
              </div>
            </div>
            <div className="assurance-right">
              <Link to="/#insurance" className="btn btn-outline">
                <span>View Insurance Details</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Booking Call to Action */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-card">
            <span className="cta-subtitle">Personalized Healing In Newton Surrey</span>
            <h2>Ready to Schedule Your Treatment?</h2>
            <p>
              Choose your practitioner, select your desired duration, and book your session in under 60 seconds with instant online confirmation.
            </p>
            <div className="cta-action-group">
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold cta-btn-main"
              >
                <Calendar size={18} />
                <span>Book Appointment Online</span>
                <ArrowRight size={18} />
              </a>
              <a href="tel:6045030855" className="btn btn-outline-light cta-btn-sec">
                <Phone size={17} />
                <span>Call Us: (604) 503-0855</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-page {
          background: #fdfaf6;
          min-height: 100vh;
        }

        /* Services Hero */
        .services-hero {
          background: linear-gradient(135deg, #182017 0%, #232d22 50%, #313d30 100%);
          color: #ffffff;
          margin-top: -136px;
          padding: 160px 0 64px 0;
          position: relative;
          overflow: hidden;
        }

        .services-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(136, 161, 131, 0.18) 0%, transparent 60%);
          pointer-events: none;
        }

        .breadcrumb-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          margin-bottom: 24px;
        }

        .breadcrumb-link {
          color: #cbdbca;
          transition: var(--transition);
        }
        .breadcrumb-link:hover {
          color: #f8efe4;
          text-decoration: underline;
        }
        .breadcrumb-sep {
          color: rgba(255, 255, 255, 0.4);
        }
        .breadcrumb-current {
          color: #f8efe4;
          font-weight: 600;
        }

        .services-hero-content {
          max-width: 860px;
          position: relative;
          z-index: 1;
        }

        .services-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(216, 178, 141, 0.3);
          color: #f8efe4;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          margin-bottom: 18px;
        }

        .services-hero-title {
          font-size: clamp(2.2rem, 4.2vw, 3.3rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.18;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .services-hero-lead {
          font-size: 1.12rem;
          color: #cbdbca;
          line-height: 1.65;
          margin-bottom: 28px;
        }
        .services-hero-lead strong {
          color: #f8efe4;
        }

        .services-feature-pills {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .feat-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(24, 32, 23, 0.65);
          border: 1px solid rgba(136, 161, 131, 0.35);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.86rem;
          font-weight: 600;
          color: #f8efe4;
          backdrop-filter: blur(6px);
        }

        .text-gold {
          color: #d8b28d;
        }
        .text-green {
          color: #88a183;
        }

        /* Billing Assurance Strip */
        .billing-assurance-section {
          padding: 0 0 60px 0;
          background: #ffffff;
        }

        .assurance-card {
          padding: 32px 40px;
          background: #f4f7f3;
          border: 1.5px solid #cbdbca;
          border-radius: var(--radius-xl);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
        }

        .assurance-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .assurance-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: #e5ece4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .assurance-left h3 {
          font-size: 1.28rem;
          color: #182017;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .assurance-left p {
          font-size: 0.94rem;
          color: #425240;
          margin: 0;
          max-width: 680px;
          line-height: 1.5;
        }

        .assurance-right {
          flex-shrink: 0;
        }

        /* CTA Banner */
        .services-cta-section {
          padding: 30px 0 90px 0;
          background: #fdfaf6;
        }

        .services-cta-card {
          background: linear-gradient(135deg, #182017 0%, #232d22 100%);
          border-radius: var(--radius-2xl);
          padding: 60px 40px;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 24px 50px -15px rgba(24, 32, 23, 0.25);
          position: relative;
          overflow: hidden;
        }

        .services-cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 120%, rgba(216, 178, 141, 0.2) 0%, transparent 60%);
          pointer-events: none;
        }

        .cta-subtitle {
          display: inline-block;
          font-size: 0.84rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #d8b28d;
          margin-bottom: 12px;
        }

        .services-cta-card h2 {
          font-size: clamp(2rem, 3.5vw, 2.6rem);
          font-weight: 800;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .services-cta-card p {
          font-size: 1.05rem;
          color: #cbdbca;
          max-width: 640px;
          margin: 0 auto 32px auto;
          line-height: 1.6;
        }

        .cta-action-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-btn-main {
          padding: 15px 32px;
          font-size: 1.02rem;
          font-weight: 700;
        }

        .cta-btn-sec {
          padding: 15px 28px;
          font-size: 0.98rem;
          font-weight: 600;
          border: 1.5px solid rgba(216, 178, 141, 0.4);
          color: #f8efe4;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }
        .cta-btn-sec:hover {
          background: rgba(216, 178, 141, 0.15);
          border-color: #d8b28d;
          color: #ffffff;
        }

        @media (max-width: 1040px) {
          .services-hero {
            margin-top: -125px;
            padding-top: 148px;
          }
        }

        @media (max-width: 900px) {
          .assurance-card {
            flex-direction: column;
            text-align: center;
          }
          .assurance-left {
            flex-direction: column;
            text-align: center;
          }
          .assurance-right {
            width: 100%;
          }
          .assurance-right .btn {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .services-hero {
            margin-top: -116px;
            padding-top: 136px;
          }
        }
      `}</style>
    </div>
  );
}
