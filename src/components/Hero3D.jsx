import React, { useState, useRef, useEffect } from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CreditCard, 
  Star
} from 'lucide-react';

export default function Hero3D() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); // 0: Logo Reveal, 1: Promo Video
  
  const video1Ref = useRef(null); // Calm elegant logo reveal video
  const video2Ref = useRef(null); // Cinematic multi-shot promo video

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  // Auto-play initial logo reveal video on mount
  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.play().catch(() => {
        // Handle browser autoplay policy gracefully
      });
    }
  }, []);

  // When video 1 ends, smoothly transition to video 2
  const handleVideo1Ended = () => {
    setActiveVideoIndex(1);
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch(() => {});
    }
  };

  return (
    <section className="hero-section">
      {/* Background Sequential Cinematic Videos */}
      <div className="hero-video-wrapper">
        
        {/* Video 1: Calm Elegant Logo Reveal (Plays First) */}
        <video
          ref={video1Ref}
          className={`hero-video-element video-layer ${activeVideoIndex === 0 ? 'video-visible' : 'video-hidden'}`}
          autoPlay
          muted
          playsInline
          onEnded={handleVideo1Ended}
          poster="/images/clinic-reception.jpg"
        >
          <source src="/videos/hero-logo-reveal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video 2: Cinematic Multi-Shot Treatment Promo (Plays Second & Loops) */}
        <video
          ref={video2Ref}
          className={`hero-video-element video-layer ${activeVideoIndex === 1 ? 'video-visible' : 'video-hidden'}`}
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/clinic-reception.jpg"
        >
          <source src="/videos/hero-promo.mp4" type="video/mp4" />
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

          {/* Main Headline with Staggered Entrance Animation */}
          <h1 className="hero-heading">
            <span className="hero-word-row">
              <span className="hero-word word-1">Restorative</span>{' '}
              <span className="hero-word word-2 hero-heading-accent">Therapy.</span>
            </span>
            <br />
            <span className="hero-word-row">
              <span className="hero-word word-3 hero-heading-accent">Exceptional</span>{' '}
              <span className="hero-word word-4">Healing.</span>
            </span>
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

        .video-layer {
          position: absolute;
          inset: 0;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-visible {
          opacity: 1;
          z-index: 2;
        }

        .video-hidden {
          opacity: 0;
          z-index: 1;
          pointer-events: none;
        }

        .video-overlay-tint {
          position: absolute;
          inset: 0;
          z-index: 3;
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
          z-index: 3;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.15;
        }

        .hero-container {
          position: relative;
          z-index: 4;
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

        .hero-word-row {
          display: inline-block;
        }

        .hero-word {
          display: inline-block;
          animation: heroWordFadeIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity, filter;
        }

        .word-1 {
          animation-delay: 0.15s;
        }

        .word-2 {
          animation-delay: 0.38s;
        }

        .word-3 {
          animation-delay: 0.62s;
        }

        .word-4 {
          animation-delay: 0.85s;
        }

        @keyframes heroWordFadeIn {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .hero-heading-accent {
          color: #74c69d;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
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
        }
      `}</style>
    </section>
  );
}
