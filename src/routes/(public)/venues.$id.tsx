import { VenueDetailsPage } from "#/modules/public/pages/venue-details-page.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/venues/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <VenueDetailsPage />;
}
