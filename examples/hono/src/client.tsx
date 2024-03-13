import {
  ColorModeScript,
  ThemeSchemeScript,
  UIProvider,
  colorModeManager,
  themeSchemeManager,
} from "@yamada-ui/react"
import type { ReactNode } from "react"
import { createRoot } from "react-dom/client"
import { Layout } from "./components/layouts"
import { theme, config } from "./theme"

const App = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ColorModeScript
        type="cookie"
        nonce="testing"
        initialColorMode={config.initialColorMode}
      />
      <ThemeSchemeScript
        type="cookie"
        nonce="testing"
        initialThemeScheme={config.initialThemeScheme}
      />

      <UIProvider
        config={config}
        theme={theme}
        colorModeManager={colorModeManager.cookieStorage}
        themeSchemeManager={themeSchemeManager.cookieStorage}
      >
        {children}
      </UIProvider>
    </>
  )
}

const domNode = document.getElementById("root")!
const root = createRoot(domNode)
root.render(
  <App>
    <Layout />
  </App>,
)
