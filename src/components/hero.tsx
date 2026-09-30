import { DeviceComposition } from "./device-composition";
import { HeroGlow } from "./glow-backdrop";
import { SectionShader } from "./section-shader";
import { ArrowRightIcon, LockIcon } from "./icons";
import { StoreBadges } from "./store-badges";

export function Hero() {
  return (
    <section className="relative overflow-x-clip px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
      <SectionShader variant="aurora" tone="mixed" />
      <HeroGlow />

      <div className="mx-auto max-w-3xl text-center">
        <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold">
          <LockIcon className="h-3.5 w-3.5" />
          Built for Sierra Leone
        </span>

        <h1 className="mt-7 text-[clamp(2.75rem,7.5vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
          Lock it away.
          <br />
          Watch it grow.
          <br />
          <span className="bg-[linear-gradient(180deg,#8FC0FF,#2F80FF)] bg-clip-text text-transparent">
            Get paid out.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ink-2 sm:text-lg">
          Monime is a savings account with a vault door. Put money behind a date you
          choose, top it up from any phone with a USSD code, and let your bills pay
          themselves — straight to Orange Money, AfriMoney or the bank.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className="btn-gloss inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold sm:w-auto"
          >
            Get early access
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#how"
            className="btn-ghost inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-semibold text-ink sm:w-auto"
          >
            See how it works
          </a>
        </div>

        <StoreBadges className="mt-6 justify-center" />
      </div>

      <div className="mt-16 sm:mt-20">
        <DeviceComposition />
      </div>
    </section>
  );
}
