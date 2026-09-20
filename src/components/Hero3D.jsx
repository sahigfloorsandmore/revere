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

      {/* Main Hero Content */}
      <div className="container hero-container">
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
        </div>
      </div>

      {/* Overlapping Floating Trust Bar & Actions (Bridges Hero & Next Section) */}
      <div className="hero-overlap-wrapper">
        <div className="container">
          {/* Primary & Secondary Call to Actions in Bottom Zone */}
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
              <span>Explore All Our Services</span>
            </a>
          </div>

          <div className="hero-trust-bar glass-trust-card">
            <div className="trust-cell cell-1">
              <ShieldCheck size={28} className="cell-icon-green" />
              <div className="trust-cell-body">
                <strong>ICBC Approved</strong>
                <span>Direct billing for RMT & Physio</span>
              </div>
            </div>

            <div className="trust-cell cell-2">
              <CreditCard size={28} className="cell-icon-gold" />
              <div className="trust-cell-body">
                <strong>Direct Billing</strong>
                <span>To 20+ extended health insurers</span>
              </div>
            </div>

            <div className="trust-cell cell-3">
              <Clock size={28} className="cell-icon-green" />
              <div className="trust-cell-body">
                <strong>Open 7 Days</strong>
                <span>6:30 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="trust-cell cell-4">
              <MapPin size={28} className="cell-icon-gold" />
              <div className="trust-cell-body">
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
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 80px 0 0 0;
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
          padding-top: 10px;
          padding-bottom: 30px;
        }

        .hero-content {
          max-width: 840px;
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
          vertical-align: bottom;
        }

        .hero-word {
          display: inline-block;
          animation: heroWordDramaticReveal 1.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity, filter, letter-spacing;
        }

        .word-1 {
          animation-delay: 0.35s;
        }

        .word-2 {
          animation-delay: 0.95s;
        }

        .word-3 {
          animation-delay: 1.65s;
        }

        .word-4 {
          animation-delay: 2.25s;
        }

        @keyframes heroWordDramaticReveal {
          0% {
            opacity: 0;
            transform: translateY(38px) scale(0.92);
            filter: blur(14px) brightness(1.35);
            letter-spacing: 0.06em;
          }
          40% {
            opacity: 0.75;
            filter: blur(4px) brightness(1.15);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0) brightness(1);
            letter-spacing: -0.025em;
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
          margin-bottom: 20px;
          max-width: 760px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
        }
        .hero-lead strong {
          color: #ffffff;
          font-weight: 700;
        }

        /* Overlapping Trust Bar Card & Bottom Actions */
        .hero-overlap-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-bottom: -54px;
          margin-top: 24px;
        }

        .hero-buttons-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin: 0 auto 24px auto;
          width: 100%;
          flex-wrap: wrap;
          animation: heroButtonsFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
        }

        @keyframes heroButtonsFadeIn {
          0% {
            opacity: 0;
            transform: translateY(22px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-main-cta {
          padding: 17px 38px;
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
          padding: 17px 30px;
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

        /* Overlapping Trust Bar Card */
        .hero-overlap-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-bottom: -54px;
          margin-top: 20px;
        }

        .hero-trust-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          padding: 26px 36px;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, rgba(13, 40, 24, 0.97) 0%, rgba(20, 56, 36, 0.95) 100%);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid rgba(116, 198, 157, 0.35);
          box-shadow: 0 24px 60px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08);
          animation: trustBarReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
        }

        @keyframes trustBarReveal {
          0% {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .trust-cell {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          animation: trustCellPop 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .cell-1 { animation-delay: 1.3s; }
        .cell-2 { animation-delay: 1.5s; }
        .cell-3 { animation-delay: 1.7s; }
        .cell-4 { animation-delay: 1.9s; }

        @keyframes trustCellPop {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .trust-cell-body {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .cell-icon-green {
          color: #74c69d;
          flex-shrink: 0;
          margin-top: 3px;
          filter: drop-shadow(0 2px 8px rgba(82, 183, 136, 0.4));
        }

        .cell-icon-gold {
          color: #dfc27d;
          flex-shrink: 0;
          margin-top: 3px;
          filter: drop-shadow(0 2px 8px rgba(223, 194, 125, 0.4));
        }

        .trust-cell strong {
          display: block;
          font-size: 1.12rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .trust-cell span {
          font-size: 0.92rem;
          color: #c4ebd0;
          font-weight: 500;
          line-height: 1.45;
        }

        @media (max-width: 1040px) {
          .hero-trust-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 22px 24px;
          }
          .hero-overlap-wrapper {
            margin-bottom: -70px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 50px 0 0 0;
          }
          .hero-trust-bar {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 20px;
          }
          .hero-overlap-wrapper {
            margin-bottom: -110px;
          }
          .trust-cell strong {
            font-size: 1.05rem;
          }
          .trust-cell span {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
