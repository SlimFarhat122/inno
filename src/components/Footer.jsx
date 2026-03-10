import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isBusinessPage = location.pathname === "/business";

  const theme = {
    primaryMarine: "#003da6",
    dynamicCyan:   "#0084cc",
    primaryGreen:  "#49ce54",
    noir:          "#0a0e1a",
    dark:          "#003da6",
    muted:         "#475569",
    white:         "#ffffff",
    gris:          "#f4f7fc",
    border:        "rgba(0, 61, 166, 0.07)",
  };

  const activeColor = isBusinessPage ? theme.dynamicCyan : theme.primaryGreen;

  const styles = {
    footer: {
      backgroundColor: theme.white,
      backgroundImage: `
        radial-gradient(circle at 95% 5%,  rgba(0,61,166,0.06)  0%, transparent 50%),
        radial-gradient(circle at 5%  95%, rgba(73,206,84,0.08) 0%, transparent 50%)
      `,
      color: theme.noir,
      padding: "80px 8% 40px 8%",
      fontFamily: "'Cairo', 'Open Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "60px",
      marginBottom: "60px",
      position: "relative",
      zIndex: 2,
    },
    brandCol: {
      flex: "1.5",
      minWidth: "280px",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "25px",
    },
    logoIn: {
      width: "35px",
      height: "35px",
      backgroundColor: isBusinessPage ? theme.primaryMarine : theme.primaryGreen,
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "800",
      color: "#ffffff",
      fontSize: "14px",
      fontFamily: "'Montserrat', sans-serif",
      transition: "all 0.4s ease",
      border: isBusinessPage ? `1px solid ${theme.dynamicCyan}` : "none",
    },
    logoText: {
      fontSize: "26px",
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "1px",
      color: theme.noir,
    },
    brandDesc: {
      color: theme.muted,
      lineHeight: "1.8",
      fontSize: "15px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: "400",
      maxWidth: "360px",
      marginBottom: "30px",
    },
    socialIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "10px",
      backgroundColor: theme.gris,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      border: `1px solid ${theme.border}`,
    },
    colTitle: {
      fontSize: "13px",
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
      color: activeColor,
      marginBottom: "30px",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    linkItem: {
      marginBottom: "14px",
      listStyle: "none",
    },
    link: {
      color: theme.muted,
      textDecoration: "none",
      fontSize: "15px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: "400",
      transition: "0.3s ease",
    },
    contactText: {
      fontSize: "15px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: "400",
    },
    bottomBar: {
      borderTop: `1px solid ${theme.border}`,
      paddingTop: "30px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      color: theme.muted,
      fontSize: "13px",
      fontFamily: "'Cairo', sans-serif",
      fontWeight: "400",
      position: "relative",
      zIndex: 10,
    },
  };

  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1ZXcZ3bWus/?mibextid=wwXIfr",
      svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/inno.tn?igsh=ajRiaXR1b3F4OGd0",
      svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@innotunisie?_r=1&_t=ZS-93tDgQEp9C0",
      svg: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.74.12-.69.29-1.27.87-1.62 1.51-.76 1.33-.42 3.07.8 4.09.66.52 1.51.76 2.35.78 1.31-.01 2.5-.81 3-2.04.24-.52.33-1.1.34-1.67.02-3.22.02-6.44.02-9.65z",
    },
  ];

  return (
    <footer style={styles.footer}>

      {/* ── Decorative circles — same as UserExperience Bloc 1 ── */}
      <div style={{
        position:"absolute", top:"-50px", left:"-50px",
        width:"250px", height:"250px",
        background: isBusinessPage ? `${theme.dynamicCyan}08` : `${theme.primaryGreen}08`,
        filter:"blur(80px)", borderRadius:"50%",
        pointerEvents:"none", zIndex:1,
      }}/>
      <div style={{
        position:"absolute", bottom:"-80px", right:"-60px",
        width:"320px", height:"320px",
        background:`${theme.primaryMarine}06`,
        filter:"blur(80px)", borderRadius:"50%",
        pointerEvents:"none", zIndex:1,
      }}/>

      {/* ── Divider top accent ── */}
      <div style={{
        position:"absolute", top:0, left:"8%", right:"8%", height:"2px",
        background:`linear-gradient(90deg, transparent, ${activeColor}40, transparent)`,
        zIndex:2,
      }}/>

      <div style={styles.container}>

        {/* ── Brand col ── */}
        <div style={styles.brandCol}>
          <div style={styles.logoSection}>
            <div style={styles.logoIn}>IN</div>
            <span style={styles.logoText}>INNO</span>
          </div>
          <p style={styles.brandDesc}>
            {isBusinessPage
              ? "Solutions de mobilité intelligentes pour les entreprises tunisiennes. Optimisez vos coûts et simplifiez vos déplacements corporate."
              : "L'application qui révolutionne vos déplacements en taxi. Sécurisé, rapide et disponible à Tunis, Sfax et Gabès."
            }
          </p>

          <div style={{ display:"flex", gap:"12px" }}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                className="footer-social"
              >
                <svg viewBox="0 0 24 24" style={{ width:"18px", height:"18px", fill: theme.muted }}>
                  <path d={social.svg}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── Solutions col ── */}
        <div>
          <h4 style={styles.colTitle}>Solutions</h4>
          <ul style={{ padding:0, margin:0 }}>
            <li style={styles.linkItem}><a href="#business-platform" style={styles.link} className="footer-link">Plateforme B2B</a></li>
            <li style={styles.linkItem}><a href="#business-sectors"  style={styles.link} className="footer-link">Secteurs d'activité</a></li>
            <li style={styles.linkItem}><a href="#business-stats"    style={styles.link} className="footer-link">Indicateurs clés</a></li>
            <li style={styles.linkItem}><a href="#business-contact"  style={styles.link} className="footer-link">Demande de Démo</a></li>
          </ul>
        </div>

        {/* ── Contact col ── */}
        <div>
          <h4 style={styles.colTitle}>Contact Direct</h4>
          <div style={{ marginBottom:"18px", display:"flex", gap:"12px", color:theme.muted, alignItems:"center", ...styles.contactText }}>
            <span style={{ color:activeColor }}>📍</span> Tunis, Sfax &amp; Gabès
          </div>
          <div style={{ marginBottom:"18px", display:"flex", gap:"12px", color:theme.muted, alignItems:"center", ...styles.contactText }}>
            <span style={{ color:activeColor }}>📞</span> +216 58 000 800
          </div>
          <div style={{ display:"flex", gap:"12px", color:theme.muted, alignItems:"center", ...styles.contactText }}>
            <span style={{ color:activeColor }}>✉️</span> {isBusinessPage ? "business@inno.tn" : "contact@inno.tn"}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div style={styles.bottomBar}>
        <div>&copy; {new Date().getFullYear()} INNO BUSINESS. All Rights Reserved.</div>
        <div style={{ display:"flex", gap:"30px" }}>
          <Link to="/privacy-policy/"   style={{ color:"inherit", textDecoration:"none", fontFamily:"'Cairo', sans-serif" }} className="footer-link">politique de confidentialité</Link>
          <Link to="/condition-of-use/" style={{ color:"inherit", textDecoration:"none", fontFamily:"'Cairo', sans-serif" }} className="footer-link">condition d'utilisation</Link>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Cairo:wght@400;600;700&display=swap');

        .footer-social:hover {
          background-color: ${activeColor} !important;
          border-color: ${activeColor} !important;
          transform: translateY(-3px);
        }
        .footer-social:hover svg {
          fill: #ffffff !important;
        }
        .footer-link:hover {
          color: ${activeColor} !important;
          transform: translateX(5px);
        }
        .footer-link {
          display: inline-block;
          transition: all 0.3s ease !important;
        }

        @media (max-width: 820px) {
          footer { padding: 60px 6% 32px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;