import { SectionShader } from "./section-shader";
import { SectionHeading } from "./section-heading";

const rules = [
  {
    label: "Landlord — Wilkinson Rd",
    detail: "Monthly • 1st",
    amount: "SLE 1,200.00",
    dest: "Orange Money",
    on: true,
  },
  {
    label: "School fees",
    detail: "Monthly • 5th",
    amount: "SLE 180.00",
    dest: "Bank transfer",
    on: true,
  },
  {
    label: "EDSA top-up",
    detail: "Weekly • Every Friday",
    amount: "SLE 25.00",
    dest: "AfriMoney",
    on: false,
  },
];

export function AutopaySection() {
  return (
    <section id="autopay" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionShader variant="mesh" tone="violet" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Auto-pay"
            title="Bills that pay themselves, out of the right vault"
            body="Point a rule at a vault, pick a destination and a rhythm. The scheduler checks every 15 minutes, debits the vault and disburses — and refunds the vault in full if the payout fails."
          />
        </div>

        <div className="glass glass-strong sheen rounded-[32px] p-5 sm:p-7 lg:order-1">
          <div className="mb-4 flex items-baseline justify-between px-1">
            <h3 className="text-base font-extrabold">Recurring schedules</h3>
            <span className="text-xs font-semibold text-brand-light">3 rules</span>
          </div>

          <ul className="space-y-3">
            {rules.map((rule) => (
              <li
                key={rule.label}
                className="glass glass-muted sheen flex items-center justify-between gap-4 rounded-[18px] p-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-bold">{rule.label}</p>
                  <p className="mt-1 text-xs text-ink-3">
                    {rule.detail} · {rule.dest}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3.5">
                  <span className="text-[15px] font-extrabold">{rule.amount}</span>
                  <span
                    role="img"
                    aria-label={rule.on ? "Rule active" : "Rule paused"}
                    className={
                      rule.on
                        ? "btn-gloss flex h-6 w-11 items-center justify-end rounded-full p-[3px]"
                        : "flex h-6 w-11 items-center rounded-full border border-white/10 bg-white/[0.07] p-[3px]"
                    }
                  >
                    <span className="h-[18px] w-[18px] rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-5 px-1 text-[13px] leading-relaxed text-ink-3">
            Destinations: Orange Money, AfriMoney, or a Sierra Leonean bank account.
          </p>
        </div>
      </div>
    </section>
  );
}
