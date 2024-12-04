import type { DocsContainerProps } from "@storybook/blocks"
import type { Preview } from "@storybook/react"
import type { FC, PropsWithChildren } from "react"
import { DocsContainer } from "@storybook/blocks"
import { addons } from "@storybook/preview-api"
import { themes } from "@storybook/theming"
import { UIProvider, useColorMode, VStack } from "@yamada-ui/react"
import { useEffect, useState } from "react"
import { DARK_MODE_EVENT_NAME, useDarkMode } from "storybook-dark-mode"
import { A11Y_RULES } from "./constant"
import { customThemes } from "./themes"

const channel = addons.getChannel()

const App: FC<PropsWithChildren> = ({ children }) => {
  const { changeColorMode } = useColorMode()
  const darkMode = useDarkMode()
  const colorMode = darkMode ? "dark" : "light"

  useEffect(() => {
    changeColorMode(colorMode)
  }, [colorMode])

  return (
    <VStack align="start" p="md">
      {children}
    </VStack>
  )
}

export const preview: Preview = {
  parameters: {
    a11y: { config: { rules: A11Y_RULES } },
    backgrounds: { disable: true },
    controls: { expanded: true },
    darkMode: { ...customThemes },
    docs: {
      container: ({
        children,
        theme,
        ...rest
      }: PropsWithChildren<DocsContainerProps>) => {
        const [darkMode, setDarkMode] = useState(false)
        const colorMode = darkMode ? "dark" : "light"

        theme = themes[colorMode]

        useEffect(() => {
          channel.on(DARK_MODE_EVENT_NAME, setDarkMode)

          return () => channel.off(DARK_MODE_EVENT_NAME, setDarkMode)
        }, [channel, setDarkMode])

        return (
          <DocsContainer theme={theme} {...rest}>
            <UIProvider colorMode={colorMode}>{children}</UIProvider>
          </DocsContainer>
        )
      },
    },
    layout: "fullscreen",
    options: {
      storySort: {
        order: ["Documents", ["Welcome", "*"], "Components", "Hooks", "System"],
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <UIProvider>
          <App>
            <Story />
          </App>
        </UIProvider>
      )
    },
  ],
}

export default preview
