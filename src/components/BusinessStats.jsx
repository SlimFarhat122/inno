import React from "react";

const BusinessStats = () => {
  const cards = [
    { 
      title: "Réduction des coûts", 
      desc: "Optimisez vos dépenses opérationnelles et économisez sur chaque trajet.", 
      icon: "📈",
      color: "#62a15b" 
    },
    { 
      title: "Gain de temps", 
      desc: "Automatisez la facturation et la gestion des notes de frais simplement.", 
      icon: "⚡",
      color: "#1e3a8a" 
    },
    { 
      title: "Visibilité Totale", 
      desc: "Reporting détaillé et analytics en temps réel pour un pilotage précis.", 
      icon: "🎯",
      color: "#0ea5e9" 
    },
    { 
      title: "Satisfaction Employés", 
      desc: "Une application intuitive garantissant le confort de vos collaborateurs.", 
      icon: "⭐",
      color: "#f59e0b" 
    },
    { 
      title: "Sécurité Renforcée", 
      desc: "Protocoles de sécurité stricts et suivi GPS permanent 24h/24.", 
      icon: "🛡️",
      color: "#ef4444" 
    },
    { 
      title: "Expertise Locale", 
      desc: "Un partenaire tunisien qui vous accompagne sur tous vos défis.", 
      icon: "🇹🇳",
      color: "#1e3a8a" 
    }
  ];

  const styles = {
    section: {
      padding: "60px 8%",
      backgroundColor: "#ffffff",
      fontFamily: "'Inter', sans-serif"
    },
    header: {
      maxWidth: "700px",
      margin: "0 auto 40px",
      textAlign: "center"
    },
    badge: {
      backgroundColor: "#f0fdf4",
      color: "#166534",
      padding: "6px 16px",
      borderRadius: "100px",
      fontSize: "12px",
      fontWeight: "800",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "15px",
      border: "1px solid #dcfce7",
      letterSpacing: "0.5px"
    },
    title: {
      fontSize: "clamp(24px, 3vw, 32px)",
      color: "#1e3a8a",
      fontWeight: "900",
      lineHeight: "1.2",
    },
    grid: {
      display: "grid",
      // ICI : On force 3 colonnes égales
      gridTemplateColumns: "repeat(3, 1fr)", 
      gap: "25px",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto"
    },
    card: {
      padding: "30px",
      borderRadius: "20px",
      backgroundColor: "#ffffff",
      border: "1px solid #f1f5f9",
      transition: "all 0.4s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    iconWrapper: {
      width: "50px",
      height: "50px",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      marginBottom: "20px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#1e3a8a",
      marginBottom: "10px"
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
      <div style={styles.header}>
        <div style={styles.badge}>
          <span>💰</span> JUSQU'À 30% D'ÉCONOMIES
        </div>
        <h2 style={styles.title}>Pourquoi les leaders choisissent Inno Business</h2>
      </div>

      <style>
        {`
          .stat-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(30, 58, 138, 0.1);
            border-color: #cbd5e1;
          }
          .stat-card::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; width: 0; height: 4px;
            background: #62a15b;
            transition: width 0.3s ease;
          }
          .stat-card:hover::after {
            width: 100%;
          }

          /* Responsive : On repasse à 1 colonne sur mobile et 2 sur tablette */
          @media (max-width: 992px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .stats-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div className="stats-grid" style={styles.grid}>
        {cards.map((card, i) => (
          <div key={i} className="stat-card" style={styles.card}>
            <div 
              style={{ 
                ...styles.iconWrapper, 
                backgroundColor: `${card.color}10`,
                color: card.color 
              }}
            >
              {card.icon}
            </div>
            <h4 style={styles.cardTitle}>{card.title}</h4>
            <p style={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessStats;