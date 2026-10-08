import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  ShieldCheck,
  Bot,
  ExternalLink,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { submitInquiry } from '../lib/supabase';
import { getClinicSettings, getWhatsAppUrl } from '../lib/settings';

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(getClinicSettings());
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 Welcome to Revere Massage & Wellness in Surrey. You can message our reception team directly on WhatsApp or ask any questions below!",
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [contactMode, setContactMode] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phoneOrEmail: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const messagesEndRef = useRef(null);

  // Listen for dynamic settings changes from /admin
  useEffect(() => {
    const handleSettingsUpdate = (e) => {
      if (e.detail) {
        setSettings(e.detail);
      } else {
        setSettings(getClinicSettings());
      }
    };
    window.addEventListener('revere-settings-updated', handleSettingsUpdate);
    return () => window.removeEventListener('revere-settings-updated', handleSettingsUpdate);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, contactMode]);

  const whatsappUrl = getWhatsAppUrl(settings.whatsappNumber, settings.whatsappGreeting);

  const handleQuickChip = (action) => {
    if (action === 'whatsapp') {
      window.open(whatsappUrl, '_blank');
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'Chat on WhatsApp' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "Opening WhatsApp chat with our clinic reception! If you don't have WhatsApp, you can also leave your contact info below for a phone or email callback.",
          actionUrl: whatsappUrl,
          actionLabel: 'Open WhatsApp Chat'
        }
      ]);
    } else if (action === 'book') {
      window.open(settings.janeAppUrl, '_blank');
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'I want to book an appointment' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "Opening our secure online booking portal! You can choose your therapist, treatment duration, and confirm your time instantly.",
          actionUrl: settings.janeAppUrl,
          actionLabel: 'Go to Online Booking'
        }
      ]);
    } else if (action === 'icbc') {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'How do ICBC claims work?' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "You are pre-approved for immediate ICBC care (RMT and Physiotherapy) within the first 12 weeks of your motor vehicle accident! No doctor referral required. We bill ICBC directly so you pay $0 upfront."
        }
      ]);
    } else if (action === 'parking') {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'Where can I park?' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "We provide free reserved clinic parking in stalls #36, #37, and #38 in the underground parkade at Suite 210 - 7110 120 St, Surrey. If the gate is down on Sundays or after 6 PM, call (604) 503-0855 to buzz in!"
        }
      ]);
    } else if (action === 'call') {
      window.location.href = `tel:${settings.receptionPhone.replace(/\D/g, '')}`;
    } else if (action === 'message') {
      setContactMode(true);
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'I would like to leave a note / request callback' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "Please enter your name and phone number or email below. Our reception team will reach out to you promptly!"
        }
      ]);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    setInputText('');

    setMessages(prev => [
      ...prev,
      { id: Date.now(), sender: 'user', text: userMsg }
    ]);

    // Bot response logic
    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let replyText = "Thank you for reaching out! Would you like an instant reply on WhatsApp, or would you prefer our reception team to call you back?";

      if (lower.includes('price') || lower.includes('cost') || lower.includes('fee')) {
        replyText = "RMT sessions start from $138 (60 mins, taxes included). Physiotherapy initial visits are $135. We also offer direct billing to ICBC and 30+ extended health providers.";
      } else if (lower.includes('hour') || lower.includes('open') || lower.includes('time')) {
        replyText = "We are open 7 days a week from 6:30 AM to 8:00 PM to accommodate your busy schedule!";
      } else if (lower.includes('book') || lower.includes('appointment')) {
        replyText = "You can schedule your appointment in under 60 seconds with instant confirmation on JaneApp, or chat directly with our reception on WhatsApp.";
      }

      setMessages(prev => [
        ...prev,
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: replyText,
          isFollowUp: true
        }
      ]);
    }, 600);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.phoneOrEmail) return;

    setIsSubmitting(true);
    try {
      await submitInquiry({
        fullName: contactData.name,
        email: contactData.phoneOrEmail.includes('@') ? contactData.phoneOrEmail : 'phone_contact@reverewellness.ca',
        phone: contactData.phoneOrEmail,
        subject: 'Chat Widget Inquiry (Non-WhatsApp)',
        message: contactData.note || 'Callback request via website chat'
      });

      setSubmitted(true);
      setMessages(prev => [
        ...prev,
        { 
          id: Date.now(), 
          sender: 'bot', 
          text: `Thank you, ${contactData.name}! Your message has been received by our reception team. We will contact you at ${contactData.phoneOrEmail} shortly.` 
        }
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setContactMode(false);
    }
  };

  return (
    <div className="chatbot-widget-root">
      {/* Floating Launcher Trigger */}
      {!isOpen && (
        <button 
          className="chatbot-launcher-btn" 
          onClick={() => setIsOpen(true)}
          aria-label="Open Revere Wellness Chat Assistant"
        >
          <div className="launcher-pulse"></div>
          <div className="launcher-icon-box">
            {settings.enableWhatsApp ? (
              <MessageCircle size={24} className="launcher-icon" />
            ) : (
              <MessageSquare size={24} className="launcher-icon" />
            )}
          </div>
          <div className="launcher-label">
            <span className="label-title">Questions?</span>
            <span className="label-sub">{settings.enableWhatsApp ? 'Chat on WhatsApp' : 'Chat with Us'}</span>
          </div>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="chatbot-dialog glass-card">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-brand">
              <div className="bot-avatar">
                <Bot size={20} />
              </div>
              <div className="bot-info">
                <strong>Revere Care Support</strong>
                <span className="bot-status-online">
                  <span className="online-dot"></span> Open 7 Days: 6:30 AM – 8:00 PM
                </span>
              </div>
            </div>
            <button 
              className="chatbot-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
            >
              <X size={20} />
            </button>
          </div>

          {/* Dedicated WhatsApp Fast Action Bar */}
          {settings.enableWhatsApp && (
            <div className="whatsapp-banner-cta">
              <div className="wa-banner-left">
                <div className="wa-badge-icon">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <strong>Chat with Reception on WhatsApp</strong>
                  <p>Instant answers from our clinic staff</p>
                </div>
              </div>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-wa-action"
                title="Open WhatsApp chat with reception"
              >
                <span>Chat</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}

          {/* Messages Body */}
          <div className="chatbot-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble-row ${msg.sender}`}>
                <div className={`chat-bubble ${msg.sender}`}>
                  <p>{msg.text}</p>
                  {msg.actionUrl && (
                    <a 
                      href={msg.actionUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bubble-action-btn"
                    >
                      <Calendar size={14} />
                      <span>{msg.actionLabel}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {msg.isFollowUp && !contactMode && (
                    <div className="bubble-actions-group">
                      {settings.enableWhatsApp && (
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bubble-action-btn whatsapp-highlight"
                        >
                          <MessageCircle size={14} />
                          <span>Reply on WhatsApp</span>
                        </a>
                      )}
                      <button 
                        className="bubble-action-btn secondary"
                        onClick={() => setContactMode(true)}
                      >
                        <span>Request Phone Callback</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* In-chat contact inquiry form for non-WhatsApp users */}
            {contactMode && !submitted && (
              <form onSubmit={handleContactSubmit} className="chat-contact-form">
                <div className="form-header-row">
                  <span className="form-header-text">Leave a Callback Request:</span>
                  <button type="button" onClick={() => setContactMode(false)} className="close-form-mini">
                    <X size={14} />
                  </button>
                </div>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={contactData.name}
                  onChange={(e) => setContactData(p => ({ ...p, name: e.target.value }))}
                />
                <input
                  type="text"
                  required
                  placeholder="Phone Number or Email *"
                  value={contactData.phoneOrEmail}
                  onChange={(e) => setContactData(p => ({ ...p, phoneOrEmail: e.target.value }))}
                />
                <textarea
                  rows="2"
                  placeholder="Your question or preferred callback time (Optional)"
                  value={contactData.note}
                  onChange={(e) => setContactData(p => ({ ...p, note: e.target.value }))}
                ></textarea>
                <button type="submit" className="form-submit-mini" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit to Reception'}
                </button>
              </form>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="chatbot-chips-bar">
            {settings.enableWhatsApp && (
              <button className="chip-btn wa-chip" onClick={() => handleQuickChip('whatsapp')}>
                <MessageCircle size={13} /> WhatsApp
              </button>
            )}
            <button className="chip-btn" onClick={() => handleQuickChip('book')}>
              <Calendar size={13} /> Book Online
            </button>
            <button className="chip-btn" onClick={() => handleQuickChip('message')}>
              ✉️ Non-WhatsApp Note
            </button>
            <button className="chip-btn" onClick={() => handleQuickChip('icbc')}>
              <ShieldCheck size={13} /> ICBC Claims
            </button>
            <button className="chip-btn" onClick={() => handleQuickChip('parking')}>
              🚗 Free Parking
            </button>
            <button className="chip-btn" onClick={() => handleQuickChip('call')}>
              <Phone size={13} /> Call Reception
            </button>
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSendMessage} className="chatbot-input-bar">
            <input
              type="text"
              placeholder="Ask a question or type message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" aria-label="Send message" disabled={!inputText.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .chatbot-widget-root {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 1500;
          font-family: var(--font-body);
        }

        /* Launcher Button */
        .chatbot-launcher-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, var(--primary-950) 0%, var(--primary-900) 100%);
          color: #ffffff;
          padding: 10px 20px 10px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(216, 178, 141, 0.35);
          box-shadow: 0 12px 32px rgba(51, 50, 19, 0.35);
          cursor: pointer;
          transition: var(--transition);
          position: relative;
        }

        .chatbot-launcher-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 38px rgba(51, 50, 19, 0.45);
          background: linear-gradient(135deg, var(--primary-900) 0%, var(--primary-800) 100%);
        }

        .launcher-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .launcher-label {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .label-title {
          font-size: 0.74rem;
          color: #d8b28d;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .label-sub {
          font-size: 0.96rem;
          font-weight: 700;
          color: #ffffff;
        }

        .launcher-pulse {
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          background: #25d366;
          opacity: 0.35;
          z-index: -1;
          animation: pulse-ring 2.5s infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.45; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        /* Chat Dialog */
        .chatbot-dialog {
          width: 400px;
          max-width: calc(100vw - 36px);
          height: 560px;
          max-height: calc(100vh - 120px);
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(127, 125, 49, 0.25);
          box-shadow: 0 25px 60px -10px rgba(51, 50, 19, 0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .chatbot-header {
          padding: 16px 20px;
          background: linear-gradient(135deg, var(--primary-950) 0%, var(--primary-900) 100%);
          color: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chatbot-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bot-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--primary-700);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f8efe4;
        }

        .bot-info strong {
          display: block;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .bot-status-online {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          color: var(--primary-200);
        }

        .online-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
        }

        .chatbot-close-btn {
          color: var(--primary-200);
          padding: 6px;
          border-radius: 50%;
          transition: var(--transition);
        }
        .chatbot-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
        }

        /* WhatsApp Top Action Bar */
        .whatsapp-banner-cta {
          background: #e7f7ed;
          border-bottom: 1px solid #bbf7d0;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .wa-banner-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .wa-badge-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wa-banner-left strong {
          display: block;
          font-size: 0.84rem;
          color: #065f46;
          line-height: 1.25;
        }
        .wa-banner-left p {
          font-size: 0.72rem;
          color: #047857;
          margin: 1px 0 0 0;
        }
        .btn-wa-action {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 14px;
          background: #25d366;
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }
        .btn-wa-action:hover {
          background: #1eb956;
          transform: translateY(-1px);
        }

        /* Chat Body */
        .chatbot-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: #fdfaf6;
        }

        .chat-bubble-row {
          display: flex;
          width: 100%;
        }
        .chat-bubble-row.bot { justify-content: flex-start; }
        .chat-bubble-row.user { justify-content: flex-end; }

        .chat-bubble {
          max-width: 86%;
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .chat-bubble.bot {
          background: #ffffff;
          color: var(--primary-950);
          border: 1px solid var(--primary-200);
          border-bottom-left-radius: 4px;
          box-shadow: 0 4px 12px rgba(51, 50, 19, 0.04);
        }

        .chat-bubble.user {
          background: var(--primary-900);
          color: #f8efe4;
          border-bottom-right-radius: 4px;
        }

        .bubble-actions-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 10px;
        }

        .bubble-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          background: var(--primary-700);
          color: #f8efe4;
          transition: var(--transition);
          justify-content: center;
        }
        .bubble-action-btn:hover {
          background: var(--primary-800);
        }
        .bubble-action-btn.whatsapp-highlight {
          background: #25d366;
          color: #ffffff;
        }
        .bubble-action-btn.whatsapp-highlight:hover {
          background: #1eb956;
        }
        .bubble-action-btn.secondary {
          background: var(--primary-100);
          color: var(--primary-950);
          border: 1px solid var(--primary-200);
        }

        .chat-contact-form {
          background: #ffffff;
          border: 1px solid var(--primary-300);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 6px 16px rgba(51, 50, 19, 0.08);
        }
        .form-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .form-header-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-900);
        }
        .close-form-mini {
          color: var(--neutral-400);
          cursor: pointer;
        }

        .chat-contact-form input,
        .chat-contact-form textarea {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid var(--primary-200);
          border-radius: 6px;
          font-size: 0.84rem;
          font-family: inherit;
        }
        .chat-contact-form input:focus,
        .chat-contact-form textarea:focus {
          outline: none;
          border-color: var(--primary-600);
        }

        .form-submit-mini {
          background: var(--primary-900);
          color: #f8efe4;
          padding: 9px;
          border-radius: 6px;
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }
        .form-submit-mini:hover {
          background: var(--primary-700);
        }

        /* Chips Bar */
        .chatbot-chips-bar {
          display: flex;
          gap: 6px;
          padding: 10px 14px;
          background: #ffffff;
          border-top: 1px solid var(--primary-100);
          overflow-x: auto;
          white-space: nowrap;
        }

        .chip-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--primary-950);
          background: var(--primary-50);
          border: 1px solid var(--primary-200);
          cursor: pointer;
          transition: var(--transition);
          flex-shrink: 0;
        }
        .chip-btn:hover {
          background: var(--primary-900);
          color: #f8efe4;
          border-color: var(--primary-900);
        }
        .chip-btn.wa-chip {
          background: #e7f7ed;
          color: #047857;
          border-color: #a7f3d0;
          font-weight: 700;
        }
        .chip-btn.wa-chip:hover {
          background: #25d366;
          color: #ffffff;
          border-color: #25d366;
        }

        /* Input Bar */
        .chatbot-input-bar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: #ffffff;
          border-top: 1px solid var(--primary-100);
          gap: 10px;
        }

        .chatbot-input-bar input {
          flex: 1;
          padding: 10px 14px;
          border: 1.5px solid var(--primary-200);
          border-radius: 9999px;
          font-size: 0.88rem;
          outline: none;
          font-family: inherit;
        }

        .chatbot-input-bar input:focus {
          border-color: var(--primary-400);
        }

        .chatbot-input-bar button {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--primary-700);
          color: #f8efe4;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .chatbot-input-bar button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .chatbot-input-bar button:not(:disabled):hover {
          background: var(--primary-900);
        }

        @media (max-width: 480px) {
          .chatbot-widget-root {
            bottom: 18px;
            right: 18px;
          }
          .chatbot-dialog {
            width: calc(100vw - 32px);
            height: calc(100vh - 90px);
          }
        }
      `}</style>
    </div>
  );
}
