import { Sparkles, Target } from "lucide-react";

/**
 * The signature visual: a DealTexts-drafted SMS, tuned to a vertical.
 * Cream "phone screen" card lifted from the original concept artifact.
 */
export function SmsThread() {
  return (
    <div className="w-full max-w-sm rounded-[28px] bg-screen p-5 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] ring-1 ring-black/40">
      {/* header row */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.13em] text-ink-faint">
          DealTexts drafted
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand">
          <Sparkles size={13} /> AI
        </span>
      </div>

      {/* message bubble */}
      <div className="mt-4 rounded-2xl rounded-tl-md border border-black/10 bg-white p-4 text-[15px] leading-relaxed shadow-[0_12px_28px_-18px_rgba(15,107,79,0.4)]">
        Hey — Marcus w/ Keystone. The clinics I work with all hit the same wall: you
        deliver care now, but{" "}
        <mark className="rounded bg-brand/10 px-1 font-semibold text-brand">
          insurance reimburses 60–90 days out
        </mark>
        , so a{" "}
        <mark className="rounded bg-brand/10 px-1 font-semibold text-brand">
          second-location buildout
        </mark>{" "}
        stalls on cash flow, not demand. We bridge that gap so you&rsquo;re not financing
        growth{" "}
        <mark className="rounded bg-brand/10 px-1 font-semibold text-brand">
          out of your own paycheck
        </mark>
        . Open to a quick look at terms?
      </div>

      {/* tuned-to callout */}
      <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-brand/20 bg-brand/10 px-3.5 py-2.5">
        <Target size={16} className="text-brand" strokeWidth={2.2} />
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-faint">
          Tuned to
        </span>
        <span className="text-sm font-bold text-brand">Reimbursement timing</span>
      </div>
    </div>
  );
}
