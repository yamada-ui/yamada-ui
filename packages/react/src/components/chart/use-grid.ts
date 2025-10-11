import type { CartesianGridProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Merge } from "../../utils"
import { useCallback } from "react"
import { useSystem, useTheme } from "../../core"
import { cx } from "../../utils"
import { gridProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseGridProps extends Merge<HTMLProps, CartesianGridProps> {
  css?: CSSObject | CSSObject[]
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'xy'
   */
  gridAxis?: "none" | "x" | "xy" | "y"
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   *
   * @default '5 5'
   */
  strokeDasharray?: number | string
}

export const useGrid = (props: UseGridProps) => {
  const { css, gridAxis = "xy", strokeDasharray = "5 5" } = props

  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, propClassName] = getComponentProps(
    system,
    [props, gridProperties],
    css,
  )(theme)

  const getGridProps: PropGetter<
    undefined,
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      ...reChartsProps,
      ...props,
      className: cx(className, propClassName),
      horizontal: gridAxis === "x" || gridAxis === "xy",
      strokeDasharray: strokeDasharray,
      vertical: gridAxis === "y" || gridAxis === "xy",
    }),
    [propClassName, strokeDasharray, gridAxis, reChartsProps],
  )

  return { getGridProps }
}
