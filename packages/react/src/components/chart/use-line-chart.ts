"use client"

import type { CartesianChartProps } from "recharts/types/util/types"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import { useCallback } from "react"

export interface UseLineChartProps<Y extends Dict>
  extends
    HTMLProps,
    Pick<
      CartesianChartProps,
      | "accessibilityLayer"
      | "compact"
      | "layout"
      | "responsive"
      | "syncId"
      | "syncMethod"
    > {
  /**
   * Chart data.
   */
  data: Y[]
}

export const useLineChart = <Y extends Dict>({
  accessibilityLayer = true,
  compact,
  data,
  layout = "horizontal",
  responsive,
  syncId,
  syncMethod,
  ...rest
}: UseLineChartProps<Y>) => {
  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...props, ...rest }),
    [rest],
  )

  const getChartProps: PropGetter<CartesianChartProps> = useCallback(
    (props) => ({
      accessibilityLayer,
      compact,
      data,
      layout,
      margin: { left: 16, right: 16 },
      responsive,
      syncId,
      syncMethod,
      ...props,
    }),
    [accessibilityLayer, compact, data, layout, responsive, syncId, syncMethod],
  )

  return {
    layout,
    getChartProps,
    getRootProps,
  }
}

export type UseLineChartReturn<Y extends Dict> = ReturnType<
  typeof useLineChart<Y>
>
