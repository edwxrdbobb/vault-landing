import Link from "next/link";
import { Logo } from "./icons";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#vaults", label: "Features" },
  { href: "#autopay", label: "Auto-pay" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
];

/**
 * Floating 3D capsule nav. It sticks a little below the top edge rather than
 * clamping to it, so the bevel and drop shadow read as a solid object hovering
 * over the page.
 */
export function SiteHeader() {
  return (
    <div className="sticky top-4 z-50 px-4 sm:top-5 sm:px-6">
      <header className="nav-capsule mx-auto flex h-16 max-w-5xl items-center justify-between pl-5 pr-3 sm:pl-6 sm:pr-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="text-[17px] font-extrabold tracking-tight">Monime</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:bg-white/[0.07] hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="btn-gloss rounded-full px-4 py-2.5 text-sm font-semibold sm:px-5"
          >
            Get early access
          </a>

          {/* Mobile menu — a CSS-only disclosure, no client JS. */}
          <details className="group relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="btn-ghost grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full"
            >
              <span className="relative block h-3 w-4">
                <span className="absolute left-0 top-0 h-[1.5px] w-4 rounded bg-current transition-transform duration-200 group-open:top-1.5 group-open:rotate-45" />
                <span className="absolute left-0 top-1.5 h-[1.5px] w-4 rounded bg-current transition-opacity duration-200 group-open:opacity-0" />
                <span className="absolute left-0 top-3 h-[1.5px] w-4 rounded bg-current transition-transform duration-200 group-open:top-1.5 group-open:-rotate-45" />
              </span>
            </summary>

            <nav
              aria-label="Mobile"
              className="glass glass-strong sheen absolute right-0 top-13 w-56 rounded-3xl p-2"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-white/[0.07] hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>
    </div>
  );
}
