import type { CSSUIObject } from "@yamada-ui/core"
import { getCSS, useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { useCallback, useId } from "react"
import type { CellProps } from "recharts"
import type { RequiredChartPropGetter } from "./chart.types"
import type { PieChartCell, PieChartOptions } from "./pie-chart"

type UseChartCell = Pick<PieChartOptions, "data"> & {
  styles: Dict<CSSUIObject>
}

export const useChartCell = (arg: UseChartCell) => {
  const uuid = useId()
  const { theme } = useTheme()

  const cellPropsList = arg.data.map((item, index) => {
    const id = `${uuid}-${item.color}`
    const color = `var(--ui-cell-${index})`

    return {
      id,
      color,
    }
  })

  const getCellProps: RequiredChartPropGetter<
    "div",
    { item: PieChartCell; index: number },
    Omit<CellProps, "ref">
  > = useCallback(
    ({ item, index, className, ...rest }, ref = null) => {
      const { id, color } = cellPropsList[index]

      const cellStyleClassName = getCSS(arg.styles.cell)(theme)

      return {
        ref,
        className: cx(className, cellStyleClassName),
        id,
        stroke: color,
        fill: color,
        dataKey: item.name,
        ...(rest as Omit<CellProps, "dataKey">),
      }
    },
    [arg.styles.cell, cellPropsList, theme],
  )
  return { getCellProps }
}
