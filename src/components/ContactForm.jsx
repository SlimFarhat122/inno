import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import taxiLogo from "../assets/logo.png";

// ── PALETTE INNO ───────────────────────────────────────────────
const C = {
  green:  "#39B54A",   // Vert Inno — logo exact
  dark:   "#0F172A",
  muted:  "#475569",
  bg:     "#FAFAF9",
  border: "#39B54A25",
  white:  "#FFFFFF",
  radius: "32px",
};

const ContactForm = () => {
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID  = "service_lv0o3ua";
    const TEMPLATE_ID = "template_wrkxmt2";
    const PUBLIC_KEY  = "KAYB6J5wxRaGngoX2";

    const templateParams = {
      user_name:  e.target.user_name.value,
      user_email: e.target.user_email.value,
      message:    e.target.message.value,
      time: new Date().toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" }),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  const inputStyle = (id) => ({
    padding: "18px 20px",
    borderRadius: "18px",
    border: "2px solid",
    borderColor: focused === id ? C.green : "transparent",   // #39B54A on focus
    backgroundColor: focused === id ? C.white : "#F1F5F9",
    color: C.dark,
    /* Body Text — Open Sans Regular 18px (charte) */
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "15px",
    fontWeight: "400",   /* Regular */
    outline: "none",
    width: "100%",
    transition: "all 0.4s cubic-bezier(0.19,1,0.22,1)",
    boxShadow: focused === id ? `0 10px 25px ${C.green}20` : "none",
    boxSizing: "border-box",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600;700&family=Cairo:wght@400;600;700&display=swap');

        .btn-submit {
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .btn-submit:hover {
          background-color: #1e293b !important;
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -10px ${C.green}50 !important;
        }
        .btn-submit:active { transform: scale(0.97); }

        input::placeholder,
        textarea::placeholder {
          /* Open Sans Regular — placeholder */
          font-family: 'Open Sans', sans-serif;
          color: #94A3B8;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          #contact { padding: 80px 5% !important; }
          .btn-submit { padding: 16px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>

      <section id="contact" style={{
        /* Body Text — Open Sans Regular 18px (charte) */
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "18px",
        padding: "120px 8%",
        backgroundColor: C.bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
      }}>

        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          width: "100%",
          maxWidth: "1150px",
          gap: "80px",
          alignItems: "center",
          zIndex: 2,
        }}>

          {/* ── LEFT: Text ── */}
          <div>
            {/* Badge — Montserrat Bold 700, uppercase UI label */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "100px",
              background: C.white,
              border: `1px solid ${C.border}`,
              color: C.green,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: "700",      /* Bold */
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "30px",
            }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.green }} />
              Support Inno
            </div>

            {/* Headline 1 — Montserrat Bold 48px (charte) */}
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(38px, 5vw, 56px)", /* Headline 1: 48px Bold */
              fontWeight: "700",                   /* Bold */
              color: C.dark,
              lineHeight: 1.05,
              marginBottom: "25px",
              letterSpacing: "-0.04em",
            }}>
              Une question ?{" "}<br />
              <span style={{ color: C.green }}>Écrivez-nous.</span>
            </h2>

            {/* Body Text — Open Sans Regular 18px (charte) */}
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "18px",    /* Body Text: 18px Regular */
              fontWeight: "400",   /* Regular */
              color: C.muted,
              lineHeight: "1.7",
              maxWidth: "450px",
              marginBottom: "40px",
            }}>
              Qu'il s'agisse d'une demande de partenariat ou d'une assistance, notre équipe tunisienne est à votre écoute.
            </p>

            <img
              src={taxiLogo}
              alt="Logo Inno"
              style={{ height: "45px", filter: "grayscale(1) opacity(0.5)" }}
            />
          </div>

          {/* ── RIGHT: Form Card ── */}
          <div style={{
            backgroundColor: C.white,
            padding: "50px",
            borderRadius: C.radius,
            boxShadow: "0 20px 50px -10px rgba(0,0,0,0.04)",
            border: `1px solid ${C.border}`,
          }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {/* Label — Montserrat SemiBold */}
                <label style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",   /* SemiBold */
                  color: C.dark,
                  marginLeft: "4px",
                }}>Nom Complet</label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Ahmed Ben Salah"
                  required
                  style={inputStyle("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: C.dark,
                  marginLeft: "4px",
                }}>Email professionnel</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="ahmed@inno.tn"
                  required
                  style={inputStyle("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: C.dark,
                  marginLeft: "4px",
                }}>Votre Message</label>
                <textarea
                  name="message"
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                  style={{ ...inputStyle("msg"), minHeight: "140px", resize: "none" }}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Submit — Montserrat Bold CTA */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-submit"
                style={{
                  marginTop: "10px",
                  padding: "20px",
                  borderRadius: "18px",
                  border: "none",
                  backgroundColor: status === "success" ? C.green : C.dark,
                  color: C.white,
                  /* Montserrat Bold — CTA button */
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "16px",
                  fontWeight: "700",   /* Bold */
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  boxShadow: `0 15px 30px -5px ${C.dark}40`,
                  opacity: status === "sending" ? 0.75 : 1,
                }}
              >
                {status === "idle"    && "Envoyer le message"}
                {status === "sending" && "Envoi en cours..."}
                {status === "success" && "✓ Message envoyé !"}
                {status === "error"   && "Erreur — réessayez"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;