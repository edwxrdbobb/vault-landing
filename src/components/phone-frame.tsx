import type { ReactNode } from "react";

/**
 * The device bezel used across the site. `width` is the outer frame width in
 * px; every screen inside scales from that so the composition stays in
 * proportion when phones sit at different depths.
 */
export function PhoneFrame({
  children,
  width = 320,
  className = "",
  glow = true,
}: {
  children: ReactNode;
  width?: number;
  className?: string;
  glow?: boolean;
}) {
  const radius = Math.round(width * 0.135);

  return (
    <div
      className={`relative shrink-0 border border-white/15 bg-[#05070F] p-[10px] ${className}`}
      style={{
        width,
        borderRadius: radius,
        boxShadow: glow
          ? "0 40px 90px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)"
          : "0 24px 50px rgba(0,0,0,0.5)",
      }}
    >
      {/* Bezel top-light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0)_38%)]"
        style={{ borderRadius: radius }}
      />

      <div
        className="relative overflow-hidden bg-[linear-gradient(160deg,#0A1234,#070A18_55%,#0A1638)]"
        style={{ borderRadius: radius - 9 }}
      >
        {/* In-screen radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-14%] h-[42%] w-[150%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(47,107,245,0.5),rgba(7,10,24,0))]"
        />
        {children}
      </div>
    </div>
  );
}

/** The notch + clock row that tops every screen. */
export function StatusBar({ scale = 1 }: { scale?: number }) {
  return (
    <div
      className="relative flex items-center justify-between font-semibold text-white/85"
      style={{
        paddingLeft: 24 * scale,
        paddingRight: 24 * scale,
        paddingTop: 16 * scale,
        fontSize: 11 * scale,
      }}
    >
      <span>9:41</span>
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black"
        style={{ top: 10 * scale, height: 20 * scale, width: 80 * scale }}
      />
      <div className="flex items-center" style={{ gap: 4 * scale }}>
        <span
          className="rounded-[2px] bg-white/70"
          style={{ height: 10 * scale, width: 10 * scale }}
        />
        <span
          className="rounded-[3px] border border-white/60"
          style={{ height: 10 * scale, width: 16 * scale }}
        />
      </div>
    </div>
  );
}
