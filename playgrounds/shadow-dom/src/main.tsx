import { UIProvider } from "@yamada-ui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app"
import { ShadowUIProvider } from "./shadow-ui-provider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <App />
    </UIProvider>

    <ShadowUIProvider>
      <App />
    </ShadowUIProvider>
  </StrictMode>,
)
