import { Link } from "@tanstack/react-router";
import { Star, MapPin, Users } from "lucide-react";
import { formatNaira } from "@/lib/utils";
import type { Venue } from "@/mocks/data";

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link
      to="/venues/$id"
      params={{ id: venue.id }}
      className="card-hover group overflow-hidden p-0 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
        <img
          src={venue.portfolioImages[0]}
          alt={venue.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {venue.isFeatured && <span className="badge-featured absolute top-3 left-3">Featured</span>}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="heading-3 truncate">{venue.name}</h3>
          <div className="flex items-center gap-1 shrink-0 text-body-sm font-medium text-neutral-800">
            <Star className="size-4 fill-accent-500 text-accent-500" />
            {venue.ratingAvg.toFixed(1)}
          </div>
        </div>

        <div className="flex items-center gap-3 text-body-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5 shrink-0" />
            {venue.city}
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5 shrink-0" />
            {venue.capacityMin}–{venue.capacityMax}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {venue.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="badge-neutral">
              {amenity}
            </span>
          ))}
          {venue.amenities.length > 3 && (
            <span className="badge-neutral">+{venue.amenities.length - 3} more</span>
          )}
        </div>

        <p className="prose-sm line-clamp-2">{venue.description}</p>

        <div className="flex items-center justify-between mt-1 pt-3 border-t border-neutral-100">
          <span className="text-body-sm text-neutral-600">
            {formatNaira(venue.pricePerEventMin)} – {formatNaira(venue.pricePerEventMax)}
          </span>
        </div>
      </div>
    </Link>
  );
}
