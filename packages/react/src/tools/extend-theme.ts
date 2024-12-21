import type { Dict } from "@yamada-ui/utils"
import type { UsageTheme } from "../core"
import {
  isFunction,
  merge as mergeObject,
  omitObject,
  pickObject,
  runIfFunc,
} from "@yamada-ui/utils"
import { baseTheme, defaultTheme } from "../theme"

interface Options {
  merge?: boolean
  omit?: (keyof typeof defaultTheme)[]
  pick?: (keyof typeof defaultTheme)[]
}

function createExtendTheme(initialTheme: Dict = defaultTheme) {
  return function (
    ...extensions: (((theme: UsageTheme) => UsageTheme) | UsageTheme)[]
  ) {
    return function ({
      merge = true,
      omit = [],
      pick = [],
    }: Options = {}): Dict {
      let overrides = [...extensions]
      let theme = extensions[extensions.length - 1]

      if (omit.length) initialTheme = omitObject(initialTheme, omit)
      if (pick.length) initialTheme = pickObject(initialTheme, pick)

      if (!isFunction(theme) && overrides.length > 1) {
        overrides = overrides.slice(0, overrides.length - 1)

        if (merge) theme = mergeObject(initialTheme, theme)
      } else {
        theme = merge ? initialTheme : {}
      }

      return overrides.reduce<Dict>(
        (prev, extension) => mergeObject(prev, runIfFunc(extension, prev)),
        theme ?? {},
      )
    }
  }
}

/**
 * Create a new theme by inheriting the default theme.
 * It is also possible to pass multiple objects and specify options.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendtheme
 */
export const extendTheme = createExtendTheme(defaultTheme)

/**
 * This creates a new theme that inherits only the tokens such as global styles and colors of the default theme.
 * It is also possible to pass multiple objects and specify options.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendbasetheme
 */
export const extendBaseTheme = createExtendTheme(baseTheme)
