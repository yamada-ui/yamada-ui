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
          "bg",
          "ghost",
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
