import { PhoneFrame } from "./phone-frame";
import { CampaignScreen } from "./phone-screens";
import { SectionShader } from "./section-shader";
import { SectionHeading } from "./section-heading";
import { GlobeIcon, KeypadIcon, TargetIcon, UsersIcon } from "./icons";

const points = [
  {
    icon: KeypadIcon,
    title: "One code, everybody pays it",
    body: "A campaign gets a single recurring USSD code. Share it once and any number of people can dial it — each payment lands as its own contribution.",
  },
  {
    icon: GlobeIcon,
    title: "A public page to share",
    body: "Every campaign gets its own web page with the story, the running total and the dial code. Send the link on WhatsApp; nobody needs the app to give.",
  },
  {
    icon: TargetIcon,
    title: "You choose when it unlocks",
    body: "Release on a date for whatever has been raised by then, or the instant you hit your target. Contributors are told which rule applies before they pay.",
  },
  {
    icon: UsersIcon,
    title: "A contributor wall",
    body: "Confirmed gifts show up with a name and a short message, or anonymously. Phone numbers stay private — they're never shown on the page.",
  },
];

export function CampaignsSection() {
  return (
    <section id="fundme" className="relative scroll-mt-28 px-5 py-24 sm:px-8">
      <SectionShader variant="mesh" tone="teal" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="FundMe"
          title="Raise money together, without losing track of it"
          body="School fees, a funeral, a medical bill, a community project. Start a campaign, share one dial code, and watch the total climb in real time."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <div>
              <PhoneFrame width={310}>
                <CampaignScreen />
              </PhoneFrame>

            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, body }) => (
              <article key={title} className="glass sheen card-lift rounded-[28px] p-7">
                <span className="btn-gloss grid h-11 w-11 place-items-center rounded-[14px]">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
