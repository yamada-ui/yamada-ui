import type { CSSUIObject } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { useCallback } from "react"
import type { CartesianGridProps } from "recharts"
import { getProps } from "./chart-utils"
import type { AxisType, ChartPropGetter, GridUIProps } from "./chart.types"
import { gridProperties } from "./chart.types"

export type UseChartGridOptions = {
  /**
   *  Props passed down to recharts 'CartesianGrid' component.
   */
  gridProps?: GridUIProps
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: AxisType
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   *
   * @default '5 5'
   */
  strokeDasharray?: string | number
}

type UseChartGridProps = UseChartGridOptions & {
  styles: Dict<CSSUIObject>
}

export const useChartGrid = ({
  gridProps = {},
  gridAxis = "x",
  strokeDasharray = "5 5",
  styles,
}: UseChartGridProps) => {
  const { theme } = useTheme()
  const [reChartsProps, propClassName] = getProps(
    [gridProps, gridProperties],
    styles.grid,
  )(theme)

  const getGridProps: ChartPropGetter<
    "div",
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, propClassName),
      strokeDasharray: strokeDasharray,
      vertical: gridAxis === "y" || gridAxis === "xy",
      horizontal: gridAxis === "x" || gridAxis === "xy",
      ...props,
      ...reChartsProps,
    }),
    [propClassName, strokeDasharray, gridAxis, reChartsProps],
  )

  return { getGridProps }
}
