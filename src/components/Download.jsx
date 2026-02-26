function Download() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <h3 className="blue" style={{ marginBottom: "20px" }}>
        Télécharger notre application
      </h3>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button className="btn btn-primary">Google Play</button>
        <button className="btn btn-secondary">App Store</button>
      </div>
    </section>
  );
}

export default Download;