import React, { useState, useRef, useEffect } from "react";

// ── PALETTE OFFICIELLE INNO ──────────────────────────────────
const C = {
  dark:  "#003da6",
  mid:   "#0084cc",
  green: "#49ce54",
  noir:  "#0a0e1a",
  blanc: "#ffffff",
  gris:  "#f4f7fc",
  muted: "#475569",
};

const services = [
  {
    id: "01",
    name: "Taxi Normal",
    tagline: "Votre trajet, rien que le vôtre.",
    accent: C.dark,
    description:
      "Réservez un taxi pour vos déplacements en toute simplicité. Vous voyagez seul et profitez d'un trajet direct vers votre destination, en toute tranquillité. La solution idéale pour les déplacements personnels, professionnels ou urgents — avec plus de confort, d'intimité et de flexibilité.",
    icon: (color) => (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <rect x="4" y="16" width="40" height="22" rx="6" fill={color} opacity="0.12"/>
        <rect x="4" y="16" width="40" height="22" rx="6" stroke={color} strokeWidth="2"/>
        <path d="M12 16 L16 8 H32 L36 16" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <rect x="8" y="20" width="10" height="7" rx="2" fill={color} opacity="0.3"/>
        <rect x="20" y="20" width="8" height="7" rx="2" fill={color} opacity="0.3"/>
        <rect x="30" y="20" width="10" height="7" rx="2" fill={color} opacity="0.3"/>
        <circle cx="14" cy="40" r="4" fill={color}/>
        <circle cx="34" cy="40" r="4" fill={color}/>
        <line x1="2" y1="26" x2="46" y2="26" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3"/>
      </svg>
    ),
    perks: ["Trajet direct", "Confort & intimité", "Disponible 24/7"],
  },
  {
    id: "02",
    name: "+GO",
    tagline: "Partagez les frais, pas les plans.",
    accent: C.mid,
    description:
      "Optez pour une solution plus économique et conviviale. Vous partagez votre trajet avec d'autres passagers se rendant vers une destination commune ou proche. Ce service permet de réduire les coûts de transport tout en optimisant les trajets, pour une mobilité plus pratique et accessible.",
    icon: (color) => (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="16" cy="14" r="6" stroke={color} strokeWidth="2" fill={color} opacity="0.1"/>
        <circle cx="32" cy="14" r="6" stroke={color} strokeWidth="2" fill={color} opacity="0.1"/>
        <circle cx="16" cy="14" r="3" fill={color}/>
        <circle cx="32" cy="14" r="3" fill={color}/>
        <path d="M6 32 C6 26 10 22 16 22 H32 C38 22 42 26 42 32 V36 H6 V32Z" fill={color} opacity="0.12" stroke={color} strokeWidth="2"/>
        <line x1="24" y1="22" x2="24" y2="36" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/>
        <circle cx="13" cy="40" r="3.5" fill={color}/>
        <circle cx="35" cy="40" r="3.5" fill={color}/>
      </svg>
    ),
    perks: ["Économique", "Trajets optimisés", "Accessible"],
  },
  {
    id: "03",
    name: "Partage entre amis",
    tagline: "Ensemble, c'est toujours mieux.",
    accent: C.green,
    description:
      "Voyagez ensemble avec des personnes que vous connaissez. Partagez un taxi avec vos amis, collègues ou proches vers une même destination. L'option idéale pour les sorties, les trajets en groupe ou les déplacements planifiés — tout en partageant les frais dans une ambiance conviviale et rassurante.",
    icon: (color) => (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
        <circle cx="10" cy="14" r="5" stroke={color} strokeWidth="2" fill={color} opacity="0.1"/>
        <circle cx="24" cy="11" r="6" stroke={color} strokeWidth="2" fill={color} opacity="0.15"/>
        <circle cx="38" cy="14" r="5" stroke={color} strokeWidth="2" fill={color} opacity="0.1"/>
        <circle cx="10" cy="14" r="2.5" fill={color} opacity="0.7"/>
        <circle cx="24" cy="11" r="3" fill={color}/>
        <circle cx="38" cy="14" r="2.5" fill={color} opacity="0.7"/>
        <path d="M2 34 C2 28 6 24 10 24 H38 C42 24 46 28 46 34 V38 H2 V34Z" fill={color} opacity="0.1" stroke={color} strokeWidth="2"/>
        <circle cx="11" cy="42" r="3" fill={color} opacity="0.7"/>
        <circle cx="24" cy="42" r="3" fill={color}/>
        <circle cx="37" cy="42" r="3" fill={color} opacity="0.7"/>
      </svg>
    ),
    perks: ["Entre proches", "Frais partagés", "Ambiance conviviale"],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

        @keyframes sv-up {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .sv-in   { animation: sv-up 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .sv-d1   { animation-delay: .05s; }
        .sv-d2   { animation-delay: .18s; }
        .sv-d3   { animation-delay: .30s; }
        .sv-d4   { animation-delay: .44s; }
        .sv-d5   { animation-delay: .58s; }

        .sv-card {
          position: relative;
          background: ${C.blanc};
          border-radius: 24px;
          padding: 40px 36px;
          border: 1.5px solid rgba(0,61,166,0.07);
          cursor: pointer;
          transition: all 0.42s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
          flex: 1;
          min-width: 0;
        }
        .sv-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 60px -12px rgba(0,61,166,0.12);
        }

        /* Top accent bar */
        .sv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 24px 24px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .sv-card:hover::before,
        .sv-card.sv-active::before { opacity: 1; }

        .sv-card-01::before { background: ${C.dark}; }
        .sv-card-02::before { background: ${C.mid}; }
        .sv-card-03::before { background: ${C.green}; }

        /* Number watermark */
        .sv-num {
          position: absolute;
          top: -12px; right: 24px;
          font-family: 'Montserrat', sans-serif;
          font-size: 88px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.05em;
          color: rgba(0,61,166,0.04);
          pointer-events: none;
          user-select: none;
          transition: color 0.3s ease;
        }

        .sv-card-01:hover .sv-num, .sv-card-01.sv-active .sv-num { color: rgba(0,61,166,0.07); }
        .sv-card-02:hover .sv-num, .sv-card-02.sv-active .sv-num { color: rgba(0,132,204,0.07); }
        .sv-card-03:hover .sv-num, .sv-card-03.sv-active .sv-num { color: rgba(73,206,84,0.1); }

        /* Description reveal */
        .sv-desc {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease;
        }
        .sv-card:hover .sv-desc,
        .sv-card.sv-active .sv-desc {
          max-height: 200px;
          opacity: 1;
        }

        /* Perks */
        .sv-perk {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Montserrat', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
        }

        /* Arrow CTA */
        .sv-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 20px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
        }
        .sv-card:hover .sv-arrow,
        .sv-card.sv-active .sv-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 900px) {
          .sv-row { flex-direction: column !important; }
        }
      `}</style>

      <section
        id="services"
        ref={ref}
        style={{
          background: C.blanc,
          backgroundImage: `
            radial-gradient(circle at 92% 8%,  rgba(0,61,166,0.05)  0%, transparent 45%),
            radial-gradient(circle at 8%  92%, rgba(73,206,84,0.06) 0%, transparent 45%)
          `,
          padding: "100px 8% 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        {/* ── Header ── */}
        <div className={inView ? "sv-in sv-d1" : ""} style={{ marginBottom: "64px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 14px 6px 10px",
            background: `${C.mid}10`, border: `1px solid ${C.mid}22`,
            borderRadius: "100px", marginBottom: "20px",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}` }}/>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11.5px", fontWeight: "700", color: C.dark, letterSpacing: "1.2px", textTransform: "uppercase" }}>
              Nos Services
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: "clamp(34px,4.5vw,56px)",
              fontWeight: "800",
              lineHeight: "1.06",
              letterSpacing: "-0.04em",
              color: C.noir,
              margin: 0,
            }}>
              Choisissez votre{" "}
              <span style={{ background: `linear-gradient(110deg,${C.dark},${C.mid})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                façon de voyager.
              </span>
            </h2>
            <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: "16px", color: C.muted, lineHeight: "1.7", maxWidth: "340px", margin: 0 }}>
              Trois formules adaptées à chaque besoin, chaque budget et chaque occasion.
            </p>
          </div>
        </div>

        {/* ── Cards row ── */}
        <div className="sv-row" style={{ display: "flex", gap: "20px", alignItems: "stretch" }}>
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`sv-card sv-card-0${i + 1} ${inView ? `sv-in sv-d${i + 2}` : ""} ${active === i ? "sv-active" : ""}`}
              onClick={() => setActive(active === i ? null : i)}
              style={{ background: active === i ? `${s.accent}04` : C.blanc }}
            >
              {/* Watermark number */}
              <div className="sv-num">{s.id}</div>

              {/* Icon */}
              <div style={{
                width: "72px", height: "72px", borderRadius: "20px",
                background: `${s.accent}0e`,
                border: `1.5px solid ${s.accent}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "24px",
                transition: "all 0.3s ease",
              }}>
                {s.icon(s.accent)}
              </div>

              {/* Name + tagline */}
              <h3 style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "20px", fontWeight: "800",
                letterSpacing: "-0.03em",
                color: C.noir, margin: "0 0 6px",
              }}>
                {s.name}
              </h3>
              <p style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "13px", color: s.accent, fontWeight: "600",
                margin: "0 0 18px", letterSpacing: "0.2px",
              }}>
                {s.tagline}
              </p>

              {/* Perks */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "4px" }}>
                {s.perks.map((p, j) => (
                  <span key={j} className="sv-perk" style={{
                    background: `${s.accent}10`,
                    border: `1px solid ${s.accent}22`,
                    color: s.accent,
                  }}>
                    {p}
                  </span>
                ))}
              </div>

              {/* Description — reveals on hover/click */}
              <div className="sv-desc">
                <div style={{ height: "1px", background: `${s.accent}18`, margin: "18px 0" }}/>
                <p style={{
                  fontFamily: "'Open Sans',sans-serif",
                  fontSize: "13.5px", color: C.muted,
                  lineHeight: "1.7", margin: 0,
                }}>
                  {s.description}
                </p>
              </div>

              {/* Arrow CTA */}
              <div className="sv-arrow" style={{ color: s.accent }}>
                Réserver maintenant
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={s.accent} strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <div
          className={inView ? "sv-in sv-d5" : ""}
          style={{
            marginTop: "48px",
            padding: "24px 32px",
            background: C.gris,
            border: `1px solid rgba(0,61,166,0.07)`,
            borderRadius: "18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "16px",
          }}
        >
          <p style={{ fontFamily: "'Open Sans',sans-serif", fontSize: "15px", color: C.muted, margin: 0, lineHeight: "1.6" }}>
            Tous nos services incluent un <strong style={{ color: C.noir }}>suivi GPS en temps réel</strong>, un{" "}
            <strong style={{ color: C.noir }}>paiement sécurisé</strong> et des{" "}
            <strong style={{ color: C.noir }}>chauffeurs certifiés</strong> INNO.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            {[C.dark, C.mid, C.green].map((col, i) => (
              <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: col }}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}