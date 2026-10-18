import { LandingPage } from '#/modules/public/pages/landing.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LandingPage />
}
