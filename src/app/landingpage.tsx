import { CTASection } from "@/components/CTASection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { SavingsSection } from "@/components/SavingsSection";
import { SocialProofSection } from "@/components/SocialProofSection";

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050812] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(64,184,255,0.13),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(138,92,246,0.14),transparent_30%),linear-gradient(180deg,#050812_0%,#08111f_48%,#050812_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <div className="noise-texture pointer-events-none fixed inset-0 -z-10 opacity-[0.055]" />

      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SavingsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

