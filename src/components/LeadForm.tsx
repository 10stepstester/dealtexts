import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function LeadForm() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    // TODO: wire to a Vercel serverless function + Resend (or your CRM webhook).
    // For now we capture client-side and confirm.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand/10 px-5 py-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-bright">
          <Check size={18} className="text-screen" strokeWidth={3} />
        </span>
        <p className="text-sm text-screen">
          Got it — we&rsquo;ll text a sample sequence to{" "}
          <span className="font-semibold">{phone}</span> shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="tel"
        inputMode="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="(555) 123-4567"
        aria-label="Your mobile number"
        className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-screen placeholder:text-ink-faint focus:border-brand-bright focus:outline-none focus:ring-2 focus:ring-brand-bright/40"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-bright px-5 py-3.5 text-base font-bold text-screen transition hover:bg-brand"
      >
        Text me a sample <ArrowRight size={18} strokeWidth={2.4} />
      </button>
    </form>
  );
}
