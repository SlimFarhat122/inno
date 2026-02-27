import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Chauffeur from "./components/Chauffeur";
import UserVersion from "./components/UserVersion";
import ContactForm from './components/ContactForm';

// Pages Business
import BusinessHero from "./components/BusinessHero";
import BusinessStats from "./components/BusinessStats";
import BusinessSectors from "./components/BusinessSectors";
import BusinessPlatform from "./components/BusinessPlatform";
import BusinessContact from "./components/BusinessContact";
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
// Gestionnaire de Scroll Universel
const ScrollToSection = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <div id="about"><About /></div>
    <div id="user-version"><UserVersion /></div>
    <div id="driver-version"><Chauffeur /></div>
    <div id="contact"><ContactForm /></div>
  </>
);
const BusinessPage = () => (
  <div style={{ paddingTop: "80px" }}>
    <BusinessHero />
    <BusinessPlatform />
    <BusinessSectors />
    <BusinessStats />
    <BusinessContact />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/condition-of-use/" element={<TermsOfService />} />
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;