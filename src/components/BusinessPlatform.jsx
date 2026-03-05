import React, { useState, useEffect } from "react";
import imgDashboard from "../assets/dashborad.png";
import imgFacturation from "../assets/facturation.png";
import imgAppEmploye from "../assets/planification.png";

const BusinessPlatform = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isVisible, setIsVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setAnimKey(prev => prev + 1);
  };

  // ── PALETTE OFFICIELLE INNO BUSINESS 2026 ──────────────────────────
  const C = {
    marine:     "#003DA7",   // Bleu Marine        — Couleur Primaire
    cyan:       "#008BD3",   // Cyan Dynamique     — Couleur Primaire
    anthracite: "#374151",   // Gris Anthracite    — Textes corps, éléments secondaires
    lightGray:  "#F3F4F6",   // Gris Clair         — Fonds, séparateurs
    sky:        "#38BDF8",   // Bleu Ciel          — Éléments interactifs, liens
    white:      "#FFFFFF",
  };

  const tabs = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      image: imgDashboard,
      description: "Visualisez vos indicateurs clés de performance et gérez vos flux de déplacements en temps réel depuis un tableau de bord centralisé.",
      stats: [
        { value: "100%", label: "Visibilité" },
        { value: "Live", label: "Données temps réel" },
        { value: "∞", label: "Historique" },
      ],
    },
    {
      key: "facturation",
      label: "Facturation",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      image: imgFacturation,
      description: "Automatisez vos notes de frais avec une facturation mensuelle unique et simplifiée. Fini les justificatifs perdus et les remboursements manuels.",
      stats: [
        { value: "-80%", label: "Temps admin" },
        { value: "1", label: "Facture/mois" },
        { value: "0", label: "Avances de frais" },
      ],
    },
    {
      key: "application",
      label: "Application",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      image: imgAppEmploye,
      description: "Offrez à vos collaborateurs une expérience de réservation fluide et prioritaire. Réservation en 3 clics, chauffeurs certifiés, traçabilité complète.",
      stats: [
        { value: "3", label: "Clics pour réserver" },
        { value: "24/7", label: "Disponibilité" },
        { value: "5★", label: "Expérience" },
      ],
    },
  ];

  const activeData = tabs.find(t => t.key === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        /* ── Entry animation ── */
        .bp-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .bp-section.visible { opacity: 1; transform: translateY(0); }

        /* ── Tab slide-in ── */
        @keyframes tabFade {
          from { opacity: 0; transform: translateY(16px) scale(0.99); }
          to   { opacity: 1; transform: translateY(0)  scale(1);    }
        }
        .bp-content-anim { animation: tabFade 0.45s cubic-bezier(0.16,1,0.3,1) both; }

        /* ── Tab button hover ── */
        .bp-tab-btn { transition: all 0.25s ease; }
        .bp-tab-btn:not(.active):hover {
          background: ${C.marine}0A !important;
          color: ${C.marine} !important;
        }

        /* ── Image zoom on hover ── */
        .bp-mockup-img { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .bp-img-frame:hover .bp-mockup-img { transform: scale(1.015); }

        /* ── Stat card lift ── */
        .bp-stat-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .bp-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px ${C.marine}14 !important;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bp-inner { padding: 60px 5% !important; }
          .bp-stats-row { gap: 12px !important; }
        }
        @media (max-width: 768px) {
          .bp-h2 { font-size: 26px !important; }
          .bp-tabs-inner { gap: 2px !important; }
          .bp-tab-btn { padding: 10px 14px !important; font-size: 12px !important; }
          .bp-tab-label { display: none; }
          .bp-stats-row { flex-direction: column !important; }
          .bp-stat-card { flex-direction: row !important; gap: 12px !important; align-items: center !important; }
        }
      `}</style>

      <section
        id="business-platform"
        className={`bp-section ${isVisible ? "visible" : ""}`}
        style={{
          fontFamily: "'Open Sans', sans-serif", /* Body — Open Sans 18px Regular */
          fontSize: "18px",
          background: C.lightGray,             /* Gris Clair — fonds */
          padding: "0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Subtle top accent line ── */}
        <div style={{
          height: "3px",
          background: `linear-gradient(90deg, ${C.marine}, ${C.cyan}, ${C.sky})`,
        }} />

        {/* ── Background decoration ── */}
        <div style={{
          position: "absolute",
          top: "-200px", right: "-200px",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.cyan}0C, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div className="bp-inner" style={{
          position: "relative", zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 5% 80px",
        }}>

          {/* ─────── HEADER ─────── */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px 6px 12px",
              background: `${C.marine}0D`,
              border: `1px solid ${C.marine}1A`,
              borderLeft: `3px solid ${C.cyan}`,
              borderRadius: "4px",
              marginBottom: "20px",
            }}>
              <span style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: C.cyan,
                display: "inline-block",
              }} />
              {/* Badge text — Montserrat 700, uppercase per brand */}
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: C.marine,
              }}>Interface Intuitive</span>
            </div>

            {/* H2 — Montserrat SemiBold 32px (Headline 2 — charte) */}
            <h2 className="bp-h2" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "32px",       /* Headline 2: 32px SemiBold */
              fontWeight: "600",      /* SemiBold */
              color: C.marine,
              lineHeight: "1.25",
              letterSpacing: "-0.02em",
              margin: "0 auto 16px",
              maxWidth: "640px",
            }}>
              Une plateforme pensée{" "}
              <span style={{ color: C.cyan }}>pour vos équipes</span>
            </h2>

            {/* Body text — Open Sans Regular 18px (charte) */}
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "18px",       /* Body Text: 18px Regular */
              fontWeight: "400",      /* Regular */
              color: C.anthracite,    /* Gris Anthracite — textes corps */
              lineHeight: "1.7",
              maxWidth: "520px",
              margin: "0 auto",
            }}>
              Trois outils intégrés pour piloter, facturer et simplifier la mobilité de votre entreprise.
            </p>
          </div>

          {/* ─────── TABS ─────── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
            <div className="bp-tabs-inner" style={{
              display: "inline-flex",
              gap: "4px",
              background: C.white,
              padding: "6px",
              borderRadius: "14px",
              boxShadow: `0 2px 12px ${C.marine}0F, 0 0 0 1px ${C.marine}0A`,
            }}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    className={`bp-tab-btn${isActive ? " active" : ""}`}
                    onClick={() => handleTabChange(tab.key)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 28px",
                      borderRadius: "10px",
                      border: "none",
                      cursor: "pointer",
                      /* Montserrat SemiBold for UI labels — brand */
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: isActive ? C.white : C.anthracite,
                      background: isActive ? C.marine : "transparent",
                      boxShadow: isActive ? `0 4px 14px ${C.marine}35` : "none",
                    }}
                  >
                    <span style={{ opacity: isActive ? 1 : 0.6 }}>{tab.icon}</span>
                    <span className="bp-tab-label">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─────── CONTENT AREA ─────── */}
          <div key={animKey} className="bp-content-anim">

            {/* Image Card */}
            <div className="bp-img-frame" style={{
              background: C.white,
              borderRadius: "20px",
              padding: "12px",
              boxShadow: `0 24px 60px ${C.marine}12, 0 0 0 1px ${C.marine}08`,
              overflow: "hidden",
              marginBottom: "32px",
              position: "relative",
            }}>
              {/* Top gradient bar — brand colors */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${C.marine}, ${C.cyan}, ${C.sky})`,
                zIndex: 2,
                borderRadius: "20px 20px 0 0",
              }} />

              <img
                className="bp-mockup-img"
                src={activeData.image}
                alt={activeData.label}
                style={{
                  width: "100%",
                  maxHeight: "520px",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "12px",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.src = `https://placehold.co/1100x520/${C.lightGray.replace("#","")}/${C.anthracite.replace("#","")}?text=${activeData.label}`;
                }}
              />
            </div>

            {/* ── Bottom row: description + stats ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "32px",
              alignItems: "center",
            }}>
              {/* Description — Open Sans 18px Regular (body text — charte) */}
              <div>
                {/* Feature label — Montserrat SemiBold, secondary heading */}
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: C.cyan,
                  textTransform: "uppercase",
                  letterSpacing: "1.2px",
                  marginBottom: "10px",
                }}>
                  {activeData.label}
                </p>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "18px",       /* Body Text 18px Regular — charte */
                  fontWeight: "400",
                  color: C.anthracite,    /* Gris Anthracite — textes corps */
                  lineHeight: "1.75",
                  maxWidth: "600px",
                  margin: 0,
                }}>
                  {activeData.description}
                </p>
              </div>

              {/* Stat cards */}
              <div className="bp-stats-row" style={{
                display: "flex",
                gap: "16px",
                flexShrink: 0,
              }}>
                {activeData.stats.map((stat, i) => (
                  <div key={i} className="bp-stat-card" style={{
                    background: C.white,
                    border: `1px solid ${C.marine}0F`,
                    borderBottom: `3px solid ${i === 0 ? C.marine : i === 1 ? C.cyan : C.sky}`,
                    borderRadius: "12px",
                    padding: "16px 20px",
                    textAlign: "center",
                    minWidth: "90px",
                    boxShadow: `0 4px 14px ${C.marine}08`,
                  }}>
                    {/* Stat value — Montserrat Bold (headline weight) */}
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "22px",
                      fontWeight: "700",
                      color: C.marine,
                      lineHeight: "1",
                      marginBottom: "6px",
                    }}>{stat.value}</div>
                    {/* Stat label — Open Sans secondary */}
                    <div style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: C.anthracite,    /* Gris Anthracite — éléments secondaires */
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      lineHeight: "1.3",
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {/* ── end content-anim ── */}

        </div>
      </section>
    </>
  );
};

export default BusinessPlatform;