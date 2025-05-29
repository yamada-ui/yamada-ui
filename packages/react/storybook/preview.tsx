import type { DocsContainerProps } from "@storybook/blocks"
import type { Preview } from "@storybook/react"
import type { FC, PropsWithChildren } from "react"
import { DocsContainer } from "@storybook/blocks"
import { addons, useGlobals } from "@storybook/preview-api"
import { themes } from "@storybook/theming"
import { useEffect, useState } from "react"
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode"
import { isRtl, UIProvider, useColorMode, VStack } from "../src"
import { customThemes } from "./themes"

const channel = addons.getChannel()

const useDarkMode = (callback?: (darkMode: boolean) => void) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, callback ?? setDarkMode)

    return () => channel.off(DARK_MODE_EVENT_NAME, callback ?? setDarkMode)
  }, [callback, setDarkMode])

  return darkMode
}

const App: FC<PropsWithChildren> = ({ children }) => {
  const { changeColorMode } = useColorMode()

  useDarkMode((darkMode) => {
    changeColorMode(darkMode ? "dark" : "light")
  })

  return (
    <VStack
      align="start"
      gap={{ base: "lg", md: "md" }}
      minH={{
        base: "calc(100dvh - {spaces.lg} * 2)",
        md: "calc(100dvh - {spaces.md} * 2)",
      }}
      p={{ base: "lg", md: "md" }}
    >
      {children}
    </VStack>
  )
}

const preview: Preview = {
  globalTypes: {},
  initialGlobals: {
    locale: "en-US",
    locales: {
      "en-US": { icon: "🇺🇸", right: "en-US", title: "English" },
      "ja-JP": { icon: "🇯🇵", right: "ja-JP", title: "日本語" },
      // eslint-disable-next-line perfectionist/sort-objects
      "ar-EG": { icon: "🇸🇦", right: "ar-EG", title: "العربية" },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    controls: { expanded: true },
    darkMode: { ...customThemes },
    docs: {
      container: ({
        children,
        theme,
        ...rest
      }: PropsWithChildren<DocsContainerProps>) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const darkMode = useDarkMode()
        const colorMode = darkMode ? "dark" : "light"

        theme = themes[colorMode]

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
        order: ["Components", "Hooks", "Styled System", "Theme"],
      },
    },
  },

  decorators: [
    (Story) => {
      const [{ locale }] = useGlobals()
      const dir = isRtl(locale) ? "rtl" : "ltr"

      document.documentElement.dir = dir

      return (
        <UIProvider dir={dir} locale={locale}>
          <App>
            <Story />
          </App>
        </UIProvider>
      )
    },
  ],
}

export default preview
