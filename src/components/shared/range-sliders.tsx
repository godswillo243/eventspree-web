// apps/web/src/components/RangeSlider.tsx
import { useCallback, useEffect, useRef, useState } from "react";

type RangeSliderProps = {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatLabel?: (value: number) => string;
  label?: string;
};

export function RangeSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  formatLabel = (v) => v.toString(),
  label,
}: RangeSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);

  const [minVal, maxVal] = value;

  const getPercent = useCallback((val: number) => ((val - min) / (max - min)) * 100, [min, max]);

  const valueFromClientX = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return min;
      const rect = trackRef.current.getBoundingClientRect();
      const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      const rawValue = min + ratio * (max - min);
      return Math.round(rawValue / step) * step;
    },
    [min, max, step],
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging) return;
      const newVal = valueFromClientX(e.clientX);

      if (dragging === "min") {
        onChange([Math.min(newVal, maxVal - step), maxVal]);
      } else {
        onChange([minVal, Math.max(newVal, minVal + step)]);
      }
    },
    [dragging, minVal, maxVal, step, onChange, valueFromClientX],
  );

  const handlePointerUp = useCallback(() => {
    setDragging(null);
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging, handlePointerMove, handlePointerUp]);

  const handleKeyDown = (thumb: "min" | "max") => (e: React.KeyboardEvent) => {
    let delta = 0;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") delta = step;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") delta = -step;
    if (delta === 0) return;

    e.preventDefault();
    if (thumb === "min") {
      onChange([Math.min(Math.max(minVal + delta, min), maxVal - step), maxVal]);
    } else {
      onChange([minVal, Math.max(Math.min(maxVal + delta, max), minVal + step)]);
    }
  };

  // Click on track (not on a thumb) jumps the nearest thumb to that position
  const handleTrackClick = (e: React.MouseEvent) => {
    if (dragging) return;
    const newVal = valueFromClientX(e.clientX);
    const distToMin = Math.abs(newVal - minVal);
    const distToMax = Math.abs(newVal - maxVal);

    if (distToMin <= distToMax) {
      onChange([Math.min(newVal, maxVal - step), maxVal]);
    } else {
      onChange([minVal, Math.max(newVal, minVal + step)]);
    }
  };

  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxVal);

  return (
    <div className="w-full">
      {label && <label className="label">{label}</label>}

      <div className="flex items-center justify-between mb-3">
        <span className="text-body-sm font-medium text-neutral-800">{formatLabel(minVal)}</span>
        <span className="text-body-sm text-neutral-400">–</span>
        <span className="text-body-sm font-medium text-neutral-800">{formatLabel(maxVal)}</span>
      </div>

      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative h-1.5 bg-neutral-200 rounded-full cursor-pointer select-none"
      >
        {/* Filled range between thumbs */}
        <div
          className="absolute h-1.5 bg-primary-500 rounded-full"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />

        {/* Min thumb */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Minimum value"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={minVal}
          onKeyDown={handleKeyDown("min")}
          onPointerDown={(e) => {
            e.stopPropagation();
            setDragging("min");
          }}
          className={`absolute top-1/2 size-4.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-neutral-0 border-2 border-primary-500 shadow-sm cursor-grab
            transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
            ${dragging === "min" ? "cursor-grabbing scale-110 shadow-md" : ""}`}
          style={{ left: `${minPercent}%` }}
        />

        {/* Max thumb */}
        <div
          role="slider"
          tabIndex={0}
          aria-label="Maximum value"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={maxVal}
          onKeyDown={handleKeyDown("max")}
          onPointerDown={(e) => {
            e.stopPropagation();
            setDragging("max");
          }}
          className={`absolute top-1/2 size-4.5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-neutral-0 border-2 border-primary-500 shadow-sm cursor-grab
            transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
            ${dragging === "max" ? "cursor-grabbing scale-110 shadow-md" : ""}`}
          style={{ left: `${maxPercent}%` }}
        />
      </div>
    </div>
  );
}
