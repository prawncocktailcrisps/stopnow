import Link from "next/link";

export default function Hero() {
  const stats = [
    { num: "½", label: "Day session" },
    { num: "1:1", label: "Video call" },
    { num: "100%", label: "Guaranteed" },
    { num: "£249", label: "50% off now" },
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "88vh",
        borderBottom: "0.5px solid var(--border)",
        position: "relative",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay so text remains readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 9, 7, 0.35)",
          zIndex: 0,
        }}
      />
      {/* Left */}
      <div
        style={{
          padding: "5rem 3.5rem 5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: "0.5px solid var(--border)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}
        >
          Guaranteed alcohol counselling
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
            lineHeight: 1.12,
            marginBottom: "2rem",
            color: "var(--text)",
          }}
        >
          One session.<br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>A lifetime</em>
          <br />
          free of alcohol.
        </h1>
        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: 420,
            marginBottom: "2.5rem",
            fontSize: "1rem",
          }}
        >
          A half-day video counselling session that permanently changes your beliefs about alcohol. No willpower. No withdrawal. No going back.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="https://wa.me/447404437994"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "0.85rem 2rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              letterSpacing: "0.03em",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>
          <a
            href="#how-it-works"
            style={{
              background: "transparent",
              color: "var(--text)",
              border: "0.5px solid rgba(232,228,216,0.35)",
              padding: "0.85rem 2rem",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            How it works
          </a>
        </div>
      </div>

      {/* Right — stat grid */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem",
          background: "radial-gradient(ellipse at 60% 40%, rgba(196,169,107,0.06) 0%, transparent 70%)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(232,228,216,0.1)",
            border: "0.5px solid rgba(232,228,216,0.1)",
            maxWidth: 360,
            width: "100%",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--bg)",
                padding: "2.25rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "2.6rem",
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(232,228,216,0.45)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
