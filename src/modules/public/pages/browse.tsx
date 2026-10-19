import { VendorCard } from "@/components/shared/cards/vendor-card.tsx";
import { VenueCard } from "@/components/shared/cards/venue-card.tsx";
import { Dropdown } from "@/components/shared/dropdown.tsx";
import { cn, formatNaira } from "@/lib/utils.ts";
import {
  VENDOR_CATEGORIES,
  vendors,
  venues,
  type VendorProfile,
  type Venue,
} from "@/mocks/data.ts";
import { useState } from "react";
import { FilterSidebar } from "../components/browse/filter-sidebar";
import { CITY_OPTIONS, RATING_OPTIONS, SORT_OPTIONS } from "@/lib/constants.ts";
import { RangeSlider } from "@/components/shared/range-sliders.tsx";
import { useSearch } from "@tanstack/react-router";

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
      {tabs.map(({ key, label }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={cn(
              "px-4 py-1.5 cursor-pointer rounded-full text-sm font-medium transition-colors duration-375",
              isActive
                ? "bg-primary-500 text-white"
                : "bg-transparent text-neutral-600 hover:text-neutral-800",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
const MAX_PRICE = 5_000_000;
const MIN_PRICE = 10_000;
export const BrowsePage = () => {
  const { tab } = useSearch({ from: "/(public)/browse" });
  const [activeTab, setActiveTab] = useState<"vendor" | "venue">(tab);
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]["value"]>("relevance");
  const [category, setCategory] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [minCapacity, setMinCapacity] = useState<number | null>(null);
  const [minRating, setMinRating] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const activeFilterCount = [
    category,
    city,
    minRating,
    minCapacity,
    priceRange[0] > MIN_PRICE || priceRange[1] < MAX_PRICE,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setCategory(null);
    setCity(null);
    setMinCapacity(null);
    setMinRating(null);
    setPriceRange([MIN_PRICE, MAX_PRICE]);
  };

  const listings: (VendorProfile | Venue)[] = activeTab === "vendor" ? [...vendors] : [...venues];

  return (
    <div className="layout-container w-full py-4">
      <div className="w-full flex items-center justify-center h-14">
        <BrowseToggle active={activeTab} onChange={setActiveTab} />
      </div>
      <div className="w-full flex max-lg:flex-col max-lg:gap-4">
        <FilterSidebar activeFilterCount={activeFilterCount} onClear={clearFilters}>
          <Dropdown
            label="City"
            placeholder="All Cities"
            value={city}
            onChange={setCity}
            options={CITY_OPTIONS}
          />
          <Dropdown
            label="Minimum Rating"
            placeholder="Any Rating"
            value={minRating}
            onChange={setMinRating}
            options={RATING_OPTIONS}
          />
          {activeTab === "vendor" && (
            <Dropdown
              label="Category"
              placeholder="All Categories"
              value={category}
              onChange={setCategory}
              options={VENDOR_CATEGORIES.map((c) => ({ value: c, label: c }))}
            />
          )}
          {activeTab === "venue" && (
            <div>
              <label htmlFor="" className="label">
                Minimum Capacity
              </label>
              <input
                className="input"
                type="number"
                value={minCapacity || 0}
                onChange={(e) => setMinCapacity(Number(e.target.value))}
              />
            </div>
          )}
          <RangeSlider
            label="Price Range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={10000}
            value={priceRange}
            onChange={setPriceRange}
            formatLabel={formatNaira}
          />
        </FilterSidebar>

        <div className="flex-1 px-6 max-sm:px-4 space-y-4">
          {/* Top bar */}
          <div className="w-full flex items-start justify-between">
            <Dropdown
              onChange={setSort}
              options={[...SORT_OPTIONS]}
              value={sort}
              label="Sort:"
              className="flex items-center gap-2 min-w-48"
            />
          </div>
          {/* Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {listings.map((listing) => {
              return activeTab === "vendor" ? (
                <VendorCard vendor={listing as VendorProfile} />
              ) : (
                <VenueCard venue={listing as Venue} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
