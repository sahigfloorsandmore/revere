import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Car, 
  HelpCircle, 
  FileText, 
  Phone, 
  Mail, 
  Users, 
  Calendar, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import Hero3D from '../components/Hero3D';
import CoreServicesPillars from '../components/CoreServicesPillars';
import GoogleReviews from '../components/GoogleReviews';
import InsurancePartners from '../components/InsurancePartners';

export default function HomePage() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <>
      <Hero3D />
      <CoreServicesPillars />
      <GoogleReviews />
      <InsurancePartners />

      {/* Discovery & Quick Portal Section */}
      <section className="home-portal-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">
              <Sparkles size={14} /> Clinic Resources & Information
            </div>
            <h2 className="section-title">Explore Revere Massage & Wellness</h2>
            <p className="section-desc">
              Looking for our clinic location, 24-hour policies, practitioner bios, or answers to common questions? Visit our dedicated resources below.
            </p>
          </div>

          <div className="portal-cards-grid">
            <Link to="/about" className="portal-card glass-card">
              <div className="portal-icon-box sage"><Users size={22} /></div>
              <div className="portal-content">
                <h3>About Our Clinic</h3>
                <p>Learn about our philosophy, tranquil clinic space, and 18 licensed practitioners.</p>
                <span className="portal-link-text">Read Our Story <ArrowRight size={14} /></span>
              </div>
            </Link>

            <Link to="/location" className="portal-card glass-card">
              <div className="portal-icon-box gold"><MapPin size={22} /></div>
              <div className="portal-content">
                <h3>Parking & Location</h3>
                <p>Suite 210 (opposite Walmart & Krispy Kreme) with free reserved stalls #36–38.</p>
                <span className="portal-link-text">Directions & Stalls <ArrowRight size={14} /></span>
              </div>
            </Link>

            <Link to="/policies" className="portal-card glass-card">
              <div className="portal-icon-box green"><FileText size={22} /></div>
              <div className="portal-content">
                <h3>Clinic Policies</h3>
                <p>24-hour cancellation terms, BC draping guidelines, and direct billing terms.</p>
                <span className="portal-link-text">Review Policies <ArrowRight size={14} /></span>
              </div>
            </Link>

            <Link to="/faq" className="portal-card glass-card">
              <div className="portal-icon-box dark"><HelpCircle size={22} /></div>
              <div className="portal-content">
                <h3>Frequently Asked Questions</h3>
                <p>Answers regarding ICBC pre-approvals, referrals, what to wear, and booking.</p>
                <span className="portal-link-text">Browse FAQs <ArrowRight size={14} /></span>
              </div>
            </Link>
          </div>

          {/* Home Direct Contact Banner */}
          <div className="home-contact-banner glass-card-dark">
            <div className="banner-text">
              <div className="banner-badge">
                <Phone size={13} />
                <span>We're Here 7 Days A Week</span>
              </div>
              <h3>Have Questions or Need Help Booking?</h3>
              <p>Our friendly front desk is available Monday through Sunday from 6:30 AM to 8:00 PM.</p>
            </div>
            <div className="banner-actions">
              <Link to="/contact" className="btn btn-gold">
                <Mail size={16} />
                <span>Contact Us</span>
              </Link>
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                <Calendar size={16} />
                <span>Book Online</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-portal-section {
          background: #fbfbf9;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
        .portal-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 36px;
          margin-bottom: 40px;
        }
        .portal-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all var(--transition-fast);
        }
        .portal-card:hover {
          transform: translateY(-4px);
          border-color: rgba(216, 178, 141, 0.6);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
        .portal-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portal-icon-box.sage { background: rgba(162, 160, 68, 0.15); color: #7f7d31; }
        .portal-icon-box.gold { background: rgba(216, 178, 141, 0.25); color: #9c6c3e; }
        .portal-icon-box.green { background: rgba(127, 125, 49, 0.18); color: #5a5923; }
        .portal-icon-box.dark { background: rgba(24, 28, 22, 0.08); color: #181c16; }

        .portal-content h3 {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          margin-bottom: 6px;
          color: var(--color-text);
        }
        .portal-content p {
          font-size: 0.88rem;
          color: var(--neutral-600);
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .portal-link-text {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 600;
          color: #7f7d31;
          transition: gap var(--transition-fast);
        }
        .portal-card:hover .portal-link-text {
          gap: 10px;
          color: #5a5923;
        }

        .home-contact-banner {
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
          margin-top: 20px;
        }
        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(216, 178, 141, 0.18);
          color: #eed9c4;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .home-contact-banner h3 {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          margin-bottom: 6px;
          color: #ffffff;
        }
        .home-contact-banner p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.92rem;
          margin: 0;
        }
        .banner-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .home-contact-banner {
            flex-direction: column;
            text-align: center;
          }
          .banner-actions {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
