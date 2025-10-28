"use client"

import type { CartesianGridProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { GridAxis } from "./chart.types"
import { useCallback } from "react"
import { splitObject } from "../../utils"
import { gridProperties } from "./recharts-properties"

export interface UseGridProps
  extends Merge<HTMLProps<"svg">, CartesianGridProps> {
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
  gridAxis = "xy",
  strokeDasharray = "5 5",
  ...rest
}: UseGridProps) => {
  const [gridProps, styledGridProps] = splitObject<Dict, string>(
    rest,
    gridProperties,
  )

  const getGridProps: PropGetter<
    undefined,
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    (props) => ({
      horizontal: gridAxis === "x" || gridAxis === "xy",
      strokeDasharray,
      vertical: gridAxis === "y" || gridAxis === "xy",
      ...props,
      ...gridProps,
    }),
    [gridAxis, strokeDasharray, gridProps],
  )

  return { getGridProps, styledGridProps }
}

export type UseGridReturn = ReturnType<typeof useGrid>
