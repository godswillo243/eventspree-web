import { PublicLayout } from "#/modules/public/_layout.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PublicLayout />;
}
