import type { Dict } from "../../utils"
import type { Transform } from "./utils"
import { filterUndefined, isArray, toKebabCase } from "../../utils"
import { tokenToVar } from "./utils"

export const generateAtRule =
  (identifier: string): Transform =>
  (values, { theme }) => {
    if (!isArray(values)) return values

    return values.reduce<Dict>(
      (
        prev,
        {
          type,
          name,
          css,
          h,
          height,
          maxH,
          maxHeight,
          maxW,
          maxWidth,
          minH,
          minHeight,
          minW,
          minWidth,
          prefersColorMode,
          query,
          w,
          width,
          ...rest
        },
      ) => {
        width ??= w
        minWidth ??= minW
        maxWidth ??= maxW
        height ??= h
        minHeight ??= minH
        maxHeight ??= maxH

        if (!query) {
          const resolvedRest = filterUndefined({
            height,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            prefersColorScheme: prefersColorMode,
            width,
            ...rest,
          })

          query = Object.entries(resolvedRest)
            .map(([key, value]) => {
              value = tokenToVar(theme)("sizes", value)

              return `(${toKebabCase(key)}: ${value})`
            })
            .join(" and ")
        }

        const condition = `@${identifier} ${type ?? name ?? ""} ${query}`

        prev[condition] = css

        return prev
      },
      {},
    )
  }
