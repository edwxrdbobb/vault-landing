import { AppleGlyph, PlayGlyph } from "./icons";

/**
 * Store badges. The app hasn't shipped to either store yet, so these read as
 * "coming soon" and point at the early-access form rather than pretending to
 * be live download links.
 */
export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {[
        { Glyph: AppleGlyph, top: "Coming soon to", bottom: "App Store" },
        { Glyph: PlayGlyph, top: "Coming soon to", bottom: "Google Play" },
      ].map(({ Glyph, top, bottom }) => (
        <a
          key={bottom}
          href="#waitlist"
          className="btn-ghost flex items-center gap-3 rounded-2xl px-4 py-2.5"
        >
          <Glyph className="h-6 w-6 shrink-0" />
          <span className="text-left leading-tight">
            <span className="block text-[10px] text-ink-3">{top}</span>
            <span className="block text-[14px] font-bold">{bottom}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
