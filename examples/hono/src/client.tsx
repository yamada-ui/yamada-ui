import type { ReactNode } from "react"
import {
  colorModeManager,
  themeSchemeManager,
  UIProvider,
} from "@yamada-ui/react"
import { createRoot } from "react-dom/client"
import { Layout } from "./components/layouts"
import { config, theme } from "./theme"

const App = ({ children }: { children: ReactNode }) => {
  return (
    <UIProvider
      colorModeManager={colorModeManager.cookieStorage}
      config={config}
      theme={theme}
      themeSchemeManager={themeSchemeManager.cookieStorage}
    >
      {children}
    </UIProvider>
  )
}

const domNode = document.getElementById("root")!
const root = createRoot(domNode)
root.render(
  <App>
    <Layout />
  </App>,
)
