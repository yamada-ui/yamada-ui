import type { Transform } from "./utils"

export function generateFunction(func: string): Transform {
  return function (value) {
    return `${func}(${value})`
  }
}
