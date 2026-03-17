import React, { useState, useEffect, useRef } from "react";
import innoLogo from "../assets/logo.png";
import imgApp1  from "../assets/3.png";
import imgApp2  from "../assets/4.png";
import imgApp3  from "../assets/8.png";
import imgApp4  from "../assets/14.png";

const C = {
  dark:  "#003da6",
  mid:   "#0084cc",
  green: "#49ce54",
  noir:  "#060d1f",
  blanc: "#ffffff",
  gris:  "#f4f7fc",
  muted: "#6b7280",
};

const stepImages = [imgApp2, imgApp1, imgApp3, imgApp4];

/* ── FIX 4: Bigger, bolder icons (32px, strokeWidth 1.5, distinctive shapes) ── */
const steps = [
  {
    n: "01", accent: C.dark, detail: "App Store · Google Play",
    title: "Téléchargez l'app",
    body:  "Disponible sur iOS et Android. Inscription en 60 secondes, sans paperasse.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="3"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none"/>
        <path d="M9 10 L12 13 L15 10" strokeWidth="1.8"/>
        <line x1="12" y1="7" x2="12" y2="13"/>
      </svg>
    ),
  },
  {
    n: "02", accent: C.mid, detail: "Prix affiché avant confirmation",
    title: "Entrez votre destination",
    body:  "Tapez ou choisissez sur la carte. Prix fixe calculé instantanément — aucune surprise.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
        <path d="M7 20.5 Q12 23 17 20.5" strokeWidth="1.2" strokeDasharray="2 1.5"/>
      </svg>
    ),
  },
  {
    n: "03", accent: C.green, detail: "< 5 min en moyenne",
    title: "Votre chauffeur arrive",
    body:  "Suivi GPS en direct, plaque et photo du chauffeur. En moins de 5 minutes.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    n: "04", accent: C.dark, detail: "Note moyenne : 4.9 / 5",
    title: "Voyagez & évaluez",
    body:  "Trajet confortable, facture automatique. Notez votre chauffeur pour améliorer le service.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

const reviews = [
  { name:"Sarra B.",   city:"Tunis",  note:"5.0", text:"Arrivée en 3 minutes, chauffeur impeccable. Je n'utilise plus que Inno !" },
  { name:"Mehdi K.",   city:"Sfax",   note:"4.9", text:"Prix fixe affiché à l'avance. Enfin une appli honnête en Tunisie." },
  { name:"Yasmine A.", city:"Sousse", note:"5.0", text:"Service professionnel, voiture propre, trajet rapide. Parfait !" },
  { name:"Tarek R.",   city:"Tunis",  note:"4.8", text:"Chauffeur certifié, suivi GPS, tout est transparent. Excellent." },
];

const cities = ["Tunis","Sfax"];

const stats = [
  { value: "10 000+", label: "utilisateurs actifs" },
  { value: "3",     label: "villes couvertes" },
  { value: "4.9★",   label: "note moyenne" },
  { value: "< 5min", label: "temps d'arrivée" },
];

const UserExperience = () => {
  const [active,       setActive]  = useState(0);
  const [activeReview, setReview]  = useState(0);
  const [activeCity,   setCity]    = useState(0);
  const [inView,       setInView]  = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 3200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t1 = setInterval(() => setReview(r => (r + 1) % reviews.length), 3500);
    const t2 = setInterval(() => setCity(c  => (c + 1) % cities.length),   1800);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

        @keyframes ue-up {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ue-in  { animation: ue-up 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .ue-d1  { animation-delay:.05s; }
        .ue-d2  { animation-delay:.18s; }
        .ue-d3  { animation-delay:.30s; }
        .ue-d4  { animation-delay:.44s; }

        @keyframes ue-progress { from{width:0%} to{width:100%} }
        .ue-bar { animation: ue-progress 3.2s linear forwards; }

        @keyframes ue-photo-in {
          from { opacity:0; transform:scale(0.96) translateY(6px); }
          to   { opacity:1; transform:scale(1)    translateY(0); }
        }
        .ue-photo-visible { animation: ue-photo-in 0.55s cubic-bezier(0.22,1,0.36,1) both; }

        /* FIX 4: Richer step hover + icon pulse on active */
        .ue-step {
          cursor: pointer;
          transition: all 0.38s cubic-bezier(0.22,1,0.36,1);
        }
        .ue-step:hover { transform: translateX(6px) !important; }

        @keyframes ue-icon-pop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.18) rotate(-5deg); }
          70%  { transform: scale(0.96) rotate(3deg); }
          100% { transform: scale(1); }
        }
        .ue-icon-active { animation: ue-icon-pop 0.55s cubic-bezier(0.22,1,0.36,1); }

        @keyframes ue-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .ue-step-active-title {
          background: linear-gradient(90deg, #003da6 20%, #0084cc 50%, #003da6 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ue-shimmer 2.5s linear infinite;
        }

        @keyframes ue-float {
          0%,100%{ transform:translateY(0) rotate(-0.5deg); }
          50%    { transform:translateY(-12px) rotate(0.5deg); }
        }
        .ue-phone-float { animation: ue-float 6s ease-in-out infinite; }

        /* ── Download section ── */
        @keyframes phoneRise {
          from { opacity:0; transform:translateY(80px) scale(0.95); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .phone-rise { animation: phoneRise 1s cubic-bezier(0.22,1,0.36,1) 0.3s both; }

        @keyframes floatPhone {
          0%,100%{ transform:translateY(0px) rotate(-1deg); }
          50%    { transform:translateY(-16px) rotate(1deg); }
        }
        .float-phone { animation: floatPhone 7s ease-in-out infinite; }

        @keyframes reviewFade {
          0%   { opacity:0; transform:translateY(8px); }
          15%  { opacity:1; transform:translateY(0); }
          85%  { opacity:1; transform:translateY(0); }
          100% { opacity:0; transform:translateY(-8px); }
        }
        .review-fade { animation: reviewFade 3.5s ease both; }

        @keyframes cityFlip {
          0%   { opacity:0; transform:translateY(6px); }
          20%  { opacity:1; transform:translateY(0); }
          80%  { opacity:1; transform:translateY(0); }
          100% { opacity:0; transform:translateY(-6px); }
        }
        .city-flip { animation: cityFlip 1.8s ease both; }

        @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-20px) scale(1.1)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,30px) scale(0.9)} }
        .orb1 { animation: orb1 12s ease-in-out infinite; }
        .orb2 { animation: orb2  9s ease-in-out infinite; }

        @keyframes pulse-ring {
          0%   { transform:scale(1);   opacity:0.6; }
          100% { transform:scale(1.6); opacity:0; }
        }
        .pulse-ring   { animation: pulse-ring 2s ease-out infinite; }
        .pulse-ring-2 { animation: pulse-ring 2s ease-out 0.6s infinite; }

        @keyframes stat-in {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .stat-in { animation: stat-in 0.5s cubic-bezier(0.22,1,0.36,1) both; }

        .store-btn {
          display:inline-flex; align-items:center; gap:12px;
          padding:14px 24px; border-radius:14px;
          font-family:'Montserrat',sans-serif; font-size:14px; font-weight:700;
          text-decoration:none; cursor:pointer;
          transition:all 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .store-btn:hover { transform:translateY(-3px); }
        .store-primary  { background:#fff; color:#003da6; box-shadow:0 12px 32px rgba(0,0,0,0.15); }
        .store-primary:hover  { box-shadow:0 20px 48px rgba(0,0,0,0.22); }
        .store-secondary { background:rgba(255,255,255,0.12); color:#fff; border:1.5px solid rgba(255,255,255,0.2); }
        .store-secondary:hover { background:rgba(255,255,255,0.18); border-color:rgba(255,255,255,0.35); }

        @media (max-width:960px) {
          .ue-hiw-row   { flex-direction:column !important; }
          .ue-hiw-phone { display:none !important; }
          .app-layout   { flex-direction:column !important; }
          .app-phone-col{ display:none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          BLOC 1 — HOW IT WORKS
          FIX: padding 8% → 4% | steps wider | phone stays right | no empty center gap
      ══════════════════════════════════════════════════════ */}
      <section ref={ref} style={{
        background: C.blanc,
        /* FIX 1&2: reduced horizontal padding */
        padding: "80px 4% 80px",
        position: "relative", overflow: "hidden",
        fontFamily: "'Open Sans', sans-serif",
      }}>
        <div style={{ position:"absolute", top:"-180px", right:"-180px", width:"560px", height:"560px", borderRadius:"50%", background:`radial-gradient(circle,${C.dark}06,transparent 65%)`, pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:"-120px", left:"-80px",  width:"380px", height:"380px", borderRadius:"50%", background:`radial-gradient(circle,${C.green}08,transparent 65%)`, pointerEvents:"none" }}/>

        {/* Header */}
        <div className={inView?"ue-in ue-d1":""} style={{ marginBottom:"48px", position:"relative", zIndex:1 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"6px 14px 6px 10px", background:`${C.mid}10`, border:`1px solid ${C.mid}22`, borderRadius:"100px", marginBottom:"18px" }}>
            <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:C.green, boxShadow:`0 0 8px ${C.green}` }}/>
            {/* FIX 1: larger eyebrow */}
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"700", color:C.dark, letterSpacing:"1.2px", textTransform:"uppercase" }}>Simple comme bonjour</span>
          </div>
          {/* FIX 1: title bigger */}
          <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"clamp(40px,5vw,64px)", fontWeight:"800", lineHeight:"1.06", letterSpacing:"-0.04em", color:C.noir, margin:0 }}>
            Réservez en{" "}
            <span style={{ background:`linear-gradient(110deg,${C.dark},${C.mid})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>4 étapes.</span>
          </h2>
        </div>

        {/* FIX ✗: Two-column layout — steps left (flex:1.1), phone right (fixed width). No empty middle. */}
        <div className="ue-hiw-row" style={{ display:"flex", gap:"40px", alignItems:"flex-start", position:"relative", zIndex:1 }}>

          {/* Steps column — takes all remaining space */}
          <div style={{ flex:"1 1 0", minWidth:0, position:"relative" }}>
            {/* Vertical connector line */}
            <div style={{ position:"absolute", left:"31px", top:"54px", bottom:"54px", width:"2px", background:`linear-gradient(180deg,${C.dark}28,${C.mid}28,${C.green}28)`, borderRadius:"2px" }}/>

            {steps.map((s, i) => (
              <div
                key={i}
                className="ue-step"
                onClick={() => setActive(i)}
                style={{
                  display:"flex", gap:"20px", alignItems:"flex-start",
                  padding:"22px 20px", borderRadius:"20px", marginBottom:"10px",
                  background: active===i ? `${s.accent}0a` : "transparent",
                  border:`1.5px solid ${active===i ? s.accent+"30" : "transparent"}`,
                  boxShadow: active===i ? `0 8px 32px -8px ${s.accent}22` : "none",
                }}
              >
                {/* FIX 4 & 5: Larger circle, 60px, icon bigger */}
                <div style={{
                  width:"60px", height:"60px", borderRadius:"50%", flexShrink:0,
                  background: active===i ? s.accent : `${s.accent}14`,
                  color: active===i ? C.blanc : s.accent,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"'Montserrat',sans-serif",
                  boxShadow: active===i ? `0 10px 28px ${s.accent}44` : "none",
                  border:`2.5px solid ${C.blanc}`,
                  outline:`2.5px solid ${active===i ? s.accent+"38" : "transparent"}`,
                  transition:"all 0.35s ease", position:"relative", zIndex:1,
                }}>
                  <span className={active===i ? "ue-icon-active" : ""}>{s.icon}</span>
                </div>

                <div style={{ flex:1, paddingTop:"4px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"8px" }}>
                    {/* Step number badge */}
                    <span style={{
                      fontFamily:"'Montserrat',sans-serif", fontSize:"11px", fontWeight:"800",
                      color: active===i ? s.accent : C.muted,
                      letterSpacing:"0.5px",
                      transition:"color 0.3s",
                    }}>{s.n}</span>
                    {/* FIX 4: bigger title, shimmer on active */}
                    <h3 className={active===i ? "ue-step-active-title" : ""} style={{
                      fontFamily:"'Montserrat',sans-serif",
                      fontSize:"18px",      /* was 16px */
                      fontWeight:"700",
                      color: active===i ? "unset" : C.noir,
                      margin:0, letterSpacing:"-0.02em",
                    }}>{s.title}</h3>
                  </div>
                  {/* FIX 4: bigger body text */}
                  <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"15px",  /* was 13.5px */ color:C.muted, lineHeight:"1.65", margin:"0 0 6px" }}>{s.body}</p>
                  {active===i && (
                    <span style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontFamily:"'Montserrat',sans-serif", fontSize:"11px", fontWeight:"700", color:s.accent, letterSpacing:"0.5px", textTransform:"uppercase" }}>
                      <span style={{ display:"inline-block", width:"16px", height:"2px", background:s.accent, borderRadius:"2px" }}/>
                      {s.detail}
                    </span>
                  )}
                  {active===i && (
                    <div style={{ height:"2px", background:`${s.accent}18`, borderRadius:"2px", marginTop:"10px", overflow:"hidden" }}>
                      <div key={`bar-${i}`} className="ue-bar" style={{ height:"100%", background:s.accent, borderRadius:"2px" }}/>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Phone column — FIX 5: slightly larger, flush right */}
          <div className="ue-hiw-phone" style={{ width:"310px", flexShrink:0, position:"sticky", top:"120px" }}>
            <div className="ue-phone-float" style={{ position:"relative" }}>
              <div style={{ position:"absolute", width:"290px", height:"560px", borderRadius:"54px", background:`radial-gradient(ellipse at 50% 55%, ${steps[active].accent}22, transparent 65%)`, filter:"blur(42px)", zIndex:0, top:0, left:"10px", pointerEvents:"none", transition:"background 0.5s ease" }}/>
              {/* FIX 5: phone shell bigger: 298×590 */}
              <div style={{ width:"298px", height:"590px", background:C.noir, borderRadius:"48px", padding:"10px", boxShadow:`0 40px 80px -20px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.07)`, position:"relative", zIndex:1 }}>
                <div style={{ position:"absolute", top:"13px", left:"50%", transform:"translateX(-50%)", width:"82px", height:"24px", background:"#111", borderRadius:"12px", zIndex:5 }}/>
                <div style={{ width:"100%", height:"100%", borderRadius:"40px", overflow:"hidden", position:"relative", background:C.noir }}>
                  {stepImages.map((img, i) => (
                    <img key={i} src={img} alt={`écran étape ${i+1}`} className={active===i ? "ue-photo-visible" : ""} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"top center", opacity:active===i?1:0, transition:active===i?"none":"opacity 0.12s ease", borderRadius:"40px", display:"block" }}/>
                  ))}
                  {/* Dots */}
                  <div style={{ position:"absolute", bottom:"18px", left:"50%", transform:"translateX(-50%)", display:"flex", gap:"5px", zIndex:10 }}>
                    {steps.map((_,i) => (
                      <div key={i} onClick={() => setActive(i)} style={{ width:active===i?"22px":"6px", height:"6px", borderRadius:"3px", background:active===i?steps[i].accent:"rgba(255,255,255,0.45)", cursor:"pointer", transition:"all 0.35s ease", boxShadow:active===i?`0 2px 8px ${steps[i].accent}99`:"none" }}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FIX 3: subtitle text placed BELOW the phone */}
            <p style={{
              fontFamily:"'Open Sans',sans-serif",
              fontSize:"14px",
              color:C.muted,
              lineHeight:"1.65",
              textAlign:"center",
              marginTop:"20px",
              padding:"0 10px",
            }}>
              Moins de 20 secondes de votre téléphone au chauffeur.{" "}
              <strong style={{ color:C.noir, fontWeight:"600" }}>Pas de compte bancaire requis.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOC 2 — APP DOWNLOAD
      ══════════════════════════════════════════════════════ */}
      <section style={{
        fontFamily:"'Open Sans',sans-serif",
        background:`linear-gradient(145deg, #001a5c 0%, ${C.dark} 40%, #001f6e 70%, #001544 100%)`,
        position:"relative", overflow:"hidden",
        /* FIX 2: reduced padding */
        padding:"90px 4%",
      }}>
        {/* BG orbs */}
        <div className="orb1" style={{ position:"absolute", top:"-100px", right:"-80px", width:"500px", height:"500px", borderRadius:"50%", background:`radial-gradient(circle,${C.mid}25,transparent 65%)`, filter:"blur(60px)", pointerEvents:"none" }}/>
        <div className="orb2" style={{ position:"absolute", bottom:"-100px", left:"-80px",  width:"400px", height:"400px", borderRadius:"50%", background:`radial-gradient(circle,${C.green}18,transparent 65%)`, filter:"blur(50px)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:`radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize:"32px 32px", maskImage:"linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, transparent)" }}/>

        <div className="app-layout" style={{ display:"flex", gap:"60px", alignItems:"center", position:"relative", zIndex:1 }}>

          {/* LEFT — Copy */}
          <div style={{ flex:"1" }}>

            <div className={inView?"ue-in ue-d1":""} style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"6px 14px 6px 10px", background:"rgba(73,206,84,0.15)", border:"1px solid rgba(73,206,84,0.3)", borderRadius:"100px", marginBottom:"24px" }}>
              <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:C.green, boxShadow:`0 0 8px ${C.green}` }}/>
              {/* FIX 1: eyebrow larger */}
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"700", color:C.green, letterSpacing:"1.2px", textTransform:"uppercase" }}>Disponible maintenant</span>
            </div>

            {/* FIX 1: bigger headline */}
            <h2 className={inView?"ue-in ue-d2":""} style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"clamp(44px,6vw,72px)", fontWeight:"800", lineHeight:"1.04", letterSpacing:"-0.04em", color:C.blanc, margin:"0 0 8px" }}>Téléchargez</h2>
            <h2 className={inView?"ue-in ue-d2":""} style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"clamp(44px,6vw,72px)", fontWeight:"800", lineHeight:"1.04", letterSpacing:"-0.04em", background:`linear-gradient(110deg,${C.green},#6eea72)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", margin:"0 0 28px" }}>l'app Inno.</h2>

            <div className={inView?"ue-in ue-d2":""} style={{ display:"inline-flex", alignItems:"center", gap:"10px", padding:"8px 16px", background:"rgba(255,255,255,0.08)", borderRadius:"100px", marginBottom:"28px" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke={C.green} strokeWidth="1.5"/><circle cx="6" cy="6" r="2" fill={C.green}/></svg>
              <span style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"13px", color:"rgba(255,255,255,0.6)" }}>Disponible à </span>
              <span key={activeCity} className="city-flip" style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"700", color:C.blanc, minWidth:"90px", display:"inline-block" }}>{cities[activeCity]}</span>
            </div>

            <p className={inView?"ue-in ue-d3":""} style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"17px", color:"rgba(255,255,255,0.60)", lineHeight:"1.78", maxWidth:"460px", margin:"0 0 44px" }}>
              Installez l'application en 60 secondes. Premier trajet garanti ou remboursé. Disponible dans 14 villes tunisiennes.
            </p>

            {/* Stats row */}
            <div className={inView?"ue-in ue-d3":""} style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px", marginBottom:"44px", maxWidth:"480px" }}>
              {stats.map((s, i) => (
                <div key={i} className={inView?`stat-in`:""} style={{ animationDelay:`${0.3+i*0.08}s`, padding:"14px 10px", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"14px", textAlign:"center" }}>
                  <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"16px", fontWeight:"800", color:C.blanc, marginBottom:"2px" }}>{s.value}</div>
                  <div style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"10px", color:"rgba(255,255,255,0.45)", lineHeight:"1.3" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className={inView?"ue-in ue-d3":""} style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"44px" }}>
              <a href="https://apps.apple.com/us/app/inno-app/id6448847710" target="_blank" rel="noopener noreferrer" className="store-btn store-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill={C.dark}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div><div style={{ fontSize:"10px", fontWeight:"600", opacity:0.7, letterSpacing:"0.5px" }}>TÉLÉCHARGER SUR</div><div style={{ fontSize:"15px" }}>App Store</div></div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=tn.innocustomer.android" target="_blank" rel="noopener noreferrer" className="store-btn store-secondary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill={C.green}><path d="m17.523 15.341-1.93-1.107c-.234-.13-.498-.066-.633.15l-.848 1.468a8.11 8.11 0 0 1-3.665.002L9.6 14.385c-.135-.217-.4-.281-.633-.15L7.038 15.34A8.102 8.102 0 0 1 5.5 11.5C5.5 7.358 8.358 4 12 4s6.5 3.358 6.5 7.5a8.1 8.1 0 0 1-1.477 3.841zM8.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                <div><div style={{ fontSize:"10px", fontWeight:"600", opacity:0.7, letterSpacing:"0.5px" }}>DISPONIBLE SUR</div><div style={{ fontSize:"15px" }}>Google Play</div></div>
              </a>
            </div>

            {/* Reviews */}
            <div className={inView?"ue-in ue-d4":""} style={{ maxWidth:"480px", padding:"20px 22px", background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"18px", minHeight:"110px" }}>
              {reviews.map((r, i) => i===activeReview && (
                <div key={i} className="review-fade">
                  <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"10px" }}>
                    <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:`linear-gradient(135deg,${C.dark},${C.mid})`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Montserrat',sans-serif", fontSize:"12px", fontWeight:"800", color:C.blanc }}>
                      {r.name.split(" ").map(w=>w[0]).join("")}
                    </div>
                    <div>
                      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"700", color:C.blanc, margin:0 }}>{r.name}</p>
                      <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"11px", color:"rgba(255,255,255,0.45)", margin:0 }}>{r.city}</p>
                    </div>
                    <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"3px" }}>
                      <span style={{ fontSize:"11px" }}>⭐</span>
                      <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"12px", fontWeight:"700", color:C.green }}>{r.note}</span>
                    </div>
                  </div>
                  <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"13px", color:"rgba(255,255,255,0.6)", lineHeight:"1.6", margin:0, fontStyle:"italic" }}>"{r.text}"</p>
                </div>
              ))}
              <div style={{ display:"flex", gap:"5px", marginTop:"12px" }}>
                {reviews.map((_,i) => (
                  <div key={i} onClick={()=>setReview(i)} style={{ width:activeReview===i?"20px":"6px", height:"6px", borderRadius:"3px", background:activeReview===i?C.green:"rgba(255,255,255,0.2)", cursor:"pointer", transition:"all 0.35s ease" }}/>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Phone (unchanged layout, bigger phone shell) */}
          <div className="app-phone-col phone-rise" style={{ flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", width:"290px" }}>
            <div style={{ position:"relative" }}>
              <div className="pulse-ring" style={{ position:"absolute", inset:"-30px", borderRadius:"60px", border:`1px solid ${C.green}30`, pointerEvents:"none" }}/>
              <div className="pulse-ring-2" style={{ position:"absolute", inset:"-50px", borderRadius:"70px", border:`1px solid ${C.mid}20`, pointerEvents:"none" }}/>
              <div style={{ position:"absolute", width:"270px", height:"520px", borderRadius:"54px", background:`radial-gradient(ellipse at 50% 60%,${C.green}22,${C.mid}10,transparent 70%)`, filter:"blur(32px)", top:"20px", left:"10px", pointerEvents:"none", zIndex:0 }}/>

              <div className="float-phone" style={{ width:"270px", height:"550px", background:"#0a0f24", borderRadius:"52px", padding:"10px", boxShadow:`0 60px 120px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)`, position:"relative", zIndex:1 }}>
                <div style={{ position:"absolute", top:"12px", left:"50%", transform:"translateX(-50%)", width:"72px", height:"22px", background:"#060d1c", borderRadius:"11px", zIndex:5 }}/>
                <div style={{ width:"100%", height:"100%", borderRadius:"44px", overflow:"hidden", background:`linear-gradient(155deg,#001a5c,${C.dark})`, position:"relative" }}>
                  <svg viewBox="0 0 240 320" style={{ width:"100%", height:"60%" }}>
                    <rect width="240" height="320" fill="#0f2244"/>
                    {[[0,80],[0,140],[0,200],[0,260]].map(([,y],i)=>(
                      <line key={i} x1="0" y1={y} x2="240" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="6"/>
                    ))}
                    {[[80,0],[140,0],[180,0]].map(([x],i)=>(
                      <line key={i} x1={x} y1="0" x2={x} y2="320" stroke="rgba(255,255,255,0.05)" strokeWidth="5"/>
                    ))}
                    {[[10,70,70,40],[90,55,50,55],[150,65,44,50],[10,130,65,35],[90,130,50,35],[10,190,60,45],[90,185,50,50],[155,185,44,50]].map(([x,y,w,h],i)=>(
                      <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="rgba(0,61,166,0.45)" stroke="rgba(0,132,204,0.12)" strokeWidth="0.5"/>
                    ))}
                    <path d="M 120 300 Q 118 240 100 200 Q 82 165 95 130 Q 104 110 120 90" stroke={C.green} strokeWidth="5" fill="none" strokeOpacity="0.15" strokeLinecap="round"/>
                    <path d="M 120 300 Q 118 240 100 200 Q 82 165 95 130 Q 104 110 120 90" stroke={C.green} strokeWidth="2.5" fill="none" strokeDasharray="6 4" strokeLinecap="round"/>
                    <circle cx="120" cy="300" r="8" fill={C.dark} stroke={C.blanc} strokeWidth="2.5"/>
                    <circle cx="120" cy="90" r="13" fill={C.green} opacity="0.15"/>
                    <circle cx="120" cy="90" r="8"  fill={C.green}/>
                    <circle cx="120" cy="90" r="3"  fill={C.blanc}/>
                    <g transform="translate(100,195)">
                      <rect x="-16" y="-9" width="32" height="18" rx="5" fill={C.dark}/>
                      <rect x="-11" y="-16" width="22" height="9" rx="3" fill={C.mid}/>
                      <rect x="-8"  y="-6"  width="16" height="7" rx="1.5" fill={`${C.green}cc`}/>
                      <circle cx="-9" cy="11" r="4" fill="#111" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                      <circle cx="9"  cy="11" r="4" fill="#111" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </g>
                  </svg>
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"rgba(255,255,255,0.97)", borderRadius:"22px 22px 44px 44px", padding:"16px 16px 20px" }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"12px" }}>
                      <div>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"800", color:C.noir, margin:0 }}>Votre chauffeur arrive</p>
                        <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"10.5px", color:C.muted, margin:"2px 0 0" }}>Mercedes Classe E · TN-0234</p>
                      </div>
                      <div style={{ background:C.green, borderRadius:"10px", padding:"6px 12px", boxShadow:`0 4px 12px ${C.green}44` }}>
                        <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"800", color:C.blanc }}>3 min</span>
                      </div>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:"8px", padding:"10px", borderRadius:"12px", background:C.gris }}>
                      <div style={{ width:"32px", height:"32px", borderRadius:"10px", background:`linear-gradient(135deg,${C.dark},${C.mid})`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"10px", fontWeight:"800", color:C.blanc }}>AK</span>
                      </div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"11px", fontWeight:"700", color:C.noir, margin:0 }}>Ahmed K.</p>
                        <p style={{ fontSize:"10px", color:C.muted, margin:0 }}>⭐ 4.98 · 1 240 courses</p>
                      </div>
                      <div style={{ width:"32px", height:"32px", borderRadius:"10px", background:`${C.dark}12`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <svg width="15" height="15" fill="none" stroke={C.dark} strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.81a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default UserExperience;