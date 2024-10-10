import { UIProvider } from "@yamada-ui/react"
import { createRoot } from "react-dom/client"
import { config, theme } from "theme"
import { App } from "./app"

const container = document.getElementById("app")

const root = createRoot(container!)

root.render(
  <UIProvider config={config} theme={theme}>
    <App />
  </UIProvider>,
)
