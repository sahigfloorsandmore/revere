// Clinic Settings & Dynamic WhatsApp Configuration Service
// Supports local management and real-time updates across the app

export const DEFAULT_SETTINGS = {
  // WhatsApp settings
  whatsappNumber: '+16045030855', // Default clinic number (owner can change to their personal cell or any business line)
  whatsappGreeting: 'Hi Revere Wellness, I have an inquiry about booking an appointment.',
  enableWhatsApp: true,

  // General clinic contacts
  receptionPhone: '(604) 503-0855',
  receptionEmail: 'info@reverewellness.ca',
  janeAppUrl: 'https://reverewellness.janeapp.com/',

  // Feature flags
  enableCallbackForm: true,
  enableJaneBookingShortcut: true,

  // Promotional Popup / Ads Modal Settings
  promoModal: {
    enabled: false,
    title: 'Seasonal Wellness Special',
    subtitle: 'Exclusive Clinic Offer • Revere Massage & Wellness',
    bodyText: 'Experience deep restorative relief. Book your Registered Massage Therapy, Physiotherapy, or Active Rehab session online with instant confirmation.',
    badgeText: 'Special Announcement',
    contentType: 'image', // 'image' | 'script'
    imageUrl: '', // Uploaded image data URL or external URL
    animationScript: '', // Custom animation code, embed script, or SVG/Lottie/HTML
    ctaText: 'Book Appointment Now',
    ctaUrl: 'https://reverewellness.janeapp.com/',
    secondaryCtaText: 'Call (604) 503-0855',
    secondaryCtaPhone: '6045030855',
    startDateTime: '', // e.g. "2026-10-01T09:00"
    endDateTime: '',   // e.g. "2026-10-31T20:00"
    delaySeconds: 3,   // seconds before showing popup
    showOncePerSession: true
  },

  // Admin security
  adminPin: 'revere2026'
};

/**
 * Format Date to local YYYY-MM-DDTHH:mm string suitable for <input type="datetime-local">
 */
export function formatLocalDateTime(date) {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * Determine if the promotional modal is currently active based on schedule
 */
export function getPromoModalStatus(promo) {
  if (!promo || !promo.enabled) {
    return { status: 'disabled', label: 'Disabled', active: false };
  }

  const now = new Date();

  if (promo.startDateTime && typeof promo.startDateTime === 'string' && promo.startDateTime.trim() !== '') {
    const start = new Date(promo.startDateTime);
    if (!isNaN(start.getTime()) && now < start) {
      return { status: 'upcoming', label: 'Scheduled (Upcoming)', active: false, start };
    }
  }

  if (promo.endDateTime && typeof promo.endDateTime === 'string' && promo.endDateTime.trim() !== '') {
    const end = new Date(promo.endDateTime);
    if (!isNaN(end.getTime()) && now > end) {
      return { status: 'expired', label: 'Expired (Ended)', active: false, end };
    }
  }

  return { status: 'active', label: 'Active Now (Visible)', active: true };
}

const STORAGE_KEY = 'revere_clinic_settings';

/**
 * Clean and format any phone number for WhatsApp wa.me links
 * e.g. "(604) 503-0855" -> "16045030855"
 */
export function cleanPhoneForWhatsApp(phone) {
  if (!phone) return '';
  // Remove all non-numeric characters
  let digits = phone.replace(/\D/g, '');
  
  // If 10 digits (standard North America without country code), prepend 1
  if (digits.length === 10) {
    digits = '1' + digits;
  }
  return digits;
}

/**
 * Generate direct WhatsApp URL
 */
export function getWhatsAppUrl(phone, customText) {
  const clean = cleanPhoneForWhatsApp(phone || DEFAULT_SETTINGS.whatsappNumber);
  const text = customText || DEFAULT_SETTINGS.whatsappGreeting;
  return `https://wa.me/${clean}?text=${encodeURIComponent(text)}`;
}

/**
 * Get current clinic settings from localStorage or defaults with deep merge
 */
export function getClinicSettings() {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { 
      ...DEFAULT_SETTINGS, 
      ...parsed,
      promoModal: {
        ...DEFAULT_SETTINGS.promoModal,
        ...(parsed.promoModal || {})
      }
    };
  } catch (e) {
    console.error('Error loading clinic settings:', e);
    return DEFAULT_SETTINGS;
  }
}

/**
 * Save clinic settings and notify active components with deep merge & storage safety
 */
export function saveClinicSettings(newSettings) {
  if (typeof window === 'undefined') return newSettings;

  try {
    const current = getClinicSettings();
    const merged = { 
      ...current, 
      ...newSettings,
      promoModal: {
        ...current.promoModal,
        ...(newSettings.promoModal || {})
      }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));

    // Clear session dismissal cache so changes can be tested immediately in the browser
    try {
      if (typeof sessionStorage !== 'undefined') {
        Object.keys(sessionStorage).forEach(k => {
          if (k.startsWith('revere_promo_dismissed')) {
            sessionStorage.removeItem(k);
          }
        });
      }
    } catch (_) {}

    // Dispatch event so ChatBotWidget and PromotionalModal update immediately
    window.dispatchEvent(new CustomEvent('revere-settings-updated', { detail: merged }));
    return merged;
  } catch (e) {
    console.error('Error saving clinic settings:', e);
    return newSettings;
  }
}

/**
 * Reset settings back to initial factory defaults
 */
export function resetClinicSettings() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    try {
      Object.keys(sessionStorage).forEach(k => {
        if (k.startsWith('revere_promo_dismissed')) {
          sessionStorage.removeItem(k);
        }
      });
    } catch (_) {}
    window.dispatchEvent(new CustomEvent('revere-settings-updated', { detail: DEFAULT_SETTINGS }));
  }
  return DEFAULT_SETTINGS;
}
