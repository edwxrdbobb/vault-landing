import { BankIcon, KeypadIcon, LockIcon, PhoneIcon, TimerIcon } from "./icons";
import { SectionShader } from "./section-shader";

const rails = [
  { icon: PhoneIcon, label: "Orange Money" },
  { icon: PhoneIcon, label: "AfriMoney" },
  { icon: BankIcon, label: "Bank transfer" },
  { icon: KeypadIcon, label: "USSD payment codes" },
  { icon: TimerIcon, label: "Scheduled payouts" },
  { icon: LockIcon, label: "Time-locked vaults" },
];

/**
 * Full-bleed scrolling rail strip. It takes the place of the "trusted by"
 * logo wall on most app landing pages — but lists the payment rails the app
 * genuinely moves money on rather than borrowed company logos.
 */
export function RailsMarquee() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.02] py-7">
      <SectionShader variant="aurora" tone="blue" />
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">
        Money moves on rails you already use
      </p>

      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track gap-12 pr-12">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={copy === 1}>
              {rails.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 whitespace-nowrap">
                  <Icon className="h-5 w-5 text-brand-light" />
                  <span className="text-[17px] font-semibold text-ink-2">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
