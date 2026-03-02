import React, { useState } from "react";
import innoLogo from "../assets/logo.png"; 

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Couleurs basées sur votre logo (Vert et Bleu Profond)
  const colors = {
    bg: "#FAFAF9",
    logoGreen: "#62A15B", // Le vert de votre logo
    logoBlue: "#0B31AF",  // Le bleu de votre logo
    bgGreenLight: "#F0FDF4", // Un vert très pâle pour le fond
    textMain: "#0F172A",
    textMuted: "#475569",
    border: "rgba(98, 161, 91, 0.15)"
  };

  const icons = [
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ];

  const features = [
    { title: "Sécurité garantie", text: "Suivi en temps réel et vérification rigoureuse des chauffeurs pour une tranquillité totale." },
    { title: "Simple et intuitif", text: "Une interface fluide conçue pour commander votre course en seulement deux clics." },
    { title: "Disponible partout", text: "Un réseau de partenaires étendu pour vous accompagner dans tous vos déplacements." },
    { title: "Rapide et fiable", text: "Optimisation des trajets pour un temps d'attente record, 24h/24 et 7j/7." }
  ];

  return (
    <section style={{
      fontFamily: "'Inter', sans-serif",
      padding: "140px 8%",
      backgroundColor: colors.bg,
      // REMPLACEMENT : Le "Blue Fog" devient un "Green Fog" professionnel
      backgroundImage: `
        radial-gradient(circle at 10% 20%, ${colors.logoGreen}15 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, ${colors.logoGreen}10 0%, transparent 40%),
        linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2362a15b' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      `,
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Header section */}
      <div style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "40px",
        marginBottom: "80px",
        flexWrap: "wrap"
      }}>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "100px",
            background: "#FFF",
            border: `1px solid ${colors.border}`,
            color: colors.logoGreen,
            fontSize: "12px",
            fontWeight: "800",
            letterSpacing: "1px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: colors.logoGreen }}></span>
            L'EXPÉRIENCE INNO
          </div>
          <h2 style={{ 
            fontSize: "clamp(38px, 5vw, 64px)", 
            fontWeight: "800", 
            color: colors.textMain, 
            lineHeight: "1.05", 
            letterSpacing: "-0.03em" 
          }}>
            Redéfinir votre <br/>
            <span style={{ 
              color: colors.logoGreen,
              background: `linear-gradient(to right, ${colors.logoGreen}, #86EFAC)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>mobilité.</span>
          </h2>
        </div>
        
        <div style={{ flex: "0.4", display: "flex", justifyContent: "flex-end" }} className="logo-container">
          <img 
            src={innoLogo} 
            alt="INNO" 
            style={{ 
              width: "180px", 
              height: "auto",
              filter: "drop-shadow(0 25px 50px rgba(98, 161, 91, 0.15))" 
            }} 
            className="logo-float"
          />
        </div>
      </div>

      {/* Grille Bento modernisée */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px"
      }}>
        {features.map((item, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: hoveredIndex === index ? "#FFF" : "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(10px)",
              padding: "48px",
              borderRadius: "40px",
              border: `1px solid ${hoveredIndex === index ? colors.logoGreen : "rgba(255, 255, 255, 1)"}`,
              transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
              transform: hoveredIndex === index ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
              boxShadow: hoveredIndex === index 
                ? "0 40px 80px -20px rgba(98, 161, 91, 0.2)" 
                : "0 10px 30px -10px rgba(0,0,0,0.05)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Dégradé discret au hover */}
            <div style={{
              position: "absolute",
              top: 0, right: 0, width: "120px", height: "120px",
              background: `radial-gradient(circle at top right, ${colors.logoGreen}10, transparent 70%)`,
              opacity: hoveredIndex === index ? 1 : 0,
              transition: "opacity 0.5s"
            }} />

            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: hoveredIndex === index ? colors.logoGreen : "#FFF",
              color: hoveredIndex === index ? "#FFF" : colors.logoGreen,
              marginBottom: "32px",
              transition: "all 0.4s ease",
              boxShadow: hoveredIndex === index ? "0 15px 30px rgba(98, 161, 91, 0.3)" : "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              {icons[index]}
            </div>

            <h3 style={{ 
              fontSize: "22px", 
              fontWeight: "700", 
              color: colors.textMain, 
              marginBottom: "16px",
              letterSpacing: "-0.01em"
            }}>
              {item.title}
            </h3>
            <p style={{ 
              fontSize: "16px", 
              color: colors.textMuted, 
              lineHeight: "1.6",
              fontWeight: "450"
            }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
        .logo-float { animation: float 8s ease-in-out infinite; }
        
        @media (max-width: 768px) {
          .logo-container { justify-content: center !important; width: 100%; }
          .logo-float { width: 140px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;