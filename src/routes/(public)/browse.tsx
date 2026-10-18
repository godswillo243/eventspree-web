import { BrowsePage } from "#/modules/public/pages/browse.tsx";
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/browse')({
    component: RouteComponent,
});

function RouteComponent() {
    return <BrowsePage />;
}
