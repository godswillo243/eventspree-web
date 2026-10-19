// apps/web/src/routes/500.tsx (or wired as errorComponent in __root.tsx)
import { Link } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { eventspree } from "../assets";

export function ServerErrorPage() {
  return (
    <div className="flex flex-col h-dvh layout-container">
      <div>
        <Link to="/">
          <img src={eventspree} width={144} height={48} />
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 gap-4">
        <AlertTriangle className="size-16 text-danger-500" />
        <h2 className="heading-2">Something Went Wrong</h2>
        <p className="prose-default max-w-sm">
          We're having trouble loading this page. Please try again shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button onClick={() => window.location.reload()} className="button-primary">
            Reload Page
          </button>
          <Link to="/contact" className="button-ghost">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
