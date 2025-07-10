import type { ColorScheme } from "../system"
import type { TransformOptions } from "./utils"
import { isArray, TONES } from "../../utils"
import { getVarName } from "../system"
import { conditions } from "./conditions"
import { tokenToVar } from "./utils"

function createColorSchemeVariables(value: ColorScheme) {
  return function ({ system }: TransformOptions) {
    return {
      ...Object.fromEntries(
        TONES.map((tone) => [
          getVarName(system)(`colorScheme-${tone}`),
          tokenToVar(system)("colors", `${value}.${tone}`),
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
          getVarName(system)(`colorScheme-${token}`),
          tokenToVar(system)("colors", `${value}.${token}`),
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
      [conditions._dark]: createColorSchemeVariables(darkValue)(options),
    }
  } else {
    return createColorSchemeVariables(value)(options)
  }
}
