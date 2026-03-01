"use client"

import type { PolarChartProps } from "recharts/types/util/types"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import { useCallback } from "react"

export interface UsePieChartProps<Y extends Dict>
  extends
    HTMLProps,
    Pick<
      PolarChartProps,
      | "accessibilityLayer"
      | "cx"
      | "cy"
      | "layout"
      | "responsive"
      | "syncId"
      | "syncMethod"
    > {
  /**
   * Chart data.
   */
  data?: Y[]
}

export const usePieChart = <Y extends Dict>({
  accessibilityLayer = true,
  cx,
  cy,
  data,
  layout,
  responsive,
  syncId,
  syncMethod,
  ...rest
}: UsePieChartProps<Y>) => {
  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...props, ...rest }),
    [rest],
  )

  const getChartProps: PropGetter<PolarChartProps> = useCallback(
    (props) => ({
      accessibilityLayer,
      cx,
      cy,
      data,
      layout,
      margin: { left: 16, right: 16 },
      responsive,
      syncId,
      syncMethod,
      ...props,
    }),
    [accessibilityLayer, cx, cy, data, layout, responsive, syncId, syncMethod],
  )

  return {
    getChartProps,
    getRootProps,
  }
}

export type UsePieChartReturn<Y extends Dict> = ReturnType<
  typeof usePieChart<Y>
>
