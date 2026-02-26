import React from "react";
// Assurez-vous que le chemin vers votre image est correct
import taxiLogo from "../assets/logo.png"; 

const styles = {
  section: {
    fontFamily: "'Poppins', sans-serif",
    padding: "100px 8%",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1e3a8a",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#64748b",
    fontSize: "16px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1100px",
    gap: "60px",
  },
  imageColumn: {
    flex: "1",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  taxiImage: {
    width: "100%",
    height: "auto",
    maxWidth: "450px",
    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))",
    animation: "float 6s ease-in-out infinite",
  },
  formColumn: {
    flex: "1.2",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
    borderRadius: "24px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
    border: "1px solid #f1f5f9",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#1e3a8a",
    marginLeft: "4px",
  },
  input: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  textarea: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    backgroundColor: "#f8fafc",
    fontSize: "15px",
    minHeight: "130px",
    resize: "vertical",
    outline: "none",
    transition: "all 0.3s ease",
  },
  submitBtn: {
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    padding: "16px",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px",
    fontWeight: "800",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "10px",
    boxShadow: "0 4px 12px rgba(30, 58, 138, 0.2)",
  }
};

const ContactForm = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.title}>Contactez-nous</h2>
        <p style={styles.subtitle}>Une question ? Notre équipe vous répond dans les plus brefs délais.</p>
      </div>

      <div style={styles.container}>
        
        {/* Colonne Gauche : Image/Logo INNO */}
        <div style={styles.imageColumn}>
          <img 
            src={taxiLogo} 
            alt="Logo INNO Taxi" 
            style={styles.taxiImage} 
          />
          {/* Décoration de fond optionnelle */}
          <div style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            backgroundColor: "rgba(98, 161, 91, 0.1)",
            borderRadius: "50%",
            zIndex: -1,
            filter: "blur(40px)"
          }} />
        </div>

        {/* Colonne Droite : Formulaire */}
        <form style={styles.formColumn} onSubmit={(e) => e.preventDefault()}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nom complet</label>
            <input 
              type="text" 
              placeholder="Ex: Ahmed Ben Salah" 
              style={styles.input} 
              onFocus={(e) => {
                e.target.style.borderColor = "#1e3a8a";
                e.target.style.backgroundColor = "#fff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
              }}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail</label>
            <input 
              type="email" 
              placeholder="votre@email.com" 
              style={styles.input} 
              onFocus={(e) => {
                e.target.style.borderColor = "#1e3a8a";
                e.target.style.backgroundColor = "#fff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
              }}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Sujet</label>
            <input 
              type="text" 
              placeholder="Comment pouvons-nous vous aider ?" 
              style={styles.input} 
              onFocus={(e) => {
                e.target.style.borderColor = "#1e3a8a";
                e.target.style.backgroundColor = "#fff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
              }}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Message</label>
            <textarea 
              placeholder="Écrivez votre message ici..." 
              style={styles.textarea}
              onFocus={(e) => {
                e.target.style.borderColor = "#1e3a8a";
                e.target.style.backgroundColor = "#fff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
              }}
            ></textarea>
          </div>

          <button 
            type="submit"
            style={styles.submitBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#62a15b"; // Changement en vert au survol pour le rappel Inno
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1e3a8a";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Envoyer le message
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;