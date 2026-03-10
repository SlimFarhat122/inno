import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import taxiLogo from "../assets/logo.png";

// ── PALETTE OFFICIELLE INNO (stricte) ────────────────────────
// #003da6 → Bleu Foncé   |   #0084cc → Bleu Clair   |   #49ce54 → Vert
// Aucune autre couleur de marque n'est autorisée.

const INNO = {
  bleuFonce: "#003da6",
  bleuClair: "#0084cc",
  vert:      "#49ce54",
  blanc:     "#ffffff",
  grisTexte: "#475569",
  grisFond:  "#f4f7fc",
  noir:      "#0a0e1a",
};

const ContactForm = () => {
  const [focused, setFocused] = useState(null);
  const [status,  setStatus]  = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.send(
      "service_lv0o3ua",
      "template_wrkxmt2",
      {
        user_name:  e.target.user_name.value,
        user_email: e.target.user_email.value,
        message:    e.target.message.value,
        time: new Date().toLocaleString("fr-FR", { dateStyle:"short", timeStyle:"short" }),
      },
      "KAYB6J5wxRaGngoX2"
    )
    .then(() => { setStatus("success"); e.target.reset(); setTimeout(() => setStatus("idle"), 5000); })
    .catch(() => { setStatus("error");  setTimeout(() => setStatus("idle"), 5000); });
  };

  const inputStyle = (id) => ({
    padding: "17px 20px",
    borderRadius: "14px",
    border: `2px solid ${focused === id ? INNO.bleuClair : "transparent"}`,
    backgroundColor: focused === id ? INNO.blanc : INNO.blanc,
    color: INNO.noir,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "15px",
    fontWeight: "400",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "all 0.35s cubic-bezier(0.19,1,0.22,1)",
    boxShadow: focused === id ? `0 8px 24px ${INNO.bleuClair}20` : "none",
  });

  const submitColors = {
    idle:    { bg: INNO.bleuFonce, label: "Envoyer le message" },
    sending: { bg: INNO.bleuClair, label: "Envoi en cours..." },
    success: { bg: INNO.vert,      label: "✓ Message envoyé !" },
    error:   { bg: "#dc2626",      label: "Erreur — réessayez" },
  };
  const sc = submitColors[status];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&family=Cairo:wght@400;600;700&display=swap');

        /* ── Decorative BG circles ── */
        .contact-circle-1 {
          position: absolute; top: -80px; right: -80px;
          width: 360px; height: 360px; border-radius: 50%;
          border: 1px solid #003da608;
          pointer-events: none;
        }
        .contact-circle-2 {
          position: absolute; bottom: -100px; left: -100px;
          width: 440px; height: 440px; border-radius: 50%;
          border: 1px solid #0084cc08;
          pointer-events: none;
        }
        .contact-circle-3 {
          position: absolute; top: 30%; right: 5%;
          width: 180px; height: 180px; border-radius: 50%;
          border: 1px dashed #49ce5420;
          pointer-events: none;
        }

        /* ── Input focus ring ── */
        input:focus, textarea:focus { outline: none; }

        /* ── Placeholder ── */
        input::placeholder, textarea::placeholder {
          font-family: 'Open Sans', sans-serif;
          color: #9daec8; font-weight: 400;
        }

        /* ── Submit button ── */
        .contact-submit {
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .contact-submit:hover:not(:disabled) {
          filter: brightness(1.1);
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -8px rgba(0,61,166,0.4) !important;
        }
        .contact-submit:active { transform: scale(0.97); }

        /* ── Left info items ── */
        .contact-info-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px; border-radius: 14px;
          background: INNO.grisFond;
          border: 1px solid rgba(0,132,204,0.1);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          cursor: default;
        }
        .contact-info-item:hover {
          background: #fff;
          border-color: rgba(0,132,204,0.25);
          box-shadow: 0 8px 24px rgba(0,61,166,0.07);
          transform: translateX(4px);
        }

        /* ── Divider line ── */
        .contact-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #003da615, transparent);
          margin: 28px 0;
        }

        /* ── Responsive ── */
        @media (max-width: 820px) {
          .contact-wrap  { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact       { padding: 80px 6% !important; }
        }
      `}</style>

      <section id="contact" style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "18px",
        padding: "120px 8%",
        background: INNO.blanc,
        backgroundImage: `
          radial-gradient(circle at 95% 5%, ${INNO.bleuFonce}06 0%, transparent 50%),
          radial-gradient(circle at 5% 95%, ${INNO.vert}08 0%, transparent 50%)
        `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Decorative circles */}
        <div className="contact-circle-1" />
        <div className="contact-circle-2" />
        <div className="contact-circle-3" />

        <div className="contact-wrap" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          width: "100%",
          maxWidth: "1120px",
          gap: "72px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}>

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"7px 16px", borderRadius:"100px",
              background: INNO.blanc,
              border:`1px solid ${INNO.bleuFonce}1a`,
              color: INNO.bleuFonce,
              fontFamily:"'Montserrat', sans-serif",
              fontSize:"11.5px", fontWeight:"700",
              letterSpacing:"1.2px", textTransform:"uppercase",
              marginBottom:"24px",
              boxShadow:"0 2px 12px rgba(0,61,166,0.06)",
            }}>
              <span style={{
                width:"6px", height:"6px", borderRadius:"50%",
                background: INNO.vert, display:"inline-block",
                boxShadow:`0 0 8px ${INNO.vert}88`,
              }} />
              Support Inno
            </div>

            {/* Headline 1 — Montserrat Bold 48px */}
            <h2 style={{
              fontFamily:"'Montserrat', sans-serif",
              fontSize:"clamp(34px, 4.5vw, 54px)",
              fontWeight:"800",
              color: INNO.noir,
              lineHeight:"1.07",
              letterSpacing:"-0.04em",
              marginBottom:"20px",
            }}>
              Une question ?<br />
              <span style={{ color: INNO.bleuClair }}>Écrivez-nous.</span>
            </h2>

            {/* Body Text — Open Sans Regular 18px */}
            <p style={{
              fontFamily:"'Open Sans', sans-serif",
              fontSize:"16px", fontWeight:"400",
              color: INNO.grisTexte, lineHeight:"1.75",
              maxWidth:"400px", marginBottom:"36px",
            }}>
              Demande de partenariat ou assistance — notre équipe
              tunisienne vous répond sous 24h.
            </p>

            <div className="contact-divider" />

            {/* Info items */}
            <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"36px" }}>
              <div className="contact-info-item">
                <div style={{
                  width:"36px", height:"36px", borderRadius:"10px",
                  background:`${INNO.bleuFonce}12`,
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                }}>
                  <svg width="16" height="16" fill="none" stroke={INNO.bleuFonce} strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"11px", fontWeight:"600", color:"#94a3b8", margin:"0 0 2px", textTransform:"uppercase", letterSpacing:"0.8px" }}>Email</p>
                  <p style={{ fontFamily:"'Open Sans', sans-serif", fontSize:"14px", fontWeight:"500", color: INNO.bleuFonce, margin:0 }}>contact@inno.tn</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div style={{
                  width:"36px", height:"36px", borderRadius:"10px",
                  background:`${INNO.bleuClair}12`,
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                }}>
                  <svg width="16" height="16" fill="none" stroke={INNO.bleuClair} strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"11px", fontWeight:"600", color:"#94a3b8", margin:"0 0 2px", textTransform:"uppercase", letterSpacing:"0.8px" }}>Téléphone</p>
                  <p style={{ fontFamily:"'Open Sans', sans-serif", fontSize:"14px", fontWeight:"500", color: INNO.bleuClair, margin:0 }}>+216 58 000 800</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div style={{
                  width:"36px", height:"36px", borderRadius:"10px",
                  background:`${INNO.vert}14`,
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                }}>
                  <svg width="16" height="16" fill="none" stroke={INNO.vert} strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"11px", fontWeight:"600", color:"#94a3b8", margin:"0 0 2px", textTransform:"uppercase", letterSpacing:"0.8px" }}>Disponibilité</p>
                  <p style={{ fontFamily:"'Open Sans', sans-serif", fontSize:"14px", fontWeight:"500", color: INNO.vert, margin:0 }}>Lun–Sam · 8h–20h</p>
                </div>
              </div>
            </div>

            <img src={taxiLogo} alt="Inno" style={{
              height:"38px", filter:"grayscale(1) opacity(0.35)",
            }} />
          </div>

          {/* ── FORM CARD ── */}
          <div style={{
            background: INNO.grisFond,
            borderRadius:"28px",
            padding:"48px 44px",
            boxShadow:`0 24px 60px -12px ${INNO.bleuFonce}10, 0 0 0 1px ${INNO.bleuFonce}08`,
          }}>

            {/* Card header stripe */}
            <div style={{
              height:"4px",
              background:`linear-gradient(90deg, ${INNO.bleuFonce}, ${INNO.bleuClair}, ${INNO.vert})`,
              marginBottom:"36px",
              marginLeft:"-44px", marginRight:"-44px", marginTop:"-48px",
              borderRadius:"28px 28px 0 0",
            }} />

            <h3 style={{
              fontFamily:"'Montserrat', sans-serif",
              fontSize:"20px", fontWeight:"700",
              color: INNO.noir, margin:"0 0 28px",
              letterSpacing:"-0.03em",
            }}>
              Envoyez-nous un message
            </h3>

            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"20px" }}>

              {/* Name */}
              <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                <label style={{
                  fontFamily:"'Montserrat', sans-serif",
                  fontSize:"13px", fontWeight:"600",
                  color: INNO.bleuFonce, marginLeft:"2px",
                  letterSpacing:"0.2px",
                }}>Nom complet</label>
                <input name="user_name" type="text" placeholder="Ahmed Ben Salah" required
                  style={inputStyle("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)} />
              </div>

              {/* Email */}
              <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                <label style={{
                  fontFamily:"'Montserrat', sans-serif",
                  fontSize:"13px", fontWeight:"600",
                  color: INNO.bleuFonce, marginLeft:"2px",
                }}>Email professionnel</label>
                <input name="user_email" type="email" placeholder="ahmed@entreprise.tn" required
                  style={inputStyle("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)} />
              </div>

              {/* Message */}
              <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                <label style={{
                  fontFamily:"'Montserrat', sans-serif",
                  fontSize:"13px", fontWeight:"600",
                  color: INNO.bleuFonce, marginLeft:"2px",
                }}>Votre message</label>
                <textarea name="message" placeholder="Comment pouvons-nous vous aider ?" required
                  style={{ ...inputStyle("msg"), minHeight:"130px", resize:"none" }}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)} />
              </div>

              {/* Submit — Montserrat Bold */}
              <button type="submit"
                disabled={status === "sending"}
                className="contact-submit"
                style={{
                  marginTop:"6px",
                  padding:"18px 24px",
                  borderRadius:"14px",
                  border:"none",
                  background: sc.bg,
                  color: INNO.blanc,
                  fontFamily:"'Montserrat', sans-serif",
                  fontSize:"15px", fontWeight:"700",
                  letterSpacing:"0.2px",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  boxShadow:`0 12px 32px -6px ${INNO.bleuFonce}44`,
                  opacity: status === "sending" ? 0.8 : 1,
                }}>
                {sc.label}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;