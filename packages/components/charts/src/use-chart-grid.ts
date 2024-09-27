import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { useCallback } from "react"
import type { CartesianGridProps } from "recharts"
import { getComponentProps } from "./chart-utils"
import type { ChartAxisType, GridProps } from "./chart.types"
import { gridProperties } from "./rechart-properties"

export interface UseChartGridOptions {
  /**
   * Props passed down to recharts 'CartesianGrid' component.
   */
  gridProps?: GridProps
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
  strokeDasharray?: string | number
}

interface UseChartGridProps extends UseChartGridOptions {
  styles: Dict<CSSUIObject>
}

export const useChartGrid = ({
  gridProps = {},
  gridAxis = "x",
  strokeDasharray = "5 5",
  styles,
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
