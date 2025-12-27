import { createRootRoute } from "@tanstack/react-router"
import { Root } from "./pages/root"

const rootRoute = createRootRoute({
  component: Root,
})

export const routeTree = rootRoute
