import { ChefHat, Truck, Store, Target, type LucideIcon } from "lucide-react";
import { LeadForm } from "./LeadForm";

interface Sample {
  vertical: string;
  Icon: LucideIcon;
  stat: string;
  tunedTo: string;
  body: React.ReactNode;
}

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-brand/10 px-1 font-semibold text-brand">{children}</mark>
  );
}

const SAMPLES: Sample[] = [
  {
    vertical: "Restaurant",
    Icon: ChefHat,
    stat: "replied in 9 min",
    tunedTo: "deposit-to-payroll gap",
    body: (
      <>
        Hey — Tony w/ Summit. Most owners I work with aren&rsquo;t short on covers,
        they&rsquo;re short on cash <Mark>between the deposit and payroll</Mark>. We bridge
        that — funded a walk-in cooler for a spot down the street{" "}
        <Mark>without touching their credit line</Mark>. Worth a look?
      </>
    ),
  },
  {
    vertical: "Trucking",
    Icon: Truck,
    stat: "5.8x reply rate",
    tunedTo: "factoring lag",
    body: (
      <>
        Hey — Dana w/ Summit. Owner-ops tell me the same thing: load&rsquo;s booked, but
        you&rsquo;re floating fuel and a <Mark>$4k repair</Mark> while{" "}
        <Mark>factoring drags 30 days</Mark>. We advance against what&rsquo;s already
        coming, so a breakdown doesn&rsquo;t park the truck. Open to terms?
      </>
    ),
  },
  {
    vertical: "Retail",
    Icon: Store,
    stat: "replied same day",
    tunedTo: "pre-season inventory",
    body: (
      <>
        Hey — Marcus w/ Summit. Q4 is won in Q3 — but{" "}
        <Mark>the inventory order lands before the sales do</Mark>. We front the buy so
        you&rsquo;re not choosing between stock and rent. Funded a dozen shops{" "}
        <Mark>ahead of the holiday rush</Mark>. Quick look?
      </>
    ),
  },
];

export function SampleSequences() {
  return (
    <section
      id="sample"
      className="border-t border-white/10 bg-[radial-gradient(700px_400px_at_50%_120%,var(--color-backdrop-2),var(--color-backdrop))]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-bright">
          Sample sequences · names changed
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          See exactly what we&rsquo;d send.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-faint">
          No opt-in, no waiting on a text. Here&rsquo;s the real structure we write — tuned
          to how each kind of merchant actually thinks about cash.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLES.map((s) => (
            <div key={s.vertical} className="rounded-2xl bg-screen p-5 text-ink">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1 text-xs font-bold text-brand">
                  <s.Icon size={14} /> {s.vertical}
                </span>
                <span className="text-xs font-semibold text-ink-faint">{s.stat}</span>
              </div>
              <div className="mt-3 rounded-2xl rounded-tl-md border border-black/10 bg-white p-4 text-[14.5px] leading-relaxed">
                {s.body}
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
                <Target size={14} className="text-brand" /> Tuned to {s.tunedTo}
              </p>
            </div>
          ))}
        </div>

        {/* Soft, honest lead capture — no auto-text */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <h3 className="font-display text-2xl font-semibold">
                Want one built for your book?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-faint">
                Tell us your vertical — we&rsquo;ll build a sample and walk you through it. A
                real person, no autodialer.
              </p>
            </div>
            <div className="w-full max-w-md">
              <LeadForm cta="Let's talk" />
              <p className="mt-3 text-xs leading-relaxed text-ink-faint">
                We&rsquo;ll reach out within one business day. No spam, no autodialer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
