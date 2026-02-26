import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Composants Communs
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Composants Page d'Accueil (Home)
import Hero from "./components/Hero";
import About from "./components/About";
import Chauffeur from "./components/Chauffeur";
import UserVersion from "./components/UserVersion";
import ContactForm from './components/ContactForm';

// Nouveaux Composants Page Business
import BusinessHero from "./components/BusinessHero";
import BusinessStats from "./components/BusinessStats";
import BusinessSectors from "./components/BusinessSectors";
import BusinessPlatform from "./components/BusinessPlatform";
import BusinessContact from "./components/BusinessContact";

/**
 * Composant utilitaire pour remonter en haut de page lors d'un changement de route
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Si on a un hash (ex: #user-version), on laisse la Navbar gérer le scroll
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};
/**
 * 
 * Composant pour gérer l'affichage conditionnel du Footer
 */
const ConditionalFooter = () => {
  const location = useLocation();
  // On n'affiche le footer que si le chemin est strictement "/"
  if (location.pathname !== "/") {
    return null;
  }
  return <Footer />;
};

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // On retire le '#' pour avoir l'ID pur
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        // Petit délai de 100ms pour être sûr que le rendu est fini
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // 100px de marge pour la Navbar
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [hash]); // Se déclenche dès que le hash change

  return (
    <>
      <Hero />
      <div id="about" style={{ backgroundColor: "#f8fafc", padding: "80px 0" }}>
        <About />
      </div>
      <div id="user-version" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)", padding: "100px 0" }}>
        <UserVersion />
      </div>
      <div id="driver-version" style={{ background: "linear-gradient(180deg, #eff6ff 0%, #f0fdf4 100%)", padding: "100px 0" }}>
        <Chauffeur />
      </div>
      <div id="contact" style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
        <ContactForm />
      </div>
    </>
  );
};
// Composant de regroupement pour la page Business
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
      <ScrollToTop />
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<BusinessPage />} />
        </Routes>

        {/* Le Footer utilise maintenant la logique conditionnelle */}
        <ConditionalFooter />
      </div>
    </Router>
  );
}

export default App;