import { FingerprintIcon, LockIcon, ShieldIcon, TimerIcon } from "./icons";
import { SectionShader } from "./section-shader";
import { SectionHeading } from "./section-heading";

const guarantees = [
  {
    icon: ShieldIcon,
    title: "Your PIN is never stored in the clear",
    body: "The 4-digit PIN is salted and stretched with PBKDF2-SHA256 on the server. Repeated wrong attempts lock the account out for a cooling-off period.",
  },
  {
    icon: FingerprintIcon,
    title: "Face ID and fingerprint unlock",
    body: "Unlock with the biometrics your phone already trusts, and fall back to the PIN whenever the sensor says no.",
  },
  {
    icon: TimerIcon,
    title: "Locks itself when you walk away",
    body: "Sessions expire on their own, so leaving the app open on a shared phone doesn't leave your vaults open too.",
  },
  {
    icon: LockIcon,
    title: "Balances move on confirmed payments only",
    body: "A vault is credited by the verified payment webhook, never by the app in your hand, and every event is processed exactly once.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionShader variant="beam" tone="blue" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Security"
          title="Locked in more ways than one"
          body="A savings app is only worth using if the money is still there tomorrow."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {guarantees.map(({ icon: Icon, title, body }) => (
            <article key={title} className="glass sheen card-lift flex gap-5 rounded-[28px] p-7">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-white/10 bg-white/[0.055] text-brand-light shadow-[var(--shadow-soft)]">
                <Icon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
