import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#1e3a8a",
      color: "#ffffff",
      padding: "80px 8% 40px 8%",
      fontFamily: "'Inter', sans-serif",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px",
      marginBottom: "60px",
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
      letterSpacing: "1px",
    },
    brandDesc: {
      color: "#94a3b8",
      lineHeight: "1.6",
      fontSize: "15px",
      maxWidth: "320px",
      marginBottom: "25px",
    },
    socialLinks: {
      display: "flex",
      gap: "15px",
    },
    socialIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "12px",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
    },
    svgIcon: {
      width: "22px",
      height: "22px",
      fill: "#ffffff",
    },
    linkCol: {
      flex: "1",
      minWidth: "180px",
    },
    colTitle: {
      fontSize: "16px",
      fontWeight: "800",
      color: "#ffffff",
      marginBottom: "30px",
      textTransform: "uppercase",
      letterSpacing: "1px",
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
      color: "#94a3b8",
      textDecoration: "none",
      fontSize: "15px",
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "20px",
      color: "#94a3b8",
      fontSize: "15px",
    },
    iconWrap: {
      color: "#62a15b",
      fontSize: "18px",
    },
    bottomBar: {
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      paddingTop: "30px",
      textAlign: "center",
      color: "#64748b",
      fontSize: "14px",
    }
  };

  // Liens officiels fournis
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1ZXcZ3bWus/?mibextid=wwXIfr",
      svg: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/inno.tn?igsh=ajRiaXR1b3F4OGd0",
      svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@innotunisie?_r=1&_t=ZS-93tDgQEp9C0",
      svg: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.9-.23-2.74.12-.69.29-1.27.87-1.62 1.51-.76 1.33-.42 3.07.8 4.09.66.52 1.51.76 2.35.78 1.31-.01 2.5-.81 3-2.04.24-.52.33-1.1.34-1.67.02-3.22.02-6.44.02-9.65z"
    }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Colonne 1 : Branding & Socials */}
        <div style={styles.brandCol}>
          <div style={styles.logoSection}>
            <div style={{ width: "24px", height: "24px", backgroundColor: "#62a15b", borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)" }}></div>
            <span style={styles.logoText}>INNO</span>
          </div>
          <p style={styles.brandDesc}>
            L'application qui révolutionne vos déplacements en taxi. Sécurisé, rapide et disponible partout en Tunisie.
          </p>
          
          <div style={styles.socialLinks}>
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#62a15b";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg viewBox="0 0 24 24" style={styles.svgIcon}>
                  <path d={social.svg} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Colonne 2 : Liens Rapides */}
        <div style={styles.linkCol}>
          <h4 style={styles.colTitle}>Liens Rapides</h4>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}><a href="#about" style={styles.link}>À Propos</a></li>
            <li style={styles.linkItem}><a href="#user-version" style={styles.link}>Version Utilisateur</a></li>
            <li style={styles.linkItem}><a href="#driver-version" style={styles.link}>Version Chauffeur</a></li>
            <li style={styles.linkItem}><a href="mailto:contact@inno-taxi.tn" style={styles.link}>Contact Support</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div style={styles.linkCol}>
          <h4 style={styles.colTitle}>Contact</h4>
          <div style={styles.contactItem}>
            <span style={styles.iconWrap}>📍</span>
            <span>Tunis, Tunisie</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.iconWrap}>📞</span>
            <span>+216 51 037 800</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.iconWrap}>✉️</span>
            <span>contact@inno.tn</span>
          </div>
        </div>

      </div>

      <div style={styles.bottomBar}>
        &copy; {new Date().getFullYear()} INNO. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;