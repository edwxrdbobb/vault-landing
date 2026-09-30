import { AutopaySection } from "@/components/autopay-section";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { GlowBackdrop } from "@/components/glow-backdrop";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { RailsMarquee } from "@/components/rails-marquee";
import { SecuritySection } from "@/components/security-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UssdSection } from "@/components/ussd-section";

export default function Home() {
  return (
    <>
      <GlowBackdrop />
      <SiteHeader />
      <main id="main">
        <Hero />
        <RailsMarquee />
        <HowItWorks />
        <Features />
        <UssdSection />
        <AutopaySection />
        <SecuritySection />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
