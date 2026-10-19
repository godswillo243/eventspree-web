import { BenefitsSection } from "../components/list-your-business/benefits";
import { FinalCTA } from "../components/list-your-business/final-cta";
import { HeroSection } from "../components/list-your-business/hero";
import { HowItWorksProviders } from "../components/list-your-business/how-it-works-providers";
import { StatsBar } from "../components/list-your-business/stats-bar";

export const ListYourBusiness = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsBar />
      <BenefitsSection />
      <HowItWorksProviders />
      <FinalCTA />
    </div>
  );
};
