import React from "react";

const BusinessStats = () => {
  const colors = {
    primary: "#0B31AF",
    textMain: "#0F172A",
    textSecondary: "#64748B",
    border: "rgba(15, 23, 42, 0.08)",
    bgGhost: "#F8FAFC"
  };

  const styles = {
    section: {
      padding: "60px 5%", // Réduit de 120px à 60px
      backgroundColor: "#FFFFFF",
      fontFamily: "'Inter', sans-serif",
    },
    container: {
      maxWidth: "1100px", // Plus étroit pour plus de focus
      margin: "0 auto",
    },
    header: {
      marginBottom: "40px", // Réduit de 80px à 40px
      textAlign: "left",
    },
    badge: {
      fontSize: "10px",
      fontWeight: "800",
      color: colors.primary,
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      marginBottom: "12px",
      display: "block"
    },
    title: {
      fontSize: "clamp(26px, 4vw, 38px)", // Plus compact
      color: colors.textMain,
      fontWeight: "900",
      letterSpacing: "-0.03em",
      lineHeight: "1.1",
      maxWidth: "600px"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gridAutoRows: "160px", // Hauteur fixe plus petite pour le contrôle
      gap: "16px", // Gap réduit de 24px à 16px
    },
    card: {
      backgroundColor: "#FFFFFF",
      borderRadius: "24px", // Plus petit rayon pour cartes plus petites
      padding: "24px", // Padding réduit de 40px à 24px
      border: `1px solid ${colors.border}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      position: "relative",
    },
    // Classes de taille pour la grille Bento
    large: { gridColumn: "span 3", gridRow: "span 2" },
    medium: { gridColumn: "span 3", gridRow: "span 1" },
    small: { gridColumn: "span 2", gridRow: "span 1" },
    
    cardLabel: {
      fontSize: "10px",
      fontWeight: "700",
      color: colors.primary,
      textTransform: "uppercase",
      marginBottom: "12px",
    },
    cardTitle: {
      fontSize: "19px", // Réduit
      fontWeight: "800",
      color: colors.textMain,
      marginBottom: "8px",
      letterSpacing: "-0.01em"
    },
    cardDesc: {
      fontSize: "13.5px", // Réduit
      color: colors.textSecondary,
      lineHeight: "1.5",
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <header style={styles.header}>
          <span style={styles.badge}>Inno Ecosystem</span>
          <h2 style={styles.title}>L'infrastructure de mobilité pour la croissance.</h2>
        </header>

        <div className="bento-grid" style={styles.grid}>
          {/* RENTABILITÉ - LARGE */}
          <div className="bento-item" style={{...styles.card, ...styles.large, backgroundColor: colors.bgGhost}}>
            <div>
              <span style={styles.cardLabel}>Rentabilité</span>
              <h3 style={{...styles.cardTitle, fontSize: "24px"}}>Optimisation des coûts</h3>
              <p style={styles.cardDesc}>Algorithmes prédictifs réduisant vos dépenses de mobilité jusqu'à 30%.</p>
            </div>
            <div style={{ alignSelf: "flex-end", fontSize: "48px", fontWeight: "900", color: colors.primary, opacity: 0.15 }}>
              -30%
            </div>
          </div>

          {/* AUTOMATISATION - MEDIUM */}
          <div className="bento-item" style={{...styles.card, ...styles.medium}}>
            <div>
              <span style={styles.cardLabel}>Ops</span>
              <h3 style={styles.cardTitle}>Automatisation 360°</h3>
              <p style={styles.cardDesc}>Facturation centralisée et export comptable automatique.</p>
            </div>
          </div>

          {/* DATA - MEDIUM (DARK) */}
          <div className="bento-item" style={{...styles.card, ...styles.medium, backgroundColor: colors.textMain}}>
            <div>
              <span style={{...styles.cardLabel, color: "#FFFFFF", opacity: 0.6}}>Intelligence</span>
              <h3 style={{...styles.cardTitle, color: "#FFFFFF"}}>Gouvernance Data</h3>
              <p style={{...styles.cardDesc, color: "rgba(255,255,255,0.7)"}}>Reporting analytique en temps réel.</p>
            </div>
          </div>

          {/* SECURITY - SMALL */}
          <div className="bento-item" style={{...styles.card, ...styles.small}}>
             <h3 style={{...styles.cardTitle, fontSize: "16px"}}>Tracking 24/7</h3>
             <p style={{...styles.cardDesc, fontSize: "12px"}}>Protocoles certifiés.</p>
          </div>

          {/* EXPERIENCE - SMALL */}
          <div className="bento-item" style={{...styles.card, ...styles.small}}>
             <h3 style={{...styles.cardTitle, fontSize: "16px"}}>Expérience VIP</h3>
             <p style={{...styles.cardDesc, fontSize: "12px"}}>Standard Premium.</p>
          </div>

          {/* LOCAL - SMALL */}
          <div className="bento-item" style={{...styles.card, ...styles.small}}>
             <h3 style={{...styles.cardTitle, fontSize: "16px"}}>Support Local</h3>
             <p style={{...styles.cardDesc, fontSize: "12px"}}>Expertise Inno Tunisie.</p>
          </div>
        </div>
      </div>

      <style>
        {`
          .bento-item:hover {
            transform: translateY(-4px);
            border-color: ${colors.primary};
            box-shadow: 0 12px 24px rgba(0,0,0,0.04);
          }
          
          @media (max-width: 900px) {
            .bento-grid { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; }
            .bento-item { grid-column: span 1 !important; grid-row: span 1 !important; }
          }
        `}
      </style>
    </section>
  );
};

export default BusinessStats;