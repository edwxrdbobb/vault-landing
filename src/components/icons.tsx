import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Outline icon set matching the app's Ionicons weight (24px grid, 1.8 stroke). */
function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const LockIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="10" width="16" height="10" rx="3" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
  </Base>
);

export const KeypadIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="2.5" width="14" height="19" rx="3" />
    <circle cx="9" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="16" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="16" r="1" fill="currentColor" stroke="none" />
  </Base>
);

export const TimerIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9.5V13l2.5 1.8M9.5 2.5h5" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2.8 19 5.6v5.9c0 4.3-2.9 7.9-7 9.7-4.1-1.8-7-5.4-7-9.7V5.6Z" />
    <path d="m9 12 2.2 2.2L15.4 10" />
  </Base>
);

export const BoltIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M13.2 2.5 5 13.4h5.4L9.9 21.5 18.5 10h-5.6Z" />
  </Base>
);

export const PulseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 12.5h3.6l2.2-6 3.6 12 2.3-7.2 1.5 3.2H21" />
  </Base>
);

export const CoinsIcon = (p: IconProps) => (
  <Base {...p}>
    <ellipse cx="12" cy="6.5" rx="7" ry="3.2" />
    <path d="M5 6.5v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2v-5" />
    <path d="M5 11.5v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2v-5" />
  </Base>
);

export const FingerprintIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 11v2.5a7 7 0 0 1-1.6 4.4" />
    <path d="M8.6 9.4a4 4 0 0 1 6.8 3v1.3c0 1.3-.3 2.6-.8 3.8" />
    <path d="M5.6 12a6.8 6.8 0 0 1 3-6.1" />
    <path d="M18.4 12v1.6c0 1.1-.1 2.2-.4 3.3" />
    <path d="M12 2.8a9 9 0 0 1 6.4 2.7" />
    <path d="M3.4 8.2A9 9 0 0 1 8 4" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
  </Base>
);

export const CheckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Base>
);

export const PlusIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5.5v13M5.5 12h13" />
  </Base>
);

export const ListIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 7h11M9 12h11M9 17h11M4.5 7h.01M4.5 12h.01M4.5 17h.01" />
  </Base>
);

export const GearIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 14.2a1.5 1.5 0 0 0 .3 1.7l.1.1a1.8 1.8 0 1 1-2.6 2.6l-.1-.1a1.5 1.5 0 0 0-2.6 1.1v.3a1.8 1.8 0 1 1-3.6 0v-.2a1.5 1.5 0 0 0-2.6-1.1l-.1.1a1.8 1.8 0 1 1-2.6-2.6l.1-.1a1.5 1.5 0 0 0-1.1-2.6h-.3a1.8 1.8 0 1 1 0-3.6h.2a1.5 1.5 0 0 0 1.1-2.6l-.1-.1a1.8 1.8 0 1 1 2.6-2.6l.1.1a1.5 1.5 0 0 0 2.6-1.1v-.3a1.8 1.8 0 1 1 3.6 0v.2a1.5 1.5 0 0 0 2.6 1.1l.1-.1a1.8 1.8 0 1 1 2.6 2.6l-.1.1a1.5 1.5 0 0 0 1.1 2.6h.3a1.8 1.8 0 1 1 0 3.6h-.2a1.5 1.5 0 0 0-1.4.9Z" />
  </Base>
);

export const CopyIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2.5" />
    <path d="M5.5 15H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 4h8a1.5 1.5 0 0 1 1.5 1.5V6" />
  </Base>
);

export const ChevronIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m9 5.5 6.5 6.5L9 18.5" />
  </Base>
);

export const SearchIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 3.5 3.5" />
  </Base>
);

export const BankIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.5 9.5 12 4.5l8.5 5" />
    <path d="M5.5 9.5v8M9.5 9.5v8M14.5 9.5v8M18.5 9.5v8" />
    <path d="M3 20.5h18" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="6" y="2.5" width="12" height="19" rx="3" />
    <path d="M10.5 5.5h3" />
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
  </Base>
);

export const PlusCircleIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8.5v7M8.5 12h7" />
  </Base>
);

/** Apple logo, for the store badge. */
export const AppleGlyph = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.2 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.7-.4 6.6 1.1 8.8.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.5 0 0-2.2-.9-2.2-3.4ZM14 6.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2Z" />
  </svg>
);

/** Google Play triangle, for the store badge. */
export const PlayGlyph = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
    <path d="M4.3 2.6 14.6 12 4.3 21.4a1.3 1.3 0 0 1-.5-1V3.6c0-.4.2-.8.5-1Z" fill="#5AA0FF" />
    <path d="m14.6 12 3-2.7 2.8 1.6c.8.5.8 1.7 0 2.2l-2.8 1.6-3-2.7Z" fill="#FBBF24" />
    <path d="M4.3 2.6a1.3 1.3 0 0 1 1.3-.1l12 6.8-3 2.7L4.3 2.6Z" fill="#3DD6B0" />
    <path d="m4.3 21.4 10.3-9.4 3 2.7-12 6.8a1.3 1.3 0 0 1-1.3-.1Z" fill="#FF6B7D" />
  </svg>
);

/** Logo glyph — a beveled vault door. */
export const Logo = (p: IconProps) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...p}>
    <defs>
      <linearGradient id="mlogo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5AA0FF" />
        <stop offset="52%" stopColor="#2F80FF" />
        <stop offset="100%" stopColor="#1E63E0" />
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#mlogo)" />
    <rect
      x="1.6"
      y="1.6"
      width="28.8"
      height="14"
      rx="8.4"
      fill="#fff"
      fillOpacity="0.22"
    />
    <circle cx="16" cy="16" r="7.4" stroke="#fff" strokeOpacity="0.92" strokeWidth="2" />
    <path
      d="M16 11.4v4.6l3 2.2"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
