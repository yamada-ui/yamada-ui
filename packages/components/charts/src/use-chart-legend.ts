import { useTheme } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useCallback } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type { ChartPropGetter, LegendProps } from "./chart.types"
import { legendProperties } from "./rechart-properties"

export type UseChartLegendProps = {
  /**
   * Props passed down to recharts 'Legend' component.
   */
  legendProps?: LegendProps
}

export const useChartLegend = ({ legendProps = {} }: UseChartLegendProps) => {
  const { theme } = useTheme()
  const [reChartProps, propClassName] = getComponentProps([
    legendProps,
    legendProperties,
  ])(theme)

  const getLegendProps: ChartPropGetter<
    "div",
    Partial<Recharts.LegendProps>,
    Omit<Recharts.LegendProps, "ref">
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
