import { ContactPage } from "#/modules/public/pages/contact.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactPage />;
}
