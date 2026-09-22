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
  Star,
  Activity,
  Heart,
  Zap,
  Flame
} from 'lucide-react';

export default function Hero3D() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); // 0: Logo Reveal, 1: Promo Video
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isServiceAnimating, setIsServiceAnimating] = useState(false);
  
  const video1Ref = useRef(null); // Calm elegant logo reveal video
  const video2Ref = useRef(null); // Cinematic multi-shot promo video

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  const heroServices = [
    {
      id: 'rmt',
      tag: 'Core Discipline 01',
      title: 'Massage Therapy (RMT)',
      highlight: 'Deep Tissue, Swedish, Prenatal & Sports Bodywork',
      category: 'rmt',
      icon: Heart,
      iconColor: 'icon-green',
      directBilling: 'Covered by ICBC & Extended Health'
    },
    {
      id: 'physio',
      tag: 'Core Discipline 02',
      title: 'Physiotherapy & Rehab',
      highlight: 'Clinical Evaluation, Joint Mobilization & Injury Recovery',
      category: 'physio-kin',
      icon: Activity,
      iconColor: 'icon-sage',
      directBilling: 'Pre-Approved Direct Billing to ICBC'
    },
    {
      id: 'kinesiology',
      tag: 'Core Discipline 03',
      title: 'Kinesiology & Active Rehab',
      highlight: '1-on-1 Guided Exercise Therapy & Functional Movement',
      category: 'physio-kin',
      icon: Activity,
      iconColor: 'icon-gold',
      directBilling: 'Direct Billing & ICBC Active Recovery'
    },
    {
      id: 'ims',
      tag: 'Specialized Modality',
      title: 'IMS / Dry Needling',
      highlight: 'Intramuscular Stimulation to Reset Chronic Knots',
      category: 'specialized',
      icon: Zap,
      iconColor: 'icon-gold',
      directBilling: 'Fast Trigger Point Relief'
    },
    {
      id: 'shockwave',
      tag: 'Specialized Modality',
      title: 'Radial Shockwave Therapy',
      highlight: 'Acoustic Soundwaves for Tendonitis & Plantar Fasciitis',
      category: 'specialized',
      icon: Zap,
      iconColor: 'icon-green',
      directBilling: 'Evidence-Based Tissue Healing'
    },
    {
      id: 'hot-stone',
      tag: 'Restorative Therapy',
      title: 'Hot Stone Therapy',
      highlight: 'Deep Heated Basalt Stones for Muscular Tension Release',
      category: 'specialized',
      icon: Flame,
      iconColor: 'icon-gold',
      directBilling: 'Deep Thermal Relaxation'
    }
  ];

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

  // Cycle through all services automatically with cinematic timing
  useEffect(() => {
    const interval = setInterval(() => {
      setIsServiceAnimating(true);
      setTimeout(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % heroServices.length);
        setIsServiceAnimating(false);
      }, 300);
    }, 3600);

    return () => clearInterval(interval);
  }, [heroServices.length]);

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

      {/* Main Hero Content - Split Layout with Center Animated Services */}
      <div className="container hero-container">
        <div className={`hero-headline-wrapper ${activeVideoIndex === 1 ? 'hero-heading-reveal' : 'hero-heading-pending'}`}>
          {/* Top-Left: Restorative Therapy */}
          <div className="hero-heading-left">
            <h1 className="hero-heading-line">
              <span className="hero-word word-1">Restorative</span>{' '}
              <span className="hero-word word-2 hero-heading-accent">Therapy.</span>
            </h1>
          </div>

          {/* Center Cinematic Service Showcase (Animates All Services One by One in Middle Marked Box) */}
          <div className="hero-center-showcase">
            <Link 
              to={`/services?cat=${heroServices[currentServiceIndex].category}`}
              className={`service-cycler-card ${isServiceAnimating ? 'service-card-exit' : 'service-card-enter'}`}
              title={`Explore ${heroServices[currentServiceIndex].title}`}
            >
              <div className="cycler-header">
                <span className="cycler-tag">
                  <Sparkles size={13} className="text-gold" />
                  <span>{heroServices[currentServiceIndex].tag}</span>
                </span>
                <span className="cycler-counter">
                  {currentServiceIndex + 1} / {heroServices.length}
                </span>
              </div>

              <div className="cycler-main">
                <div className={`cycler-icon-box ${heroServices[currentServiceIndex].iconColor}`}>
                  {React.createElement(heroServices[currentServiceIndex].icon, { size: 26 })}
                </div>
                <div className="cycler-text">
                  <h3 className="cycler-title">{heroServices[currentServiceIndex].title}</h3>
                  <p className="cycler-highlight">{heroServices[currentServiceIndex].highlight}</p>
                </div>
              </div>

              <div className="cycler-footer">
                <span className="cycler-meta">
                  <ShieldCheck size={14} className="text-green-icon" />
                  <span>{heroServices[currentServiceIndex].directBilling}</span>
                </span>
                <span className="cycler-link">
                  <span>Explore Service</span>
                  <ArrowRight size={14} className="cycler-arrow" />
                </span>
              </div>

              {/* Cinematic Progress Bar Indicator */}
              <div className="cycler-progress-track">
                <div key={currentServiceIndex} className="cycler-progress-bar"></div>
              </div>
            </Link>
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

        /* Center Cinematic Animated Services Showcase */
        .hero-center-showcase {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 12px auto;
          z-index: 5;
          width: 100%;
          max-width: 500px;
        }

        .service-cycler-card {
          width: 100%;
          background: rgba(13, 40, 24, 0.82);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid rgba(116, 198, 157, 0.42);
          border-radius: var(--radius-2xl);
          padding: 24px 28px 20px 28px;
          box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.65), 0 0 40px rgba(82, 183, 136, 0.25);
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          text-decoration: none;
          color: #ffffff;
        }

        .service-cycler-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 28px 70px -15px rgba(0, 0, 0, 0.75), 0 0 50px rgba(116, 198, 157, 0.4);
          border-color: #74c69d;
        }

        .service-card-enter {
          animation: serviceCinematicEnter 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .service-card-exit {
          animation: serviceCinematicExit 0.3s cubic-bezier(0.4, 0, 1, 1) both;
        }

        @keyframes serviceCinematicEnter {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(0.94);
            filter: blur(12px) brightness(1.3);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0) brightness(1);
          }
        }

        @keyframes serviceCinematicExit {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-18px) scale(0.95);
            filter: blur(10px);
          }
        }

        .cycler-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cycler-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #e9c46a;
          background: rgba(233, 196, 106, 0.15);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(233, 196, 106, 0.3);
        }

        .cycler-counter {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(216, 243, 220, 0.75);
          letter-spacing: 0.05em;
        }

        .cycler-main {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .cycler-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        .cycler-icon-box.icon-green {
          background: linear-gradient(135deg, rgba(45, 106, 79, 0.85), rgba(82, 183, 136, 0.85));
          color: #ffffff;
          border: 1px solid rgba(116, 198, 157, 0.5);
        }
        .cycler-icon-box.icon-sage {
          background: linear-gradient(135deg, rgba(27, 67, 50, 0.85), rgba(56, 130, 66, 0.85));
          color: #d8f3dc;
          border: 1px solid rgba(82, 183, 136, 0.5);
        }
        .cycler-icon-box.icon-gold {
          background: linear-gradient(135deg, rgba(179, 139, 52, 0.85), rgba(233, 196, 106, 0.85));
          color: #ffffff;
          border: 1px solid rgba(233, 196, 106, 0.5);
        }

        .cycler-text {
          flex: 1;
        }

        .cycler-title {
          font-size: 1.32rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .cycler-highlight {
          font-size: 0.86rem;
          color: #d8f3dc;
          margin: 0;
          line-height: 1.4;
          opacity: 0.92;
        }

        .cycler-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.82rem;
        }

        .cycler-meta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #b7e4c7;
          font-weight: 600;
        }
        .text-green-icon {
          color: #74c69d;
        }

        .cycler-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #e9c46a;
          font-weight: 700;
          transition: gap 0.2s ease;
        }
        .service-cycler-card:hover .cycler-arrow {
          transform: translateX(4px);
        }
        .cycler-arrow {
          transition: transform 0.2s ease;
        }

        /* Cinematic Progress Indicator Bar */
        .cycler-progress-track {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3.5px;
          background: rgba(255, 255, 255, 0.12);
        }

        .cycler-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #52b788, #e9c46a);
          animation: cyclerProgressBarFill 3.6s linear infinite;
        }

        @keyframes cyclerProgressBarFill {
          0% { width: 0%; }
          100% { width: 100%; }
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

        /* Overlapping Trust Bar Card */
        .hero-overlap-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-bottom: -54px;
          margin-top: 24px;
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
          .hero-heading-left,
          .hero-heading-right {
            text-align: center;
            align-self: center;
            max-width: 100%;
          }
          .hero-heading-right {
            margin-bottom: 12px;
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
          .hero-center-showcase {
            max-width: 100%;
            margin: 16px 0;
          }
          .service-cycler-card {
            padding: 18px 20px 16px 20px;
            gap: 12px;
          }
          .cycler-icon-box {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }
          .cycler-title {
            font-size: 1.15rem;
          }
          .cycler-highlight {
            font-size: 0.8rem;
          }
          .cycler-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
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
