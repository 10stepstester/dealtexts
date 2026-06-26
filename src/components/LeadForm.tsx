import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "done" | "error";

export function LeadForm() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!phone.trim() || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json().catch(() => ({ success: false }));
      setStatus(data.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
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
      <div className="flex-1">
        <input
          type="tel"
          inputMode="tel"
          required
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="(555) 123-4567"
          aria-label="Your mobile number"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-screen placeholder:text-ink-faint focus:border-brand-bright focus:outline-none focus:ring-2 focus:ring-brand-bright/40"
        />
        {status === "error" && (
          <p className="mt-2 text-sm text-red-400">
            Something went wrong — please try again.
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-bright px-5 text-base font-bold text-screen transition hover:bg-brand disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Text me a sample <ArrowRight size={18} strokeWidth={2.4} />
          </>
        )}
      </button>
    </form>
  );
}
