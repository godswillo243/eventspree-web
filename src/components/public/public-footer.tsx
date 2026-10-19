import { eventspree } from "@/assets/index.ts";
import { Image } from "@lonik/oh-image/react";
import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <footer className="layout-container space-y-6">
      <div className="divider" />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
        <div className="space-y-3">
          <Link to="/" className="flex items-end gap-1.5 w-fit">
            <Image src={eventspree} width={128} height={48} alt="Eventspree" className="w-32" />
          </Link>
          <p className="prose-default">
            Connecting event organizers with trusted vendors and venues — <br />
            from inquiry to booking, all in one place.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="prose-body font-bold">Contact</h3>
          <div>
            <p className="prose-default">
              <span className="font-medium text-neutral-800">Tel: </span>+234 903 298 0552
            </p>
            <p className="prose-default">
              <span className="font-medium text-neutral-800">Email: </span>hello@eventspree.ng
            </p>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex max-sm:flex-col max-sm:gap-4 items-center justify-between">
        <p className="prose-default">&copy; 2026 Eventspree. All rights reserved.</p>
        <div className="flex items-center gap-4 ">
          <Link to="/privacy" className="link-muted prose-default">
            Privacy Policy
          </Link>
          <Link to="/terms" className="link-muted prose-default">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
