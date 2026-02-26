import React, { useState } from "react";
// Importez vos images ici
import imgDashboard from "../assets/dashborad.png"; 
import imgFacturation from "../assets/facturation.png";
import imgAppEmploye from "../assets/planification.png";

const BusinessPlatform = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const platformData = {
    dashboard: {
      tag: "Pilotage",
      title: "Optimisez votre gestion de flotte",
      features: [
        "Gestion simplifiée des employés et des rôles.",
        "Politiques de voyage configurables et conformes.",
        "Suivi des déplacements en temps réel et alertes.",
        "Rapports analytiques détaillés sur l'utilisation.",
        "Contrôle budgétaire et optimisation des coûts."
      ],
      image: imgDashboard
    },
    facturation: {
      tag: "Finance",
      title: "Simplifiez votre comptabilité",
      features: [
        "Regroupement automatique des courses et factures.",
        "Export comptable prêt à l'emploi (Excel/PDF).",
        "Validation multi-niveaux pour la gouvernance.",
        "Alertes sur dépassements et anomalies de dépenses."
      ],
      image: imgFacturation
    },
    application: {
      tag: "Mobilité",
      title: "L'expérience passager réinventée",
      features: [
        "Commandes de trajets rapides et intuitives.",
        "Notifications en temps réel et suivi chauffeur.",
        "Historique complet et gestion des justificatifs.",
        "Assistance dédiée disponible 24/7."
      ],
      image: imgAppEmploye
    }
  };

  const styles = {
    section: {
      padding: "60px 10%", // Réduit de 100px à 60px
      backgroundColor: "#ffffff",
      fontFamily: "'Inter', sans-serif",
    },
    header: {
      maxWidth: "600px",
      margin: "0 auto 40px",
      textAlign: "center"
    },
    badge: {
      backgroundColor: "#f0fdf4",
      color: "#166534",
      padding: "5px 14px",
      borderRadius: "100px",
      fontSize: "11px",
      fontWeight: "800",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      marginBottom: "15px",
      display: "inline-block",
      border: "1px solid #dcfce7"
    },
    mainTitle: {
      fontSize: "clamp(24px, 3vw, 32px)", // Plus compact
      fontWeight: "900",
      color: "#1e3a8a",
      lineHeight: "1.2"
    },
    tabsWrapper: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "50px", // Réduit de 80px à 50px
    },
    tabsContainer: {
      display: "inline-flex",
      backgroundColor: "#f8fafc",
      padding: "5px",
      borderRadius: "14px",
      gap: "2px",
      border: "1px solid #f1f5f9"
    },
    tab: (isActive) => ({
      padding: "10px 20px",
      fontSize: "13px",
      fontWeight: "700",
      color: isActive ? "#1e3a8a" : "#94a3b8",
      backgroundColor: isActive ? "#ffffff" : "transparent",
      borderRadius: "10px",
      cursor: "pointer",
      border: "none",
      transition: "all 0.2s ease",
      boxShadow: isActive ? "0 4px 10px rgba(0,0,0,0.04)" : "none",
    }),
    contentGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "40px", // Plus serré
      alignItems: "center",
    },
    textSide: {
      textAlign: "left",
      paddingRight: "20px"
    },
    featureTitle: {
      fontSize: "22px", // Réduit de 28px à 22px
      fontWeight: "800",
      color: "#1e3a8a",
      marginBottom: "20px",
      lineHeight: "1.3"
    },
    listItem: {
      listStyle: "none",
      fontSize: "14px", // Plus fin
      color: "#64748b",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    checkIcon: {
      width: "18px",
      height: "18px",
      backgroundColor: "#62a15b",
      color: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      flexShrink: 0
    },
    imageSide: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
    },
    imageCard: {
      width: "85%", // Encore plus petit pour l'élégance
      padding: "8px",
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 30px 60px -12px rgba(30, 58, 138, 0.08)",
      border: "1px solid #f1f5f9",
    },
    mockup: {
      width: "100%",
      borderRadius: "14px",
      display: "block"
    },
    decoration: {
      position: "absolute",
      zIndex: -1,
      width: "110%",
      height: "110%",
      background: "radial-gradient(circle, rgba(98,161,91,0.03) 0%, rgba(255,255,255,0) 70%)",
    }
  };

  const current = platformData[activeTab];

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-content {
            animation: fadeInRight 0.5s ease-out;
          }
          .platform-card:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
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

      <div key={activeTab} className="animate-content" style={styles.contentGrid}>
        <div style={styles.textSide}>
          <div style={{ color: "#62a15b", fontWeight: "800", fontSize: "12px", marginBottom: "8px" }}>
            — {current.tag}
          </div>
          <h3 style={styles.featureTitle}>{current.title}</h3>
          <ul style={{ padding: 0 }}>
            {current.features.map((feature, index) => (
              <li key={index} style={styles.listItem}>
                <div style={styles.checkIcon}>✓</div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.imageSide}>
          <div style={styles.decoration}></div>
          <div className="platform-card" style={styles.imageCard}>
            <img 
              src={current.image} 
              alt={activeTab} 
              style={styles.mockup} 
              onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/f1f5f9/94a3b8?text=Aperçu+Inno"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlatform;