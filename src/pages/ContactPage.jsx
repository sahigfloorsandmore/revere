import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  MessageCircle,
  Car
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <div className="contact-page-wrapper">
      {/* Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="hero-badge">
            <Mail size={14} className="badge-icon" />
            <span>Connect With Our Team</span>
          </div>
          <h1 className="hero-title">Contact Revere Wellness</h1>
          <p className="hero-subtitle">
            We are here to assist you 7 days a week. Reach out for appointment inquiries, direct insurance billing questions, or personalized care plans.
          </p>

          <div className="hero-quick-cards">
            <a href="tel:6045030855" className="quick-card glass-card">
              <div className="card-icon-box gold"><Phone size={20} /></div>
              <div>
                <span className="card-lbl">Call Front Desk</span>
                <strong>(604) 503-0855</strong>
                <span className="card-hint">Immediate telephone support</span>
              </div>
            </a>

            <a href="mailto:info@reverewellness.ca" className="quick-card glass-card">
              <div className="card-icon-box green"><Mail size={20} /></div>
              <div>
                <span className="card-lbl">Email Inquiries</span>
                <strong>info@reverewellness.ca</strong>
                <span className="card-hint">Prompt reply within 24 hours</span>
              </div>
            </a>

            <Link to="/location" className="quick-card glass-card">
              <div className="card-icon-box sage"><MapPin size={20} /></div>
              <div>
                <span className="card-lbl">Clinic Location</span>
                <strong>Suite 210 - 7110 120 St</strong>
                <span className="card-hint">Free Stalls #36–38 • Newton, Surrey</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <main className="contact-main-content">
        <ContactSection />
      </main>

      <style>{`
        .contact-page-wrapper {
          min-height: 100vh;
          background: var(--neutral-50);
        }

        .page-hero-banner {
          background: linear-gradient(180deg, var(--primary-900) 0%, var(--primary-950) 100%);
          padding: 70px 0 60px 0;
          color: #ffffff;
          text-align: center;
          position: relative;
          border-bottom: 1px solid rgba(216, 178, 141, 0.25);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          background: rgba(216, 178, 141, 0.15);
          border: 1px solid rgba(216, 178, 141, 0.4);
          color: #eed9c4;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 18px;
        }
        .badge-icon {
          color: var(--gold-light);
        }

        .hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          color: #ffffff;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: var(--neutral-300);
          max-width: 680px;
          margin: 0 auto 36px auto;
          line-height: 1.6;
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
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          text-decoration: none;
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }
        .quick-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          border-color: rgba(216, 178, 141, 0.5);
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

        .contact-main-content {
          padding: 20px 0 60px 0;
        }

        @media (max-width: 768px) {
          .page-hero-banner {
            padding: 50px 0 40px 0;
          }
          .hero-quick-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
