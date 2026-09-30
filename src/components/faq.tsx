import { SectionHeading } from "./section-heading";
import { SectionShader } from "./section-shader";

const faqs = [
  {
    q: "What happens if I need the money early?",
    a: "You can request an early withdrawal, but a 10% penalty comes off the amount you pull out. That friction is the point — the vault is there to make spending the hard option.",
  },
  {
    q: "Which currency does Monime use?",
    a: "Sierra Leonean Leone (SLE) is the primary currency throughout the app, with USD available as a secondary display option.",
  },
  {
    q: "Do I need a smartphone to deposit?",
    a: "Only to set up the vault. Deposits are made by dialling a USSD payment code, which works on any handset with Orange Money or AfriMoney — no data connection required.",
  },
  {
    q: "Where can auto-pay send money?",
    a: "To an Orange Money or AfriMoney number, or to a Sierra Leonean bank account. You pick the destination when you create the rule and can pause it at any time.",
  },
  {
    q: "What if an automatic payment fails?",
    a: "The debit is reversed and the full amount goes back into the source vault. You'll see the failure on the rule and in your transaction history.",
  },
  {
    q: "When can I get it?",
    a: "Monime is in active development. Join the early-access list and we'll get in touch when builds go out to testers in Sierra Leone.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionShader variant="orb" tone="blue" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions worth asking"
          body="Everything people ask before they lock money away for the first time."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="glass sheen card-lift group h-fit rounded-[22px] px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-bold">
                {faq.q}
                {/* Plus that becomes a minus when the item opens. */}
                <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition-colors group-open:border-white/20 group-open:bg-brand">
                  <span className="absolute h-[1.5px] w-3.5 rounded-full bg-current" />
                  <span className="absolute h-[1.5px] w-3.5 rotate-90 rounded-full bg-current transition-transform duration-200 group-open:rotate-0" />
                </span>
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
