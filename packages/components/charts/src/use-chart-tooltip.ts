import { getCSS, useTheme } from "@yamada-ui/core"
import { cx, splitObject } from "@yamada-ui/utils"
import { useCallback } from "react"
import type { TooltipProps } from "recharts"
import type { ChartPropGetter, TooltipUIProps } from "./chart.types"
import { tooltipProperties } from "./chart.types"

export type UseChartTooltipProps = {
  /**
   *  Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: TooltipUIProps
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
}

export const useChartTooltip = ({
  tooltipProps = {},
  tooltipAnimationDuration = 0,
}: UseChartTooltipProps) => {
  const { theme } = useTheme()
  const [reChartsProps, uiProps] = splitObject(tooltipProps, tooltipProperties)
  const propClassName = getCSS(uiProps)(theme)

  const getTooltipProps: ChartPropGetter<
    "div",
    Partial<TooltipProps<any, any>>,
    Omit<TooltipProps<any, any>, "ref">
  > = useCallback(
    ({ labelClassName, wrapperClassName, ...props } = {}, ref = null) => ({
      ref,
      labelClassName: cx(labelClassName, propClassName),
      wrapperClassName: cx(wrapperClassName, propClassName),
      animationDuration: tooltipAnimationDuration,
      isAnimationActive: (tooltipAnimationDuration || 0) > 0,
      ...props,
      ...reChartsProps,
    }),
    [propClassName, reChartsProps, tooltipAnimationDuration],
  )

  return { getTooltipProps }
}
