import type { CSSObject } from "./index.type"
import { filterEmpty } from "../../utils"

export const mergeCSS = (...css: (CSSObject | CSSObject[] | undefined)[]) => {
  return filterEmpty(css).flat()
}
