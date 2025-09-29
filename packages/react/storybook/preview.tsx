import type { Preview, StoryContext } from "@storybook/react-vite"
import { useEffect } from "react"
import { GLOBALS_UPDATED } from "storybook/internal/core-events"
import { addons } from "storybook/preview-api"
import { extendConfig, isRtl, UIProvider, useColorMode, VStack } from "../src"
import { themes } from "./themes"

const channel = addons.getChannel()

const preview: Preview = {
  decorators: [
    function (Story) {
      const { changeColorMode } = useColorMode()

      useEffect(() => {
        const onUpdateGlobals = ({ globals }: StoryContext) => {
          changeColorMode(globals.colorMode)
        }

        channel.on(GLOBALS_UPDATED, onUpdateGlobals)

        return () => {
          channel.off(GLOBALS_UPDATED, onUpdateGlobals)
        }
      }, [changeColorMode])

      return <Story />
    },
    function (Story, { globals, parameters }) {
      const { layout } = parameters
      const { colorMode: defaultColorMode, locale } = globals
      const dir = isRtl(globals.locale) ? "rtl" : "ltr"
      const config = extendConfig({ defaultColorMode })
      const centered = layout === "centered"

      return (
        <UIProvider config={config} dir={dir} locale={locale}>
          <VStack
            align="start"
            gap={{ base: "lg", md: "md" }}
            justify={centered ? "center" : "start"}
            m={centered ? "-md" : "0"}
            minH="100dvh"
            p={{ base: "lg", md: "md" }}
          >
            <Story />
          </VStack>
        </UIProvider>
      )
    },
  ],
  globalTypes: {
    colorMode: {
      toolbar: {
        items: [
          { icon: "sun", title: "Light", value: "light" },
          { icon: "moon", title: "Dark", value: "dark" },
        ],
      },
    },
    locale: {
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { right: "🇺🇸", title: "English", value: "en-US" },
          { right: "🇯🇵", title: "日本語", value: "ja-JP" },
          { right: "🇰🇷", title: "한국어", value: "ko-KR" },
          { right: "🇸🇦", title: "العربية", value: "ar-EG" },
        ],
      },
    },
  },
  initialGlobals: {
    colorMode: "light",
    locale: "en-US",
  },
  parameters: {
    docs: { codePanel: true },
    layout: "fullscreen",
    options: {
      storySort: {
        order: ["Components", "Hooks", "Styled System", "Theme"],
      },
    },
    themes,
  },
}

export default preview
