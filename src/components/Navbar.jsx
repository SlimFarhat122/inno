import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import innoLogo from "../assets/logo.png"; 
import innoLogo2 from "../assets/logo 2.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollPos = useRef(window.scrollY);
  const timeoutRef = useRef(null); // Référence pour le délai
  
  const navigate = useNavigate();
  const location = useLocation();

  const theme = {
    green: "#62A15B",
    darkDeep: "#030B21",
    textDark: "#1E293B",
    textLight: "#FFFFFF",
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

  // Fonctions pour gérer le délai
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Délai de 300ms
  };

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    setShowDropdown(false);
    if (id === "business") {
      navigate("/business");
    } else {
      navigate(`/#${id}`);
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={{
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: scrolled ? "12px 6%" : "20px 6%",
      backgroundColor: scrolled || isMobileMenuOpen ? theme.darkDeep : "rgba(255, 255, 255, 0.9)", 
      backdropFilter: "blur(15px)",
      position: "fixed", 
      top: visible ? "0" : "-100px",
      width: "100%", 
      zIndex: 9999, 
      transition: "all 0.4s ease",
      boxSizing: "border-box",
      borderBottom: scrolled || isMobileMenuOpen ? "none" : "1px solid rgba(0,0,0,0.05)"
    }}>
      <style>
        {`
          .nav-links-wrapper { 
            display: flex; 
            align-items: center; 
            gap: 40px; 
            list-style: none; 
            margin: 0; 
            padding: 0; 
          }

          .link-item {
            font-size: 14px;
            font-weight: 600;
            color: ${scrolled || isMobileMenuOpen ? theme.textLight : theme.textDark};
            cursor: pointer;
            transition: 0.3s;
            position: relative;
          }

          .link-item:hover { color: ${theme.green} !important; }

          .dropdown-container {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            padding: 15px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            min-width: 180px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
          }

          .dropdown-link {
            color: #334155;
            font-size: 14px;
            transition: 0.2s;
            display: block;
          }

          .dropdown-link:hover { color: ${theme.green}; }

          @media (max-width: 992px) {
            .nav-links-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
              background-color: ${theme.darkDeep};
              flex-direction: column;
              justify-content: center;
              padding: 20px;
              gap: 30px;
              transform: ${isMobileMenuOpen ? "translateY(0)" : "translateY(-100%)"};
              transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
              z-index: -1;
            }

            .link-item {
              font-size: 24px;
              color: white !important;
              text-align: center;
            }

            .dropdown-container {
              position: static;
              background-color: transparent;
              box-shadow: none;
              padding: 10px 0;
              align-items: center;
              margin-top: 0;
            }

            .dropdown-link {
              color: ${theme.green} !important;
              font-size: 18px;
              padding: 5px 0;
            }

            .desktop-btn { display: none; }
            
            .mobile-contact-btn {
              display: block !important;
              background-color: ${theme.green};
              color: white;
              padding: 15px 40px;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 700;
              margin-top: 10px;
            }
          }

          @media (min-width: 993px) {
            .mobile-contact-btn { display: none !important; }
            .hamburger { display: none !important; }
          }
        `}
      </style>

      <img 
        src={location.pathname === "/business" ? innoLogo2 : innoLogo} 
        alt="Inno" 
        style={{ 
          height: scrolled ? "35px" : "45px", 
          transition: "0.3s", 
          cursor: "pointer",
          position: "relative",
          zIndex: 10001
        }}
        onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}
      />

      <ul className="nav-links-wrapper">
        <li className="link-item" onClick={() => handleNavClick("about")}>À Propos</li>
        
        <li 
          className="link-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => window.innerWidth <= 992 && setShowDropdown(!showDropdown)}
        >
          Services <small style={{ fontSize: '10px' }}>{showDropdown ? "▲" : "▼"}</small>
          {showDropdown && (
            <div className="dropdown-container">
              <div className="dropdown-link" onClick={() => handleNavClick("user-version")}>Passager</div>
              <div className="dropdown-link" onClick={() => handleNavClick("driver-version")}>Chauffeur</div>
            </div>
          )}
        </li>

        <li className="link-item" onClick={() => navigate("/business")}>Business</li>

        <li className="mobile-contact-btn" onClick={() => handleNavClick("contact")}>
          Contactez-nous
        </li>
      </ul>

      <div className="desktop-btn">
        <button 
          onClick={() => handleNavClick("contact")}
          style={{
            backgroundColor: theme.green,
            color: "white",
            padding: "10px 25px",
            borderRadius: "100px",
            border: "none",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: `0 4px 15px ${theme.green}40`
          }}
        >
          Contact
        </button>
      </div>

      <div 
        className="hamburger"
        style={{ 
          color: scrolled || isMobileMenuOpen ? "white" : theme.textDark, 
          fontSize: "30px", 
          cursor: "pointer",
          zIndex: 10001,
          padding: "5px"
        }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;