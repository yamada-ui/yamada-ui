import type { UIStyle, UIStyleProps } from "../core"
import {
  getMemoizedObject as get,
  merge as mergeObject,
  noop,
  runIfFunc,
} from "@yamada-ui/utils"
import { defaultTheme } from "../theme"

/**
 * Create a new style by inheriting the default style.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendstyle
 */
export function extendStyle(
  name: "globalStyle" | "resetStyle",
  style: UIStyle,
): UIStyle {
  const props: UIStyleProps = {
    theme: {
      changeThemeScheme: noop,
      themeScheme: "base",
      __breakpoints: undefined,
      __config: {},
      __cssMap: {},
      __cssVars: {},
    },
  }

  return mergeObject(
    runIfFunc(get<UIStyle>(defaultTheme, `styles.${name}`, {}), props),
    runIfFunc(style, props),
  )
}
