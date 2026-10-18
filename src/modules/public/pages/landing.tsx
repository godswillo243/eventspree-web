import { Banner } from "../components/landing/banner";
import { BrowseByCategory } from "../components/landing/browse-by-category";
import { Featured } from "../components/landing/featured";
import { Hero } from '../components/landing/hero';
import { HowItWorks } from '../components/landing/how-it-works';

export const LandingPage = () => {
  return (
    <div className="layout-section">
      <Hero />
      <HowItWorks />
      {/* <Featured /> */ }
      <BrowseByCategory />
      <Banner />
    </div>
  );
};
