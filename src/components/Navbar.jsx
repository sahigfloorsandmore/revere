import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Briefcase,
  FileText
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

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

  const isServicesPage = location.pathname === '/services';

  return (
    <>
      <div className="sticky-navbar-wrapper">
        {/* Enhanced Top Information Bar */}
        <div className={`top-banner ${isScrolled ? 'top-banner-scrolled' : 'top-banner-clear'}`}>
          <div className="nav-wrapper banner-content">
            <div className="banner-left">
              <Link to="/#reviews" className="banner-google-rating" title="Read our 672+ Google Reviews">
                <div className="banner-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#f4b400" color="#f4b400" />
                  ))}
                </div>
                <span className="banner-rating-text">
                  <strong>4.8 ★</strong> Google Rating (672+ Reviews)
                </span>
                <span className="banner-rating-text-mobile">
                  <strong>4.8 ★</strong> (672+ Reviews)
                </span>
              </Link>
              <span className="banner-divider">•</span>
              <span className="banner-badge">
                <ShieldCheck size={13} className="icon-gold" /> 
                <span className="badge-text-desktop">ICBC Approved & Direct Billing</span>
                <span className="badge-text-mobile">ICBC Direct Billing</span>
              </span>
              <span className="banner-divider banner-hide-tablet">•</span>
              <span className="banner-item banner-hide-tablet">
                <Clock size={13} /> Open 7 Days: <strong>6:30 AM – 8:00 PM</strong>
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
              <Link to="/#location" className="banner-link">
                <MapPin size={13} /> Suite 210 - 7110 120 St, Surrey, BC
              </Link>
            </div>
          </div>
        </div>

        {/* Main Clean Navigation Bar */}
        <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : 'navbar-clear'}`}>
          <div className="nav-wrapper nav-container">
            {/* Official Brand Logo */}
            <Link to="/" className="brand-logo" aria-label="Revere Massage and Wellness Centre">
            <img 
              src="/images/revere-logo.png" 
              alt="Revere Massage & Wellness" 
              className="brand-logo-img"
            />
          </Link>

          {/* Desktop Nav Links with Clean Dropdowns */}
          <nav className="desktop-nav">
            {/* Services Dropdown */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link 
                to="/services" 
                className={`nav-link dropdown-trigger ${isServicesPage ? 'active-nav-link' : ''}`}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`chevron ${servicesDropdownOpen ? 'rotate' : ''}`} />
              </Link>
              {servicesDropdownOpen && (
                <div className="dropdown-menu glass-card">
                  <Link to="/services?cat=rmt" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box green"><Heart size={16} /></div>
                    <div>
                      <strong>Massage Therapy (RMT)</strong>
                      <p>Deep Tissue, Swedish, Prenatal & Sports</p>
                    </div>
                  </Link>
                  <Link to="/services?cat=physio-kin" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box sage"><Activity size={16} /></div>
                    <div>
                      <strong>Physiotherapy & Rehab</strong>
                      <p>Clinical assessment, joint mobility & ICBC</p>
                    </div>
                  </Link>
                  <Link to="/services?cat=physio-kin" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box gold"><Activity size={16} /></div>
                    <div>
                      <strong>Kinesiology & Active Rehab</strong>
                      <p>1-on-1 functional movement & exercise therapy</p>
                    </div>
                  </Link>
                  <Link to="/services?cat=specialized" className="dropdown-item" onClick={() => setServicesDropdownOpen(false)}>
                    <div className="dropdown-icon-box dark"><Zap size={16} /></div>
                    <div>
                      <strong>Specialized Modalities</strong>
                      <p>IMS / Needling, Shockwave & Hot Stone</p>
                    </div>
                  </Link>
                  <div className="dropdown-footer">
                    <Link to="/services" onClick={() => setServicesDropdownOpen(false)}>
                      View All Treatments & Durations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us Dropdown with Story, Reviews, Parking, Policies & Contact */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <Link to="/#about" className="nav-link dropdown-trigger">
                <span>About Us</span>
                <ChevronDown size={14} className={`chevron ${aboutDropdownOpen ? 'rotate' : ''}`} />
              </Link>
              {aboutDropdownOpen && (
                <div className="dropdown-menu glass-card about-dropdown">
                  <Link to="/#about" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box green"><Users size={16} /></div>
                    <div>
                      <strong>Our Story & Team</strong>
                      <p>Newton Surrey's dedicated recovery clinic</p>
                    </div>
                  </Link>
                  <Link to="/#reviews" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box gold"><Star size={16} /></div>
                    <div>
                      <strong>Google Reviews</strong>
                      <p>4.8 ★ Rating • 672+ Patient Reviews</p>
                    </div>
                  </Link>
                  <Link to="/#location" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box dark"><MapPin size={16} /></div>
                    <div>
                      <strong>Parking & Location</strong>
                      <p>Free stalls #36–38 & driving directions</p>
                    </div>
                  </Link>
                  <Link to="/#policies" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box sage"><FileText size={16} /></div>
                    <div>
                      <strong>Clinic Policies</strong>
                      <p>24-hour cancellation & terms of care</p>
                    </div>
                  </Link>
                  <Link to="/#contact" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                    <div className="dropdown-icon-box green"><Mail size={16} /></div>
                    <div>
                      <strong>Contact Us</strong>
                      <p>Send direct inquiry or call reception</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/#insurance" className="nav-link">Direct Billing & ICBC</Link>
            <Link to="/#faqs" className="nav-link">FAQs</Link>
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
    </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/images/revere-logo.png" 
                  alt="Revere Massage & Wellness" 
                  className="brand-logo-img"
                />
              </Link>
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
                <Link to="/services?cat=rmt" onClick={() => setMobileMenuOpen(false)}>• Massage Therapy (RMT)</Link>
                <Link to="/services?cat=physio-kin" onClick={() => setMobileMenuOpen(false)}>• Physiotherapy</Link>
                <Link to="/services?cat=physio-kin" onClick={() => setMobileMenuOpen(false)}>• Kinesiology & Active Rehab</Link>
                <Link to="/services?cat=specialized" onClick={() => setMobileMenuOpen(false)}>• Specialized Modalities (IMS / Shockwave)</Link>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)}>• Explore All Services & Durations →</Link>
                
                <div className="mobile-nav-group-title" style={{ marginTop: '12px' }}>About Us & Clinic Info</div>
                <Link to="/#about" onClick={() => setMobileMenuOpen(false)}>• Our Story & Team</Link>
                <Link to="/#reviews" onClick={() => setMobileMenuOpen(false)}>• Google Reviews (4.8 ★ • 672+ Reviews)</Link>
                <Link to="/#location" onClick={() => setMobileMenuOpen(false)}>• Free Parking & Location (Stalls 36-38)</Link>
                <Link to="/#policies" onClick={() => setMobileMenuOpen(false)}>• Clinic Policies (24h Cancellation)</Link>
                <Link to="/#contact" onClick={() => setMobileMenuOpen(false)}>• Contact Us</Link>

                <div className="mobile-nav-group-title" style={{ marginTop: '12px' }}>Insurance & Questions</div>
                <Link to="/#insurance" onClick={() => setMobileMenuOpen(false)}>Direct Billing & ICBC</Link>
                <Link to="/#faqs" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
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
          font-size: 0.82rem;
          padding: 9px 0;
          transition: all 0.35s ease;
        }
        .top-banner-clear {
          background: transparent;
          border-bottom: none;
        }
        .top-banner-scrolled {
          background: #1f2a1e;
          border-bottom: 1px solid rgba(216, 178, 141, 0.25);
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
        .banner-google-rating {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #ffffff;
          font-weight: 500;
          transition: var(--transition);
        }
        .banner-google-rating:hover {
          color: #d8b28d;
        }
        .banner-stars {
          display: inline-flex;
          align-items: center;
          gap: 2px;
        }
        .banner-rating-text {
          color: #ffffff;
        }
        .banner-rating-text strong {
          color: #e0a96d;
          font-weight: 700;
        }
        .banner-rating-text-mobile {
          display: none;
        }
        .badge-text-desktop {
          display: inline;
        }
        .badge-text-mobile {
          display: none;
        }
        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #d8b28d;
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
          color: var(--primary-100);
          transition: var(--transition);
        }
        .banner-link:hover {
          color: #ffffff;
        }
        .icon-gold {
          color: #d8b28d;
        }

        /* Sticky Unified Navbar Wrapper */
        .sticky-navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        /* Navbar Header Dynamic Transition */
        .navbar-header {
          position: relative;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Top State: Completely Clear */
        .navbar-clear {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: none;
          box-shadow: none;
        }
        .navbar-clear .nav-link {
          color: #ffffff;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
        }
        .navbar-clear .nav-link:hover {
          color: #d8b28d;
        }
        .navbar-clear .mobile-toggle-btn {
          color: #ffffff;
        }

        /* Scrolled State: Full Background with Light Oak Shadow & Clean Dark Olive Text */
        .navbar-scrolled {
          background: rgba(253, 250, 246, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px -5px rgba(51, 50, 19, 0.12);
          border-bottom: 1px solid rgba(216, 178, 141, 0.25);
        }
        .navbar-scrolled .nav-link {
          color: var(--primary-900);
          text-shadow: none;
        }
        .navbar-scrolled .nav-link:hover {
          color: var(--primary-600);
        }
        .navbar-scrolled .mobile-toggle-btn {
          color: var(--primary-900);
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
          background: var(--primary-700);
          border: 1px solid rgba(216, 178, 141, 0.4);
          padding: 9px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(51, 50, 19, 0.35);
          transition: var(--transition);
          flex-shrink: 0;
        }
        .brand-logo:hover {
          background: var(--primary-800);
          border-color: #d8b28d;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(51, 50, 19, 0.45);
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
          color: var(--primary-900);
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
          background: #c99d75;
          transition: var(--transition);
          border-radius: 2px;
        }
        .nav-link:hover {
          color: var(--primary-600);
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
          border: 1px solid rgba(216, 178, 141, 0.3);
          box-shadow: 0 20px 45px -10px rgba(35, 45, 34, 0.18);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 1010;
          animation: dropFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-dropdown {
          width: 300px;
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
          background: #f4f7f3;
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
        .dropdown-icon-box.green { background: var(--primary-100); color: var(--primary-700); }
        .dropdown-icon-box.sage { background: #d8b28d22; color: #9e7550; }
        .dropdown-icon-box.gold { background: #fdfaf6; color: #c99d75; }
        .dropdown-icon-box.dark { background: var(--primary-50); color: var(--primary-900); }

        .dropdown-item strong {
          display: block;
          font-size: 0.9rem;
          color: var(--primary-900);
          line-height: 1.3;
        }
        .dropdown-item p {
          font-size: 0.78rem;
          color: #5d675d;
          margin: 2px 0 0 0;
          line-height: 1.35;
        }

        .dropdown-footer {
          border-top: 1px solid #ebefeb;
          padding-top: 10px;
          margin-top: 4px;
          text-align: center;
        }
        .dropdown-footer a {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-600);
          transition: var(--transition);
        }
        .dropdown-footer a:hover {
          color: #9e7550;
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
          background: linear-gradient(135deg, var(--primary-700) 0%, var(--primary-900) 100%);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(51, 50, 19, 0.35);
          transition: var(--transition);
          white-space: nowrap;
          border: 1px solid rgba(216, 178, 141, 0.35);
        }
        .btn-book-header:hover {
          background: linear-gradient(135deg, #c99d75 0%, #b58963 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(181, 137, 99, 0.45);
        }
        .ext-icon {
          opacity: 0.75;
        }
        .mobile-toggle-btn {
          display: none;
          color: var(--primary-900);
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
          color: var(--primary-600);
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
          color: var(--primary-600);
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
          .banner-hide-tablet {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .top-banner {
            padding: 7px 0;
            font-size: 0.78rem;
          }
          .banner-content {
            justify-content: center;
          }
          .banner-left {
            justify-content: center;
            width: 100%;
            gap: 10px;
            flex-wrap: nowrap;
          }
          .banner-right {
            display: none !important;
          }
          .banner-hide-tablet {
            display: none !important;
          }
          .banner-rating-text {
            display: none !important;
          }
          .banner-rating-text-mobile {
            display: inline !important;
            color: #ffffff;
            font-size: 0.78rem;
          }
          .banner-rating-text-mobile strong {
            color: #f4b400;
            font-weight: 700;
          }
          .badge-text-desktop {
            display: none !important;
          }
          .badge-text-mobile {
            display: inline !important;
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
          .top-banner {
            padding: 6px 0;
            font-size: 0.72rem;
          }
          .banner-left {
            gap: 6px;
          }
          .banner-rating-text-mobile {
            font-size: 0.72rem;
          }
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
