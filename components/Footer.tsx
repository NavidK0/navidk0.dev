export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center">
        <p className="font-mono text-xs text-muted">
          © {year} Navid Kabir, still making things.
        </p>
      </div>
    </footer>
  );
}
