import React from 'react';
import Hero3D from '../components/Hero3D';
import CoreServicesPillars from '../components/CoreServicesPillars';
import GoogleReviews from '../components/GoogleReviews';
import InsurancePartners from '../components/InsurancePartners';
import AboutUs from '../components/AboutUs';
import Policies from '../components/Policies';
import LocationParking from '../components/LocationParking';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero3D />
      <CoreServicesPillars />
      <GoogleReviews />
      <InsurancePartners />
      <AboutUs />
      <Policies />
      <LocationParking />
      <FAQ />
      <ContactSection />
    </>
  );
}
