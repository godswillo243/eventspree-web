// apps/web/src/components/FilterSidebar.tsx
import { useEffect, useState } from "react";
import { SlidersHorizontal, X as XIcon } from "lucide-react";

type FilterSidebarProps = {
  children: React.ReactNode;
  activeFilterCount?: number;
  onClear?: () => void;
};

export function FilterSidebar({ children, activeFilterCount = 0, onClear }: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while mobile drawer is open
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
      {/* ── Mobile trigger button ── */}
      <button
        onClick={() => setIsOpen(true)}
        className="button-secondary lg:hidden w-fit h-fit justify-center relative"
      >
        <SlidersHorizontal className="size-4" />
        Filters
        {activeFilterCount > 0 && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center size-5 rounded-full bg-primary-500 text-neutral-0 text-caption font-semibold">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* ── Desktop static sidebar ── */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="card sticky top-6">
          <div className="card-header">
            <h3 className="heading-3">Filters</h3>
            {activeFilterCount > 0 && onClear && (
              <button onClick={onClear} className="text-body-sm link">
                Clear all
              </button>
            )}
          </div>
          <div className="layout-section">{children}</div>
        </div>
      </aside>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-neutral-900/40 z-40 lg:hidden transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* ── Mobile slide-in drawer ── */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-neutral-0 z-50 shadow-lg lg:hidden
          transition-transform duration-300 ease-in-out flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
          <h3 className="heading-3">Filters</h3>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close filters"
            className="w-8 h-8 p-0 text-neutral-600 button-ghost"
          >
            <XIcon className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 layout-section">{children}</div>

        <div className="px-4 py-4 border-t border-neutral-200 flex gap-3">
          {onClear && (
            <button
              onClick={() => {
                onClear();
              }}
              className="button-secondary flex-1 justify-center"
            >
              Clear all
            </button>
          )}
          <button onClick={() => setIsOpen(false)} className="button-primary flex-1 justify-center">
            Show Results
          </button>
        </div>
      </div>
    </>
  );
}
