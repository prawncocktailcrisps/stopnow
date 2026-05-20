export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--border)",
        padding: "2.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1.2rem",
          color: "var(--text)",
        }}
      >
        Stop Now
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <a
          href="https://wa.me/447404437994"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(232,228,216,0.4)",
            textDecoration: "none",
            fontSize: "0.85rem",
            letterSpacing: "0.04em",
            transition: "color 0.2s",
          }}
        >
          WhatsApp +44 7404 437994
        </a>
        <span
          style={{
            color: "rgba(232,228,216,0.4)",
            fontSize: "0.85rem",
            letterSpacing: "0.04em",
            cursor: "pointer",
          }}
        >
          Terms &amp; Conditions available on request
        </span>
      </div>
      <p style={{ color: "rgba(232,228,216,0.2)", fontSize: "0.78rem", width: "100%", textAlign: "right" }}>
        © {new Date().getFullYear()} Stop Now. All rights reserved.
      </p>
    </footer>
  );
}
