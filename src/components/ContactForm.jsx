import React, { useState } from "react";
import taxiLogo from "../assets/logo.png"; 

const ContactForm = () => {
  const [focused, setFocused] = useState(null);

  const colors = {
    bg: "#F8FAFC",      // Blanc pur légèrement bleuté
    bgReflet: "#DBEAFE", // Bleu très pâle pour le reflet
    card: "#FFFFFF",
    accent: "#1E3A8A",  // Bleu Inno (Navy)
    accentLight: "#3B82F6",
    textMain: "#0F172A",
    textMuted: "#64748B",
    border: "#E2E8F0"
  };

  const inputStyle = (id) => ({
    padding: "16px 20px",
    borderRadius: "14px",
    border: "2px solid",
    borderColor: focused === id ? colors.accentLight : colors.border,
    backgroundColor: focused === id ? "#FFFFFF" : "#F1F5F9",
    color: colors.textMain,
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: focused === id ? `0 0 15px ${colors.accentLight}20` : "none",
  });

  return (
    <section id="contact" style={{
      fontFamily: "'Inter', sans-serif",
      padding: "120px 5%",
      // Fond blanc avec reflet bleu en haut à droite
      background: `radial-gradient(circle at 70% 20%, ${colors.bgReflet} 0%, ${colors.bg} 50%)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      position: "relative",
    }}>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        width: "100%",
        maxWidth: "1100px",
        gap: "60px",
        alignItems: "center"
      }}>
        
        {/* TEXTE DE GAUCHE */}
        <div style={{ padding: "20px" }}>
          <div style={{ 
            display: "inline-block", 
            padding: "8px 16px", 
            borderRadius: "100px", 
            backgroundColor: `${colors.accentLight}15`,
            color: colors.accentLight,
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "24px"
          }}>
            Support Inno
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(32px, 4vw, 48px)", fontWeight: "900", color: colors.accent, 
            lineHeight: 1.1, marginBottom: "20px", letterSpacing: "-0.03em" 
          }}>
            Une question ? <br/> 
            <span style={{ color: colors.accentLight }}>Écrivez-nous.</span>
          </h2>
          
          <p style={{ color: colors.textMuted, fontSize: "18px", lineHeight: "1.6", maxWidth: "400px" }}>
            Que ce soit pour une course ou pour un partenariat, notre équipe tunisienne vous répond avec plaisir.
          </p>

          <div style={{ marginTop: "32px" }}>
            <img src={taxiLogo} alt="Logo" style={{ height: "40px", opacity: 0.8 }} />
          </div>
        </div>

        {/* CARTE FORMULAIRE */}
        <div style={{
          backgroundColor: colors.card,
          padding: "45px",
          borderRadius: "30px",
          boxShadow: "0 20px 50px rgba(30, 58, 138, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
        }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: "700", color: colors.accent, marginLeft: "4px" }}>Nom Complet</label>
              <input 
                type="text" placeholder="Ahmed Ben Salah" 
                style={inputStyle("name")}
                onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: "700", color: colors.accent, marginLeft: "4px" }}>Email professionnel</label>
              <input 
                type="email" placeholder="ahmed@exemple.tn" 
                style={inputStyle("email")}
                onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: "700", color: colors.accent, marginLeft: "4px" }}>Votre Message</label>
              <textarea 
                placeholder="Comment pouvons-nous vous aider ?" 
                style={{ ...inputStyle("msg"), minHeight: "130px", resize: "none" }}
                onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
              />
            </div>

            <button 
              className="btn-inno-send"
              style={{
                marginTop: "10px",
                padding: "18px",
                borderRadius: "14px",
                border: "none",
                backgroundColor: colors.accent,
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: `0 10px 20px ${colors.accent}30`
              }}
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .btn-inno-send:hover {
          background-color: ${colors.accentLight} !important;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px ${colors.accentLight}40 !important;
        }
        .btn-inno-send:active { transform: scale(0.98); }
        input::placeholder, textarea::placeholder { color: #94A3B8; }
      `}</style>
    </section>
  );
};

export default ContactForm;