import React, { useRef, useState } from "react";

const BusinessSectors = () => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const colors = {
    primaryBlue: "#0B31AF",
    darkNavy: "#020617",
    slate: "#64748B",
    softBlue: "#F1F5F9",
  };

  const sectors = [
    { name: "Centres d'appels", desc: "Synchronisez le transport de vos équipes avec leurs shifts 24/7.", tag: "Flux Continu", icon: "⚡" },
    { name: "Hôtellerie", desc: "Expérience premium pour vos clients VIP et trajets sécurisés du personnel.", tag: "Haut de Gamme", icon: "✨" },
    { name: "Services Financiers", desc: "Déplacements confidentiels pour vos cadres et partenaires.", tag: "Sécurisé", icon: "🛡️" },
    { name: "Santé", desc: "Mobilité prioritaire et logistique fluide pour le personnel médical.", tag: "Priorité Vitale", icon: "🩺" },
    { name: "Industrie & Logistique", desc: "Optimisation des flux de production et navettes connectées.", tag: "Performance", icon: "⚙️" }
  ];

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const styles = {
    section: {
      padding: "60px 0", // Réduit de 100px à 60px
      backgroundColor: "#FFFFFF",
      textAlign: "center",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif",
      position: "relative"
    },
    header: {
      padding: "0 8%",
      marginBottom: "35px" // Réduit de 60px à 35px
    },
    topLabel: {
      color: colors.primaryBlue,
      fontWeight: "900",
      fontSize: "11px", // Plus petit
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      display: "block",
      marginBottom: "10px"
    },
    title: {
      fontSize: "clamp(26px, 3.5vw, 36px)", // Réduit
      color: colors.darkNavy,
      fontWeight: "900",
      lineHeight: "1.15",
      letterSpacing: "-0.02em"
    },
    outerWrapper: {
      position: "relative",
      maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      padding: "10px 0"
    },
    scrollContainer: {
      display: "flex",
      gap: "18px", // Réduit de 25px à 18px
      overflowX: "auto",
      padding: "25px 10%", 
      cursor: isDown ? "grabbing" : "grab",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      userSelect: "none",
      scrollBehavior: isDown ? "auto" : "smooth"
    },
    card: {
      minWidth: "270px", // Réduit de 320px à 270px
      backgroundColor: "#FFFFFF",
      padding: "30px 22px", // Réduit de 40px/30px à 30px/22px
      borderRadius: "22px", // Légèrement plus petit
      textAlign: "left",
      boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
      border: "1px solid #F1F5F9",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden"
    },
    iconBox: {
      width: "48px", // Réduit de 60px à 48px
      height: "48px", // Réduit de 60px à 48px
      backgroundColor: colors.softBlue,
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px", // Réduit
      marginBottom: "20px",
      transition: "0.3s"
    },
    tag: {
      fontSize: "10px", // Plus petit
      fontWeight: "800",
      color: colors.primaryBlue,
      backgroundColor: "rgba(11, 49, 175, 0.06)",
      padding: "4px 10px",
      borderRadius: "100px",
      alignSelf: "flex-start",
      textTransform: "uppercase"
    },
    cardTitle: {
      fontSize: "19px", // Réduit de 22px à 19px
      fontWeight: "800",
      color: colors.darkNavy,
      margin: "15px 0 10px",
      letterSpacing: "-0.01em"
    },
    cardDesc: {
      fontSize: "13.5px", // Réduit de 15px à 13.5px
      color: colors.slate,
      lineHeight: "1.5",
      margin: 0
    },
    hint: {
      marginTop: "20px",
      color: colors.slate,
      fontSize: "11px",
      fontWeight: "600",
      opacity: 0.5,
      letterSpacing: "0.5px"
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <span style={styles.topLabel}>Expertise Sectorielle</span>
        <h2 style={styles.title}>Une mobilité adaptée à<br/>votre écosystème</h2>
      </div>

      <div style={styles.outerWrapper}>
        <div 
          ref={scrollRef}
          className="no-scrollbar"
          style={styles.scrollContainer}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {sectors.map((s, i) => (
            <div key={i} className="sector-card" style={styles.card}>
              <div style={styles.iconBox} className="icon-box">
                {s.icon}
              </div>
              <span style={styles.tag}>{s.tag}</span>
              <h4 style={styles.cardTitle}>{s.name}</h4>
              <p style={styles.cardDesc}>{s.desc}</p>
              
              <div className="card-number">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <p style={styles.hint}>
        {isDown ? "NAVIGATION ACTIVE" : "GLISSEZ POUR EXPLORER"}
      </p>

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          
          .sector-card:hover { 
            transform: translateY(-8px); 
            border-color: ${colors.primaryBlue};
            box-shadow: 0 20px 40px rgba(11, 49, 175, 0.06);
          }

          .sector-card:hover .icon-box {
            background-color: ${colors.primaryBlue};
            color: white;
            transform: scale(1.05);
          }

          .card-number {
            position: absolute;
            bottom: -15px;
            right: -8px;
            font-size: 70px; /* Réduit de 100px à 70px */
            font-weight: 900;
            color: #F8FAFC;
            z-index: -1;
            transition: 0.4s;
          }

          .sector-card:hover .card-number {
            color: rgba(11, 49, 175, 0.03);
          }
        `}
      </style>
    </section>
  );
};

export default BusinessSectors;