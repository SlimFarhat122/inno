import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const BusinessContact = () => {
  const [selectedService, setSelectedService] = useState("Demo Live");
  const [status, setStatus] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // ── PALETTE OFFICIELLE INNO BUSINESS 2026 ──────────────────────
  const C = {
    marine:     "#003DA7",   // Bleu Marine        — Couleur Primaire
    cyan:       "#008BD3",   // Cyan Dynamique     — Couleur Primaire
    anthracite: "#374151",   // Gris Anthracite    — fond principal dark
    lightGray:  "#F3F4F6",   // Gris Clair         — Fonds, séparateurs
    sky:        "#38BDF8",   // Bleu Ciel          — Éléments interactifs, liens
    white:      "#FFFFFF",
    success:    "#10B981",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID  = "service_lv0o3ua";
    const TEMPLATE_ID = "template_4kfai26";
    const PUBLIC_KEY  = "KAYB6J5wxRaGngoX2";

    const templateParams = {
      user_name:    e.target.user_name.value,
      company:      e.target.company.value,
      user_email:   e.target.user_email.value,
      phone:        e.target.phone.value,
      message:      e.target.message.value,
      request_type: selectedService,
      time:         new Date().toLocaleString("fr-FR"),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((err) => {
        console.error("Erreur:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  const tiles = [
    {
      id: "Demo Live",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
        </svg>
      ),
      label: "Demo Live",
      desc: "Explorez l'interface avec un expert en direct.",
    },
    {
      id: "Devis Express",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
      label: "Devis Express",
      desc: "Tarification sur mesure sous 24h.",
    },
    {
      id: "Essai Gratuit",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      label: "Essai Gratuit",
      desc: "Testez gratuitement pendant 14 jours.",
    },
  ];

  const inputBase = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: C.white,
    /* Body Text — Open Sans Regular 18px (charte) */
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "15px",
    fontWeight: "400",
    outline: "none",
    transition: "all 0.25s ease",
    boxSizing: "border-box",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        /* ── Section entrance ── */
        .bc-section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .bc-section.visible { opacity: 1; transform: none; }

        /* ── Stagger children ── */
        .bc-stagger > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .bc-section.visible .bc-stagger > *:nth-child(1) { opacity:1; transform:none; transition-delay:0.1s; }
        .bc-section.visible .bc-stagger > *:nth-child(2) { opacity:1; transform:none; transition-delay:0.22s; }
        .bc-section.visible .bc-stagger > *:nth-child(3) { opacity:1; transform:none; transition-delay:0.34s; }

        /* ── Tile ── */
        .bc-tile {
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .bc-tile::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, ${C.cyan}15, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .bc-tile:hover::before, .bc-tile.active::before { opacity: 1; }
        .bc-tile:hover { transform: translateY(-4px); }
        .bc-tile.active { transform: translateY(-6px); }

        /* ── Input focus ── */
        .bc-input:focus {
          border-color: ${C.sky} !important;
          background: rgba(56,189,248,0.06) !important;
          box-shadow: 0 0 0 3px ${C.sky}18 !important;
        }
        .bc-input::placeholder { color: rgba(255,255,255,0.3); }

        /* ── Submit button ── */
        .bc-submit {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .bc-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .bc-submit:hover::after { opacity: 1; }
        .bc-submit:hover { transform: translateY(-2px); box-shadow: 0 16px 36px ${C.cyan}45 !important; }
        .bc-submit:active { transform: translateY(0); }

        /* ── Contact link hover ── */
        .bc-contact-link {
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .bc-contact-link:hover { color: ${C.sky} !important; }

        /* ── Noise overlay ── */
        .bc-noise {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bc-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .bc-tiles { grid-template-columns: 1fr !important; }
          .bc-inner { padding: 80px 5% !important; }
        }
        @media (max-width: 768px) {
          .bc-h1 { font-size: 32px !important; }
          .bc-form-row { grid-template-columns: 1fr !important; }
          .bc-inner { padding: 60px 5% !important; }
          .bc-tiles { grid-template-columns: 1fr !important; }
          .bc-info { flex-direction: row !important; flex-wrap: wrap !important; }
        }
        @media (max-width: 480px) {
          .bc-h1 { font-size: 26px !important; }
          .bc-tile { padding: 18px 16px !important; }
        }
      `}</style>

      <section
        id="business-contact"
        data-section="business-contact"
        ref={sectionRef}
        className={`bc-section ${isVisible ? "visible" : ""}`}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "18px",
          background: C.anthracite,
          position: "relative",
          overflow: "hidden",
          color: C.white,
        }}
      >
        {/* ── Noise texture ── */}
        <div className="bc-noise" />

        {/* ── Background glows ── */}
        <div style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: "700px", height: "700px", borderRadius: "50%",
          background: `radial-gradient(circle, ${C.marine}35, transparent 65%)`,
          filter: "blur(80px)", zIndex: 0, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-10%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, ${C.cyan}20, transparent 65%)`,
          filter: "blur(100px)", zIndex: 0, pointerEvents: "none",
        }} />

        {/* ── Top accent line ── */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${C.marine}, ${C.cyan}, ${C.sky})`,
          zIndex: 2,
        }} />

        <div className="bc-inner" style={{
          position: "relative", zIndex: 1,
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "100px 5% 100px",
        }}>

          {/* ─────── HEADER ─────── */}
          <div className="bc-stagger" style={{
            maxWidth: "680px",
            margin: "0 auto 64px",
            textAlign: "center",
          }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px 6px 12px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: `3px solid ${C.cyan}`,
              borderRadius: "4px",
              marginBottom: "24px",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: C.cyan, display: "inline-block",
              }} />
              {/* Montserrat 700 — badge label (brand UI) */}
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px", fontWeight: "700",
                letterSpacing: "1.5px", textTransform: "uppercase",
                color: C.sky,
              }}>Contactez-nous</span>
            </div>

            {/* H1 — Montserrat Bold 48px (Headline 1 — charte) */}
            <h2 className="bc-h1" style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "48px",    /* Headline 1: 48px Bold */
              fontWeight: "700",   /* Bold */
              color: C.white,
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              margin: "0 0 20px",
            }}>
              Passez à la{" "}
              <span style={{
                background: `linear-gradient(135deg, ${C.cyan}, ${C.sky})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>vitesse supérieure</span>
            </h2>

            {/* Body text — Open Sans Regular 18px (charte) */}
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "18px",   /* Body Text: 18px Regular */
              fontWeight: "400",  /* Regular */
              color: "rgba(255,255,255,0.55)",
              lineHeight: "1.7",
              margin: 0,
            }}>
              Nos experts vous accompagnent dans votre transformation mobilité. Choisissez comment vous souhaitez démarrer.
            </p>
          </div>

          {/* ─────── SERVICE TILES ─────── */}
          <div className="bc-tiles" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "48px",
          }}>
            {tiles.map((tile) => {
              const active = selectedService === tile.id;
              return (
                <div
                  key={tile.id}
                  className={`bc-tile ${active ? "active" : ""}`}
                  onClick={() => setSelectedService(tile.id)}
                  style={{
                    padding: "24px 22px",
                    borderRadius: "14px",
                    background: active
                      ? `rgba(0,139,211,0.12)`
                      : "rgba(255,255,255,0.03)",
                    border: `1.5px solid ${active ? C.cyan : "rgba(255,255,255,0.07)"}`,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: "44px", height: "44px",
                    borderRadius: "10px",
                    background: active ? `${C.cyan}25` : "rgba(255,255,255,0.05)",
                    color: active ? C.cyan : "rgba(255,255,255,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1px solid ${active ? C.cyan + "40" : "rgba(255,255,255,0.08)"}`,
                    transition: "all 0.3s ease",
                  }}>
                    {tile.icon}
                  </div>

                  {/* Tile label — Montserrat SemiBold */}
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: active ? C.white : "rgba(255,255,255,0.75)",
                  }}>{tile.label}</div>

                  {/* Tile desc — Open Sans Regular */}
                  <div style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: "1.5",
                  }}>{tile.desc}</div>

                  {/* Active indicator */}
                  {active && (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px", fontWeight: "700",
                      color: C.cyan, textTransform: "uppercase", letterSpacing: "1px",
                    }}>
                      <span style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: C.cyan, display: "inline-block",
                      }} />
                      Sélectionné
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ─────── MAIN GRID: FORM + INFO ─────── */}
          <div className="bc-grid" style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}>

            {/* ── FORM ── */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
            }}>
              {/* Form header */}
              <div style={{ marginBottom: "28px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "13px", fontWeight: "600",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase", letterSpacing: "0.8px",
                }}>Option :</span>
                <span style={{
                  background: `${C.marine}`,
                  border: `1px solid ${C.cyan}40`,
                  padding: "4px 14px",
                  borderRadius: "20px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px", fontWeight: "700",
                  color: C.sky,
                  letterSpacing: "0.5px",
                }}>{selectedService}</span>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="bc-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input name="user_name" type="text" placeholder="Nom complet" required
                    className="bc-input"
                    style={inputBase}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <input name="company" type="text" placeholder="Entreprise" required
                    className="bc-input"
                    style={inputBase}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div className="bc-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input name="user_email" type="email" placeholder="Email professionnel" required
                    className="bc-input"
                    style={inputBase}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <input name="phone" type="tel" placeholder="Téléphone" required
                    className="bc-input"
                    style={inputBase}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <textarea name="message" placeholder="Comment pouvons-nous vous aider ?" required
                  className="bc-input"
                  style={{ ...inputBase, minHeight: "130px", resize: "none" }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bc-submit"
                  style={{
                    marginTop: "8px",
                    padding: "18px",
                    borderRadius: "10px",
                    border: "none",
                    background: status === "success"
                      ? C.success
                      : status === "error"
                      ? "#EF4444"
                      : `linear-gradient(135deg, ${C.marine}, ${C.cyan})`,
                    color: C.white,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    letterSpacing: "0.3px",
                    boxShadow: status === "success" || status === "error"
                      ? "none"
                      : `0 8px 24px ${C.cyan}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    opacity: status === "sending" ? 0.75 : 1,
                  }}
                >
                  {status === "idle" && (
                    <>
                      <span>Envoyer ma demande</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ animation: "spin 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                      </svg>
                      <span>Transmission en cours...</span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>Message envoyé !</span>
                    </>
                  )}
                  {status === "error" && <span>Erreur — Réessayez</span>}
                </button>
              </form>
            </div>

            {/* ── INFO COLUMN ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

              {/* Assistance block */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.07)",
              }}>
                {/* Section label — Montserrat Bold, uppercase */}
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px", fontWeight: "700",
                  color: C.sky,
                  textTransform: "uppercase", letterSpacing: "2px",
                  margin: "0 0 20px",
                }}>Assistance Business</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { href: "mailto:business@inno.tn", label: "business@inno.tn", icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    )},
                    { href: "tel:+21658000800", label: "+216 58 000 800", icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                      </svg>
                    )},
                  ].map((item) => (
                    <a key={item.href} href={item.href}
                      className="bc-contact-link"
                      style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        color: C.white,
                        /* Body text — Open Sans SemiBold */
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: "16px", fontWeight: "600",
                      }}
                    >
                      <span style={{
                        width: "36px", height: "36px", borderRadius: "8px",
                        background: `${C.cyan}15`,
                        border: `1px solid ${C.cyan}25`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: C.cyan, flexShrink: 0,
                      }}>{item.icon}</span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust stats */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}>
                {[
                  { value: "500+", label: "Entreprises", accent: C.cyan },
                  { value: "24h", label: "Réponse max", accent: C.sky },
                  { value: "14j", label: "Essai gratuit", accent: C.cyan },
                  { value: "100%", label: "Satisfaction", accent: C.sky },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderBottom: `2px solid ${stat.accent}`,
                    borderRadius: "12px",
                    padding: "16px 14px",
                    textAlign: "center",
                  }}>
                    {/* Stat value — Montserrat Bold */}
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "22px", fontWeight: "700",
                      color: stat.accent, lineHeight: "1",
                      marginBottom: "6px",
                    }}>{stat.value}</div>
                    {/* Stat label — Open Sans secondary */}
                    <div style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "11px", fontWeight: "600",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase", letterSpacing: "0.5px",
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Tagline */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "24px",
              }}>
                <p style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px", fontWeight: "400",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: "1.7",
                  margin: 0,
                }}>
                  Inno Business accompagne plus de 500 entreprises tunisiennes dans leur gestion quotidienne de la mobilité corporate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    </>
  );
};

export default BusinessContact;