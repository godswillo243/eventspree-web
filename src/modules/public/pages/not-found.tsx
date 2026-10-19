import { PublicNavbar } from "#/components/public/public-navbar.tsx";
import { Link } from "@tanstack/react-router";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-dvh">
      <PublicNavbar />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 gap-4">
        <span className="text-[120px] leading-none font-bold text-primary-200">404</span>
        <h2 className="heading-2">Page Not Found</h2>
        <p className="prose-default max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="button-primary mt-2">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
