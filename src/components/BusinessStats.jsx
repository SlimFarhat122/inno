import React, { useEffect, useRef, useState } from "react";

const BusinessStats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // ── PALETTE OFFICIELLE INNO BUSINESS 2026 ──────────────────────
  const C = {
    marine:     "#003DA7",   // Bleu Marine        — Couleur Primaire
    cyan:       "#008BD3",   // Cyan Dynamique     — Couleur Primaire
    anthracite: "#374151",   // Gris Anthracite    — Textes corps, éléments secondaires
    lightGray:  "#F3F4F6",   // Gris Clair         — Fonds, séparateurs
    sky:        "#38BDF8",   // Bleu Ciel          — Éléments interactifs, liens
    white:      "#FFFFFF",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        /* ── Section entrance ── */
        .bst-section {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1),
                      transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .bst-section.visible { opacity: 1; transform: none; }

        /* ── Header stagger ── */
        .bst-header > * {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .bst-section.visible .bst-header > *:nth-child(1) { opacity:1; transform:none; transition-delay:0.1s; }
        .bst-section.visible .bst-header > *:nth-child(2) { opacity:1; transform:none; transition-delay:0.2s; }
        .bst-section.visible .bst-header > *:nth-child(3) { opacity:1; transform:none; transition-delay:0.3s; }

        /* ── Bento card entrance stagger ── */
        .bst-card {
          opacity: 0;
          transform: translateY(24px) scale(0.98);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1),
                      transform 0.6s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .bst-section.visible .bst-card:nth-child(1) { opacity:1; transform:none; transition-delay:0.15s; }
        .bst-section.visible .bst-card:nth-child(2) { opacity:1; transform:none; transition-delay:0.25s; }
        .bst-section.visible .bst-card:nth-child(3) { opacity:1; transform:none; transition-delay:0.35s; }
        .bst-section.visible .bst-card:nth-child(4) { opacity:1; transform:none; transition-delay:0.42s; }
        .bst-section.visible .bst-card:nth-child(5) { opacity:1; transform:none; transition-delay:0.49s; }
        .bst-section.visible .bst-card:nth-child(6) { opacity:1; transform:none; transition-delay:0.56s; }

        /* ── Card hover ── */
        .bst-card:hover {
          transform: translateY(-8px) scale(1.01) !important;
          z-index: 10;
        }
        .bst-card-light:hover {
          border-color: ${C.cyan} !important;
          box-shadow: 0 20px 50px rgba(0,61,167,0.12) !important;
        }
        .bst-card-dark:hover {
          box-shadow: 0 20px 50px rgba(0,61,167,0.35) !important;
        }

        /* ── Shine sweep ── */
        .bst-card::before {
          content: '';
          position: absolute;
          top: 0; left: -70%;
          width: 45%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.1) 50%, transparent);
          transform: skewX(-18deg);
          transition: left 0.55s ease;
          pointer-events: none;
          z-index: 2;
          border-radius: inherit;
        }
        .bst-card:hover::before { left: 130%; }

        /* ── Bento grid ── */
        .bst-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 170px;
          gap: 18px;
        }

        .bst-span-large  { grid-column: span 3; grid-row: span 2; }
        .bst-span-medium { grid-column: span 3; grid-row: span 1; }
        .bst-span-small  { grid-column: span 2; grid-row: span 1; }

        /* ── Counter animation ── */
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 0.08; transform: translateY(0); }
        }
        .bst-watermark {
          animation: countUp 0.8s 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bst-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            grid-auto-rows: 150px !important;
          }
          .bst-span-large  { grid-column: span 4; grid-row: span 2; }
          .bst-span-medium { grid-column: span 2; grid-row: span 1; }
          .bst-span-small  { grid-column: span 2; grid-row: span 1; }
        }
        @media (max-width: 768px) {
          .bst-h2 { font-size: 26px !important; }
          .bst-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: auto !important;
            gap: 12px !important;
          }
          .bst-span-large  { grid-column: span 2 !important; grid-row: span 1 !important; min-height: 200px; }
          .bst-span-medium { grid-column: span 2 !important; grid-row: span 1 !important; }
          .bst-span-small  { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        @media (max-width: 480px) {
          .bst-h2 { font-size: 22px !important; }
          .bst-grid { grid-template-columns: 1fr !important; }
          .bst-span-large, .bst-span-medium, .bst-span-small {
            grid-column: span 1 !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`bst-section ${isVisible ? "visible" : ""}`}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "18px",
          padding: "100px 5%",
          background: C.white,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Subtle background glow ── */}
        <div style={{
          position: "absolute", top: "10%", right: "-5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, ${C.sky}08, transparent 70%)`,
          filter: "blur(80px)", zIndex: 0, pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ─────── HEADER ─────── */}
          <div className="bst-header" style={{
            marginBottom: "56px",
            borderLeft: `3px solid ${C.cyan}`,
            paddingLeft: "24px",
          }}>
            {/* Badge — Montserrat Bold, brand UI label */}
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px", fontWeight: "700",
              color: C.cyan,
              textTransform: "uppercase", letterSpacing: "1.8px",
              display: "block", marginBottom: "12px",
            }}>Inno Ecosystem</span>

            {/* H2 — Montserrat SemiBold 32px (Headline 2 — charte) */}
            <h2 className="bst-h2" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "32px",     /* Headline 2: 32px SemiBold */
              fontWeight: "600",    /* SemiBold */
              color: C.marine,
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              maxWidth: "560px",
              margin: "0 0 12px",
            }}>
              L'infrastructure de mobilité{" "}
              <span style={{ color: C.cyan }}>pour votre croissance.</span>
            </h2>

            {/* Body text — Open Sans Regular 18px (charte) */}
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "18px",    /* Body Text: 18px Regular */
              fontWeight: "400",   /* Regular */
              color: C.anthracite, /* Gris Anthracite — textes corps */
              lineHeight: "1.7",
              maxWidth: "480px",
              margin: 0,
            }}>
              Des outils pensés pour performer, mesurer et simplifier chaque aspect de votre mobilité.
            </p>
          </div>

          {/* ─────── BENTO GRID ─────── */}
          <div className="bst-grid">

            {/* ── 1. LARGE — Rentabilité ── */}
            <div
              className="bst-card bst-card-light bst-span-large"
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: C.lightGray,
                borderRadius: "20px",
                padding: "32px",
                border: `1.5px solid ${C.marine}08`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 4px 24px ${C.marine}06`,
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: `linear-gradient(90deg, ${C.marine}, ${C.cyan})`,
                borderRadius: "20px 20px 0 0",
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Card label — Montserrat Bold */}
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px", fontWeight: "700",
                  color: C.cyan,
                  textTransform: "uppercase", letterSpacing: "1.5px",
                  display: "block", marginBottom: "14px",
                }}>Rentabilité</span>

                {/* Card title — Montserrat SemiBold */}
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "22px", fontWeight: "700",
                  color: C.marine, lineHeight: "1.2",
                  margin: "0 0 12px",
                }}>Optimisation des coûts</h3>

                {/* Card desc — Open Sans Regular (body text) */}
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "15px", fontWeight: "400",
                  color: C.anthracite, lineHeight: "1.7",
                  margin: 0, maxWidth: "340px",
                }}>
                  Nos algorithmes prédictifs réduisent vos dépenses de mobilité jusqu'à 30% grâce à une gestion intelligente des flux et des itinéraires.
                </p>
              </div>

              {/* Watermark number */}
              <div className="bst-watermark" style={{
                position: "absolute", bottom: "-16px", right: "16px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "120px", fontWeight: "800",
                color: C.marine, opacity: 0.06,
                lineHeight: "1", userSelect: "none",
                pointerEvents: "none",
              }}>-30%</div>

              {/* Stat pill */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                position: "relative", zIndex: 1,
              }}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "48px", fontWeight: "800",
                  color: C.marine, lineHeight: "1",
                }}>−30%</div>
                <div style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px", fontWeight: "600",
                  color: C.anthracite + "99",
                  textTransform: "uppercase", letterSpacing: "0.5px",
                  lineHeight: "1.4",
                }}>
                  de frais<br/>de transport
                </div>
              </div>
            </div>

            {/* ── 2. MEDIUM — Opérations ── */}
            <div
              className="bst-card bst-card-light bst-span-medium"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: C.white,
                borderRadius: "20px",
                padding: "28px",
                border: `1.5px solid ${C.marine}0A`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 4px 24px ${C.marine}06`,
              }}
            >
              <div>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px", fontWeight: "700",
                  color: C.cyan, textTransform: "uppercase",
                  letterSpacing: "1.5px", display: "block", marginBottom: "10px",
                }}>Opérations</span>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px", fontWeight: "700",
                  color: C.marine, margin: "0 0 8px", lineHeight: "1.2",
                }}>Automatisation 360°</h3>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px", fontWeight: "400",
                  color: C.anthracite, lineHeight: "1.6", margin: 0,
                }}>
                  Facturation centralisée et exports comptables automatiques chaque mois.
                </p>
              </div>

              {/* Feature tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["Facture unique", "Export CSV", "API"].map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px", fontWeight: "700",
                    color: C.marine,
                    background: `${C.marine}0C`,
                    padding: "4px 10px", borderRadius: "20px",
                    textTransform: "uppercase", letterSpacing: "0.5px",
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* ── 3. MEDIUM — Intelligence (DARK) ── */}
            <div
              className="bst-card bst-card-dark bst-span-medium"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: C.marine,
                borderRadius: "20px",
                padding: "28px",
                border: `1.5px solid ${C.cyan}20`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 8px 32px ${C.marine}40`,
              }}
            >
              {/* Glow inside dark card */}
              <div style={{
                position: "absolute", top: "-40%", right: "-20%",
                width: "200px", height: "200px", borderRadius: "50%",
                background: `radial-gradient(circle, ${C.cyan}30, transparent 70%)`,
                filter: "blur(30px)", pointerEvents: "none", zIndex: 0,
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Label — Bleu Ciel (interactive on dark — charte) */}
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px", fontWeight: "700",
                  color: C.sky,   /* Bleu Ciel — éléments interactifs */
                  textTransform: "uppercase", letterSpacing: "1.5px",
                  display: "block", marginBottom: "10px",
                }}>Intelligence</span>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px", fontWeight: "700",
                  color: "#FFFFFF", margin: "0 0 8px", lineHeight: "1.2",
                }}>Gouvernance Data</h3>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px", fontWeight: "400",
                  color: "rgba(255,255,255,0.65)", lineHeight: "1.6", margin: 0,
                }}>
                  Accédez à un reporting analytique complet en temps réel.
                </p>
              </div>

              {/* Live badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                position: "relative", zIndex: 1,
              }}>
                <span style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: C.sky, display: "inline-block",
                  boxShadow: `0 0 8px ${C.sky}`,
                }} />
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px", fontWeight: "700",
                  color: C.sky, textTransform: "uppercase", letterSpacing: "1px",
                }}>Live Dashboard</span>
              </div>
            </div>

            {/* ── 4. SMALL — Tracking ── */}
            <div
              className="bst-card bst-card-light bst-span-small"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: C.white,
                borderRadius: "20px",
                padding: "24px",
                border: `1.5px solid ${C.marine}0A`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 4px 24px ${C.marine}06`,
              }}
            >
              {/* Icon */}
              <div style={{
                width: "36px", height: "36px", borderRadius: "9px",
                background: `${C.marine}0C`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.marine, marginBottom: "10px",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px", fontWeight: "700",
                  color: C.marine, margin: "0 0 6px",
                }}>Tracking 24/7</h3>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "12px", fontWeight: "400",
                  color: C.anthracite, lineHeight: "1.5", margin: 0,
                }}>Protocoles de sécurité certifiés pour vos équipes.</p>
              </div>
            </div>

            {/* ── 5. SMALL — Expérience VIP ── */}
            <div
              className="bst-card bst-card-light bst-span-small"
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: `linear-gradient(135deg, ${C.cyan}10, ${C.sky}08)`,
                borderRadius: "20px",
                padding: "24px",
                border: `1.5px solid ${C.cyan}20`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 4px 24px ${C.cyan}0A`,
              }}
            >
              <div style={{
                width: "36px", height: "36px", borderRadius: "9px",
                background: `${C.cyan}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.cyan, marginBottom: "10px",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px", fontWeight: "700",
                  color: C.marine, margin: "0 0 6px",
                }}>Expérience VIP</h3>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "12px", fontWeight: "400",
                  color: C.anthracite, lineHeight: "1.5", margin: 0,
                }}>Standard Premium et chauffeurs certifiés Inno.</p>
              </div>
            </div>

            {/* ── 6. SMALL — Support Local ── */}
            <div
              className="bst-card bst-card-light bst-span-small"
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: C.marine,
                borderRadius: "20px",
                padding: "24px",
                border: `1.5px solid ${C.cyan}20`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 8px 28px ${C.marine}35`,
              }}
            >
              <div style={{
                width: "36px", height: "36px", borderRadius: "9px",
                background: "rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.sky, marginBottom: "10px",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px", fontWeight: "700",
                  color: C.white, margin: "0 0 6px",
                }}>Support Local</h3>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "12px", fontWeight: "400",
                  color: "rgba(255,255,255,0.6)", lineHeight: "1.5", margin: 0,
                }}>Expertise et réactivité Inno Tunisie 24h/7j.</p>
              </div>
            </div>

          </div>
          {/* ── end bento grid ── */}

        </div>
      </section>
    </>
  );
};

export default BusinessStats;