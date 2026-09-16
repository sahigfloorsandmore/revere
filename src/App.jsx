import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import InsurancePartners from './components/InsurancePartners';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Policies from './components/Policies';
import LocationParking from './components/LocationParking';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="revere-app">
      <Navbar />
      <main>
        <Hero3D />
        <InsurancePartners />
        <Services />
        <AboutUs />
        <Policies />
        <LocationParking />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
