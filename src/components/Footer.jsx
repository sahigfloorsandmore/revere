import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ShieldCheck,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Pre-footer Call to Action */}
      <div className="pre-footer-cta">
        <div className="container">
          <div className="cta-box glass-card-dark">
            <div className="cta-left">
              <span className="cta-tag">Begin Your Wellness Journey</span>
              <h2 className="cta-heading">Ready to Experience Deep Relief & Restoration?</h2>
              <p className="cta-sub">
                Book your session today with our licensed Registered Massage Therapists and Physiotherapists in Newton, Surrey.
              </p>
            </div>
            <div className="cta-right">
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold cta-action-btn"
              >
                <Calendar size={18} />
                <span>Book Appointment Online</span>
              </a>
              <a href="tel:6045030855" className="btn btn-outline cta-phone-btn">
                <Phone size={18} />
                <span>(604) 503-0855</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="main-footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Clinic Brand */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <div className="logo-symbol-sm">
                  <Sparkles size={16} className="text-gold" />
                </div>
                <div className="brand-text">
                  <span className="brand-title">REVERE</span>
                  <span className="brand-subtitle">MASSAGE & WELLNESS</span>
                </div>
              </div>
              <p className="footer-about">
                Newton Surrey’s dedicated multidisciplinary clinic providing high-calibre Registered Massage Therapy, 
                Physiotherapy, IMS, and chronic pain management in a tranquil, professional setting.
              </p>
              <div className="footer-social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://twitter.com/revere_wellness" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Navigation</h4>
              <ul className="footer-links">
                <li><a href="#services">Therapeutic Services</a></li>
                <li><a href="#about">About Our Clinic</a></li>
                <li><a href="#insurance">ICBC & Direct Billing</a></li>
                <li><a href="#policies">24-Hour Cancellation Policy</a></li>
                <li><a href="#location">Free Basement Parking</a></li>
                <li><a href="#faqs">Frequently Asked Questions</a></li>
                <li><a href="#contact">Contact & Location</a></li>
              </ul>
            </div>

            {/* Column 3: Treatments */}
            <div className="footer-col">
              <h4 className="footer-col-title">Specialized Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Deep Tissue Massage</a></li>
                <li><a href="#services">Swedish Relaxation</a></li>
                <li><a href="#services">Prenatal & Postnatal Massage</a></li>
                <li><a href="#services">Sports Injury Recovery</a></li>
                <li><a href="#services">Hot Stone Therapy</a></li>
                <li><a href="#services">IMS / Dry Needling</a></li>
                <li><a href="#services">Shockwave Therapy</a></li>
                <li><a href="#services">Physiotherapy & ICBC Rehab</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Hours */}
            <div className="footer-col contact-col">
              <h4 className="footer-col-title">Clinic Contact</h4>
              <div className="footer-contact-items">
                <div className="contact-line">
                  <MapPin size={16} className="contact-icon text-gold" />
                  <span>Suite 210 - 7110 120 St, Surrey, BC V3W 3M8</span>
                </div>
                <div className="contact-line">
                  <Phone size={16} className="contact-icon text-gold" />
                  <div>
                    <a href="tel:6045030855">(604) 503-0855</a> / <a href="tel:2363127451">(236) 312-7451</a>
                  </div>
                </div>
                <div className="contact-line">
                  <Mail size={16} className="contact-icon text-gold" />
                  <a href="mailto:info@reverewellness.ca">info@reverewellness.ca</a>
                </div>
                <div className="contact-line">
                  <Clock size={16} className="contact-icon text-gold" />
                  <span>Mon–Sun: 6:30 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div className="copyright-text">
              © {new Date().getFullYear()} Revere Massage and Wellness Centre. All rights reserved. Registered RMTs regulated under CCHPBC.
            </div>
            <button 
              className="scroll-top-btn" 
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #0a0d0e;
          color: #dce4de;
          position: relative;
        }

        .pre-footer-cta {
          transform: translateY(-50px);
          margin-bottom: -20px;
        }

        .cta-box {
          padding: 48px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, #12181b 0%, #1b4332 100%);
          border: 1px solid rgba(82, 183, 136, 0.25);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 36px;
        }

        .cta-tag {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          color: #e9c46a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .cta-heading {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: #ffffff;
          margin-bottom: 8px;
        }

        .cta-sub {
          font-size: 0.96rem;
          color: var(--neutral-300);
          max-width: 580px;
        }

        .cta-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-shrink: 0;
        }

        .cta-action-btn {
          padding: 15px 30px;
          font-size: 1rem;
        }

        .cta-phone-btn {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .cta-phone-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .main-footer-body {
          padding: 40px 0 30px 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 1.3fr;
          gap: 40px;
          margin-bottom: 50px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .logo-symbol-sm {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.1em;
          display: block;
          line-height: 1;
        }

        .brand-subtitle {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #e9c46a;
        }

        .footer-about {
          font-size: 0.88rem;
          color: var(--neutral-400);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .footer-social-links {
          display: flex;
          gap: 12px;
        }

        .footer-social-links a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: var(--transition);
        }

        .footer-social-links a:hover {
          background: var(--primary-600);
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 18px;
          font-weight: 700;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          font-size: 0.88rem;
          color: var(--neutral-400);
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: #ffffff;
          padding-left: 4px;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-line {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.86rem;
          color: var(--neutral-300);
          line-height: 1.45;
        }

        .contact-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-line a {
          color: var(--neutral-300);
          transition: var(--transition);
        }

        .contact-line a:hover {
          color: #ffffff;
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.82rem;
          color: var(--neutral-400);
        }

        .scroll-top-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--neutral-400);
          font-size: 0.82rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .scroll-top-btn:hover {
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .cta-box {
            flex-direction: column;
            text-align: center;
          }
          .cta-right {
            width: 100%;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 14px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
