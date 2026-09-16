import React from 'react';
import { 
  MapPin, 
  Car, 
  Clock, 
  Phone, 
  Navigation, 
  AlertTriangle, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function LocationParking() {
  const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=7110+120+St+Suite+210+Surrey+BC+V3W+3M8";

  return (
    <section id="location" className="location-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MapPin size={14} /> Location & Complimentary Parking
          </div>
          <h2 className="section-title">Conveniently Located in Newton, Surrey</h2>
          <p className="section-desc">
            Find us easily on 120th Street across from Krispy Kreme and Walmart, with dedicated free reserved basement parking stalls.
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Address, Hours, Parking Guide */}
          <div className="location-details">
            {/* Address Card */}
            <div className="info-box glass-card">
              <div className="box-header">
                <MapPin className="box-icon text-primary" size={24} />
                <div>
                  <h3 className="box-title">Clinic Address</h3>
                  <p className="address-line">Suite 210 - 7110 120 Street</p>
                  <p className="address-sub">Surrey, BC V3W 3M8 (Canada)</p>
                  <span className="landmark-badge">Directly opposite Krispy Kreme & Walmart</span>
                </div>
              </div>
              <div className="box-action">
                <a 
                  href={GOOGLE_MAPS_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline map-btn"
                >
                  <Navigation size={16} />
                  <span>Get Driving Directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Parking Instructions Card */}
            <div className="info-box glass-card parking-card">
              <div className="box-header">
                <Car className="box-icon text-gold" size={24} />
                <div>
                  <h3 className="box-title">Free Reserved Parking (Stalls 36, 37, 38)</h3>
                  <p className="parking-desc">
                    Complimentary client parking is located in the <strong>underground basement parkade</strong>.
                  </p>
                </div>
              </div>

              <div className="parking-rules-list">
                <div className="rule-item">
                  <CheckCircle2 size={16} className="rule-check" />
                  <span>Please only park in stalls labeled <strong>#36, #37, or #38</strong> reserved for Revere Wellness clients.</span>
                </div>
                <div className="rule-item">
                  <CheckCircle2 size={16} className="rule-check" />
                  <span>Take the elevator or stairs directly up to the <strong>2nd Floor (Suite 210)</strong>.</span>
                </div>
              </div>

              {/* Sunday / After-Hours Notice */}
              <div className="gate-notice-box">
                <AlertTriangle size={18} className="gate-icon" />
                <div>
                  <strong>Sunday & Evening Gate Instructions:</strong>
                  <p>
                    If the basement gate is closed (especially on Sundays or weekday evenings after 6:00 PM), 
                    simply call our reception line at <a href="tel:6045030855" className="phone-link">(604) 503-0855</a> or <a href="tel:2363127451" className="phone-link">(236) 312-7451</a> and our front desk will promptly buzz open the gate for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Clinic Operating Hours */}
            <div className="info-box glass-card">
              <div className="box-header">
                <Clock className="box-icon text-primary" size={24} />
                <div>
                  <h3 className="box-title">Clinic Operating Hours</h3>
                  <p className="hours-subtitle">Open 7 Days a Week for your busy schedule</p>
                </div>
              </div>

              <div className="hours-schedule">
                <div className="hours-row highlight-day">
                  <span className="day-name">Monday – Friday</span>
                  <span className="day-time">6:30 AM – 8:00 PM</span>
                </div>
                <div className="hours-row highlight-day">
                  <span className="day-name">Saturday</span>
                  <span className="day-time">6:30 AM – 8:00 PM</span>
                </div>
                <div className="hours-row highlight-day">
                  <span className="day-name">Sunday</span>
                  <span className="day-time">6:30 AM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="location-map-wrapper glass-card">
            <div className="map-embed-container">
              <iframe
                title="Revere Massage & Wellness Centre Surrey Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.4312683050125!2d-122.8931165!3d49.1315998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d95e0c663e27%3A0xc09ca9c228830113!2s7110%20120%20St%20%23210%2C%20Surrey%2C%20BC%20V3W%203M8!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '480px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="map-footer-banner">
              <div className="map-footer-info">
                <span className="footer-pin"><MapPin size={16} /> Suite 210 (2nd Floor)</span>
                <span className="footer-access">Elevator Accessible & Wheelchair Friendly</span>
              </div>
              <a 
                href={GOOGLE_MAPS_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-section {
          background: #ffffff;
        }

        .location-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 36px;
          align-items: stretch;
        }

        .location-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-box {
          padding: 24px 28px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--neutral-300);
          background: var(--neutral-50);
        }

        .box-header {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .box-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .box-title {
          font-size: 1.2rem;
          color: var(--primary-900);
          margin-bottom: 4px;
        }

        .address-line {
          font-size: 1rem;
          font-weight: 700;
          color: var(--neutral-900);
        }

        .address-sub {
          font-size: 0.9rem;
          color: var(--neutral-600);
          margin-bottom: 8px;
        }

        .landmark-badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 600;
          background: var(--gold-300);
          color: var(--gold-700);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .box-action {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--neutral-200);
        }

        .map-btn {
          font-size: 0.88rem;
          padding: 10px 18px;
        }

        .parking-desc {
          font-size: 0.92rem;
          color: var(--neutral-700);
          margin-bottom: 12px;
        }

        .parking-rules-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .rule-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--neutral-700);
        }

        .rule-check {
          color: var(--primary-600);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .gate-notice-box {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #fff8e6;
          border: 1px solid #ffe199;
          padding: 14px 16px;
          border-radius: var(--radius-md);
        }

        .gate-icon {
          color: var(--gold-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .gate-notice-box strong {
          display: block;
          font-size: 0.86rem;
          color: #7a5800;
          margin-bottom: 2px;
        }

        .gate-notice-box p {
          font-size: 0.82rem;
          color: #614600;
          line-height: 1.45;
          margin: 0;
        }

        .phone-link {
          font-weight: 700;
          text-decoration: underline;
        }

        .hours-subtitle {
          font-size: 0.86rem;
          color: var(--neutral-600);
        }

        .hours-schedule {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 10px;
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          background: #ffffff;
          border: 1px solid var(--neutral-200);
        }

        .highlight-day {
          border-left: 3px solid var(--primary-600);
        }

        .day-name {
          font-weight: 600;
          color: var(--primary-900);
        }

        .day-time {
          font-weight: 700;
          color: var(--primary-700);
        }

        /* Map Embed */
        .location-map-wrapper {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--neutral-300);
          min-height: 520px;
        }

        .map-embed-container {
          flex: 1;
          width: 100%;
          min-height: 440px;
        }

        .map-footer-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: #ffffff;
          border-top: 1px solid var(--neutral-200);
        }

        .map-footer-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-pin {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary-900);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-access {
          font-size: 0.78rem;
          color: var(--neutral-600);
        }

        .btn-sm {
          padding: 8px 16px;
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
          .location-map-wrapper {
            min-height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
