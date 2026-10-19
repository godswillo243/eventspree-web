import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/images/list-your-business-cta.avif";

export function HeroSection() {
  return (
    <section className="bg-neutral-0">
      <div className="layout-container py-16! md:py-20!">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left — text content */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <h1 className="heading-1">Grow Your Event Business</h1>
            <p className="prose-body text-body-lg! max-w-md mx-auto md:mx-0">
              Join thousands of vendors and venues reaching new customers every day
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                to="/onboarding"
                search={{ type: "vendor" }}
                className="button-primary justify-center"
              >
                Become a Vendor
              </Link>
              <Link
                to="/onboarding"
                search={{ type: "venue" }}
                className="button-secondary justify-center"
              >
                List a Venue
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="flex-1 w-full">
            <div className="aspect-4/3 rounded-lg overflow-hidden">
              <img src={heroImage} alt="Event planning" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
