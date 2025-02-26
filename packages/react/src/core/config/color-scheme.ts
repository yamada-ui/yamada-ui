import type { ColorScheme } from "../theme"
import type { TransformOptions } from "./utils"
import { isArray, TONES } from "../../utils"
import { getVarName } from "../css"
import { pseudos } from "../pseudos"
import { tokenToVar } from "./utils"

function createColorSchemeVariables(value: ColorScheme) {
  return function ({ theme }: TransformOptions) {
    return {
      ...Object.fromEntries(
        TONES.map((tone) => [
          getVarName(theme)(`colorScheme-${tone}`),
          tokenToVar(theme)("colors", `${value}.${tone}`),
        ]),
      ),
      ...Object.fromEntries(
        [
          "contrast",
          "fg",
          "subtle",
          "muted",
          "emphasized",
          "bg",
          "ghost",
          "solid",
          "outline",
        ].map((token) => [
          getVarName(theme)(`colorScheme-${token}`),
          tokenToVar(theme)("colors", `${value}.${token}`),
        ]),
      ),
    }
  }
}

export function colorScheme(value: any, options: TransformOptions) {
  if (isArray(value)) {
    const [lightValue, darkValue] = value

    return {
      ...createColorSchemeVariables(lightValue)(options),
      [pseudos._dark]: createColorSchemeVariables(darkValue)(options),
    }
  } else {
    return createColorSchemeVariables(value)(options)
  }
}
