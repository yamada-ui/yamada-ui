"use client"

import type { CartesianGridProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { GridAxis } from "./chart.types"
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
  gridAxis?: GridAxis
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   *
   * @default '5 5'
   */
  strokeDasharray?: number | string
}

export const useGrid = ({
  css,
  gridAxis = "xy",
  strokeDasharray = "5 5",
  ...rest
}: UseGridProps) => {
  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, propClassName] = getComponentProps<
    Dict,
    keyof CartesianGridProps
  >(
    system,
    [rest, gridProperties],
    css,
  )(theme)

  const getGridProps: PropGetter<
    undefined,
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, propClassName),
      horizontal: gridAxis === "x" || gridAxis === "xy",
      strokeDasharray,
      vertical: gridAxis === "y" || gridAxis === "xy",
      ...reChartsProps,
      ...props,
    }),
    [propClassName, strokeDasharray, gridAxis, reChartsProps],
  )

  return { getGridProps }
}

export type UseGridReturn = ReturnType<typeof useGrid>
