import React, { useState } from "react";
import innoLogo from "../assets/logo.png";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const C = {
    green:    "#49ce54",
    blue:     "#0B31AF",
    bg:       "#FAFAF9",
    textMain: "#0F172A",
    textMuted:"#475569",
    border:   "#49ce5425",
    white:    "#FFFFFF",
  };

  const icons = [
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  ];

  const features = [
    { title: "Sécurité garantie",  text: "Suivi en temps réel et vérification rigoureuse des chauffeurs pour une tranquillité totale." },
    { title: "Simple et intuitif", text: "Une interface fluide conçue pour commander votre course en seulement deux clics." },
    { title: "Disponible partout", text: "Un réseau de partenaires étendu pour vous accompagner dans tous vos déplacements." },
    { title: "Rapide et fiable",   text: "Optimisation des trajets pour un temps d'attente record, 24h/24 et 7j/7." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-20px) scale(1.05); }
        }
        .logo-float { animation: float 8s ease-in-out infinite; }

        .about-card {
          transition: all 0.5s cubic-bezier(0.19,1,0.22,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .about-card:hover {
          transform: translateY(-10px) scale(1.02) !important;
          border-color: #49ce54 !important;
          background: #FFFFFF !important;
          box-shadow: 0 40px 80px -20px #49ce5433 !important;
        }
        .about-card-icon { transition: all 0.4s ease; }
        .about-card:hover .about-card-icon {
          background: #49ce54 !important;
          color: #FFFFFF !important;
          box-shadow: 0 15px 30px #49ce544D !important;
        }
        .about-card-glow { opacity: 0; transition: opacity 0.5s ease; }
        .about-card:hover .about-card-glow { opacity: 1; }

        @media (max-width: 768px) {
          .about-logo-wrap { justify-content: center !important; width: 100%; }
          .logo-float { width: 140px !important; }
          .about-header { flex-direction: column !important; }
        }
      `}</style>

      <section style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "18px",
        padding: "140px 8%",
        backgroundColor: C.bg,
        backgroundImage: `
          radial-gradient(circle at 10% 20%, #49ce5415 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, #49ce5410 0%, transparent 40%),
          linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2349ce54' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        position: "relative",
        overflow: "hidden",
      }}>

        {/* ─────── HEADER ─────── */}
        <div className="about-header" style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "40px",
          marginBottom: "80px",
          flexWrap: "wrap",
        }}>
          <div style={{ flex: "1", minWidth: "300px" }}>

            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "100px",
              background: C.white,
              border: `1px solid ${C.border}`,
              color: C.green,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.green, display: "inline-block" }} />
              L'Expérience Inno
            </div>

            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: "700",
              color: C.textMain,
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              margin: 0,
            }}>
              Redéfinir votre{" "}<br />
              <span style={{
                color: C.green,
                WebkitTextFillColor: C.green,
              }}>mobilité.</span>
            </h2>
          </div>

          <div className="about-logo-wrap" style={{ flex: "0.4", display: "flex", justifyContent: "flex-end" }}>
            <img
              src={innoLogo}
              alt="INNO"
              className="logo-float"
              style={{
                width: "180px",
                height: "auto",
                filter: `drop-shadow(0 25px 50px #49ce5426)`,
              }}
            />
          </div>
        </div>

        {/* ─────── BENTO GRID ─────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {features.map((item, index) => (
            <div
              key={index}
              className="about-card"
              style={{
                backgroundColor: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(10px)",
                padding: "48px",
                borderRadius: "40px",
                border: `1px solid ${C.white}`,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
              }}
            >
              <div className="about-card-glow" style={{
                position: "absolute",
                top: 0, right: 0,
                width: "120px", height: "120px",
                background: `radial-gradient(circle at top right, #49ce5418, transparent 70%)`,
                pointerEvents: "none",
              }} />

              <div className="about-card-icon" style={{
                width: "60px",
                height: "60px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: C.white,
                color: C.green,
                marginBottom: "32px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}>
                {icons[index]}
              </div>

              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "22px",
                fontWeight: "600",
                color: C.textMain,
                letterSpacing: "-0.01em",
                margin: "0 0 16px",
              }}>
                {item.title}
              </h3>

              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                color: C.textMuted,
                lineHeight: "1.7",
                margin: 0,
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;