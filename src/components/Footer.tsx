import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-semibold text-screen">DealTexts</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/the-loophole-is-closed" className="transition hover:text-screen">
            The loophole is closed
          </Link>
          <a href="#sample" className="transition hover:text-screen">
            Get a sample
          </a>
        </nav>
        <p className="max-w-md text-xs leading-relaxed">
          DealTexts provides messaging copy and sequence strategy. Sending, consent
          collection, and 10DLC/TCPA compliance remain the responsibility of the sender.
        </p>
      </div>
    </footer>
  );
}
