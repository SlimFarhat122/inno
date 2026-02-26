import React from "react";
// Importez vos images chauffeur ici
import imgDash from "../assets/11.png"; // Tableau de bord / Map
import imgProfile from "../assets/13.png"; // Profil / Documents
import imgStats from "../assets/19.png"; // Statistiques de revenus

const styles = {
  section: {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    padding: "100px 8%",
    backgroundColor: "#fcfdfc", // Un blanc légèrement teinté de vert
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
    backgroundColor: "#ecfdf5",
    color: "#065f46",
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
    lineHeight: "1.1",
  },
  headerDesc: {
    fontSize: "19px",
    color: "#64748b",
    maxWidth: "800px",
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
    marginTop: "40px",
  },
  leftColumnCustom: {
    flex: "1.3",
    position: "relative",
    height: "600px",
    minWidth: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainMockup: {
    width: "270px",
    borderRadius: "35px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
    zIndex: 3,
    position: "relative",
    border: "8px solid #62a15b", 
  },
  secondaryMockup: {
    position: "absolute",
    width: "230px",
    borderRadius: "30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: "all 0.5s ease",
  },
  rightColumn: {
    flex: "1",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "35px",
  },
  stepRow: {
    display: "flex",
    gap: "25px",
    transition: "transform 0.3s ease",
  },
  stepNumber: {
    minWidth: "50px",
    height: "50px",
    borderRadius: "15px",
    backgroundColor: "#1e3a8a",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: "20px",
  },
  stepTitle: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#1e3a8a",
    margin: "0 0 8px 0",
  },
  stepText: {
    fontSize: "15px",
    color: "#64748b",
    lineHeight: "1.6",
    margin: 0,
  },
  storeButtons: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  },
  blackBtn: {
    backgroundColor: "#000000",
    padding: "10px 20px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "transform 0.2s",
    textDecoration: "none", // Important pour les balises <a>
  }
};

function Chauffeur() {
  const steps = [
    {
      title: "Devenir Chauffeur INNO",
      desc: "Inscrivez-vous en ligne, soumettez vos documents et commencez à rouler une fois validé.",
      icon: "📩"
    },
    {
      title: "Gérez vos revenus",
      desc: "Suivez vos gains en temps réel et optimisez votre emploi du temps avec notre tableau de bord.",
      icon: "📊"
    },
    {
      title: "Assistance 24/7",
      desc: "Profitez d'un support dédié pour vous accompagner à chaque étape de votre activité.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="driver-version" style={styles.section}>
      <div style={styles.badgeContainer}>
        <span style={styles.tag}>Opportunité de revenus</span>
        <h2 style={styles.headerTitle}>Version Chauffeur</h2>
        <p style={styles.headerDesc}>
          Rejoignez la communauté des chauffeurs INNO et transformez votre véhicule en source de revenus flexible.
        </p>
      </div>

      <div style={styles.mainGrid}>
        
        {/* COMBINAISON DE PHOTOS À GAUCHE */}
        <div style={styles.leftColumnCustom}>
          <img 
            src={imgStats} 
            alt="Revenus" 
            style={{
              ...styles.secondaryMockup,
              right: "20px",
              top: "40px",
              zIndex: 1,
              transform: "rotate(8deg)",
              opacity: "0.8"
            }} 
          />

          <img 
            src={imgDash} 
            alt="Dashboard Chauffeur" 
            style={styles.mainMockup} 
          />

          <img 
            src={imgProfile} 
            alt="Profil Chauffeur" 
            style={{
              ...styles.secondaryMockup,
              left: "20px",
              bottom: "40px",
              zIndex: 2,
              transform: "rotate(-8deg)"
            }} 
          />
          
          <div style={{
            position: "absolute",
            width: "480px",
            height: "480px",
            backgroundColor: "rgba(98, 161, 91, 0.07)",
            borderRadius: "50%",
            zIndex: 0
          }} />
        </div>

        {/* CONTENU TEXTE À DROITE */}
        <div style={styles.rightColumn}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepRow}>
              <div style={styles.stepNumber}>{index + 1}</div>
              <div>
                <h3 style={styles.stepTitle}>
                  <span style={{marginRight: '8px'}}>{step.icon}</span>
                  {step.title}
                </h3>
                <p style={styles.stepText}>{step.desc}</p>
              </div>
            </div>
          ))}

          <div style={styles.storeButtons}>
            {/* LIEN PLAY STORE CONNECTÉ */}
            <a 
              href="https://play.google.com/store/apps/details?id=tn.innocustomer.android" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.blackBtn}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" style={{height: '35px'}} />
            </a>

            {/* LIEN APP STORE */}
            <a 
              href="#" 
              style={styles.blackBtn}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{height: '35px'}} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chauffeur;