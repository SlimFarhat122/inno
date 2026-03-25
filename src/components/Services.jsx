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

// ── ICÔNES SVG par service ────────────────────────────────────

const IconTaxiPrive = ({ color }) => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    {/* Car body */}
    <rect x="5" y="18" width="38" height="18" rx="5" fill={color} opacity="0.12" stroke={color} strokeWidth="2"/>
    {/* Roof / cabin */}
    <path d="M13 18 L16 10 H32 L35 18" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} opacity="0.08"/>
    {/* Windows */}
    <rect x="17" y="11" width="14" height="6" rx="2" fill={color} opacity="0.25"/>
    {/* Door */}
    <rect x="10" y="21" width="11" height="9" rx="2" fill={color} opacity="0.18"/>
    <rect x="27" y="21" width="11" height="9" rx="2" fill={color} opacity="0.18"/>
    {/* Door handle */}
    <line x1="14" y1="26" x2="18" y2="26" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="30" y1="26" x2="34" y2="26" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Wheels */}
    <circle cx="14" cy="38" r="4.5" fill={color} opacity="0.25" stroke={color} strokeWidth="2"/>
    <circle cx="14" cy="38" r="2" fill={color}/>
    <circle cx="34" cy="38" r="4.5" fill={color} opacity="0.25" stroke={color} strokeWidth="2"/>
    <circle cx="34" cy="38" r="2" fill={color}/>
    {/* Star / VIP badge */}
    <circle cx="40" cy="8" r="6" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5"/>
    <text x="40" y="12" textAnchor="middle" fontSize="8" fill={color} fontWeight="bold">★</text>
    {/* Live pulse dot */}
    <circle cx="8" cy="8" r="3" fill={color} opacity="0.9"/>
    <circle cx="8" cy="8" r="5.5" fill={color} opacity="0.15"/>
  </svg>
);

const IconGOPrive = ({ color }) => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    {/* Car body */}
    <rect x="5" y="18" width="38" height="18" rx="5" fill={color} opacity="0.12" stroke={color} strokeWidth="2"/>
    <path d="M13 18 L16 10 H32 L35 18" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} opacity="0.08"/>
    <rect x="17" y="11" width="14" height="6" rx="2" fill={color} opacity="0.25"/>
    {/* 2 persons silhouettes inside */}
    <circle cx="19" cy="24" r="2.5" fill={color} opacity="0.5"/>
    <path d="M15 31 C15 28 17 26 19 26 C21 26 23 28 23 31" fill={color} opacity="0.3"/>
    <circle cx="29" cy="24" r="2.5" fill={color} opacity="0.5"/>
    <path d="M25 31 C25 28 27 26 29 26 C31 26 33 28 33 31" fill={color} opacity="0.3"/>
    {/* Wheels */}
    <circle cx="14" cy="38" r="4.5" fill={color} opacity="0.25" stroke={color} strokeWidth="2"/>
    <circle cx="14" cy="38" r="2" fill={color}/>
    <circle cx="34" cy="38" r="4.5" fill={color} opacity="0.25" stroke={color} strokeWidth="2"/>
    <circle cx="34" cy="38" r="2" fill={color}/>
    {/* +GO label badge */}
    <rect x="32" y="3" width="14" height="10" rx="3" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5"/>
    <text x="39" y="11" textAnchor="middle" fontSize="7" fill={color} fontWeight="bold">+GO</text>
    {/* Live pulse */}
    <circle cx="8" cy="8" r="3" fill={color} opacity="0.9"/>
    <circle cx="8" cy="8" r="5.5" fill={color} opacity="0.15"/>
  </svg>
);

const IconGOPublic = ({ color }) => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    {/* Minivan / shared body — wider */}
    <rect x="3" y="17" width="42" height="19" rx="5" fill={color} opacity="0.12" stroke={color} strokeWidth="2"/>
    <path d="M10 17 L13 9 H35 L38 17" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} opacity="0.08"/>
    <rect x="14" y="10" width="20" height="6" rx="2" fill={color} opacity="0.25"/>
    {/* 3 persons silhouettes */}
    <circle cx="14" cy="24" r="2.2" fill={color} opacity="0.5"/>
    <path d="M10.5 31 C10.5 28.5 12 27 14 27 C16 27 17.5 28.5 17.5 31" fill={color} opacity="0.3"/>
    <circle cx="24" cy="24" r="2.2" fill={color} opacity="0.7"/>
    <path d="M20.5 31 C20.5 28.5 22 27 24 27 C26 27 27.5 28.5 27.5 31" fill={color} opacity="0.4"/>
    <circle cx="34" cy="24" r="2.2" fill={color} opacity="0.5"/>
    <path d="M30.5 31 C30.5 28.5 32 27 34 27 C36 27 37.5 28.5 37.5 31" fill={color} opacity="0.3"/>
    {/* Wheels */}
    <circle cx="12" cy="38" r="4" fill={color} opacity="0.25" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="38" r="1.8" fill={color}/>
    <circle cx="36" cy="38" r="4" fill={color} opacity="0.25" stroke={color} strokeWidth="2"/>
    <circle cx="36" cy="38" r="1.8" fill={color}/>
    {/* Route dots indicating shared itinerary */}
    <circle cx="8" cy="8" r="3" fill={color} opacity="0.9"/>
    <circle cx="8" cy="8" r="5.5" fill={color} opacity="0.15"/>
    <circle cx="20" cy="5" r="2" fill={color} opacity="0.4"/>
    <circle cx="32" cy="5" r="2" fill={color} opacity="0.4"/>
    <line x1="11" y1="8" x2="18" y2="5" stroke={color} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4"/>
    <line x1="22" y1="5" x2="30" y2="5" stroke={color} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4"/>
  </svg>
);

const IconReservation = ({ color }) => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
    {/* Calendar base */}
    <rect x="6" y="10" width="36" height="34" rx="6" fill={color} opacity="0.1" stroke={color} strokeWidth="2"/>
    {/* Calendar header */}
    <rect x="6" y="10" width="36" height="11" rx="6" fill={color} opacity="0.18"/>
    <rect x="6" y="17" width="36" height="4" fill={color} opacity="0.18"/>
    {/* Rings */}
    <rect x="14" y="6" width="4" height="9" rx="2" fill={color} stroke={color} strokeWidth="1.5"/>
    <rect x="30" y="6" width="4" height="9" rx="2" fill={color} stroke={color} strokeWidth="1.5"/>
    {/* Calendar grid dots */}
    <circle cx="16" cy="30" r="2" fill={color} opacity="0.3"/>
    <circle cx="24" cy="30" r="2" fill={color} opacity="0.3"/>
    <circle cx="32" cy="30" r="2" fill={color} opacity="0.3"/>
    <circle cx="16" cy="38" r="2" fill={color} opacity="0.3"/>
    <circle cx="24" cy="38" r="2" fill={color} opacity="0.3"/>
    {/* Highlighted day with checkmark */}
    <circle cx="32" cy="38" r="5" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5"/>
    <path d="M29 38 L31.5 40.5 L35.5 36" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Small clock overlay */}
    <circle cx="38" cy="14" r="7" fill={C.blanc} stroke={color} strokeWidth="1.5"/>
    <line x1="38" y1="11" x2="38" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="38" y1="14" x2="40.5" y2="15.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const services = [
  {
    id: "01",
    name: "Taxi Privé",
    badge: "TEMPS RÉEL",
    badgeLive: true,
    tagline: "Votre taxi, rien que pour vous — maintenant.",
    accent: C.dark,
    description:
      "Réservez instantanément un taxi pour vous seul. Trajet direct, sans détour ni partage — idéal pour les déplacements personnels, professionnels ou urgents. Profitez d'un confort optimal, d'une totale intimité et d'un chauffeur dédié qui vous emmène directement à destination.",
    Icon: IconTaxiPrive,
    perks: ["Trajet direct", "Intimité totale", "Disponible 24/7"],
  },
  {
    id: "02",
    name: "+GO Privé",
    badge: "TEMPS RÉEL",
    badgeLive: true,
    tagline: "Partagez la route, gardez votre confort.",
    accent: C.mid,
    description:
      "Optez pour le covoiturage intelligent entre particuliers. Partagez votre trajet avec d'autres passagers se rendant dans la même direction, réduisez vos coûts et voyagez dans un cadre convivial. Solution économique et optimisée pour vos déplacements quotidiens.",
    Icon: IconGOPrive,
    perks: ["Économique", "Covoiturage privé", "Trajets optimisés"],
  },
  {
    id: "03",
    name: "+GO Public",
    badge: "TEMPS RÉEL",
    badgeLive: true,
    tagline: "Le collectif, rapide et accessible.",
    accent: C.green,
    description:
      "Un service collectif en temps réel pour les trajets partagés sur des itinéraires communs. Jusqu'à plusieurs passagers voyagent ensemble vers des destinations proches. La solution la plus accessible pour se déplacer au quotidien, avec des tarifs réduits et une organisation fluide.",
    Icon: IconGOPublic,
    perks: ["Très économique", "Multi-passagers", "Itinéraires communs"],
  },
  {
    id: "04",
    name: "Réservation planifiée",
    badge: "À L'AVANCE",
    badgeLive: false,
    tagline: "Planifiez, partez serein.",
    accent: "#22a82a",
    description:
      "Réservez votre taxi pour une date et une heure ultérieures. Idéal pour les rendez-vous importants, les départs à l'aéroport, les événements spéciaux ou tout trajet qui nécessite une organisation en avance. Votre chauffeur est confirmé et ponctuel, sans stress de dernière minute.",
    Icon: IconReservation,
    perks: ["Réservation future", "Ponctualité garantie", "Confirmation instantanée"],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
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
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.8; }
          70%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .sv-in    { animation: sv-up 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .sv-d1    { animation-delay: .05s; }
        .sv-d2    { animation-delay: .12s; }
        .sv-d3    { animation-delay: .22s; }
        .sv-d4    { animation-delay: .32s; }
        .sv-d5    { animation-delay: .42s; }
        .sv-d6    { animation-delay: .52s; }

        .sv-card {
          position: relative;
          background: ${C.blanc};
          border-radius: 22px;
          padding: 32px 28px 28px;
          border: 1.5px solid rgba(0,61,166,0.07);
          cursor: pointer;
          transition: all 0.42s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
          flex: 1;
          min-width: 220px;
        }
        .sv-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 28px 56px -12px rgba(0,0,0,0.13);
        }
        .sv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 22px 22px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .sv-card:hover::before,
        .sv-card.sv-active::before { opacity: 1; }

        .sv-card-01::before { background: ${C.dark}; }
        .sv-card-02::before { background: ${C.mid}; }
        .sv-card-03::before { background: ${C.green}; }
        .sv-card-04::before { background: #22a82a; }

        .sv-num {
          position: absolute;
          top: -10px; right: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 76px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.05em;
          color: rgba(0,61,166,0.04);
          pointer-events: none;
          user-select: none;
          transition: color 0.3s ease;
        }
        .sv-card-01:hover .sv-num,.sv-card-01.sv-active .sv-num { color: rgba(0,61,166,0.07); }
        .sv-card-02:hover .sv-num,.sv-card-02.sv-active .sv-num { color: rgba(0,132,204,0.07); }
        .sv-card-03:hover .sv-num,.sv-card-03.sv-active .sv-num { color: rgba(73,206,84,0.1); }
        .sv-card-04:hover .sv-num,.sv-card-04.sv-active .sv-num { color: rgba(124,58,237,0.08); }

        .sv-desc {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease;
        }
        .sv-card:hover .sv-desc,
        .sv-card.sv-active .sv-desc {
          max-height: 220px;
          opacity: 1;
        }

        .sv-perk {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 100px;
          letter-spacing: 0.3px;
        }

        .sv-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 18px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
        }
        .sv-card:hover .sv-arrow,
        .sv-card.sv-active .sv-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .live-dot {
          position: relative;
          display: inline-block;
          width: 8px; height: 8px;
        }
        .live-dot::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: inherit;
          animation: pulse-ring 1.8s ease-out infinite;
        }

        @media (max-width: 960px) {
          .sv-row { flex-wrap: wrap !important; }
          .sv-card { min-width: calc(50% - 10px); flex: 0 0 calc(50% - 10px); }
        }
        @media (max-width: 560px) {
          .sv-card { min-width: 100%; flex: 0 0 100%; }
        }
      `}</style>

      <section
        id="services"
        ref={ref}
        style={{
          background: C.blanc,
          backgroundImage: `
            radial-gradient(circle at 94% 6%,  rgba(0,61,166,0.05)  0%, transparent 42%),
            radial-gradient(circle at 6%  94%, rgba(73,206,84,0.06) 0%, transparent 42%)
          `,
          padding: "100px 7% 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        {/* ── Header ── */}
        <div className={inView ? "sv-in sv-d1" : ""} style={{ marginBottom: "60px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 14px 6px 10px",
            background: `${C.mid}10`, border: `1px solid ${C.mid}22`,
            borderRadius: "100px", marginBottom: "20px",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}` }}/>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "700", color: C.dark, letterSpacing: "1.2px", textTransform: "uppercase" }}>
              Nos Services
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: "clamp(32px,4vw,52px)",
              fontWeight: "800",
              lineHeight: "1.07",
              letterSpacing: "-0.04em",
              color: C.noir,
              margin: 0,
            }}>
              Choisissez votre{" "}
              <span style={{ background: `linear-gradient(110deg,${C.dark},${C.mid})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                façon de voyager.
              </span>
            </h2>
            <p style={{ fontSize: "15px", color: C.muted, lineHeight: "1.7", maxWidth: "340px", margin: 0 }}>
              Quatre formules adaptées à chaque besoin, chaque budget et chaque occasion.
            </p>
          </div>
        </div>

        {/* ── Cards row ── */}
        <div className="sv-row" style={{ display: "flex", gap: "18px", alignItems: "stretch" }}>
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`sv-card sv-card-0${i + 1} ${inView ? `sv-in sv-d${i + 2}` : ""} ${active === i ? "sv-active" : ""}`}
              onClick={() => setActive(active === i ? null : i)}
              style={{ background: active === i ? `${s.accent}04` : C.blanc }}
            >
              {/* Watermark number */}
              <div className="sv-num">{s.id}</div>

              {/* Live / Planifié badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "3px 10px 3px 7px",
                background: s.badgeLive ? `${C.green}15` : `${s.accent}12`,
                border: `1px solid ${s.badgeLive ? C.green : s.accent}30`,
                borderRadius: "100px",
                marginBottom: "18px",
              }}>
                {s.badgeLive ? (
                  <div className="live-dot" style={{ background: C.green, borderRadius: "50%" }}/>
                ) : (
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={s.accent} strokeWidth="3">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                )}
                <span style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "9.5px", fontWeight: "700",
                  color: s.badgeLive ? "#22a82a" : s.accent,
                  letterSpacing: "0.8px",
                }}>
                  {s.badge}
                </span>
              </div>

              {/* Icon */}
              <div style={{
                width: "68px", height: "68px", borderRadius: "18px",
                background: `${s.accent}0d`,
                border: `1.5px solid ${s.accent}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
                transition: "all 0.3s ease",
              }}>
                <s.Icon color={s.accent} />
              </div>

              {/* Name + tagline */}
              <h3 style={{
                fontFamily: "'Montserrat',sans-serif",
                fontSize: "18px", fontWeight: "800",
                letterSpacing: "-0.03em",
                color: C.noir, margin: "0 0 5px",
              }}>
                {s.name}
              </h3>
              <p style={{
                fontFamily: "'Open Sans',sans-serif",
                fontSize: "12.5px", color: s.accent, fontWeight: "600",
                margin: "0 0 16px", lineHeight: "1.5",
              }}>
                {s.tagline}
              </p>

              {/* Perks */}
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "4px" }}>
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
                <div style={{ height: "1px", background: `${s.accent}18`, margin: "16px 0" }}/>
                <p style={{
                  fontSize: "13px", color: C.muted,
                  lineHeight: "1.7", margin: 0,
                }}>
                  {s.description}
                </p>
              </div>

              {/* Arrow CTA */}
              <div className="sv-arrow" style={{ color: s.accent }}>
                {s.badgeLive ? "Réserver maintenant" : "Planifier un trajet"}
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke={s.accent} strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <div
          className={inView ? "sv-in sv-d6" : ""}
          style={{
            marginTop: "44px",
            padding: "22px 30px",
            background: C.gris,
            border: `1px solid rgba(0,61,166,0.07)`,
            borderRadius: "16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "16px",
          }}
        >
          <p style={{ fontSize: "14.5px", color: C.muted, margin: 0, lineHeight: "1.6" }}>
            Tous nos services incluent un <strong style={{ color: C.noir }}>suivi GPS en temps réel</strong>, un{" "}
            <strong style={{ color: C.noir }}>paiement sécurisé</strong> et des{" "}
            <strong style={{ color: C.noir }}>chauffeurs certifiés</strong> INNO.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            {[C.dark, C.mid, C.green, "#22a82a"].map((col, i) => (
              <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: col }}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}