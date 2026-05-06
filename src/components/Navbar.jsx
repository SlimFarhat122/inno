import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import innoLogo from "../assets/logo.png"; 
import innoLogo2 from "../assets/INNO Business.png";
import googlePlayLogo from "../assets/google-play.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollPos = useRef(window.scrollY);
  const timeoutRef = useRef(null);
  const downloadTimeoutRef = useRef(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  const theme = {
    green:     "#49ce54",
    blue:      "#003da6",
    blueMid:   "#0084cc",
    darkDeep:  "#060d1f",
    textDark:  "#0a0e1a",
    textLight: "#ffffff",
  };

  const isBusinessPage = location.pathname === "/business";
  const activeColor = isBusinessPage ? theme.blueMid : theme.green;

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

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowDropdown(false), 300);
  };

  const handleDownloadEnter = () => {
    if (downloadTimeoutRef.current) clearTimeout(downloadTimeoutRef.current);
    setShowDownload(true);
  };

  const handleDownloadLeave = () => {
    downloadTimeoutRef.current = setTimeout(() => setShowDownload(false), 300);
  };

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    setShowDropdown(false);

    if (id === "business") {
      navigate("/business");
      setTimeout(() => {
        document.getElementById("root")?.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
      return;
    }

    if (id === "contact" && isBusinessPage) {
      const el = document.getElementById("business-contact");
      const root = document.getElementById("root");
      if (el && root) {
        const top = el.getBoundingClientRect().top + root.scrollTop - 80;
        root.scrollTo({ top, behavior: "smooth" });
      }
      return;
    }

    navigate(`/#${id}`);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  /* ── store links (mirrors Downloadheader) ── */
  const downloadGroups = [
    {
      id: "passenger",
      label: "Passager",
      accent: theme.blue,
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      stores: [
        { id: "apple", label: "App Store",   href: "https://apps.apple.com/us/app/inno-app/id6448847710" },
        { id: "play",  label: "Google Play",  href: "https://play.google.com/store/apps/details?id=tn.innocustomer.android" },
      ],
    },
    {
      id: "driver",
      label: "Chauffeur",
      accent: theme.green,
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
        </svg>
      ),
      stores: [
        { id: "apple", label: "App Store",   href: "https://apps.apple.com/us/app/inno-driver-app/id6760570381" },
        { id: "play",  label: "Google Play",  href: "https://play.google.com/store/apps/details?id=tn.innodriver.android" },
      ],
    },
  ];

  /* ── Apple SVG icon ── */
  const AppleIcon = ({ color }) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={color}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  /* ── Google Play icon ── */
  const GoogleIcon = () => (
    <img src={googlePlayLogo} alt="Google Play" width="15" height="15" style={{ objectFit: "contain", display: "block" }} />
  );

  return (
    <nav style={{
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: scrolled ? "12px 3%" : "18px 3%",
      backgroundColor: scrolled || isMobileMenuOpen ? theme.darkDeep : "rgba(255,255,255,0.92)", 
      backdropFilter: "blur(15px)",
      position: "fixed", 
      top: visible ? "0" : "-100px",
      width: "100%", 
      zIndex: 9999, 
      transition: "all 0.4s ease",
      boxSizing: "border-box",
      borderBottom: scrolled || isMobileMenuOpen ? "none" : "1px solid rgba(0,61,166,0.07)",
    }}>
      <style>{`
        .nav-links-wrapper { 
          display: flex; 
          align-items: center; 
          gap: 56px; 
          list-style: none; 
          margin: 0; 
          padding: 0;
          flex: 1;
          justify-content: center;
          padding-left: 120px;
        }

        .link-item {
          font-size: 17px;
          font-weight: 600;
          color: ${scrolled || isMobileMenuOpen ? theme.textLight : theme.textDark};
          cursor: pointer;
          transition: 0.3s;
          position: relative;
        }

        .link-item:hover { color: ${activeColor} !important; }

        .dropdown-container {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #ffffff;
          border: 1px solid rgba(0,61,166,0.08);
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,61,166,0.1);
          min-width: 180px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }

        .dropdown-link {
          color: #475569;
          font-size: 14px;
          transition: 0.2s;
          display: block;
          cursor: pointer;
        }

        .dropdown-link:hover { color: ${activeColor}; }

        /* ── Download dropdown ── */
        .dl-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          right: 0;
          background: #ffffff;
          border: 1px solid rgba(0,61,166,0.09);
          border-radius: 16px;
          box-shadow: 0 16px 48px rgba(0,61,166,0.13);
          padding: 16px;
          display: flex;
          gap: 12px;
          min-width: 340px;
          animation: dlFadeIn 0.2s cubic-bezier(0.22,1,0.36,1) both;
          z-index: 10002;
        }

        @keyframes dlFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .dl-group {
          flex: 1;
          border-radius: 12px;
          padding: 14px 12px;
          background: #f4f7fc;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dl-group-header {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 4px;
        }

        .dl-group-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .dl-store-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 10px;
          border-radius: 9px;
          border: 1.5px solid;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          transition: all 0.2s ease;
          background: transparent;
          color: #080f1e;
          white-space: nowrap;
        }

        .dl-store-link:hover {
          background: rgba(0,0,0,0.04);
          transform: translateX(2px);
        }

        /* ── Download trigger button ── */
        .dl-trigger-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          background: ${activeColor};
          color: #ffffff;
          padding: 10px 18px;
          border-radius: 100px;
          border: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px ${activeColor}40;
          position: relative;
          white-space: nowrap;
        }

        .dl-trigger-btn:hover {
          box-shadow: 0 6px 20px ${activeColor}60;
          transform: translateY(-1px);
        }

        .dl-trigger-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

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
            border: none;
            box-shadow: none;
            padding: 10px 0;
            align-items: center;
            margin-top: 0;
          }

          .dropdown-link {
            color: ${activeColor} !important;
            font-size: 18px;
            padding: 5px 0;
          }

          .desktop-btn { display: none !important; }
          
          .mobile-contact-btn {
            display: block !important;
            background-color: ${activeColor};
            color: white;
            padding: 15px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            margin-top: 10px;
            transition: background-color 0.3s ease;
          }

          /* Mobile download section inside menu */
          .mobile-download-section {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 100%;
            max-width: 320px;
          }

          .mobile-dl-group {
            width: 100%;
            border-radius: 12px;
            padding: 12px;
            background: rgba(255,255,255,0.06);
          }
        }

        @media (min-width: 993px) {
          .mobile-contact-btn { display: none !important; }
          .hamburger { display: none !important; }
          .mobile-download-section { display: none !important; }
        }
      `}</style>

      {/* Logo */}
      <img 
        src={isBusinessPage ? innoLogo2 : innoLogo} 
        alt="Inno" 
        style={{ 
          height: scrolled ? "46px" : "66px",
          transition: "0.3s", 
          cursor: "pointer",
          position: "relative",
          zIndex: 10001,
        }}
        onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}
      />

      {/* Nav links */}
      <ul className="nav-links-wrapper">
        <li className="link-item" onClick={() => handleNavClick("about")}>À Propos</li>
        
        <li 
          className="link-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => window.innerWidth <= 992 && setShowDropdown(!showDropdown)}
        >
          Services <small style={{ fontSize: "10px" }}>{showDropdown ? "▲" : "▼"}</small>
          {showDropdown && (
            <div className="dropdown-container">
              <div className="dropdown-link" onClick={() => handleNavClick("user-version")}>Passager</div>
              <div className="dropdown-link" onClick={() => handleNavClick("driver-version")}>Chauffeur</div>
            </div>
          )}
        </li>

        <li className="link-item" onClick={() => handleNavClick("business")}>Business</li>

        <li className="mobile-contact-btn" onClick={() => handleNavClick("contact")}>
          Contactez-nous
        </li>

        {/* ── Mobile download section (inside hamburger menu) ── */}
        <li className="mobile-download-section">
          {downloadGroups.map((group) => (
            <div key={group.id} className="mobile-dl-group">
              <div className="dl-group-header" style={{ marginBottom: "8px" }}>
                <span style={{ color: group.accent }}>{group.icon}</span>
                <span className="dl-group-label" style={{ color: group.accent }}>{group.label}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {group.stores.map((store) => (
                  <a
                    key={store.id}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dl-store-link"
                    style={{ borderColor: `${group.accent}40`, color: "#ffffff" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {store.id === "apple"
                      ? <AppleIcon color="#ffffff" />
                      : <GoogleIcon />
                    }
                    {store.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </li>
      </ul>

      {/* ── Desktop right-side buttons ── */}
      <div className="desktop-btn" style={{ display: "flex", alignItems: "center", gap: "10px" }}>

        {/* Download dropdown trigger */}
        <div
          className="dl-trigger-wrapper"
          onMouseEnter={handleDownloadEnter}
          onMouseLeave={handleDownloadLeave}
        >
          <button className="dl-trigger-btn">
            {/* Download icon */}
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger
            <small style={{ fontSize: "9px", opacity: 0.8 }}>{showDownload ? "▲" : "▼"}</small>
          </button>

          {showDownload && (
            <div className="dl-dropdown">
              {downloadGroups.map((group) => (
                <div key={group.id} className="dl-group">

                  {/* Group header */}
                  <div className="dl-group-header">
                    <span style={{ color: group.accent }}>{group.icon}</span>
                    <span className="dl-group-label" style={{ color: group.accent }}>
                      {group.label}
                    </span>
                  </div>

                  {/* Store links */}
                  {group.stores.map((store) => (
                    <a
                      key={store.id}
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dl-store-link"
                      style={{ borderColor: `${group.accent}30` }}
                    >
                      {store.id === "apple"
                        ? <AppleIcon color={group.accent} />
                        : <GoogleIcon />
                      }
                      {store.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact button */}
        <button 
          onClick={() => handleNavClick("contact")}
          style={{
            backgroundColor: "transparent",
            color: scrolled ? theme.textLight : theme.textDark,
            padding: "10px 20px",
            borderRadius: "100px",
            border: `1.5px solid ${scrolled ? "rgba(255,255,255,0.2)" : "rgba(0,61,166,0.2)"}`,
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "700",
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Contact
        </button>
      </div>

      {/* Hamburger */}
      <div 
        className="hamburger"
        style={{ 
          color: scrolled || isMobileMenuOpen ? theme.textLight : theme.textDark, 
          fontSize: "30px", 
          cursor: "pointer",
          zIndex: 10001,
          padding: "5px",
        }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;