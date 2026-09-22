import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CreditCard, 
  Star,
  Activity,
  Heart,
  Zap,
  Flame,
  MousePointer
} from 'lucide-react';
import RoundCarousel from './RoundCarousel';

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

      {/* Main Hero Content - Split Layout with Center 3D Round Carousel Services */}
      <div className="container hero-container">
        <div className={`hero-headline-wrapper ${activeVideoIndex === 1 ? 'hero-heading-reveal' : 'hero-heading-pending'}`}>
          {/* Top-Left: Restorative Therapy */}
          <div className="hero-heading-left">
            <h1 className="hero-heading-line">
              <span className="hero-word word-1">Restorative</span>{' '}
              <span className="hero-word word-2 hero-heading-accent">Therapy.</span>
            </h1>
          </div>

          {/* Center 3D Round Carousel Showcase (Animates All Services in 3D Revolve Ring) */}
          <div className="hero-center-showcase">
            <div className="carousel-3d-wrapper">
              <RoundCarousel />
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
          height: 100vh;
          min-height: 100vh;
          max-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: -136px;
          padding: 136px 0 0 0;
          background: #0d2818;
          color: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
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
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 4px;
          padding-bottom: 8px;
          width: 100%;
          min-height: 0;
        }

        .hero-headline-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          width: 100%;
          min-height: 0;
          transition: opacity 0.5s ease;
        }

        .hero-heading-left {
          align-self: flex-start;
          text-align: left;
          max-width: 650px;
          margin-top: 2px;
        }

        /* Center Single Card Showcase */
        .hero-center-showcase {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          z-index: 5;
          width: 100%;
          max-width: 580px;
          flex: 1;
          min-height: 0;
          position: relative;
        }

        .carousel-3d-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-heading-right {
          align-self: flex-end;
          text-align: right;
          max-width: 650px;
          margin-bottom: 6px;
        }

        .hero-heading-line {
          font-size: clamp(1.8rem, 3.4vw, 3.1rem);
          line-height: 1.12;
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

        /* Floating Trust Bar at bottom edge of single-page hero */
        .hero-overlap-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-bottom: 0px;
          margin-top: 0px;
          padding-bottom: 4px;
        }

        .hero-trust-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding: 12px 28px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, rgba(13, 40, 24, 0.96) 0%, rgba(20, 56, 36, 0.94) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(116, 198, 157, 0.35);
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08);
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
          align-items: center;
          gap: 12px;
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
          gap: 2px;
        }

        .cell-icon-green {
          color: #74c69d;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(82, 183, 136, 0.4));
        }

        .cell-icon-gold {
          color: #dfc27d;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(223, 194, 125, 0.4));
        }

        .trust-cell strong {
          display: block;
          font-size: 0.98rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .trust-cell span {
          font-size: 0.8rem;
          color: #c4ebd0;
          font-weight: 500;
          line-height: 1.35;
        }

        @media (max-width: 1040px) {
          .hero-section {
            height: auto;
            min-height: 100vh;
            max-height: none;
            padding: 140px 0 20px 0;
            overflow: visible;
          }
          .hero-heading-left,
          .hero-heading-right {
            text-align: center;
            align-self: center;
            max-width: 100%;
          }
          .hero-heading-right {
            margin-bottom: 12px;
          }
          .hero-center-showcase {
            margin: 12px auto;
            min-height: 280px;
          }
          .hero-trust-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 16px 20px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 125px 0 16px 0;
          }
          .hero-heading-line {
            font-size: clamp(1.6rem, 6vw, 2.2rem);
          }
          .hero-center-showcase {
            min-height: 270px;
          }
          .hero-trust-bar {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 14px 16px;
          }
          .trust-cell strong {
            font-size: 0.92rem;
          }
          .trust-cell span {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </section>
  );
}
