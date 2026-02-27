import React from "react";
// Ensure this path is correct based on your file structure
import taxiBusiness from "../assets/taxi.png"; 

const BusinessHero = () => {
  /**
   * Smooth scrolls to a component by its ID.
   * Includes an offset to account for a fixed Navbar.
   */
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of your fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with ID "${id}" not found.`);
    }
  };

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
      position: "relative",
      fontFamily: "'Inter', sans-serif"
    },
    content: { 
      flex: "1", 
      minWidth: "450px",
      zIndex: 2,
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
    },
    imageWrapper: {
      position: "relative",
      width: "110%", 
      maxWidth: "700px",
    },
    img: { 
      width: "100%", 
      height: "auto",
      display: "block",
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
          .hero-content-anim { animation: fadeInUp 0.8s ease-out; }
          .hero-image-anim { animation: fadeInRight 1s ease-out; }
          .hero-stats-anim { animation: float 6s ease-in-out infinite; }
          
          .btn-primary:hover { 
            transform: translateY(-5px); 
            background-color: #62a15b !important;
            box-shadow: 0 25px 50px rgba(98, 161, 91, 0.3);
          }
          .btn-secondary:hover { 
            border-color: #1e3a8a;
            background-color: #f8fafc;
            transform: translateY(-2px);
          }

          @media (max-width: 992px) {
            .hero-image-side { display: none; }
            .hero-content-anim { text-align: center; min-width: 100%; }
            .hero-btn-container { justify-content: center; }
            .hero-desc { margin-left: auto; margin-right: auto; }
          }
        `}
      </style>

      <section style={styles.section}>
        {/* Text Content Side */}
        <div style={styles.content} className="hero-content-anim">
          <div style={styles.badge}>
            <span style={{fontSize: "16px"}}>✨</span> Leader de la mobilité B2B
          </div>
          
          <h1 style={styles.title}>
            Propulsez votre <br /> 
            <span style={styles.highlight}>Entreprise</span> avec Inno
          </h1>
          
          <p style={{...styles.desc, ...{ className: "hero-desc" }}}>
            Optimisez vos déplacements professionnels avec une plateforme 
            tout-en-un. Réduisez vos coûts opérationnels jusqu'à <strong>30%</strong> dès le premier mois.
          </p>
          
          <div style={styles.btnContainer} className="hero-btn-container">
            <button 
              className="btn-primary" 
              style={styles.btnPrimary}
              onClick={() => scrollToComponent('business-contact')}
            >
              DÉMARRER MAINTENANT
            </button>
            
            <button 
              className="btn-secondary" 
              style={styles.btnSecondary}
              onClick={() => scrollToComponent('business-platform')}
            >
              EN SAVOIR PLUS
            </button>
          </div>
        </div>

        {/* Visual Side */}
        <div style={styles.imageSide} className="hero-image-anim hero-image-side">
          <div style={styles.imageWrapper}>
            <div style={styles.statsCard} className="hero-stats-anim">
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