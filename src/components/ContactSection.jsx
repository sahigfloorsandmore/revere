import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { submitInquiry, isSupabaseConfigured } from '../lib/supabase';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    preferredContactMethod: 'email',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const result = await submitInquiry(formData);
      setStatus('success');
      setStatusMessage(
        result.mode === 'supabase' 
          ? 'Thank you! Your inquiry has been securely sent to our clinic reception team.' 
          : 'Thank you! Your message was received. Our team will get back to you promptly.'
      );
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        preferredContactMethod: 'email',
        message: ''
      });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setStatusMessage('Sorry, there was an issue sending your inquiry. Please call us directly at (604) 503-0855.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} /> Get in Touch
          </div>
          <h2 className="section-title">Contact Revere Wellness</h2>
          <p className="section-desc">
            Have questions about direct billing, custom care plans, or our treatments? Send us a message or contact our front desk directly.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Info & Booking Direct Banner */}
          <div className="contact-info-column">
            {/* Fast Online Booking Alert Box */}
            <div className="fast-booking-box glass-card">
              <div className="fast-box-header">
                <Calendar className="fast-icon text-gold" size={24} />
                <div>
                  <h4>Looking to Schedule an Appointment?</h4>
                  <p>Our online scheduling portal provides real-time calendar availability and instant confirmations.</p>
                </div>
              </div>
              <a 
                href={JANEAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold fast-book-btn"
              >
                <Calendar size={18} />
                <span>Book Online Instantly</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Clinic Contact Cards */}
            <div className="contact-cards-list">
              <div className="contact-card glass-card">
                <div className="card-icon-box">
                  <Phone size={20} className="text-primary" />
                </div>
                <div className="card-info">
                  <span className="info-label">Main Reception Phone</span>
                  <a href="tel:6045030855" className="info-val info-link">(604) 503-0855</a>
                  <span className="info-sub">Secondary / Direct: <a href="tel:2363127451" className="info-link">(236) 312-7451</a></span>
                </div>
              </div>

              <div className="contact-card glass-card">
                <div className="card-icon-box">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="card-info">
                  <span className="info-label">Email Reception</span>
                  <a href="mailto:info@reverewellness.ca" className="info-val info-link">info@reverewellness.ca</a>
                  <span className="info-sub">We reply within 24 business hours</span>
                </div>
              </div>

              <div className="contact-card glass-card">
                <div className="card-icon-box">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div className="card-info">
                  <span className="info-label">Clinic Location</span>
                  <p className="info-val">Suite 210 - 7110 120 Street</p>
                  <span className="info-sub">Surrey, BC V3W 3M8 (Opposite Walmart)</span>
                </div>
              </div>

              <div className="contact-card glass-card">
                <div className="card-icon-box">
                  <Clock size={20} className="text-primary" />
                </div>
                <div className="card-info">
                  <span className="info-label">Operating Schedule</span>
                  <p className="info-val">Mon–Sun: 6:30 AM – 8:00 PM</p>
                  <span className="info-sub">Open 7 days a week, including weekends</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form with Supabase Integration */}
          <div className="contact-form-column glass-card">
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtitle">Fill out the form below and our staff will respond promptly.</p>

            {status === 'success' && (
              <div className="status-banner success-banner">
                <CheckCircle2 size={20} />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="status-banner error-banner">
                <AlertCircle size={20} />
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (604) 555-0199"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject / Inquiry Type</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Question</option>
                    <option value="Direct Billing & Insurance">Direct Billing & Insurance</option>
                    <option value="ICBC Claim Inquiries">ICBC Claim Inquiries</option>
                    <option value="Physiotherapy / IMS Question">Physiotherapy / IMS Question</option>
                    <option value="Feedback / Other">Feedback / Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Contact Method</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="email"
                      checked={formData.preferredContactMethod === 'email'}
                      onChange={handleChange}
                    />
                    <span>Email</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="phone"
                      checked={formData.preferredContactMethod === 'phone'}
                      onChange={handleChange}
                    />
                    <span>Phone Call / Text</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can our clinical team help you today?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>

              <div className="form-privacy-note">
                <Sparkles size={14} className="text-gold" />
                <span>Your medical & contact information is held in strict compliance with BC PIPEDA privacy laws.</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: #f8faf9;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: flex-start;
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .fast-booking-box {
          padding: 28px;
          background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
          color: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .fast-box-header {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .fast-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .fast-box-header h4 {
          font-size: 1.18rem;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .fast-box-header p {
          font-size: 0.88rem;
          color: var(--primary-100);
          line-height: 1.5;
          margin: 0;
        }

        .fast-book-btn {
          width: 100%;
        }

        .contact-cards-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-card {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          background: #ffffff;
          border: 1px solid var(--neutral-300);
          border-radius: var(--radius-lg);
        }

        .card-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--primary-100);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-info {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--neutral-600);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-val {
          font-size: 1rem;
          font-weight: 700;
          color: var(--primary-900);
          margin: 2px 0;
        }

        .info-link {
          transition: var(--transition);
        }

        .info-link:hover {
          color: var(--primary-600);
        }

        .info-sub {
          font-size: 0.8rem;
          color: var(--neutral-600);
        }

        /* Form */
        .contact-form-column {
          padding: 36px 40px;
          background: #ffffff;
          border: 1px solid var(--neutral-300);
          border-radius: var(--radius-xl);
          box-shadow: 0 20px 40px -15px rgba(27, 67, 50, 0.08);
        }

        .form-title {
          font-size: 1.6rem;
          color: var(--primary-900);
          margin-bottom: 6px;
        }

        .form-subtitle {
          font-size: 0.94rem;
          color: var(--neutral-600);
          margin-bottom: 24px;
        }

        .status-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .success-banner {
          background: #eafaf1;
          color: #1e7e4e;
          border: 1px solid #a3e6c5;
        }

        .error-banner {
          background: #fdeeee;
          color: #c02828;
          border: 1px solid #f8b4b4;
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--neutral-800);
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--neutral-300);
          font-family: inherit;
          font-size: 0.92rem;
          color: var(--neutral-900);
          background: #ffffff;
          transition: var(--transition);
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-600);
          box-shadow: 0 0 0 3px rgba(82, 183, 136, 0.2);
        }

        .radio-group {
          display: flex;
          gap: 24px;
          padding: 6px 0;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--neutral-700);
          cursor: pointer;
        }

        .form-submit-btn {
          width: 100%;
          padding: 15px;
          font-size: 1rem;
          font-weight: 700;
          margin-top: 8px;
        }

        .form-privacy-note {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--neutral-600);
          margin-top: 8px;
          line-height: 1.4;
        }

        @media (max-width: 992px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
