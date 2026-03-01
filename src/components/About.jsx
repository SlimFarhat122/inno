import React, { useState } from "react";
import innoLogo from "../assets/logo.png"; 

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const colors = {
    bg: "#F8FAFC",
    bgReflet: "#DBEAFE",
    accentBlue: "#1E3A8A",
    accentLight: "#3B82F6",
    textMain: "#0F172A",
    textMuted: "#64748B",
    border: "#E2E8F0"
  };

  // Icônes SVG pour remplacer les emojis
  const icons = [
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, // Shield
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, // Phone
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, // Pin
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> // Clock
  ];

  const features = [
    { title: "Sécurité garantie", text: "Suivi en temps réel et vérification rigoureuse des chauffeurs." },
    { title: "Simple et intuitif", text: "Interface moderne pensée pour commander en quelques secondes." },
    { title: "Disponible partout", text: "INNO couvre un vaste réseau pour vous accompagner partout." },
    { title: "Rapide et fiable", text: "Temps d'attente minimal et service disponible 24h/24." }
  ];

  return (
    <section style={{
      fontFamily: "'Inter', sans-serif",
      padding: "120px 8%",
      background: `radial-gradient(circle at 15% 15%, ${colors.bgReflet} 0%, ${colors.bg} 45%)`,
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Header Dynamique */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "60px",
        marginBottom: "100px"
      }}>
        <div style={{ flex: "1", minWidth: "320px" }}>
          <div className="badge-anim" style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: "100px",
            background: `${colors.accentLight}15`,
            color: colors.accentLight,
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            marginBottom: "24px",
            border: `1px solid ${colors.accentLight}30`
          }}>
            L'EXPÉRIENCE INNO
          </div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", fontWeight: "900", color: colors.accentBlue, lineHeight: 1.1, letterSpacing: "-0.04em" }}>
            Votre partenaire de <br/>
            <span style={{ color: colors.accentLight }}>mobilité intelligente.</span>
          </h2>
        </div>
        
        <div style={{ flex: "0.5", display: "flex", justifyContent: "center" }}>
          <img src={innoLogo} alt="Logo" className="logo-float" style={{ width: "220px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.05))" }} />
        </div>
      </div>

      {/* Grille de cartes dynamiques */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "30px"
      }}>
        {features.map((item, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: "#FFFFFF",
              padding: "50px 40px",
              borderRadius: "32px",
              border: `1px solid ${hoveredIndex === index ? colors.accentLight : colors.border}`,
              transition: "all 0.4s cubic-bezier(0.2, 1, 0.3, 1)",
              transform: hoveredIndex === index ? "translateY(-12px)" : "translateY(0)",
              boxShadow: hoveredIndex === index 
                ? `0 30px 60px rgba(30, 58, 138, 0.12)` 
                : "0 10px 30px rgba(0,0,0,0.02)",
              cursor: "default",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Effet de reflet interne au hover */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, width: "100%", height: "100%",
              background: `linear-gradient(135deg, ${colors.accentLight}08 0%, transparent 100%)`,
              opacity: hoveredIndex === index ? 1 : 0,
              transition: "opacity 0.4s"
            }} />

            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: hoveredIndex === index ? colors.accentBlue : `${colors.accentLight}10`,
              color: hoveredIndex === index ? "#FFF" : colors.accentBlue,
              marginBottom: "30px",
              transition: "all 0.4s",
              position: "relative",
              zIndex: 1
            }}>
              {icons[index]}
            </div>

            <h3 style={{ 
              fontSize: "20px", 
              fontWeight: "800", 
              color: colors.textMain, 
              marginBottom: "15px",
              position: "relative", zIndex: 1 
            }}>
              {item.title}
            </h3>
            <p style={{ 
              fontSize: "15px", 
              color: colors.textMuted, 
              lineHeight: "1.6",
              position: "relative", zIndex: 1 
            }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .logo-float { animation: float 6s ease-in-out infinite; }
        
        .badge-anim {
          animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;