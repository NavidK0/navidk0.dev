import { games, type Game } from "@/lib/content";
import Reveal from "./Reveal";

const accentText: Record<Game["accent"], string> = {
  teal: "text-jade",
  coral: "text-coral",
  violet: "text-iris",
  gold: "text-gold",
  bone: "text-bone",
};

const accentBorder: Record<Game["accent"], string> = {
  teal: "hover:border-jade/40",
  coral: "hover:border-coral/40",
  violet: "hover:border-iris/40",
  gold: "hover:border-gold/40",
  bone: "hover:border-bone/40",
};

// Green means you can go use it right now, warm means it is being worked on,
// muted means it is over. Nothing here may read brighter than the studio does.
const statusText: Record<Game["status"], string> = {
  Live: "text-jade",
  Released: "text-jade",
  "Coming soon": "text-gold",
  "In development": "text-coral",
  Archived: "text-muted",
  "Rest in peace": "text-muted",
};

export default function WorkSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {games.map((game, i) => {
        const inner = (
          <>
            <div className="flex items-center justify-between">
              <span className={`font-mono text-xs ${accentText[game.accent]}`}>
                {game.tag}
              </span>
              <span
                className={`font-mono text-[0.7rem] uppercase tracking-wider ${statusText[game.status]}`}
              >
                ● {game.status}
              </span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold text-ink">
              {game.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {game.blurb}
            </p>
            {(game.when || game.href) && (
              <div className="mt-6 flex items-center justify-between gap-3 font-mono text-xs text-muted">
                <span>{game.when}</span>
                {game.href && (
                  <span className="inline-flex items-center gap-1 group-hover:text-ink">
                    open
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                )}
              </div>
            )}
          </>
        );

        const className = `group flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:bg-elevated ${accentBorder[game.accent]}`;

        return (
          <Reveal key={game.title} delay={i * 0.06} className="h-full">
            {game.href ? (
              <a href={game.href} target="_blank" rel="noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <div className={className}>{inner}</div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
