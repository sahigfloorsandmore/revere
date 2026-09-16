-- Supabase Table Setup for Revere Wellness Contact & Inquiries
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  preferred_contact_method TEXT DEFAULT 'email',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit contact inquiries
CREATE POLICY "Allow public insert to contact_inquiries" 
ON contact_inquiries
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated clinic staff to view inquiries
CREATE POLICY "Allow authenticated staff to read inquiries" 
ON contact_inquiries
FOR SELECT 
TO authenticated 
USING (true);
