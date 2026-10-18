import { cn } from "#/lib/utils.ts";
import { useState } from "react";

type BrowseToggleProps = {
  active: "vendor" | "venue";
  onChange: (tab: "vendor" | "venue") => void;
};

export const BrowseToggle = ({ active, onChange }: BrowseToggleProps) => {
  const tabs = [
    { key: "vendor" as const, label: "Vendors" },
    { key: "venue" as const, label: "Venues" },
  ];

  return (
    <div className="w-fit flex items-center rounded-full bg-neutral-100 p-1">
      { tabs.map(({ key, label }) => {
        const isActive = active === key;
        return (
          <button
            key={ key }
            onClick={ () => onChange(key) }
            className={ cn(
              "px-4 py-1.5 cursor-pointer rounded-full text-sm font-medium transition-colors duration-375",
              isActive
                ? "bg-primary-500 text-white"
                : "bg-transparent text-neutral-600 hover:text-neutral-800"
            ) }
          >
            { label }
          </button>
        );
      }) }
    </div>
  );
};

export const BrowsePage = () => {
  const [currentTab, setCurrentTab] = useState<"vendor" | "venue">("vendor");
  return <div className="layout-container w-full">
    <div className="w-full flex items-center justify-center">
      <BrowseToggle active={ currentTab } onChange={ setCurrentTab } />
    </div>
    <div className="w-full flex gap-6"></div>
  </div>;
};
