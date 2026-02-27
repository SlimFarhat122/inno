import React, { useLayoutEffect } from 'react'; // Import indispensable
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

const ScrollToSection = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // 1. Désactive la mémoire de scroll du navigateur
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Cas A : Si on a un hash (#about, etc.)
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } 
    // Cas B : Changement de page (clic sur Business)
    else {
      // On force le scroll en haut IMMEDIATEMENT
      window.scrollTo(0, 0);
      // Double sécurité pour certains navigateurs
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
};

// 2. Composants de structure de page
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

// 3. Application principale
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