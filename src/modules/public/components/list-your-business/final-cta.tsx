// apps/web/src/components/landing/FinalCTA.tsx
import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section className="bg-neutral-50">
      <div className="layout-container !py-16 flex flex-col items-center text-center gap-6">
        <h2 className="heading-2">Ready to get started?</h2>
        <div className="flex flex-col sm:flex-row gap-3">
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
    </section>
  );
}
