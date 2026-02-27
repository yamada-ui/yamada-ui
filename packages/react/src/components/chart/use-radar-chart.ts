"use client"

import type { PolarChartProps } from "recharts/types/util/types"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import { useCallback } from "react"

export interface UseRadarChartProps<Y extends Dict>
  extends
    HTMLProps,
    Pick<
      PolarChartProps,
      | "accessibilityLayer"
      | "cx"
      | "cy"
      | "innerRadius"
      | "outerRadius"
      | "responsive"
      | "syncId"
      | "syncMethod"
    > {
  /**
   * Chart data.
   */
  data?: Y[]
}

export const useRadarChart = <Y extends Dict>({
  accessibilityLayer = true,
  cx,
  cy,
  data,
  innerRadius,
  outerRadius,
  responsive,
  syncId,
  syncMethod,
  ...rest
}: UseRadarChartProps<Y>) => {
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
      innerRadius,
      margin: { left: 16, right: 16 },
      outerRadius,
      responsive,
      syncId,
      syncMethod,
      ...props,
    }),
    [
      accessibilityLayer,
      cx,
      cy,
      data,
      innerRadius,
      outerRadius,
      responsive,
      syncId,
      syncMethod,
    ],
  )

  return {
    getChartProps,
    getRootProps,
  }
}

export type UseRadarChartReturn<Y extends Dict> = ReturnType<
  typeof useRadarChart<Y>
>
