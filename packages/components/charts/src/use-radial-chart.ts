import { useTheme, type CSSUIObject } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import { useCallback, useMemo, type ComponentPropsWithRef } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type { ChartPropGetter, RadialChartProps } from "./chart.types"
import { radialChartProperties } from "./rechart-properties"

export type UseRadialChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * Props passed down to recharts `RadialBarChart` component.
   */
  chartProps?: RadialChartProps
}

type UseRadialChartProps = UseRadialChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useRadialChart = ({
  data,
  styles,
  ...rest
}: UseRadialChartProps) => {
  const { theme } = useTheme()

  const [chartProps, chartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, radialChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const getRadialChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithRef<typeof Recharts.RadialBarChart>,
    ComponentPropsWithRef<typeof Recharts.RadialBarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, chartClassName),
      // cx: "50%",
      // cy: "50%",
      // innerRadius: "10%",
      // outerRadius: "80%",
      // barSize: 10,
      data,
      ...chartProps,
      ...props,
    }),
    [chartClassName, chartProps, data],
  )

  return { getRadialChartProps }
}

export type UseRadialChartReturn = ReturnType<typeof useRadialChart>
