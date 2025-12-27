import { RouterProvider } from "@tanstack/react-router"
import { UIProvider } from "@yamada-ui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { router } from "./router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </StrictMode>,
)
