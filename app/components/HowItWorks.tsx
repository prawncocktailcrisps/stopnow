const steps = [
  {
    num: "Intro",
    title: "Your story",
    body: "Your counsellor will listen to your story to understand your specific drinking habits and personal circumstances — no judgement.",
  },
  {
    num: "The story",
    title: "The truth about alcohol",
    body: "Together you'll explore the myths and false beliefs that cause drinkers to consume alcohol — and dismantle them one by one.",
  },
  {
    num: "New thinking",
    title: "Belief change",
    body: "As the session progresses you will replace the desire to drink with a genuine, lasting understanding of the detrimental effect of alcohol.",
  },
  {
    num: "Conclusion",
    title: "Confident non-drinker",
    body: "By the end of the session you will feel free of the desire to drink, and the confidence to live without alcohol.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "5rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}
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
        The method
      </p>
      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          lineHeight: 1.2,
          maxWidth: 500,
          marginBottom: "3.5rem",
        }}
      >
        No willpower required. We change what you believe.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1px",
          background: "rgba(232,228,216,0.1)",
          border: "0.5px solid rgba(232,228,216,0.1)",
        }}
      >
        {steps.map((s) => (
          <div
            key={s.num}
            style={{
              background: "var(--bg)",
              padding: "2.5rem 2rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "3.2rem",
                color: "rgba(196,169,107,0.18)",
                lineHeight: 1,
                marginBottom: "1.25rem",
              }}
            >
              {s.num}
            </div>
            <div
              style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.75rem", color: "var(--text)" }}
            >
              {s.title}
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
