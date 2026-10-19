import { useState } from "react";
import { X as XIcon, ChevronLeft, ChevronRight } from "lucide-react";

type ImageGalleryProps = {
  images: string[];
  alt: string;
};

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const displayImages = images.slice(0, 5);
  const [hero, ...thumbnails] = displayImages;

  return (
    <>
      {/* ── Desktop: hero + 2x2 thumbnail grid ── */}
      <div className="hidden md:grid grid-cols-[2fr_1fr] gap-2 h-120">
        <button
          onClick={() => setLightboxIndex(0)}
          className="relative rounded-lg overflow-hidden cursor-pointer group"
        >
          <img
            src={hero}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {thumbnails.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i + 1)}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={img}
                alt={`${alt} ${i + 2}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {i === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center text-neutral-0 font-semibold">
                  +{images.length - 5} more
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile: swipeable horizontal carousel ── */}
      <div className="md:hidden -mx-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {displayImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="relative shrink-0 w-full snap-center aspect-4/3"
            >
              <img src={img} alt={`${alt} ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          {displayImages.map((_, i) => (
            <span key={i} className="size-1.5 rounded-full bg-neutral-300" />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-neutral-900/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-neutral-0 cursor-pointer"
            aria-label="Close"
          >
            <XIcon className="size-7" />
          </button>

          <button
            onClick={() => setLightboxIndex((i) => (i! > 0 ? i! - 1 : displayImages.length - 1))}
            className="absolute left-4 text-neutral-0 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="size-8" />
          </button>

          <img
            src={displayImages[lightboxIndex]}
            alt={alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-md"
          />

          <button
            onClick={() => setLightboxIndex((i) => (i! < displayImages.length - 1 ? i! + 1 : 0))}
            className="absolute right-4 text-neutral-0 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </>
  );
}
