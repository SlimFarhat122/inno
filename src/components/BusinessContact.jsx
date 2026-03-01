import React from "react";

const BusinessContact = () => {
  const colors = {
    primaryBlue: "#0B31AF",
    electricBlue: "#3B82F6",
    slate900: "#0F172A",
    slate800: "#1E293B",
    glassBorder: "rgba(255, 255, 255, 0.08)",
  };

  const styles = {
    section: {
      padding: "100px 5%",
      backgroundColor: colors.slate900,
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden"
    },
    header: {
      maxWidth: "800px",
      margin: "0 auto 60px",
      textAlign: "center",
    },
    title: {
      fontSize: "clamp(32px, 5vw, 48px)",
      color: "#ffffff",
      fontWeight: "900",
      lineHeight: "1.1",
      letterSpacing: "-0.03em",
      marginBottom: "20px"
    },
    subtitle: {
      color: "#94a3b8",
      fontSize: "18px",
      fontWeight: "400"
    },
    tileGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1100px",
      margin: "0 auto 60px"
    },
    actionTile: {
      padding: "24px",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      border: `1px solid ${colors.glassBorder}`,
      color: "#ffffff",
      textAlign: "left",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: "40px",
      maxWidth: "1100px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2
    },
    formContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      padding: "50px",
      borderRadius: "32px",
      border: `1px solid ${colors.glassBorder}`,
      backdropFilter: "blur(10px)",
    },
    inputGroup: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "25px",
      marginBottom: "25px"
    },
    label: {
      fontSize: "12px",
      fontWeight: "700",
      color: "#64748b",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "10px",
      display: "block"
    },
    input: {
      width: "100%",
      padding: "14px 18px",
      borderRadius: "12px",
      border: `1px solid ${colors.glassBorder}`,
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      color: "#ffffff",
      fontSize: "15px",
      transition: "0.3s",
      outline: "none"
    },
    textarea: {
      width: "100%",
      padding: "14px 18px",
      borderRadius: "12px",
      border: `1px solid ${colors.glassBorder}`,
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      color: "#ffffff",
      fontSize: "15px",
      minHeight: "120px",
      outline: "none",
      resize: "none"
    },
    submitBtn: {
      width: "100%",
      marginTop: "30px",
      padding: "18px",
      borderRadius: "14px",
      border: "none",
      backgroundColor: colors.primaryBlue,
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "800",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      boxShadow: `0 10px 30px rgba(11, 49, 175, 0.3)`
    },
    infoSidebar: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px"
    },
    contactLink: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "16px",
      marginBottom: "35px",
      opacity: 0.8,
      transition: "0.3s"
    },
    iconCircle: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px"
    },
    statusBadge: {
      padding: "6px 12px",
      borderRadius: "100px",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      color: "#22c55e",
      fontSize: "12px",
      fontWeight: "700",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "20px"
    }
  };

  return (
    <section id="business-contact" style={styles.section}>
      {/* Background Glow */}
      <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "400px", height: "400px", backgroundColor: "rgba(11, 49, 175, 0.15)", filter: "blur(100px)", borderRadius: "50%" }}></div>

      <header style={styles.header}>
        <h2 style={styles.title}>Passez à la vitesse supérieure</h2>
        <p style={styles.subtitle}>Solutions de mobilité sur mesure pour entreprises ambitieuses.</p>
      </header>

      <div style={styles.tileGrid}>
        <div className="action-tile" style={styles.actionTile}>
          <span style={{ fontSize: "24px" }}></span>
          <span style={{ fontWeight: "800" }}>Demo Live</span>
          <span style={{ fontSize: "13px", opacity: 0.6 }}>Explorez l'interface avec un expert.</span>
        </div>
        <div className="action-tile" style={styles.actionTile}>
          <span style={{ fontSize: "24px" }}></span>
          <span style={{ fontWeight: "800" }}>Devis Express</span>
          <span style={{ fontSize: "13px", opacity: 0.6 }}>Réponse personnalisée sous 24h.</span>
        </div>
        <div className="action-tile" style={styles.actionTile}>
          <span style={{ fontSize: "24px" }}></span>
          <span style={{ fontWeight: "800" }}>Essai Gratuit</span>
          <span style={{ fontSize: "13px", opacity: 0.6 }}>Testez nos services sans engagement.</span>
        </div>
      </div>

      <div style={styles.mainGrid}>
        <div style={styles.formContainer}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={styles.inputGroup}>
              <div>
                <label style={styles.label}>Nom complet</label>
                <input type="text" placeholder="Jean Dupont" style={styles.input} className="custom-input" />
              </div>
              <div>
                <label style={styles.label}>Entreprise</label>
                <input type="text" placeholder="Inno Corp" style={styles.input} className="custom-input" />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <div>
                <label style={styles.label}>Email Business</label>
                <input type="email" placeholder="jean@entreprise.tn" style={styles.input} className="custom-input" />
              </div>
              <div>
                <label style={styles.label}>Téléphone</label>
                <input type="tel" placeholder="+216 -- --- ---" style={styles.input} className="custom-input" />
              </div>
            </div>
            <div>
              <label style={styles.label}>Votre projet</label>
              <textarea placeholder="Décrivez brièvement vos besoins de mobilité..." style={styles.textarea} className="custom-input"></textarea>
            </div>
            <button style={styles.submitBtn} className="btn-primary">Lancer la discussion</button>
          </form>
        </div>

        <div style={styles.infoSidebar}>
          <div>
            <div style={styles.statusBadge}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e" }}></span>
              Support Business disponible
            </div>
            <a href="mailto:business@inno.tn" style={styles.contactLink} className="sidebar-link">
              <div style={styles.iconCircle}>✉️</div>
              business@inno.tn
            </a>
            <a href="tel:+21629606606" style={styles.contactLink} className="sidebar-link">
              <div style={styles.iconCircle}>📞</div>
              +216 29 606 606
            </a>
            <a href="#" style={styles.contactLink} className="sidebar-link">
              <div style={styles.iconCircle}>🌐</div>
              Portail Entreprise
            </a>
          </div>

          <div style={{ borderTop: `1px solid ${colors.glassBorder}`, paddingTop: "30px" }}>
            <div style={{ fontSize: "28px", fontWeight: "900", color: "#fff", letterSpacing: "2px" }}>INNO</div>
            <div style={{ fontSize: "12px", color: colors.primaryBlue, fontWeight: "800", letterSpacing: "5px" }}>BUSINESS</div>
          </div>
        </div>
      </div>

      <style>
        {`
          .action-tile:hover {
            background-color: rgba(255, 255, 255, 0.08);
            transform: translateY(-5px);
            border-color: ${colors.primaryBlue};
          }
          .custom-input:focus {
            border-color: ${colors.primaryBlue} !important;
            box-shadow: 0 0 0 4px rgba(11, 49, 175, 0.1);
          }
          .btn-primary:hover {
            transform: scale(1.02);
            filter: brightness(1.1);
          }
          .sidebar-link:hover {
            opacity: 1;
            color: ${colors.electricBlue};
          }
          @media (max-width: 900px) {
            #business-contact > div { grid-template-columns: 1fr !important; }
            .sidebar-link { margin-bottom: 15px; }
          }
        `}
      </style>
    </section>
  );
};

export default BusinessContact;