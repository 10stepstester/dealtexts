import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Crosshair,
  ShieldCheck,
  TrendingDown,
  MessagesSquare,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SmsThread } from "../components/SmsThread";
import { LeadForm } from "../components/LeadForm";

const STEPS = [
  {
    n: "1",
    title: "Tell us your offer + vertical.",
    body: "Funding range, position, the merchant types you work — restaurants, trucking, retail, contractors. We never touch your list or your numbers.",
  },
  {
    n: "2",
    title: "We hand you the sequence.",
    body: "A full responsive thread: opener, the three replies that actually come back, objection pre-frames, and the line that moves them to a call. Drop-in ready.",
  },
  {
    n: "3",
    title: "You send it from your own setup.",
    body: "Your 10DLC, your opt-ins, your STOP/HELP. The words do the lifting; your platform stays in control.",
  },
];

const LEVERS = [
  {
    title: "Pattern interrupt",
    body: "An opener that doesn't read like a pitch, so it clears the 2-second delete reflex.",
  },
  {
    title: "Specificity as proof",
    body: "Their vertical, their cash-flow timing, their numbers. Relevance beats hype every time.",
  },
  {
    title: "Objection pre-framing",
    body: "The “rates,” “I'm fine,” and “who is this” responses are answered before they're raised.",
  },
  {
    title: "Loss-aversion close",
    body: "Framed around the cost of the gap they're already living with — not the product you're selling.",
  },
  {
    title: "The reply ladder",
    body: "Every merchant reply has a tuned next message, so the thread keeps moving toward a call instead of dying.",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="DealTexts — Buyer-Psychology SMS Sequences for MCA Brokers"
        description="Close 30% more MCA deals from leads you already have. DealTexts writes buyer-psychology text sequences that plug into GoHighLevel, Centrex, or your dialer — built to run inside your compliant 10DLC setup."
        path="/"
      />

      <div className="relative overflow-hidden bg-[radial-gradient(900px_500px_at_50%_-5%,var(--color-backdrop-2),var(--color-backdrop))]">
        <Nav />

        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pt-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-bright">
              For MCA brokers, ISOs &amp; funders
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
              Same leads.
              <br />
              Same dialer.
              <br />
              <span className="text-brand-bright">30% more closings.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-faint">
              DealTexts writes the buyer-psychology text sequences that make merchants
              actually reply — then hand you a warm conversation instead of a dead
              &ldquo;STOP.&rdquo; Plugs into the platform you already send from.
            </p>

            <div className="mt-8 max-w-md">
              <LeadForm />
              <p className="mt-3 text-xs leading-relaxed text-ink-faint">
                Works with GoHighLevel, Centrex, McaTexts, and any 10DLC-registered
                sender. We write the words — you keep your numbers, your CRM, your
                compliance.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" /> 5–7x reply
                rate
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" /> 30% more
                closings
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bright" /> $0 new lead
                spend
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <SmsThread />
          </div>
        </section>
      </div>

      {/* PROBLEM */}
      <section className="border-t border-white/10 bg-backdrop">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <TrendingDown className="text-brand-bright" size={28} />
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Blasting more isn&rsquo;t the edge anymore. Closing more is.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-faint">
            <p>
              Carriers now filter 100% of unregistered traffic. T-Mobile charges you on
              inbound. And as of January 2026, you can&rsquo;t share, broker, or buy
              consent — every brand needs its own. The volume game is getting taxed,
              filtered, and fined out of existence.
            </p>
            <p>
              The brokers still winning aren&rsquo;t sending more texts. They&rsquo;re
              sending <span className="font-semibold text-screen">better ones</span> —
              messages tuned to how a merchant actually decides, so a higher slice of the
              same list replies, stays in the thread, and books.
            </p>
            <p className="text-screen">
              That&rsquo;s the only lever left that scales:{" "}
              <span className="font-semibold text-brand-bright">
                conversion per message.
              </span>{" "}
              That&rsquo;s what DealTexts is.
            </p>
          </div>
          <Link
            to="/the-loophole-is-closed"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-bright transition hover:text-screen"
          >
            Read: what MCA texting looks like now <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-white/10 bg-backdrop">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            You already have the leads and the sender. We supply the part that converts.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 font-display text-lg font-semibold text-brand-bright">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-faint">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PSYCHOLOGY */}
      <section className="border-t border-white/10 bg-backdrop">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Zap className="text-brand-bright" size={28} />
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Engineered around how a merchant decides — not how a script reads.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-faint">
            Generic MCA texts get ignored because they sound like every other funder.
            DealTexts sequences are built on the behavioral levers that move a business
            owner who&rsquo;s been burned before.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEVERS.map((l) => (
              <div
                key={l.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <Crosshair size={20} className="text-brand-bright" />
                <h3 className="mt-3 text-base font-bold">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-faint">{l.body}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl border border-brand/25 bg-brand/10 p-6">
              <MessagesSquare size={20} className="text-brand-bright" />
              <p className="mt-3 text-base font-semibold leading-snug">
                Conversion copy with a spine — not &ldquo;spray and pray.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="border-t border-white/10 bg-backdrop">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <ShieldCheck className="text-brand-bright" size={28} />
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Built to run inside your compliant setup — not around it.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-faint">
            <p>
              We don&rsquo;t send your texts, so we don&rsquo;t make promises about your
              numbers. What we do: write sequences designed to{" "}
              <span className="font-semibold text-screen">
                survive carrier filtering and fit a registered 10DLC campaign
              </span>{" "}
              — opt-out language intact, no consent-broker shortcuts, nothing that gets
              your brand flagged.
            </p>
            <p>
              You stay in control of consent, registration, and opt-outs. We just make
              sure the message that goes out is the one that converts.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="sample"
        className="border-t border-white/10 bg-[radial-gradient(700px_400px_at_50%_120%,var(--color-backdrop-2),var(--color-backdrop))]"
      >
        <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            See a sequence built for your vertical — free.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-faint">
            Drop your number. We&rsquo;ll text you a sample DealTexts sequence for the
            merchant type you fund most, so you can see the difference before you decide.
          </p>
          <div className="mx-auto mt-8 max-w-md text-left">
            <LeadForm />
            <p className="mt-3 text-xs leading-relaxed text-ink-faint">
              By submitting you agree to receive a sample sequence by text. Msg &amp; data
              rates may apply. Reply STOP to opt out.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
