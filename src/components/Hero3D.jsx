import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  // Auto-play initial logo reveal video on mount at 1.5x speed
  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.playbackRate = 1.5;
      video1Ref.current.play().catch(() => {
        // Handle browser autoplay policy gracefully
      });
    }

    // Safety timeout: ensure headline reveals even if video onEnded is delayed (adjusted for 1.5x speed)
    const timer = setTimeout(() => {
      setActiveVideoIndex(1);
    }, 4800);
    return () => clearTimeout(timer);
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
        
        {/* Video 1: Calm Elegant Logo Reveal (Plays First at 1.5x Speed) */}
        <video
          ref={video1Ref}
          className={`hero-video-element video-layer ${activeVideoIndex === 0 ? 'video-visible' : 'video-hidden'}`}
          autoPlay
          muted
          playsInline
          onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 1.5; }}
          onPlay={(e) => { e.currentTarget.playbackRate = 1.5; }}
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

      {/* Main Hero Content - Split Layout with Center Video */}
      <div className="container hero-container">
        <div className={`hero-headline-wrapper ${activeVideoIndex === 1 ? 'hero-heading-reveal' : 'hero-heading-pending'}`}>
          {/* Top-Left: Restorative Therapy */}
          <div className="hero-heading-left">
            <h1 className="hero-heading-line">
              <span className="hero-word word-1">Restorative</span>{' '}
              <span className="hero-word word-2 hero-heading-accent">Therapy.</span>
            </h1>
          </div>

          {/* Center Floating Animation Video (In Middle Marked Box) */}
          <div className="hero-center-media">
            <div className="hero-center-video-card">
              <video
                className="hero-center-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/videos/calm-elegant-white-hand.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Bottom-Right (Red Marked Spot): Exceptional Healing */}
          <div className="hero-heading-right">
            <h2 className="hero-heading-line">
              <span className="hero-word word-3 hero-heading-accent">Exceptional</span>{' '}
              <span className="hero-word word-4">Healing.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Overlapping Floating Trust Bar (Bridges Hero & Next Section) */}
      <div className="hero-overlap-wrapper">
        <div className="container">
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
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: -136px;
          padding: 154px 0 0 0;
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

        .hero-top-badges-bar {
          position: relative;
          z-index: 5;
          width: 100%;
          padding-top: 10px;
          margin-bottom: 24px;
        }

        .hero-badge-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        }

        .badge-item-1 {
          animation: badgeFloatDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .badge-item-2 {
          animation: badgeFloatDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
        }

        @keyframes badgeFloatDown {
          0% {
            opacity: 0;
            transform: translateY(-28px) scale(0.92);
            filter: blur(10px) brightness(1.35);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0) brightness(1);
          }
        }

        .hero-google-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(244, 180, 0, 0.65);
          padding: 10px 22px;
          border-radius: var(--radius-full);
          box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.35);
          transition: var(--transition);
        }
        .hero-google-badge:hover {
          background: rgba(255, 255, 255, 0.28);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -4px rgba(0, 0, 0, 0.45);
        }

        .stars-mini {
          display: flex;
          gap: 3px;
        }

        .google-score-tag {
          font-size: 0.95rem;
          font-weight: 750;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(82, 183, 136, 0.22);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid rgba(82, 183, 136, 0.45);
          padding: 10px 22px;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.35);
        }

        .pill-gold-icon {
          color: #e9c46a;
          filter: drop-shadow(0 2px 6px rgba(233, 196, 106, 0.5));
        }

        .hero-container {
          position: relative;
          z-index: 4;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 10px;
          padding-bottom: 20px;
          width: 100%;
        }

        .hero-headline-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          width: 100%;
          min-height: 280px;
          transition: opacity 0.5s ease;
        }

        .hero-heading-left {
          align-self: flex-start;
          text-align: left;
          max-width: 650px;
          margin-top: 15px;
        }

        /* Center Video Asset (In Middle Marked Box) */
        .hero-center-media {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px auto;
          z-index: 5;
          animation: centerMediaFadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
        }

        @keyframes centerMediaFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        .hero-center-video-card {
          width: clamp(260px, 32vw, 380px);
          aspect-ratio: 16/9;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.55), 0 0 35px rgba(116, 198, 157, 0.28);
          border: 2px solid rgba(116, 198, 157, 0.45);
          background: rgba(13, 40, 24, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .hero-center-video-card:hover {
          transform: scale(1.03);
          box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.65), 0 0 45px rgba(116, 198, 157, 0.45);
          border-color: #74c69d;
        }

        .hero-center-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-heading-right {
          align-self: flex-end;
          text-align: right;
          max-width: 650px;
          margin-bottom: 20px;
        }

        .hero-heading-line {
          font-size: clamp(2.4rem, 4.6vw, 4rem);
          line-height: 1.15;
          color: #ffffff;
          margin: 0;
          font-weight: 800;
          letter-spacing: -0.025em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
        }

        .hero-heading-pending {
          opacity: 0;
          visibility: hidden;
        }

        .hero-heading-reveal {
          opacity: 1;
          visibility: visible;
        }

        .hero-heading-reveal .hero-word {
          display: inline-block;
          animation: heroWordDramaticReveal 1.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity, filter, letter-spacing;
        }

        .hero-heading-reveal .word-1 {
          animation-delay: 0.35s;
        }

        .hero-heading-reveal .word-2 {
          animation-delay: 0.95s;
        }

        .hero-heading-reveal .word-3 {
          animation-delay: 1.65s;
        }

        .hero-heading-reveal .word-4 {
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

        /* Overlapping Trust Bar Card & Bottom Actions */
        .hero-overlap-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-bottom: -54px;
          margin-top: 24px;
        }

        .hero-buttons-pending {
          opacity: 0;
          visibility: hidden;
        }

        .hero-buttons-reveal {
          opacity: 1;
          visibility: visible;
          animation: heroButtonsFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
        }

        .hero-buttons-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin: 0 auto 24px auto;
          width: 100%;
          flex-wrap: wrap;
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
          .hero-section {
            margin-top: -125px;
            padding: 142px 0 0 0;
          }
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
            margin-top: -116px;
            padding: 130px 0 0 0;
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
