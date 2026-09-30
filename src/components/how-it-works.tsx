import { SectionHeading } from "./section-heading";
import { SectionShader } from "./section-shader";

/** A miniature of the create-vault form. */
function CreateVaultVisual() {
  return (
    <div className="glass glass-muted sheen rounded-2xl p-4">
      {[
        ["Vault name", "Dream House Fund"],
        ["Target amount", "SLE 8,000.00"],
        ["Release date", "15 Dec 2026"],
      ].map(([label, value]) => (
        <div key={label} className="mb-2.5 last:mb-0">
          <p className="text-[10px] text-ink-3">{label}</p>
          <p className="mt-0.5 text-[13px] font-bold">{value}</p>
        </div>
      ))}
      <div className="mt-3 rounded-full border border-[rgba(251,154,60,0.35)] bg-[rgba(251,154,60,0.14)] px-3 py-1.5 text-center text-[10px] font-bold text-warning">
        10% early withdrawal penalty
      </div>
    </div>
  );
}

/** A miniature dial pad with the payment code. */
function DialVisual() {
  return (
    <div className="glass glass-muted sheen rounded-2xl p-4">
      <p className="text-center font-mono text-[15px] font-bold tracking-tight">
        *715*1*0123456*250#
      </p>
      <div className="mx-auto mt-3 grid w-fit grid-cols-3 gap-1.5">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((key) => (
          <span
            key={key}
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-[11px] font-bold text-ink-2"
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
}

/** A miniature of the recurring-rules list. */
function AutoPayVisual() {
  return (
    <div className="glass glass-muted sheen rounded-2xl p-4">
      {[
        ["Landlord", "Monthly · 1st", "SLE 1,200.00"],
        ["School fees", "Monthly · 5th", "SLE 180.00"],
        ["EDSA top-up", "Weekly · Fri", "SLE 25.00"],
      ].map(([label, when, amount]) => (
        <div
          key={label}
          className="mb-2 flex items-center justify-between gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2 last:mb-0"
        >
          <div className="min-w-0">
            <p className="truncate text-[11px] font-bold">{label}</p>
            <p className="text-[9px] text-ink-3">{when}</p>
          </div>
          <span className="shrink-0 text-[11px] font-extrabold">{amount}</span>
        </div>
      ))}
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Set the date, name the goal",
    body: "Give the vault a name, a target and an exact release date. Until that moment the balance is untouchable.",
    visual: <CreateVaultVisual />,
  },
  {
    n: "02",
    title: "Dial the code, fund the vault",
    body: "Every vault gets its own USSD payment code. Dial it from Orange Money or AfriMoney on any handset.",
    visual: <DialVisual />,
  },
  {
    n: "03",
    title: "Let it run",
    body: "Auto-pay pushes rent, school fees or a utility bill out of the vault on schedule. Auto-save tops it back up.",
    visual: <AutoPayVisual />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionShader variant="mesh" tone="violet" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps, then it runs itself"
          body="No spreadsheets, no reminders to ignore. You set the rules once and the vault enforces them."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="glass sheen card-lift rounded-[28px] p-7">
              <div className="flex items-center gap-3">
                <span className="btn-gloss grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-[13px] font-bold">
                  {step.n}
                </span>
                <div className="rule-fade flex-1" />
              </div>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{step.body}</p>

              <div className="mt-6">{step.visual}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
