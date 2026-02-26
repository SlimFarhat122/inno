import React from 'react';
import { MapPin, ArrowRight, Shield, Clock } from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Utilisateurs' },
  { value: '4.9/5', label: 'Note moyenne' },
  { value: '24/7', label: 'Disponibilité' },
];

const Hero = () => {
  const styles = {
    section: {
      position: "relative",
      padding: "120px 5% 80px",
      backgroundColor: "#ffffff",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', sans-serif"
    },
    bgCircle1: {
      position: "absolute",
      top: "-200px",
      right: "-100px",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(98, 161, 91, 0.05) 0%, transparent 70%)",
      zIndex: 0
    },
    inner: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "60px",
      width: "100%",
      maxWidth: "1200px",
      zIndex: 2,
    },
    content: {
      flex: "1 1 500px",
      minWidth: "300px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 16px",
      backgroundColor: "#f1f5f9",
      borderRadius: "100px",
      fontSize: "12px",
      fontWeight: "700",
      color: "#64748b",
      marginBottom: "30px",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    },
    badgeDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#138806",
      borderRadius: "50%",
      boxShadow: "0 0 10px rgba(34, 197, 94, 0.4)"
    },
    title: {
      fontSize: "clamp(32px, 5vw, 68px)",
      lineHeight: "1.1",
      fontWeight: "900",
      color: "#1e3a8a",
      marginBottom: "25px",
    },
    description: {
      fontSize: "clamp(16px, 2vw, 19px)",
      color: "#64748b",
      maxWidth: "520px",
      lineHeight: "1.6",
      marginBottom: "45px"
    },
    btnPrimary: {
      background: "#1e3a8a",
      color: "white",
      padding: "16px 28px",
      borderRadius: "14px",
      fontWeight: "800",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 20px 40px rgba(30, 58, 138, 0.2)"
    },
    btnSecondary: {
      border: "2px solid #e2e8f0",
      color: "#1e3a8a",
      padding: "16px 28px",
      borderRadius: "14px",
      fontWeight: "800",
      textDecoration: "none",
      transition: "all 0.3s ease"
    },
    phoneWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "320px",
      margin: "0 auto"
    },
    phoneFrame: {
      width: "100%",
      height: "auto",
      aspectRatio: "320/650",
      backgroundColor: "#0f172a",
      borderRadius: "45px",
      padding: "12px",
      border: "4px solid #334155",
      boxShadow: "0 50px 100px -20px rgba(0,0,0,0.3)",
      position: "relative",
      zIndex: 2
    },
    phoneScreen: {
      width: "100%",
      height: "100%",
      backgroundColor: "#f8fafc",
      borderRadius: "35px",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  };

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .btn-primary:hover { transform: translateY(-3px); background: #1e293b !important; }
          .btn-secondary:hover { background: #f8fafc; border-color: #cbd5e1; }
          
          .floating-card {
            position: absolute;
            background: white;
            padding: 12px 18px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            z-index: 5;
            width: max-content;
            border: 1px solid #f1f5f9;
          }
          
          .top-left { top: 15%; left: -40px; animation: float 6s ease-in-out infinite; }
          .bottom-right { bottom: 20%; right: -40px; animation: float 6s ease-in-out infinite reverse; }
          
          .hero-buttons { display: flex; gap: 20px; margin-bottom: 60px; }
          .hero-stats { display: flex; gap: 40px; }

          @media (max-width: 968px) {
            .hero-content { text-align: center; display: flex; flex-direction: column; align-items: center; }
            .hero-buttons { justify-content: center; flex-direction: column; width: 100%; max-width: 300px; }
            .hero-stats { justify-content: center; flex-wrap: wrap; gap: 20px; }
            .stat-item { flex-direction: column !important; gap: 10px !important; text-align: center; }
            .stat-divider { display: none; }
            .floating-card { display: none; } /* On cache les cartes sur petit mobile pour la propreté */
            .phone-visual { margin-top: 40px; transform: scale(0.9); }
          }
          
          @media (min-width: 1200px) {
             .top-left { left: -60px; }
             .bottom-right { right: -60px; }
          }
        `}
      </style>

      <div style={styles.bgCircle1} />

      <div className="hero-inner" style={styles.inner}>
        {/* --- CÔTÉ GAUCHE --- */}
        <div className="hero-content" style={styles.content}>
          <div style={styles.badge}>
            <div style={styles.badgeDot} />
            <span>Disponible partout en Tunisie</span>
          </div>

          <h1 style={styles.title}>
            <span style={{ color: "#138806" }}>ENFIN,</span><br />
            Des courses adaptées<br />
            à vos exigences.
          </h1>

          <p style={styles.description}>
            Réservez votre taxi en quelques secondes. Rapide, sécurisé et
            disponible 24h/24 pour tous vos déplacements premium.
          </p>

          <div className="hero-buttons">
            <a href="#app" className="btn-primary" style={styles.btnPrimary}>
              Commencer maintenant
              <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn-secondary" style={styles.btnSecondary}>
              En savoir plus
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div key={stat.label} className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <div>
                  <p style={{ fontSize: '24px', fontWeight: '900', color: '#1e3a8a', margin: 0 }}>{stat.value}</p>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>{stat.label}</p>
                </div>
                {i < stats.length - 1 && <div className="stat-divider" style={{ width: '1px', height: '40px', background: '#e2e8f0' }} />}
              </div>
            ))}
          </div>
        </div>

        {/* --- CÔTÉ DROIT --- */}
        <div className="hero-visual" style={{ flex: "0 1 400px" }}>
          <div style={styles.phoneWrapper}>
            <div style={styles.phoneFrame}>
              <div style={styles.phoneScreen}>
                {/* Notch */}
                <div style={{ height: '25px', background: '#0f172a', width: '40%', margin: '0 auto', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }} />
                
                <div style={{ padding: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '25px' }}>
                    <div style={{ background: '#1e3a8a', padding: '6px', borderRadius: '8px' }}>
                      <MapPin size={14} color="white" fill="white" />
                    </div>
                    <span style={{ fontWeight: '900', color: '#1e3a8a', letterSpacing: '1px' }}>INNO</span>
                  </div>

                  <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>Bonjour, Ahmed</p>
                  <p style={{ fontSize: '20px', fontWeight: '800', color: '#1e3a8a', marginTop: '4px' }}>Où allez-vous ?</p>

                  <div style={{ background: 'white', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                    <div style={{ width: '10px', height: '10px', background: '#62a15b', borderRadius: '50%' }} />
                    <div style={{ height: '8px', background: '#f1f5f9', flex: 1, borderRadius: '4px' }} />
                  </div>
                  <div style={{ background: 'white', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                    <div style={{ width: '10px', height: '10px', background: '#1e3a8a', borderRadius: '50%' }} />
                    <div style={{ height: '8px', background: '#f1f5f9', width: '60%', borderRadius: '4px' }} />
                  </div>

                  <div style={{ height: '140px', background: '#eff6ff', borderRadius: '20px', margin: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={32} color="#1e3a8a" opacity={0.3} />
                  </div>

                  <div style={{ background: '#62a15b', padding: '15px', borderRadius: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                    <div>
                      <p style={{ fontSize: '10px', margin: 0, opacity: 0.9 }}>Estimation</p>
                      <p style={{ fontSize: '16px', fontWeight: '900', margin: 0 }}>12.500 DT</p>
                    </div>
                    <div style={{ background: 'white', color: '#62a15b', padding: '6px 14px', borderRadius: '10px', fontWeight: '800', fontSize: '11px' }}>Payer</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cartes flottantes */}
            <div className="floating-card top-left">
              <div style={{ backgroundColor: '#f0fdf4', padding: '8px', borderRadius: '10px', color: '#62a15b' }}><Shield size={20} /></div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '800', margin: 0, color: '#1e3a8a' }}>Chauffeur vérifié</p>
                <p style={{ fontSize: '11px', margin: 0, color: '#64748b' }}>Ahmed K. - 4.9</p>
              </div>
            </div>

            <div className="floating-card bottom-right">
              <div style={{ backgroundColor: '#eff6ff', padding: '8px', borderRadius: '10px', color: '#1e3a8a' }}><Clock size={20} /></div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '800', margin: 0, color: '#1e3a8a' }}>Arrivée dans</p>
                <p style={{ fontSize: '11px', margin: 0, color: '#62a15b', fontWeight: '800' }}>3 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;