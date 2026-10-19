import { eventspree } from "@/assets/index.ts";
import { Link } from "@tanstack/react-router";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Find Vendors", to: "/browse?tab=vendor" },
  { label: "Find Venues", to: "/browse?tab=venue" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Contact", to: "/contact" },
];

export const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while dropdown is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="w-full layout-container py-2 flex items-center justify-between h-16 bg-neutral-0 border-b border-b-neutral-200 sticky z-50 top-0">
        <Link to="/">
          <img src={eventspree} width={144} height={48} />
        </Link>
        <div className="flex items-center gap-6 max-md:hidden">
          {NAV_LINKS.map(({ label, to }) => {
            return (
              <Link key={label + to} to={to} className="prose-default link-muted">
                {label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2 max-md:hidden">
          <Link to="/signup" className="button-primary">
            Sign In
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="relative w-8 h-8  items-center justify-center cursor-pointer hidden max-md:flex"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
        <div
          className={`absolute top-full left-0 w-full max-md:grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 "}`}
          inert={!isOpen}
        >
          <div className="overflow-hidden bg-neutral-0 border-b border-neutral-200 shadow-lg layout-container w-full">
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`prose-default py-2  link-muted
                  transition-all duration-300 ease-in-out
                  ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 py-4 flex flex-col gap-3">
              <Link
                to="/list-your-business"
                onClick={() => setIsOpen(false)}
                className="button-secondary w-full justify-center"
              >
                List Your Business
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="button-primary w-full justify-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* ── Backdrop ── */}
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed block inset-0 bg-neutral-900/40 z-40 transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
    </>
  );
};
