
import { ArrowRight, SearchIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section className="layout-container w-full min-h-128 bg-radial to-neutral-50 from-primary-500/50 flex flex-col items-center justify-center gap-6">
      <h1 className="heading-1 text-center">Plan Your Event, End to End.</h1>
      <p className="prose-body text-center">
        Find vendors and venues for your next event.
      </p>
      <div className="rounded-full bg-neutral-0 h-14 pl-4 flex items-center gap-2 w-full max-w-lg">
        <input
          className="outline-0 bg-transparent flex-1 text-body placeholder:text-neutral-400"
          placeholder="Search by city or category."
        />
        <button className="button-ghost rounded-full flex items-center justify-center size-12 p-0 h-auto aspect-square  ">
          <SearchIcon className="size-6" />
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        <button className="button-primary">Start Planning <ArrowRight /></button>
        <button className="button-secondary">List Your Business</button>
      </div>
    </section>
  );
};
