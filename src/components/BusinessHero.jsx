import React from "react";
// Assurez-vous que le chemin correspond à votre fichier bus.jpeg renommé en bus.png
import taxiBusiness from "../assets/taxi.png"; 

const BusinessHero = () => {
  const styles = {
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "140px 8% 100px",
      gap: "40px",
      flexWrap: "wrap",
      background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      minHeight: "85vh",
      overflow: "hidden",
      position: "relative"
    },
    content: { 
      flex: "1", 
      minWidth: "450px",
      zIndex: 2,
      animation: "fadeInUp 0.8s ease-out"
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 16px",
      backgroundColor: "#f0fdf4",
      color: "#166534",
      borderRadius: "100px",
      fontSize: "12px",
      fontWeight: "700",
      marginBottom: "24px",
      border: "1px solid #dcfce7",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    title: { 
      fontSize: "clamp(38px, 5vw, 62px)", 
      fontWeight: "900", 
      color: "#1e3a8a", 
      lineHeight: "1.05", 
      marginBottom: "25px",
      letterSpacing: "-1px"
    },
    highlight: {
      color: "#62a15b",
      position: "relative",
      display: "inline-block"
    },
    desc: { 
      fontSize: "18px", 
      color: "#475569", 
      marginBottom: "40px",
      lineHeight: "1.7",
      maxWidth: "520px"
    },
    btnContainer: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap"
    },
    btnPrimary: { 
      backgroundColor: "#1e3a8a", 
      color: "white", 
      padding: "18px 38px", 
      borderRadius: "12px", 
      border: "none", 
      fontWeight: "800", 
      fontSize: "15px",
      cursor: "pointer",
      boxShadow: "0 20px 40px rgba(30, 58, 138, 0.2)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    btnSecondary: { 
      backgroundColor: "transparent", 
      border: "2px solid #e2e8f0", 
      color: "#1e3a8a", 
      padding: "16px 35px", 
      borderRadius: "12px", 
      fontWeight: "800", 
      fontSize: "15px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    imageSide: { 
      flex: "1.2", 
      position: "relative",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      animation: "fadeInRight 1s ease-out"
    },
    imageWrapper: {
      position: "relative",
      width: "110%", // L'image déborde légèrement pour le style
      maxWidth: "700px",
    },
    img: { 
      width: "100%", 
      height: "auto",
      display: "block",
      // Effet de fondu sur les bords pour intégration pro
      maskImage: "linear-gradient(to left, black 80%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to left, black 80%, transparent 100%)",
    },
    statsCard: {
      position: "absolute",
      top: "10%",
      left: "-5%",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "20px",
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      zIndex: 3,
      border: "1px solid #f1f5f9",
      animation: "float 6s ease-in-out infinite"
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .btn-primary:hover { 
            transform: translateY(-5px); 
            background-color: #62a15b !important;
            box-shadow: 0 25px 50px rgba(98, 161, 91, 0.3);
          }
          .btn-secondary:hover { 
            border-color: #1e3a8a;
            background-color: #f8fafc;
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.content}>
          <div style={styles.badge}>
            <span style={{fontSize: "16px"}}>✨</span> Leader de la mobilité B2B
          </div>
          <h1 style={styles.title}>
            Propulsez votre <br /> 
            <span style={styles.highlight}>Entreprise</span> avec Inno
          </h1>
          <p style={styles.desc}>
            Optimisez vos déplacements professionnels avec une plateforme 
            tout-en-un. Réduisez vos coûts opérationnels jusqu'à <strong>30%</strong> dès le premier mois.
          </p>
          
          <div style={styles.btnContainer}>
            <button className="btn-primary" style={styles.btnPrimary}>
              DÉMARRER MAINTENANT
            </button>
            <button className="btn-secondary" style={styles.btnSecondary}>
              VOIR LES TARIFS
            </button>
          </div>
        </div>

        <div style={styles.imageSide}>
          <div style={styles.imageWrapper}>
            {/* Carte flottante pour le côté "Data/Business" */}
            <div style={styles.statsCard}>
              <span style={{fontSize: "24px", fontWeight: "900", color: "#62a15b"}}>-30%</span>
              <span style={{fontSize: "12px", color: "#64748b", fontWeight: "600", textTransform: "uppercase"}}>Économies moyennes</span>
            </div>

            <img 
              src={taxiBusiness} 
              alt="Inno Business Mobility" 
              style={styles.img} 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessHero;