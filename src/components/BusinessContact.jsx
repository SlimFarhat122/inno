import React from "react";

const BusinessContact = () => {
  const styles = {
    section: {
      padding: "80px 8%",
      backgroundColor: "#1e293b", // Bleu nuit profond du thème
      textAlign: "center",
      fontFamily: "'Inter', sans-serif",
    },
    title: {
      fontSize: "clamp(24px, 4vw, 32px)",
      color: "#ffffff",
      fontWeight: "900",
      marginBottom: "40px",
      textTransform: "uppercase",
      letterSpacing: "1px"
    },
    topButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
      marginBottom: "50px"
    },
    serviceBtn: {
      padding: "12px 24px",
      borderRadius: "12px",
      border: "none",
      backgroundColor: "#ffffff",
      color: "#1e3a8a",
      fontSize: "14px",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "left"
    },
    formCard: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "30px",
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
    },
    inputGroup: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "20px"
    },
    label: {
      display: "block",
      fontSize: "13px",
      fontWeight: "700",
      color: "#1e3a8a",
      marginBottom: "8px"
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      backgroundColor: "#f8fafc",
      fontSize: "14px",
      outline: "none"
    },
    textarea: {
      width: "100%",
      padding: "12px 15px",
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      backgroundColor: "#f8fafc",
      fontSize: "14px",
      minHeight: "100px",
      outline: "none",
      resize: "none"
    },
    submitBtn: {
      width: "100%",
      marginTop: "25px",
      padding: "15px",
      borderRadius: "12px",
      border: "none",
      backgroundColor: "#5bc0de", // Bleu clair du bouton "Envoyer"
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "800",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 20px rgba(91, 192, 222, 0.3)"
    },
    infoCard: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      padding: "40px",
      borderRadius: "30px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "25px",
      fontSize: "15px"
    },
    iconBox: {
      width: "40px",
      height: "40px",
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px"
    },
    brandName: {
      marginTop: "20px",
      fontSize: "24px",
      fontWeight: "900",
      letterSpacing: "2px"
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Prêt à transformer la mobilité <br/> de votre entreprise ?</h2>

      <div style={styles.topButtons}>
        <button style={styles.serviceBtn}>💻 Demandez une démo personnalisée</button>
        <button style={styles.serviceBtn}>📄 Obtenez un devis adapté</button>
        <button style={styles.serviceBtn}>🚀 Démarrez votre essai gratuit</button>
      </div>

      <div style={styles.mainGrid}>
        {/* Colonne Formulaire */}
        <div style={styles.formCard}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={styles.inputGroup}>
              <div>
                <label style={styles.label}>Nom</label>
                <input type="text" placeholder="Votre nom" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>Entreprise</label>
                <input type="text" placeholder="Nom de l'entreprise" style={styles.input} />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <div>
                <label style={styles.label}>Email</label>
                <input type="email" placeholder="email@exemple.com" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>Téléphone</label>
                <input type="tel" placeholder="+216 -- --- ---" style={styles.input} />
              </div>
            </div>
            <div>
              <label style={styles.label}>Message</label>
              <textarea placeholder="Comment pouvons-nous vous aider ?" style={styles.textarea}></textarea>
            </div>
            <button style={styles.submitBtn}>Envoyer</button>
          </form>
        </div>

        {/* Colonne Infos */}
        <div style={styles.infoCard}>
          <div style={styles.contactItem}>
            <div style={styles.iconBox}>✉️</div>
            business@inno.tn
          </div>
          <div style={styles.contactItem}>
            <div style={styles.iconBox}>📞</div>
            +216 29 606 606
          </div>
          <div style={styles.contactItem}>
            <div style={styles.iconBox}>🌐</div>
            business.inno.tn
          </div>

          <div style={{ marginTop: "40px" }}>
            <div style={styles.brandName}>INNO</div>
            <div style={{ fontSize: "12px", opacity: 0.6, letterSpacing: "3px" }}>BUSINESS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessContact;