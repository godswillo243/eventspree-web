import { BookingCard } from "#/components/shared/cards/booking-card.tsx";
import { ImageGallery } from "#/components/shared/image-gallery.tsx";
import { ReviewItem } from "#/components/shared/review-item.tsx";
import { formatNaira } from "#/lib/utils.ts";
import { Breadcrumbs } from "@/components/shared/breadcrumb.tsx";
import { reviews, venues } from "@/mocks/data.ts";
import { useParams } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";

export const VenueDetailsPage = () => {
  const { id: venueId } = useParams({ from: "/(public)/venues/$id" });
  const venue = venues.find((v) => v.id === venueId);
  if (!venue) return;
  const reviewCount = reviews.length;

  const handleSendInquiry = () => {};

  return (
    <div className="layout-container">
      <Breadcrumbs
        items={[{ label: "Vendors", to: "/browse?tab=vendors" }, { label: venue.name }]}
        className="mb-4"
      />

      <ImageGallery images={venue.portfolioImages} alt={venue.name} />

      {/* ── Two-column content ── */}
      <div className="flex flex-col md:flex-row gap-8 mt-8 pb-24 md:pb-12">
        {/* Left column */}
        <div className="flex-1 md:max-w-[900px] flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <h1 className="heading-2">{venue.name}</h1>
            <div className="flex items-center gap-1 shrink-0 prose-body">
              <Star className="size-4 fill-accent-500 text-accent-500" />
              {venue.ratingAvg} ({reviewCount} reviews)
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {venue.amenities.map((cat) => (
              <span key={cat} className="badge-neutral">
                {cat}
              </span>
            ))}
            <div className="flex items-center gap-1">
              <MapPin className="text-neutral-600 size-4" />
              <span className="prose-sm">{venue.city}</span>
            </div>
          </div>

          {/* Mobile booking card — shown inline here since sidebar isn't sticky below md */}
          <BookingCard
            priceMin={venue.pricePerEventMin}
            priceMax={venue.pricePerEventMax}
            onSendInquiry={handleSendInquiry}
            className="md:hidden"
          />

          <div className="divider" />

          <div className="flex flex-col gap-3">
            <h3 className="heading-3">About</h3>
            <p className="prose-body">{venue.description}</p>
          </div>

          <div className="divider" />

          <div className="flex flex-col gap-4">
            <h3 className="heading-3">Reviews ({reviewCount})</h3>
            <div className="flex flex-col gap-4">
              {reviews.map((review, i) => (
                <ReviewItem key={i} date={new Date().toString()} {...review} />
              ))}
            </div>
          </div>
        </div>

        {/* Right column — desktop only, sticky */}
        {/* DEV NOTE: sticky on scroll, offset accounts for fixed header height if one exists */}
        <div className="hidden md:block w-[400px] shrink-0">
          <BookingCard
            priceMin={venue.pricePerEventMin}
            priceMax={venue.pricePerEventMax}
            onSendInquiry={handleSendInquiry}
            className="sticky top-6"
          />
        </div>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-0 border-t border-neutral-200 px-4 py-3 flex items-center justify-between gap-4 shadow-lg z-30">
        <div>
          <p className="prose-sm font-semibold text-neutral-800">
            {formatNaira(venue.pricePerEventMin)}+
          </p>
          <p className="caption">Starting price</p>
        </div>
        <button onClick={handleSendInquiry} className="button-primary">
          Send Inquiry
        </button>
      </div>
    </div>
  );
};
