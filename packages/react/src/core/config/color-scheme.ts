import type { ColorScheme, StyledTheme } from "../theme.types"
import type { TransformOptions } from "./utils"
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

export function colorScheme(value: any, { theme }: TransformOptions) {
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
