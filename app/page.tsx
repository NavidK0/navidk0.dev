import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WorkSection from "@/components/WorkSection";
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
        <Section id="work" index="01" eyebrow="things I've made" title="Work">
          <WorkSection />
        </Section>
        <Section id="sound" index="02" eyebrow="things in my head" title="Sound">
          <SoundSection />
        </Section>
        <Section id="words" index="03" eyebrow="things I'm figuring out" title="Words">
          <WordsSection />
        </Section>
        <Section id="about" index="04" eyebrow="the person behind it" title="About">
          <AboutSection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
