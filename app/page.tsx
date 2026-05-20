import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Guarantee from "./components/Guarantee";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FadeIn>
          <HowItWorks />
        </FadeIn>
        <FadeIn delay={100}>
          <Guarantee />
        </FadeIn>
        <div style={{ height: "5rem" }} />
        <FadeIn>
          <Pricing />
        </FadeIn>
        <FadeIn>
          <FAQ />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
