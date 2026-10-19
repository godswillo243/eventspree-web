// apps/web/src/components/Dropdown.tsx
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export type DropdownOption<T extends string = string> = {
  value: T;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type DropdownProps<T extends string = string> = {
  options: DropdownOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
};

export function Dropdown<T extends string = string>({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  disabled,
  className = "",
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = options.find((opt) => opt.value === value);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!isOpen && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
      e.preventDefault();
      setIsOpen(true);
      setHighlightedIndex(options.findIndex((o) => o.value === value));
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          let next = prev;
          do {
            next = (next + 1) % options.length;
          } while (options[next]?.disabled && next !== prev);
          return next;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          let next = prev;
          do {
            next = (next - 1 + options.length) % options.length;
          } while (options[next]?.disabled && next !== prev);
          return next;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && !options[highlightedIndex].disabled) {
          onChange(options[highlightedIndex].value);
          setIsOpen(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listRef.current) {
      const el = listRef.current.children[highlightedIndex] as HTMLElement;
      el.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {label && <label className="label">{label}</label>}

      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`${error ? "input-error" : "input"} flex items-center justify-between cursor-pointer disabled:cursor-not-allowed`}
      >
        <span
          className={`flex items-center gap-2 truncate ${!selected ? "text-neutral-400" : "text-neutral-800"}`}
        >
          {selected?.icon}
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={`size-4 text-neutral-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {error && <p className="error-text">{error}</p>}

      {/* Dropdown panel */}
      <div
        className={`absolute top-full z-20 mt-1.5 w-full grid transition-all duration-200 ease-in-out origin-top
          ${isOpen ? "grid-rows-[1fr] opacity-100 scale-100" : "grid-rows-[0fr] opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="overflow-hidden">
          <ul
            ref={listRef}
            role="listbox"
            className="max-h-60 overflow-y-auto bg-neutral-0 border border-neutral-200 rounded-md shadow-md py-1"
          >
            {options.length === 0 && (
              <li className="px-3.5 py-2 text-body-sm text-neutral-400">No options available</li>
            )}

            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isHighlighted = index === highlightedIndex;

              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => {
                    if (option.disabled) return;
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between gap-2 px-3.5 py-2 text-body cursor-pointer transition-colors duration-150
                    ${option.disabled ? "text-neutral-400 cursor-not-allowed" : "text-neutral-800"}
                    ${isHighlighted && !option.disabled ? "bg-primary-50" : ""}
                    ${isSelected ? "font-medium" : ""}`}
                >
                  <span className="flex items-center gap-2 truncate">
                    {option.icon}
                    {option.label}
                  </span>
                  {isSelected && <Check className="size-4 text-primary-600 shrink-0" />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
