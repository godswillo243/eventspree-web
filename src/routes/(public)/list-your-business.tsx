import { ListYourBusiness } from "#/modules/public/pages/list-your-business.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/list-your-business")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ListYourBusiness />;
}
