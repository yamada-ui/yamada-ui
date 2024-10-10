import { App } from "@/app"
import { config, theme } from "@/theme"
import {
  getColorModeScript,
  getThemeSchemeScript,
  UIProvider,
} from "@yamada-ui/react"
import ReactDOM from "react-dom/client"

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
  <UIProvider config={config} theme={theme}>
    <App />
  </UIProvider>,
)
