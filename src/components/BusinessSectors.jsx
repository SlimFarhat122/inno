import React, { useRef, useState, useEffect } from "react";

const BusinessSectors = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  };

  const handleTouchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };
  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeftPos - (x - startX) * 1.2;
  };
  const handleTouchEnd = () => setIsDown(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeftPos - (x - startX) * 1.6;
  };

  const sectors = [
    {
      name: "Centres d'Appels",
      desc: "Synchronisez le transport de vos équipes avec leurs shifts 24/7. Zéro retard, productivité maximale.",
      tag: "Flux Continu",
      stat: "24/7",
      statLabel: "Couverture",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
      ),
      accentColor: C.marine,
    },
    {
      name: "Hôtellerie & Tourisme",
      desc: "Expérience premium pour vos clients VIP. Transferts aéroport, trajets événementiels, conciergerie mobilité.",
      tag: "Premium",
      stat: "5★",
      statLabel: "Expérience",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      accentColor: C.cyan,
    },
    {
      name: "Services Financiers",
      desc: "Déplacements sécurisés et confidentiels pour vos cadres dirigeants, auditeurs et partenaires stratégiques.",
      tag: "Sécurisé",
      stat: "100%",
      statLabel: "Traçabilité",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      accentColor: C.sky,
    },
    {
      name: "Santé & Médical",
      desc: "Mobilité prioritaire pour le personnel médical. Logistique fluide, ponctualité critique, disponibilité absolue.",
      tag: "Priorité Vitale",
      stat: "<5min",
      statLabel: "Temps de réponse",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      accentColor: C.marine,
    },
    {
      name: "Industrie & Logistique",
      desc: "Optimisation des navettes de production, synchronisation des équipes terrain et pilotage des flux industriels.",
      tag: "Performance",
      stat: "-24%",
      statLabel: "Coûts transport",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
          <path d="M22 12a10 10 0 01-10 10M2 12a10 10 0 0110-10"/>
        </svg>
      ),
      accentColor: C.cyan,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        /* ── Section entrance ── */
        .bs-section {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .bs-section.visible { opacity: 1; transform: translateY(0); }

        /* ── Header stagger ── */
        .bs-header > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .bs-section.visible .bs-header > *:nth-child(1) { opacity:1; transform:none; transition-delay:0.1s; }
        .bs-section.visible .bs-header > *:nth-child(2) { opacity:1; transform:none; transition-delay:0.22s; }
        .bs-section.visible .bs-header > *:nth-child(3) { opacity:1; transform:none; transition-delay:0.34s; }

        /* ── Scrollbar hidden ── */
        .bs-scroll::-webkit-scrollbar { display: none; }
        .bs-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        /* ── Card base ── */
        .bs-card {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        /* ── Card hover ── */
        .bs-card:hover {
          transform: translateY(-10px) scale(1.01);
          box-shadow: 0 28px 60px rgba(0,61,167,0.13) !important;
        }

        /* ── Icon box ── */
        .bs-icon-box {
          transition: background 0.3s ease, transform 0.3s ease, color 0.3s ease;
        }
        .bs-card:hover .bs-icon-box {
          transform: rotate(-8deg) scale(1.08);
        }

        /* ── Shine sweep on hover ── */
        .bs-card::before {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%);
          transform: skewX(-20deg);
          transition: left 0.55s ease;
          pointer-events: none;
          z-index: 2;
        }
        .bs-card:hover::before { left: 130%; }

        /* ── Stat pill ── */
        .bs-stat-pill {
          transition: background 0.3s ease, color 0.3s ease;
        }

        /* ── Progress track ── */
        .bs-progress-track {
          width: 120px;
          height: 3px;
          background: rgba(0,61,167,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .bs-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, ${C.marine}, ${C.cyan});
          border-radius: 2px;
          transition: width 0.15s linear;
        }

        /* ── Tag ── */
        .bs-tag {
          transition: background 0.3s ease, color 0.3s ease;
        }
        .bs-card:hover .bs-tag {
          background: ${C.marine} !important;
          color: ${C.white} !important;
        }

        /* ── Touch support for mobile swipe ── */
        .bs-scroll { -webkit-overflow-scrolling: touch; }

        /* ── DESKTOP: grid layout, no scroll ── */
        @media (min-width: 769px) {
          .bs-scroll-wrapper {
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
          .bs-scroll {
            display: grid !important;
            grid-template-columns: repeat(5, 1fr) !important;
            overflow-x: visible !important;
            padding: 20px 8% 28px !important;
            cursor: default !important;
            gap: 20px !important;
          }
          .bs-card {
            min-width: unset !important;
            max-width: unset !important;
            width: 100% !important;
            min-height: 360px !important;
            padding: 28px 22px 22px !important;
          }
          .bs-icon-box-el {
            width: 44px !important;
            height: 44px !important;
            border-radius: 12px !important;
          }
          .bs-stat-val { font-size: 16px !important; }
          .bs-card h3  { font-size: 15px !important; }
          .bs-card p   { font-size: 13px !important; }
          .bs-tag      { font-size: 9px !important; padding: 4px 9px !important; }
          .bs-progress-row { display: none !important; }
        }

        /* ── MOBILE: horizontal scroll ── */
        @media (max-width: 768px) {
          .bs-h2 { font-size: 24px !important; }
          .bs-card {
            min-width: 200px !important;
            max-width: 200px !important;
            padding: 20px 16px !important;
          }
        }
        @media (max-width: 480px) {
          .bs-header { padding: 0 5% !important; }
          .bs-scroll-track { padding: 12px 4% 20px !important; }
          .bs-card {
            min-width: 180px !important;
            max-width: 180px !important;
            padding: 18px 14px !important;
          }
          .bs-h2 { font-size: 22px !important; }
          .bs-watermark { font-size: 36px !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`bs-section ${isVisible ? "visible" : ""}`}
        style={{
          fontFamily: "'Open Sans', sans-serif",  /* Body — Open Sans */
          fontSize: "18px",
          padding: "100px 0 80px",
          background: C.white,
          overflow: "hidden",
          position: "relative",
        }}
      >

        {/* ── Background decoration ── */}
        <div style={{
          position: "absolute",
          bottom: "-100px", left: "-100px",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.sky}0A, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute",
          top: "0", right: "0",
          width: "100%", height: "3px",
          background: `linear-gradient(90deg, transparent, ${C.cyan}30, transparent)`,
          zIndex: 0,
        }} />

        {/* ─────── HEADER ─────── */}
        <div className="bs-header" style={{
          padding: "0 8%",
          marginBottom: "60px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}>

          {/* Badge */}
          <div style={{ marginBottom: "20px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px 6px 12px",
              background: `${C.marine}0D`,
              border: `1px solid ${C.marine}1A`,
              borderLeft: `3px solid ${C.cyan}`,
              borderRadius: "4px",
              /* Montserrat 700 — brand UI label */
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: C.marine,
            }}>
              <span style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: C.cyan,
                display: "inline-block",
                animation: "none",
              }} />
              Expertise Sectorielle
            </span>
          </div>

          {/* H2 — Montserrat SemiBold 32px (Headline 2 — charte) */}
          <h2 className="bs-h2" style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "32px",        /* Headline 2: 32px SemiBold */
            fontWeight: "600",       /* SemiBold */
            color: C.marine,
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            margin: "0 auto 16px",
            maxWidth: "600px",
          }}>
            Une mobilité adaptée à{" "}
            <span style={{ color: C.cyan }}>votre écosystème</span>
          </h2>

          {/* Body text — Open Sans Regular 18px (charte) */}
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "18px",        /* Body Text: 18px Regular */
            fontWeight: "400",       /* Regular */
            color: C.anthracite,     /* Gris Anthracite — textes corps */
            lineHeight: "1.7",
            maxWidth: "500px",
            margin: "0 auto",
          }}>
            Chaque secteur a ses contraintes. Inno Business s'y adapte avec des solutions de mobilité sur mesure.
          </p>
        </div>

        {/* ─────── SCROLL TRACK ─────── */}
        <div className="bs-scroll-wrapper" style={{
          position: "relative",
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          zIndex: 1,
        }}>
          <div
            ref={scrollRef}
            className="bs-scroll bs-scroll-track"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              padding: "20px 5% 28px",
              cursor: isDown ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {sectors.map((s, i) => (
              <div
                key={i}
                className="bs-card"
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  minWidth: "200px",
                  maxWidth: "200px",
                  background: C.white,
                  borderRadius: "12px",
                  padding: "22px 20px 18px",
                  minHeight: "340px",
                  border: `1.5px solid ${activeCard === i ? s.accentColor + "50" : C.lightGray}`,
                  boxShadow: activeCard === i
                    ? `0 10px 24px ${s.accentColor}18`
                    : `0 2px 10px rgba(0,61,167,0.05)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {/* Top row: icon + stat */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "14px",
                }}>
                  {/* Icon box */}
                  <div
                    className="bs-icon-box bs-icon-box-el"
                    style={{
                      width: "32px", height: "32px",
                      background: activeCard === i ? s.accentColor : `${s.accentColor}12`,
                      color: activeCard === i ? C.white : s.accentColor,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid ${s.accentColor}25`,
                      flexShrink: 0,
                    }}
                  >
                    {React.cloneElement(s.icon, { width: 18, height: 18 })}
                  </div>

                  {/* Stat pill */}
                  <div className="bs-stat-pill" style={{ textAlign: "right" }}>
                    <div className="bs-stat-val" style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: s.accentColor,
                      lineHeight: "1",
                    }}>{s.stat}</div>
                    <div style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "9px",
                      fontWeight: "600",
                      color: C.anthracite + "80",
                      textTransform: "uppercase",
                      letterSpacing: "0.3px",
                      marginTop: "3px",
                    }}>{s.statLabel}</div>
                  </div>
                </div>

                {/* Tag */}
                <span className="bs-tag" style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "8px",
                  fontWeight: "700",
                  color: C.marine,
                  background: `${C.marine}0F`,
                  padding: "3px 7px",
                  borderRadius: "3px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "10px",
                }}>
                  {s.tag}
                </span>

                {/* Card title */}
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: C.marine,
                  lineHeight: "1.3",
                  margin: "0 0 8px",
                }}>
                  {s.name}
                </h3>

                {/* Card desc */}
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: C.anthracite,
                  lineHeight: "1.65",
                  margin: "0 0 14px",
                  flexGrow: 1,
                }}>
                  {s.desc}
                </p>

                {/* CTA link */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  fontWeight: "600",
                  color: activeCard === i ? s.accentColor : C.sky,
                  transition: "color 0.3s ease",
                }}>
                  En savoir plus
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: activeCard === i ? "translateX(3px)" : "none", transition: "transform 0.3s ease" }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* Watermark */}
                <div className="bs-watermark" style={{
                  position: "absolute",
                  bottom: "-6px", right: "4px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "44px",
                  fontWeight: "800",
                  color: activeCard === i ? s.accentColor : C.lightGray,
                  opacity: activeCard === i ? 0.08 : 0.6,
                  lineHeight: "1",
                  userSelect: "none",
                  pointerEvents: "none",
                  transition: "color 0.4s ease, opacity 0.4s ease",
                  zIndex: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─────── FOOTER CONTROLS ─────── */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginTop: "12px",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Progress bar */}
          <div className="bs-progress-track">
            <div className="bs-progress-fill" style={{ width: `${scrollProgress * 100}%` }} />
          </div>

          {/* Hint text — Open Sans secondary */}
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "11px",
            fontWeight: "600",
            color: C.anthracite + "60",    /* Gris Anthracite — secondaire atténué */
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            margin: 0,
          }}>
            {isDown ? "Navigation active" : "Glissez pour explorer"}
          </p>
        </div>
      </section>
    </>
  );
};

export default BusinessSectors;