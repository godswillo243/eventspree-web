type SpinnerSize = "sm" | "md" | "lg";
type SpinnerColor = "primary" | "neutral" | "white";

const SIZE_MAP: Record<SpinnerSize, string> = {
  sm: "size-4 border-2",
  md: "size-6 border-2",
  lg: "size-10 border-[3px]",
};

const COLOR_MAP: Record<SpinnerColor, string> = {
  primary: "border-primary-100 border-t-primary-600",
  neutral: "border-neutral-200 border-t-neutral-600",
  white: "border-white/30 border-t-white",
};

type SpinnerProps = {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
  label?: string;
};

export function Spinner({
  size = "md",
  color = "primary",
  className = "",
  label = "Loading",
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`inline-block rounded-full animate-spin ${SIZE_MAP[size]} ${COLOR_MAP[color]} ${className}`}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}
