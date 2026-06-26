import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Seo } from "../components/Seo";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export default function Article() {
  return (
    <>
      <Seo
        title="The Lead-Gen Loophole Is Closed. Here's What MCA Texting Looks Like Now."
        description="The FCC's one-to-one consent rule and full carrier A2P filtering changed MCA texting in 2026. A plain-English read on what actually changed — and what still works."
        path="/the-loophole-is-closed"
      />

      <div className="bg-[radial-gradient(900px_500px_at_50%_-5%,var(--color-backdrop-2),var(--color-backdrop))]">
        <Nav />
        <article className="mx-auto max-w-2xl px-5 pb-10 pt-8 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-bright transition hover:text-screen"
          >
            <ArrowLeft size={15} /> Back
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-brand-bright">
            Compliance · 2026
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            The lead-gen loophole is closed. Here&rsquo;s what MCA texting looks like now.
          </h1>
        </article>
      </div>

      <div className="bg-backdrop">
        <article className="mx-auto max-w-2xl space-y-6 px-5 py-14 text-lg leading-relaxed text-ink-faint sm:px-8">
          <p>
            If you&rsquo;ve been funding deals for more than a year, you&rsquo;ve already
            felt it — the same blast that pulled 4% replies in 2023 now pulls crickets, and
            half your numbers are cooked by Thursday. You&rsquo;re not imagining it, and
            it&rsquo;s not your list going stale. The rails changed underneath you.
            Here&rsquo;s the actual state of play, minus the compliance-consultant theater.
          </p>

          <H2>1. Unregistered traffic is just gone</H2>
          <p>
            Since February 2025, the carriers don&rsquo;t <em>filter</em> unregistered A2P
            — they drop it. No soft warning, no degraded delivery. If the campaign behind
            your number isn&rsquo;t registered with The Campaign Registry, those texts
            don&rsquo;t land. This is why rotating cheap, unregistered DIDs stopped working:
            you&rsquo;re not getting throttled, you&rsquo;re getting deleted before the
            merchant&rsquo;s phone ever buzzes.
          </p>
          <p>
            The shops still getting delivery are running registered 10DLC. That&rsquo;s not
            a virtue thing — it&rsquo;s the only traffic the carriers carry now.
          </p>

          <H2>2. The big one: you can&rsquo;t share consent anymore</H2>
          <p>
            This is the change most brokers underestimate. The FCC&rsquo;s{" "}
            <strong className="font-semibold text-screen">one-to-one consent rule</strong>{" "}
            took effect January 2026, and it kills the move the entire MCA lead economy was
            built on: buying or sharing consent across brands.
          </p>
          <p>
            Before, a lead-gen site could collect one &ldquo;yes&rdquo; and sell it to a
            dozen funders. Now, consent has to be obtained{" "}
            <strong className="font-semibold text-screen">
              directly by the specific brand that sends the message
            </strong>{" "}
            — it can&rsquo;t be brokered, bundled, or passed down an affiliate chain.
            Regulators called it closing the &ldquo;lead-generator loophole,&rdquo; and
            that&rsquo;s exactly what it is. If the consent didn&rsquo;t come to{" "}
            <em>your</em> brand, for <em>your</em> messages, it doesn&rsquo;t count.
          </p>
          <p className="text-screen">
            Translation: the aged-lead list you bought last quarter is a liability, not an
            asset, the second you text it.
          </p>

          <H2>3. The fines are per-message, and they stack</H2>
          <p>
            TCPA damages run{" "}
            <strong className="font-semibold text-screen">
              $500–$1,500 per text, with no cap.
            </strong>{" "}
            Not per campaign — per message. A single bad blast to a few thousand numbers is
            existential math, and plaintiffs&rsquo; attorneys run this as a business. The
            &ldquo;true P2P&rdquo; carve-out (a human firing each message by hand) still
            exists, but the moment your platform automates anything beyond what one person
            could physically send, that label won&rsquo;t hold up.
          </p>
          <p>
            And T-Mobile now bills you on <em>inbound</em> too, so even the replies you want
            cost you.
          </p>

          <H2>4. So what actually still works?</H2>
          <p>
            The volume game is over — taxed, filtered, and fined into the ground.
            What&rsquo;s left is the only lever that was ever durable:{" "}
            <strong className="font-semibold text-screen">
              send to people you can stand behind, and make every message convert harder.
            </strong>
          </p>
          <ul className="space-y-3 pl-5">
            <li className="list-disc">
              Registered 10DLC, your own consent trail, opt-outs honored. Boring,
              non-negotiable, table stakes.
            </li>
            <li className="list-disc">
              And then — the part nobody&rsquo;s optimizing — the message itself. When you
              can&rsquo;t win on volume, you win on reply rate. A sequence tuned to how a
              specific merchant decides will out-close a generic blast at a fraction of the
              send count, which also keeps your number clean and your spend down.
            </li>
          </ul>
          <p>
            That second part is what we do at DealTexts. We don&rsquo;t send your texts or
            touch your numbers — you keep your stack and your compliance. We write the
            buyer-psychology sequences that make the leads you <em>can</em> legally reach
            actually reply and book. In a world where you can send fewer messages, every
            one has to land.
          </p>
          <p className="text-screen">
            The brokers who&rsquo;ll still be here in a year already get this. The loophole
            closing didn&rsquo;t kill MCA texting — it just ended the lazy version of it.
          </p>

          {/* CTA */}
          <div className="!mt-12 rounded-2xl border border-brand/25 bg-brand/10 p-6 text-center">
            <p className="text-lg font-semibold text-screen">
              Want to see what a tuned sequence looks like for your vertical?
            </p>
            <Link
              to="/#sample"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-bright px-5 py-3 text-base font-bold text-screen transition hover:bg-brand"
            >
              Get a free sample <ArrowRight size={18} strokeWidth={2.4} />
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="!mt-12 font-display text-2xl font-semibold leading-tight text-screen sm:text-3xl">
      {children}
    </h2>
  );
}
