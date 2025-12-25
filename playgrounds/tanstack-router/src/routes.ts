import { createRootRoute, createRoute } from "@tanstack/react-router"
import { About } from "./pages/about"
import { Home } from "./pages/home"
import { Root } from "./pages/root"

const rootRoute = createRootRoute({
  component: Root,
})

const indexRoute = createRoute({
  component: Home,
  getParentRoute: () => rootRoute,
  path: "/",
})

const aboutRoute = createRoute({
  component: About,
  getParentRoute: () => rootRoute,
  path: "/about",
})

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])
