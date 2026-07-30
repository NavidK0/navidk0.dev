import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WorkSection from "@/components/WorkSection";
import CodeSection from "@/components/CodeSection";
import SoundSection from "@/components/SoundSection";
import WordsSection from "@/components/WordsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Section id="work" eyebrow="things I've made" title="Work">
          <WorkSection />
        </Section>
        <Section id="code" eyebrow="things I've built in the open" title="Code">
          <CodeSection />
        </Section>
        <Section id="sound" eyebrow="things in my head" title="Sound">
          <SoundSection />
        </Section>
        <Section id="words" eyebrow="things I'm figuring out" title="Words">
          <WordsSection />
        </Section>
        <Section id="about" eyebrow="the person behind it" title="About">
          <AboutSection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
