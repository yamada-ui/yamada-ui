import { createRouter } from "@tanstack/react-router"
import { routeTree } from "./routes.ts"

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
