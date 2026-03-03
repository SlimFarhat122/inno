import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BusinessContact = () => {
  // États pour la gestion du formulaire et des services
  const [selectedService, setSelectedService] = useState("Discussion Générale");
  const [status, setStatus] = useState("idle"); 

  const colors = {
    primaryBlue: "#0B31AF",
    electricBlue: "#3B82F6",
    slate900: "#0F172A",
    slate800: "#1E293B",
    glassBorder: "rgba(255, 255, 255, 0.08)",
    success: "#22C55E"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = "service_lv0o3ua";
    const TEMPLATE_ID = "template_4kfai26";
    const PUBLIC_KEY = "KAYB6J5wxRaGngoX2";

    const templateParams = {
      user_name: e.target.user_name.value,
      company: e.target.company.value,
      user_email: e.target.user_email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      request_type: selectedService, // Cette variable sera dans votre email {{request_type}}
      time: new Date().toLocaleString('fr-FR'),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  const styles = {
    section: {
      padding: "100px 5%",
      backgroundColor: colors.slate900,
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      color: "#fff"
    },
    header: {
      maxWidth: "800px",
      margin: "0 auto 60px",
      textAlign: "center",
    },
    tileGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      maxWidth: "1100px",
      margin: "0 auto 60px"
    },
    actionTile: (service) => ({
      padding: "24px",
      borderRadius: "20px",
      backgroundColor: selectedService === service ? "rgba(59, 130, 246, 0.12)" : "rgba(255, 255, 255, 0.03)",
      border: `1px solid ${selectedService === service ? colors.electricBlue : colors.glassBorder}`,
      textAlign: "left",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      transform: selectedService === service ? "translateY(-5px)" : "none",
      boxShadow: selectedService === service ? `0 10px 30px -10px ${colors.electricBlue}40` : "none"
    }),
    mainGrid: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: "40px",
      maxWidth: "1100px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2
    },
    input: {
      width: "100%",
      padding: "14px 18px",
      borderRadius: "12px",
      border: `1px solid ${colors.glassBorder}`,
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      color: "#ffffff",
      fontSize: "15px",
      outline: "none",
      transition: "0.3s",
      boxSizing: "border-box"
    },
    submitBtn: {
      width: "100%",
      marginTop: "30px",
      padding: "20px",
      borderRadius: "14px",
      border: "none",
      backgroundColor: status === "success" ? colors.success : colors.primaryBlue,
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "800",
      cursor: status === "sending" ? "not-allowed" : "pointer",
      transition: "all 0.4s",
      boxShadow: `0 10px 20px ${colors.primaryBlue}40`
    }
  };

  return (
    <section id="business-contact" style={styles.section}>
      {/* Background Glow */}
      <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "500px", height: "500px", backgroundColor: "rgba(11, 49, 175, 0.2)", filter: "blur(120px)", borderRadius: "50%" }}></div>

      <header style={styles.header}>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "900", marginBottom: "20px", letterSpacing: "-1px" }}>
          Passez à la vitesse supérieure
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "18px" }}>Sélectionnez un service pour commencer.</p>
      </header>

      {/* TUILES DE SÉLECTION */}
      <div style={styles.tileGrid}>
        <div onClick={() => setSelectedService("Demo Live")} style={styles.actionTile("Demo Live")}>
          <span style={{ fontSize: "28px" }}>📊</span>
          <span style={{ fontWeight: "800", fontSize: "18px" }}>Demo Live</span>
          <span style={{ fontSize: "14px", opacity: 0.6 }}>Explorez l'interface avec un expert en direct.</span>
        </div>
        
        <div onClick={() => setSelectedService("Devis Express")} style={styles.actionTile("Devis Express")}>
          <span style={{ fontSize: "28px" }}>💰</span>
          <span style={{ fontWeight: "800", fontSize: "18px" }}>Devis Express</span>
          <span style={{ fontSize: "14px", opacity: 0.6 }}>Obtenez une tarification sur mesure sous 24h.</span>
        </div>
        
        <div onClick={() => setSelectedService("Essai Gratuit")} style={styles.actionTile("Essai Gratuit")}>
          <span style={{ fontSize: "28px" }}>🚀</span>
          <span style={{ fontWeight: "800", fontSize: "18px" }}>Essai Gratuit</span>
          <span style={{ fontSize: "14px", opacity: 0.6 }}>Testez nos outils gratuitement pendant 14 jours.</span>
        </div>
      </div>

      <div style={styles.mainGrid}>
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", padding: "40px", borderRadius: "32px", border: `1px solid ${colors.glassBorder}`, backdropFilter: "blur(10px)" }}>
          <form onSubmit={handleSubmit}>
            {/* Badge de rappel de la sélection */}
            <div style={{ marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "12px", textTransform: "uppercase", color: "#64748b", fontWeight: "700" }}>Votre choix :</span>
                <span style={{ backgroundColor: colors.electricBlue, padding: "4px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: "700" }}>{selectedService}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
              <input name="user_name" type="text" placeholder="Nom complet" required style={styles.input} className="custom-input" />
              <input name="company" type="text" placeholder="Nom de l'entreprise" required style={styles.input} className="custom-input" />
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
              <input name="user_email" type="email" placeholder="Email professionnel" required style={styles.input} className="custom-input" />
              <input name="phone" type="tel" placeholder="Téléphone" required style={styles.input} className="custom-input" />
            </div>

            <textarea name="message" placeholder="Parlez-nous de vos besoins..." required style={{ ...styles.input, minHeight: "120px", resize: "none" }} className="custom-input"></textarea>

            <button type="submit" disabled={status === "sending"} style={styles.submitBtn}>
              {status === "idle" && `Confirmer ma demande (${selectedService})`}
              {status === "sending" && "Envoi en cours..."}
              {status === "success" && "Demande transmise avec succès !"}
              {status === "error" && "Une erreur est survenue"}
            </button>
          </form>
        </div>

        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div>
            <h4 style={{ color: "#64748b", textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px", marginBottom: "20px" }}>Contact direct</h4>
            <a href="mailto:business@inno.tn" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <span style={{ width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>✉️</span>
              business@inno.tn
            </a>
            <a href="tel:+21658000800" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: "15px" }}>
              <span style={{ width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>📞</span>
              +216 58 000 800
            </a>
          </div>

          <div style={{ marginTop: "auto", borderTop: `1px solid ${colors.glassBorder}`, paddingTop: "30px" }}>
            <div style={{ fontSize: "24px", fontWeight: "900", letterSpacing: "2px" }}>INNO</div>
            <div style={{ fontSize: "11px", color: colors.electricBlue, fontWeight: "800", letterSpacing: "4px" }}>BUSINESS SOLUTIONS</div>
          </div>
        </div>
      </div>

      <style>
        {`
          .custom-input:focus {
            border-color: ${colors.electricBlue} !important;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
          }
          @media (max-width: 900px) {
            #business-contact > div:last-of-type { grid-template-columns: 1fr !important; }
          }
        `}
      </style>
    </section>
  );
};

export default BusinessContact;