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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ChatBotWidget />
      </div>
    </BrowserRouter>
  );
}
