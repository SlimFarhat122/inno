import React, { useState, useEffect } from "react";

const InnoExperience = () => {
  const [activeMode, setActiveMode] = useState("user");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMode(entry.target.id === "user-version" ? "user" : "driver");
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["user-version", "driver-version"].map(id => document.getElementById(id));
    sections.forEach(sec => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const themeColor = activeMode === "user" ? "#1E3A8A" : "#62A15B";

  return (
<div style={{
  backgroundColor: "transparent", // On laisse le parent gérer le fond
  margin: 0,
  padding: "20px 0", 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  width: "100%",
  zIndex: 50
}}>
      {/* 1. Ligne décorative horizontale fine */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${themeColor}66, transparent)`,
        top: "50%",
        opacity: 0.5
      }} />

      {/* 2. Toggle Glassmorphism */}
      <div style={{
        position: "relative",
        zIndex: 20,
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        padding: "6px",
        borderRadius: "100px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        gap: "8px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}>
        <button 
          onClick={() => scrollToSection("user-version")}
          style={{
            padding: "10px 24px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            fontSize: "11px",
            fontWeight: "800",
            letterSpacing: "1px",
            transition: "all 0.4s ease",
            backgroundColor: activeMode === "user" ? "#FFFFFF" : "transparent",
            color: activeMode === "user" ? "#0B1120" : "#94A3B8",
          }}>
          PASSAGER
        </button>

        <button 
          onClick={() => scrollToSection("driver-version")}
          style={{
            padding: "10px 24px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            fontSize: "11px",
            fontWeight: "800",
            letterSpacing: "1px",
            transition: "all 0.4s ease",
            backgroundColor: activeMode === "driver" ? "#FFFFFF" : "transparent",
            color: activeMode === "driver" ? "#62A15B" : "#94A3B8",
          }}>
          CHAUFFEUR
        </button>
      </div>

      {/* 3. Message d'état */}
      <div style={{ marginTop: "20px", textAlign: "center", zIndex: 10 }}>
        <p style={{
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: "400",
          opacity: 0.8,
          margin: 0
        }}>
          Vous êtes dans <span style={{ color: themeColor, fontWeight: "700", transition: "all 0.5s" }}>
            l'Espace {activeMode === "user" ? "Passager" : "Partenaire"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InnoExperience;