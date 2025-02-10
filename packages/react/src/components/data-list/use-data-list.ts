import type { PropGetter, ThemeProps } from "../../core"
import type { HTMLUIProps } from "../../core"
import type { DataListItemProps } from "./data-list"
import type { DataListStyle } from "./data-list.style"
import { dataAttr, isArray, isNumber } from "@yamada-ui/utils"
import { useCallback, useState } from "react"
import { mergeVars } from "../../core"
import { useUpdateEffect } from "../../utils"

export type DataListOrientation = "horizontal" | "vertical"

export interface UseDataListProps
  extends HTMLUIProps<"dl">,
    ThemeProps<DataListStyle> {
  /**
   * The number of columns.
   * If `orientation` is `"horizontal"` and `items` is not set, please set this.
   */
  col?: number
  /**
   * If provided, generate elements based on items.
   */
  items?: DataListItemProps[]
  /**
   * The orientation of the data list.
   *
   * @default 'horizontal'
   */
  orientation?: DataListOrientation
}

export const useDataList = ({
  variant,
  col: colProp,
  items = [],
  orientation = "horizontal",
  vars,
}: UseDataListProps) => {
  const [col, setCol] = useState(() => {
    if (isNumber(colProp)) return colProp

    let col = 0

    items.forEach(({ description, term }) => {
      const termCount = !term ? 0 : isArray(term) ? term.length : 1
      const descriptionCount = !description
        ? 0
        : isArray(description)
          ? description.length
          : 1

      col = Math.max(col, termCount + descriptionCount)
    })

    return col
  })

  const grid = variant === "grid"

  useUpdateEffect(() => {
    if (isNumber(colProp)) return

    let col = 0

    items.forEach(({ description, term }) => {
      const termCount = !term ? 0 : isArray(term) ? term.length : 1
      const descriptionCount = !description
        ? 0
        : isArray(description)
          ? description.length
          : 1

      col = Math.max(col, termCount + descriptionCount)
    })

    setCol(col)
  }, [items, colProp])

  const getRootProps: PropGetter<"dl"> = useCallback(
    (props) => ({
      "data-grid": dataAttr(grid),
      "data-orientation": orientation,
      vars: mergeVars(vars, [{ name: "col", value: col }]),
      ...props,
    }),
    [grid, orientation, col, vars],
  )

  const getItemProps: PropGetter = useCallback(
    (props) => ({
      "data-grid": dataAttr(grid),
      "data-orientation": orientation,
      ...props,
    }),
    [grid, orientation],
  )

  const getTermProps: PropGetter<"dt"> = useCallback(
    (props) => ({
      "data-grid": dataAttr(grid),
      "data-orientation": orientation,
      ...props,
    }),
    [grid, orientation],
  )

  const getDescriptionProps: PropGetter<"dd"> = useCallback(
    (props) => ({
      "data-grid": dataAttr(grid),
      "data-orientation": orientation,
      ...props,
    }),
    [grid, orientation],
  )

  return {
    getDescriptionProps,
    getItemProps,
    getRootProps,
    getTermProps,
  }
}

export type UseDataListReturn = ReturnType<typeof useDataList>
