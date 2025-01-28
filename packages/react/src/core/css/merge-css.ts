import type { CSSObject } from "./index.types"
import { toArray } from "@yamada-ui/utils"

export const mergeCSS = (
  a?: CSSObject | CSSObject[],
  b?: CSSObject | CSSObject[],
) => {
  if (!a) return b
  if (!b) return a

  return [...toArray(a), ...toArray(b)]
}
