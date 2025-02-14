import type { ThemeToken } from "../theme"
import type { Transform } from "./utils"
import { tokenToVar } from "./utils"

export function generateToken(token: ThemeToken): Transform {
  return function (value, { theme }) {
    return tokenToVar(token, value)(theme)
  }
}
