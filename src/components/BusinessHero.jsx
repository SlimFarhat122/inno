import React from "react";
// Assurez-vous que le chemin est correct
import taxiBusiness from "../assets/taxi.png"; 

const BusinessHero = () => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const colors = {
    primaryBlue: "#0B31AF",   // Le bleu de votre logo
    electricBlue: "#2563EB",  // Un bleu plus vif pour le dynamisme
    darkNavy: "#020617",      // Pour le texte et les contrastes profonds
    glassWhite: "rgba(255, 255, 255, 0.8)",
    borderLight: "rgba(11, 49, 175, 0.1)"
  };

  const styles = {
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "180px 10% 120px",
      gap: "40px",
      background: "#FFFFFF",
      minHeight: "100vh",
      overflow: "hidden",
      position: "relative",
      fontFamily: "'Inter', sans-serif",
    },
    // Dégradé de fond subtil pour la profondeur
    bgGradient: {
      position: "absolute",
      top: "-20%",
      right: "-10%",
      width: "600px",
      height: "600px",
      background: `radial-gradient(circle, ${colors.primaryBlue}15 0%, transparent 70%)`,
      filter: "blur(80px)",
      zIndex: 1
    },
    content: { 
      flex: "1", 
      zIndex: 2,
      position: "relative"
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 20px",
      background: "linear-gradient(90deg, #F1F5F9 0%, #FFFFFF 100%)",
      color: colors.primaryBlue,
      borderRadius: "100px",
      fontSize: "12px",
      fontWeight: "800",
      marginBottom: "32px",
      border: `1px solid ${colors.borderLight}`,
      boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
      textTransform: "uppercase",
      letterSpacing: "1.2px"
    },
    title: { 
      fontSize: "clamp(48px, 6.5vw, 84px)", 
      fontWeight: "900", 
      color: colors.darkNavy, 
      lineHeight: "0.95", 
      marginBottom: "35px",
      letterSpacing: "-0.05em"
    },
    desc: { 
      fontSize: "20px", 
      color: "#475569", 
      marginBottom: "50px",
      lineHeight: "1.6",
      maxWidth: "540px",
      fontWeight: "450"
    },
    btnContainer: {
      display: "flex",
      gap: "15px",
    },
    btnPrimary: { 
      backgroundColor: colors.darkNavy, 
      color: "white", 
      padding: "22px 45px", 
      borderRadius: "16px", 
      border: "none", 
      fontWeight: "700", 
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: `0 25px 50px -12px rgba(2, 6, 23, 0.25)`,
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    imageSide: { 
      flex: "1.2", 
      position: "relative",
      display: "flex",
      justifyContent: "flex-end",
      zIndex: 2
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      perspective: "1000px" // Pour un effet 3D léger
    },
    img: { 
      width: "100%", 
      height: "auto",
      transform: "rotateY(-5deg) rotateX(2deg)",
      filter: "drop-shadow(50px 80px 100px rgba(11, 49, 175, 0.15))",
      transition: "transform 0.5s ease"
    },
dataCard: {
    position: "absolute",
    // --- POSITION PLUS HAUTE ET DÉCALÉE ---
    top: "-10%",      // Remonte le cadre au-dessus du niveau du capot
    left: "1%",      // Décale vers la droite pour libérer totalement le texte
    // --------------------------------------
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(20px)",
    padding: "12px 30px",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
    zIndex: 10, // Assure qu'il passe au-dessus de tout
    minWidth: "170px",
    transition: "all 0.5s ease" // Pour une interaction fluide
  }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .hero-anim { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          
          .btn-main:hover { 
            background-color: ${colors.primaryBlue} !important;
            transform: translateY(-5px);
            box-shadow: 0 30px 60px rgba(11, 49, 175, 0.3);
          }

          .img-hover:hover {
            transform: rotateY(0deg) rotateX(0deg) scale(1.02) !important;
          }

          .scan-line {
            position: absolute;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, ${colors.primaryBlue}, transparent);
            top: 0;
            left: 0;
            animation: scan 4s linear infinite;
            z-index: 10;
          }

          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }

          @media (max-width: 1024px) {
            .hero-flex { flex-direction: column; text-align: center; padding-top: 140px; }
            .hero-content { display: flex; flex-direction: column; align-items: center; }
            .hero-img { display: none; }
          }
        `}
      </style>

      <section style={styles.section} className="hero-flex">
        <div style={styles.bgGradient} />

        <div style={styles.content} className="hero-anim">
          <div style={styles.badge}>
            <span style={{color: colors.primaryBlue}}>●</span> Inno Business Solutions
          </div>
          
          <h1 style={styles.title}>
            L'excellence <br /> 
            <span style={{color: colors.primaryBlue}}>Opérationnelle.</span>
          </h1>
          
          <p style={styles.desc}>
            Déployez une solution de mobilité intelligente pour vos collaborateurs. 
            Contrôle total, facturation centralisée et service Premium.
          </p>
          
          <div style={styles.btnContainer}>
            <button className="btn-main" style={styles.btnPrimary} onClick={() => scrollToComponent('contact')}>
              Ouvrir un compte Business 
              <span style={{fontSize: "20px"}}>→</span>
            </button>
          </div>
        </div>

        <div style={styles.imageSide} className="hero-img">
          <div style={styles.imageWrapper}>
            {/* Effet Scanner Laser Bleu */}
            <div className="scan-line" />
            
            {/* Analytics Card */}
            <div style={styles.dataCard} className="hero-anim">
              <p style={{fontSize: "11px", fontWeight: "700", color: "#94A3B8", marginBottom: "8px", textTransform: "uppercase"}}>Réduction des coûts</p>
              <div style={{display: "flex", alignItems: "baseline", gap: "5px"}}>
                <span style={{fontSize: "32px", fontWeight: "900", color: colors.darkNavy}}>24.8</span>
                <span style={{fontSize: "18px", fontWeight: "700", color: colors.primaryBlue}}>%</span>
              </div>
              <div style={{width: "100px", height: "4px", background: "#F1F5F9", borderRadius: "10px", marginTop: "12px", overflow: "hidden"}}>
                <div style={{width: "75%", height: "100%", background: colors.primaryBlue}} />
              </div>
            </div>

            <img 
              src={taxiBusiness} 
              alt="Inno Fleet" 
              style={styles.img} 
              className="img-hover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessHero;