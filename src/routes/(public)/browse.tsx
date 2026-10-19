import { BrowsePage } from "@/modules/public/pages/browse.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/browse")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): { tab: "venue" | "vendor" } => {
    return { tab: search.tab === "venue" || search.tab === "vendor" ? search.tab : "venue" };
  },
});

function RouteComponent() {
  return <BrowsePage />;
}
