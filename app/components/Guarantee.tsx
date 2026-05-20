export default function Guarantee() {
  return (
    <div
      style={{
        margin: "0 2.5rem",
        borderTop: "none",
        background: "var(--surface)",
        border: "0.5px solid var(--border-gold)",
        padding: "3rem 2.5rem",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "2rem",
        alignItems: "start",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          border: "1px solid var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--gold)",
          fontSize: "1.5rem",
          flexShrink: 0,
        }}
        aria-hidden
      >
        ✦
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            marginBottom: "0.75rem",
          }}
        >
          Our guarantee
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: 560 }}>
          We guarantee that you will end the session as a confident non-drinker. If not, we will refund you in full.
        </p>
      </div>
    </div>
  );
}
