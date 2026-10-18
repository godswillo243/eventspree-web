import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/terms')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(public)/terms"!</div>
}
