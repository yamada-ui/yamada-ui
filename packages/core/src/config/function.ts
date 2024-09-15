import type { Transform } from "./utils"

export const generateFunction =
  (func: string): Transform =>
  (value) =>
    `${func}(${value})`
