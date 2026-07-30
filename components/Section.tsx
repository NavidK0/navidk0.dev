import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:py-32">
      <Reveal>
        <div className="flex items-baseline gap-3">
          <span aria-hidden className="h-px w-6 shrink-0 bg-jade" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
