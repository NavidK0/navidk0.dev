import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WorkSection from "@/components/WorkSection";
import CodeSection from "@/components/CodeSection";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Section id="work" title="Work">
          <WorkSection />
        </Section>
        <Section id="code" title="Code">
          <CodeSection />
        </Section>
        <Section id="music" title="Music">
          <MusicSection />
        </Section>
        <Section id="about" title="About">
          <AboutSection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
