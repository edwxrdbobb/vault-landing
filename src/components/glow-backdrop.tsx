/**
 * The app's GradientBackground, ported to the web.
 *
 * This is the page-wide base only: the diagonal navy gradient plus two very
 * soft ambient washes. Brighter, section-specific glows are placed inline with
 * `SectionGlow` so each band of the page gets its own colour temperature.
 */
export function GlowBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(150deg,#0A1234_0%,#070A18_52%,#0A1638_100%)]" />
      <div className="absolute right-[-18vw] top-[35vh] h-[70vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(61,214,176,0.07),rgba(7,10,24,0)_72%)]" />
      <div className="absolute bottom-[-25vh] left-[-15vw] h-[70vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.09),rgba(7,10,24,0)_72%)]" />
    </div>
  );
}

/** The bright blue radial glow that sits behind the hero. */
export function HeroGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[-430px] -z-10 h-[1000px] w-[1600px] max-w-[170vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,245,0.5),rgba(30,82,216,0.18)_52%,rgba(7,10,24,0)_100%)] blur-[10px] animate-drift"
    />
  );
}

const tones = {
  blue: "rgba(47,107,245,0.26)",
  teal: "rgba(61,214,176,0.2)",
  violet: "rgba(139,92,246,0.24)",
} as const;

/**
 * A soft coloured wash anchored to one section, so consecutive bands don't all
 * sit on the same flat navy.
 */
export function SectionGlow({
  tone = "blue",
  className = "",
}: {
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-[4px] ${className}`}
      style={{
        background: `radial-gradient(closest-side, ${tones[tone]}, rgba(7,10,24,0) 100%)`,
      }}
    />
  );
}
