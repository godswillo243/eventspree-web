import { VendorDetailsPage } from "@/modules/public/pages/vendor-details-page.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/vendors/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <VendorDetailsPage />;
}
