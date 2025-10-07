import { UIProvider } from "@yamada-ui/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
)
