import React, { useState } from "react";
import taxiLogo from "../assets/logo.png"; 

const theme = {
  green: "#62A15B",
  dark: "#0F172A",
  muted: "#475569",
  bg: "#FAFAF9", // Le fond uni identique à la section About
  border: "rgba(98, 161, 91, 0.15)",
  radius: "32px",
};

const ContactForm = () => {
  const [focused, setFocused] = useState(null);

  const inputStyle = (id) => ({
    padding: "18px 20px",
    borderRadius: "18px",
    border: "2px solid",
    borderColor: focused === id ? theme.green : "transparent",
    backgroundColor: focused === id ? "#FFFFFF" : "#F1F5F9",
    color: theme.dark,
    fontSize: "15px",
    fontWeight: "500",
    outline: "none",
    transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
    boxShadow: focused === id ? `0 10px 25px ${theme.green}15` : "none",
  });

  return (
    <section id="contact" style={{
      fontFamily: "'Inter', sans-serif",
      padding: "120px 8%",
      backgroundColor: theme.bg, // Fond identique au About
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      position: "relative",
    }}>
      
      {/* Pas de Background Layer complexe ici pour rester cohérent avec le About */}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        width: "100%",
        maxWidth: "1150px",
        gap: "80px",
        alignItems: "center",
        zIndex: 2
      }}>
        
        {/* TEXTE DE GAUCHE */}
        <div>
          <div style={{ 
            display: "inline-flex", alignItems: "center", gap: "10px", padding: "10px 20px", 
            borderRadius: "100px", background: "#FFF", border: `1px solid ${theme.border}`,
            color: theme.green, fontSize: "12px", fontWeight: "800", letterSpacing: "1px", marginBottom: "30px"
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: theme.green }} />
            SUPPORT INNO
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(38px, 5vw, 56px)", fontWeight: "900", color: theme.dark, 
            lineHeight: 1.05, marginBottom: "25px", letterSpacing: "-0.04em" 
          }}>
            Une question ? <br/> 
            <span style={{ color: theme.green }}>Écrivez-nous.</span>
          </h2>
          
          <p style={{ color: theme.muted, fontSize: "19px", lineHeight: "1.7", maxWidth: "450px", marginBottom: "40px" }}>
            Qu’il s’agisse d’une demande de partenariat ou d’une assistance, notre équipe tunisienne est à votre écoute.
          </p>

          <img src={taxiLogo} alt="Logo" style={{ height: "45px", filter: "grayscale(1) opacity(0.5)" }} />
        </div>

        {/* CARTE FORMULAIRE (Style Bento pur) */}
        <div style={{
          backgroundColor: "#FFFFFF", // Blanc solide comme les cartes du About
          padding: "50px",
          borderRadius: theme.radius,
          boxShadow: "0 20px 50px -10px rgba(0,0,0,0.04)",
          border: `1px solid ${theme.border}`, // Bordure légère identique aux cartes About
        }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label style={{ fontSize: "14px", fontWeight: "700", color: theme.dark, marginLeft: "4px" }}>Nom Complet</label>
              <input 
                type="text" placeholder="Ahmed Ben Salah" 
                style={inputStyle("name")}
                onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label style={{ fontSize: "14px", fontWeight: "700", color: theme.dark, marginLeft: "4px" }}>Email professionnel</label>
              <input 
                type="email" placeholder="ahmed@inno.tn" 
                style={inputStyle("email")}
                onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label style={{ fontSize: "14px", fontWeight: "700", color: theme.dark, marginLeft: "4px" }}>Votre Message</label>
              <textarea 
                placeholder="Comment pouvons-nous vous aider ?" 
                style={{ ...inputStyle("msg"), minHeight: "140px", resize: "none" }}
                onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
              />
            </div>

            <button 
              className="btn-submit"
              style={{
                marginTop: "10px",
                padding: "20px",
                borderRadius: "18px",
                border: "none",
                backgroundColor: theme.dark,
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: `0 15px 30px -5px ${theme.dark}40`
              }}
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .btn-submit:hover {
          background-color: ${theme.green} !important;
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -10px ${theme.green}50 !important;
        }
        .btn-submit:active { transform: scale(0.97); }
        input::placeholder, textarea::placeholder { color: #94A3B8; font-weight: 400; }
        
        @media (max-width: 768px) {
          #contact { padding: 80px 5%; }
          .btn-submit { padding: 16px; }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;