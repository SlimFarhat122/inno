import React from "react";
// Importez votre logo INNO ici
import innoLogo from "../assets/logo.png"; 

const About = () => {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      color: "#1e293b",
      padding: "80px 8%",
      backgroundColor: "transparent", // Laisser transparent pour voir le fond du App.js
    },
    // --- Section du haut (Texte + Logo) ---
    headerSection: {
      display: "flex",
      alignItems: "center",
      gap: "80px",
      marginBottom: "80px",
      flexWrap: "wrap",
    },
    logoSide: {
      flex: "0.5",
      display: "flex",
      justifyContent: "center",
      minWidth: "250px",
    },
    contentSide: {
      flex: "1.5",
      minWidth: "300px",
    },
    badge: {
      backgroundColor: "#eff6ff",
      color: "#1e3a8a",
      padding: "6px 18px",
      borderRadius: "50px",
      fontSize: "12px",
      fontWeight: "800",
      textTransform: "uppercase",
      display: "inline-block",
      marginBottom: "20px",
      letterSpacing: "0.5px",
    },
    mainTitle: {
      fontSize: "38px",
      fontWeight: "800",
      color: "#0f172a",
      marginBottom: "25px",
      lineHeight: "1.2",
    },
    description: {
      fontSize: "16px",
      color: "#64748b",
      lineHeight: "1.7",
      marginBottom: "20px",
      maxWidth: "800px",
    },
    // --- Grille des fonctionnalités (Cartes) ---
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "25px",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "40px 30px",
      borderRadius: "24px",
      border: "1px solid #f1f5f9",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
      transition: "transform 0.3s ease",
    },
    iconCircle: {
      width: "50px",
      height: "50px",
      borderRadius: "15px",
      backgroundColor: "#f0fdf4", // Fond vert clair comme sur la photo
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "25px",
      color: "#22c55e",
      fontSize: "20px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "800",
      color: "#0f172a",
      marginBottom: "15px",
    },
    cardText: {
      fontSize: "14px",
      color: "#64748b",
      lineHeight: "1.6",
    }
  };

  const features = [
    { 
      title: "Securite garantie", 
      text: "Chaque trajet est suivi en temps reel avec un systeme de verification des chauffeurs pour votre tranquillite.",
      icon: "🛡️" 
    },
    { 
      title: "Simple et intuitif", 
      text: "Une interface moderne et epuree, concue pour commander un taxi en quelques secondes seulement.",
      icon: "📱" 
    },
    { 
      title: "Disponible partout", 
      text: "INNO couvre un reseau etendu de villes et de zones pour vous accompagner dans tous vos deplacements.",
      icon: "📍" 
    },
    { 
      title: "Rapide et fiable", 
      text: "Un temps d'attente minimal et un service disponible 24h/24 pour repondre a vos besoins a tout moment.",
      icon: "🕒" 
    }
  ];

  return (
    <div style={styles.container}>
      {/* Partie supérieure conforme à la photo */}
      <div style={styles.headerSection}>
        <div style={styles.logoSide}>
          <img 
            src={innoLogo} 
            alt="INNO Logo" 
            style={{ width: "100%", maxWidth: "220px" }} 
          />
        </div>
        
        <div style={styles.contentSide}>
          <div style={styles.badge}>A PROPOS D'INNO</div>
          <h2 style={styles.mainTitle}>Votre partenaire de mobilite intelligente</h2>
          <p style={styles.description}>
            L'application INNO est concue pour les smartphones et regroupe toutes les informations essentielles pour se deplacer en taxi en toute securite. Elle propose des fonctionnalites modernes, faciles a utiliser et disponibles en tout lieu, afin de permettre a chacun de se deplacer en toute liberte.
          </p>
          <p style={styles.description}>
            L'application INNO a ete developpee pour repondre aux besoins de tous les utilisateurs qui souhaitent circuler en taxi de maniere moderne et connectee.
          </p>
        </div>
      </div>

      {/* Grille de cartes conforme à la photo */}
      <div style={styles.grid}>
        {features.map((item, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={styles.iconCircle}>
              {/* Utilisation d'icônes simples comme sur la maquette */}
              <span style={{ opacity: 0.8 }}>{item.icon}</span>
            </div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;