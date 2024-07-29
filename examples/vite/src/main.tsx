import {
  UIProvider,
  getColorModeScript,
  getThemeSchemeScript,
} from "@yamada-ui/react"
import ReactDOM from "react-dom/client"
import { App } from "@/app"
import { theme, config } from "@/theme"

const injectScript = (textContent: string) => {
  const script = document.createElement("script")

  script.textContent = textContent

  document.head.appendChild(script)
}

injectScript(
  getColorModeScript({
    initialColorMode: config.initialColorMode,
  }),
)

injectScript(
  getThemeSchemeScript({
    initialThemeScheme: config.initialThemeScheme,
  }),
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UIProvider theme={theme} config={config}>
    <App />
  </UIProvider>,
)
