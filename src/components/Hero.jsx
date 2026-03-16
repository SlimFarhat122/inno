import React from 'react';
import { ArrowRight } from 'lucide-react';

const INNO = {
  bleuFonce: "#003da6",
  bleuClair: "#0084cc",
  vert:      "#49ce54",
  noir:      "#0a0e1a",
  blanc:     "#ffffff",
  grisTexte: "#5a6a85",
  grisFond:  "#f7f9fc",
};

const stats = [
  { value: '5K+',   label: 'Utilisateurs actifs' },
  { value: '4.9/5', label: 'Note moyenne' },
  { value: '24/7',  label: 'Support client' },
];

const gridPath = "M -100,240 L 320,240 L 320,80 L 720,80 L 720,560 L 1120,560 L 1120,320 L 1800,320";

const Hero = () => (
  <section style={{
    position: "relative",
    padding: "100px 4% 80px",   /* FIX: was 130px 7% 100px */
    background: INNO.blanc,
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Open Sans', sans-serif",
  }}>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&family=Cairo:wght@400;600;700&display=swap');

      .h-grid {
        position: absolute; inset: 0; pointer-events: none; z-index: 0;
        background-image:
          linear-gradient(rgba(0,61,166,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,61,166,0.035) 1px, transparent 1px);
        background-size: 52px 52px;
      }
      .h-leak {
        position: absolute; top: -20%; right: -10%;
        width: 700px; height: 700px; border-radius: 50%;
        background: radial-gradient(circle, rgba(0,132,204,0.07) 0%, transparent 65%);
        pointer-events: none; z-index: 0;
      }
      .h-leak-2 {
        position: absolute; bottom: -20%; left: -5%;
        width: 500px; height: 500px; border-radius: 50%;
        background: radial-gradient(circle, rgba(73,206,84,0.05) 0%, transparent 65%);
        pointer-events: none; z-index: 0;
      }

      @keyframes drawPath {
        from { stroke-dashoffset: 2800; }
        to   { stroke-dashoffset: 0; }
      }
      @keyframes carMove {
        0%   { offset-distance: 0%;   opacity: 0; }
        5%   { opacity: 1; }
        95%  { opacity: 1; }
        100% { offset-distance: 100%; opacity: 0; }
      }
      .traj-path {
        stroke-dasharray: 2800; stroke-dashoffset: 2800;
        animation: drawPath 30s linear infinite;
      }
      .traj-car {
        position: absolute;
        offset-path: path("${gridPath}");
        offset-rotate: auto;
        animation: carMove 30s linear infinite;
        filter: drop-shadow(0 0 6px rgba(73,206,84,0.5));
      }
      .traj-car svg { transform: rotate(90deg); }

      @keyframes pulseDot {
        0%  { box-shadow: 0 0 0 0 rgba(73,206,84,0.4); }
        70% { box-shadow: 0 0 0 8px rgba(73,206,84,0); }
        100%{ box-shadow: 0 0 0 0 rgba(73,206,84,0); }
      }
      .badge-dot { animation: pulseDot 2.4s infinite; }

      .btn-p {
        display: inline-flex; align-items: center; gap: 10px;
        padding: 15px 32px; border-radius: 12px;
        background: #003da6; color: #fff;
        font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 14.5px;
        text-decoration: none; border: none; cursor: pointer;
        transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
        box-shadow: 0 10px 28px -6px rgba(0,61,166,0.38);
        letter-spacing: 0.1px;
      }
      .btn-p:hover {
        background: #0084cc;
        transform: translateY(-2px);
        box-shadow: 0 16px 36px -8px rgba(0,132,204,0.42);
      }
      .btn-s {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 15px 30px; border-radius: 12px;
        background: transparent; color: #003da6;
        font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14.5px;
        text-decoration: none;
        border: 1.5px solid rgba(0,61,166,0.18);
        transition: all 0.28s ease; cursor: pointer;
      }
      .btn-s:hover {
        border-color: #0084cc; color: #0084cc;
        background: rgba(0,132,204,0.04);
        transform: translateY(-2px);
      }

      .s-val {
        font-family: 'Montserrat', sans-serif;
        font-size: 26px; font-weight: 800;
        color: #003da6; margin: 0 0 2px; letter-spacing: -0.5px;
      }
      .s-lbl {
        font-family: 'Open Sans', sans-serif;
        font-size: 12.5px; font-weight: 400; color: #94a3b8; margin: 0;
      }

      .scene-wrap {
        position: relative;
        width: 100%; height: 500px;
        display: flex; align-items: center; justify-content: center;
      }

      @keyframes spinRing {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes spinRingRev {
        from { transform: rotate(0deg); }
        to   { transform: rotate(-360deg); }
      }
      .ring-outer {
        position: absolute;
        width: 420px; height: 420px; border-radius: 50%;
        border: 1px dashed rgba(0,61,166,0.1);
        animation: spinRing 40s linear infinite;
      }
      .ring-mid {
        position: absolute;
        width: 320px; height: 320px; border-radius: 50%;
        border: 1px solid rgba(0,132,204,0.08);
        animation: spinRingRev 28s linear infinite;
      }
      .ring-inner {
        position: absolute;
        width: 220px; height: 220px; border-radius: 50%;
        border: 1.5px solid rgba(73,206,84,0.12);
        animation: spinRing 18s linear infinite;
      }
      .orb-dot {
        position: absolute;
        width: 7px; height: 7px; border-radius: 50%;
        top: -3.5px; left: calc(50% - 3.5px);
      }
      .center-glow {
        position: absolute;
        width: 280px; height: 280px; border-radius: 50%;
        background: radial-gradient(circle, rgba(0,132,204,0.08) 0%, transparent 70%);
        pointer-events: none;
      }

      @keyframes carFloat {
        0%,100% { transform: translateY(0px) rotate(-2deg); }
        50%      { transform: translateY(-14px) rotate(2deg); }
      }
      .car-svg-wrap {
        position: absolute;
        animation: carFloat 5s ease-in-out infinite;
        z-index: 10;
        filter: drop-shadow(0 24px 40px rgba(0,61,166,0.18))
                drop-shadow(0 8px 16px rgba(0,132,204,0.12));
      }

      @keyframes shadowPulse {
        0%,100% { transform: scaleX(1);   opacity: 0.18; }
        50%      { transform: scaleX(0.82); opacity: 0.1; }
      }
      .car-shadow {
        position: absolute; bottom: 80px; left: 50%;
        transform: translateX(-50%);
        width: 180px; height: 18px; border-radius: 50%;
        background: radial-gradient(ellipse, rgba(0,61,166,0.25) 0%, transparent 70%);
        animation: shadowPulse 5s ease-in-out infinite;
      }

      @keyframes fc1 {
        0%,100%{ transform: translate(0,0); }
        50%    { transform: translate(-4px,-10px); }
      }
      @keyframes fc2 {
        0%,100%{ transform: translate(0,0); }
        50%    { transform: translate(6px,-8px); }
      }
      @keyframes fc3 {
        0%,100%{ transform: translate(0,0); }
        50%    { transform: translate(-5px,8px); }
      }
      .fc1 { animation: fc1 6s ease-in-out infinite; }
      .fc2 { animation: fc2 7.5s ease-in-out infinite 0.8s; }
      .fc3 { animation: fc3 5.5s ease-in-out infinite 1.4s; }

      .float-chip {
        position: absolute;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(14px);
        border: 1px solid rgba(0,61,166,0.07);
        border-radius: 16px;
        padding: 12px 16px;
        display: flex; align-items: center; gap: 10px;
        box-shadow: 0 12px 32px -8px rgba(0,61,166,0.1);
        white-space: nowrap; z-index: 20;
      }

      @keyframes streak {
        0%   { opacity: 0; transform: translateX(-20px); }
        30%  { opacity: 1; }
        100% { opacity: 0; transform: translateX(60px); }
      }
      .streak-1 { animation: streak 2.2s ease-in-out infinite; }
      .streak-2 { animation: streak 2.2s ease-in-out infinite 0.4s; }
      .streak-3 { animation: streak 2.2s ease-in-out infinite 0.8s; }

      @keyframes triFloat {
        0%,100%{ opacity:0.06; transform: rotate(0deg) scale(1); }
        50%    { opacity:0.11; transform: rotate(12deg) scale(1.06); }
      }
      .geo-tri {
        position: absolute; pointer-events: none;
        animation: triFloat 8s ease-in-out infinite;
      }

      @media (max-width: 1000px) {
        .hero-inner { flex-direction: column !important; gap: 56px !important; text-align: center; }
        .hero-left  { align-items: center !important; }
        .hero-btns  { justify-content: center !important; }
        .hero-stats { justify-content: center !important; flex-wrap: wrap; gap: 24px !important; }
        .sdiv       { display: none; }
        .scene-wrap { height: 360px !important; }
        .ring-outer { width: 320px !important; height: 320px !important; }
        .ring-mid   { width: 240px !important; height: 240px !important; }
      }
    `}</style>

    <div className="h-grid" />
    <div className="h-leak" />
    <div className="h-leak-2" />

    <div style={{ position:"absolute", inset:0, zIndex:1, pointerEvents:"none" }}>
      <svg width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <path className="traj-path" d={gridPath}
          stroke={INNO.vert} strokeWidth="1.2" fill="none" strokeOpacity="0.14" />
      </svg>
      <div className="traj-car">
        <svg width="14" height="14" viewBox="0 0 24 24" fill={INNO.vert}>
          <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l4 4v8a2 2 0 0 1-2 2h-2"/>
          <circle cx="7" cy="17" r="2"/><circle cx="15" cy="17" r="2"/>
        </svg>
      </div>
    </div>

    <div className="hero-inner" style={{
      display:"flex", flexWrap:"wrap",
      alignItems:"center", justifyContent:"space-between",
      gap:"48px", width:"100%", maxWidth:"1400px",  /* FIX: maxWidth 1320 → 1400 */
      position:"relative", zIndex:2,
    }}>

      <div className="hero-left" style={{
        flex:"1 1 460px", minWidth:"300px",
        display:"flex", flexDirection:"column", alignItems:"flex-start",
      }}>

        <div style={{
          display:"inline-flex", alignItems:"center", gap:"8px",
          padding:"6px 14px", borderRadius:"100px",
          background: INNO.grisFond,
          border:`1px solid rgba(0,61,166,0.1)`,
          fontFamily:"'Open Sans', sans-serif", fontSize:"12px", fontWeight:"600",
          color: INNO.bleuFonce, marginBottom:"28px",
          letterSpacing:"0.1px",
        }}>
          <span className="badge-dot" style={{
            width:"6px", height:"6px", borderRadius:"50%",
            background: INNO.vert, flexShrink:0, display:"inline-block",
          }} />
          Mobilité premium · Tunisie
        </div>

        <h1 style={{
          fontFamily:"'Montserrat', sans-serif",
          fontSize:"clamp(40px, 5.2vw, 68px)",
          fontWeight:"900", lineHeight:"1.04",
          letterSpacing:"-2px", color: INNO.noir, margin:"0 0 6px",
        }}>
          Votre trajet,
        </h1>
        <h1 style={{
          fontFamily:"'Montserrat', sans-serif",
          fontSize:"clamp(40px, 5.2vw, 68px)",
          fontWeight:"900", lineHeight:"1.04", letterSpacing:"-2px",
          margin:"0 0 6px",
          background:`linear-gradient(100deg, ${INNO.bleuFonce} 0%, ${INNO.bleuClair} 100%)`,
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
        }}>
          à la minute.
        </h1>
        <h1 style={{
          fontFamily:"'Montserrat', sans-serif",
          fontSize:"clamp(40px, 5.2vw, 68px)",
          fontWeight:"900", lineHeight:"1.04",
          letterSpacing:"-2px", color: INNO.vert, margin:"0 0 32px",
        }}>
          Sans compromis.
        </h1>

        <div style={{
          width:"48px", height:"3px", borderRadius:"2px",
          background:`linear-gradient(90deg, ${INNO.bleuFonce}, ${INNO.vert})`,
          marginBottom:"28px",
        }} />

        <p style={{
          fontFamily:"'Open Sans', sans-serif",
          fontSize:"16.5px", fontWeight:"400",
          color: INNO.grisTexte, lineHeight:"1.78",
          maxWidth:"460px", margin:"0 0 44px",
        }}>
          Réservez un chauffeur certifié en quelques secondes.
          Ponctuel, élégant, disponible 24h/24 — partout en Tunisie.
        </p>

        <div className="hero-btns" style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"52px" }}>
          <a href="#contact" className="btn-p">
            Réserver un trajet <ArrowRight size={16} />
          </a>
          <a href="#about" className="btn-s">
            En savoir plus
          </a>
        </div>

        <div className="hero-stats" style={{
          display:"flex", gap:"32px",
          paddingTop:"24px",
          borderTop:`1px solid rgba(0,61,166,0.08)`,
        }}>
          {stats.map((s,i) => (
            <React.Fragment key={s.label}>
              <div>
                <p className="s-val">{s.value}</p>
                <p className="s-lbl">{s.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="sdiv" style={{ width:"1px", background:"rgba(0,61,166,0.08)", alignSelf:"stretch" }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ flex:"0 1 520px", minWidth:"300px", display:"flex", justifyContent:"center" }}>
        <div className="scene-wrap">

          <svg className="geo-tri" style={{ position:"absolute", top:"5%", right:"8%", width:"120px" }}
            viewBox="0 0 100 100">
            <polygon points="50,5 95,90 5,90"
              fill="none" stroke={INNO.bleuFonce} strokeWidth="1.5" opacity="0.5"/>
          </svg>
          <svg className="geo-tri" style={{ position:"absolute", bottom:"8%", left:"6%", width:"80px", animationDelay:"3s" }}
            viewBox="0 0 100 100">
            <polygon points="50,5 95,90 5,90"
              fill="none" stroke={INNO.vert} strokeWidth="2" opacity="0.6"/>
          </svg>
          <svg className="geo-tri" style={{ position:"absolute", top:"30%", left:"2%", width:"55px", animationDelay:"1.5s" }}
            viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80"
              fill="none" stroke={INNO.bleuClair} strokeWidth="2" opacity="0.5"
              transform="rotate(20,50,50)"/>
          </svg>
          <svg style={{ position:"absolute", top:"10%", left:"15%", width:"40px", opacity:0.08 }}
            viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke={INNO.bleuFonce} strokeWidth="3"/>
          </svg>

          <div className="ring-outer" style={{ border:`1px dashed rgba(0,61,166,0.09)` }}>
            <div className="orb-dot" style={{ background: INNO.bleuClair, opacity:0.5 }} />
          </div>
          <div className="ring-mid">
            <div className="orb-dot" style={{ background: INNO.vert, opacity:0.7 }} />
          </div>
          <div className="ring-inner">
            <div className="orb-dot" style={{ background: INNO.bleuFonce, opacity:0.6 }} />
          </div>

          <div className="center-glow" />

          <div style={{ position:"absolute", left:"18%", top:"52%", pointerEvents:"none" }}>
            {[0,8,16].map((offset,i) => (
              <div key={i} className={`streak-${i+1}`} style={{
                width:"40px", height:"1.5px", borderRadius:"2px",
                background:`linear-gradient(90deg, transparent, ${INNO.bleuClair}55, transparent)`,
                marginBottom: offset ? "6px":"0", position:"relative",
              }} />
            ))}
          </div>

          <div className="car-svg-wrap">
            <svg width="300" height="150" viewBox="0 0 300 150" fill="none">
              <rect x="20" y="70" width="260" height="60" rx="12" fill={INNO.bleuFonce}/>
              <rect x="20" y="70" width="260" height="8" rx="12" fill={`${INNO.bleuClair}`} opacity="0.4"/>
              <path d="M 75,70 Q 82,32 108,28 L 200,28 Q 226,28 232,70 Z" fill={INNO.bleuClair}/>
              <path d="M 82,70 Q 88,36 110,32 L 198,32 Q 220,32 226,70 Z" fill={INNO.bleuFonce} opacity="0.3"/>
              <path d="M 90,68 Q 96,42 114,38 L 186,38 Q 200,38 208,68 Z" fill={INNO.bleuClair} opacity="0.55"/>
              <path d="M 100,66 Q 104,50 116,44 L 140,44 L 132,66 Z" fill={INNO.blanc} opacity="0.18"/>
              <rect x="88" y="52" width="32" height="18" rx="4" fill={INNO.bleuClair} opacity="0.4"/>
              <rect x="180" y="52" width="32" height="18" rx="4" fill={INNO.bleuClair} opacity="0.4"/>
              <rect x="20" y="100" width="260" height="3" rx="2" fill={INNO.bleuClair} opacity="0.5"/>
              <line x1="148" y1="70" x2="148" y2="128" stroke={INNO.bleuClair} strokeWidth="1" opacity="0.25"/>
              <line x1="85"  y1="95" x2="148" y2="95"  stroke={INNO.bleuClair} strokeWidth="1" opacity="0.2"/>
              <line x1="148" y1="95" x2="220" y2="95"  stroke={INNO.bleuClair} strokeWidth="1" opacity="0.2"/>
              <rect x="108" y="89" width="16" height="4" rx="2" fill={INNO.bleuClair} opacity="0.5"/>
              <rect x="168" y="89" width="16" height="4" rx="2" fill={INNO.bleuClair} opacity="0.5"/>
              <rect x="20" y="118" width="260" height="12" rx="6" fill={INNO.bleuFonce} opacity="0.8"/>
              <rect x="24" y="120" width="252" height="8" rx="4" fill={INNO.bleuClair} opacity="0.15"/>
              <rect x="24" y="74" width="28" height="10" rx="3" fill={INNO.blanc} opacity="0.9"/>
              <rect x="25" y="75" width="26" height="8"  rx="2" fill={INNO.bleuClair} opacity="0.6"/>
              <rect x="248" y="74" width="28" height="10" rx="3" fill={INNO.blanc} opacity="0.7"/>
              <rect x="249" y="75" width="26" height="8"  rx="2" fill="#e53e3e" opacity="0.7"/>
              <rect x="26" y="86" width="24" height="14" rx="3" fill={INNO.bleuFonce} opacity="0.5"/>
              {[0,4,8].map(y => (
                <line key={y} x1="27" y1={88+y} x2="49" y2={88+y}
                  stroke={INNO.bleuClair} strokeWidth="0.8" opacity="0.5"/>
              ))}
              <rect x="128" y="74" width="44" height="16" rx="4" fill={INNO.blanc} opacity="0.12"/>
              <text x="150" y="85" textAnchor="middle"
                fontFamily="Montserrat" fontWeight="800" fontSize="8"
                fill={INNO.blanc} opacity="0.8">INNO</text>
              <circle cx="72"  cy="130" r="22" fill={INNO.noir}/>
              <circle cx="72"  cy="130" r="16" fill="#1a2332"/>
              <circle cx="72"  cy="130" r="9"  fill={INNO.bleuFonce}/>
              <circle cx="72"  cy="130" r="4"  fill={INNO.bleuClair}/>
              {[0,60,120,180,240,300].map(angle => (
                <line key={angle}
                  x1={72 + 9*Math.cos(angle*Math.PI/180)}
                  y1={130 + 9*Math.sin(angle*Math.PI/180)}
                  x2={72 + 15*Math.cos(angle*Math.PI/180)}
                  y2={130 + 15*Math.sin(angle*Math.PI/180)}
                  stroke={INNO.bleuClair} strokeWidth="2" opacity="0.6"/>
              ))}
              <circle cx="228" cy="130" r="22" fill={INNO.noir}/>
              <circle cx="228" cy="130" r="16" fill="#1a2332"/>
              <circle cx="228" cy="130" r="9"  fill={INNO.bleuFonce}/>
              <circle cx="228" cy="130" r="4"  fill={INNO.bleuClair}/>
              {[0,60,120,180,240,300].map(angle => (
                <line key={angle}
                  x1={228 + 9*Math.cos(angle*Math.PI/180)}
                  y1={130 + 9*Math.sin(angle*Math.PI/180)}
                  x2={228 + 15*Math.cos(angle*Math.PI/180)}
                  y2={130 + 15*Math.sin(angle*Math.PI/180)}
                  stroke={INNO.bleuClair} strokeWidth="2" opacity="0.6"/>
              ))}
              <path d="M 26,70 L 74,70 L 70,80 L 30,80 Z" fill={INNO.vert} opacity="0.35"/>
              <rect x="30" y="103" width="80" height="2.5" rx="1" fill={INNO.vert} opacity="0.4"/>
            </svg>
          </div>

          <div className="car-shadow" />

          <div className="float-chip fc1" style={{ top:"4%", right:"2%" }}>
            <div style={{ width:"32px", height:"32px", borderRadius:"9px", background:`${INNO.vert}18`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={INNO.vert} strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"13px", fontWeight:"800", color: INNO.vert, margin:0 }}>3 min</p>
              <p style={{ fontFamily:"'Open Sans', sans-serif", fontSize:"10.5px", color:"#94a3b8", margin:0 }}>Temps d'arrivée</p>
            </div>
          </div>

          <div className="float-chip fc2" style={{ bottom:"14%", left:"0%" }}>
            <div style={{ width:"32px", height:"32px", borderRadius:"9px", background:`${INNO.bleuFonce}12`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={INNO.bleuFonce} strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"12px", fontWeight:"700", color: INNO.bleuFonce, margin:0 }}>Chauffeur certifié</p>
              <p style={{ fontFamily:"'Open Sans', sans-serif", fontSize:"10.5px", color:"#94a3b8", margin:0 }}>Ahmed K. · ★ 4.98</p>
            </div>
          </div>

          <div className="float-chip fc3" style={{ top:"18%", left:"0%" }}>
            <div style={{ width:"32px", height:"32px", borderRadius:"9px", background:`${INNO.bleuClair}12`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={INNO.bleuClair} strokeWidth="2.2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"13px", fontWeight:"800", color: INNO.bleuClair, margin:0 }}>12.5 DT</p>
              <p style={{ fontFamily:"'Open Sans', sans-serif", fontSize:"10.5px", color:"#94a3b8", margin:0 }}>Prix estimé</p>
            </div>
          </div>

          <svg style={{ position:"absolute", bottom:"6%", right:"4%", opacity:0.12 }}
            width="64" height="64" viewBox="0 0 64 64">
            {[0,1,2,3].map(row =>
              [0,1,2,3].map(col => (
                <circle key={`${row}-${col}`}
                  cx={8 + col*18} cy={8 + row*18} r="2.5"
                  fill={INNO.bleuFonce}/>
              ))
            )}
          </svg>
          <svg style={{ position:"absolute", top:"6%", left:"8%", opacity:0.1 }}
            width="48" height="48" viewBox="0 0 48 48">
            {[0,1,2].map(row =>
              [0,1,2].map(col => (
                <circle key={`${row}-${col}`}
                  cx={8 + col*16} cy={8 + row*16} r="2"
                  fill={INNO.vert}/>
              ))
            )}
          </svg>

        </div>
      </div>
    </div>
  </section>
);

export default Hero;