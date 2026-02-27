import React, { useState } from "react";
// Importez vos images ici
import imgDashboard from "../assets/dashborad.png"; 
import imgFacturation from "../assets/facturation.png";
import imgAppEmploye from "../assets/planification.png";

const BusinessPlatform = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const platformData = {
    dashboard: { image: imgDashboard },
    facturation: { image: imgFacturation },
    application: { image: imgAppEmploye }
  };

  const styles = {
    section: {
      padding: "40px 5%", 
      backgroundColor: "#ffffff",
      fontFamily: "'Inter', sans-serif",
    },
    header: {
      maxWidth: "800px",
      margin: "0 auto 20px",
      textAlign: "center"
    },
    badge: {
      backgroundColor: "#f0fdf4",
      color: "#166534",
      padding: "5px 15px",
      borderRadius: "100px",
      fontSize: "11px",
      fontWeight: "800",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      marginBottom: "10px",
      display: "inline-block",
      border: "1px solid #dcfce7"
    },
    mainTitle: {
      fontSize: "clamp(22px, 3.5vw, 32px)",
      fontWeight: "900",
      color: "#1e3a8a",
      lineHeight: "1.2",
    },
    tabsWrapper: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
    },
    tabsContainer: {
      display: "inline-flex",
      backgroundColor: "#f8fafc",
      padding: "6px",
      borderRadius: "16px",
      gap: "6px",
      border: "1px solid #f1f5f9"
    },
    tab: (isActive) => ({
      padding: "12px 35px", 
      fontSize: "14px",
      fontWeight: "700",
      color: isActive ? "#1e3a8a" : "#94a3b8",
      backgroundColor: isActive ? "#ffffff" : "transparent",
      borderRadius: "12px",
      cursor: "pointer",
      border: "none",
      transition: "all 0.3s ease",
      boxShadow: isActive ? "0 4px 12px rgba(0, 0, 0, 0.05)" : "none",
    }),
    imageDisplayArea: {
      width: "100%",
      maxWidth: "1100px", // ÉLARGI (L'image s'étale plus sur les côtés)
      margin: "0 auto",
      position: "relative",
      display: "flex",
      justifyContent: "center",
    },
    imageCard: {
      width: "100%",
      padding: "8px",
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 25px 50px -15px rgba(30, 58, 138, 0.1)",
      border: "1px solid #f1f5f9",
      overflow: "hidden" // Important pour contenir l'image
    },
    mockup: {
      width: "100%",
      maxHeight: "450px", // LIMITE LA HAUTEUR (Empêche l'image de devenir trop haute)
      objectFit: "cover", // Coupe légèrement le haut/bas si nécessaire pour rester dans la largeur
      objectPosition: "top", // Garde le haut de l'interface visible
      borderRadius: "14px",
      display: "block"
    }
  };

  const current = platformData[activeTab];

  return (
    <section id="business-platform" style={styles.section}>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-content {
            animation: fadeInUp 0.5s ease-out;
          }
          .platform-card:hover {
            transform: scale(1.005);
            transition: transform 0.4s ease;
          }
          @media (max-width: 768px) {
            .tab-btn { padding: 10px 18px !important; font-size: 12px !important; }
            .platform-mockup { maxHeight: 300px !important; }
          }
        `}
      </style>

      <div style={styles.header}>
        <span style={styles.badge}>Interface Intuitive</span>
        <h2 style={styles.mainTitle}>Une plateforme pensée pour vos équipes</h2>
      </div>

      <div style={styles.tabsWrapper}>
        <div style={styles.tabsContainer}>
          {Object.keys(platformData).map((key) => (
            <button
              key={key}
              className="tab-btn"
              style={styles.tab(activeTab === key)}
              onClick={() => setActiveTab(key)}
            >
              {key === "dashboard" && "Dashboard"}
              {key === "facturation" && "Facturation"}
              {key === "application" && "Application"}
            </button>
          ))}
        </div>
      </div>

      <div key={activeTab} className="animate-content" style={styles.imageDisplayArea}>
        <div className="platform-card" style={styles.imageCard}>
          <img 
            className="platform-mockup"
            src={current.image} 
            alt={activeTab} 
            style={styles.mockup} 
            onError={(e) => { e.target.src = "https://via.placeholder.com/1100x450/f1f5f9/94a3b8?text=Aperçu+Inno"; }}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessPlatform;