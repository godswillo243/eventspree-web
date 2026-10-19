// apps/web/src/components/VendorCard.tsx
import { Link } from "@tanstack/react-router";
import { Star, MapPin } from "lucide-react";
import { formatNaira } from "@/lib/utils.ts";
import type { VendorProfile } from "@/mocks/data";

export function VendorCard({ vendor }: { vendor: VendorProfile }) {
  return (
    <Link
      to="/vendors/$id"
      params={{ id: vendor.id }}
      className="card-hover group overflow-hidden p-0 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
        <img
          src={vendor.portfolioImages[0]}
          alt={vendor.businessName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {vendor.isFeatured && (
          <span className="badge-featured absolute top-3 left-3">Featured</span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="heading-3 truncate">{vendor.businessName}</h3>
          <div className="flex items-center gap-1 shrink-0 text-body-sm font-medium text-neutral-800">
            <Star className="size-4 fill-accent-500 text-accent-500" />
            {vendor.ratingAvg.toFixed(1)}
          </div>
        </div>

        <div className="flex items-center gap-1 text-body-sm text-neutral-600">
          <MapPin className="size-3.5 shrink-0" />
          {vendor.city}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {vendor.categories.map((category) => (
            <span key={category} className="badge-neutral">
              {category}
            </span>
          ))}
        </div>

        <p className="prose-sm line-clamp-2">{vendor.description}</p>

        <div className="flex items-center justify-between mt-1 pt-3 border-t border-neutral-100">
          <span className="text-body-sm text-neutral-600">
            {formatNaira(vendor.priceRangeMin)} – {formatNaira(vendor.priceRangeMax)}
          </span>
        </div>
      </div>
    </Link>
  );
}
