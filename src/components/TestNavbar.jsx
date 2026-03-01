import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import innoLogo from "../assets/logo.png"; 

const TestNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(window.scrollY);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide the navbar when the user scrolls down and show it when they scroll up.
      setVisible(prevScrollPos.current > currentScrollY || currentScrollY < 10);
      prevScrollPos.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      padding: scrolled ? "10px 5%" : "15px 5%",
      backgroundColor: scrolled || isMobileMenuOpen ? "#031642" : "rgba(2, 0, 116, 0.85)", 
      backdropFilter: "blur(12px)",
      boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
      position: "fixed", 
      top: visible ? "0" : "-100px",
      width: "100%", 
      zIndex: 3000, 
      transition: "all 0.4s ease",
      boxSizing: "border-box",
    },
    linksContainer: { 
      display: "flex", 
      alignItems: "center", 
      gap: "35px",
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    linkItem: { 
        fontSize: "13px", 
        fontWeight: "700", 
        color: "#ffffff", 
        cursor: "pointer", 
        textTransform: "uppercase",
        letterSpacing: "0.8px",
    },
    hamburger: {
      display: "none", // Sera activé via media query
      flexDirection: "column",
      gap: "6px",
      cursor: "pointer",
      border: "none",
      background: "none",
      padding: "5px",
      zIndex: 3001
    },
    bar: {
      width: "28px",
      height: "3px",
      backgroundColor: "white",
      borderRadius: "10px",
      transition: "all 0.3s ease"
    },
    dropdownMenu: {
      position: "absolute", 
      top: "100%", 
      left: "50%", 
      transform: "translateX(-50%)",
      backgroundColor: "#ffffff", 
      minWidth: "200px", 
      borderRadius: "12px", 
      padding: "10px 0", 
      visibility: showDropdown ? "visible" : "hidden",
      opacity: showDropdown ? 1 : 0, 
      transition: "all 0.3s ease", 
      marginTop: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    }
  };

  return (
    <nav style={styles.nav}>
      <style>
        {`
          @media (max-width: 992px) {
            .hamburger-btn { display: flex !important; order: 3; }
            .logo-img { order: 1; height: 35px !important; }
            .nav-right-buttons { display: none !important; } /* Masque le bouton Télécharger sur mobile */
            
            .nav-links-wrapper {
              position: absolute;
              top: 100%; left: 0; width: 100%;
              background-color: #031642;
              flex-direction: column !important;
              padding: 40px 0;
              gap: 25px !important;
              transform: translateY(${isMobileMenuOpen ? "0" : "-150%"});
              transition: transform 0.4s ease;
              display: flex !important;
              box-shadow: 0 20px 20px rgba(0,0,0,0.2);
            }
            .dropdown-menu-custom {
              position: static !important;
              transform: none !important;
              opacity: 1 !important;
              visibility: visible !important;
              display: ${showDropdown ? "block" : "none"};
              background: rgba(255,255,255,0.05) !important;
              box-shadow: none !important;
              margin-top: 10px !important;
            }
            .dropdown-item { color: white !important; text-align: center; }
            .mobile-download-btn { display: block !important; }
          }

          @media (min-width: 993px) {
            .mobile-download-btn { display: none !important; }
          }

          .open .bar1 { transform: rotate(45deg) translate(7px, 6px); }
          .open .bar2 { opacity: 0; }
          .open .bar3 { transform: rotate(-45deg) translate(7px, -6px); }
        `}
      </style>

      {/* LOGO */}
      <img 
        src={innoLogo} 
        alt="Inno" 
        className="logo-img"
        style={{ height: scrolled ? "40px" : "50px", cursor: "pointer", transition: "0.3s" }} 
        onClick={() => navigate("/")} 
      />

      {/* HAMBURGER (Uniquement Mobile) */}
      <button 
        className={`hamburger-btn ${isMobileMenuOpen ? "open" : ""}`} 
        style={styles.hamburger} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="bar bar1" style={styles.bar}></div>
        <div className="bar bar2" style={styles.bar}></div>
        <div className="bar bar3" style={styles.bar}></div>
      </button>

      {/* LIENS */}
      <ul className="nav-links-wrapper" style={styles.linksContainer}>
        <li className="nav-link" onClick={() => handleNavClick("about")} style={styles.linkItem}>À Propos</li>

        <li 
          onMouseEnter={() => window.innerWidth > 992 && setShowDropdown(true)} 
          onMouseLeave={() => window.innerWidth > 992 && setShowDropdown(false)}
          style={{ position: "relative", textAlign: "center" }}
        >
          <span 
            className="nav-link" 
            style={styles.linkItem}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Application <small>▼</small>
          </span>
          <div className="dropdown-menu-custom" style={styles.dropdownMenu}>
            <div className="dropdown-item" onClick={() => handleNavClick("user-version")} style={{padding: "12px", cursor: "pointer", color: "#1e3a8a", fontWeight: "600"}}>👤 Utilisateur</div>
            <div className="dropdown-item" onClick={() => handleNavClick("driver-version")} style={{padding: "12px", cursor: "pointer", color: "#1e3a8a", fontWeight: "600"}}>🚕 Chauffeur</div>
          </div>
        </li>

<li 
  className="nav-link" 
  onClick={() => { 
    setIsMobileMenuOpen(false);
    navigate("/business");
    // On force le scroll juste après le changement de route
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }} 
  style={{
    ...styles.linkItem, 
    color: location.pathname === "/business" ? "#62a15b" : "#ffffff",
    cursor: "pointer"
  }}
>
  Business
</li>
        {/* Bouton Télécharger (Visible UNIQUEMENT dans le menu mobile ouvert) */}
        <li className="mobile-download-btn" style={{ padding: "0 20px" }}>
           <button style={{ width: "100%", backgroundColor: "#62a15b", color: "white", padding: "12px", borderRadius: "10px", border: "none", fontWeight: "800"}}>
             Télécharger l'app
           </button>
        </li>
      </ul>

      {/* BOUTON DESKTOP (Masqué sur mobile) */}
      <div className="nav-right-buttons" style={{ display: "flex", gap: "20px" }}>
        <button style={{ backgroundColor: "#62a15b", color: "white", padding: "10px 20px", borderRadius: "10px", border: "none", fontWeight: "800", cursor: "pointer"}}>
          Télécharger
        </button>
      </div>
    </nav>
  );
};

export default TestNavbar;
