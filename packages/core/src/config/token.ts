import type { ThemeToken } from "../theme"
import { tokenToVar } from "./utils"
import type { Transform } from "./utils"

export function generateToken(token: ThemeToken): Transform {
  return function (value, theme) {
    return tokenToVar(token, value)(theme)
  }
}
