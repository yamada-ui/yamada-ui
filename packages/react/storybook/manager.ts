import type { StoryContext } from "@storybook/react-vite"
import { useCallback, useEffect } from "react"
import { GLOBALS_UPDATED } from "storybook/internal/core-events"
import { Addon_TypesEnum } from "storybook/internal/types"
import { addons, useParameter } from "storybook/manager-api"
import { themes } from "./themes"

try {
  const cachedTheme = window.localStorage.getItem("theme")

  if (cachedTheme) {
    addons.setConfig({ theme: JSON.parse(cachedTheme) })
  } else {
    addons.setConfig({ theme: themes.light })
  }
} catch {
  addons.setConfig({ theme: themes.light })
}

addons.register("storybook/color-mode", function (api) {
  addons.add("storybook/color-mode", {
    type: Addon_TypesEnum.TOOL,
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: function ColorMode() {
      const { colorMode = "light" } = api.getGlobals()
      const customThemes = useParameter("themes", themes)
      const channel = api.getChannel()

      const setTheme = useCallback(
        (colorMode: string) => {
          const theme = customThemes[colorMode as keyof typeof customThemes]

          api.setOptions({ theme })

          window.localStorage.setItem("theme", JSON.stringify(theme))
        },
        [customThemes],
      )

      useEffect(() => {
        if (channel) {
          const onUpdateGlobals = ({ globals }: StoryContext) => {
            const { colorMode = "light" } = globals

            setTheme(colorMode)
          }

          channel.on(GLOBALS_UPDATED, onUpdateGlobals)

          return () => {
            channel.off(GLOBALS_UPDATED, onUpdateGlobals)
          }
        }
      }, [channel, colorMode, customThemes, setTheme])

      return null
    },
    title: "Color mode",
  })
})
