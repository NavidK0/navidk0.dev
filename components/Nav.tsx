import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          navidk0<span className="text-jade">.</span>dev
        </a>
        <ul className="flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
