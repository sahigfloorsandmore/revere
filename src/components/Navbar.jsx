import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles,
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
      {/* Top Announcement & Quick Contact Bar */}
      <div className="top-banner">
        <div className="container banner-content">
          <div className="banner-left">
            <span className="banner-badge">
              <ShieldCheck size={14} className="icon-gold" /> ICBC Approved & Direct Billing Available
            </span>
            <span className="banner-divider">|</span>
            <span className="banner-item">
              <Clock size={14} /> Mon–Sun: 6:30 AM – 8:00 PM
            </span>
          </div>
          <div className="banner-right">
            <a href="tel:6045030855" className="banner-link">
              <Phone size={13} /> (604) 503-0855
            </a>
            <span className="banner-divider">|</span>
            <a href="#location" className="banner-link">
              <MapPin size={13} /> Surrey, BC (Suite 210 - 7110 120 St)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#" className="brand-logo">
            <div className="logo-symbol">
              <div className="logo-glow"></div>
              <Sparkles size={20} className="symbol-spark" />
            </div>
            <div className="brand-text">
              <span className="brand-name">REVERE</span>
              <span className="brand-tagline">MASSAGE & WELLNESS</span>
            </div>
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

          {/* Action CTAs */}
          <div className="nav-actions">
            <a 
              href="tel:6045030855" 
              className="btn btn-outline nav-phone-btn"
              title="Call Revere Wellness"
            >
              <Phone size={16} />
              <span>(604) 503-0855</span>
            </a>
            <a 
              href={JANEAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary nav-book-btn"
            >
              <Calendar size={17} />
              <span>Book Appointment</span>
              <ExternalLink size={14} className="external-icon" />
            </a>
            <button 
              className="mobile-toggle" 
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
              <div className="brand-text">
                <span className="brand-name">REVERE</span>
                <span className="brand-tagline">MASSAGE & WELLNESS</span>
              </div>
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
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>Treatments & Services</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Our Clinic</a>
                <a href="#insurance" onClick={() => setMobileMenuOpen(false)}>ICBC & Direct Billing</a>
                <a href="#policies" onClick={() => setMobileMenuOpen(false)}>Clinic Policies</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)}>Location & Free Parking</a>
                <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>Frequently Asked Questions</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
              </nav>

              <div className="drawer-footer">
                <a 
                  href={JANEAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary drawer-book-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar size={18} />
                  <span>Book Online via JaneApp</span>
                </a>
                <a 
                  href="tel:6045030855" 
                  className="btn btn-outline drawer-call-btn"
                >
                  <Phone size={18} />
                  <span>Call Reception: (604) 503-0855</span>
                </a>
                <div className="drawer-hours">
                  <Clock size={14} /> Open 7 Days: 6:30 AM – 8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .top-banner {
          background: #0d2818;
          color: #d8f3dc;
          font-size: 0.8rem;
          padding: 7px 0;
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
          opacity: 0.3;
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

        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(27, 67, 50, 0.08);
          transition: var(--transition);
        }
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 10px 30px -10px rgba(13, 40, 24, 0.12);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .logo-symbol {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 6px 16px rgba(45, 106, 79, 0.3);
        }
        .logo-glow {
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: linear-gradient(135deg, #c5a059, #52b788);
          opacity: 0.4;
          z-index: -1;
          filter: blur(4px);
        }
        .symbol-spark {
          color: #dfc27d;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--primary-900);
          line-height: 1;
        }
        .brand-tagline {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--gold-600);
          margin-top: 3px;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--neutral-700);
          transition: var(--transition);
          position: relative;
          padding: 8px 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--primary-600);
          transition: var(--transition);
          border-radius: 2px;
        }
        .nav-link:hover {
          color: var(--primary-800);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-phone-btn {
          padding: 10px 18px;
          font-size: 0.88rem;
        }
        .nav-book-btn {
          padding: 11px 22px;
          font-size: 0.9rem;
        }
        .external-icon {
          opacity: 0.7;
          margin-left: 2px;
        }
        .mobile-toggle {
          display: none;
          color: var(--primary-900);
          padding: 6px;
        }

        /* Mobile Drawer */
        .mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 13, 14, 0.6);
          backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.25s ease-out;
        }
        .mobile-drawer {
          width: 100%;
          max-width: 380px;
          height: 100%;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.2);
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
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--neutral-800);
          padding: 10px 0;
          border-bottom: 1px solid var(--neutral-100);
          transition: var(--transition);
        }
        .mobile-nav-links a:hover {
          color: var(--primary-700);
          padding-left: 6px;
        }
        .drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 30px;
        }
        .drawer-book-btn, .drawer-call-btn {
          width: 100%;
        }
        .drawer-hours {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.85rem;
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

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .nav-phone-btn {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .banner-right {
            display: none;
          }
          .top-banner {
            font-size: 0.75rem;
          }
          .nav-book-btn span {
            display: none;
          }
          .nav-book-btn {
            padding: 10px 14px;
          }
        }
      `}</style>
    </>
  );
}
