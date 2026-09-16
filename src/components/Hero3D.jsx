import React, { useState, useRef, useEffect } from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  CreditCard,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Camera
} from 'lucide-react';

export default function Hero3D() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const videoRef = useRef(null);

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  // Authentic photos from reverewellness.ca hero carousel
  const clinicHeroPhotos = [
    {
      src: "/images/clinic-reception.jpg",
      title: "Clinic Reception & Lounge",
      caption: "Spacious front reception and comfortable waiting lounge at Suite 210."
    },
    {
      src: "/images/clinic-treatment-room.jpg",
      title: "Private Therapy Rooms",
      caption: "Quiet, climate-controlled treatment suites equipped with adjustable hydraulic tables."
    },
    {
      src: "/images/clinic-room-bed.jpg",
      title: "Clinical Treatment Bed & Setup",
      caption: "Hygienic, comfortable massage table with fresh linens and peaceful ambiance."
    }
  ];

  // Auto-advance photo carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % clinicHeroPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [clinicHeroPhotos.length]);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % clinicHeroPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + clinicHeroPhotos.length) % clinicHeroPhotos.length);
  };

  return (
    <section className="hero-section">
      {/* Background Cinematic Video */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video-element"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/clinic-reception.jpg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-masseuse-massaging-a-person-41271-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-masseur-giving-a-massage-to-a-client-41270-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Luxury Dark Emerald & Charcoal Gradient Tint */}
        <div className="video-overlay-tint"></div>
        <div className="video-overlay-pattern"></div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Hero Narrative */}
        <div className="hero-content">
          {/* Top Pill Badge */}
          <div className="hero-pill-badge">
            <Sparkles size={15} className="pill-gold-icon" />
            <span>Newton Surrey’s Dedicated Wellness & RMT Sanctuary</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-heading">
            Restorative Therapy. <br />
            <span className="gold-gradient-text">Exceptional Healing.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-lead">
            Experience therapeutic relief through expert Registered Massage Therapy (RMT), 
            advanced Physiotherapy, IMS, and specialized modalities. 
            We offer stress-free direct billing to 20+ insurers and process ICBC claims effortlessly.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="hero-buttons-row">
            <a 
              href={JANEAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold hero-main-cta"
            >
              <Calendar size={20} />
              <span>Book Appointment Online</span>
              <ArrowRight size={18} className="cta-arrow" />
            </a>

            <a 
              href="#services" 
              className="btn btn-outline hero-sec-cta"
            >
              <span>Explore Treatments</span>
            </a>
          </div>

          {/* Key Trust Grid */}
          <div className="hero-trust-bar">
            <div className="trust-cell">
              <ShieldCheck size={22} className="cell-icon-green" />
              <div>
                <strong>ICBC Approved</strong>
                <span>Direct billing for RMT & Physio</span>
              </div>
            </div>

            <div className="trust-cell">
              <CreditCard size={22} className="cell-icon-gold" />
              <div>
                <strong>Direct Billing</strong>
                <span>To 20+ extended health insurers</span>
              </div>
            </div>

            <div className="trust-cell">
              <Clock size={22} className="cell-icon-green" />
              <div>
                <strong>Open 7 Days</strong>
                <span>6:30 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="trust-cell">
              <MapPin size={22} className="cell-icon-gold" />
              <div>
                <strong>Free Parking</strong>
                <span>Basement Stalls #36, 37, 38</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Clinic Photos Showcase + Quick Booking */}
        <div className="hero-right-column">
          {/* Clinic Photo Carousel Card */}
          <div className="clinic-photo-card glass-card-dark">
            <div className="photo-card-header">
              <div className="photo-badge">
                <Camera size={15} className="text-gold" />
                <span>Inside Our Surrey Clinic</span>
              </div>
              <div className="photo-nav-arrows">
                <button onClick={prevPhoto} aria-label="Previous photo" className="arrow-btn">
                  <ChevronLeft size={16} />
                </button>
                <span className="photo-counter">{activePhotoIndex + 1}/{clinicHeroPhotos.length}</span>
                <button onClick={nextPhoto} aria-label="Next photo" className="arrow-btn">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Photo Frame */}
            <div className="photo-frame-container">
              <img 
                src={clinicHeroPhotos[activePhotoIndex].src} 
                alt={clinicHeroPhotos[activePhotoIndex].title}
                className="clinic-active-img"
              />
              <div className="photo-caption-bar">
                <strong>{clinicHeroPhotos[activePhotoIndex].title}</strong>
                <p>{clinicHeroPhotos[activePhotoIndex].caption}</p>
              </div>
            </div>

            {/* Photo Dots */}
            <div className="photo-dots-row">
              {clinicHeroPhotos.map((_, idx) => (
                <button
                  key={idx}
                  className={`photo-dot ${activePhotoIndex === idx ? 'active-dot' : ''}`}
                  onClick={() => setActivePhotoIndex(idx)}
                  aria-label={`View photo ${idx + 1}`}
                />
              ))}
            </div>

            {/* Instant Booking Action */}
            <div className="photo-card-action">
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold hero-card-book-btn"
              >
                <Calendar size={18} />
                <span>Book a Session in This Clinic</span>
                <ExternalLink size={14} />
              </a>

              <div className="video-control-row">
                <button 
                  onClick={toggleVideoPlay} 
                  className="video-toggle-link"
                  title={isPlaying ? "Pause background video" : "Play background video"}
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isPlaying ? 'Pause video' : 'Play video'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          padding: 70px 0 100px 0;
          overflow: hidden;
          background: #0d2818;
          color: #ffffff;
        }

        /* Video Background */
        .hero-video-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.6) contrast(1.1);
          transform: scale(1.02);
        }

        .video-overlay-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg, 
            rgba(13, 40, 24, 0.92) 0%, 
            rgba(10, 13, 14, 0.82) 60%, 
            rgba(27, 67, 50, 0.78) 100%
          );
        }

        .video-overlay-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.4;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 48px;
          align-items: center;
        }

        .hero-content {
          max-width: 660px;
        }

        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(223, 194, 125, 0.4);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.84rem;
          font-weight: 600;
          color: #f4ebd9;
          margin-bottom: 24px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .pill-gold-icon {
          color: #e9c46a;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 4.8vw, 3.8rem);
          line-height: 1.12;
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .gold-gradient-text {
          background: linear-gradient(135deg, #e9c46a 0%, #dfc27d 40%, #74c69d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-lead {
          font-size: 1.12rem;
          color: #d8f3dc;
          line-height: 1.7;
          margin-bottom: 34px;
          opacity: 0.95;
        }

        .hero-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .hero-main-cta {
          padding: 16px 36px;
          font-size: 1.05rem;
          font-weight: 700;
        }

        .cta-arrow {
          transition: transform 0.2s ease;
        }
        .hero-main-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        .hero-sec-cta {
          padding: 16px 28px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .hero-sec-cta:hover {
          background: #ffffff;
          color: #0d2818;
          border-color: #ffffff;
        }

        /* Trust Bar */
        .hero-trust-bar {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }

        .trust-cell {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .cell-icon-green {
          color: #74c69d;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .cell-icon-gold {
          color: #e9c46a;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .trust-cell strong {
          display: block;
          font-size: 0.94rem;
          color: #ffffff;
        }

        .trust-cell span {
          font-size: 0.8rem;
          color: #b7e4c7;
        }

        /* Clinic Photo Card */
        .clinic-photo-card {
          padding: 24px;
          border-radius: var(--radius-xl);
          background: rgba(18, 24, 27, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .photo-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .photo-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #e9c46a;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .photo-nav-arrows {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .arrow-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .arrow-btn:hover {
          background: #388242;
        }

        .photo-counter {
          font-size: 0.78rem;
          color: #a1b0a6;
          font-weight: 600;
        }

        .photo-frame-container {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #000;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .clinic-active-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .clinic-active-img:hover {
          transform: scale(1.03);
        }

        .photo-caption-bar {
          position: absolute;
          bottom: 0;
          inset-x: 0;
          padding: 12px 16px;
          background: linear-gradient(180deg, transparent 0%, rgba(10, 13, 14, 0.9) 100%);
        }

        .photo-caption-bar strong {
          display: block;
          font-size: 0.94rem;
          color: #ffffff;
        }

        .photo-caption-bar p {
          font-size: 0.78rem;
          color: #dce4de;
          margin: 2px 0 0 0;
        }

        .photo-dots-row {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 16px 0;
        }

        .photo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transition: var(--transition);
        }

        .photo-dot.active-dot {
          background: #e9c46a;
          width: 24px;
          border-radius: 4px;
        }

        .photo-card-action {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero-card-book-btn {
          width: 100%;
          padding: 14px;
          font-size: 0.98rem;
          font-weight: 700;
        }

        .video-control-row {
          display: flex;
          justify-content: center;
        }

        .video-toggle-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: #a1b0a6;
          transition: var(--transition);
        }

        .video-toggle-link:hover {
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-content {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 50px 0 70px 0;
          }
          .hero-trust-bar {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .photo-frame-container {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
