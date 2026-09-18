import React from 'react';
import { Star, ShieldCheck, ExternalLink, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export default function GoogleReviews() {
  const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=Revere+Massage+and+Wellness+Centre+Surrey";

  const reviews = [
    {
      author: "Harpreet S.",
      stars: 5,
      date: "Verified Patient • 2 weeks ago",
      treatment: "Registered Massage Therapy (RMT)",
      comment: "Best massage clinic in Surrey! The RMT was extremely knowledgeable and resolved my chronic lower back stiffness after just two sessions. The clinic is pristine, modern, and direct billing to Pacific Blue Cross was effortless."
    },
    {
      author: "Jessica M.",
      stars: 5,
      date: "Verified Patient • 1 month ago",
      treatment: "ICBC Physiotherapy & Active Rehab",
      comment: "Following a car accident, Revere took care of all my ICBC paperwork seamlessly. The physiotherapy care and exercise recovery plan got me back to work pain-free. Staff are so welcoming and the free basement parking is super convenient!"
    },
    {
      author: "David K.",
      stars: 5,
      date: "Verified Patient • 3 weeks ago",
      treatment: "Deep Tissue & IMS Needling",
      comment: "Incredible clinical care. The therapist explained everything thoroughly and the IMS treatment released knots in my shoulders that had bothered me for years. Open 7 days a week makes booking around work so easy."
    }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        {/* Top Summary Banner */}
        <div className="reviews-header-card glass-card">
          <div className="google-score-col">
            <div className="google-logo-badge">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Google Verified Rating</span>
            </div>
            <div className="score-display">
              <span className="score-number">5.0</span>
              <div className="stars-box">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f4b400" color="#f4b400" />
                  ))}
                </div>
                <span className="reviews-count">Based on 100% 5-Star Patient Reviews</span>
              </div>
            </div>
          </div>

          <div className="google-action-col">
            <p className="trust-pitch">
              Experience the dedicated clinical difference at Newton Surrey's premier restorative wellness clinic.
            </p>
            <a 
              href={GOOGLE_REVIEW_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline write-review-btn"
            >
              <Star size={16} className="star-icon-gold" />
              <span>Review Us on Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* 3 Featured 5-Star Testimonials */}
        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="review-card glass-card">
              <div className="review-card-top">
                <div className="review-stars-row">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={15} fill="#f4b400" color="#f4b400" />
                  ))}
                </div>
                <span className="review-badge-verified">
                  <CheckCircle2 size={13} /> Verified
                </span>
              </div>

              <p className="review-comment">"{rev.comment}"</p>

              <div className="review-author-box">
                <div className="author-avatar">{rev.author.charAt(0)}</div>
                <div>
                  <strong className="author-name">{rev.author}</strong>
                  <span className="author-meta">{rev.treatment}</span>
                  <span className="author-date">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-section {
          padding: 40px 0 80px 0;
          background: #FAF9F6;
        }

        .reviews-header-card {
          padding: 28px 36px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: var(--radius-xl);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px -10px rgba(13, 40, 24, 0.06);
        }

        .google-score-col {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .google-logo-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #2b3b32;
          background: #f7faf8;
          padding: 8px 14px;
          border-radius: 9999px;
          border: 1px solid #e2ebe5;
        }

        .score-display {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .score-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0d2818;
          line-height: 1;
        }

        .stars-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stars-row {
          display: flex;
          gap: 2px;
        }

        .reviews-count {
          font-size: 0.78rem;
          color: #55665c;
          font-weight: 600;
        }

        .google-action-col {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .trust-pitch {
          font-size: 0.9rem;
          color: #55665c;
          max-width: 320px;
          line-height: 1.45;
          margin: 0;
        }

        .write-review-btn {
          padding: 10px 20px;
          font-size: 0.88rem;
          font-weight: 700;
          white-space: nowrap;
          color: #0d2818;
          border-color: #d2dfd6;
        }
        .write-review-btn:hover {
          background: #0d2818;
          color: #ffffff;
          border-color: #0d2818;
        }
        .star-icon-gold {
          color: #f4b400;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .review-card {
          padding: 28px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.04);
          transition: var(--transition);
        }

        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(13, 40, 24, 0.1);
          border-color: #74c69d;
        }

        .review-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .review-stars-row {
          display: flex;
          gap: 2px;
        }

        .review-badge-verified {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #2d6a4f;
          background: #e8f5ee;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .review-comment {
          font-size: 0.92rem;
          color: #2b3b32;
          line-height: 1.6;
          margin-bottom: 20px;
          font-style: italic;
        }

        .review-author-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid #edf2ee;
        }

        .author-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2d6a4f 0%, #52b788 100%);
          color: #ffffff;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        .author-name {
          display: block;
          font-size: 0.92rem;
          color: #0d2818;
        }

        .author-meta {
          display: block;
          font-size: 0.76rem;
          font-weight: 600;
          color: #388242;
        }

        .author-date {
          display: block;
          font-size: 0.72rem;
          color: #88998f;
        }

        @media (max-width: 1040px) {
          .reviews-header-card {
            flex-direction: column;
            text-align: center;
          }
          .google-score-col {
            flex-direction: column;
          }
          .google-action-col {
            flex-direction: column;
          }
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
