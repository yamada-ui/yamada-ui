import type { CSSObject } from "../core"
import {
  getMemoizedObject as get,
  merge as mergeObject,
} from "@yamada-ui/utils"
import { defaultTheme } from "../theme"

/**
 * Create a new style by inheriting the default style.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendstyle
 */
export function extendStyle(
  name: "globalStyle" | "resetStyle",
  style: CSSObject,
): CSSObject {
  return mergeObject(get<CSSObject>(defaultTheme, `styles.${name}`, {}), style)
}
