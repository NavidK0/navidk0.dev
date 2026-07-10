import AudioVisualizer from "./AudioVisualizer";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Musical background: waveform at z-0, play control at z-20, text at z-10. */}
      <AudioVisualizer />
      <div className="hero-veil pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-jade">
          {profile.handle}
        </p>
        <h1 className="mt-5 font-display text-[clamp(3rem,10vw,7.5rem)] font-bold leading-[0.92] tracking-tight text-ink">
          Navid<span className="text-jade">.</span>Kabir
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-jade px-6 py-3 text-sm font-semibold text-night transition-transform hover:scale-[1.03]"
          >
            See the work
          </a>
          <a
            href="#sound"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-jade/50 hover:text-jade"
          >
            Hear the music
          </a>
        </div>
      </div>
    </section>
  );
}
