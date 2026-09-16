import React, { useState, useRef } from 'react';
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
  ExternalLink
} from 'lucide-react';

export default function Hero3D() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  // High quality streaming video loop for massage therapy & physiotherapy wellness
  const VIDEO_SRC = "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-masseuse-massaging-a-person-41271-large.mp4";
  const FALLBACK_VIDEO_SRC = "https://assets.mixkit.co/videos/preview/mixkit-masseur-giving-a-massage-to-a-client-41270-large.mp4";

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
      {/* Background Cinematic Video */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video-element"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          <source src={FALLBACK_VIDEO_SRC} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Luxury Dark Emerald & Charcoal Gradient Masks */}
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

        {/* Right Column: Floating Luxury Scheduling Card */}
        <div className="hero-right-column">
          <div className="booking-feature-card glass-card-dark">
            <div className="card-top-tag">
              <div className="status-live-dot"></div>
              <span>Instant Online Booking on JaneApp</span>
            </div>

            <h3 className="card-heading">Ready for Relief & Restoration?</h3>
            <p className="card-sub">
              Select your therapist, pick your desired time slot, and confirm your session in seconds.
            </p>

            <ul className="card-perks-list">
              <li>
                <CheckCircle2 size={16} className="perk-check" />
                <span><strong>No upfront charge</strong> (card on file for 24h cancellation)</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="perk-check" />
                <span><strong>Direct insurance billing</strong> submitted on checkout</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="perk-check" />
                <span><strong>Zero-tolerance</strong> safe, licensed & clinical environment</span>
              </li>
            </ul>

            <a 
              href={JANEAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold card-book-btn"
            >
              <Calendar size={18} />
              <span>Select Therapist on JaneApp</span>
              <ExternalLink size={14} className="ext-icon" />
            </a>

            {/* Video Controls Toggle */}
            <div className="video-control-strip">
              <button 
                onClick={toggleVideoPlay} 
                className="video-toggle-btn"
                title={isPlaying ? "Pause video background" : "Play video background"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Pause Background Video' : 'Play Background Video'}</span>
              </button>
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
          padding: 80px 0 110px 0;
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
          filter: brightness(0.65) contrast(1.1);
          transform: scale(1.02);
        }

        .video-overlay-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg, 
            rgba(13, 40, 24, 0.90) 0%, 
            rgba(10, 13, 14, 0.78) 60%, 
            rgba(27, 67, 50, 0.72) 100%
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
          grid-template-columns: 1.25fr 0.85fr;
          gap: 50px;
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
          font-size: clamp(2.6rem, 5vw, 4rem);
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
          font-size: 1.15rem;
          color: #d8f3dc;
          line-height: 1.7;
          margin-bottom: 36px;
          opacity: 0.95;
        }

        .hero-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 44px;
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

        /* Right Column Feature Card */
        .booking-feature-card {
          padding: 36px;
          border-radius: var(--radius-xl);
          background: rgba(18, 24, 27, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
        }

        .card-top-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #74c69d;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .status-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #52b788;
          box-shadow: 0 0 10px #52b788;
        }

        .card-heading {
          font-size: 1.45rem;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .card-sub {
          font-size: 0.92rem;
          color: #dce4de;
          line-height: 1.55;
          margin-bottom: 22px;
        }

        .card-perks-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .card-perks-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #f2f9f5;
          line-height: 1.45;
        }

        .perk-check {
          color: #52b788;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .card-book-btn {
          width: 100%;
          padding: 15px;
          font-size: 1.02rem;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .video-control-strip {
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 14px;
        }

        .video-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #a1b0a6;
          transition: var(--transition);
        }

        .video-toggle-btn:hover {
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
        }
      `}</style>
    </section>
  );
}
