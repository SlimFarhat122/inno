import React from "react";
import { Link } from 'react-router-dom';

const theme = {
  green: "#62A15B",
  dark: "#0F172A", // On remplace le bleu par votre gris foncé
  muted: "#94A3B8",
  bg: "#FAFAF9",
  border: "rgba(255, 255, 255, 0.1)",
};

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: theme.dark,
      color: "#ffffff",
      padding: "100px 8% 40px 8%",
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "60px",
      marginBottom: "80px",
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
    logoText: {
      fontSize: "28px",
      fontWeight: "900",
      letterSpacing: "-0.03em",
    },
    brandDesc: {
      color: theme.muted,
      lineHeight: "1.7",
      fontSize: "15px",
      maxWidth: "340px",
      marginBottom: "30px",
    },
    socialLinks: {
      display: "flex",
      gap: "12px",
    },
    socialIcon: {
      width: "48px",
      height: "48px",
      borderRadius: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      textDecoration: "none",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    linkCol: {
      flex: "1",
      minWidth: "180px",
    },
    colTitle: {
      fontSize: "14px",
      fontWeight: "800",
      color: theme.green,
      marginBottom: "30px",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: "15px",
    },
    link: {
      color: theme.muted,
      textDecoration: "none",
      fontSize: "15px",
      transition: "all 0.3s ease",
    },
    bottomBar: {
      borderTop: `1px solid ${theme.border}`,
      paddingTop: "30px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      color: "#64748b",
      fontSize: "14px",
    }
  };

  const socials = [
    { name: "Facebook", url: "https://www.facebook.com/share/1ZXcZ3bWus/?mibextid=wwXIfr", svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
    { name: "Instagram", url: "https://www.instagram.com/inno.tn?igsh=ajRiaXR1b3F4OGd0", svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "TikTok", url: "https://www.tiktok.com/@innotunisie?_r=1&_t=ZS-93tDgQEp9C0", svg: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.74.12-.69.29-1.27.87-1.62 1.51-.76 1.33-.42 3.07.8 4.09.66.52 1.51.76 2.35.78 1.31-.01 2.5-.81 3-2.04.24-.52.33-1.1.34-1.67.02-3.22.02-6.44.02-9.65z" }
  ];

  return (
    <footer style={styles.footer}>
      {/* Petit reflet vert dans le coin pour le style */}
      <div style={{
        position: "absolute", bottom: "-100px", right: "-100px",
        width: "300px", height: "300px", background: `${theme.green}15`,
        filter: "blur(100px)", borderRadius: "50%"
      }} />

      <div style={styles.container}>
        <div style={styles.brandCol}>
          <div style={styles.logoSection}>
            <div style={{ 
              width: "30px", height: "30px", backgroundColor: theme.green, 
              borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: "900", color: theme.dark, fontSize: "12px"
            }}>IN</div>
            <span style={styles.logoText}>INNO</span>
          </div>
          <p style={styles.brandDesc}>
            L'application qui révolutionne vos déplacements en taxi. Sécurisé, rapide et disponible à Tunis, Sfax et Gabès.
          </p>
          
          <div style={styles.socialLinks}>
            {socials.map((social, index) => (
              <a 
                key={index} href={social.url} target="_blank" rel="noopener noreferrer" 
                style={styles.socialIcon}
                className="social-hover"
              >
                <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "white" }}>
                  <path d={social.svg} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div style={styles.linkCol}>
          <h4 style={styles.colTitle}>Navigation</h4>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}><a href="#about" style={styles.link} className="footer-link">À Propos</a></li>
            <li style={styles.linkItem}><a href="#user" style={styles.link} className="footer-link">Passager</a></li>
            <li style={styles.linkItem}><a href="#driver" style={styles.link} className="footer-link">Chauffeur</a></li>
            <li style={styles.linkItem}><a href="#contact" style={styles.link} className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div style={styles.linkCol}>
          <h4 style={styles.colTitle}>Contact</h4>
          <div style={{ marginBottom: "15px", display: "flex", gap: "10px", color: theme.muted, fontSize: "15px" }}>
            <span style={{ color: theme.green }}>📍</span> Tunis, Sfax & Gabès
          </div>
          <div style={{ marginBottom: "15px", display: "flex", gap: "10px", color: theme.muted, fontSize: "15px" }}>
            <span style={{ color: theme.green }}>📞</span> +216 58 000 800
          </div>
          <div style={{ display: "flex", gap: "10px", color: theme.muted, fontSize: "15px" }}>
            <span style={{ color: theme.green }}>✉️</span> contact@inno.tn
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div>&copy; {new Date().getFullYear()} INNO. Tous droits réservés.</div>
        <div style={{ display: 'flex', gap: '25px' }}>
          <Link to="/privacy-policy/" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Confidentialité</Link>
          <Link to="/condition-of-use/" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">Conditions</Link>
        </div>
      </div>

      <style>{`
        .social-hover:hover {
          background-color: ${theme.green} !important;
          transform: translateY(-5px);
          border-color: ${theme.green} !important;
        }
        .footer-link:hover {
          color: ${theme.green} !important;
          padding-left: 5px;
        }
        .footer-link { transition: all 0.3s ease !important; }
      `}</style>
    </footer>
  );
};

export default Footer;