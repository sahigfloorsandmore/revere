"use client";

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Activity, 
  Zap, 
  Flame, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2 
} from "lucide-react";

export const DEFAULT_SERVICES = [
  {
    id: "rmt",
    title: "Massage Therapy (RMT)",
    tag: "Core Discipline",
    subtitle: "Registered Massage Therapy",
    highlight: "Deep tissue, Swedish, prenatal & sports therapy designed to relieve tension and restore full mobility.",
    category: "rmt",
    src: "/images/massage-therapy.png",
    icon: Heart,
    color: "#52b788",
    badge: "ICBC & Direct Billing"
  },
  {
    id: "physio",
    title: "Physiotherapy & Rehab",
    tag: "Clinical Care",
    subtitle: "Evidence-Based Rehabilitation",
    highlight: "Comprehensive physical assessment, joint mobilization, and tailored active recovery for fast pain relief.",
    category: "physio-kin",
    src: "/images/physiotherapy.jpg",
    icon: Activity,
    color: "#74c69d",
    badge: "Pre-Approved ICBC"
  },
  {
    id: "kinesiology",
    title: "Kinesiology Therapy",
    tag: "Active Rehab",
    subtitle: "Active Exercise Conditioning",
    highlight: "1-on-1 guided exercise rehab empowering you to rebuild strength, endurance, and proper posture.",
    category: "physio-kin",
    src: "/images/clinic-treatment-room.jpg",
    icon: Activity,
    color: "#e9c46a",
    badge: "ICBC Active Recovery"
  },
  {
    id: "ims",
    title: "IMS / Dry Needling",
    tag: "Specialized Modality",
    subtitle: "Intramuscular Stimulation",
    highlight: "Precision dry needling targeting tight muscle bands to release chronic nerve pain and deep trigger knots.",
    category: "specialized",
    src: "/images/acupuncture-ims.jpg",
    icon: Zap,
    color: "#f4a261",
    badge: "Fast Trigger Point Relief"
  },
  {
    id: "shockwave",
    title: "Radial Shockwave",
    tag: "Soundwave Tech",
    subtitle: "Acoustic Wave Therapy",
    highlight: "Non-invasive acoustic soundwaves stimulating collagen synthesis in stubborn chronic tissues & plantar fasciitis.",
    category: "specialized",
    src: "/images/clinic-room-bed.jpg",
    icon: Zap,
    color: "#52b788",
    badge: "Cellular Regeneration"
  },
  {
    id: "hot-stone",
    title: "Hot Stone Therapy",
    tag: "Thermal Healing",
    subtitle: "Heated Volcanic Basalt",
    highlight: "Smooth, heated volcanic basalt stones delivering deeply penetrating warmth to dissolve muscular tightness.",
    category: "specialized",
    src: "/images/clinic-reception.jpg",
    icon: Flame,
    color: "#e9c46a",
    badge: "Deep Thermal Relaxation"
  },
  {
    id: "icbc",
    title: "ICBC Injury Recovery",
    tag: "Direct Billing ICBC",
    subtitle: "Motor Vehicle Accident Care",
    highlight: "Complete pre-approved care plans with $0 out-of-pocket fees for RMT, Physiotherapy, and Active Rehab.",
    category: "rmt",
    src: "/images/clinic-treatment-room.jpg",
    icon: ShieldCheck,
    color: "#74c69d",
    badge: "100% Pre-Approved Coverage"
  },
  {
    id: "cupping",
    title: "Cupping Therapy",
    tag: "Restorative Care",
    subtitle: "Myofascial Decompression",
    highlight: "Dynamic vacuum suction decompression that increases local blood circulation and releases tight fascial layers.",
    category: "specialized",
    src: "/images/11.JPG",
    icon: Sparkles,
    color: "#dfc27d",
    badge: "Decompression & Blood Flow"
  }
];

export default function RoundCarousel({
  items = DEFAULT_SERVICES,
  intervalDuration = 4200, // Changes slowly every 4.2 seconds in loop
}) {
  const serviceList = items && items.length > 0 ? items : DEFAULT_SERVICES;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  // Slowly cycle 1 card at a time in loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, intervalDuration);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, intervalDuration, serviceList.length]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceList.length);
      setIsTransitioning(false);
    }, 380);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + serviceList.length) % serviceList.length);
      setIsTransitioning(false);
    }, 380);
  };

  const currentItem = serviceList[currentIndex] || serviceList[0];
  const IconComponent = currentItem.icon || Sparkles;

  return (
    <div
      className="single-card-showcase-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Previous Arrow */}
      <button 
        className="carousel-nav-btn prev-btn" 
        onClick={handlePrev}
        aria-label="Previous Service"
        type="button"
      >
        <ChevronLeft size={20} />
      </button>

      {/* The Single Active Cinematic Card */}
      <div className={`single-service-card ${isTransitioning ? 'card-anim-exit' : 'card-anim-enter'}`}>
        {/* Background Photography Layer */}
        {currentItem.src && (
          <div
            className="card-bg-photo"
            style={{ backgroundImage: `url(${currentItem.src})` }}
          />
        )}

        {/* Top Header */}
        <div className="single-card-header">
          <span className="single-card-tag">
            <Sparkles size={13} className="tag-sparkle" />
            <span>{currentItem.tag}</span>
          </span>

          <div className="single-card-icon-box" style={{ color: currentItem.color || "#74c69d" }}>
            <IconComponent size={20} />
          </div>
        </div>

        {/* Content Section */}
        <div className="single-card-body">
          <span className="single-card-subtitle">{currentItem.subtitle}</span>
          <h3 className="single-card-title">{currentItem.title}</h3>
          <p className="single-card-highlight">{currentItem.highlight}</p>
        </div>

        {/* Footer Actions & Metadata */}
        <div className="single-card-footer">
          <div className="footer-meta-row">
            <span className="single-card-badge">
              <ShieldCheck size={14} className="text-green" />
              <span>{currentItem.badge}</span>
            </span>

            <span className="single-card-counter">
              {currentIndex + 1} / {serviceList.length}
            </span>
          </div>

          <div className="footer-actions-row">
            <a
              href={JANEAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-card-book"
            >
              <Calendar size={14} />
              <span>Book Treatment</span>
            </a>

            <Link
              to={`/services?cat=${currentItem.category || "rmt"}`}
              className="btn-card-details"
            >
              <span>Details</span>
              <ArrowRight size={14} className="arrow-icon" />
            </Link>
          </div>
        </div>

        {/* Smooth Looping Progress Indicator Bar */}
        <div className="single-card-progress-track">
          <div 
            key={currentIndex} 
            className={`single-card-progress-bar ${isPaused ? 'paused' : ''}`}
            style={{ animationDuration: `${intervalDuration}ms` }}
          />
        </div>
      </div>

      {/* Next Arrow */}
      <button 
        className="carousel-nav-btn next-btn" 
        onClick={handleNext}
        aria-label="Next Service"
        type="button"
      >
        <ChevronRight size={20} />
      </button>

      <style>{`
        .single-card-showcase-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          user-select: none;
        }

        .single-service-card {
          position: relative;
          width: 100%;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(13, 40, 24, 0.94) 0%, rgba(9, 26, 16, 0.98) 100%);
          border: 1.5px solid rgba(116, 198, 157, 0.45);
          box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.75), 0 0 35px rgba(82, 183, 136, 0.28);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px 24px 18px 24px;
          color: #ffffff;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          min-height: 255px;
        }

        .single-service-card:hover {
          transform: translateY(-2px);
          border-color: #74c69d;
          box-shadow: 0 28px 70px -15px rgba(0, 0, 0, 0.85), 0 0 45px rgba(116, 198, 157, 0.35);
        }

        /* Cinematic Enter / Exit Animation */
        .card-anim-enter {
          animation: cardCinematicEnter 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .card-anim-exit {
          animation: cardCinematicExit 0.38s cubic-bezier(0.4, 0, 1, 1) both;
        }

        @keyframes cardCinematicEnter {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(18px) rotateX(6deg);
            filter: blur(10px) brightness(1.25);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotateX(0deg);
            filter: blur(0) brightness(1);
          }
        }

        @keyframes cardCinematicExit {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0) rotateX(0deg);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.94) translateY(-14px) rotateX(-6deg);
            filter: blur(8px);
          }
        }

        .card-bg-photo {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 140px;
          background-size: cover;
          background-position: center;
          opacity: 0.18;
          z-index: 0;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }

        /* Card Header */
        .single-card-header {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .single-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #e9c46a;
          background: rgba(233, 196, 106, 0.16);
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid rgba(233, 196, 106, 0.4);
        }

        .tag-sparkle {
          color: #e9c46a;
        }

        .single-card-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(116, 198, 157, 0.25), rgba(82, 183, 136, 0.15));
          border: 1px solid rgba(116, 198, 157, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        /* Card Body */
        .single-card-body {
          position: relative;
          z-index: 1;
          margin: 6px 0 8px 0;
        }

        .single-card-subtitle {
          display: block;
          font-size: 0.76rem;
          font-weight: 700;
          color: #74c69d;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 2px;
        }

        .single-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 5px 0;
          line-height: 1.2;
          letter-spacing: -0.015em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .single-card-highlight {
          font-size: 0.82rem;
          color: #d8f3dc;
          margin: 0;
          line-height: 1.4;
          opacity: 0.94;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Card Footer */
        .single-card-footer {
          position: relative;
          z-index: 1;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .single-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.74rem;
          color: #95d5b2;
          font-weight: 700;
        }

        .text-green {
          color: #74c69d;
        }

        .single-card-counter {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 700;
        }

        .footer-actions-row {
          display: flex;
          gap: 8px;
        }

        .btn-card-book {
          flex: 1;
          padding: 8px 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #2d6a4f, #52b788);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.82rem;
          text-align: center;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          box-shadow: 0 4px 12px rgba(45, 106, 79, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn-card-book:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(45, 106, 79, 0.55);
        }

        .btn-card-details {
          padding: 8px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #e9c46a;
          font-weight: 700;
          font-size: 0.82rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .btn-card-details:hover {
          background: rgba(233, 196, 106, 0.15);
          border-color: #e9c46a;
        }

        .btn-card-details:hover .arrow-icon {
          transform: translateX(3px);
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        /* Looping Progress Indicator Bar */
        .single-card-progress-track {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
        }

        .single-card-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #52b788, #e9c46a);
          animation: progressBarFill linear infinite;
        }

        .single-card-progress-bar.paused {
          animation-play-state: paused;
        }

        @keyframes progressBarFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        /* Navigation Arrows */
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(13, 40, 24, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(116, 198, 157, 0.4);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }

        .prev-btn {
          left: -48px;
        }

        .next-btn {
          right: -48px;
        }

        .carousel-nav-btn:hover {
          background: rgba(45, 106, 79, 0.95);
          border-color: #74c69d;
          transform: translateY(-50%) scale(1.1);
          color: #e9c46a;
        }

        @media (max-width: 640px) {
          .single-card-showcase-container {
            max-width: 100%;
          }
          .prev-btn {
            left: 6px;
          }
          .next-btn {
            right: 6px;
          }
          .single-service-card {
            padding: 18px 20px 14px 20px;
            border-radius: 22px;
          }
          .single-card-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}
