import type { CSSObject } from "./index.types"
import { filterEmpty } from "../../utils"

export const mergeCSS = (...css: (CSSObject | CSSObject[] | undefined)[]) => {
  return filterEmpty(css).flat()
}
