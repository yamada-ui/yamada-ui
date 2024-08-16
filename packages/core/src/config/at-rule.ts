import { filterUndefined, toKebabCase, type Dict } from "@yamada-ui/utils"
import type { StyledTheme } from "../theme.types"
import type { Transform } from "./utils"
import { tokenToCSSVar } from "./utils"

export const generateAtRule =
  (identifier: string): Transform =>
  (values: any[], theme: StyledTheme) =>
    values.reduce<Dict>(
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
              value = tokenToCSSVar("sizes", value)(theme)

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
