import React from "react";
// Assurez-vous que dashboardImg pointe vers une capture d'écran de haute qualité
import dashboardImg from "../assets/logo.png"; 

const BusinessFeatures = () => {
  const features = [
    {
      title: "Gestion des équipes",
      desc: "Administrez les comptes, définissez des budgets et contrôlez les rôles en temps réel.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
      accent: "#3b82f6"
    },
    {
      title: "Politiques de voyage",
      desc: "Automatisez la conformité avec des règles personnalisées par département ou projet.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      accent: "#10b981"
    },
    {
      title: "Suivi Live GPS",
      desc: "Gardez un œil sur chaque trajet pour garantir la sécurité et la ponctualité.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      ),
      accent: "#f59e0b"
    },
    {
      title: "Analyses & ROI",
      desc: "Visualisez vos économies et optimisez vos flux financiers avec des rapports IA.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      ),
      accent: "#6366f1"
    }
  ];

  const styles = {
    section: {
      padding: "120px 8%",
      backgroundColor: "#fcfdfe",
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden"
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "100px",
      alignItems: "center"
    },
    badge: {
      color: "#62a15b",
      fontWeight: "800",
      fontSize: "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      display: "block",
      marginBottom: "15px"
    },
    mainTitle: {
      fontSize: "clamp(32px, 5vw, 48px)",
      color: "#1e3a8a",
      fontWeight: "900",
      lineHeight: "1.1",
      marginBottom: "60px"
    },
    featureList: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    },
    card: {
      padding: "30px",
      borderRadius: "24px",
      display: "flex",
      gap: "25px",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      border: "1px solid transparent",
      backgroundColor: "transparent"
    },
    iconWrapper: (color) => ({
      minWidth: "60px",
      height: "60px",
      borderRadius: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
      color: color,
      transition: "all 0.3s ease"
    }),
    imgContainer: {
      position: "relative",
      padding: "20px"
    },
    blob: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "120%",
      height: "120%",
      background: "radial-gradient(circle, rgba(98,161,91,0.1) 0%, rgba(255,255,255,0) 70%)",
      zIndex: 0
    },
    mockup: {
      position: "relative",
      zIndex: 1,
      borderRadius: "30px",
      boxShadow: "0 50px 100px -20px rgba(0,0,0,0.2), 0 30px 60px -30px rgba(0,0,0,0.3)",
      width: "100%",
      transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
      transition: "transform 0.5s ease"
    },
    floatingCard: {
      position: "absolute",
      top: "10%",
      right: "-5%",
      backgroundColor: "#1e3a8a",
      color: "white",
      padding: "20px",
      borderRadius: "20px",
      zIndex: 2,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      animation: "float 4s ease-in-out infinite"
    }
  };

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .feature-card:hover {
            background-color: #ffffff !important;
            border-color: #e5eaf2 !important;
            transform: scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          }
          .feature-card:hover .icon-box {
            transform: scale(1.1) rotate(-5deg);
            background-color: #1e3a8a !important;
            color: white !important;
          }
          .mockup-img:hover {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg) !important;
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Texte et Features */}
        <div>
          <span style={styles.badge}>Outil de Pilotage</span>
          <h2 style={styles.mainTitle}>
            Un dashboard conçu pour la performance
          </h2>
          
          <div style={styles.featureList}>
            {features.map((f, i) => (
              <div key={i} className="feature-card" style={styles.card}>
                <div className="icon-box" style={styles.iconWrapper(f.accent)}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "20px", color: "#1e3a8a", fontWeight: "800", marginBottom: "8px" }}>
                    {f.title}
                  </h4>
                  <p style={{ color: "#64748b", lineHeight: "1.6", fontSize: "15px", maxWidth: "400px" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup Dynamique */}
        <div style={styles.imgContainer}>
          <div style={styles.blob}></div>
          <div style={styles.floatingCard}>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>Dépenses ce mois</div>
            <div style={{ fontSize: "24px", fontWeight: "900" }}>-28.5%</div>
          </div>
          <img 
            src={dashboardImg} 
            alt="Dashboard INNO" 
            className="mockup-img"
            style={styles.mockup}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;