import React from "react";
// Importez vos images ici
import imgApp1 from "../assets/3.png"; // La carte / Home
import imgApp2 from "../assets/4.png"; // Le paiement
import imgApp3 from "../assets/23.png"; // Le suivi chauffeur

const styles = {
  section: {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    padding: "100px 8%",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
  badgeContainer: {
    textAlign: "center",
    marginBottom: "60px",
  },
  tag: {
    display: "inline-block",
    backgroundColor: "#eff6ff",
    color: "#1e3a8a",
    padding: "8px 20px",
    borderRadius: "100px",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    marginBottom: "20px",
  },
  headerTitle: {
    fontSize: "clamp(32px, 5vw, 52px)",
    fontWeight: "900",
    color: "#1e3a8a",
    margin: "0 0 20px 0",
    letterSpacing: "-1px",
    lineHeight: "1.1",
  },
  headerDesc: {
    fontSize: "19px",
    color: "#64748b",
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: "1.7",
  },
  mainGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: "60px",
    marginTop: "60px",
  },
  leftColumn: {
    flex: "1",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  stepRow: {
    display: "flex",
    gap: "25px",
    position: "relative",
    transition: "transform 0.3s ease",
  },
  stepIconBox: {
    minWidth: "50px",
    height: "50px",
    borderRadius: "15px",
    backgroundColor: "#62a15b",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: "20px",
    boxShadow: "0 10px 20px rgba(98, 161, 91, 0.2)",
    zIndex: 2,
  },
  stepTitle: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#1e3a8a",
    margin: "0 0 8px 0",
  },
  stepBody: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: "1.6",
    margin: 0,
  },
  rightColumnCustom: {
    flex: "1.2",
    position: "relative",
    height: "600px",
    minWidth: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainMockup: {
    width: "280px",
    borderRadius: "35px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
    zIndex: 3,
    position: "relative",
    border: "8px solid #1e3a8a",
  },
  secondaryMockup: {
    position: "absolute",
    width: "240px",
    borderRadius: "30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: "all 0.5s ease",
  },
  footerButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "60px",
  },
  blackBtn: {
    backgroundColor: "#000000",
    padding: "12px 24px",
    borderRadius: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
    textDecoration: "none", // Pour enlever le soulignement du lien
  }
};

const UserVersion = () => {
  const steps = [
    { title: "Télécharger l'application INNO", desc: "Installez l'application et créez votre compte avec votre numéro de téléphone.", icon: "📲" },
    { title: "Réserver un taxi", desc: "Indiquez votre destination et trouvez un chauffeur en quelques secondes.", icon: "📍" },
    { title: "Payer en toute sécurité", desc: "Payez en espèces ou via votre solde Inno en toute sérénité.", icon: "💳" }
  ];

  return (
    <section id="user-version" style={styles.section}>
      <div style={styles.badgeContainer}>
        <span style={styles.tag}>Expérience Passager</span>
        <h2 style={styles.headerTitle}>Version Utilisateur</h2>
        <p style={styles.headerDesc}>
          Une interface élégante pour des déplacements simplifiés.
        </p>
      </div>

      <div style={styles.mainGrid}>
        <div style={styles.leftColumn}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepRow}>
              <div style={styles.stepIconBox}>{index + 1}</div>
              <div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepBody}>{step.desc}</p>
              </div>
            </div>
          ))}
          <div style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#f8fafc",
            borderRadius: "15px",
            borderLeft: "5px solid #62a15b",
            color: "#1e3a8a",
            fontWeight: "700"
          }}>
            🛡️ Sécurité et traçabilité de chaque course.
          </div>
        </div>

        <div style={styles.rightColumnCustom} className="mockup-container">
          <img 
            src={imgApp2} 
            alt="Paiement" 
            style={{
              ...styles.secondaryMockup,
              left: "0",
              top: "50px",
              zIndex: 1,
              transform: "rotate(-10deg)",
              opacity: "0.8"
            }} 
          />

          <img 
            src={imgApp1} 
            alt="Carte" 
            style={styles.mainMockup} 
          />

          <img 
            src={imgApp3} 
            alt="Suivi Chauffeur" 
            style={{
              ...styles.secondaryMockup,
              right: "0",
              bottom: "50px",
              zIndex: 2,
              transform: "rotate(10deg)"
            }} 
          />
          
          <div style={{
            position: "absolute",
            width: "450px",
            height: "450px",
            backgroundColor: "rgba(30, 58, 138, 0.05)",
            borderRadius: "50%",
            zIndex: 0
          }} />
        </div>
      </div>

      <div style={styles.footerButtons}>
        {/* LIEN PLAY STORE CONNECTÉ */}
        <a 
          href="https://play.google.com/store/apps/details?id=tn.innocustomer.android" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.blackBtn}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" style={{ height: "40px" }} />
        </a>

        {/* LIEN APP STORE (À REMPLACER QUAND DISPONIBLE) */}
        <a 
          href="#" 
          style={styles.blackBtn}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: "40px" }} />
        </a>
      </div>
    </section>
  );
};

export default UserVersion;