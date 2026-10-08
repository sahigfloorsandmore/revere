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

  // Admin security
  adminPin: 'revere2026'
};

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
 * Get current clinic settings from localStorage or defaults
 */
export function getClinicSettings() {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (e) {
    console.error('Error loading clinic settings:', e);
    return DEFAULT_SETTINGS;
  }
}

/**
 * Save clinic settings and notify active components
 */
export function saveClinicSettings(newSettings) {
  if (typeof window === 'undefined') return newSettings;

  try {
    const current = getClinicSettings();
    const merged = { ...current, ...newSettings };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));

    // Dispatch event so ChatBotWidget and other components update immediately
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
    window.dispatchEvent(new CustomEvent('revere-settings-updated', { detail: DEFAULT_SETTINGS }));
  }
  return DEFAULT_SETTINGS;
}
