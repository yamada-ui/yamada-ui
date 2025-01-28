import type { CartesianGridProps } from "recharts"
import type { CSSUIObject, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { ChartAxisType, GridProps } from "./chart.types"
import { useCallback } from "react"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getComponentProps } from "./chart-utils"
import { gridProperties } from "./rechart-properties"

export interface UseChartGridOptions {
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: ChartAxisType
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   *
   * @default '5 5'
   */
  strokeDasharray?: number | string
  /**
   * Props passed down to recharts 'CartesianGrid' component.
   */
  gridProps?: GridProps
}

interface UseChartGridProps extends UseChartGridOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const useChartGrid = ({
  gridAxis = "x",
  strokeDasharray = "5 5",
  styles,
  gridProps = {},
}: UseChartGridProps) => {
  const { theme } = useTheme()
  const [reChartsProps, propClassName] = getComponentProps(
    [gridProps, gridProperties],
    styles.grid,
  )(theme)

  const getGridProps: PropGetter<
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx("ui-chart__grid", className, propClassName),
      horizontal: gridAxis === "x" || gridAxis === "xy",
      strokeDasharray: strokeDasharray,
      vertical: gridAxis === "y" || gridAxis === "xy",
      ...props,
      ...reChartsProps,
    }),
    [propClassName, strokeDasharray, gridAxis, reChartsProps],
  )

  return { getGridProps }
}
