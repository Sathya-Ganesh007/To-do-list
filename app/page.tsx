import { NavbarSection } from "@/components/Home-page/navbar-section";
import { HeroSection } from "@/components/Home-page/hero-section";
import { FeaturesSection } from "@/components/Home-page/features-section";
import { TestimonialsSection } from "@/components/Home-page/testimonials-section";
import { Pricing } from "@/components/Home-page/pricing";
import { CTA } from "@/components/Home-page/cta";
import { Footer } from "@/components/Home-page/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarSection />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Pricing />
      <CTA />
      <Footer />
      </div>
  );
}
