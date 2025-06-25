import type { ThemeToken } from "../system"
import type { Transform } from "./utils"
import { tokenToVar } from "./utils"

export function generateToken(token: ThemeToken): Transform {
  return function (value, { system }) {
    return tokenToVar(system)(token, value)
  }
}
