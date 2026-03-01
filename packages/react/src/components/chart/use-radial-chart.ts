"use client"

import type { PolarChartProps } from "recharts/types/util/types"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import { useCallback } from "react"

export interface UseRadialChartProps<Y extends Dict>
  extends
    HTMLProps,
    Pick<
      PolarChartProps,
      | "accessibilityLayer"
      | "barCategoryGap"
      | "barGap"
      | "barSize"
      | "cx"
      | "cy"
      | "endAngle"
      | "innerRadius"
      | "layout"
      | "maxBarSize"
      | "outerRadius"
      | "responsive"
      | "reverseStackOrder"
      | "stackOffset"
      | "startAngle"
      | "syncId"
      | "syncMethod"
    > {
  /**
   * Chart data.
   */
  data?: Y[]
}

export const useRadialChart = <Y extends Dict>({
  accessibilityLayer = true,
  barCategoryGap,
  barGap,
  barSize,
  cx,
  cy,
  data,
  endAngle,
  innerRadius,
  layout,
  maxBarSize,
  outerRadius,
  responsive,
  reverseStackOrder,
  stackOffset,
  startAngle,
  syncId,
  syncMethod,
  ...rest
}: UseRadialChartProps<Y>) => {
  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...props, ...rest }),
    [rest],
  )

  const getChartProps: PropGetter<PolarChartProps> = useCallback(
    (props) => ({
      accessibilityLayer,
      barCategoryGap,
      barGap,
      barSize,
      cx,
      cy,
      data,
      endAngle,
      innerRadius,
      layout,
      margin: { left: 16, right: 16 },
      maxBarSize,
      outerRadius,
      responsive,
      reverseStackOrder,
      stackOffset,
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
      barCategoryGap,
      barGap,
      barSize,
      maxBarSize,
      reverseStackOrder,
      stackOffset,
    ],
  )

  return {
    getChartProps,
    getRootProps,
  }
}

export type UseRadialChartReturn<Y extends Dict> = ReturnType<
  typeof useRadialChart<Y>
>
