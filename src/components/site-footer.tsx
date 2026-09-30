import { Logo } from "./icons";
import { SectionShader } from "./section-shader";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#how", label: "How it works" },
      { href: "#vaults", label: "Features" },
      { href: "#autopay", label: "Auto-pay" },
      { href: "#security", label: "Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "#waitlist", label: "Early access" },
      { href: "mailto:hello@example.com", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/[0.08] px-5 py-14 sm:px-8">
      <SectionShader variant="mesh" tone="mixed" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo className="h-9 w-9" />
            <p className="mt-4 text-sm leading-relaxed text-ink-2">
              Time-locked savings vaults and automatic payments, built for Sierra Leone.
            </p>
          </div>

          <div className="flex gap-14">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-ink-2 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-7 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p>Amounts shown in SLE</p>
        </div>
      </div>

    </footer>
  );
}
