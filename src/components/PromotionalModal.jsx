import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Calendar, 
  Phone, 
  ExternalLink, 
  Tag, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { getClinicSettings, getPromoModalStatus } from '../lib/settings';

export default function PromotionalModal({ forceOpen = false, previewData = null, onClose = null }) {
  const [isOpen, setIsOpen] = useState(forceOpen);
  const [settings, setSettings] = useState(getClinicSettings());

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }

    const checkAndTrigger = () => {
      const current = getClinicSettings();
      setSettings(current);

      const promo = current.promoModal;
      const { active } = getPromoModalStatus(promo);

      if (!active) {
        setIsOpen(false);
        return;
      }

      // Check if user has already dismissed this promotion in the current session
      const dismissKey = `revere_promo_dismissed_${promo.title || 'active'}`;
      const dismissed = sessionStorage.getItem(dismissKey);
      if (dismissed === 'true' && !forceOpen) {
        setIsOpen(false);
        return;
      }

      // Set timeout delay
      const delay = (promo.delaySeconds || 3) * 1000;
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);

      return timer;
    };

    const timer = checkAndTrigger();

    const handleUpdate = (e) => {
      if (e.detail) {
        setSettings(e.detail);
      }
      checkAndTrigger();
    };

    window.addEventListener('revere-settings-updated', handleUpdate);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('revere-settings-updated', handleUpdate);
    };
  }, [forceOpen]);

  // Use preview data if provided (for Admin live preview)
  const promo = previewData || settings.promoModal;

  if (!isOpen || !promo) return null;

  const handleDismiss = () => {
    setIsOpen(false);
    if (!forceOpen) {
      const dismissKey = `revere_promo_dismissed_${promo.title || 'active'}`;
      sessionStorage.setItem(dismissKey, 'true');
    }
    if (onClose) onClose();
  };

  return (
    <div className="promo-modal-overlay" onClick={handleDismiss}>
      <div className="promo-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="promo-modal-close-btn" 
          onClick={handleDismiss}
          aria-label="Close promotional announcement"
        >
          <X size={20} />
        </button>

        {/* Media / Image Banner */}
        {promo.contentType === 'image' && promo.imageUrl && (
          <div className="promo-media-container">
            <a 
              href={promo.ctaUrl || 'https://reverewellness.janeapp.com/'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="promo-image-link"
            >
              <img 
                src={promo.imageUrl} 
                alt={promo.title || 'Special Promotion'} 
                className="promo-image-element"
              />
            </a>
          </div>
        )}

        {/* Animation Script / Custom HTML Embed */}
        {promo.contentType === 'script' && promo.animationScript && (
          <div 
            className="promo-animation-container"
            dangerouslySetInnerHTML={{ __html: promo.animationScript }}
          />
        )}

        {/* Modal Text & Action Content */}
        <div className="promo-body-content">
          {promo.badgeText && (
            <div className="promo-badge-tag">
              <Sparkles size={14} className="tag-sparkle" />
              <span>{promo.badgeText}</span>
            </div>
          )}

          <h2 className="promo-title">{promo.title || 'Special Clinic Promotion'}</h2>
          
          {promo.subtitle && (
            <div className="promo-subtitle">{promo.subtitle}</div>
          )}

          {promo.bodyText && (
            <p className="promo-description">{promo.bodyText}</p>
          )}

          {/* Action CTAs */}
          <div className="promo-actions-row">
            {promo.ctaUrl && (
              <a 
                href={promo.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-promo-primary"
                onClick={handleDismiss}
              >
                <Calendar size={17} />
                <span>{promo.ctaText || 'Claim Offer & Book Online'}</span>
                <ExternalLink size={13} />
              </a>
            )}

            {promo.secondaryCtaPhone && (
              <a 
                href={`tel:${promo.secondaryCtaPhone}`}
                className="btn-promo-secondary"
                onClick={handleDismiss}
              >
                <Phone size={16} />
                <span>{promo.secondaryCtaText || 'Call Reception'}</span>
              </a>
            )}
          </div>

          <div className="promo-footer-dismiss">
            <button className="dismiss-link" onClick={handleDismiss}>
              No thanks, continue browsing
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .promo-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 17, 12, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 4000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: promoFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes promoFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .promo-modal-card {
          width: 100%;
          max-width: 520px;
          background: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.5);
          border: 1.5px solid rgba(216, 178, 141, 0.45);
          position: relative;
          display: flex;
          flex-direction: column;
          animation: promoSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes promoSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .promo-modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(24, 28, 22, 0.7);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: var(--transition);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(6px);
        }
        .promo-modal-close-btn:hover {
          background: #000000;
          transform: scale(1.08);
        }

        /* Image Media Container */
        .promo-media-container {
          width: 100%;
          max-height: 280px;
          overflow: hidden;
          background: #181c16;
          position: relative;
        }
        .promo-image-link {
          display: block;
          width: 100%;
          height: 100%;
        }
        .promo-image-element {
          width: 100%;
          height: 100%;
          max-height: 280px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .promo-image-link:hover .promo-image-element {
          transform: scale(1.03);
        }

        /* Animation Script Container */
        .promo-animation-container {
          width: 100%;
          min-height: 180px;
          background: #181c16;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        /* Body Content */
        .promo-body-content {
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #ffffff;
        }

        .promo-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--primary-50);
          color: var(--primary-800);
          padding: 5px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(127, 125, 49, 0.25);
          margin-bottom: 12px;
        }
        .tag-sparkle {
          color: #c99d75;
        }

        .promo-title {
          font-size: 1.55rem;
          color: var(--primary-900);
          font-weight: 700;
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .promo-subtitle {
          font-size: 0.92rem;
          color: var(--primary-700);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .promo-description {
          font-size: 0.92rem;
          color: var(--neutral-700);
          line-height: 1.55;
          margin-bottom: 24px;
          max-width: 440px;
        }

        /* Actions */
        .promo-actions-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .btn-promo-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          font-size: 0.98rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary-700) 0%, var(--primary-900) 100%);
          color: #ffffff;
          box-shadow: 0 8px 22px rgba(51, 50, 19, 0.25);
          transition: var(--transition);
          border: 1px solid rgba(216, 178, 141, 0.4);
          width: 100%;
        }
        .btn-promo-primary:hover {
          background: linear-gradient(135deg, #c99d75 0%, #b58963 100%);
          transform: translateY(-1px);
          box-shadow: 0 10px 26px rgba(181, 137, 99, 0.4);
        }

        .btn-promo-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          background: var(--neutral-100);
          color: var(--primary-900);
          border: 1px solid var(--neutral-300);
          transition: var(--transition);
          width: 100%;
        }
        .btn-promo-secondary:hover {
          background: var(--neutral-200);
          border-color: var(--primary-600);
        }

        .promo-footer-dismiss {
          margin-top: 14px;
        }
        .dismiss-link {
          font-size: 0.8rem;
          color: var(--neutral-500);
          text-decoration: underline;
          background: none;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }
        .dismiss-link:hover {
          color: var(--neutral-800);
        }

        @media (max-width: 480px) {
          .promo-body-content {
            padding: 22px 18px;
          }
          .promo-title {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </div>
  );
}
