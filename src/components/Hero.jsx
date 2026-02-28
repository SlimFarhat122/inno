import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Clock, Navigation, Car } from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Utilisateurs actifs' },
  { value: '4.9/5', label: 'Note moyenne' },
  { value: '24/7', label: 'Support client' },
];

const Hero = () => {
  // Trajectoire rectiligne suivant la grille (pas de 40px pour correspondre à votre backgroundSize)
  const gridPath = "M -100,240 L 320,240 L 320,80 L 720,80 L 720,560 L 1120,560 L 1120,320 L 1800,320";

  const styles = {
    section: {
      position: "relative",
      padding: "120px 5% 80px",
      backgroundColor: "#f8fafc",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', sans-serif"
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
      backgroundColor: "rgba(16, 185, 129, 0.15)",
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
      position: "relative"
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
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(226, 232, 240, 0.8)",
      borderRadius: "100px",
      fontSize: "13px",
      fontWeight: "600",
      color: "#475569",
      marginBottom: "35px",
      boxShadow: "0 4px 10px -1px rgba(0, 0, 0, 0.05)",
    },
    badgeDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#10b981", 
      borderRadius: "50%",
      boxShadow: "0 0 12px rgba(16, 185, 129, 0.8)",
    },
    title: {
      fontSize: "clamp(36px, 5vw, 64px)",
      lineHeight: "1.1",
      fontWeight: "800",
      color: "#0f172a",
      marginBottom: "25px",
      letterSpacing: "-1px"
    },
    highlight: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block"
    },
    description: {
      fontSize: "clamp(16px, 2vw, 18px)",
      color: "#475569",
      maxWidth: "540px",
      lineHeight: "1.7",
      marginBottom: "45px"
    },
    btnContainer: {
      display: "flex",
      gap: "16px",
      marginBottom: "60px",
      flexWrap: "wrap"
    },
    btnPrimary: {
      background: "#0f172a",
      color: "white",
      padding: "16px 32px",
      borderRadius: "16px",
      fontWeight: "600",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.4)",
      border: "1px solid #1e293b"
    },
    btnSecondary: {
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid #e2e8f0",
      color: "#0f172a",
      padding: "16px 32px",
      borderRadius: "16px",
      fontWeight: "600",
      fontSize: "15px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
    },
    phoneWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "340px",
      margin: "0 auto"
    },
    phoneFrame: {
      width: "100%",
      height: "auto",
      aspectRatio: "340/700",
      backgroundColor: "#1e293b",
      borderRadius: "50px",
      padding: "12px",
      border: "2px solid #334155",
      boxShadow: "0 40px 80px -20px rgba(15, 23, 42, 0.4), inset 0 0 10px rgba(0,0,0,0.5)",
      position: "relative",
      zIndex: 2
    },
    phoneScreen: {
      width: "100%",
      height: "100%",
      backgroundColor: "#ffffff",
      borderRadius: "40px",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column"
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
      zIndex: 10
    }
  };

  return (
    <section style={styles.section}>
      <style>
        {`
          /* Trajectory & Car Animations */
          @keyframes drawPath {
            from { stroke-dashoffset: 2800; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes carDrive {
            0% { offset-distance: 0%; opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
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
            color: #10b981;
            filter: drop-shadow(0 0 15px rgba(16, 185, 129, 0.6));
          }
          .moving-car svg { transform: rotate(90deg); }

          /* Existing Animations */
          @keyframes blob1Anim {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes blob2Anim {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(-30px, 50px) scale(1.1); }
            66% { transform: translate(20px, -20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          
          .dynamic-blob-1 { animation: blob1Anim 15s infinite ease-in-out; }
          .dynamic-blob-2 { animation: blob2Anim 18s infinite ease-in-out; }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }
          
          .badge-dot-animated { animation: pulse 2s infinite; }
          .btn-primary:hover { 
            transform: translateY(-4px); 
            background: #1e293b !important;
            box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.5);
          }
          .btn-secondary:hover { 
            background: #ffffff !important; 
            border-color: #cbd5e1 !important;
            transform: translateY(-2px);
          }
          
          .floating-card {
            position: absolute;
            background: rgba(255, 255, 255, 0.85);
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
            border: 1px solid rgba(255, 255, 255, 0.6);
          }
          
          .top-left { top: 12%; left: -60px; animation: float 7s ease-in-out infinite; }
          .bottom-right { bottom: 15%; right: -70px; animation: float 6s ease-in-out infinite reverse; }
          
          .hero-stats { 
            display: flex; 
            gap: 40px; 
            padding-top: 30px;
            border-top: 1px solid rgba(226, 232, 240, 0.6);
          }

          @media (max-width: 968px) {
            .hero-inner { flex-direction: column; text-align: center; gap: 40px; }
            .hero-content { display: flex; flex-direction: column; align-items: center; }
            .hero-btn-container { justify-content: center; }
            .hero-stats { flex-wrap: wrap; justify-content: center; gap: 30px; }
            .stat-divider { display: none; }
            .floating-card { display: none; } 
            .phone-visual { margin-top: 20px; }
          }
        `}
      </style>

      {/* --- BACKGROUND LAYERS --- */}
      <div style={styles.gridBackground} />
      <div className="dynamic-blob-1" style={styles.blob1} />
      <div className="dynamic-blob-2" style={styles.blob2} />

      {/* --- TRAJECTORY LAYER --- */}
      <div style={styles.trajectoryLayer}>
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <path 
            className="grid-line-path"
            d={gridPath} 
            stroke="#10b981" 
            strokeWidth="1.5" 
            fill="none"
            strokeOpacity="0.15"
          />
        </svg>
        <div className="moving-car">
           <Car size={22} fill="#10b981" />
        </div>
      </div>

      <div className="hero-inner" style={styles.inner}>
        {/* --- LEFT SIDE (Text) --- */}
        <div className="hero-content" style={styles.content}>
          <div style={styles.badge}>
            <div style={styles.badgeDot} className="badge-dot-animated" />
            <span>Le standard de la mobilité premium en Tunisie</span>
          </div>

          <h1 style={styles.title}>
            <span style={styles.highlight}>L'excellence</span><br />
            pour chacun de<br />
            vos trajets.
          </h1>

          <p style={styles.description}>
            Réservez votre chauffeur privé en quelques secondes. Une expérience 
            fluide, sécurisée et disponible 24h/24 pour répondre à vos plus hautes exigences.
          </p>

          <div className="hero-btn-container" style={styles.btnContainer}>
            <a href="#app" className="btn-primary" style={styles.btnPrimary}>
              Réserver un trajet
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-secondary" style={styles.btnSecondary}>
              Découvrir nos services
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px 0', letterSpacing: "-0.5px" }}>{stat.value}</p>
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#64748b', margin: 0 }}>{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="stat-divider" style={{ width: '1px', background: 'rgba(226, 232, 240, 0.8)' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

{/* --- RIGHT SIDE (Mobile Visual - Smaller Version) --- */}
        <div className="phone-visual" style={{ flex: "0 1 380px", display: "flex", justifyContent: "center" }}>
          <div style={styles.phoneWrapper}>
            <div style={styles.phoneFrame}>
              <div style={styles.phoneScreen}>
                <div style={styles.notch} />
                
                <div style={{ padding: '38px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ background: '#0f172a', padding: '6px', borderRadius: '8px' }}>
                        <Navigation size={13} color="white" fill="white" />
                      </div>
                      <span style={{ fontWeight: '800', color: '#0f172a', fontSize: "14px" }}>INNO</span>
                    </div>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "10px", fontWeight: "600" }}>AK</span>
                    </div>
                  </div>

                  <p style={{ color: '#64748b', fontSize: '12px', margin: '0 0 2px 0' }}>Bonjour, Ahmed</p>
                  <p style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 18px 0' }}>Où allons-nous ?</p>

                  <div style={{ position: "relative", marginBottom: "15px" }}>
                    <div style={{ background: '#f8fafc', border: "1px solid #e2e8f0", padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                        <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
                        <div style={{ width: '1px', height: '12px', background: '#e2e8f0' }} />
                        <div style={{ width: '8px', height: '8px', background: '#0f172a', borderRadius: '50%' }} />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ height: '10px', background: '#e2e8f0', width: '40%', borderRadius: '3px' }} />
                        <div style={{ height: '1px', background: '#e2e8f0', width: '100%' }} />
                        <div style={{ height: '10px', background: '#cbd5e1', width: '70%', borderRadius: '3px' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: 1, background: '#f1f5f9', borderRadius: '20px', margin: '5px 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: "absolute", width: "100%", height: "100%", backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "12px 12px", opacity: 0.5 }} />
                    <div style={{ width: "32px", height: "32px", background: "#0f172a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zImage: 2 }}>
                      <MapPin size={16} color="white" />
                    </div>
                  </div>

                  <div style={{ background: '#0f172a', padding: '14px 16px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', marginTop: '10px' }}>
                    <div>
                      <p style={{ fontSize: '9px', margin: 0, opacity: 0.7 }}>Prix estimé</p>
                      <p style={{ fontSize: '14px', fontWeight: '800', margin: '1px 0 0 0' }}>12.5 DT</p>
                    </div>
                    <div style={{ background: '#10b981', color: 'white', padding: '8px 14px', borderRadius: '10px', fontWeight: '700', fontSize: '11px' }}>Commander</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards (Positions adjusted for smaller phone) */}
            <div className="floating-card top-left">
              <div style={{ backgroundColor: '#10b981', padding: '8px', borderRadius: '10px', color: 'white', display: 'flex' }}><ShieldCheck size={16} /></div>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', margin: 0, color: '#0f172a' }}>Vérifié</p>
                <p style={{ fontSize: '10px', margin: 0, color: '#64748b' }}>Ahmed K.</p>
              </div>
            </div>

            <div className="floating-card bottom-right">
              <div style={{ backgroundColor: '#0f172a', padding: '8px', borderRadius: '10px', color: 'white', display: 'flex' }}><Clock size={16} /></div>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', margin: 0, color: '#0f172a' }}>Arrivée</p>
                <p style={{ fontSize: '11px', margin: 0, color: '#10b981', fontWeight: '700' }}>3 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;