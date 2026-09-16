import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-banner">
        <div className="nav-wrapper banner-content">
          <div className="banner-left">
            <span className="banner-badge">
              <ShieldCheck size={14} className="icon-gold" /> ICBC Approved & Direct Billing to 20+ Insurers
            </span>
            <span className="banner-divider">•</span>
            <span className="banner-item">
              <Clock size={14} /> Open 7 Days: 6:30 AM – 8:00 PM
            </span>
          </div>
          <div className="banner-right">
            <a href="tel:6045030855" className="banner-link">
              <Phone size={13} /> (604) 503-0855
            </a>
            <span className="banner-divider">|</span>
            <a href="#location" className="banner-link">
              <MapPin size={13} /> Suite 210 - 7110 120 St, Surrey
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Navigation Bar */}
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-wrapper nav-container">
          {/* Official Brand Logo */}
          <a href="#" className="brand-logo">
            <img 
              src="/images/revere-logo.png" 
              alt="Revere Massage & Wellness" 
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#insurance" className="nav-link">Direct Billing & ICBC</a>
            <a href="#policies" className="nav-link">Policies</a>
            <a href="#location" className="nav-link">Parking & Location</a>
            <a href="#faqs" className="nav-link">FAQs</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Right Action CTAs */}
          <div className="nav-actions">
            <a 
              href="tel:6045030855" 
              className="nav-phone-pill"
              title="Call Revere Wellness"
            >
              <Phone size={15} />
              <span>(604) 503-0855</span>
            </a>
            <a 
              href={JANEAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-book-header"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
              <ExternalLink size={13} className="ext-icon" />
            </a>
            <button 
              className="mobile-toggle-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <a href="#" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/images/revere-logo.png" 
                  alt="Revere Massage & Wellness" 
                  className="brand-logo-img"
                />
              </a>
              <button 
                className="drawer-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="drawer-body">
              <nav className="mobile-nav-links">
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>Therapeutic Services</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Our Clinic</a>
                <a href="#insurance" onClick={() => setMobileMenuOpen(false)}>Direct Billing & ICBC</a>
                <a href="#policies" onClick={() => setMobileMenuOpen(false)}>Clinic Policies</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)}>Free Parking & Location</a>
                <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>Frequently Asked Questions</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
              </nav>

              <div className="drawer-footer">
                <a 
                  href={JANEAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar size={18} />
                  <span>Book on JaneApp</span>
                </a>
                <a 
                  href="tel:6045030855" 
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <Phone size={18} />
                  <span>Call: (604) 503-0855</span>
                </a>
                <div className="drawer-hours">
                  <Clock size={14} /> Open Mon–Sun: 6:30 AM – 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-wrapper {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .top-banner {
          background: #0d2818;
          color: #d8f3dc;
          font-size: 0.8rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(82, 183, 136, 0.2);
        }
        .banner-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .banner-left, .banner-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #e9c46a;
          font-weight: 600;
        }
        .banner-divider {
          opacity: 0.35;
        }
        .banner-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          opacity: 0.9;
        }
        .banner-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #d8f3dc;
          transition: var(--transition);
        }
        .banner-link:hover {
          color: #ffffff;
        }
        .icon-gold {
          color: #e9c46a;
        }

        /* Navbar Header */
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          transition: var(--transition);
        }
        .navbar-scrolled {
          background: #ffffff;
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.08);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 84px;
          gap: 20px;
        }

        /* Official Brand Logo with Green Badge */
        .brand-logo {
          display: inline-flex;
          align-items: center;
          background: #388242;
          padding: 8px 16px;
          border-radius: 10px;
          box-shadow: 0 4px 14px rgba(56, 130, 66, 0.28);
          transition: var(--transition);
          flex-shrink: 0;
        }
        .brand-logo:hover {
          background: #2d6a4f;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(56, 130, 66, 0.38);
        }
        .brand-logo-img {
          height: 36px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* Desktop Nav List */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: nowrap;
        }
        .nav-link {
          font-size: 0.93rem;
          font-weight: 600;
          color: #2b3b32;
          white-space: nowrap;
          padding: 8px 0;
          position: relative;
          transition: var(--transition);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2.5px;
          background: #388242;
          transition: var(--transition);
          border-radius: 2px;
        }
        .nav-link:hover {
          color: #388242;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* Action Buttons */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .nav-phone-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #1b4332;
          background: #f0f7f3;
          border: 1.5px solid #b7e4c7;
          transition: var(--transition);
          white-space: nowrap;
        }
        .nav-phone-pill:hover {
          background: #388242;
          color: #ffffff;
          border-color: #388242;
        }
        .btn-book-header {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(27, 67, 50, 0.25);
          transition: var(--transition);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-book-header:hover {
          background: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(27, 67, 50, 0.35);
        }
        .ext-icon {
          opacity: 0.75;
        }
        .mobile-toggle-btn {
          display: none;
          color: #0d2818;
          padding: 6px;
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 13, 14, 0.65);
          backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.25s ease-out;
        }
        .mobile-drawer {
          width: 100%;
          max-width: 360px;
          height: 100%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.25);
          animation: slideLeft 0.3s ease-out;
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px;
          border-bottom: 1px solid var(--neutral-200);
        }
        .drawer-close-btn {
          color: var(--neutral-600);
          padding: 6px;
        }
        .drawer-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          overflow-y: auto;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mobile-nav-links a {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--neutral-800);
          padding: 8px 0;
          border-bottom: 1px solid var(--neutral-100);
          transition: var(--transition);
        }
        .mobile-nav-links a:hover {
          color: #388242;
          padding-left: 6px;
        }
        .drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 30px;
        }
        .drawer-hours {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--neutral-600);
          margin-top: 8px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            gap: 14px;
          }
          .nav-link {
            font-size: 0.88rem;
          }
        }

        @media (max-width: 1040px) {
          .desktop-nav {
            display: none;
          }
          .nav-phone-pill {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .banner-right {
            display: none;
          }
          .btn-book-header span {
            display: none;
          }
          .btn-book-header {
            padding: 9px 12px;
          }
        }
      `}</style>
    </>
  );
}
