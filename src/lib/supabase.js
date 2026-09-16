import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('your-project-id') &&
  !supabaseAnonKey.includes('your-anon-public-key')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submit contact inquiry to Supabase database with automatic fallback
 * @param {Object} data { fullName, email, phone, subject, message, preferredContactMethod }
 */
export async function submitInquiry(data) {
  if (supabase && isSupabaseConfigured) {
    const { data: record, error } = await supabase
      .from('contact_inquiries')
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          subject: data.subject || 'General Inquiry',
          message: data.message,
          preferred_contact_method: data.preferredContactMethod || 'email',
          created_at: new Date().toISOString(),
          status: 'new'
        }
      ]);

    if (error) {
      console.error('Supabase submission error:', error);
      throw error;
    }
    return { success: true, mode: 'supabase', data: record };
  }

  // Graceful fallback for local/preview mode before Supabase credentials are configured
  console.info('Supabase credentials not configured yet. Saving message locally for demonstration.', data);
  
  // Store in local storage for demonstration
  try {
    const existing = JSON.parse(localStorage.getItem('revere_inquiries') || '[]');
    existing.push({ ...data, id: Date.now(), timestamp: new Date().toISOString() });
    localStorage.setItem('revere_inquiries', JSON.stringify(existing));
  } catch (e) {
    // Ignore storage issues
  }

  return { 
    success: true, 
    mode: 'fallback', 
    note: 'Message saved locally (configure VITE_SUPABASE_URL in .env to connect to live Supabase).' 
  };
}
