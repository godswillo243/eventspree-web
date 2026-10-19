import { Star } from "lucide-react";

type ReviewItemProps = {
  reviewerName: string;
  rating: number;
  comment: string;
  date: string; // pre-formatted e.g. "2 weeks ago"
  avatarUrl?: string;
};

export function ReviewItem({ reviewerName, rating, comment, date, avatarUrl }: ReviewItemProps) {
  return (
    <div className="flex gap-3">
      <div className="avatar-md shrink-0">
        {avatarUrl ? (
          <img src={avatarUrl} alt={reviewerName} className="w-full h-full object-cover" />
        ) : (
          reviewerName.charAt(0)
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="prose-default font-semibold text-neutral-800">{reviewerName}</span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-3.5 ${i < rating ? "fill-accent-500 text-accent-500" : "text-neutral-200"}`}
              />
            ))}
          </div>
        </div>
        <p className="prose-sm">{comment}</p>
        <span className="caption">{date}</span>
      </div>
    </div>
  );
}
