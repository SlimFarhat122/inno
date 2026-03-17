import React, { useState, useEffect, useRef } from "react";
import imgDash    from "../assets/11.png";
import imgProfile from "../assets/13.png";
import imgStats   from "../assets/7.png";

// ── PALETTE OFFICIELLE INNO ────────────────────────
const C = {
  dark:  "#003da6",
  mid:   "#0084cc",
  green: "#49ce54",
  noir:  "#060d1f",
  blanc: "#ffffff",
  gris:  "#f4f7fc",
  muted: "#6b7280",
  texte: "#1a2236",
};

const stepImages = [imgStats, imgDash, imgProfile];

/* ── FIX 3: New distinctive icons — 32px, strokeWidth 1.5 ── */
const steps = [
  {
    n: "01", accent: C.green, detail: "Vérification sous 24–48h",
    title: "Inscrivez-vous en ligne",
    body:  "Soumettez vos documents depuis l'app. CIN, permis, carte grise, assurance — tout en quelques photos.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    n: "02", accent: C.mid, detail: "Paiement hebdomadaire automatique",
    title: "Gérez vos courses",
    body:  "Tableau de bord en temps réel. Acceptez ou refusez les courses, suivez votre solde, restez maître de votre emploi du temps.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h10M7 12h6"/>
      </svg>
    ),
  },
  {
    n: "03", accent: C.dark, detail: "Support 24/7 en arabe et français",
    title: "Acceptez & encaissez",
    body:  "Chaque nouvelle course arrive en temps réel. Acceptez, naviguez, encaissez — en espèces ou via votre solde INNO.",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

const useCounter = (target, duration = 1600, start = false) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setV(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return v;
};

export default function ChauffeurExperience() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const earningsVal = useCounter(2500, 1800, inView);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&family=Cairo:wght@600;700&display=swap');

        @keyframes ch-up {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ch-in  { animation: ch-up 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .ch-d1  { animation-delay:.05s; }
        .ch-d2  { animation-delay:.18s; }
        .ch-d3  { animation-delay:.30s; }
        .ch-d4  { animation-delay:.44s; }

        @keyframes ch-progress { from{width:0%} to{width:100%} }
        .ch-bar { animation: ch-progress 3.2s linear forwards; }

        @keyframes ch-photo-in {
          from { opacity:0; transform:scale(0.96) translateY(6px); }
          to   { opacity:1; transform:scale(1)    translateY(0); }
        }
        .ch-photo-visible { animation: ch-photo-in 0.55s cubic-bezier(0.22,1,0.36,1) both; }

        @keyframes ch-float {
          0%,100%{ transform:translateY(0) rotate(-0.5deg); }
          50%    { transform:translateY(-12px) rotate(0.5deg); }
        }
        .ch-phone-float { animation: ch-float 6s ease-in-out infinite; }

        /* FIX 3: step hover slides right, icon pops on active */
        .ch-step {
          cursor: pointer;
          transition: all 0.38s cubic-bezier(0.22,1,0.36,1);
        }
        .ch-step:hover { transform: translateX(6px) !important; }

        @keyframes ch-icon-pop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.18) rotate(-5deg); }
          70%  { transform: scale(0.96) rotate(3deg); }
          100% { transform: scale(1); }
        }
        .ch-icon-active { animation: ch-icon-pop 0.55s cubic-bezier(0.22,1,0.36,1); }

        @keyframes ch-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .ch-step-active-title {
          background: linear-gradient(90deg, #49ce54 20%, #003da6 50%, #49ce54 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ch-shimmer 2.5s linear infinite;
        }

        /* CTA section */
        @keyframes ch-float-cta {
          0%,100%{ transform:translateY(0px) rotate(-1deg); }
          50%    { transform:translateY(-16px) rotate(1deg); }
        }
        .ch-float-cta { animation: ch-float-cta 7s ease-in-out infinite; }

        @keyframes ch-orb1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(25px,-18px) scale(1.08)} }
        @keyframes ch-orb2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-18px,22px) scale(0.92)} }
        .ch-orb1 { animation: ch-orb1 12s ease-in-out infinite; }
        .ch-orb2 { animation: ch-orb2  9s ease-in-out infinite; }

        @keyframes ch-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(73,206,84,0.4)} 50%{box-shadow:0 0 0 12px rgba(73,206,84,0)} }
        .ch-glow-pulse { animation: ch-pulse 2.5s ease infinite; }

        @keyframes pulse-ring {
          0%   { transform:scale(1); opacity:0.6; }
          100% { transform:scale(1.6); opacity:0; }
        }

        @keyframes reviewFade {
          0%   { opacity:0; transform:translateY(8px); }
          15%  { opacity:1; transform:translateY(0); }
          85%  { opacity:1; transform:translateY(0); }
          100% { opacity:0; transform:translateY(-8px); }
        }
        .review-fade { animation: reviewFade 3.5s ease both; }

        @media (max-width:960px) {
          .ch-hiw-row   { flex-direction:column !important; }
          .ch-hiw-phone { display:none !important; }
          .ch-cta-row   { flex-direction:column !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          BLOC 1 — HOW IT WORKS CHAUFFEUR
          FIX: padding 8% → 4% | steps wider | phone bigger | no empty gap
      ══════════════════════════════════════════════════════ */}
      <section ref={ref} style={{
        background: C.blanc,
        /* FIX 1&2: reduced horizontal padding */
        padding: "80px 4% 80px",
        position: "relative", overflow: "hidden",
        fontFamily: "'Open Sans', sans-serif",
        isolation: "isolate",
      }}>
        <div style={{ position:"absolute", top:"-180px", right:"-180px", width:"560px", height:"560px", borderRadius:"50%", background:`radial-gradient(circle,${C.dark}06,transparent 65%)`, pointerEvents:"none", zIndex:0 }}/>
        <div style={{ position:"absolute", bottom:"-120px", left:"-80px", width:"380px", height:"380px", borderRadius:"50%", background:`radial-gradient(circle,${C.green}08,transparent 65%)`, pointerEvents:"none", zIndex:0 }}/>

        <div style={{ position:"relative", zIndex:1 }}>

          {/* Header */}
          <div className={inView?"ch-in ch-d1":""} style={{ marginBottom:"48px" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"6px 14px 6px 10px", background:`${C.mid}10`, border:`1px solid ${C.mid}22`, borderRadius:"100px", marginBottom:"18px" }}>
              <div className="ch-glow-pulse" style={{ width:"7px", height:"7px", borderRadius:"50%", background:C.green }}/>
              {/* FIX 1: larger eyebrow */}
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"700", color:C.dark, letterSpacing:"1.2px", textTransform:"uppercase" }}>Espace Chauffeur</span>
            </div>

            {/* FIX 1: bigger headline */}
            <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"clamp(40px,5vw,64px)", fontWeight:"800", lineHeight:"1.06", letterSpacing:"-0.04em", color:C.noir, margin:0 }}>
              Prenez le volant de{" "}
              <span style={{ color:C.green }}>votre succès.</span>
            </h2>
          </div>

          {/* FIX ✗: two-column, no empty gap — steps flex:1, phone fixed width */}
          <div className="ch-hiw-row" style={{ display:"flex", gap:"40px", alignItems:"flex-start" }}>

            {/* Steps column */}
            <div style={{ flex:"1 1 0", minWidth:0, position:"relative" }}>
              {/* Timeline line */}
              <div style={{ position:"absolute", left:"31px", top:"54px", bottom:"54px", width:"2px", background:`linear-gradient(180deg,${C.green}28,${C.mid}28,${C.dark}28)`, borderRadius:"2px" }}/>

              {steps.map((s, i) => (
                <div key={i} className="ch-step" onClick={() => setActive(i)} style={{
                  display:"flex", gap:"20px", alignItems:"flex-start",
                  padding:"22px 20px", borderRadius:"20px", marginBottom:"10px",
                  background: active===i ? `${s.accent}0a` : "transparent",
                  border:`1.5px solid ${active===i ? s.accent+"30" : "transparent"}`,
                  boxShadow: active===i ? `0 8px 32px -8px ${s.accent}22` : "none",
                }}>
                  {/* FIX 3: bigger circle 60px, icon 32px */}
                  <div style={{
                    width:"60px", height:"60px", borderRadius:"50%", flexShrink:0,
                    background: active===i ? s.accent : `${s.accent}18`,
                    color: active===i ? C.blanc : s.accent,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow: active===i ? `0 10px 28px ${s.accent}50` : "none",
                    border:`2.5px solid ${C.blanc}`,
                    outline:`2.5px solid ${active===i ? s.accent+"40" : "transparent"}`,
                    transition:"all 0.35s ease",
                    position:"relative", zIndex:1,
                  }}>
                    <span className={active===i ? "ch-icon-active" : ""}>{s.icon}</span>
                  </div>

                  <div style={{ flex:1, paddingTop:"4px" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"8px" }}>
                      <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"11px", fontWeight:"800", color:active===i ? s.accent : C.muted, letterSpacing:"0.5px", transition:"color 0.3s" }}>{s.n}</span>
                      {/* FIX 3: bigger title + shimmer on active */}
                      <h3 className={active===i ? "ch-step-active-title" : ""} style={{
                        fontFamily:"'Montserrat',sans-serif",
                        fontSize:"18px",
                        fontWeight:"700",
                        color: active===i ? "unset" : C.noir,
                        margin:0, letterSpacing:"-0.02em",
                      }}>{s.title}</h3>
                    </div>
                    {/* FIX 3: bigger body text */}
                    <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"15px", color:C.muted, lineHeight:"1.65", margin:"0 0 6px" }}>{s.body}</p>
                    {active===i && (
                      <span style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontFamily:"'Montserrat',sans-serif", fontSize:"11px", fontWeight:"700", color:s.accent, letterSpacing:"0.5px", textTransform:"uppercase" }}>
                        <span style={{ display:"inline-block", width:"16px", height:"2px", background:s.accent, borderRadius:"2px" }}/>
                        {s.detail}
                      </span>
                    )}
                    {active===i && (
                      <div style={{ height:"2px", background:`${s.accent}18`, borderRadius:"2px", marginTop:"10px", overflow:"hidden" }}>
                        <div key={`bar-${i}`} className="ch-bar" style={{ height:"100%", background:s.accent, borderRadius:"2px" }}/>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FIX 4: Phone — bigger (310px wide), subtitle below */}
            <div className="ch-hiw-phone" style={{ width:"310px", flexShrink:0, position:"sticky", top:"120px" }}>
              <div className="ch-phone-float" style={{ position:"relative" }}>
                <div style={{ position:"absolute", width:"290px", height:"560px", borderRadius:"54px", background:`radial-gradient(ellipse at 50% 55%, ${steps[active].accent}25, transparent 65%)`, filter:"blur(42px)", zIndex:0, top:0, left:"10px", pointerEvents:"none", transition:"background 0.5s ease" }}/>

                {/* FIX 4: phone shell 298×590 */}
                <div style={{ width:"298px", height:"590px", background:C.noir, borderRadius:"48px", padding:"10px", boxShadow:`0 40px 80px -20px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.07)`, position:"relative", zIndex:1 }}>
                  <div style={{ position:"absolute", top:"13px", left:"50%", transform:"translateX(-50%)", width:"82px", height:"24px", background:"#111", borderRadius:"12px", zIndex:5 }}/>
                  <div style={{ width:"100%", height:"100%", borderRadius:"40px", overflow:"hidden", position:"relative", background:"#0a1020" }}>
                    {stepImages.map((img, i) => (
                      <img key={i} src={img} alt={`driver step ${i+1}`} className={active===i ? "ch-photo-visible" : ""} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"top center", opacity:active===i?1:0, transition:active===i?"none":"opacity 0.12s ease", borderRadius:"40px", display:"block" }}/>
                    ))}
                    <div style={{ position:"absolute", bottom:"18px", left:"50%", transform:"translateX(-50%)", display:"flex", gap:"5px", zIndex:10 }}>
                      {steps.map((_,i) => (
                        <div key={i} onClick={() => setActive(i)} style={{ width:active===i?"22px":"6px", height:"6px", borderRadius:"3px", background:active===i?steps[i].accent:"rgba(255,255,255,0.45)", cursor:"pointer", transition:"all 0.35s ease", boxShadow:active===i?`0 2px 8px ${steps[i].accent}99`:"none" }}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FIX 3 (✗ espace vide): subtitle placed UNDER the phone */}
              <p style={{
                fontFamily:"'Open Sans',sans-serif",
                fontSize:"14px",
                color:C.muted,
                lineHeight:"1.65",
                textAlign:"center",
                marginTop:"20px",
                padding:"0 10px",
              }}>
                Démarrage en moins de{" "}
                <strong style={{ color:C.noir, fontWeight:"600" }}>48 heures.</strong>
                {" "}Commission à seulement{" "}
                <strong style={{ color:C.green, fontWeight:"700" }}>15%</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BLOC 2 — DRIVER CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{
        fontFamily:"'Open Sans',sans-serif",
        background:`linear-gradient(145deg, #001a5c 0%, ${C.dark} 40%, #001f6e 70%, #001544 100%)`,
        position:"relative", overflow:"hidden",
        /* FIX 2: reduced padding */
        padding:"90px 4%",
      }}>
        <div className="ch-orb1" style={{ position:"absolute", top:"-100px", right:"-80px", width:"500px", height:"500px", borderRadius:"50%", background:`radial-gradient(circle,${C.mid}25,transparent 65%)`, filter:"blur(60px)", pointerEvents:"none" }}/>
        <div className="ch-orb2" style={{ position:"absolute", bottom:"-100px", left:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:`radial-gradient(circle,${C.green}18,transparent 65%)`, filter:"blur(50px)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:`radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize:"32px 32px", maskImage:"linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, transparent)" }}/>

        <div className="ch-cta-row" style={{ display:"flex", gap:"60px", alignItems:"center", position:"relative", zIndex:1 }}>

          {/* LEFT — Copy */}
          <div style={{ flex:"1" }}>

            <div className={inView?"ch-in ch-d1":""} style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"6px 14px 6px 10px", background:"rgba(73,206,84,0.15)", border:"1px solid rgba(73,206,84,0.3)", borderRadius:"100px", marginBottom:"24px" }}>
              <div className="ch-glow-pulse" style={{ width:"7px", height:"7px", borderRadius:"50%", background:C.green }}/>
              {/* FIX 1: larger eyebrow */}
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"700", color:C.green, letterSpacing:"1.2px", textTransform:"uppercase" }}>Rejoignez le réseau</span>
            </div>

            {/* FIX 1: bigger headlines */}
            <h2 className={inView?"ch-in ch-d2":""} style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"clamp(44px,6vw,72px)", fontWeight:"800", lineHeight:"1.04", letterSpacing:"-0.04em", color:C.blanc, margin:"0 0 8px" }}>Devenez chauffeur</h2>
            <h2 className={inView?"ch-in ch-d2":""} style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"clamp(44px,6vw,72px)", fontWeight:"800", lineHeight:"1.04", letterSpacing:"-0.04em", background:`linear-gradient(110deg,${C.green},#6eea72)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", margin:"0 0 28px" }}>INNO Driver.</h2>

            <p className={inView?"ch-in ch-d3":""} style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"17px", color:"rgba(255,255,255,0.60)", lineHeight:"1.78", maxWidth:"460px", margin:"0 0 44px" }}>
              Gérez vos courses à votre rythme. Commission à seulement <strong style={{ color:C.blanc }}>15%</strong> — paiement hebdomadaire automatique. Démarrage en moins de <strong style={{ color:C.blanc }}>48h</strong>.
            </p>

            {/* Stats grid */}
            <div className={inView?"ch-in ch-d3":""} style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px", marginBottom:"44px", maxWidth:"480px" }}>
              {[
                { value:"500+",  label:"chauffeurs actifs" },
                { value:"3",    label:"villes couvertes"  },
                { value:"15%",   label:"commission seult." },
                { value:"< 48h", label:"délai démarrage"  },
              ].map((s, i) => (
                <div key={i} style={{ animationDelay:`${0.3+i*0.08}s`, padding:"14px 10px", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"14px", textAlign:"center" }}>
                  <div style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"16px", fontWeight:"800", color:C.blanc, marginBottom:"2px" }}>{s.value}</div>
                  <div style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"10px", color:"rgba(255,255,255,0.45)", lineHeight:"1.3" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div className={inView?"ch-in ch-d3":""} style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"44px" }}>
              {/* App Store */}
              <a href="https://apps.apple.com/us/app/inno-app/id6448847710" target="_blank" rel="noopener noreferrer" style={{ background:C.blanc, color:C.dark, boxShadow:"0 12px 32px rgba(0,0,0,0.15)", borderRadius:"14px", padding:"14px 24px", display:"inline-flex", alignItems:"center", gap:"12px", fontFamily:"'Montserrat',sans-serif", fontWeight:"700", fontSize:"14px", textDecoration:"none", transition:"all 0.28s ease" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 20px 48px rgba(0,0,0,0.22)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.15)"; }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill={C.dark}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div><div style={{ fontSize:"10px", fontWeight:"600", opacity:0.7, letterSpacing:"0.5px" }}>TÉLÉCHARGER SUR</div><div style={{ fontSize:"15px" }}>App Store</div></div>
              </a>
              {/* Google Play */}
              <a href="https://play.google.com/store/apps/details?id=tn.innodriver.android" target="_blank" rel="noopener noreferrer" style={{ background:"rgba(255,255,255,0.12)", color:C.blanc, border:"1.5px solid rgba(255,255,255,0.2)", borderRadius:"14px", padding:"14px 24px", display:"inline-flex", alignItems:"center", gap:"12px", fontFamily:"'Montserrat',sans-serif", fontWeight:"700", fontSize:"14px", textDecoration:"none", transition:"all 0.28s ease" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.background="rgba(255,255,255,0.18)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.background="rgba(255,255,255,0.12)"; }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill={C.green}><path d="m17.523 15.341-1.93-1.107c-.234-.13-.498-.066-.633.15l-.848 1.468a8.11 8.11 0 0 1-3.665.002L9.6 14.385c-.135-.217-.4-.281-.633-.15L7.038 15.34A8.102 8.102 0 0 1 5.5 11.5C5.5 7.358 8.358 4 12 4s6.5 3.358 6.5 7.5a8.1 8.1 0 0 1-1.477 3.841zM8.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                <div><div style={{ fontSize:"10px", fontWeight:"600", opacity:0.7, letterSpacing:"0.5px" }}>DISPONIBLE SUR</div><div style={{ fontSize:"15px" }}>Google Play</div></div>
              </a>
            </div>

            {/* Driver testimonials */}
            <div className={inView?"ch-in ch-d4":""} style={{ maxWidth:"480px", padding:"20px 22px", background:"rgba(255,255,255,0.06)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"18px", minHeight:"110px" }}>
              {[
                { name:"Karim M.",   city:"Tunis",    rev:"5.0", text:"Commission à 15%, paiement chaque semaine. Je recommande à tous les chauffeurs." },
                { name:"Bilel S.",   city:"Sfax",     rev:"4.9", text:"Inscription facile, support réactif. J'ai commencé à rouler en 2 jours." },
                { name:"Nizar B.",   city:"Sousse",   rev:"5.0", text:"Interface claire, courses régulières. Mes revenus ont augmenté de 30%." },
                { name:"Fares H.",   city:"Monastir", rev:"4.8", text:"La meilleure appli chauffeur en Tunisie. Transparence totale sur les gains." },
              ].map((r, i) => i === (active % 4) && (
                <div key={i} className="review-fade">
                  <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"10px" }}>
                    <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:`linear-gradient(135deg,${C.green}88,${C.dark})`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Montserrat',sans-serif", fontSize:"12px", fontWeight:"800", color:C.blanc }}>
                      {r.name.split(" ").map(w=>w[0]).join("")}
                    </div>
                    <div>
                      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"700", color:C.blanc, margin:0 }}>{r.name}</p>
                      <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"11px", color:"rgba(255,255,255,0.45)", margin:0 }}>{r.city} · Chauffeur INNO</p>
                    </div>
                    <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"3px" }}>
                      <span style={{ fontSize:"11px" }}>⭐</span>
                      <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"12px", fontWeight:"700", color:C.green }}>{r.rev}</span>
                    </div>
                  </div>
                  <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"13px", color:"rgba(255,255,255,0.6)", lineHeight:"1.6", margin:0, fontStyle:"italic" }}>"{r.text}"</p>
                </div>
              ))}
              <div style={{ display:"flex", gap:"5px", marginTop:"12px" }}>
                {[0,1,2,3].map(i => (
                  <div key={i} style={{ width:(active%4)===i?"20px":"6px", height:"6px", borderRadius:"3px", background:(active%4)===i?C.green:"rgba(255,255,255,0.2)", transition:"all 0.35s ease" }}/>
                ))}
              </div>
            </div>

            {/* Arabic tagline */}
            <div className={inView?"ch-in ch-d4":""} style={{ marginTop:"28px", fontFamily:"'Cairo',sans-serif", fontSize:"18px", fontWeight:"700", color:`rgba(73,206,84,0.45)`, direction:"rtl" }}>
              ابدأ رحلتك مع INNO Driver — يهز الكل
            </div>
          </div>

          {/* RIGHT — Driver phone SVG */}
          <div className="ch-hiw-phone" style={{ flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", width:"290px" }}>
            <div style={{ position:"relative" }}>
              <div style={{ position:"absolute", inset:"-30px", borderRadius:"60px", border:`1px solid ${C.green}30`, pointerEvents:"none", animation:"pulse-ring 2s ease-out infinite" }}/>
              <div style={{ position:"absolute", inset:"-50px", borderRadius:"70px", border:`1px solid ${C.mid}20`, pointerEvents:"none", animation:"pulse-ring 2s ease-out 0.6s infinite" }}/>
              <div style={{ position:"absolute", width:"260px", height:"500px", borderRadius:"54px", background:`radial-gradient(ellipse at 50% 60%,${C.green}22,${C.mid}10,transparent 70%)`, filter:"blur(32px)", top:"20px", left:"10px", pointerEvents:"none", zIndex:0 }}/>

              <div className="ch-float-cta" style={{ width:"268px", height:"548px", background:"#0a0f24", borderRadius:"52px", padding:"10px", boxShadow:`0 60px 120px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)`, position:"relative", zIndex:1 }}>
                <div style={{ position:"absolute", top:"12px", left:"50%", transform:"translateX(-50%)", width:"72px", height:"22px", background:"#060d1c", borderRadius:"11px", zIndex:5 }}/>
                <div style={{ width:"100%", height:"100%", borderRadius:"44px", overflow:"hidden", background:`linear-gradient(155deg,#001a5c,${C.dark})`, position:"relative" }}>
                  <svg viewBox="0 0 240 320" style={{ width:"100%", height:"60%" }}>
                    <rect width="240" height="320" fill="#0f2244"/>
                    {[80,140,200,260].map((y,i) => <line key={i} x1="0" y1={y} x2="240" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="6"/>)}
                    {[80,140,180].map((x,i) => <line key={i} x1={x} y1="0" x2={x} y2="320" stroke="rgba(255,255,255,0.05)" strokeWidth="5"/>)}
                    {[[10,70,65,40],[90,55,50,55],[150,65,44,50],[10,130,65,35],[90,130,50,35],[10,190,60,45],[90,185,50,50],[155,185,44,50]].map(([x,y,w,h],i)=>(
                      <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="rgba(0,61,166,0.45)" stroke="rgba(0,132,204,0.12)" strokeWidth="0.5"/>
                    ))}
                    <path d="M 120 290 Q 125 240 140 200 Q 155 165 140 130 Q 132 110 120 90" stroke={C.green} strokeWidth="5" fill="none" strokeOpacity="0.15" strokeLinecap="round"/>
                    <path d="M 120 290 Q 125 240 140 200 Q 155 165 140 130 Q 132 110 120 90" stroke={C.green} strokeWidth="2.5" fill="none" strokeDasharray="6 4" strokeLinecap="round"/>
                    <g transform="translate(138,195)">
                      <circle cx="0" cy="0" r="14" fill={C.green} opacity="0.15"/>
                      <circle cx="0" cy="0" r="8" fill={C.green} opacity="0.9"/>
                      <text x="0" y="4" textAnchor="middle" fontSize="9" fill="#050905" fontWeight="800">▲</text>
                    </g>
                    <circle cx="120" cy="290" r="8" fill={C.mid} stroke={C.blanc} strokeWidth="2.5"/>
                    <circle cx="120" cy="290" r="3" fill={C.blanc}/>
                    <circle cx="120" cy="90" r="13" fill={C.green} opacity="0.15"/>
                    <circle cx="120" cy="90" r="8"  fill={C.green}/>
                    <circle cx="120" cy="90" r="3"  fill={C.blanc}/>
                    <rect x="148" y="178" width="52" height="22" rx="6" fill="rgba(6,9,15,0.85)" stroke={`${C.green}55`} strokeWidth="1"/>
                    <text x="174" y="193" textAnchor="middle" fontSize="9.5" fill={C.green} fontFamily="Montserrat,sans-serif" fontWeight="800">2 min</text>
                  </svg>
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"rgba(255,255,255,0.97)", borderRadius:"22px 22px 44px 44px", padding:"16px 16px 20px" }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px" }}>
                      <div>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"12px", fontWeight:"800", color:C.noir, margin:0 }}>Nouvelle course 🛎</p>
                        <p style={{ fontFamily:"'Open Sans',sans-serif", fontSize:"10px", color:C.muted, margin:"2px 0 0" }}>Avenue H. Bourguiba → Lac 1</p>
                      </div>
                      <div style={{ background:C.green, borderRadius:"10px", padding:"6px 12px", boxShadow:`0 4px 12px ${C.green}44` }}>
                        <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"13px", fontWeight:"800", color:C.blanc }}>14.47DT</span>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:"8px" }}>
                      <div style={{ flex:1, padding:"8px", borderRadius:"10px", background:"rgba(0,61,166,0.08)", textAlign:"center" }}>
                        <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"11px", fontWeight:"700", color:C.muted }}>Refuser</span>
                      </div>
                      <div style={{ flex:2, padding:"8px", borderRadius:"10px", background:C.dark, textAlign:"center", boxShadow:`0 4px 14px ${C.dark}44` }}>
                        <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:"11px", fontWeight:"800", color:C.blanc }}>Accepter ✓</span>
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
}