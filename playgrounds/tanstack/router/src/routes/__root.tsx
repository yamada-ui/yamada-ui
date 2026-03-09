import { createRootRoute, Outlet } from "@tanstack/react-router"
import { UIProvider } from "@yamada-ui/react"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <UIProvider>
      <Outlet />
    </UIProvider>
  )
}
