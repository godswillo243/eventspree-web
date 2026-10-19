import { formatNaira } from "@/lib/utils";

type BookingCardProps = {
  priceMin: number;
  priceMax: number;
  onSendInquiry: () => void;
  className?: string;
};

export function BookingCard({
  priceMin,
  priceMax,
  onSendInquiry,
  className = "",
}: BookingCardProps) {
  return (
    <div className={`card-elevated flex flex-col gap-4 ${className}`}>
      <div>
        <h3 className="heading-3">
          {formatNaira(priceMin)} – {formatNaira(priceMax)}
        </h3>
        <p className="prose-sm">Typical price range</p>
      </div>

      <div className="divider" />

      <button onClick={onSendInquiry} className="button-primary w-full justify-center">
        Send Inquiry
      </button>

      <p className="caption text-center">You won't be charged yet</p>
    </div>
  );
}
