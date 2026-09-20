import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CreditCard, 
  Play, 
  Pause, 
  Star
} from 'lucide-react';

export default function Hero3D() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

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

  return (
    <section className="hero-section">
      {/* Background Cinematic Video with welcoming therapist & client touch */}
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
          <source src="/videos/hero-promo.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-masseuse-massaging-a-person-41271-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-masseur-giving-a-massage-to-a-client-41270-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Luxury Dark Emerald & Sano-style Deep Charcoal Gradient Tint */}
        <div className="video-overlay-tint"></div>
        <div className="video-overlay-pattern"></div>
      </div>

      <div className="container hero-container">
        {/* Hero Narrative & Key Offerings */}
        <div className="hero-content">
          {/* Top Trust Header: 4.8 Google Reviews & Clinic Sanctuary Badge */}
          <div className="hero-badge-row">
            <a 
              href="#reviews"
              className="hero-google-badge"
            >
              <div className="stars-mini">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f4b400" color="#f4b400" />
                ))}
              </div>
              <span className="google-score-tag">4.8 ★ Google Rating (672+ Reviews)</span>
            </a>

            <div className="hero-pill-badge">
              <Sparkles size={14} className="pill-gold-icon" />
              <span>Surrey’s Dedicated Healthcare Sanctuary</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="hero-heading">
            Restorative Therapy. <br />
            <span className="gold-gradient-text">Exceptional Healing.</span>
          </h1>

          {/* Requested Exact Main Paragraph */}
          <p className="hero-lead">
            <strong>Registered Massage Therapy (RMT), Physiotherapy & Active Rehabilitation.</strong> Our treatments are complemented by specialized modalities, including Intramuscular Stimulation (IMS), Shockwave Therapy, and other targeted treatment techniques, to support your recovery and overall wellness.
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
              href="#core-services" 
              className="btn btn-outline hero-sec-cta"
            >
              <span>Explore Our 3 Core Services</span>
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
      </div>

      {/* Minimal Floating Video Control in bottom corner */}
      <button 
        onClick={toggleVideoPlay} 
        className="video-toggle-floating"
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        title={isPlaying ? "Pause background video" : "Play background video"}
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        <span>{isPlaying ? 'Pause Video' : 'Play Video'}</span>
      </button>

      <style>{`
        .hero-section {
          position: relative;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          padding: 80px 0 100px 0;
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
          filter: brightness(0.92) contrast(1.05);
          transform: scale(1.02);
        }

        .video-overlay-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg, 
            rgba(13, 40, 24, 0.58) 0%, 
            rgba(10, 13, 14, 0.40) 50%, 
            rgba(27, 67, 50, 0.50) 100%
          );
        }

        .video-overlay-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.15;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .hero-content {
          max-width: 820px;
        }

        .hero-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .hero-google-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(244, 180, 0, 0.5);
          padding: 7px 16px;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }
        .hero-google-badge:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px);
        }

        .stars-mini {
          display: flex;
          gap: 2px;
        }

        .google-score-tag {
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
        }

        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(82, 183, 136, 0.16);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(82, 183, 136, 0.35);
          padding: 7px 16px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: #d8f3dc;
        }

        .pill-gold-icon {
          color: #e9c46a;
        }

        .hero-heading {
          font-size: clamp(2.6rem, 5vw, 4.1rem);
          line-height: 1.12;
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: 800;
          letter-spacing: -0.025em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.75);
        }

        .gold-gradient-text {
          background: linear-gradient(135deg, #f3d082 0%, #dfc27d 40%, #95d5b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }

        .hero-lead {
          font-size: 1.14rem;
          color: #ffffff;
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 760px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
        }
        .hero-lead strong {
          color: #ffffff;
          font-weight: 700;
        }

        .hero-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 44px;
          flex-wrap: wrap;
        }

        .hero-main-cta {
          padding: 17px 36px;
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
          padding: 17px 28px;
          font-size: 1rem;
          background: rgba(13, 40, 24, 0.55);
          backdrop-filter: blur(8px);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }
        .hero-sec-cta:hover {
          background: #ffffff;
          color: #0d2818;
          border-color: #ffffff;
          text-shadow: none;
        }

        /* Trust Bar */
        .hero-trust-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding: 20px 24px;
          border-radius: var(--radius-lg);
          background: rgba(13, 40, 24, 0.5);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          max-width: 820px;
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
          font-size: 0.92rem;
          color: #ffffff;
        }

        .trust-cell span {
          font-size: 0.78rem;
          color: #b7e4c7;
        }

        /* Minimal Floating Video Control */
        .video-toggle-floating {
          position: absolute;
          bottom: 24px;
          right: 32px;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #d1ded5;
          padding: 8px 14px;
          border-radius: 9999px;
          font-size: 0.78rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .video-toggle-floating:hover {
          background: rgba(0, 0, 0, 0.7);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 1040px) {
          .hero-trust-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
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
          .video-toggle-floating {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
