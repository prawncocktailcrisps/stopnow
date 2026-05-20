const items = [
  { text: '"A revelation. I haven\'t drunk since, and I don\'t miss it at all."', attr: "— Client" },
  { text: "Fully confidential · Individually tailored · Globally available", attr: "" },
  { text: '"A revelation. I haven\'t drunk since, and I don\'t miss it at all."', attr: "— Client" },
  { text: "Pay in GBP, USD or EUR · Powered by PayPal", attr: "" },
  { text: '"A revelation. I haven\'t drunk since, and I don\'t miss it at all."', attr: "— Client" },
  { text: "Sessions available in most time zones · Book via WhatsApp", attr: "" },
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        borderBottom: "0.5px solid var(--border)",
        padding: "1.75rem 0",
        overflow: "hidden",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: "4rem",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              flexShrink: 0,
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              color: "rgba(232,228,216,0.38)",
              fontSize: "0.93rem",
            }}
          >
            {item.text}
            {item.attr && (
              <span
                style={{
                  fontStyle: "normal",
                  fontFamily: "var(--font-dm, sans-serif)",
                  color: "var(--gold)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  marginLeft: "0.75rem",
                }}
              >
                {item.attr}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
