import Reveal from "./Reveal";

export default function SoundSection() {
  return (
    <Reveal className="flex flex-col gap-6">
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        I&apos;ve been making music about as long as I&apos;ve been making games,
        from band-room beginnings to whatever this is now. Here&apos;s the latest.
      </p>
      <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
        <iframe
          title="Navid Kabir on SoundCloud"
          width="100%"
          height="420"
          loading="lazy"
          allow="autoplay"
          className="block"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/navidk0&color=%2312d9c6&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
        />
      </div>
      <a
        href="https://soundcloud.com/navidk0"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 self-start font-mono text-xs text-muted transition-colors hover:text-jade"
      >
        open soundcloud
        <span aria-hidden>→</span>
      </a>
    </Reveal>
  );
}
