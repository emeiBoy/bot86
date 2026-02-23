export default function Home() {
  return (
    <main style={{
      background: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "80px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Bot86 Robotics Export Platform
      </h1>
      <p style={{ fontSize: "20px", opacity: 0.8 }}>
        Connecting Chinese Robotics Manufacturers to Global Markets.
      </p>

      <div style={{ marginTop: "40px" }}>
        <a href="/directory" style={{ marginRight: "20px", color: "#38bdf8" }}>
          Robot Directory
        </a>
        <a href="/manufacturers" style={{ marginRight: "20px", color: "#38bdf8" }}>
          Manufacturers
        </a>
        <a href="/contact" style={{ color: "#38bdf8" }}>
          Contact
        </a>
      </div>
    </main>
  );
}
