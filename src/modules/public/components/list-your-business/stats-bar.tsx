// apps/web/src/components/landing/StatsBar.tsx
const STATS = [
  { value: "500+", label: "Active Vendors" },
  { value: "10,000+", label: "Events Booked" },
  { value: "4.8★", label: "Average Rating" },
];

export function StatsBar() {
  return (
    <section className="bg-primary-700">
      <div className="layout-container py-10!">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-h1 font-bold text-neutral-0">{stat.value}</span>
              <span className="caption text-neutral-0/80! uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
