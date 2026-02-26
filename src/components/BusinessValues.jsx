import React from "react";

const BusinessValues = () => {
  const values = [
    {
      title: "RÉDUCTION DES COUTS",
      desc: "Optimisez vos dépenses et économisez sur la gestion de flotte.",
      icon: "📉",
      color: "#62a15b"
    },
    {
      title: "GAIN DE TEMPS",
      desc: "Automatisez les processus et libérez votre équipe des tâches manuelles.",
      icon: "⏱️",
      color: "#1e3a8a"
    },
    {
      title: "VISIBILITE TOTALE",
      desc: "Suivez tous vos déplacements et analysez vos données en temps réel.",
      icon: "👁️",
      color: "#0284c7"
    },
    {
      title: "SATISFACTION EMPLOYES",
      desc: "Offrez une expérience de mobilité améliorée et sans stress à vos équipes.",
      icon: "😊",
      color: "#62a15b"
    },
    {
      title: "SÉCURITÉ RENFORCÉE",
      desc: "Protégez vos données et assurez la sécurité de vos collaborateurs.",
      icon: "🛡️",
      color: "#1e3a8a"
    },
    {
      title: "PARTENAIRE LOCAL",
      desc: "Bénéficiez d'un soutien et d'une expertise dédiée sur le marché tunisien.",
      icon: "🇹🇳",
      color: "#ef4444"
    }
  ];

  const styles = {
    section: {
      padding: "100px 8%",
      backgroundColor: "#f8fafc",
      textAlign: "center",
    },
    badge: {
      display: "inline-block",
      padding: "8px 20px",
      backgroundColor: "#e0f2fe",
      color: "#0369a1",
      borderRadius: "100px",
      fontSize: "14px",
      fontWeight: "800",
      marginBottom: "20px",
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    title: {
      fontSize: "clamp(26px, 4vw, 36px)",
      color: "#1e3a8a",
      fontWeight: "900",
      marginBottom: "60px",
      textTransform: "uppercase"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "40px 30px",
      borderRadius: "24px",
      textAlign: "left",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      border: "1px solid #f1f5f9",
      transition: "all 0.3s ease",
      cursor: "default",
      position: "relative",
      overflow: "hidden"
    },
    iconWrapper: (color) => ({
      width: "50px",
      height: "50px",
      borderRadius: "12px",
      backgroundColor: `${color}10`, // 10% opacité
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      marginBottom: "25px",
      color: color
    }),
    cardTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1e3a8a",
      marginBottom: "15px",
      letterSpacing: "0.5px"
    },
    cardDesc: {
      fontSize: "15px",
      color: "#64748b",
      lineHeight: "1.6",
      margin: 0
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.badge}>Jusqu'à 30% d'économies</div>
      <h2 style={styles.title}>Pourquoi choisir Inno Business ?</h2>

      <style>
        {`
          .value-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(30, 58, 138, 0.1) !important;
            border-color: #e2e8f0 !important;
          }
          .value-card:hover .icon-box {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }
        `}
      </style>

      <div style={styles.grid}>
        {values.map((v, i) => (
          <div key={i} className="value-card" style={styles.card}>
            <div className="icon-box" style={styles.iconWrapper(v.color)}>
              {v.icon}
            </div>
            <h4 style={styles.cardTitle}>{v.title}</h4>
            <p style={styles.cardDesc}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessValues;