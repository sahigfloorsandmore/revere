import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBotWidget from './components/ChatBotWidget';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PractitionersPage from './pages/PractitionersPage';
import PractitionerDetailPage from './pages/PractitionerDetailPage';
import ContactPage from './pages/ContactPage';
import LocationParkingPage from './pages/LocationParkingPage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import PoliciesPage from './pages/PoliciesPage';
import AdminPage from './pages/AdminPage';
import PromotionalModal from './components/PromotionalModal';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="revere-app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/practitioners" element={<PractitionersPage />} />
            <Route path="/practitioners/:slug" element={<PractitionerDetailPage />} />
            
            {/* Dedicated Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
            
            <Route path="/location" element={<LocationParkingPage />} />
            <Route path="/parking" element={<Navigate to="/location" replace />} />
            <Route path="/parking-location" element={<Navigate to="/location" replace />} />
            
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/faqs" element={<Navigate to="/faq" replace />} />
            
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/clinic-policies" element={<Navigate to="/policies" replace />} />
            
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ChatBotWidget />
        <PromotionalModal />
      </div>
    </BrowserRouter>
  );
}
