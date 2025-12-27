import { createRootRoute, createRoute } from "@tanstack/react-router"
import { Root } from "./pages/root"

const rootRoute = createRootRoute({
  component: Root,
})

const indexRoute = createRoute({
  component: Root,
  getParentRoute: () => rootRoute,
  path: "/",
})

export const routeTree = rootRoute.addChildren([indexRoute])
