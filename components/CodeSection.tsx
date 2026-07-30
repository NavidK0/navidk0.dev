import { repos, type Repo } from "@/lib/content";
import Reveal from "./Reveal";

const langText: Record<Repo["lang"], string> = {
  "C#": "text-iris",
  Java: "text-gold",
  TypeScript: "text-jade",
};

export default function CodeSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="border-t border-line">
        {repos.map((repo, i) => (
          <Reveal key={repo.href} delay={i * 0.03}>
            <a
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 border-b border-line px-2 py-5 transition-colors hover:bg-elevated/40 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span
                className={`shrink-0 font-mono text-xs sm:w-24 ${langText[repo.lang]}`}
              >
                {repo.lang}
              </span>
              <span className="flex-1">
                <span className="block font-display font-semibold text-ink transition-colors group-hover:text-jade">
                  {repo.name}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  {repo.blurb}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-4 font-mono text-xs text-muted">
                {repo.archived && <span>archived</span>}
                <span
                  aria-hidden
                  className="hidden transition-transform group-hover:translate-x-0.5 sm:inline"
                >
                  →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <a
          href="https://github.com/NavidK0"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-jade"
        >
          the rest is on github
          <span aria-hidden>→</span>
        </a>
      </Reveal>
    </div>
  );
}
