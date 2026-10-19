export const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Rating", value: "rating_desc" },
  { label: "Price: Ascending", value: "price_asc" },
  { label: "Price: Descending", value: "price_desc" },
  { label: "Newest", value: "newest" },
  { label: "Relevance", value: "relevance" },
] as const;

export const RATING_OPTIONS = [
  { value: "4.5", label: "4.5 & up" },
  { value: "4", label: "4.0 & up" },
  { value: "3.5", label: "3.5 & up" },
  { value: "3", label: "3 & up" },
  { value: "2.5", label: "2.5 & up" },
];

export const CITY_OPTIONS = [
  { value: "Lagos", label: "Lagos" },
  { value: "Abuja", label: "Abuja" },
  { value: "Port Harcourt", label: "Port Harcourt" },
];
