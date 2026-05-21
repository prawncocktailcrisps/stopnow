"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What happens in a counselling session?",
    a: "In a one to one video call, our counsellor will ask you about your specific circumstances and your current drinking habits. The counsellor will then talk to you about the beliefs that you hold about alcohol, and work with you to change those beliefs. The session generally takes a few hours, with breaks. At the end of the session you will be confident to live your life without drinking. You are free throughout the session to ask questions and the session will be tailored to your personal circumstances. The session is by video call and we ask that you call from a location where you will be free of distractions, no family, no phones, no interruption.",
  },
  {
    q: "How does the guarantee work?",
    a: "If you finish the session still convinced you want to keep drinking, we refund you in full — no questions asked. We can't hold your hand forever, but we can permanently change what you believe about alcohol. The vast majority of clients leave as confident non-drinkers.",
  },
  {
    q: "Why do I drink and how can Stop Now change that?",
    a: "Drinking is culturally reinforced as positive — through social rituals, marketing, and media. Alcohol is also chemically addictive, causing increased consumption over time. Our session gives you the tools to understand exactly how the substance works on your body and mind, replacing the desire to drink with a genuine desire to avoid it.",
  },
  {
    q: "What if I only want to cut down?",
    a: "Because alcohol is an addictive substance, cutting down often leads to gradual escalation. Our session gives you the understanding and conviction to stop entirely — which turns out to be far easier than moderating once you see alcohol for what it really is.",
  },
  {
    q: "Is there any follow-up after the session?",
    a: "Yes — we email each client a written summary of the session with the key points as a lasting reminder. We also welcome messages if you'd like to share how things are going.",
  },
  {
    q: "I'm not in the UK — can I still book?",
    a: "Absolutely. We work globally and accommodate most time zones. Message us on WhatsApp to arrange timing. Payment can be made in pounds, dollars or euros via PayPal.",
  },
  {
    q: "How do I book?",
    a: "Message us on WhatsApp at +44 7404 437994. We'll arrange a time that suits you, send an invoice via PayPal, and add a calendar entry. Sessions are conducted in English.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "5rem 2.5rem",
        maxWidth: 820,
        margin: "0 auto",
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
        Questions
      </p>
      <h2
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          lineHeight: 1.2,
          marginBottom: "2.5rem",
        }}
      >
        Frequently asked
      </h2>

      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{ borderBottom: "0.5px solid var(--border)" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.5rem 0",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text)",
              gap: "1rem",
              textAlign: "left",
              fontFamily: "var(--font-dm, sans-serif)",
            }}
            aria-expanded={open === i}
          >
            {faq.q}
            <span
              style={{
                color: "var(--gold)",
                fontSize: "1.2rem",
                flexShrink: 0,
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                display: "inline-block",
              }}
              aria-hidden
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? 400 : 0,
              overflow: "hidden",
              transition: "max-height 0.35s ease",
            }}
          >
            <p
              style={{
                paddingBottom: "1.5rem",
                color: "var(--text-muted)",
                fontSize: "0.93rem",
                lineHeight: 1.75,
              }}
            >
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
