import type { Dict } from "@yamada-ui/utils"
import type { CSSFunction } from "../css"
import type { ColorScheme, StyledTheme } from "../theme.types"
import { isArray, TONES } from "../../utils"
import { getVarName } from "../css"
import { pseudos } from "../pseudos"
import { tokenToVar } from "./utils"

function createColorSchemeVariables(value: ColorScheme) {
  return function (theme: StyledTheme) {
    return {
      ...Object.fromEntries(
        TONES.map((tone) => [
          getVarName(`colorScheme-${tone}`)(theme),
          tokenToVar("colors", `${value}.${tone}`)(theme),
        ]),
      ),
      ...Object.fromEntries(
        [
          "contrast",
          "fg",
          "subtle",
          "muted",
          "emphasized",
          "solid",
          "outline",
        ].map((token) => [
          getVarName(`colorScheme-${token}`)(theme),
          tokenToVar("colors", `${value}.${token}`)(theme),
        ]),
      ),
    }
  }
}

export function colorScheme(
  value: any,
  theme: StyledTheme,
  _css?: CSSFunction,
  _prev?: Dict,
) {
  if (isArray(value)) {
    const [lightValue, darkValue] = value

    return {
      ...createColorSchemeVariables(lightValue)(theme),
      [pseudos._dark]: createColorSchemeVariables(darkValue)(theme),
    }
  } else {
    return createColorSchemeVariables(value)(theme)
  }
}
