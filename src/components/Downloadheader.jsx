import React, { useState, useEffect, useRef } from "react";
import googlePlayLogo from "../assets/google-play.png";

const INNO = {
  bleuFonce: "#003da6",
  bleuClair: "#0084cc",
  vert:      "#49ce54",
  noir:      "#080f1e",
  blanc:     "#ffffff",
  grisTexte: "#5a6a85",
  grisFond:  "#f4f7fc",
  texte:     "#1a2236",
  muted:     "#6b7280",
};

const Downloadheader = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const cards = [
    {
      id: "passenger",
      label: "Passager",
      title: "Je veux\nun chauffeur",
      desc: "Réservez en 20 secondes. Trajet suivi, prix fixe, chauffeur certifié.",
      accent: INNO.bleuFonce,
      accentLight: INNO.bleuClair,
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      id: "driver",
      label: "Chauffeur",
      title: "Je veux\nconduire",
      desc: "Rejoignez 500+ chauffeurs certifiés. Flexibilité totale, revenus garantis.",
      accent: INNO.vert,
      accentLight: "#2ecc3a",
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
        </svg>
      ),
    },
  ];

  const appleIcon = (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const googleIcon = () => (
    <img src={googlePlayLogo} alt="Google Play" width="22" height="22" style={{ objectFit: "contain" }} />
  );

  const storeButtons = {
    passenger: [
      { id: "apple", top: "TÉLÉCHARGER SUR", bottom: "App Store",   href: "https://apps.apple.com/us/app/inno-app/id6448847710",                          icon: (c) => appleIcon(c)  },
      { id: "play",  top: "DISPONIBLE SUR",  bottom: "Google Play", href: "https://play.google.com/store/apps/details?id=tn.innocustomer.android",         icon: () => googleIcon() },
    ],
    driver: [
      { id: "apple", top: "TÉLÉCHARGER SUR", bottom: "App Store",   href: "https://apps.apple.com/us/app/inno-driver-app/id6760570381",                    icon: (c) => appleIcon(c)  },
      { id: "play",  top: "DISPONIBLE SUR",  bottom: "Google Play", href: "https://play.google.com/store/apps/details?id=tn.innodriver.android",            icon: () => googleIcon() },
    ],
  };

  const trust = [
    { icon: "🛡", text: "100% sécurisé" },
    { icon: "⭐", text: "Note 4.9/5" },
    { icon: "⚡", text: "Arrivée 3 min" },
    { icon: "🔒", text: "Paiement sécurisé" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800&family=Open+Sans:wght@400;500;600&display=swap');

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dl-rv   { animation: revealUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .dl-rv-1 { animation-delay: 0.05s; }
        .dl-rv-2 { animation-delay: 0.15s; }
        .dl-rv-3 { animation-delay: 0.25s; }
        .dl-rv-4 { animation-delay: 0.38s; }

        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(73,206,84,0.5); }
          60%     { box-shadow: 0 0 0 7px rgba(73,206,84,0); }
        }
        .dl-pulse { animation: pulseDot 2.2s infinite; }

        .dl-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          padding: 36px 28px 32px;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
        }
        .dl-card:hover { transform: translateY(-8px); }

        .dl-card-bar {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px; width: 0;
          border-radius: 3px;
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .dl-card:hover .dl-card-bar { width: 100%; }

        .dl-card-num {
          position: absolute;
          bottom: -12px; right: 16px;
          font-family: 'Montserrat', sans-serif;
          font-size: 80px; font-weight: 900;
          opacity: 0.04; line-height: 1;
          pointer-events: none; user-select: none;
          transition: opacity 0.4s ease;
        }
        .dl-card:hover .dl-card-num { opacity: 0.08; }

        .dl-store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1.5px solid;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          text-decoration: none;
          width: 100%;
        }

        .dl-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 24px;
          border-right: 1px solid;
        }
        .dl-trust-item:last-child { border-right: none; }

        @media (max-width: 640px) {
          .dl-grid { grid-template-columns: 1fr !important; }
          .dl-trust { flex-wrap: wrap; justify-content: center !important; }
          .dl-trust-item { border-right: none !important; padding: 8px 16px; }
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          background: INNO.blanc,
          padding: "80px 4% 72px",
          position: "relative",
          isolation: "isolate",
          borderTop: `1px solid ${INNO.bleuFonce}10`,
        }}
      >

        {/* ── Accent bar top (matches Hero & About) ── */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(90deg, ${INNO.bleuFonce} 0%, ${INNO.bleuClair} 50%, ${INNO.vert} 100%)`,
        }}/>

        {/* ── Dot grid (matches Hero) ── */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          backgroundImage: `
            linear-gradient(${INNO.bleuFonce}06 1px, transparent 1px),
            linear-gradient(90deg, ${INNO.bleuFonce}06 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}/>

        {/* ── Radial blobs (matches Hero) ── */}
        <div style={{
          position: "absolute", top: "-20%", right: "-5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, ${INNO.bleuClair}08 0%, transparent 65%)`,
          pointerEvents: "none", zIndex: 0,
        }}/>
        <div style={{
          position: "absolute", bottom: "-15%", left: "-5%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: `radial-gradient(circle, ${INNO.vert}07 0%, transparent 65%)`,
          pointerEvents: "none", zIndex: 0,
        }}/>

        {/* ── Dot cluster accents (matches About) ── */}
        <div style={{
          position: "absolute", top: "40px", right: "4%",
          width: "120px", height: "120px", pointerEvents: "none", zIndex: 0,
          backgroundImage: `radial-gradient(circle, ${INNO.bleuFonce}18 1.5px, transparent 1.5px)`,
          backgroundSize: "14px 14px", opacity: 0.5,
        }}/>
        <div style={{
          position: "absolute", bottom: "40px", left: "4%",
          width: "100px", height: "100px", pointerEvents: "none", zIndex: 0,
          backgroundImage: `radial-gradient(circle, ${INNO.vert}22 1.5px, transparent 1.5px)`,
          backgroundSize: "14px 14px", opacity: 0.5,
        }}/>

        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: "52px" }}>

          {/* Eyebrow (matches About) */}
          <div className={inView ? "dl-rv dl-rv-1" : ""} style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "6px 14px 6px 10px",
            background: `${INNO.bleuFonce}0e`,
            border: `1px solid ${INNO.bleuFonce}20`,
            borderRadius: "100px", marginBottom: "20px",
          }}>
            <div className="dl-pulse" style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: INNO.vert, flexShrink: 0,
            }}/>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px", fontWeight: "700",
              color: INNO.bleuFonce, letterSpacing: "1.2px",
              textTransform: "uppercase",
            }}>Disponible maintenant</span>
          </div>

          {/* H2 (matches About h2 style) */}
          <h2 className={inView ? "dl-rv dl-rv-2" : ""} style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(38px, 5vw, 62px)",
            fontWeight: "800",
            lineHeight: "1.06",
            letterSpacing: "-0.04em",
            color: INNO.noir,
            margin: "0 0 16px",
          }}>
            Prêt à partir ?{" "}
            <em style={{
              fontStyle: "italic",
              background: `linear-gradient(100deg, ${INNO.bleuFonce}, ${INNO.bleuClair})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Téléchargez INNO.
            </em>
          </h2>

          {/* Accent rules (matches About) */}
          <div className={inView ? "dl-rv dl-rv-2" : ""} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "8px", marginBottom: "18px",
          }}>
            <div style={{ width: "48px", height: "3px", borderRadius: "3px", background: INNO.vert }}/>
            <div style={{ width: "16px", height: "3px", borderRadius: "3px", background: `${INNO.vert}66` }}/>
            <div style={{ width: "6px",  height: "3px", borderRadius: "3px", background: `${INNO.vert}33` }}/>
          </div>

          <p className={inView ? "dl-rv dl-rv-3" : ""} style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "17px", fontWeight: "600",
            color: INNO.texte, lineHeight: "1.75",
            maxWidth: "460px", margin: "0 auto",
          }}>
            Une app. Deux rôles. Une seule mission : la mobilité sans compromis en Tunisie.
          </p>
        </div>

        {/* ══════════════════════════════════════
            CARDS GRID
        ══════════════════════════════════════ */}
        <div
          className="dl-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            maxWidth: "780px",
            margin: "0 auto 52px",
            position: "relative", zIndex: 1,
          }}
        >
          {cards.map((card, ci) => (
            <div
              key={card.id}
              className={`dl-card ${inView ? `dl-rv dl-rv-${ci + 3}` : ""}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === card.id
                  ? `linear-gradient(145deg, ${card.accent}0d, ${card.accent}06)`
                  : INNO.grisFond,
                border: `1.5px solid ${hoveredCard === card.id ? card.accent : `${INNO.bleuFonce}10`}`,
                boxShadow: hoveredCard === card.id
                  ? `0 20px 48px -12px ${card.accent}28`
                  : "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Number watermark */}
              <div className="dl-card-num" style={{ color: card.accent }}>
                {String(ci + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: hoveredCard === card.id ? card.accent : `${card.accent}15`,
                color: hoveredCard === card.id ? INNO.blanc : card.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
                transition: "all 0.35s ease",
                boxShadow: hoveredCard === card.id ? `0 8px 24px ${card.accent}44` : "none",
              }}>
                {card.icon}
              </div>

              {/* Label */}
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px", fontWeight: "700",
                letterSpacing: "1.2px", textTransform: "uppercase",
                color: card.accent, marginBottom: "6px",
              }}>{card.label}</p>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "22px", fontWeight: "800",
                color: INNO.noir, margin: "0 0 10px",
                lineHeight: "1.25", letterSpacing: "-0.03em",
                whiteSpace: "pre-line",
              }}>{card.title}</h3>

              {/* Desc */}
              <p style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "14px", color: INNO.muted,
                lineHeight: "1.7", margin: "0 0 24px",
              }}>{card.desc}</p>

              {/* Store buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {storeButtons[card.id].map((btn) => {
                  const btnKey = `${card.id}-${btn.id}`;
                  const isHov = hoveredBtn === btnKey;
                  return (
                    <a
                      key={btn.id}
                      href={btn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dl-store-btn"
                      onMouseEnter={() => setHoveredBtn(btnKey)}
                      onMouseLeave={() => setHoveredBtn(null)}
                      style={{
                        borderColor: isHov ? card.accent : `${card.accent}30`,
                        background: isHov ? `${card.accent}0c` : "transparent",
                        color: card.accent,
                        transform: isHov ? "translateX(4px)" : "translateX(0)",
                      }}
                    >
                      <span style={{ flexShrink: 0 }}>{btn.icon(card.accent)}</span>
                      <span>
                        <span style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "10px", color: INNO.muted,
                          display: "block", lineHeight: 1, marginBottom: "2px",
                        }}>{btn.top}</span>
                        <span style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "14px", fontWeight: "700",
                          color: INNO.noir, display: "block", lineHeight: 1,
                        }}>{btn.bottom}</span>
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Bottom bar */}
              <div className="dl-card-bar" style={{ background: card.accent }}/>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════
            TRUST STRIP (matches About marquee style)
        ══════════════════════════════════════ */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", justifyContent: "center",
          flexWrap: "wrap",
          padding: "24px 0 0",
          borderTop: `1px solid ${INNO.bleuFonce}10`,
        }}>
          {trust.map((item, i) => (
            <div
              key={i}
              className="dl-trust-item"
              style={{
                borderRightColor: `${INNO.bleuFonce}12`,
              }}
            >
              <span style={{ fontSize: "15px" }}>{item.icon}</span>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px", fontWeight: "600",
                color: INNO.texte, letterSpacing: "0.2px",
              }}>{item.text}</span>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Downloadheader;