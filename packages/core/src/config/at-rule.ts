import { filterUndefined, isArray, toKebabCase } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import type { Transform } from "./utils"
import { tokenToVar } from "./utils"

export const generateAtRule =
  (identifier: string): Transform =>
  (values, theme) => {
    if (!isArray(values)) return values

    return values.reduce<Dict>(
      (
        prev,
        {
          type,
          name,
          query,
          css,
          w,
          width,
          minW,
          minWidth,
          maxW,
          maxWidth,
          h,
          height,
          minH,
          minHeight,
          maxH,
          maxHeight,
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
            width,
            minWidth,
            maxWidth,
            height,
            minHeight,
            maxHeight,
            ...rest,
          })

          query = Object.entries(resolvedRest)
            .map(([key, value]) => {
              value = tokenToVar("sizes", value)(theme)

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
