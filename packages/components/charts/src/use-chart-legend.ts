import { useTheme } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useCallback } from "react"
import type { LegendProps } from "recharts"
import { getProps } from "./chart-utils"
import type { ChartPropGetter, LegendUIProps } from "./chart.types"
import { legendProperties } from "./chart.types"

export type UseChartLegendProps = {
  /**
   *  Props passed down to recharts 'Legend' component.
   */
  legendProps?: LegendUIProps
}

export const useChartLegend = ({ legendProps = {} }: UseChartLegendProps) => {
  const { theme } = useTheme()
  const [reChartProps, propClassName] = getProps([
    legendProps,
    legendProperties,
  ])(theme)

  const getLegendProps: ChartPropGetter<
    "div",
    Partial<LegendProps>,
    Omit<LegendProps, "ref">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      return {
        ref,
        className: cx(className, propClassName),
        verticalAlign: "top",
        ...props,
        ...reChartProps,
      }
    },
    [propClassName, reChartProps],
  )

  return { getLegendProps }
}
