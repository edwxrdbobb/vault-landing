import { CountdownRing } from "./phone-screens";
import {
  CoinsIcon,
  FingerprintIcon,
  KeypadIcon,
  LockIcon,
  PulseIcon,
  TimerIcon,
} from "./icons";
import { SectionHeading } from "./section-heading";
import { SectionShader } from "./section-shader";

function CardIcon({
  icon: Icon,
  tone = "glass",
}: {
  icon: typeof LockIcon;
  tone?: "glass" | "solid";
}) {
  return (
    <span
      className={
        tone === "solid"
          ? "grid h-11 w-11 place-items-center rounded-[14px] border border-white/25 bg-white/20 text-white"
          : "btn-gloss grid h-11 w-11 place-items-center rounded-[14px]"
      }
    >
      <Icon className="h-[22px] w-[22px]" />
    </span>
  );
}

export function Features() {
  return (
    <section id="vaults" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionShader variant="grid" tone="blue" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What's inside"
          title="Discipline, automated"
          body="Everything you need to hold a savings goal and keep the bills paid, in one dark-mode app."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Wide hero tile with the countdown visual */}
          <article className="glass sheen card-lift rounded-[28px] p-8 lg:col-span-2">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <div className="flex-1">
                <CardIcon icon={LockIcon} />
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
                  Time-locked vaults
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  Funds stay strictly locked until the release date and time you picked.
                  A countdown ring shows exactly how long is left — and pulling out early
                  costs a 10% penalty.
                </p>
              </div>

              <div className="flex shrink-0 justify-center sm:justify-end">
                <CountdownRing size={148} percent={72} />
              </div>
            </div>
          </article>

          {/* Brand-filled accent tile */}
          <article className="card-filled card-lift rounded-[28px] p-8">
            <CardIcon icon={KeypadIcon} tone="solid" />
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight">USSD deposits</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">
              Fund a vault by dialling a code on any handset. No card, no data plan, no
              app needed on the payer&apos;s phone.
            </p>
            <p className="mt-6 rounded-2xl border border-white/25 bg-black/20 px-4 py-3 text-center font-mono text-[17px] font-bold">
              *715*1*…#
            </p>
          </article>

          {/* Three even tiles */}
          <article className="glass sheen card-lift rounded-[28px] p-7">
            <CardIcon icon={TimerIcon} />
            <h3 className="mt-5 text-lg font-extrabold tracking-tight">
              Auto-pay on a schedule
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">
              Daily, weekly or monthly payouts to mobile money or a bank account. A failed
              payment is refunded to the vault in full.
            </p>
          </article>

          <article className="glass sheen card-lift rounded-[28px] p-7">
            <CardIcon icon={CoinsIcon} />
            <h3 className="mt-5 text-lg font-extrabold tracking-tight">Auto-save booster</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">
              Set a standing rule — SLE 50 a week into the Emergency Reserve — and let the
              balance build without you thinking about it.
            </p>
          </article>

          <article className="glass sheen card-lift rounded-[28px] p-7">
            <CardIcon icon={FingerprintIcon} />
            <h3 className="mt-5 text-lg font-extrabold tracking-tight">
              PIN and biometric lock
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">
              A 4-digit PIN guards every sensitive action, with Face ID or fingerprint
              unlock and a lockout after repeated wrong tries.
            </p>
          </article>

          {/* Full-width tile with a live transaction strip */}
          <article className="glass sheen card-lift rounded-[28px] p-8 lg:col-span-3">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="lg:max-w-sm">
                <CardIcon icon={PulseIcon} />
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
                  A ledger that updates live
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  Balances, deposits and payout statuses update the moment they clear —
                  no pull-to-refresh, no waiting.
                </p>
              </div>

              <div className="grid flex-1 gap-3 sm:grid-cols-3">
                {[
                  { label: "Vacation Fund", sub: "Orange Money", amount: "+SLE 250.00", tone: "text-positive" },
                  { label: "Landlord", sub: "Auto-pay · monthly", amount: "-SLE 1,200.00", tone: "text-negative" },
                  { label: "Emergency Reserve", sub: "Auto-save · weekly", amount: "+SLE 50.00", tone: "text-positive" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="glass glass-muted sheen rounded-2xl p-4"
                  >
                    <p className="text-[13px] font-bold">{row.label}</p>
                    <p className="mt-0.5 text-[11px] text-ink-3">{row.sub}</p>
                    <p className={`mt-3 text-[15px] font-extrabold ${row.tone}`}>
                      {row.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
