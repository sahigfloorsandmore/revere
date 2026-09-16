# Revere Massage & Wellness Centre Website Redesign

Modern, high-converting redesign for **Revere Massage & Wellness Centre** (Surrey, BC) built with React, Vite, Three.js 3D interactive hero, and Supabase integration for contact inquiries.

---

## 🌟 Key Features

1. **Interactive 3D Zen Hero Section**:
   - Built with Three.js WebGL canvas featuring smooth floating Zen river stones and ambient energy rings that respond dynamically to mouse parallax and page scroll.
   - High-conversion dual Call-To-Action (CTA) buttons routing directly to the clinic's [JaneApp online booking portal](https://reverewellness.janeapp.com/).

2. **Complete Treatment & Modality Showcase**:
   - Filterable categories: Registered Massage Therapy (RMT), Physiotherapy & Modalities, and Specialized Treatments.
   - Deep Tissue, Swedish Relaxation, Prenatal, Postnatal, Sports Recovery, Hot Stone, IMS (Dry Needling), Radial Shockwave, Laser Therapy, and Ultrasound.
   - Duration indicators (30m, 45m, 60m) with direct booking links.

3. **Direct Billing & ICBC Coverage Hub**:
   - Accepted insurers marquee banner: Pacific Blue Cross, Sun Life, Canada Life, Manulife, Desjardins, ICBC, Greenshield, ClaimSecure, etc.
   - Direct billing checklist and ICBC claim requirements.

4. **Transparent Clinic Policies Explorer**:
   - Interactive tabbed policy viewer covering the **24-Hour Cancellation Policy**, **Credit Card Security & Booking Policy**, **Online Health Intake Forms**, and **Modality Stacking Rules**.

5. **Location, Dedicated Parking & Hours**:
   - Full address: **Suite 210 - 7110 120 St, Surrey, BC V3W 3M8** (opposite Krispy Kreme and Walmart).
   - Dedicated Free Reserved Parking: **Stalls #36, #37, #38** in the underground basement parkade with Sunday & evening gate instructions.
   - Operating Hours: **Mon–Sun: 6:30 AM – 8:00 PM** (Open 7 Days a Week).
   - Embedded interactive Google Maps iframe.

6. **Interactive FAQ Section**:
   - Expandable accordion answering common patient questions (RMT vs Non-RMT, Doctor referrals, ICBC coverage, draping standards, etc.).

7. **Supabase Database Integration for Inquiries**:
   - Contact & inquiry form wired to Supabase with SQL schema migrations provided in `supabase/schema.sql`.
   - Includes graceful offline fallback for demonstration mode before API keys are plugged in.

8. **JaneApp Direct Booking Integration**:
   - All booking triggers throughout the site seamlessly connect patients directly to `https://reverewellness.janeapp.com/`.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 🗄️ Supabase Setup (For Contact Inquiries)

1. Create a project at [supabase.com](https://supabase.com).
2. Go to **SQL Editor** and execute the script in `supabase/schema.sql`:
   ```sql
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
   ```
3. Copy your project URL and Anon public key into `.env`:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

---

## 📦 Push to Git Repository

To push the project to your GitHub repository:
```bash
git init
git add .
git commit -m "feat: complete modern redesign of Revere Wellness Centre website"
git branch -M main
git remote add origin https://github.com/sahigfloorsandmore/revere.git
git push -u origin main
```
