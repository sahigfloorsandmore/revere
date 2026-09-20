import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronDown,
  ExternalLink,
  Star,
  Activity,
  Heart,
  Zap,
  Users,
  Briefcase
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const servicesTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";
  const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=Revere+Massage+and+Wellness+Centre+Surrey";

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setServicesDropdownOpen(false), 200);
  };

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutDropdownOpen(false), 200);
  };

  return (
    <>
      {/* Enhanced Top Information Bar */}
      <div className="top-banner">
        <div className="nav-wrapper banner-content">
          <div className="banner-left">
            <span className="banner-badge">
              <ShieldCheck size={14} className="icon-gold" /> ICBC Approved & Direct Billing
            </span>
            <span className="banner-divider">•</span>
            <span className="banner-item">
              <Clock size={14} /> Open 7 Days: <strong>6:30 AM – 8:00 PM</strong>
            </span>
          </div>
          <div className="banner-right">
            <a href="tel:6045030855" className="banner-link">
              <Phone size={13} /> (604) 503-0855
            </a>
            <span className="banner-divider">|</span>
            <a href="mailto:info@reverewellness.ca" className="banner-link">
              <Mail size={13} /> info@reverewellness.ca
            </a>
            <span className="banner-divider">|</span>
            <a href="#location" className="banner-link">
              <MapPin size={13} /> Suite 210 - 7110 120 St, Surrey, BC
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Navigation Bar */}
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-wrapper nav-container">
          {/* Official Brand Logo */}
          <a href="#" className="brand-logo" aria-label="Revere Massage and Wellness Centre">
            <img 
              src="/images/revere-logo.png" 
              alt="Revere Massage & Wellness" 
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Nav Links with Clean Dropdowns */}
          <nav className="desktop-nav">
            {/* Services Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <a href="#services" className="nav-link dropdown-trigger">
                <span>Services</span>
                <ChevronDown size={14} className={`chevron ${servicesDropdownOpen ? 'rotate' : ''}`} />
              </a>
              {servicesDropdownOpen && (
                <div className="dropdown-menu glass-card">
                  <a href="#core-services" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box green"><Heart size={16} /></div>
                    <div>
                      <strong>Massage Therapy (RMT)</strong>
                      <p>Deep Tissue, Swedish, Prenatal & Sports</p>
                    </div>
                  </a>
                  <a href="#core-services" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box sage"><Activity size={16} /></div>
                    <div>
                      <strong>Physiotherapy</strong>
                      <p>Clinical rehab, joint mobility & ICBC</p>
                    </div>
                  </a>
                  <a href="#core-services" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box gold"><Activity size={16} /></div>
                    <div>
                      <strong>Kinesiology & Active Rehab</strong>
                      <p>1-on-1 functional movement & exercise therapy</p>
                    </div>
                  </a>
                  <a href="#specialized-services" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box dark"><Zap size={16} /></div>
                    <div>
                      <strong>Specialized Modalities</strong>
                      <p>IMS / Needling, Shockwave & Laser</p>
                    </div>
                  </a>
                  <div className="dropdown-footer">
                    <a href="#services" onClick={() => setServicesDropdownOpen(false)}>
                      View All Treatments & Durations →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <a href="#about" className="nav-link dropdown-trigger">
                <span>About Us</span>
                <ChevronDown size={14} className={`chevron ${aboutDropdownOpen ? 'rotate' : ''}`} />
              </a>
              {aboutDropdownOpen && (
                <div className="dropdown-menu glass-card about-dropdown">
                  <a href="#about" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box green"><Users size={16} /></div>
                    <div>
                      <strong>Our Clinic Story</strong>
                      <p>Newton Surrey's dedicated recovery sanctuary</p>
                    </div>
                  </a>
                  <a href="#reviews" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box gold"><Star size={16} /></div>
                    <div>
                      <strong>Google Reviews</strong>
                      <p>4.8 ★ Rating • 672+ Patient Reviews</p>
                    </div>
                  </a>
                  <a href="#careers" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box sage"><Briefcase size={16} /></div>
                    <div>
                      <strong>Join Our Team</strong>
                      <p>Career opportunities for RMTs & Physios</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="#insurance" className="nav-link">Direct Billing & ICBC</a>
            <a href="#policies" className="nav-link">Policies</a>
            <a href="#location" className="nav-link">Parking & Location</a>
            <a href="#faqs" className="nav-link">FAQs</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Right Action: Single Big Book Appointment Button */}
          <div className="nav-actions">
            <a 
              href={JANEAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-book-header"
            >
              <Calendar size={17} />
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
                <div className="mobile-nav-group-title">Treatments & Care</div>
                <a href="#core-services" onClick={() => setMobileMenuOpen(false)}>• Massage Therapy (RMT)</a>
                <a href="#core-services" onClick={() => setMobileMenuOpen(false)}>• Physiotherapy</a>
                <a href="#core-services" onClick={() => setMobileMenuOpen(false)}>• Kinesiology & Active Rehab</a>
                <a href="#specialized-services" onClick={() => setMobileMenuOpen(false)}>• Specialized Modalities (IMS / Shockwave)</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>• All Services & Durations</a>
                
                <div className="mobile-nav-group-title" style={{ marginTop: '12px' }}>Clinic Information</div>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Revere & Our Team</a>
                <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Google Reviews (4.8 ★ • 672+ Reviews)</a>
                <a href="#insurance" onClick={() => setMobileMenuOpen(false)}>Direct Billing & ICBC</a>
                <a href="#policies" onClick={() => setMobileMenuOpen(false)}>Clinic Policies (24h Cancellation)</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)}>Free Parking (Stalls 36-38)</a>
                <a href="#faqs" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
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
                  <span>Book Appointment Online</span>
                </a>
                <a 
                  href="tel:6045030855" 
                  className="btn btn-outline"
                  style={{ width: '100%' }}
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
        .nav-wrapper {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .top-banner {
          background: #0d2818;
          color: #d8f3dc;
          font-size: 0.82rem;
          padding: 9px 0;
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
          gap: 14px;
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
          opacity: 0.95;
        }
        .banner-item strong {
          color: #ffffff;
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
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
          transition: var(--transition);
        }
        .navbar-scrolled {
          background: #ffffff;
          box-shadow: 0 8px 30px -5px rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 92px;
          gap: 20px;
        }

        /* Official Brand Logo */
        .brand-logo {
          display: inline-flex;
          align-items: center;
          background: #388242;
          padding: 9px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(56, 130, 66, 0.32);
          transition: var(--transition);
          flex-shrink: 0;
        }
        .brand-logo:hover {
          background: #2d6a4f;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(56, 130, 66, 0.45);
        }
        .brand-logo-img {
          height: 48px;
          width: auto;
          max-width: 260px;
          object-fit: contain;
          display: block;
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: nowrap;
        }
        .nav-link {
          font-size: 0.94rem;
          font-weight: 600;
          color: #2b3b32;
          white-space: nowrap;
          padding: 8px 0;
          position: relative;
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 4px;
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

        /* Dropdown Menus */
        .nav-dropdown-wrapper {
          position: relative;
        }
        .chevron {
          transition: transform 0.2s ease;
          opacity: 0.7;
        }
        .chevron.rotate {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          width: 320px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 45px -10px rgba(13, 40, 24, 0.18);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 1010;
          animation: dropFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-dropdown {
          width: 290px;
        }

        @keyframes dropFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--radius-md);
          transition: var(--transition);
        }
        .dropdown-item:hover {
          background: #f0f7f3;
        }
        .dropdown-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .dropdown-icon-box.green { background: #e8f5ee; color: #2d6a4f; }
        .dropdown-icon-box.sage { background: #d8f3dc; color: #1b4332; }
        .dropdown-icon-box.gold { background: #fef7e6; color: #b38b34; }
        .dropdown-icon-box.dark { background: #f0f3f1; color: #12181b; }

        .dropdown-item strong {
          display: block;
          font-size: 0.9rem;
          color: #0d2818;
          line-height: 1.3;
        }
        .dropdown-item p {
          font-size: 0.78rem;
          color: #58685e;
          margin: 2px 0 0 0;
          line-height: 1.35;
        }

        .dropdown-footer {
          border-top: 1px solid #edf2ee;
          padding-top: 10px;
          margin-top: 4px;
          text-align: center;
        }
        .dropdown-footer a {
          font-size: 0.82rem;
          font-weight: 700;
          color: #388242;
          transition: var(--transition);
        }
        .dropdown-footer a:hover {
          color: #1b4332;
          text-decoration: underline;
        }

        /* Action Button */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .btn-book-header {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 26px;
          border-radius: 9999px;
          font-size: 0.96rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(27, 67, 50, 0.28);
          transition: var(--transition);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-book-header:hover {
          background: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(27, 67, 50, 0.4);
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
          padding: 20px 24px;
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
        .mobile-nav-group-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #388242;
          margin-bottom: 6px;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-nav-links a {
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--neutral-800);
          padding: 6px 0;
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
          margin-top: 24px;
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

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideLeft { from { transform: translateX(100%); } to { transform: translateX(0); } }

        @media (max-width: 1240px) {
          .desktop-nav {
            gap: 14px;
          }
          .nav-link {
            font-size: 0.88rem;
          }
          .brand-logo-img {
            height: 44px;
          }
        }

        @media (max-width: 1040px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
          .nav-container {
            height: 82px;
          }
          .brand-logo-img {
            height: 42px;
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
            padding: 10px 14px;
          }
          .brand-logo {
            padding: 7px 14px;
          }
          .brand-logo-img {
            height: 38px;
            max-width: 200px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 16px;
            height: 76px;
          }
          .brand-logo {
            padding: 6px 12px;
          }
          .brand-logo-img {
            height: 34px;
            max-width: 175px;
          }
        }
      `}</style>
    </>
  );
}
