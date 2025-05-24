import { CallToActionSection } from "@/components/landing/CallToActionSection";
import { ConnectWithUsSection } from "@/components/landing/ConnectWithUsSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { HeaderSection } from "@/components/landing/HeaderSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { OnDemandVideosSection } from "@/components/landing/OnDemandVideosSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { WhyChooseUsSection } from "@/components/landing/WhyChooseUsSection";



export default function LandingPage() {
  return (
       <div className="flex flex-col items-center gap-8 bg-white border border-solid border-neutral-100">
      <div className="w-full max-w-[1440px] px-4 lg:px-8">
        <HeaderSection />
        <div className="flex flex-col items-center gap-16 md:gap-24">
          <HeroSection />
          <CallToActionSection />
          <ConnectWithUsSection />
          <WhyChooseUsSection />
          <OnDemandVideosSection />
          <TestimonialsSection />
          <HowItWorksSection />
          <CtaSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}