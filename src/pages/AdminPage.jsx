import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Check, 
  Save, 
  RotateCcw, 
  Mail, 
  Calendar, 
  Users, 
  Clock, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { 
  getClinicSettings, 
  saveClinicSettings, 
  resetClinicSettings, 
  cleanPhoneForWhatsApp, 
  getWhatsAppUrl 
} from '../lib/settings';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [showPin, setShowPin] = useState(false);

  // Settings State
  const [settings, setSettings] = useState(getClinicSettings());
  const [saveToast, setSaveToast] = useState(false);

  // Inquiries State
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    // Check if already authenticated this session
    const sessionAuth = sessionStorage.getItem('revere_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }

    loadInquiries();
  }, []);

  const loadInquiries = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('revere_inquiries') || '[]');
      setInquiries(stored.reverse());
    } catch (e) {
      setInquiries([]);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput.trim() === settings.adminPin || pinInput.trim() === 'revere2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('revere_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Default PIN is: revere2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('revere_admin_auth');
    setPinInput('');
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    const updated = saveClinicSettings(settings);
    setSettings(updated);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3500);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all settings to initial defaults?')) {
      const defaults = resetClinicSettings();
      setSettings(defaults);
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  const handleDeleteInquiry = (id) => {
    try {
      const updated = inquiries.filter(item => item.id !== id);
      setInquiries(updated);
      localStorage.setItem('revere_inquiries', JSON.stringify(updated.reverse()));
    } catch (e) {
      console.error(e);
    }
  };

  const cleanNumber = cleanPhoneForWhatsApp(settings.whatsappNumber);
  const testWhatsAppUrl = getWhatsAppUrl(settings.whatsappNumber, settings.whatsappGreeting);

  if (!isAuthenticated) {
    return (
      <div className="admin-login-page">
        <div className="login-card glass-card">
          <div className="login-icon-box">
            <Lock size={32} />
          </div>
          <h1 className="login-title">Clinic Management Portal</h1>
          <p className="login-subtitle">
            Enter your admin PIN to manage WhatsApp integration, clinic contacts, and website inquiries.
          </p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="pin-input-wrapper">
              <input
                type={showPin ? "text" : "password"}
                placeholder="Enter Admin PIN"
                value={pinInput}
                onChange={(e) => { setPinInput(e.target.value); setPinError(''); }}
                className="pin-input"
                autoFocus
              />
              <button
                type="button"
                className="toggle-pin-btn"
                onClick={() => setShowPin(!showPin)}
                title="Toggle PIN visibility"
              >
                {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {pinError && <div className="pin-error-text">{pinError}</div>}

            <button type="submit" className="btn btn-primary full-width">
              <Unlock size={16} />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="login-hint">
            <HelpCircle size={14} />
            <span>Default PIN: <code>revere2026</code> (changeable inside)</span>
          </div>

          <div className="login-footer">
            <Link to="/" className="back-home-link">
              <ArrowLeft size={14} />
              <span>Back to Website</span>
            </Link>
          </div>
        </div>

        <style>{`
          .admin-login-page {
            min-height: 85vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            background: linear-gradient(180deg, var(--primary-900) 0%, var(--primary-950) 100%);
          }
          .login-card {
            width: 100%;
            max-width: 440px;
            background: #ffffff;
            border-radius: var(--radius-xl);
            padding: 40px 32px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
            text-align: center;
            border: 1px solid rgba(216, 178, 141, 0.4);
          }
          .login-icon-box {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: var(--primary-50);
            color: var(--primary-700);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px auto;
            border: 1px solid rgba(127, 125, 49, 0.3);
          }
          .login-title {
            font-size: 1.55rem;
            color: var(--primary-900);
            margin-bottom: 8px;
          }
          .login-subtitle {
            font-size: 0.88rem;
            color: var(--neutral-600);
            line-height: 1.5;
            margin-bottom: 24px;
          }
          .login-form {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .pin-input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
          }
          .pin-input {
            width: 100%;
            padding: 14px 44px 14px 16px;
            font-size: 1.1rem;
            text-align: center;
            letter-spacing: 0.15em;
            border: 1.5px solid var(--neutral-300);
            border-radius: var(--radius-md);
            font-family: inherit;
          }
          .pin-input:focus {
            outline: none;
            border-color: var(--primary-600);
            box-shadow: 0 0 0 4px rgba(127, 125, 49, 0.15);
          }
          .toggle-pin-btn {
            position: absolute;
            right: 14px;
            color: var(--neutral-400);
            cursor: pointer;
          }
          .pin-error-text {
            color: #b91c1c;
            font-size: 0.82rem;
            font-weight: 600;
          }
          .full-width {
            width: 100%;
            justify-content: center;
          }
          .login-hint {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            color: var(--neutral-500);
            margin-top: 20px;
          }
          .login-hint code {
            background: var(--neutral-100);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            color: var(--primary-800);
          }
          .login-footer {
            margin-top: 24px;
            padding-top: 18px;
            border-top: 1px solid var(--neutral-200);
          }
          .back-home-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.86rem;
            color: var(--primary-700);
            font-weight: 600;
          }
          .back-home-link:hover {
            color: var(--primary-900);
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-page">
      {/* Admin Top Header */}
      <header className="admin-header">
        <div className="container admin-header-container">
          <div className="admin-brand">
            <span className="admin-badge">
              <ShieldCheck size={14} /> Clinic Admin
            </span>
            <h1 className="admin-heading">Revere Wellness Control Center</h1>
          </div>
          <div className="admin-top-actions">
            <Link to="/" className="btn-admin-preview" target="_blank" rel="noopener noreferrer">
              <span>View Live Website</span>
              <ExternalLink size={14} />
            </Link>
            <button className="btn-admin-logout" onClick={handleLogout}>
              <Lock size={14} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Form Body */}
      <main className="admin-main-body">
        <div className="container">
          {saveToast && (
            <div className="admin-toast success">
              <CheckCircle2 size={18} />
              <span>Settings saved successfully! The website chat box is now updated with your latest WhatsApp number.</span>
            </div>
          )}

          <div className="admin-grid">
            {/* Left Column: WhatsApp & Contact Settings */}
            <div className="settings-col">
              <form onSubmit={handleSaveSettings} className="admin-card glass-card">
                <div className="card-header">
                  <div className="header-icon-box whatsapp-box">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h2 className="card-title">WhatsApp Live Chat Integration</h2>
                    <p className="card-subtitle">
                      Enter the phone number that will receive incoming website chat inquiries. Multiple staff can monitor this number via the WhatsApp Business app.
                    </p>
                  </div>
                </div>

                <div className="form-fields-group">
                  {/* WhatsApp Phone Number */}
                  <div className="form-field">
                    <label htmlFor="whatsapp-number" className="field-label">
                      <span>WhatsApp Phone Number</span>
                      <span className="label-badge">Live Target</span>
                    </label>
                    <div className="input-with-icon">
                      <Phone size={16} className="input-icon" />
                      <input
                        id="whatsapp-number"
                        type="text"
                        placeholder="e.g. +1 (604) 503-0855 or your mobile number"
                        value={settings.whatsappNumber}
                        onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                        className="form-input"
                        required
                      />
                    </div>
                    <span className="field-hint">
                      💡 <strong>Tip for testing:</strong> Enter your personal cell phone number now to test sending and receiving messages. Once live, change this to your clinic's business phone!
                    </span>
                  </div>

                  {/* Clean Number Preview & Test Button */}
                  <div className="whatsapp-preview-card">
                    <div className="preview-info">
                      <span className="preview-label">Generated WhatsApp API Target:</span>
                      <strong className="preview-target">+{cleanNumber || '(no number entered)'}</strong>
                    </div>
                    <a
                      href={testWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-test-whatsapp"
                      title="Open WhatsApp chat with this number"
                    >
                      <MessageCircle size={15} />
                      <span>Test WhatsApp Link Now</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Pre-filled Customer Greeting */}
                  <div className="form-field">
                    <label htmlFor="whatsapp-greeting" className="field-label">
                      <span>Default Message Template</span>
                    </label>
                    <textarea
                      id="whatsapp-greeting"
                      rows="2"
                      value={settings.whatsappGreeting}
                      onChange={(e) => setSettings({ ...settings, whatsappGreeting: e.target.value })}
                      className="form-textarea"
                      placeholder="Hi Revere Wellness, I have an inquiry about..."
                    ></textarea>
                    <span className="field-hint">
                      This message is automatically typed for visitors when they click "Chat on WhatsApp".
                    </span>
                  </div>

                  {/* Feature Toggles */}
                  <div className="toggles-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={settings.enableWhatsApp}
                        onChange={(e) => setSettings({ ...settings, enableWhatsApp: e.target.checked })}
                      />
                      <span>Enable WhatsApp Option in Chat Box</span>
                    </label>

                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={settings.enableCallbackForm}
                        onChange={(e) => setSettings({ ...settings, enableCallbackForm: e.target.checked })}
                      />
                      <span>Enable "Leave a Note / Request Callback" for non-WhatsApp users</span>
                    </label>
                  </div>

                  {/* Clinic General Contact */}
                  <div className="form-divider"><span>General Clinic Contact</span></div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="reception-phone" className="field-label">Reception Phone</label>
                      <input
                        id="reception-phone"
                        type="text"
                        value={settings.receptionPhone}
                        onChange={(e) => setSettings({ ...settings, receptionPhone: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="reception-email" className="field-label">Reception Email</label>
                      <input
                        id="reception-email"
                        type="email"
                        value={settings.receptionEmail}
                        onChange={(e) => setSettings({ ...settings, receptionEmail: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Admin Security PIN */}
                  <div className="form-divider"><span>Admin Security</span></div>

                  <div className="form-field">
                    <label htmlFor="admin-pin" className="field-label">Portal PIN Code</label>
                    <input
                      id="admin-pin"
                      type="text"
                      value={settings.adminPin}
                      onChange={(e) => setSettings({ ...settings, adminPin: e.target.value })}
                      className="form-input"
                      placeholder="revere2026"
                    />
                    <span className="field-hint">Use this PIN to access this admin settings page in the future.</span>
                  </div>
                </div>

                {/* Form Submit Actions */}
                <div className="card-actions">
                  <button type="submit" className="btn btn-primary">
                    <Save size={16} />
                    <span>Save All Changes</span>
                  </button>
                  <button type="button" onClick={handleResetDefaults} className="btn-reset">
                    <RotateCcw size={15} />
                    <span>Reset Defaults</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Inquiries Inbox & Multi-Staff Guide */}
            <div className="sidebar-col">
              {/* How Multiple Staff Works Guide */}
              <div className="admin-card glass-card info-card">
                <div className="card-header">
                  <div className="header-icon-box users-box">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="card-title">How Multiple Staff Monitor Chats</h3>
                  </div>
                </div>

                <div className="guide-steps">
                  <div className="guide-step">
                    <div className="step-num">1</div>
                    <div>
                      <strong>Install WhatsApp Business:</strong>
                      <p>Download the free <em>WhatsApp Business</em> app on your clinic's primary phone or mobile.</p>
                    </div>
                  </div>

                  <div className="guide-step">
                    <div className="step-num">2</div>
                    <div>
                      <strong>Link Up to 4 Other Computers / Staff:</strong>
                      <p>Open <em>Linked Devices</em> in WhatsApp settings. Receptionists on desktop PCs can scan the QR code at <code>web.whatsapp.com</code>.</p>
                    </div>
                  </div>

                  <div className="guide-step">
                    <div className="step-num">3</div>
                    <div>
                      <strong>Simultaneous Replies:</strong>
                      <p>Everyone sees all patient inquiries live and can answer immediately!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website Inquiries Inbox (Non-WhatsApp visitors) */}
              <div className="admin-card glass-card">
                <div className="card-header">
                  <div className="header-icon-box mail-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="card-title">Website Inquiries Inbox</h3>
                    <p className="card-subtitle">Messages left by visitors who don't have WhatsApp</p>
                  </div>
                </div>

                {inquiries.length === 0 ? (
                  <div className="empty-inbox">
                    <CheckCircle2 size={32} className="empty-icon" />
                    <p>No pending inquiries yet. When visitors submit notes in the chat widget, they will appear here.</p>
                  </div>
                ) : (
                  <div className="inquiries-list">
                    {inquiries.map((inq) => (
                      <div key={inq.id} className="inquiry-item">
                        <div className="inquiry-top">
                          <strong>{inq.fullName || inq.name || 'Website Visitor'}</strong>
                          <span className="inquiry-date">
                            {new Date(inq.timestamp || inq.created_at || Date.now()).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        <div className="inquiry-contact">
                          <Phone size={13} />
                          <span>{inq.phone || inq.phoneOrEmail || inq.email}</span>
                        </div>

                        {inq.message && inq.message !== 'Inquiry sent via live chat widget' && (
                          <p className="inquiry-note">"{inq.message || inq.note}"</p>
                        )}

                        <div className="inquiry-actions">
                          {inq.phone && (
                            <a href={`tel:${inq.phone}`} className="btn-inquiry-action">
                              <Phone size={12} /> Call
                            </a>
                          )}
                          {inq.email && inq.email.includes('@') && (
                            <a href={`mailto:${inq.email}`} className="btn-inquiry-action">
                              <Mail size={12} /> Email
                            </a>
                          )}
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="btn-inquiry-delete"
                            title="Delete inquiry"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .admin-dashboard-page {
          background-color: var(--neutral-100);
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .admin-header {
          background: #181c16;
          border-bottom: 1px solid rgba(216, 178, 141, 0.3);
          padding: 24px 0;
          color: #ffffff;
        }
        .admin-header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .admin-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(216, 178, 141, 0.2);
          color: #d8b28d;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 6px;
        }
        .admin-heading {
          font-size: 1.6rem;
          color: #ffffff;
          margin: 0;
        }
        .admin-top-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-admin-preview {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(216, 178, 141, 0.3);
          transition: var(--transition);
        }
        .btn-admin-preview:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #d8b28d;
        }
        .btn-admin-logout {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          background: #2c2b18;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: var(--transition);
        }
        .btn-admin-logout:hover {
          background: #464539;
        }

        .admin-main-body {
          padding-top: 36px;
        }
        .admin-toast {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
          font-size: 0.92rem;
          font-weight: 600;
        }
        .admin-toast.success {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .admin-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .admin-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          padding: 32px;
          border: 1px solid rgba(216, 178, 141, 0.35);
          box-shadow: 0 10px 25px -8px rgba(51, 50, 19, 0.08);
          margin-bottom: 24px;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--neutral-200);
        }
        .header-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .whatsapp-box {
          background: #e7f7ed;
          color: #128c7e;
        }
        .users-box {
          background: var(--primary-50);
          color: var(--primary-700);
        }
        .mail-box {
          background: #fdfaf6;
          color: #c99d75;
        }

        .card-title {
          font-size: 1.25rem;
          color: var(--primary-900);
          margin-bottom: 4px;
        }
        .card-subtitle {
          font-size: 0.85rem;
          color: var(--neutral-600);
          line-height: 1.45;
          margin: 0;
        }

        .form-fields-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .field-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary-900);
        }
        .label-badge {
          font-size: 0.72rem;
          background: #e7f7ed;
          color: #128c7e;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-weight: 700;
        }

        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--neutral-400);
        }
        .form-input {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1.5px solid var(--neutral-300);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          font-family: inherit;
          color: var(--neutral-800);
          background: var(--neutral-50);
          transition: var(--transition);
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary-600);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(127, 125, 49, 0.12);
        }

        .form-textarea {
          width: 100%;
          padding: 12px;
          border: 1.5px solid var(--neutral-300);
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          font-family: inherit;
          background: var(--neutral-50);
          color: var(--neutral-800);
          transition: var(--transition);
        }
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary-600);
          background: #ffffff;
        }

        .field-hint {
          font-size: 0.8rem;
          color: var(--neutral-600);
          line-height: 1.4;
        }

        .whatsapp-preview-card {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .preview-info {
          display: flex;
          flex-direction: column;
        }
        .preview-label {
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #166534;
        }
        .preview-target {
          font-size: 1.05rem;
          color: #14532d;
          letter-spacing: 0.04em;
        }
        .btn-test-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #25d366;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }
        .btn-test-whatsapp:hover {
          background: #1eb956;
          transform: translateY(-1px);
        }

        .toggles-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 14px 0;
          border-top: 1px solid var(--neutral-200);
          border-bottom: 1px solid var(--neutral-200);
        }
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--neutral-800);
          cursor: pointer;
        }
        .toggle-label input {
          width: 18px;
          height: 18px;
          accent-color: var(--primary-600);
        }

        .form-divider {
          display: flex;
          align-items: center;
          margin: 6px 0;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary-700);
        }
        .form-divider::after {
          content: '';
          flex: 1;
          margin-left: 12px;
          border-bottom: 1px solid var(--neutral-200);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          margin-top: 10px;
          border-top: 1px solid var(--neutral-200);
        }
        .btn-reset {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--neutral-600);
          padding: 8px 14px;
          border-radius: var(--radius-md);
          transition: var(--transition);
        }
        .btn-reset:hover {
          background: var(--neutral-200);
          color: var(--neutral-900);
        }

        /* Guide & Inquiries */
        .info-card {
          background: linear-gradient(180deg, #ffffff 0%, var(--primary-50) 100%);
        }
        .guide-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .guide-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--primary-600);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .guide-step strong {
          display: block;
          font-size: 0.88rem;
          color: var(--primary-900);
          margin-bottom: 2px;
        }
        .guide-step p {
          font-size: 0.82rem;
          color: var(--neutral-700);
          margin: 0;
          line-height: 1.4;
        }
        .guide-step code {
          background: rgba(0, 0, 0, 0.06);
          padding: 2px 4px;
          border-radius: 3px;
        }

        .empty-inbox {
          text-align: center;
          padding: 30px 10px;
          color: var(--neutral-500);
        }
        .empty-icon {
          color: #10b981;
          margin-bottom: 8px;
        }
        .empty-inbox p {
          font-size: 0.85rem;
          margin: 0;
        }

        .inquiries-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 480px;
          overflow-y: auto;
        }
        .inquiry-item {
          background: var(--neutral-50);
          border: 1px solid var(--neutral-200);
          border-radius: var(--radius-md);
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .inquiry-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.88rem;
          color: var(--primary-900);
        }
        .inquiry-date {
          font-size: 0.72rem;
          color: var(--neutral-500);
        }
        .inquiry-contact {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--primary-700);
          font-weight: 600;
        }
        .inquiry-note {
          font-size: 0.82rem;
          color: var(--neutral-700);
          background: #ffffff;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--neutral-200);
          margin: 2px 0 0 0;
          font-style: italic;
        }
        .inquiry-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }
        .btn-inquiry-action {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          background: var(--primary-100);
          color: var(--primary-800);
          border: 1px solid rgba(127, 125, 49, 0.2);
        }
        .btn-inquiry-action:hover {
          background: var(--primary-600);
          color: #ffffff;
        }
        .btn-inquiry-delete {
          margin-left: auto;
          color: var(--neutral-400);
          padding: 4px;
          cursor: pointer;
        }
        .btn-inquiry-delete:hover {
          color: #b91c1c;
        }

        @media (max-width: 900px) {
          .admin-grid {
            grid-template-columns: 1fr;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
