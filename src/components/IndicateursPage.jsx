
import React, { useState, useEffect, useRef } from "react";

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

const useCounter = (target, duration = 2000, start = false, decimals = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = ease * target;
      setCount(decimals > 0 ? parseFloat(val.toFixed(decimals)) : Math.floor(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, decimals]);
  return count;
};

/* ── Shared KPI card used in BOTH sections ──────────────────────────────── */
const KpiCard = ({ kpi, index, inView, compact = false }) => {
  const val = useCounter(kpi.value, 2200, inView, kpi.decimals);
  const [hovered, setHovered] = useState(false);

  const displayVal =
    kpi.decimals > 0 ? val.toFixed(kpi.decimals) : val.toLocaleString("fr-FR");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered ? `linear-gradient(145deg, ${kpi.accent}0f, ${kpi.accent}06)` : INNO.blanc,
        border: `1.5px solid ${hovered ? kpi.accent + "50" : INNO.bleuFonce + "10"}`,
        borderRadius: "20px",
        padding: compact ? "24px 20px 20px" : "32px 28px 28px",
        overflow: "hidden",
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 24px 56px -12px ${kpi.accent}28` : "0 2px 8px rgba(0,0,0,0.04)",
        animationDelay: `${index * 0.07}s`,
        animation: inView ? "kpiReveal 0.65s cubic-bezier(0.22,1,0.36,1) both" : "none",
      }}
    >
      {/* Top accent bar — visible on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: kpi.accent, borderRadius: "20px 20px 0 0",
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s ease",
      }} />

      {/* Watermark number */}
      <div style={{
        position: "absolute", bottom: "-12px", right: "16px",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: compact ? "56px" : "76px", fontWeight: "900",
        color: kpi.accent, opacity: hovered ? 0.08 : 0.04,
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
        transition: "opacity 0.4s ease",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon box */}
      {kpi.icon && (
        <div style={{
          width: compact ? "42px" : "52px",
          height: compact ? "42px" : "52px",
          borderRadius: "14px",
          background: hovered ? kpi.accent : `${kpi.accent}18`,
          color: hovered ? INNO.blanc : kpi.accent,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: compact ? "16px" : "20px",
          transition: "all 0.35s ease",
          boxShadow: hovered ? `0 8px 24px ${kpi.accent}44` : "none",
        }}>
          {kpi.icon}
        </div>
      )}

      {/* Value */}
      <div style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: compact ? "clamp(26px, 2.8vw, 38px)" : "clamp(32px, 3.5vw, 48px)",
        fontWeight: "800", color: kpi.accent,
        lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "6px",
      }}>
        {kpi.prefix}{kpi.staticVal !== undefined ? kpi.staticVal : (kpi.prefix + displayVal + kpi.suffix)}
      </div>

      {/* Label */}
      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "13px", fontWeight: "700", color: INNO.texte,
        margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.8px",
      }}>
        {kpi.label}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "13px", color: INNO.muted,
        lineHeight: "1.65", margin: "0 0 16px",
      }}>
        {kpi.description}
      </p>

      {/* Trend pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "4px 10px",
        background: kpi.trendUp ? `${kpi.accent}14` : "#ef444414",
        border: `1px solid ${kpi.trendUp ? kpi.accent + "28" : "#ef444428"}`,
        borderRadius: "100px",
      }}>
        <svg width="12" height="12" fill="none"
          stroke={kpi.trendUp ? kpi.accent : "#ef4444"}
          strokeWidth="2.5" viewBox="0 0 24 24">
          {kpi.trendUp
            ? <polyline points="18 15 12 9 6 15" />
            : <polyline points="6 9 12 15 18 9" />}
        </svg>
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px", fontWeight: "700",
          color: kpi.trendUp ? kpi.accent : "#ef4444", letterSpacing: "0.3px",
        }}>{kpi.trend}</span>
        <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: INNO.muted }}>
          {kpi.detail}
        </span>
      </div>
    </div>
  );
};

/* ── Data ───────────────────────────────────────────────────────────────── */

const globalKpis = [
  {
    id: "users", label: "Utilisateurs actifs", value: 10000,
    suffix: "+", prefix: "", decimals: 0, accent: INNO.bleuFonce,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    description: "Passagers enregistrés sur la plateforme INNO depuis le lancement.",
    trend: "+34%", trendUp: true, detail: "ce trimestre",
  },
  {
    id: "drivers", label: "Chauffeurs certifiés", value: 500,
    suffix: "+", prefix: "", decimals: 0, accent: INNO.vert,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    description: "Chauffeurs vérifiés biométriquement, actifs dans nos 4 villes couvertes.",
    trend: "+22%", trendUp: true, detail: "ce trimestre",
  },
  {
    id: "rating", label: "Note moyenne", value: 4.9,
    suffix: "/5", prefix: "", decimals: 1, accent: INNO.bleuClair,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    description: "Score de satisfaction calculé sur l'ensemble des trajets effectués.",
    trend: "+0.2", trendUp: true, detail: "vs mois dernier",
  },
  {
    id: "arrival", label: "Temps d'arrivée moyen", value: 3,
    suffix: " min", prefix: "< ", decimals: 0, accent: "#22a82a",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    description: "Délai médian entre la réservation et l'arrivée du chauffeur sur place.",
    trend: "-45s", trendUp: true, detail: "vs trimestre précédent",
  },
  {
    id: "cities", label: "Villes couvertes", value: 4,
    suffix: "", prefix: "", decimals: 0, accent: INNO.bleuFonce,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    description: "Tunis, Sfax, Gabes, Djerba — avec une expansion planifiée sur 8 villes d'ici 2026.",
    trend: "+2", trendUp: true, detail: "villes en cours",
  },
  {
    id: "commission", label: "Commission chauffeur", value: 15,
    suffix: "%", prefix: "", decimals: 0, accent: INNO.vert,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    description: "La commission la plus basse du marché tunisien — paiement hebdomadaire automatique.",
    trend: "Fixe", trendUp: true, detail: "garanti",
  },
  {
    id: "satisfaction", label: "Taux de satisfaction", value: 98,
    suffix: "%", prefix: "", decimals: 0, accent: INNO.bleuClair,
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    description: "Pourcentage de clients ayant attribué une note de 4 étoiles ou plus après leur trajet.",
    trend: "+1.5%", trendUp: true, detail: "vs année précédente",
  },
  {
    id: "trips", label: "Courses complétées", value: 85000,
    suffix: "+", prefix: "", decimals: 0, accent: "#22a82a",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
    description: "Nombre total de trajets effectués depuis le lancement d'INNO en Tunisie.",
    trend: "+12K", trendUp: true, detail: "ce mois-ci",
  },
];

const businessKpis = [
  {
    id: "b-companies", label: "Entreprises clientes", value: 120,
    suffix: "+", prefix: "", decimals: 0, accent: INNO.bleuFonce,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    description: "Comptes Business actifs sur la plateforme Inno.",
    trend: "+18%", trendUp: true, detail: "ce trimestre",
  },
  {
    id: "b-savings", label: "Économies moyennes", value: 24.8,
    suffix: "%", prefix: "−", decimals: 1, accent: INNO.bleuClair,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    description: "Réduction des coûts de transport constatée par nos clients B2B.",
    trend: "vs méthodes classiques", trendUp: true, detail: "",
  },
  {
    id: "b-invoice", label: "Facture / mois", value: 1,
    suffix: "", prefix: "", decimals: 0, accent: INNO.vert,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    description: "Facturation centralisée unique, quel que soit le nombre de trajets.",
    trend: "Zéro avance de frais", trendUp: true, detail: "",
  },
  {
    id: "b-rating", label: "Satisfaction B2B", value: 4.8,
    suffix: "/5", prefix: "", decimals: 1, accent: "#0ea5e9",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    description: "Note attribuée par les gestionnaires de flotte et responsables RH.",
    trend: "Gestionnaires RH & DAF", trendUp: true, detail: "",
  },
  {
    id: "b-admin", label: "Gain admin / mois", value: 14,
    suffix: "h", prefix: "", decimals: 0, accent: INNO.bleuFonce,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    description: "Heures économisées sur la gestion des notes de frais par entreprise.",
    trend: "−80% temps admin", trendUp: true, detail: "",
  },
  {
    id: "b-availability", label: "Disponibilité", value: 0,
    suffix: "", prefix: "", decimals: 0, accent: INNO.bleuClair,
    staticVal: "24/7",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    description: "Service garanti en continu pour tous les comptes Business actifs.",
    trend: "Support dédié inclus", trendUp: true, detail: "",
  },
];

const cities = [
  { name: "Tunis",  drivers: 310, coverage: 92 },
  { name: "Sfax",   drivers: 95,  coverage: 78 },
  { name: "Gabes",  drivers: 56,  coverage: 65 },
  { name: "Djerba", drivers: 39,  coverage: 55 },
];

const businessFeatures = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Dashboard temps réel",
    body: "Visualisez trajets, dépenses et collaborateurs depuis un panneau centralisé.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Facturation automatisée",
    body: "Facture mensuelle unique détaillée par collaborateur et centre de coûts.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Gestion collaborateurs",
    body: "Ajoutez des employés, définissez des plafonds et des politiques de déplacement.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Reporting analytique",
    body: "Exports CSV, rapports mensuels et intégration API avec vos outils comptables.",
  },
];

/* ── Section separator ──────────────────────────────────────────────────── */
const SectionDivider = ({ label, color }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: "16px",
    margin: "72px 0 56px",
  }}>
    <div style={{ flex: 1, height: "1px", background: `${INNO.bleuFonce}12` }} />
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "8px",
      padding: "6px 16px 6px 12px",
      background: `${color}0D`,
      border: `1px solid ${color}25`,
      borderLeft: `3px solid ${color}`,
      borderRadius: "4px",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "11px", fontWeight: "700",
      letterSpacing: "1.5px", textTransform: "uppercase",
      color: INNO.bleuFonce,
    }}>
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, display: "inline-block" }} />
      {label}
    </div>
    <div style={{ flex: 1, height: "1px", background: `${INNO.bleuFonce}12` }} />
  </div>
);

/* ── Main page ──────────────────────────────────────────────────────────── */
export default function IndicateursPage() {
  const [inView, setInView] = useState(false);
  const [activeCity, setActiveCity] = useState(0);
  const pageTopRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveCity(c => (c + 1) % cities.length), 2400);
    return () => clearInterval(t);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,800&family=Open+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Open Sans', sans-serif; background: ${INNO.grisFond}; color: ${INNO.texte}; }

        @keyframes kpiReveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes headerReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(73,206,84,0.5); }
          60%     { box-shadow: 0 0 0 8px rgba(73,206,84,0); }
        }
        @keyframes barGrow { from { width: 0; } }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .pulse-dot { animation: pulseDot 2.2s infinite; }
        .marquee   { animation: marquee 22s linear infinite; }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .biz-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1100px) {
          .kpi-grid      { grid-template-columns: repeat(3, 1fr); }
          .biz-kpi-grid  { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 760px) {
          .kpi-grid      { grid-template-columns: repeat(2, 1fr); }
          .biz-kpi-grid  { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .kpi-grid      { grid-template-columns: 1fr; }
          .biz-kpi-grid  { grid-template-columns: 1fr; }
        }

        .feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 900px)  { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .feat-grid { grid-template-columns: 1fr; } }

        .back-btn:hover {
          background: ${INNO.bleuFonce}14 !important;
          border-color: ${INNO.bleuFonce}40 !important;
          transform: translateX(-3px) !important;
        }
        .city-btn:hover { transform: translateY(-2px); }

        .biz-cta-primary:hover { background: ${INNO.bleuClair} !important; border-color: ${INNO.bleuClair} !important; }
        .biz-cta-ghost:hover   { background: ${INNO.bleuFonce}0A !important; }
      `}</style>

      {/* ── Page top anchor ── */}
      <div ref={pageTopRef} style={{ position: "absolute", top: 0 }} />

      <div ref={sectionRef} style={{
        minHeight: "100vh", background: INNO.blanc,
        position: "relative", isolation: "isolate", overflow: "hidden",
      }}>
        {/* Dot grid */}
        <div style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
          backgroundImage: `linear-gradient(${INNO.bleuFonce}05 1px,transparent 1px),linear-gradient(90deg,${INNO.bleuFonce}05 1px,transparent 1px)`,
          backgroundSize: "52px 52px",
        }} />
        {/* Radial blobs */}
        <div style={{ position: "fixed", top: "-10%", right: "-5%", width: "600px", height: "600px", borderRadius: "50%", background: `radial-gradient(circle,${INNO.bleuClair}07 0%,transparent 65%)`, pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "fixed", bottom: "-15%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle,${INNO.vert}06 0%,transparent 65%)`, pointerEvents: "none", zIndex: 0 }} />
        {/* Top accent bar */}
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "4px", zIndex: 100, background: `linear-gradient(90deg,${INNO.bleuFonce} 0%,${INNO.bleuClair} 50%,${INNO.vert} 100%)` }} />

        <div style={{ position: "relative", zIndex: 1, padding: "120px 4% 100px" }}>



          {/* ══════════════════════════════════════════════════════════
               SECTION 1 — INDICATEURS GLOBAUX
          ══════════════════════════════════════════════════════════ */}

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "6px 14px 6px 10px",
              background: `${INNO.bleuFonce}0e`, border: `1px solid ${INNO.bleuFonce}20`,
              borderRadius: "100px", marginBottom: "22px",
              animation: inView ? "headerReveal 0.55s ease both" : "none",
              animationDelay: "0.05s",
            }}>
              <div className="pulse-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: INNO.vert, flexShrink: 0 }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: "700", color: INNO.bleuFonce, letterSpacing: "1.2px", textTransform: "uppercase" }}>
                Indicateurs clés · Mise à jour en temps réel
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(40px, 5.5vw, 70px)", fontWeight: "900",
              lineHeight: "1.04", letterSpacing: "-0.04em", color: INNO.noir,
              margin: "0 0 16px",
              animation: inView ? "headerReveal 0.65s cubic-bezier(0.22,1,0.36,1) both" : "none",
              animationDelay: "0.12s",
            }}>
              La performance{" "}
              <em style={{
                fontStyle: "italic",
                background: `linear-gradient(100deg,${INNO.bleuFonce},${INNO.bleuClair})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>INNO en chiffres.</em>
            </h1>

            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "8px", marginBottom: "20px",
              animation: inView ? "headerReveal 0.65s ease both" : "none",
              animationDelay: "0.18s",
            }}>
              <div style={{ width: "48px", height: "3px", borderRadius: "3px", background: INNO.vert }} />
              <div style={{ width: "16px", height: "3px", borderRadius: "3px", background: `${INNO.vert}66` }} />
              <div style={{ width: "6px",  height: "3px", borderRadius: "3px", background: `${INNO.vert}33` }} />
            </div>

            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: "17px", fontWeight: "600",
              color: INNO.texte, lineHeight: "1.75", maxWidth: "520px", margin: "0 auto",
              animation: inView ? "headerReveal 0.65s ease both" : "none",
              animationDelay: "0.24s",
            }}>
              Transparence totale sur notre croissance, notre qualité de service et notre impact en Tunisie.
            </p>
          </div>

          {/* Global KPI grid */}
          <div className="kpi-grid" style={{ marginBottom: "72px" }}>
            {globalKpis.map((kpi, i) => (
              <KpiCard key={kpi.id} kpi={kpi} index={i} inView={inView} compact={false} />
            ))}
          </div>

          {/* City coverage */}
          <div style={{
            background: INNO.grisFond, border: `1.5px solid ${INNO.bleuFonce}10`,
            borderRadius: "24px", padding: "44px 40px", marginBottom: "0",
            animation: inView ? "kpiReveal 0.7s ease both" : "none",
            animationDelay: "0.6s",
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
              <div style={{ maxWidth: "380px" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "5px 12px 5px 9px",
                  background: `${INNO.vert}14`, border: `1px solid ${INNO.vert}30`,
                  borderRadius: "100px", marginBottom: "16px",
                }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: INNO.vert }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: "700", color: "#22a82a", letterSpacing: "1px", textTransform: "uppercase" }}>
                    Couverture géographique
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)", fontWeight: "800",
                  color: INNO.noir, letterSpacing: "-0.03em", lineHeight: "1.15", margin: "0 0 12px",
                }}>
                  4 villes,<br />
                  <span style={{ color: INNO.bleuFonce }}>une seule mission.</span>
                </h2>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "15px", color: INNO.muted, lineHeight: "1.7" }}>
                  INNO couvre Tunis, Sfax, Gabes et Djerba avec une expansion prévue sur 8 villes d'ici fin 2026.
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {cities.map((city, i) => (
                  <div
                    key={city.name}
                    className="city-btn"
                    onMouseEnter={() => setActiveCity(i)}
                    style={{
                      padding: "16px 20px", borderRadius: "16px",
                      border: `1.5px solid ${activeCity === i ? INNO.bleuFonce : INNO.bleuFonce + "14"}`,
                      background: activeCity === i ? INNO.bleuFonce : INNO.blanc,
                      cursor: "pointer", transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                      minWidth: "130px",
                      boxShadow: activeCity === i ? `0 12px 32px ${INNO.bleuFonce}28` : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: INNO.vert, boxShadow: `0 0 0 3px ${INNO.vert}30` }} />
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: "800", color: activeCity === i ? INNO.blanc : INNO.noir }}>
                        {city.name}
                      </span>
                    </div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: "900", color: activeCity === i ? INNO.blanc : INNO.bleuFonce, lineHeight: 1, marginBottom: "4px" }}>
                      {city.drivers}
                    </div>
                    <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", color: activeCity === i ? "rgba(255,255,255,0.65)" : INNO.muted, marginBottom: "12px" }}>
                      chauffeurs actifs
                    </div>
                    <div style={{ height: "4px", borderRadius: "4px", background: activeCity === i ? "rgba(255,255,255,0.2)" : `${INNO.bleuFonce}14`, overflow: "hidden" }}>
                      <div style={{
                        height: "100%", borderRadius: "4px", width: `${city.coverage}%`,
                        background: activeCity === i ? INNO.vert : INNO.bleuClair,
                        animation: "barGrow 1.2s cubic-bezier(0.22,1,0.36,1) both",
                        transition: "background 0.3s ease",
                      }} />
                    </div>
                    <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "10px", color: activeCity === i ? "rgba(255,255,255,0.55)" : INNO.muted, marginTop: "4px" }}>
                      {city.coverage}% couverture
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
               SECTION 2 — INNO BUSINESS
          ══════════════════════════════════════════════════════════ */}
          <SectionDivider label="Inno Business · Solution Entreprise" color={INNO.bleuClair} />

          {/* Business header */}
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(32px, 4vw, 56px)", fontWeight: "900",
              lineHeight: "1.06", letterSpacing: "-0.04em", color: INNO.noir,
              margin: "0 0 16px",
            }}>
              Mobilité B2B :{" "}
              <em style={{
                fontStyle: "italic",
                background: `linear-gradient(100deg,${INNO.bleuFonce},${INNO.bleuClair})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>la performance en entreprise.</em>
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "48px", height: "3px", borderRadius: "3px", background: INNO.bleuClair }} />
              <div style={{ width: "16px", height: "3px", borderRadius: "3px", background: `${INNO.bleuClair}66` }} />
              <div style={{ width: "6px",  height: "3px", borderRadius: "3px", background: `${INNO.bleuClair}33` }} />
            </div>

            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: "17px", fontWeight: "600",
              color: INNO.texte, lineHeight: "1.75", maxWidth: "580px",
            }}>
              Indicateurs clés du programme Inno Business — déploiement, économies réalisées et satisfaction des entreprises partenaires.
            </p>
          </div>

          {/* Business KPI grid — same card style, compact=true */}
          <div className="biz-kpi-grid" style={{ marginBottom: "32px" }}>
            {businessKpis.map((kpi, i) => (
              <KpiCard key={kpi.id} kpi={kpi} index={i} inView={inView} compact={true} />
            ))}
          </div>

          {/* Feature strip */}
          <div className="feat-grid" style={{ marginBottom: "36px" }}>
            {businessFeatures.map((f, i) => (
              <div key={i} style={{
                background: INNO.grisFond,
                border: `1.5px solid ${INNO.bleuFonce}0A`,
                borderRadius: "16px", padding: "20px 18px",
                display: "flex", alignItems: "flex-start", gap: "14px",
              }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "11px",
                  background: `${INNO.bleuFonce}0C`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: INNO.bleuFonce, flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: "700", color: INNO.texte, margin: "0 0 5px" }}>
                    {f.title}
                  </p>
                  <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "13px", color: INNO.muted, lineHeight: "1.6", margin: 0 }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  );
}

