import React, { useState, useEffect, useRef } from "react";
import innoLogo from "../assets/logo.png";

// ── PALETTE OFFICIELLE INNO (stricte) ────────────────────────
// #003da6 → Bleu Foncé   |   #0084cc → Bleu Clair   |   #49ce54 → Vert

const INNO = {
  bleuFonce: "#003da6",
  bleuClair: "#0084cc",
  vert:      "#49ce54",
  noir:      "#080f1e",
  blanc:     "#ffffff",
  gris:      "#f4f7fc",
  texte:     "#374151",
  muted:     "#6b7280",
};

// ── Features avec couleur d'accent officielle ──
const features = [
  {
    n: "01",
    title: "Sécurité\ngarantie",
    text: "Vérification biométrique, suivi GPS en temps réel et assurance intégrée pour chaque trajet.",
    accent: INNO.bleuFonce,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Réservation\nen 2 clics",
    text: "Interface pensée pour la vitesse. De l'ouverture de l'app à la confirmation : moins de 20 secondes.",
    accent: INNO.bleuClair,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Réseau\nnational",
    text: "500+ chauffeurs certifiés à Tunis, Sfax, Sousse et 12 autres villes. Disponibles 24h/24.",
    accent: INNO.vert,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Prix\ntransparents",
    text: "Tarif annoncé avant départ, sans surprises. Paiement en espèces, carte ou wallet.",
    accent: INNO.bleuFonce,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

// ── Counter hook ──
const useCounter = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const About = () => {
  const [hovered, setHovered] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const c1 = useCounter(500, 1600, inView);
  const c2 = useCounter(98,  1400, inView);
  const c3 = useCounter(14,  1200, inView);
  const c4 = useCounter(24,  1000, inView);

  const kpis = [
    { val: c1, suffix: "+", label: "Chauffeurs certifiés", accent: INNO.vert      },
    { val: c2, suffix: "%", label: "Taux de satisfaction",  accent: INNO.bleuClair },
    { val: c3, suffix: "",  label: "Villes couvertes",      accent: INNO.bleuFonce },
    { val: c4, suffix: "/7", label: "Disponibilité totale", accent: INNO.vert      },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;1,800&family=Open+Sans:wght@400;500;600&display=swap');

        /* ── Section entrance ── */
        @keyframes revealUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .rv { animation: revealUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .rv-1 { animation-delay: 0.05s; }
        .rv-2 { animation-delay: 0.15s; }
        .rv-3 { animation-delay: 0.25s; }
        .rv-4 { animation-delay: 0.35s; }

        /* ── Logo ── */
        @keyframes logoSpin {
          0%,100%{ transform: translateY(0) rotate(-2deg) scale(1); }
          50%    { transform: translateY(-16px) rotate(2deg) scale(1.04); }
        }
        .inno-logo { animation: logoSpin 10s ease-in-out infinite; }

        /* ── KPI counter ── */
        @keyframes kpiIn {
          from { opacity:0; transform:translateY(20px) scale(0.9); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .kpi-in { animation: kpiIn 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .kpi-1  { animation-delay: 0.1s; }
        .kpi-2  { animation-delay: 0.2s; }
        .kpi-3  { animation-delay: 0.3s; }
        .kpi-4  { animation-delay: 0.4s; }

        /* ── Feature cards ── */
        .feat-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .feat-card:hover {
          transform: translateY(-8px) !important;
        }
        .feat-card-bar {
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 3px;
          border-radius: 3px;
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .feat-card:hover .feat-card-bar { width: 100%; }
        .feat-card-num {
          position: absolute;
          bottom: -10px; right: 16px;
          font-family: 'Montserrat', sans-serif;
          font-size: 72px; font-weight: 800;
          opacity: 0.04;
          line-height: 1;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
          user-select: none;
        }
        .feat-card:hover .feat-card-num { opacity: 0.07; transform: scale(1.05); }

        /* ── Marquee trust bar ── */
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .about-top-grid { grid-template-columns: 1fr !important; }
          .about-feat-grid { grid-template-columns: 1fr 1fr !important; }
          .kpi-strip { grid-template-columns: 1fr 1fr !important; }
          .inno-logo { display: none; }
        }
        @media (max-width: 560px) {
          .about-feat-grid { grid-template-columns: 1fr !important; }
          .kpi-strip { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <section ref={sectionRef} style={{
        fontFamily: "'Open Sans', sans-serif",
        isolation: "isolate",
      }}>

        {/* ══════════════════════════════════════
            BLOCK 1 — Header + KPI strip
        ══════════════════════════════════════ */}
        <div style={{
          padding: "100px 8% 80px",
          background: INNO.blanc,
          position: "relative",
        }}>

          {/* Accent bar top */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "4px",
            background: `linear-gradient(90deg, ${INNO.bleuFonce} 0%, ${INNO.bleuClair} 50%, ${INNO.vert} 100%)`,
          }}/>

          {/* Subtle bg pattern */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `
              radial-gradient(circle at 0% 100%, ${INNO.vert}0c 0%, transparent 45%),
              radial-gradient(circle at 100% 0%, ${INNO.bleuClair}0c 0%, transparent 45%)
            `,
          }}/>

          <div className="about-top-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "60px",
            alignItems: "flex-end",
            position: "relative", zIndex: 1,
          }}>
            <div>

              {/* Eyebrow */}
              <div className={inView ? "rv rv-1" : ""} style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "6px 14px 6px 10px",
                background: `${INNO.bleuFonce}0e`,
                border: `1px solid ${INNO.bleuFonce}20`,
                borderRadius: "100px", marginBottom: "24px",
              }}>
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: INNO.vert,
                  boxShadow: `0 0 8px ${INNO.vert}`,
                }}/>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11.5px", fontWeight: "700",
                  color: INNO.bleuFonce, letterSpacing: "1.2px",
                  textTransform: "uppercase",
                }}>Pourquoi Inno ?</span>
              </div>

              {/* H2 */}
              <h2 className={inView ? "rv rv-2" : ""} style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: "800",
                lineHeight: "1.06",
                letterSpacing: "-0.04em",
                color: INNO.noir,
                margin: "0 0 20px",
              }}>
                Le standard qui
                <br />
                <em style={{
                  fontStyle: "italic",
                  background: `linear-gradient(100deg, ${INNO.bleuFonce}, ${INNO.bleuClair})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>redéfinit la mobilité.</em>
              </h2>

              {/* Accent rules */}
              <div className={inView ? "rv rv-2" : ""} style={{
                display: "flex", alignItems: "center", gap: "8px", marginBottom: "22px",
              }}>
                <div style={{ width: "48px", height: "3px", borderRadius: "3px", background: INNO.vert }}/>
                <div style={{ width: "16px", height: "3px", borderRadius: "3px", background: `${INNO.vert}66` }}/>
                <div style={{ width: "6px", height: "3px", borderRadius: "3px", background: `${INNO.vert}33` }}/>
              </div>

              <p className={inView ? "rv rv-3" : ""} style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: "17px", fontWeight: "400",
                color: INNO.texte, lineHeight: "1.8",
                maxWidth: "520px", margin: 0,
              }}>
Né en Tunisie, conçu pour les Tunisiens. Chaque trajet reflète
notre engagement : fiabilité, sécurité et service d'exception. 
              </p>
            </div>

            {/* Logo flottant */}
            <div className="inno-logo" style={{ flexShrink: 0 }}>
              <img src={innoLogo} alt="INNO"
                style={{
                  width: "160px", height: "auto",
                  filter: `drop-shadow(0 20px 40px ${INNO.bleuClair}33)`,
                }}
              />
            </div>
          </div>

          {/* KPI STRIP */}
          <div className="kpi-strip" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            marginTop: "64px",
            background: `${INNO.bleuFonce}10`,
            borderRadius: "20px",
            overflow: "hidden",
            border: `1px solid ${INNO.bleuFonce}10`,
          }}>
            {kpis.map((k, i) => (
              <div key={i} className={inView ? `kpi-in kpi-${i+1}` : ""} style={{
                background: INNO.blanc,
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Top accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "3px", background: k.accent,
                }}/>
                {/* Bg glow */}
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "100px", height: "100px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${k.accent}12, transparent 70%)`,
                  filter: "blur(20px)", pointerEvents: "none",
                }}/>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: "800",
                  color: k.accent,
                  lineHeight: 1, marginBottom: "8px",
                  display: "flex", alignItems: "baseline", gap: "2px",
                }}>
                  <span>{k.val}</span>
                  <span style={{ fontSize: "0.55em" }}>{k.suffix}</span>
                </div>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px", fontWeight: "500",
                  color: INNO.muted, margin: 0, lineHeight: "1.4",
                }}>{k.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            BLOCK 2 — Feature cards (dark bg)
        ══════════════════════════════════════ */}
<div style={{
  background: `linear-gradient(135deg, #eef3fc 0%, #f0f8ff 50%, #edfbee 100%)`,
  padding: "90px 8%",
  position: "relative",
  isolation: "isolate",
}}>

          {/* Dark bg texture */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
            backgroundImage: `
              radial-gradient(circle at 15% 50%, #003da622 0%, transparent 45%),
              radial-gradient(circle at 85% 30%, #49ce5412 0%, transparent 40%)
            `,
          }}/>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}/>

          {/* Section label */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", marginBottom: "56px",
            position: "relative", zIndex: 1,
          }}>
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: "700", color: INNO.noir,
              letterSpacing: "-0.03em", margin: 0,
            }}>
              Ce qui nous distingue
            </h3>
            <div style={{
              display: "flex", gap: "6px", alignItems: "center",
            }}>
              {[INNO.bleuFonce, INNO.bleuClair, INNO.vert].map((c, i) => (
                <div key={i} style={{
                  width: i === 2 ? "24px" : "8px",
                  height: "8px", borderRadius: "4px",
                  background: c, opacity: 0.8,
                  transition: "width 0.3s",
                }}/>
              ))}
            </div>
          </div>

          {/* Feature grid */}
          <div className="about-feat-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            position: "relative", zIndex: 1,
          }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="feat-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i
                    ? `linear-gradient(145deg, ${f.accent}28, rgba(255,255,255,0.05))`
                    : "rgba(255,255,255,0.05)",
                  border: `1.5px solid ${hovered === i ? f.accent : "rgba(255,255,255,0.10)"}`,
                  borderRadius: "20px",
                  padding: "36px 28px 40px",
                  boxShadow: hovered === i
                    ? `0 24px 60px -12px ${f.accent}33`
                    : "none",
                }}
              >
                {/* Number watermark */}
                <div className="feat-card-num" style={{ color: INNO.noir }}>{f.n}</div>

                {/* Icon */}
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px",
                  background: hovered === i ? f.accent : `${f.accent}18`,
                  color: hovered === i ? INNO.noir : f.accent,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "28px",
                  transition: "all 0.35s ease",
                  boxShadow: hovered === i ? `0 8px 24px ${f.accent}55` : "none",
                }}>
                  {f.icon}
                </div>

                {/* Title */}
                <h4 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "18px", fontWeight: "700",
                  color: INNO.noir,
                  margin: "0 0 14px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.02em",
                  whiteSpace: "pre-line",
                }}>{f.title}</h4>

                {/* Body */}
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px", fontWeight: "400",
  color: INNO.muted,       /* ✅ was rgba(255,255,255,0.55) */
                  lineHeight: "1.7", margin: 0,
                }}>{f.text}</p>

                {/* Bottom bar */}
                <div className="feat-card-bar" style={{ background: f.accent }}/>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            BLOCK 3 — Marquee trust strip
        ══════════════════════════════════════ */}
        <div style={{
          background: INNO.gris,
          padding: "32px 0",
          borderTop: `1px solid ${INNO.bleuFonce}0c`,
          borderBottom: `1px solid ${INNO.bleuFonce}0c`,
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Fade edges */}
          <div style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: "120px", zIndex: 2,
            background: `linear-gradient(90deg, ${INNO.gris}, transparent)`,
          }}/>
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: "120px", zIndex: 2,
            background: `linear-gradient(270deg, ${INNO.gris}, transparent)`,
          }}/>

          <div className="marquee-track">
            {[...Array(2)].map((_, rep) => (
              [
                { icon: "🛡", text: "Chauffeurs vérifiés" },
                { icon: "⭐", text: "Note 4.9/5" },
                { icon: "📍", text: "14 villes" },
                { icon: "⚡", text: "Arrivée en 3 min" },
                { icon: "🔒", text: "Paiement sécurisé" },
                { icon: "📞", text: "Support 24/7" },
                { icon: "🚗", text: "500+ chauffeurs" },
                { icon: "✅", text: "Certifié INNO" },
              ].map((item, i) => (
                <div key={`${rep}-${i}`} style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  padding: "0 36px",
                  borderRight: `1px solid ${INNO.bleuFonce}14`,
                  whiteSpace: "nowrap",
                }}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px", fontWeight: "600",
                    color: INNO.texte, letterSpacing: "0.3px",
                  }}>{item.text}</span>
                </div>
              ))
            ))}
          </div>
        </div>

        
      </section>
    </>
  );
};

export default About;