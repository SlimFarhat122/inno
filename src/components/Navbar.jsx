import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import innoLogo from "../assets/logo.png"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(window.scrollY);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Couleurs basées sur votre logo
  const colors = {
    logoBlue: "#0B31AF", 
    logoGreen: "#62A15B",
    darkDeep: "#030B21", // Fond quand on scroll
    textDark: "#1E293B", // Texte si fond blanc
    textLight: "#FFFFFF", // Texte si fond bleu
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      setVisible(prevScrollPos.current > current || current < 10 || isMobileMenuOpen);
      prevScrollPos.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    setShowDropdown(false);
    navigate(`/#${id}`);
  };

  const styles = {
    nav: {
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: scrolled ? "12px 6%" : "20px 6%",
      // Correction ici : Si pas de scroll, on garde un fond très léger pour voir le texte
      backgroundColor: scrolled || isMobileMenuOpen ? colors.darkDeep : "rgba(255, 255, 255, 0.7)", 
      backdropFilter: "blur(15px)",
      boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.1)" : "none",
      position: "fixed", 
      top: visible ? "0" : "-100px",
      width: "100%", 
      zIndex: 5000, 
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxSizing: "border-box",
      borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.05)"
    },
    linkItem: { 
      fontSize: "14px", 
      fontWeight: "600", 
      // Le texte devient blanc au scroll, sinon il est bleu foncé/noir
      color: scrolled || isMobileMenuOpen ? colors.textLight : colors.textDark, 
      cursor: "pointer", 
      transition: "all 0.3s ease",
      textDecoration: "none",
      listStyle: "none"
    },
    contactBtn: {
      backgroundColor: colors.logoGreen,
      color: "white",
      padding: "10px 25px",
      borderRadius: "100px",
      border: "none",
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: `0 4px 15px ${colors.logoGreen}40`
    }
  };

  return (
    <nav style={styles.nav}>
      <style>
        {`
          .nav-link:hover { color: ${colors.logoGreen} !important; }
          .nav-links-wrapper { display: flex; align-items: center; gap: 40px; list-style: none; margin: 0; padding: 0; }
          
          @media (max-width: 992px) {
            .nav-links-wrapper {
              position: absolute;
              top: 100%; left: 0; width: 100%;
              background-color: ${colors.darkDeep};
              flex-direction: column;
              padding: 40px 0;
              gap: 25px;
              display: ${isMobileMenuOpen ? "flex" : "none"};
            }
            .desktop-btn { display: none; }
          }
        `}
      </style>

      {/* LOGO */}
      <img 
        src={innoLogo} 
        alt="Inno" 
        style={{ height: scrolled ? "35px" : "45px", transition: "0.3s", cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      {/* NAVIGATION */}
      <ul className="nav-links-wrapper">
        <li className="nav-link" style={styles.linkItem} onClick={() => handleNavClick("about")}>À Propos</li>
        
        <li 
          style={{...styles.linkItem, position: "relative"}}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Services <small>▼</small>
          {showDropdown && (
            <div style={{
              position: "absolute", top: "100%", left: "0", backgroundColor: "white", 
              padding: "15px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", minWidth: "180px"
            }}>
              <div onClick={() => handleNavClick("user-version")} style={{color: "#334155", padding: "8px 0", cursor: "pointer"}}>Passager</div>
              <div onClick={() => handleNavClick("driver-version")} style={{color: "#334155", padding: "8px 0", cursor: "pointer"}}>Chauffeur</div>
            </div>
          )}
        </li>

        <li 
          className="nav-link" 
          style={{...styles.linkItem, color: location.pathname === "/business" ? colors.logoGreen : (scrolled ? "white" : colors.textDark)}}
          onClick={() => navigate("/business")}
        >
          Business
        </li>
      </ul>

      {/* BOUTON CONTACT */}
      <div className="desktop-btn">
        <button 
          style={styles.contactBtn}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </button>
      </div>

      {/* HAMBURGER MOBILE */}
      <div 
        style={{ display: window.innerWidth < 992 ? "block" : "none", color: scrolled ? "white" : colors.textDark, fontSize: "24px", cursor: "pointer" }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;