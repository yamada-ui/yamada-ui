import { createRoot } from "react-dom/client"
import { App } from "./app"
import { UIProvider } from "@yamada-ui/react"
import { theme, config } from "theme"

const container = document.getElementById("app")

const root = createRoot(container!)

root.render(
  <UIProvider theme={theme} config={config}>
    <App />
  </UIProvider>,
)
