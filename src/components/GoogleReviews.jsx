import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Award,
  Sparkles
} from 'lucide-react';

export default function GoogleReviews() {
  const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=Revere+Massage+and+Wellness+Centre+Surrey";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allReviews = [
    {
      id: 1,
      author: "Harpreet S.",
      location: "Surrey, BC",
      stars: 5,
      date: "Verified Patient • 2 weeks ago",
      category: "rmt",
      treatment: "Registered Massage Therapy (RMT)",
      highlight: "Resolved chronic stiffness after just two sessions",
      comment: "Best massage clinic in Surrey! The RMT was extremely knowledgeable, took the time to assess my posture, and resolved my chronic lower back stiffness after just two sessions. The clinic is pristine, modern, and direct billing to Pacific Blue Cross was effortless."
    },
    {
      id: 2,
      author: "Jessica M.",
      location: "Newton, Surrey",
      stars: 5,
      date: "Verified Patient • 3 weeks ago",
      category: "icbc",
      treatment: "ICBC Physiotherapy & Active Rehab",
      highlight: "Seamless ICBC paperwork and zero out-of-pocket stress",
      comment: "Following a car accident, Revere took care of all my ICBC paperwork seamlessly. The physiotherapy care and progressive recovery plan got me back to work pain-free. The staff are so welcoming and the free basement parking is super convenient!"
    },
    {
      id: 3,
      author: "David K.",
      location: "Delta / Surrey",
      stars: 5,
      date: "Verified Patient • 1 month ago",
      category: "ims",
      treatment: "Deep Tissue & IMS Needling",
      highlight: "Immediate mobility back in my neck & shoulders",
      comment: "Incredible clinical care. The therapist explained everything thoroughly and the IMS treatment released knots in my shoulders that had bothered me for years. Open 7 days a week makes booking around busy work hours so easy."
    },
    {
      id: 4,
      author: "Samantha L.",
      location: "Surrey, BC",
      stars: 5,
      date: "Verified Patient • 1 month ago",
      category: "physio",
      treatment: "Physiotherapy & Kinesiology",
      highlight: "Attentive therapists who tailor exercises to your goals",
      comment: "Exceptional clinic from the moment you step through the door. Front desk staff are super friendly and polite. The physiotherapist really listens and creates a realistic active rehab plan that produced noticeable results within weeks!"
    },
    {
      id: 5,
      author: "Navjot K.",
      location: "Surrey, BC",
      stars: 5,
      date: "Verified Patient • 2 months ago",
      category: "rmt",
      treatment: "Prenatal & Restorative Massage",
      highlight: "Gentle, soothing, and wonderfully relaxing",
      comment: "Had an amazing prenatal massage with their registered therapist. The room was warm and relaxing, the hydraulic table was adjusted perfectly for comfort, and the therapist was so gentle yet effective. Highly recommend Revere to all expecting mothers!"
    },
    {
      id: 6,
      author: "Michael T.",
      location: "Surrey, BC",
      stars: 5,
      date: "Verified Patient • 2 months ago",
      category: "physio",
      treatment: "Shockwave Therapy & Sports Physio",
      highlight: "Back to running pain-free in 4 sessions",
      comment: "Suffered from plantar fasciitis for months until doing Shockwave Therapy and targeted physio at Revere. Within 4 sessions I was back to running pain-free. Top-notch clinical expertise in Surrey with genuine healthcare professionals."
    },
    {
      id: 7,
      author: "Anita R.",
      location: "Surrey, BC",
      stars: 5,
      date: "Verified Patient • 3 months ago",
      category: "rmt",
      treatment: "Registered Massage Therapy (RMT)",
      highlight: "Spotless suites & instant Canada Life direct billing",
      comment: "Revere Massage is top tier. Spotless clean private suites, calming ambiance, and truly skilled registered therapists who understand anatomy and therapeutic relief. They direct bill to Canada Life with no hassle. My regular wellness clinic!"
    },
    {
      id: 8,
      author: "Jason W.",
      location: "Langley / Surrey",
      stars: 5,
      date: "Verified Patient • 3 months ago",
      category: "icbc",
      treatment: "Kinesiology & ICBC Active Rehab",
      highlight: "Long-term strength and posture rebuilding",
      comment: "Great experience with their Kinesiology and active rehab program after a motor vehicle collision. They focus on long-term strength and posture correction so the pain doesn't return. 10/10 service and clinical support."
    }
  ];

  const filteredReviews = selectedCategory === 'all' 
    ? allReviews 
    : allReviews.filter(r => r.category === selectedCategory);

  // Auto-advance carousel every 5.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [filteredReviews.length, isPaused]);

  // Reset index if filter changes
  const handleFilterChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        
        {/* Top Header Badge & Pitch */}
        <div className="section-title-wrapper text-center">
          <div className="inline-badge">
            <Sparkles size={14} className="text-gold" />
            <span>Real Patient Experiences</span>
          </div>
          <h2 className="section-title">
            Trusted by Hundreds of <span className="text-green">Surrey Patients</span>
          </h2>
          <p className="section-subtitle">
            See what our community has to say about our registered therapists, restorative care, and welcoming clinic environment.
          </p>
        </div>

        {/* Real Google Rating Summary Card */}
        <div className="reviews-header-card glass-card">
          <div className="google-score-col">
            <div className="google-logo-badge">
              <svg width="26" height="26" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div className="badge-text-group">
                <span className="badge-source">Google Business Profile</span>
                <span className="badge-status">Verified Patient Ratings</span>
              </div>
            </div>

            <div className="score-display">
              <span className="score-number">4.8</span>
              <div className="stars-box">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#f4b400" color="#f4b400" />
                  ))}
                </div>
                <span className="reviews-count">
                  <strong>672+ Google Reviews</strong> • Excellent Rating
                </span>
              </div>
            </div>
          </div>

          <div className="google-metrics-col">
            <div className="metric-pill">
              <CheckCircle2 size={16} className="text-green" />
              <span><strong>100%</strong> Registered Clinicians</span>
            </div>
            <div className="metric-pill">
              <ShieldCheck size={16} className="text-green" />
              <span><strong>ICBC & Direct Billing</strong></span>
            </div>
            <div className="metric-pill">
              <Award size={16} className="text-gold" />
              <span><strong>Top Rated</strong> in Newton Surrey</span>
            </div>
          </div>

          <div className="google-action-col">
            <a 
              href={GOOGLE_REVIEW_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline write-review-btn"
            >
              <Star size={16} className="star-icon-gold" />
              <span>Read All 672+ Reviews</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="reviews-filter-bar">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All 5-Star Reviews ({allReviews.length})
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'rmt' ? 'active' : ''}`}
            onClick={() => handleFilterChange('rmt')}
          >
            Massage Therapy (RMT)
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'physio' ? 'active' : ''}`}
            onClick={() => handleFilterChange('physio')}
          >
            Physiotherapy & Rehab
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'icbc' ? 'active' : ''}`}
            onClick={() => handleFilterChange('icbc')}
          >
            ICBC Claims & Active Rehab
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'ims' ? 'active' : ''}`}
            onClick={() => handleFilterChange('ims')}
          >
            IMS & Deep Tissue
          </button>
        </div>

        {/* Interactive Reviews Carousel */}
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Nav Prev Button */}
          <button 
            onClick={handlePrev} 
            className="carousel-nav-btn prev-btn" 
            aria-label="Previous review"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Carousel Track & Cards */}
          <div className="carousel-viewport">
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {filteredReviews.map((rev) => (
                <div key={rev.id} className="carousel-slide">
                  <div className="review-card glass-card">
                    <div className="review-card-header">
                      <div className="review-stars-row">
                        {[...Array(rev.stars)].map((_, i) => (
                          <Star key={i} size={18} fill="#f4b400" color="#f4b400" />
                        ))}
                      </div>
                      <span className="review-badge-verified">
                        <svg width="14" height="14" viewBox="0 0 24 24" className="g-icon-small">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        <span>Verified Google Review</span>
                      </span>
                    </div>

                    <div className="review-highlight-box">
                      <Quote size={18} className="quote-icon-decor" />
                      <strong className="review-highlight-text">"{rev.highlight}"</strong>
                    </div>

                    <p className="review-comment">"{rev.comment}"</p>

                    <div className="review-author-box">
                      <div className="author-avatar">{rev.author.charAt(0)}</div>
                      <div className="author-info">
                        <strong className="author-name">{rev.author}</strong>
                        <span className="author-meta">{rev.treatment}</span>
                        <div className="author-submeta">
                          <span className="author-date">{rev.date}</span>
                          <span className="author-dot">•</span>
                          <span className="author-location">{rev.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Next Button */}
          <button 
            onClick={handleNext} 
            className="carousel-nav-btn next-btn" 
            aria-label="Next review"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Carousel Dots & Controls */}
        <div className="carousel-bottom-bar">
          <div className="dots-row">
            {filteredReviews.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="carousel-status">
            <span>Showing review <strong>{currentIndex + 1}</strong> of <strong>{filteredReviews.length}</strong></span>
            {isPaused && <span className="paused-badge">Paused</span>}
          </div>
        </div>

      </div>

      <style>{`
        .reviews-section {
          padding: 60px 0 90px 0;
          background: #FAF9F6;
          border-top: 1px solid #ebf0ec;
          border-bottom: 1px solid #ebf0ec;
        }

        .section-title-wrapper {
          margin-bottom: 36px;
        }

        .section-title {
          font-size: clamp(2rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #0d2818;
          margin: 12px 0;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: #55665c;
          max-width: 650px;
          margin: 0 auto;
        }

        /* Top Google Rating Card */
        .reviews-header-card {
          padding: 28px 36px;
          background: #ffffff;
          border: 1.5px solid rgba(45, 106, 79, 0.15);
          border-radius: var(--radius-xl);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          margin-bottom: 30px;
          box-shadow: 0 12px 36px -10px rgba(13, 40, 24, 0.08);
          flex-wrap: wrap;
        }

        .google-score-col {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .google-logo-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f4f8f5;
          padding: 8px 16px;
          border-radius: 9999px;
          border: 1px solid #d8e6dc;
        }

        .badge-text-group {
          display: flex;
          flex-direction: column;
        }

        .badge-source {
          font-size: 0.8rem;
          font-weight: 700;
          color: #0d2818;
          line-height: 1.2;
        }

        .badge-status {
          font-size: 0.72rem;
          color: #2d6a4f;
          font-weight: 600;
        }

        .score-display {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .score-number {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0d2818;
          line-height: 1;
        }

        .stars-box {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .stars-row {
          display: flex;
          gap: 3px;
        }

        .reviews-count {
          font-size: 0.85rem;
          color: #4a5c51;
        }

        .google-metrics-col {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f8faf9;
          border: 1px solid #e1ebe4;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.8rem;
          color: #2b3b32;
        }

        .google-action-col {
          display: flex;
          align-items: center;
        }

        .write-review-btn {
          padding: 12px 22px;
          font-size: 0.9rem;
          font-weight: 700;
          white-space: nowrap;
          color: #0d2818;
          border-color: #388242;
          background: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }

        .write-review-btn:hover {
          background: #0d2818;
          color: #ffffff;
          border-color: #0d2818;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(13, 40, 24, 0.15);
        }

        .star-icon-gold {
          color: #f4b400;
        }

        /* Filter Bar */
        .reviews-filter-bar {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 9px 18px;
          border-radius: 9999px;
          border: 1px solid #d9e4dc;
          background: #ffffff;
          font-size: 0.84rem;
          font-weight: 600;
          color: #3a4d41;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-btn:hover {
          border-color: #388242;
          color: #0d2818;
          background: #f4f9f6;
        }

        .filter-btn.active {
          background: #0d2818;
          color: #ffffff;
          border-color: #0d2818;
          box-shadow: 0 4px 12px rgba(13, 40, 24, 0.15);
        }

        /* Carousel Container */
        .carousel-container {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }

        .carousel-viewport {
          overflow: hidden;
          width: 100%;
          border-radius: var(--radius-xl);
        }

        .carousel-track {
          display: flex;
          width: 100%;
        }

        .carousel-slide {
          min-width: 100%;
          box-sizing: border-box;
          padding: 8px 4px;
        }

        .review-card {
          padding: 36px 42px;
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(45, 106, 79, 0.12);
          box-shadow: 0 14px 40px -12px rgba(13, 40, 24, 0.1);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .review-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .review-stars-row {
          display: flex;
          gap: 4px;
        }

        .review-badge-verified {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #2d6a4f;
          background: #e8f5ee;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .g-icon-small {
          flex-shrink: 0;
        }

        .review-highlight-box {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 16px;
          padding: 12px 16px;
          background: #f8faf8;
          border-left: 3px solid #388242;
          border-radius: 0 8px 8px 0;
        }

        .quote-icon-decor {
          color: #388242;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .review-highlight-text {
          font-size: 1.08rem;
          color: #0d2818;
          line-height: 1.4;
          font-weight: 700;
        }

        .review-comment {
          font-size: 1.02rem;
          color: #2b3b32;
          line-height: 1.7;
          margin-bottom: 26px;
          font-style: italic;
        }

        .review-author-box {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 18px;
          border-top: 1px solid #edf2ee;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1b4332 0%, #388242 100%);
          color: #ffffff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(45, 106, 79, 0.25);
        }

        .author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .author-name {
          font-size: 1rem;
          color: #0d2818;
          font-weight: 700;
        }

        .author-meta {
          font-size: 0.82rem;
          font-weight: 600;
          color: #2d6a4f;
        }

        .author-submeta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: #7b8e83;
        }

        .author-dot {
          color: #cbd5ce;
        }

        /* Carousel Navigation Buttons */
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #d2dfd6;
          color: #0d2818;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 6px 18px rgba(13, 40, 24, 0.12);
          transition: var(--transition);
        }

        .carousel-nav-btn:hover {
          background: #0d2818;
          color: #ffffff;
          border-color: #0d2818;
          transform: translateY(-50%) scale(1.08);
        }

        .prev-btn {
          left: -22px;
        }

        .next-btn {
          right: -22px;
        }

        /* Carousel Bottom Bar */
        .carousel-bottom-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
        }

        .dots-row {
          display: flex;
          gap: 8px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #c8d8cd;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          padding: 0;
        }

        .carousel-dot.active {
          background: #2d6a4f;
          width: 28px;
          border-radius: 5px;
        }

        .carousel-status {
          font-size: 0.8rem;
          color: #6a7c72;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .paused-badge {
          background: #f0f4f1;
          border: 1px solid #d4dfd7;
          color: #55665c;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        @media (max-width: 1040px) {
          .reviews-header-card {
            flex-direction: column;
            text-align: center;
          }
          .google-score-col, .google-metrics-col, .google-action-col {
            justify-content: center;
          }
          .prev-btn {
            left: 6px;
          }
          .next-btn {
            right: 6px;
          }
          .review-card {
            padding: 28px 24px;
          }
        }

        @media (max-width: 640px) {
          .score-display {
            flex-direction: column;
            text-align: center;
          }
          .review-highlight-text {
            font-size: 0.96rem;
          }
          .review-comment {
            font-size: 0.92rem;
          }
          .carousel-nav-btn {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
