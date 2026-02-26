import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import innoLogo from "../assets/logo.png"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      if (current < 10) setVisible(true);
      else setVisible(prevScrollPos > current);
      setPrevScrollPos(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const timeout = setTimeout(() => scrollToSection(id), 200);
      return () => clearTimeout(timeout);
    }
  }, [location]);

  const handleNavClick = (id) => {
    setShowDropdown(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      scrollToSection(id);
      window.history.pushState(null, null, `/#${id}`);
    }
  };

  const styles = {
    nav: {
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: scrolled ? "12px 8%" : "20px 8%",
      // Fond sombre élégant qui laisse voir les couleurs du logo
      backgroundColor: scrolled ? "rgba(3, 22, 66, 0.98)" : "rgba(2, 0, 116, 0.85)", 
      backdropFilter: "blur(12px)",
      boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      position: "fixed", 
      top: visible ? "0" : "-100px",
      width: "100%", 
      zIndex: 2000, 
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxSizing: "border-box",
    },
    links: { display: "flex", alignItems: "center", gap: "35px", listStyle: "none" },
    linkItem: { 
        fontSize: "13px", 
        fontWeight: "700", 
        color: "#ffffff", 
        cursor: "pointer", 
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        transition: "all 0.3s ease"
    },
    dropdownMenu: {
      position: "absolute", 
      top: "100%", 
      left: "50%", 
      transform: "translateX(-50%)",
      backgroundColor: "#ffffff", 
      minWidth: "220px", 
      boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
      borderRadius: "16px", 
      padding: "10px 0", 
      visibility: showDropdown ? "visible" : "hidden",
      opacity: showDropdown ? 1 : 0, 
      transition: "all 0.3s ease", 
      border: "1px solid #f1f5f9",
      marginTop: "15px"
    },
    dropdownItem: {
        padding: "12px 20px", 
        cursor: "pointer", 
        fontSize: "14px", 
        fontWeight: "600",
        color: "#1e3a8a",
        transition: "all 0.2s ease"
    }
  };

  return (
    <nav style={styles.nav}>
      <style>
        {`
          .nav-link:hover { color: #62a15b !important; }
          .dropdown-item:hover { background-color: #f8fafc; color: #62a15b !important; }
          .btn-download-nav:hover { background-color: #ffffff !important; color: #62a15b !important; transform: translateY(-2px); }
        `}
      </style>

      {/* Le filtre "invert" a été supprimé pour garder les couleurs originales */}
      <img 
        src={innoLogo} 
        alt="Inno Logo" 
        style={{
          height: scrolled ? "45px" : "55px", 
          cursor: "pointer", 
          transition: "all 0.3s ease"
        }} 
        onClick={() => navigate("/")} 
      />

      <ul style={styles.links}>
        <li className="nav-link" onClick={() => handleNavClick("about")} style={styles.linkItem}>À Propos</li>

        <li 
          onMouseEnter={() => setShowDropdown(true)} 
          onMouseLeave={() => setShowDropdown(false)} 
          style={{position: "relative"}}
        >
          <span className="nav-link" style={styles.linkItem}>Application <small style={{fontSize: '10px', marginLeft: '4px'}}>▼</small></span>
          <div style={styles.dropdownMenu}>
            <div className="dropdown-item" onClick={() => handleNavClick("user-version")} style={styles.dropdownItem}>👤 Version Utilisateur</div>
            <div className="dropdown-item" onClick={() => handleNavClick("driver-version")} style={styles.dropdownItem}>🚕 Version Chauffeur</div>
          </div>
        </li>

        <li 
          className="nav-link" 
          onClick={() => navigate("/business")} 
          style={{...styles.linkItem, color: location.pathname === "/business" ? "#62a15b" : "#ffffff"}}
        >
          Business
        </li>
      </ul>

      <div style={{display: "flex", gap: "25px", alignItems: "center"}}>
        <span 
          className="nav-link" 
          onClick={() => handleNavClick("contact")} 
          style={{...styles.linkItem, textTransform: "none", fontSize: "14px"}}
        >
          Support
        </span>
        <button 
          className="btn-download-nav"
          style={{
            backgroundColor: "#62a15b", 
            color: "white", 
            padding: "10px 22px", 
            borderRadius: "10px", 
            border: "none", 
            fontWeight: "800", 
            cursor: "pointer",
            fontSize: "13px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(98, 161, 91, 0.2)"
          }}
        >
          Télécharger
        </button>
      </div>
    </nav>
  );
};

export default Navbar;