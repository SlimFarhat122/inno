import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Clock, Navigation, Car } from 'lucide-react';

const stats = [
  { value: '5K+', label: 'Utilisateurs actifs' },
  { value: '4.9/5', label: 'Note moyenne' },
  { value: '24/7', label: 'Support client' },
];

const Hero = () => {
  // ── PALETTE INNO ─────────────────────────────────────────────
  const C = {
    green:      "#39B54A",   // Vert Inno — logo, accents
    dark:       "#0f172a",   // Fond sombre, titres
    slate:      "#475569",   // Textes secondaires
    light:      "#f8fafc",   // Fond section
    white:      "#FFFFFF",
  };

  const gridPath = "M -100,240 L 320,240 L 320,80 L 720,80 L 720,560 L 1120,560 L 1120,320 L 1800,320";

  const styles = {
    section: {
      position: "relative",
      padding: "120px 5% 80px",
      backgroundColor: C.light,
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      /* Body Text — Open Sans Regular 18px */
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "18px",
    },
    gridBackground: {
      position: "absolute",
      inset: 0,
      backgroundImage: `
        linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
      zIndex: 0,
      pointerEvents: "none",
    },
    trajectoryLayer: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
    },
    blob1: {
      position: "absolute",
      top: "-15%",
      right: "-5%",
      width: "600px",
      height: "600px",
      backgroundColor: `${C.green}20`,   // #39B54A at 12% opacity
      filter: "blur(90px)",
      borderRadius: "50%",
      zIndex: 0,
      pointerEvents: "none",
    },
    blob2: {
      position: "absolute",
      bottom: "-10%",
      left: "-10%",
      width: "500px",
      height: "500px",
      backgroundColor: "rgba(15, 23, 42, 0.08)",
      filter: "blur(90px)",
      borderRadius: "50%",
      zIndex: 0,
      pointerEvents: "none",
    },
    inner: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "60px",
      width: "100%",
      maxWidth: "1250px",
      zIndex: 2,
      position: "relative",
    },
    content: {
      flex: "1 1 500px",
      minWidth: "320px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 18px",
      backgroundColor: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(226,232,240,0.8)",
      borderRadius: "100px",
      /* Open Sans SemiBold — badge secondary label */
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "13px",
      fontWeight: "600",
      color: C.slate,
      marginBottom: "35px",
      boxShadow: "0 4px 10px -1px rgba(0,0,0,0.05)",
    },
    badgeDot: {
      width: "8px",
      height: "8px",
      backgroundColor: C.green,          // #39B54A
      borderRadius: "50%",
      boxShadow: `0 0 12px ${C.green}CC`,
    },
    /* Headline 1 — Montserrat Bold 48px (charte) */
    title: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "clamp(36px, 5vw, 64px)", /* 48px+ Bold — Headline 1 */
      lineHeight: "1.1",
      fontWeight: "700",                  /* Bold */
      color: C.dark,
      marginBottom: "25px",
      letterSpacing: "-1px",
    },
    highlight: {
      background: `linear-gradient(135deg, ${C.green} 0%, #2da03e 100%)`, // #39B54A gradient
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    },
    /* Body Text — Open Sans Regular 18px (charte) */
    description: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "clamp(16px, 2vw, 18px)",  /* Body Text: 18px Regular */
      fontWeight: "400",                    /* Regular */
      color: C.slate,
      maxWidth: "540px",
      lineHeight: "1.7",
      marginBottom: "45px",
    },
    btnContainer: {
      display: "flex",
      gap: "16px",
      marginBottom: "60px",
      flexWrap: "wrap",
    },
    btnPrimary: {
      background: C.dark,
      color: C.white,
      padding: "16px 32px",
      borderRadius: "16px",
      /* Montserrat Bold — CTA button label */
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "700",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      boxShadow: "0 20px 40px -10px rgba(15,23,42,0.4)",
      border: "1px solid #1e293b",
    },
    btnSecondary: {
      background: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid #e2e8f0",
      color: C.dark,
      padding: "16px 32px",
      borderRadius: "16px",
      /* Montserrat SemiBold — secondary button */
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "600",
      fontSize: "15px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
    },
    phoneWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "340px",
      margin: "0 auto",
    },
    phoneFrame: {
      width: "100%",
      height: "auto",
      aspectRatio: "340/700",
      backgroundColor: "#1e293b",
      borderRadius: "50px",
      padding: "12px",
      border: "2px solid #334155",
      boxShadow: "0 40px 80px -20px rgba(15,23,42,0.4), inset 0 0 10px rgba(0,0,0,0.5)",
      position: "relative",
      zIndex: 2,
    },
    phoneScreen: {
      width: "100%",
      height: "100%",
      backgroundColor: C.white,
      borderRadius: "40px",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    notch: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "120px",
      height: "30px",
      backgroundColor: "#1e293b",
      borderBottomLeftRadius: "16px",
      borderBottomRightRadius: "16px",
      zIndex: 10,
    },
  };

  return (
    <section style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        /* ── Trajectory & Car ── */
        @keyframes drawPath {
          from { stroke-dashoffset: 2800; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes carDrive {
          0%   { offset-distance: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .grid-line-path {
          stroke-dasharray: 2800;
          stroke-dashoffset: 2800;
          animation: drawPath 25s linear infinite;
        }
        .moving-car {
          position: absolute;
          offset-path: path("${gridPath}");
          offset-rotate: auto;
          animation: carDrive 25s linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${C.green};
          filter: drop-shadow(0 0 15px ${C.green}99);
        }
        .moving-car svg { transform: rotate(90deg); }

        /* ── Blobs ── */
        @keyframes blob1Anim {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(30px,-50px) scale(1.1); }
          66%  { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        @keyframes blob2Anim {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(-30px,50px) scale(1.1); }
          66%  { transform: translate(20px,-20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        .dynamic-blob-1 { animation: blob1Anim 15s infinite ease-in-out; }
        .dynamic-blob-2 { animation: blob2Anim 18s infinite ease-in-out; }

        /* ── Float & Pulse ── */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 ${C.green}66; }
          70%  { box-shadow: 0 0 0 10px ${C.green}00; }
          100% { box-shadow: 0 0 0 0 ${C.green}00; }
        }
        .badge-dot-animated { animation: pulse 2s infinite; }

        /* ── Buttons ── */
        .btn-primary:hover {
          transform: translateY(-4px);
          background: #1e293b !important;
          box-shadow: 0 25px 50px -12px rgba(15,23,42,0.5);
        }
        .btn-secondary:hover {
          background: #ffffff !important;
          border-color: #cbd5e1 !important;
          transform: translateY(-2px);
        }

        /* ── Floating Cards ── */
        .floating-card {
          position: absolute;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 16px 20px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
          z-index: 5;
          width: max-content;
          border: 1px solid rgba(255,255,255,0.6);
          /* Open Sans for card labels */
          fontFamily: "'Open Sans', sans-serif";
        }
        .top-left    { top: 12%;    left: -60px;  animation: float 7s ease-in-out infinite; }
        .bottom-right{ bottom: 15%; right: -70px; animation: float 6s ease-in-out infinite reverse; }

        /* ── Stats row ── */
        .hero-stats {
          display: flex;
          gap: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(226,232,240,0.6);
        }
        .stat-value {
          /* Montserrat Bold — numerical highlight */
          font-family: 'Montserrat', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: ${C.dark};
          margin: 0 0 4px;
          letter-spacing: -0.5px;
        }
        .stat-label {
          /* Open Sans Regular — secondary label */
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #64748b;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 968px) {
          .hero-inner { flex-direction: column; text-align: center; gap: 40px; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-btn-container { justify-content: center; }
          .hero-stats { flex-wrap: wrap; justify-content: center; gap: 30px; }
          .stat-divider { display: none; }
          .floating-card { display: none; }
          .phone-visual { margin-top: 20px; }
        }
      `}</style>

      {/* ── Background ── */}
      <div style={styles.gridBackground} />
      <div className="dynamic-blob-1" style={styles.blob1} />
      <div className="dynamic-blob-2" style={styles.blob2} />

      {/* ── Trajectory ── */}
      <div style={styles.trajectoryLayer}>
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
          <path
            className="grid-line-path"
            d={gridPath}
            stroke={C.green}           // #39B54A
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.15"
          />
        </svg>
        <div className="moving-car">
          <Car size={22} fill={C.green} />
        </div>
      </div>

      <div className="hero-inner" style={styles.inner}>

        {/* ── LEFT: Text ── */}
        <div className="hero-content" style={styles.content}>

          {/* Badge — Open Sans SemiBold */}
          <div style={styles.badge}>
            <div style={styles.badgeDot} className="badge-dot-animated" />
            <span>Le standard de la mobilité premium en Tunisie</span>
          </div>

          {/* Headline 1 — Montserrat Bold 48px (charte) */}
          <h1 style={styles.title}>
            <span style={styles.highlight}>L'excellence</span><br />
            pour chacun de<br />
            vos trajets.
          </h1>

          {/* Body Text — Open Sans Regular 18px (charte) */}
          <p style={styles.description}>
            Réservez votre chauffeur privé en quelques secondes. Une expérience
            fluide, sécurisée et disponible 24h/24 pour répondre à vos plus hautes exigences.
          </p>

          {/* CTAs — Montserrat Bold/SemiBold */}
          <div className="hero-btn-container" style={styles.btnContainer}>
            <a href="#app" className="btn-primary" style={styles.btnPrimary}>
              Réserver un trajet
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-secondary" style={styles.btnSecondary}>
              Découvrir nos services
            </a>
          </div>

          {/* Stats — Montserrat Bold values, Open Sans labels */}
          <div className="hero-stats">
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div style={{ textAlign: "left" }}>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="stat-divider" style={{ width: "1px", background: "rgba(226,232,240,0.8)" }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Phone Visual ── */}
        <div className="phone-visual" style={{ flex: "0 1 380px", display: "flex", justifyContent: "center" }}>
          <div style={styles.phoneWrapper}>
            <div style={styles.phoneFrame}>
              <div style={styles.phoneScreen}>
                <div style={styles.notch} />

                <div style={{ padding: "38px 18px 18px", flex: 1, display: "flex", flexDirection: "column" }}>

                  {/* App bar */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ background: C.dark, padding: "6px", borderRadius: "8px" }}>
                        <Navigation size={13} color="white" fill="white" />
                      </div>
                      {/* Montserrat Bold — app name */}
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "800", color: C.dark, fontSize: "14px" }}>INNO</span>
                    </div>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: "600" }}>AK</span>
                    </div>
                  </div>

                  {/* Greeting — Open Sans */}
                  <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#64748b", fontSize: "12px", margin: "0 0 2px" }}>Bonjour, Ahmed</p>
                  {/* Headline 2 equivalent in phone — Montserrat SemiBold */}
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", fontWeight: "700", color: C.dark, margin: "0 0 18px" }}>Où allons-nous ?</p>

                  {/* Route input */}
                  <div style={{ position: "relative", marginBottom: "15px" }}>
                    <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
                        <div style={{ width: "8px", height: "8px", background: C.green, borderRadius: "50%" }} />
                        <div style={{ width: "1px", height: "12px", background: "#e2e8f0" }} />
                        <div style={{ width: "8px", height: "8px", background: C.dark, borderRadius: "50%" }} />
                      </div>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ height: "10px", background: "#e2e8f0", width: "40%", borderRadius: "3px" }} />
                        <div style={{ height: "1px", background: "#e2e8f0", width: "100%" }} />
                        <div style={{ height: "10px", background: "#cbd5e1", width: "70%", borderRadius: "3px" }} />
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div style={{ flex: 1, background: "#f1f5f9", borderRadius: "20px", margin: "5px 0", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "absolute", width: "100%", height: "100%", backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "12px 12px", opacity: 0.5 }} />
                    <div style={{ width: "32px", height: "32px", background: C.dark, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                      <MapPin size={16} color="white" />
                    </div>
                  </div>

                  {/* Booking bar */}
                  <div style={{ background: C.dark, padding: "14px 16px", borderRadius: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", marginTop: "10px" }}>
                    <div>
                      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "9px", margin: 0, opacity: 0.7 }}>Prix estimé</p>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: "800", margin: "1px 0 0" }}>12.5 DT</p>
                    </div>
                    <div style={{ background: C.green, color: "white", padding: "8px 14px", borderRadius: "10px", fontFamily: "'Montserrat', sans-serif", fontWeight: "700", fontSize: "11px" }}>
                      Commander
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card — verified driver */}
            <div className="floating-card top-left">
              <div style={{ backgroundColor: C.green, padding: "8px", borderRadius: "10px", color: "white", display: "flex" }}>
                <ShieldCheck size={16} />
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: "700", margin: 0, color: C.dark }}>Vérifié</p>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "10px", margin: 0, color: "#64748b" }}>Ahmed K.</p>
              </div>
            </div>

            {/* Floating card — ETA */}
            <div className="floating-card bottom-right">
              <div style={{ backgroundColor: C.dark, padding: "8px", borderRadius: "10px", color: "white", display: "flex" }}>
                <Clock size={16} />
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: "700", margin: 0, color: C.dark }}>Arrivée</p>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "11px", margin: 0, color: C.green, fontWeight: "700" }}>3 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;