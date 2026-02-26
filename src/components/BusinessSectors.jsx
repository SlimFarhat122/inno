import React, { useRef, useState } from "react";

const BusinessSectors = () => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sectors = [
    { name: "Centres d'appels", desc: "Synchronisez le transport de vos équipes avec leurs shifts 24/7.", tag: "24/7", icon: "🎧" },
    { name: "Hôtellerie", desc: "Expérience premium pour vos clients VIP et trajets du personnel.", tag: "Premium", icon: "🏨" },
    { name: "Services Financiers", desc: "Déplacements sécurisés et confidentiels pour vos cadres.", tag: "Confidentiel", icon: "💼" },
    { name: "Santé", desc: "Mobilité prioritaire pour le personnel médical en urgence.", tag: "Priorité", icon: "🏥" },
    { name: "Industrie", desc: "Navettes connectées pour gérer vos flux de production.", tag: "Logistique", icon: "🏭" }
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
      padding: "60px 8%", // Réduit de 100px à 60px
      backgroundColor: "#fcfdfe",
      textAlign: "center",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif"
    },
    topLabel: {
      color: "#62a15b",
      fontWeight: "800",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      display: "block",
      marginBottom: "10px"
    },
    title: {
      fontSize: "clamp(24px, 3vw, 32px)", // Plus compact
      color: "#1e3a8a",
      fontWeight: "900",
      marginBottom: "40px",
      lineHeight: "1.2"
    },
    scrollContainer: {
      display: "flex",
      gap: "20px", // Réduit de 25px à 20px
      overflowX: "auto",
      padding: "10px 5px 30px",
      cursor: isDown ? "grabbing" : "grab",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      userSelect: "none",
    },
    card: {
      minWidth: "280px", // Réduit de 320px à 280px
      backgroundColor: "#ffffff",
      padding: "30px 25px", // Plus compact
      borderRadius: "20px",
      textAlign: "left",
      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
      border: "1px solid #f1f5f9",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    icon: {
      fontSize: "32px", // Réduit de 40px à 32px
      marginBottom: "15px",
      display: "block"
    },
    tag: {
      fontSize: "10px",
      fontWeight: "700",
      color: "#166534",
      backgroundColor: "#f0fdf4",
      padding: "4px 10px",
      borderRadius: "100px",
      alignSelf: "flex-start"
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1e3a8a",
      margin: "15px 0 10px"
    },
    cardDesc: {
      fontSize: "14px",
      color: "#64748b",
      lineHeight: "1.5",
      margin: 0
    },
    hint: {
      marginTop: "10px",
      color: "#94a3b8",
      fontSize: "12px",
      fontWeight: "500"
    }
  };

  return (
    <section style={styles.section}>
      <span style={styles.topLabel}>Secteurs d'activité</span>
      <h2 style={styles.title}>Une solution adaptée à<br/>chaque défi industriel</h2>

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
            <div>
              <span style={styles.icon}>{s.icon}</span>
              <span style={styles.tag}>{s.tag}</span>
              <h4 style={styles.cardTitle}>{s.name}</h4>
              <p style={styles.cardDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={styles.hint}>
        {isDown ? "Glissage actif" : "← Glissez pour explorer →"}
      </p>

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .sector-card:hover { 
            transform: translateY(-5px); 
            border-color: #62a15b;
            box-shadow: 0 15px 35px rgba(98, 161, 91, 0.1);
          }
        `}
      </style>
    </section>
  );
};

export default BusinessSectors;