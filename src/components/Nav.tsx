import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export function Nav() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <Link to="/" className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-bright">
          <MessageSquare size={15} className="text-screen" strokeWidth={2.6} />
        </span>
        <span className="text-lg font-bold tracking-tight">DealTexts</span>
      </Link>
      <a
        href="#sample"
        className="text-sm font-semibold text-brand-bright transition hover:text-screen"
      >
        Get Started →
      </a>
    </header>
  );
}
