/* eslint-disable @next/next/no-img-element */
import { profile, socials } from "@/lib/content";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
      <Reveal className="flex flex-col items-start gap-6">
        <img
          src="/images/navid_avatar.gif"
          alt="Navid Kabir"
          className="h-28 w-28 rounded-2xl border border-line object-cover"
        />
        <div className="flex flex-wrap gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-jade/50"
            >
              <img
                src={social.icon}
                alt=""
                className="h-4 w-4 opacity-60 invert transition group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08} className="flex flex-col gap-6">
        <p className="text-lg leading-relaxed text-ink/90">{profile.blurb}</p>
        <p className="leading-relaxed text-muted">
          I co-founded N-GON Interactive, where I&apos;m the CEO. I&apos;ve always
          seen games as the ultimate art form and wanted to make my own. I&apos;m
          also into 3D printing, 3D modeling, and animation.
        </p>
        <div>
          <a
            href={`mailto:${profile.email}?subject=Hello%20from%20navidk0.dev`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-night transition-transform hover:scale-[1.03]"
          >
            Say hello
            <span aria-hidden>→</span>
          </a>
          <p className="mt-3 font-mono text-xs text-muted">{profile.email}</p>
        </div>
      </Reveal>
    </div>
  );
}
