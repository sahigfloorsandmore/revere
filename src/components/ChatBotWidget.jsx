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
  ExternalLink
} from 'lucide-react';
import { submitInquiry } from '../lib/supabase';

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 Welcome to Revere Massage & Wellness in Surrey. How can our clinical team help you today?",
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [contactMode, setContactMode] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phoneOrEmail: '', note: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const messagesEndRef = useRef(null);
  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleQuickChip = (action) => {
    if (action === 'book') {
      window.open(JANEAPP_URL, '_blank');
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'I want to book an appointment' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "Opening our online booking portal! You can select your practitioner (RMT, Physiotherapist, or Kinesiologist), choose 30, 45, or 60 min sessions, and confirm your time instantly.",
          actionUrl: JANEAPP_URL,
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
          text: "You are pre-approved for immediate ICBC care (RMT and Physiotherapy) within the first 12 weeks of your motor vehicle accident! Just provide your ICBC Claim Number and accident date when booking."
        }
      ]);
    } else if (action === 'parking') {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'Where can I park?' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "We have free reserved parking stalls (#36, #37, and #38) in the underground basement parkade at Suite 210 - 7110 120 St, Surrey. If the gate is closed on Sundays or after 6 PM, call (604) 503-0855 to buzz in!"
        }
      ]);
    } else if (action === 'message') {
      setContactMode(true);
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'user', text: 'I would like to send a direct message' },
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "Please leave your contact info below and our reception team will get right back to you!"
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
      setMessages(prev => [
        ...prev,
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: "Thank you for your message! If this is regarding an appointment, you can schedule instantly online. Would you like to leave your phone or email so our staff can follow up directly?",
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
        subject: 'Chat Widget Inquiry',
        message: contactData.note || 'Inquiry sent via live chat widget'
      });

      setSubmitted(true);
      setMessages(prev => [
        ...prev,
        { 
          id: Date.now(), 
          sender: 'bot', 
          text: `Thank you, ${contactData.name}! Your message has been received by our reception team. We will contact you at ${contactData.phoneOrEmail} promptly.` 
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
            <MessageSquare size={24} className="launcher-icon" />
          </div>
          <div className="launcher-label">
            <span className="label-title">Questions?</span>
            <span className="label-sub">Chat with Us</span>
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
                <strong>Revere Care Assistant</strong>
                <span className="bot-status-online">
                  <span className="online-dot"></span> Active • Surrey Clinic Team
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
                    <button 
                      className="bubble-action-btn secondary"
                      onClick={() => setContactMode(true)}
                    >
                      <span>Leave Contact Details</span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* In-chat contact inquiry form if triggered */}
            {contactMode && !submitted && (
              <form onSubmit={handleContactSubmit} className="chat-contact-form">
                <span className="form-header-text">Leave a Quick Note:</span>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
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
                  placeholder="How can we help? (Optional)"
                  value={contactData.note}
                  onChange={(e) => setContactData(p => ({ ...p, note: e.target.value }))}
                ></textarea>
                <button type="submit" className="form-submit-mini" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </button>
              </form>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="chatbot-chips-bar">
            <button className="chip-btn" onClick={() => handleQuickChip('book')}>
              <Calendar size={13} /> Book Appointment
            </button>
            <button className="chip-btn" onClick={() => handleQuickChip('icbc')}>
              <ShieldCheck size={13} /> ICBC Claims
            </button>
            <button className="chip-btn" onClick={() => handleQuickChip('parking')}>
              🚗 Parking Stalls
            </button>
            <button className="chip-btn" onClick={() => handleQuickChip('message')}>
              ✉️ Send Note
            </button>
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSendMessage} className="chatbot-input-bar">
            <input
              type="text"
              placeholder="Type your question..."
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
          background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
          color: #ffffff;
          padding: 10px 20px 10px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 12px 32px rgba(13, 40, 24, 0.35);
          cursor: pointer;
          transition: var(--transition);
          position: relative;
        }

        .chatbot-launcher-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 38px rgba(13, 40, 24, 0.45);
          background: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%);
        }

        .launcher-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #388242;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .launcher-label {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .label-title {
          font-size: 0.74rem;
          color: #d8f3dc;
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
          background: #52b788;
          opacity: 0.3;
          z-index: -1;
          animation: pulse-ring 2.5s infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.4; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        /* Chat Dialog */
        .chatbot-dialog {
          width: 380px;
          max-width: calc(100vw - 36px);
          height: 540px;
          max-height: calc(100vh - 120px);
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(0, 0, 0, 0.12);
          box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.3);
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
          background: linear-gradient(135deg, #0d2818 0%, #1b4332 100%);
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
          background: #388242;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
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
          color: #b7e4c7;
        }

        .online-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #52b788;
        }

        .chatbot-close-btn {
          color: #d8f3dc;
          padding: 6px;
          border-radius: 50%;
          transition: var(--transition);
        }
        .chatbot-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
        }

        /* Chat Body */
        .chatbot-body {
          flex: 1;
          padding: 18px 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: #f7faf8;
        }

        .chat-bubble-row {
          display: flex;
          width: 100%;
        }
        .chat-bubble-row.bot { justify-content: flex-start; }
        .chat-bubble-row.user { justify-content: flex-end; }

        .chat-bubble {
          max-width: 84%;
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .chat-bubble.bot {
          background: #ffffff;
          color: #1a2226;
          border: 1px solid #e0ebe3;
          border-bottom-left-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .chat-bubble.user {
          background: #1b4332;
          color: #ffffff;
          border-bottom-right-radius: 4px;
        }

        .bubble-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          background: #388242;
          color: #ffffff;
          transition: var(--transition);
        }
        .bubble-action-btn:hover {
          background: #2d6a4f;
        }
        .bubble-action-btn.secondary {
          background: #e8f5ee;
          color: #1b4332;
          border: 1px solid #c2decb;
        }

        .chat-contact-form {
          background: #ffffff;
          border: 1px solid #d8e6dc;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-header-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1b4332;
        }

        .chat-contact-form input,
        .chat-contact-form textarea {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #cfded4;
          border-radius: 6px;
          font-size: 0.84rem;
          font-family: inherit;
        }

        .form-submit-mini {
          background: #1b4332;
          color: #ffffff;
          padding: 8px;
          border-radius: 6px;
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* Chips Bar */
        .chatbot-chips-bar {
          display: flex;
          gap: 6px;
          padding: 10px 14px;
          background: #ffffff;
          border-top: 1px solid #eaf2ed;
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
          color: #2b3b32;
          background: #f0f7f3;
          border: 1px solid #c8e0d1;
          cursor: pointer;
          transition: var(--transition);
        }
        .chip-btn:hover {
          background: #1b4332;
          color: #ffffff;
          border-color: #1b4332;
        }

        /* Input Bar */
        .chatbot-input-bar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: #ffffff;
          border-top: 1px solid #eaf2ed;
          gap: 10px;
        }

        .chatbot-input-bar input {
          flex: 1;
          padding: 10px 14px;
          border: 1.5px solid #dce4de;
          border-radius: 9999px;
          font-size: 0.88rem;
          outline: none;
          font-family: inherit;
        }

        .chatbot-input-bar input:focus {
          border-color: #388242;
        }

        .chatbot-input-bar button {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #388242;
          color: #ffffff;
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
          background: #1b4332;
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
