const features = [
  "Half-day one-to-one video session",
  "Personally tailored to your circumstances",
  "Full money-back guarantee",
  "Written session summary sent by email",
  "Available globally, most time zones",
  "100% confidential",
  "Sessions conducted in English",
  "Pay in GBP, USD or EUR via PayPal",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "5rem 2.5rem",
        borderTop: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <p
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "1rem",
        }}
      >
        Pricing
      </p>
      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          lineHeight: 1.2,
          marginBottom: "3rem",
        }}
      >
        Simple, transparent pricing
      </h2>

      <div
        style={{
          maxWidth: 540,
          border: "0.5px solid var(--border-gold)",
          padding: "3rem",
          background: "var(--surface)",
        }}
      >
        <div
          style={{
            textDecoration: "line-through",
            color: "var(--text-faint)",
            fontSize: "1.1rem",
            marginBottom: "0.25rem",
          }}
        >
          £499
        </div>
        <div
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "3.8rem",
            color: "var(--gold)",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          £249
        </div>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.88rem",
            marginBottom: "2rem",
            letterSpacing: "0.03em",
          }}
        >
          50% introductory offer · Pay via PayPal
        </p>

        <ul
          style={{
            listStyle: "none",
            marginBottom: "2.5rem",
          }}
        >
          {features.map((f) => (
            <li
              key={f}
              style={{
                padding: "0.65rem 0",
                borderBottom: "0.5px solid rgba(232,228,216,0.07)",
                fontSize: "0.9rem",
                color: "rgba(232,228,216,0.68)",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: "var(--gold)", marginTop: "0.15rem", flexShrink: 0 }}>✦</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/447404437994"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#25D366",
            color: "#fff",
            padding: "0.9rem 2.25rem",
            fontSize: "0.92rem",
            fontWeight: 500,
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          Message us to book →
        </a>
      </div>
    </section>
  );
}
