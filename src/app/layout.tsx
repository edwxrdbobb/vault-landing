import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const description =
  "Lock your money away until you actually need it. Time-locked savings vaults funded by USSD, group fundraising with a shareable dial code, and automatic bill payments to Orange Money, AfriMoney and bank accounts — built for Sierra Leone.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lock it. Grow it. Get paid out.",
  description,
  keywords: [
    "savings app Sierra Leone",
    "locked savings vault",
    "Orange Money",
    "AfriMoney",
    "mobile money",
    "automatic bill payment",
    "crowdfunding Sierra Leone",
    "fundraising USSD",
    "SLE",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lock it. Grow it. Get paid out.",
    description,
    locale: "en_SL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock it. Grow it. Get paid out.",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070A18",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="text-ink font-sans min-h-full flex flex-col overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:border focus:border-white/25 focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-[var(--shadow-glow)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
