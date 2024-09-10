import type { ThemeToken } from "../theme"
import { tokenToVar, type Transform } from "./utils"

export const generateToken =
  (token: ThemeToken): Transform =>
  (value, theme) =>
    tokenToVar(token, value)(theme)
