import { notes } from "@/lib/content";
import Reveal from "./Reveal";

export default function WordsSection() {
  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          A place for devlogs, notes on games and music, and whatever I&apos;m
          figuring out. Longer essays are on the way.
        </p>
      </Reveal>
      <div className="flex flex-col divide-y divide-line border-y border-line">
        {notes.map((note, i) => (
          <Reveal key={note.title} delay={i * 0.06}>
            <article className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <time className="font-mono text-xs text-jade sm:w-28 sm:shrink-0">
                {note.date}
              </time>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {note.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
                  {note.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
