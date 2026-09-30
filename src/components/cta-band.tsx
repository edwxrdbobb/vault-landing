import { PhoneFrame } from "./phone-frame";
import { VaultsScreen } from "./phone-screens";
import { SectionShader } from "./section-shader";
import { StoreBadges } from "./store-badges";
import { WaitlistForm } from "./waitlist-form";

export function CtaBand() {
  return (
    <section id="waitlist" className="relative scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionShader variant="orb" tone="violet" />
      <div className="card-filled mx-auto max-w-6xl overflow-hidden rounded-[36px]">
        <div className="grid items-center gap-10 p-8 sm:p-14 lg:grid-cols-[1.1fr_auto] lg:gap-6">
          <div>
            <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              Put the next goal behind
              <br className="hidden sm:block" /> a locked door
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/85">
              The app is rolling out to early testers in Sierra Leone. Leave your email and
              we&apos;ll send you a build as soon as one is ready.
            </p>

            <WaitlistForm />

            <StoreBadges className="mt-7" />
          </div>

          {/* Device peeking in from the bottom edge, as on the reference layouts. */}
          <div
            aria-hidden
            className="relative hidden h-[330px] justify-center lg:flex"
          >
            <div className="absolute top-6 [transform:rotate(-6deg)]">
              <PhoneFrame width={260} glow={false}>
                <VaultsScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
