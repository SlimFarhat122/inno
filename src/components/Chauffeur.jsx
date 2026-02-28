import React from "react";
// Importez vos images chauffeur ici
import imgDash from "../assets/11.png"; 
import imgProfile from "../assets/13.png"; 
import imgStats from "../assets/19.png"; 

const Chauffeur = () => {
  const steps = [
    { 
      id: "01",
      title: "Devenir Chauffeur", 
      desc: "Inscrivez-vous en ligne, soumettez vos documents et commencez à rouler rapidement.", 
      icon: "📩" 
    },
    { 
      id: "02",
      title: "Gérez vos revenus", 
      desc: "Suivez vos gains en temps réel et optimisez votre emploi du temps avec précision.", 
      icon: "📊" 
    },
    { 
      id: "03",
      title: "Assistance 24/7", 
      desc: "Profitez d'un support dédié et réactif pour vous accompagner à chaque course.", 
      icon: "🛡️" 
    }
  ];

  return (
    <section id="driver-version" className="inno-pro-edition">
      <style>{`
        /* --- CORE SECTION STYLING --- */
        .inno-pro-edition {
          font-family: 'Inter', 'SF Pro Display', sans-serif;
          background-color: #0B1120; /* Deep Midnight Slate */
          background-image: 
            radial-gradient(circle at 15% 0%, rgba(30, 58, 138, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 100%, rgba(98, 161, 91, 0.12) 0%, transparent 40%),
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 64px 64px, 64px 64px;
          color: #F8FAFC;
          padding: 140px 5% 120px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Ambient Center Glow for Depth */
        .inno-pro-edition::after {
          content: '';
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(circle, rgba(98, 161, 91, 0.08) 0%, rgba(30, 58, 138, 0.05) 40%, transparent 70%);
          filter: blur(40px);
          z-index: 0;
          pointer-events: none;
        }

        /* --- HEADER --- */
        .inno-pro-header {
          text-align: center;
          position: relative;
          z-index: 10;
          margin-bottom: 90px;
          max-width: 800px;
        }

        .inno-pro-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #A7F3D0; /* Very soft premium green */
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .inno-pro-chip::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #62A15B;
          border-radius: 50%;
          box-shadow: 0 0 10px #62A15B;
        }

        .inno-pro-headline {
          font-size: clamp(40px, 6vw, 64px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- 3D SHOWCASE STAGE --- */
        .inno-pro-stage {
          position: relative;
          width: 100%;
          max-width: 1000px;
          height: 550px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          perspective: 1500px;
        }

        .inno-pro-mockup {
          position: absolute;
          border-radius: 36px;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #000;
        }

        .pro-center {
          width: 280px;
          z-index: 3;
          border: 4px solid #1E3A8A; /* Brand Blue */
          box-shadow: 0 30px 60px rgba(30, 58, 138, 0.3);
        }

        .pro-left {
          width: 250px;
          z-index: 1;
          transform: translateX(-220px) rotate(-8deg) scale(0.85) translateZ(-50px);
          filter: brightness(0.5) blur(2px);
        }

        .pro-right {
          width: 250px;
          z-index: 2;
          transform: translateX(220px) rotate(8deg) scale(0.85) translateZ(-50px);
          filter: brightness(0.5) blur(2px);
        }

        /* Elegant Hover Interaction on the entire stage */
        .inno-pro-stage:hover .pro-center { transform: translateY(-15px) scale(1.02); }
        .inno-pro-stage:hover .pro-left { transform: translateX(-260px) rotate(-4deg) scale(0.9) translateZ(0); filter: brightness(0.9) blur(0); }
        .inno-pro-stage:hover .pro-right { transform: translateX(260px) rotate(4deg) scale(0.9) translateZ(0); filter: brightness(0.9) blur(0); }

        /* --- PREMIUM FEATURE CARDS --- */
        .inno-pro-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1100px;
          margin-top: 40px;
          z-index: 20;
        }

        .pro-card {
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.2);
          padding: 35px;
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pro-card:hover {
          transform: translateY(-8px);
          border-color: rgba(98, 161, 91, 0.4);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 40px rgba(98, 161, 91, 0.15);
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%);
        }

        .pro-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          font-size: 24px;
          margin-bottom: 20px;
          transition: 0.3s ease;
        }

        .pro-card:hover .pro-icon-wrapper {
          background: rgba(98, 161, 91, 0.15);
          border-color: rgba(98, 161, 91, 0.3);
          transform: scale(1.1);
        }

        .pro-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
        }

        .pro-card-desc {
          font-size: 15px;
          color: #94A3B8;
          line-height: 1.6;
          margin: 0;
        }

        /* --- FOOTER CTA --- */
        .inno-pro-footer {
          margin-top: 80px;
          display: flex;
          gap: 20px;
          z-index: 20;
        }

        .pro-store-btn {
          transition: transform 0.2s ease, filter 0.2s ease;
          display: block;
        }

        .pro-store-btn img {
          height: 48px;
          border-radius: 8px; /* Smooth edges */
        }

        .pro-store-btn:hover {
          transform: translateY(-3px) scale(1.02);
          filter: drop-shadow(0 10px 20px rgba(255, 255, 255, 0.1));
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 992px) {
          .inno-pro-grid { grid-template-columns: 1fr; gap: 16px; }
          .pro-left, .pro-right { display: none; }
          .inno-pro-stage { height: 450px; }
          .inno-pro-headline { font-size: 36px; }
        }
      `}</style>

      {/* HEADER */}
      <div className="inno-pro-header">
        <div className="inno-pro-chip">Espace Partenaire</div>
        <h2 className="inno-pro-headline">Prenez le volant de votre succès.</h2>
      </div>

      {/* 3D SHOWCASE */}
      <div className="inno-pro-stage">
        <img src={imgProfile} alt="Profil Chauffeur" className="inno-pro-mockup pro-left" />
        <img src={imgStats} alt="Statistiques" className="inno-pro-mockup pro-right" />
        <img src={imgDash} alt="Tableau de bord" className="inno-pro-mockup pro-center" />
      </div>

      {/* FEATURE CARDS */}
      <div className="inno-pro-grid">
        {steps.map((step, index) => (
          <div key={index} className="pro-card">
            <div className="pro-icon-wrapper">
              {step.icon}
            </div>
            <h3 className="pro-card-title">{step.title}</h3>
            <p className="pro-card-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA BUTTONS */}
      <div className="inno-pro-footer">
        <a href="https://play.google.com/store/apps/details?id=tn.innocustomer.android" target="_blank" rel="noopener noreferrer" className="pro-store-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Télécharger sur Google Play" />
        </a>
        <a href="#" className="pro-store-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Télécharger sur l'App Store" />
        </a>
      </div>
    </section>
  );
};

export default Chauffeur;