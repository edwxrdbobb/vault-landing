import { CopyButton } from "./copy-button";
import { SectionShader } from "./section-shader";
import { CheckIcon, KeypadIcon } from "./icons";
import { SectionHeading } from "./section-heading";

const DEPOSIT_CODE = "*715*1*0123456*250#";

const points = [
  "One code per vault, generated the moment you create it",
  "Pay from Orange Money or AfriMoney on any handset",
  "The vault credits itself once the payment is confirmed",
];

export function UssdSection() {
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <SectionShader variant="mesh" tone="teal" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Funding"
            title="A vault you can fill from a feature phone"
            body="Deposits don't need a card or a data plan. Each vault comes with its own USSD payment code — dial it, confirm on your phone, and the balance moves."
          />

          <ul className="mt-8 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[rgba(61,214,176,0.16)] text-positive">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span className="text-[15px] leading-relaxed text-ink-2">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="glass glass-strong sheen rounded-[32px] p-7 pb-16 sm:p-9 sm:pb-20">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink-2">
                <KeypadIcon className="h-4 w-4" />
                Deposit code
              </span>
              <span className="rounded-full border border-[rgba(251,154,60,0.35)] bg-[rgba(251,154,60,0.14)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-warning">
                Pending
              </span>
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
              Dial this on your phone
            </p>
            <p className="mt-3 break-all font-mono text-[clamp(1.5rem,4.5vw,2.1rem)] font-bold tracking-tight text-ink">
              {DEPOSIT_CODE}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <CopyButton value={DEPOSIT_CODE} label="Example deposit code" />
              <span className="text-xs text-ink-3">Example code — expires after use</span>
            </div>

            <div className="my-7 h-px bg-white/10" />

            <dl className="grid grid-cols-2 gap-5">
              <div>
                <dt className="text-xs text-ink-3">Amount</dt>
                <dd className="mt-1 text-lg font-extrabold">SLE 250.00</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-3">Into vault</dt>
                <dd className="mt-1 text-lg font-extrabold">Vacation Fund</dd>
              </div>
            </dl>

            <p className="mt-7 text-[13px] leading-relaxed text-ink-3">
              Balances are credited only after the payment is confirmed on the network —
              never from the phone in your hand.
            </p>
          </div>

          {/* Confirmation chip, overlapping the card's lower edge. */}
          <div className="glass glass-strong sheen animate-float absolute -bottom-6 left-6 rounded-2xl px-4 py-3 sm:left-10">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(61,214,176,0.18)] text-positive">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] text-ink-2">Vault credited</p>
                <p className="text-[13px] font-extrabold text-positive">+SLE 250.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
