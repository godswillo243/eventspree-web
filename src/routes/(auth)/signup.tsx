import { SignupPage } from '#/modules/auth/pages/signup.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignupPage />
}
