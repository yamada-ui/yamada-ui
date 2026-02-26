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
      | "endAngle"
      | "innerRadius"
      | "layout"
      | "outerRadius"
      | "responsive"
      | "startAngle"
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
  endAngle,
  innerRadius,
  layout,
  outerRadius,
  responsive,
  startAngle,
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
      endAngle,
      innerRadius,
      layout,
      margin: { left: 16, right: 16 },
      outerRadius,
      responsive,
      startAngle,
      syncId,
      syncMethod,
      ...props,
    }),
    [
      accessibilityLayer,
      cx,
      cy,
      data,
      endAngle,
      innerRadius,
      layout,
      outerRadius,
      responsive,
      startAngle,
      syncId,
      syncMethod,
    ],
  )

  return {
    getChartProps,
    getRootProps,
  }
}

export type UsePieChartReturn<Y extends Dict> = ReturnType<
  typeof usePieChart<Y>
>
