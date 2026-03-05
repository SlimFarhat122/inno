import React, { useEffect, useRef, useState } from "react";
import taxiBusiness from "../assets/taxi.png";

const BusinessHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const target = 24.8;
    let start = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCounter(target);
        clearInterval(interval);
      } else {
        setCounter(parseFloat(start.toFixed(1)));
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

const scrollToContact = () => {
  const el = document.getElementById("business-contact");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top, behavior: "smooth" });
};

  const C = {
    marine:     "#003DA7",
    cyan:       "#008BD3",
    anthracite: "#374151",
    sky:        "#38BDF8",
    lightGray:  "#F3F4F6",
    white:      "#FFFFFF",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .bh-root {
          font-family: 'Open Sans', sans-serif;
          font-size: 18px;
          background: ${C.white};
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }

        .bh-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(${C.marine}08 1px, transparent 1px),
            linear-gradient(90deg, ${C.marine}08 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        .bh-circle {
          position: absolute; top: -15%; right: -8%;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, ${C.cyan}18, ${C.marine}10 60%, transparent 80%);
          filter: blur(60px); z-index: 0;
          animation: floatCircle 8s ease-in-out infinite;
        }

        .bh-circle2 {
          position: absolute; bottom: -20%; left: -10%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, ${C.sky}12, transparent 70%);
          filter: blur(80px); z-index: 0;
          animation: floatCircle 12s ease-in-out infinite reverse;
        }

        @keyframes floatCircle {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.03); }
        }

        .bh-inner {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
          padding: 90px 8% 80px;
          width: 100%; max-width: 1400px; margin: 0 auto;
        }

        .bh-left {
          opacity: 0; transform: translateY(30px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bh-left.visible { opacity: 1; transform: translateY(0); }

        .bh-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px 6px 10px;
          background: ${C.marine}0D;
          border: 1px solid ${C.marine}20;
          border-left: 3px solid ${C.cyan};
          border-radius: 4px; margin-bottom: 28px;
        }

        .bh-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${C.cyan}; animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        .bh-badge-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: ${C.marine};
        }

        .bh-h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 48px; font-weight: 700;
          line-height: 1.15; color: ${C.marine};
          margin-bottom: 20px; letter-spacing: -0.5px;
        }

        .bh-h1 .accent { color: ${C.cyan}; position: relative; display: inline-block; }

        .bh-h1 .accent::after {
          content: '';
          position: absolute; bottom: 2px; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, ${C.cyan}, ${C.sky});
          border-radius: 2px;
          transform: scaleX(0); transform-origin: left;
          animation: underlineIn 0.8s 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes underlineIn { to { transform: scaleX(1); } }

        .bh-desc {
          font-family: 'Open Sans', sans-serif;
          font-size: 18px; font-weight: 400;
          color: ${C.anthracite}; line-height: 1.8;
          max-width: 500px; margin-bottom: 40px;
        }

        .bh-stats { display: flex; gap: 32px; margin-bottom: 44px; padding-top: 8px; }
        .bh-stat { display: flex; flex-direction: column; gap: 4px; }

        .bh-stat-value {
          font-family: 'Montserrat', sans-serif;
          font-size: 26px; font-weight: 800; color: ${C.marine}; line-height: 1;
        }

        .bh-stat-label {
          font-family: 'Open Sans', sans-serif;
          font-size: 12px; color: ${C.anthracite}99;
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
        }

        .bh-stat-divider { width: 1px; background: ${C.marine}15; align-self: stretch; }
        .bh-cta-row { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }

        .bh-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 32px; background: ${C.marine}; color: ${C.white};
          border: none; border-radius: 8px;
          font-family: 'Montserrat', sans-serif; font-size: 15px; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 8px 24px ${C.marine}35; position: relative; overflow: hidden;
        }

        .bh-btn-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, ${C.cyan} 0%, ${C.marine} 100%);
          opacity: 0; transition: opacity 0.3s ease;
        }

        .bh-btn-primary:hover::before { opacity: 1; }
        .bh-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px ${C.marine}45; }
        .bh-btn-primary span { position: relative; z-index: 1; }

        .bh-btn-icon { width: 18px; height: 18px; transition: transform 0.3s ease; position: relative; z-index: 1; }
        .bh-btn-primary:hover .bh-btn-icon { transform: translateX(4px); }

        .bh-right {
          position: relative;
          opacity: 0; transform: translateX(40px) scale(0.97);
          transition: all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .bh-right.visible { opacity: 1; transform: translateX(0) scale(1); }

        .bh-card {
          position: absolute; background: ${C.white}; border-radius: 14px; padding: 16px 20px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.1), 0 0 0 1px ${C.marine}08;
          z-index: 10; backdrop-filter: blur(10px);
        }

        .bh-card-main {
          bottom: -5%; left: -8%; border-bottom: 3px solid ${C.cyan};
          animation: floatCard 5s ease-in-out infinite; min-width: 190px;
        }

        .bh-card-top {
          top: 10%; right: -6%; border-top: 3px solid ${C.marine};
          animation: floatCard 6s ease-in-out infinite 1s; min-width: 160px;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes carFloat {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }

        @keyframes shadowPulse {
          0%, 100% { transform: translateX(-50%) scaleX(1); opacity: 0.5; }
          50% { transform: translateX(-50%) scaleX(0.85); opacity: 0.3; }
        }

        @keyframes speedLine {
          0% { opacity: 0; transform: translateX(-20px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(10px); }
        }

        @keyframes particleFade {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        .bh-card-label {
          font-family: 'Open Sans', sans-serif; font-size: 11px; font-weight: 700;
          color: ${C.anthracite}80; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px;
        }

        .bh-card-value {
          font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 800;
          color: ${C.marine}; line-height: 1; display: flex; align-items: baseline; gap: 6px;
        }

        .bh-card-sub { font-family: 'Open Sans', sans-serif; font-size: 13px; color: ${C.anthracite}80; font-weight: 400; }

        .bh-card-pill {
          display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px;
          background: #10B98115; color: #059669; border-radius: 20px;
          font-family: 'Open Sans', sans-serif; font-size: 12px; font-weight: 600; margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .bh-inner { grid-template-columns: 1fr; gap: 60px; text-align: center; padding: 80px 6% 60px; }
          .bh-desc, .bh-badge { margin-left: auto; margin-right: auto; }
          .bh-stats, .bh-cta-row { justify-content: center; }
          .bh-card-main { left: 0; bottom: -3%; }
          .bh-card-top { right: 0; }
        }

        @media (max-width: 640px) {
          .bh-h1 { font-size: 32px; }
          .bh-inner { padding: 70px 5% 40px; gap: 40px; }
          .bh-stats { gap: 20px; }
          .bh-btn-primary { padding: 14px 20px; font-size: 14px; }
        }
      `}</style>

      <section className="bh-root">
        <div className="bh-grid" />
        <div className="bh-circle" />
        <div className="bh-circle2" />

        <div className="bh-inner">
          <div className={`bh-left ${isVisible ? "visible" : ""}`}>

            <div className="bh-badge">
              <span className="bh-badge-dot" />
              <span className="bh-badge-text">Solution Entreprise B2B</span>
            </div>

            <h1 className="bh-h1">
              Simplifiez les déplacements<br />
              <span className="accent">de votre entreprise.</span>
            </h1>

            <p className="bh-desc">
              Déployez une solution intelligente pour vos collaborateurs.
              Contrôle total des coûts, facturation centralisée et chauffeurs certifiés — en un seul tableau de bord.
            </p>

            <div className="bh-stats">
              <div className="bh-stat">
                <span className="bh-stat-value">-{counter}%</span>
                <span className="bh-stat-label">Frais de transport</span>
              </div>
              <div className="bh-stat-divider" />
              <div className="bh-stat">
                <span className="bh-stat-value">100%</span>
                <span className="bh-stat-label">Facturation centrale</span>
              </div>
              <div className="bh-stat-divider" />
              <div className="bh-stat">
                <span className="bh-stat-value">24/7</span>
                <span className="bh-stat-label">Disponibilité</span>
              </div>
            </div>

            <div className="bh-cta-row">
              <button className="bh-btn-primary" onClick={scrollToContact}>
                <span>Ouvrir un compte Business</span>
                <svg className="bh-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className={`bh-right ${isVisible ? "visible" : ""}`}>

            <div className="bh-card bh-card-top">
              <div className="bh-card-label">Chauffeurs certifiés</div>
              <div className="bh-card-value">+500 <span className="bh-card-sub">actifs</span></div>
              <div className="bh-card-pill">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Vérifiés &amp; assurés
              </div>
            </div>

            <div className="bh-img-frame" style={{ overflow: "hidden", background: "transparent", boxShadow: "none", border: "none" }}>
              <div style={{
                position: "relative", width: "100%", aspectRatio: "4/3",
                borderRadius: "24px", overflow: "hidden",
                background: `linear-gradient(160deg, ${C.marine} 0%, #001F6B 55%, #000D3A 100%)`,
                boxShadow: `0 40px 100px ${C.marine}40, 0 0 0 1px ${C.cyan}20`,
              }}>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                  backgroundImage: `linear-gradient(${C.cyan}18 1px, transparent 1px), linear-gradient(90deg, ${C.cyan}18 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                  transform: "perspective(400px) rotateX(55deg)",
                  transformOrigin: "bottom center",
                  maskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                }} />

                {[15, 28, 42, 58, 72].map((top, i) => (
                  <div key={i} style={{
                    position: "absolute", top: `${top}%`, left: 0,
                    width: `${30 + i * 8}%`, height: "1px",
                    background: `linear-gradient(90deg, transparent, ${C.cyan}${["30","40","25","35","20"][i]}, transparent)`,
                    animation: `speedLine ${1.2 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }} />
                ))}

                <div style={{
                  position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)",
                  width: "75%", height: "40%",
                  background: `radial-gradient(ellipse, ${C.cyan}25 0%, ${C.marine}15 50%, transparent 75%)`,
                  filter: "blur(24px)", zIndex: 1,
                }} />

                <div style={{
                  position: "absolute", top: 0, left: "-10%", width: "50%", height: "100%",
                  background: `linear-gradient(90deg, ${C.cyan}12, transparent 70%)`,
                  zIndex: 1, pointerEvents: "none",
                }} />

                <img src={taxiBusiness} alt="Inno Taxi Business" style={{
                  position: "absolute", bottom: "12%", left: "50%",
                  transform: "translateX(-50%)", width: "90%", height: "auto", zIndex: 2,
                  filter: `drop-shadow(0 20px 40px ${C.marine}80) drop-shadow(0 0 60px ${C.cyan}30)`,
                  animation: "carFloat 4s ease-in-out infinite",
                }} />

                <div style={{
                  position: "absolute", bottom: "9%", left: "50%", transform: "translateX(-50%)",
                  width: "70%", height: "12px",
                  background: `radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)`,
                  filter: "blur(6px)", zIndex: 1, animation: "shadowPulse 4s ease-in-out infinite",
                }} />

                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(90deg, ${C.marine}, ${C.cyan}, ${C.sky})`, zIndex: 5,
                }} />

                <div style={{ position: "absolute", top: "16px", left: "20px", display: "flex", alignItems: "center", gap: "6px", zIndex: 5 }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.sky, boxShadow: `0 0 8px ${C.sky}`, animation: "pulse 2s ease-in-out infinite", display: "inline-block" }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: "700", color: C.sky, textTransform: "uppercase", letterSpacing: "1.5px" }}>Inno Business Fleet</span>
                </div>

                {[
                  { top: "20%", left: "10%", size: 3, delay: "0s" },
                  { top: "35%", left: "80%", size: 2, delay: "0.5s" },
                  { top: "60%", left: "15%", size: 2, delay: "1s" },
                  { top: "15%", left: "60%", size: 3, delay: "1.5s" },
                  { top: "50%", left: "88%", size: 2, delay: "0.8s" },
                ].map((p, i) => (
                  <div key={i} style={{
                    position: "absolute", top: p.top, left: p.left,
                    width: `${p.size}px`, height: `${p.size}px`,
                    borderRadius: "50%", background: C.sky, opacity: 0.6,
                    animation: `particleFade 2.5s ease-in-out infinite`, animationDelay: p.delay, zIndex: 3,
                  }} />
                ))}
              </div>
            </div>

            <div className="bh-card bh-card-main">
              <div className="bh-card-label">Optimisation Fleet</div>
              <div className="bh-card-value">-{counter}% <span className="bh-card-sub">de frais</span></div>
              <div className="bh-card-pill">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                vs moyenne marché
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessHero;