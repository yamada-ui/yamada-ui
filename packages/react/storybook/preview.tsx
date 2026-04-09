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
            css={{ "--space": { base: "spaces.lg", md: "spaces.md" } }}
            align="start"
            gap="{space}"
            justify={centered ? "center" : "start"}
            m={centered ? "-md" : "0"}
            minH="100dvh"
            p="{space}"
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
          { right: "🇯🇵", title: "日本語", value: "ja-JP" },
          { right: "🇬🇧", title: "English (UK)", value: "en-GB" },
          { right: "🇺🇸", title: "English (United States)", value: "en-US" },
          { right: "🇸🇦", title: "العربية", value: "ar-EG" },
          { right: "🇦🇪", title: "العربية (الإمارات)", value: "ar-AE" },
          { right: "🇧🇬", title: "Български", value: "bg-BG" },
          { right: "🇨🇿", title: "Čeština", value: "cs-CZ" },
          { right: "🇩🇰", title: "Dansk", value: "da-DK" },
          { right: "🇩🇪", title: "Deutsch", value: "de-DE" },
          { right: "🇬🇷", title: "Ελληνικά", value: "el-GR" },
          { right: "🇪🇸", title: "Español", value: "es-ES" },
          { right: "🇪🇪", title: "Eesti", value: "et-EE" },
          { right: "🇫🇮", title: "Suomi", value: "fi-FI" },
          { right: "🇨🇦", title: "Français (Canada)", value: "fr-CA" },
          { right: "🇫🇷", title: "Français", value: "fr-FR" },
          { right: "🇮🇱", title: "עברית", value: "he-IL" },
          { right: "🇭🇷", title: "Hrvatski", value: "hr-HR" },
          { right: "🇭🇺", title: "Magyar", value: "hu-HU" },
          { right: "🇮🇹", title: "Italiano", value: "it-IT" },
          { right: "🇱🇹", title: "Lietuvių", value: "lt-LT" },
          { right: "🇱🇻", title: "Latviešu", value: "lv-LV" },
          { right: "🇳🇱", title: "Nederlands", value: "nl-NL" },
          { right: "🇳🇴", title: "Norsk", value: "no-NO" },
          { right: "🇵🇱", title: "Polski", value: "pl-PL" },
          { right: "🇧🇷", title: "Português (Brasil)", value: "pt-BR" },
          { right: "🇷🇴", title: "Română", value: "ro-RO" },
          { right: "🇷🇺", title: "Русский", value: "ru-RU" },
          { right: "🇸🇰", title: "Slovenčina", value: "sk-SK" },
          { right: "🇸🇮", title: "Slovenščina", value: "sl-SI" },
          { right: "🇷🇸", title: "Српски", value: "sr-RS" },
          { right: "🇸🇪", title: "Svenska", value: "sv-SE" },
          { right: "🇹🇷", title: "Türkçe", value: "tr-TR" },
          { right: "🇺🇦", title: "Українська", value: "uk-UA" },
          { right: "🇨🇳", title: "中文 (简体)", value: "zh-CN" },
          { right: "🇹🇼", title: "中文 (繁體)", value: "zh-TW" },
          { right: "🇰🇷", title: "한국어", value: "ko-KR" },
        ],
      },
    },
  },
  initialGlobals: {
    colorMode: "light",
    locale: "en-US",
  },
  parameters: {
    a11y: {
      config: { rules: [{ id: "color-contrast", enabled: false }] },
      test: "error",
    },
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
