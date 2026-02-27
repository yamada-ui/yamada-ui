"use client"

import type { ReactElement } from "react"
import type { PolarChartProps as OriginalPolarChartProps } from "recharts/types/util/types"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { ChartTooltipProps } from "./chart"
import type { DonutChartStyle } from "./donut-chart.style"
import type { ChartDonutProps, PolarChartProps } from "./polar-chart"
import type { UsePieChartProps } from "./use-pie-chart"
import { useCallback, useMemo } from "react"
import { PieChart as OriginalPieChart } from "recharts"
import { createComponent } from "../../core"
import { donutChartStyle } from "./donut-chart.style"
import { ChartDonut, PolarChart } from "./polar-chart"
import { usePieChart } from "./use-pie-chart"

export interface DonutChartProps<Y extends Dict = Dict>
  extends
    Omit<
      PolarChartProps<Y>,
      | "angleAxisProps"
      | "components"
      | "gridProps"
      | "nameKey"
      | "pieProps"
      | "radarProps"
      | "radiusAxisProps"
      | "render"
      | "series"
      | "withAngleAxis"
      | "withGrid"
      | "withRadiusAxis"
    >,
    UsePieChartProps<Y>,
    ThemeProps<DonutChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartDonutProps<Y>[]
  /**
   * Props for the polar chart component.
   */
  chartProps?: Omit<OriginalPolarChartProps, "data">
}

const {
  PropsContext: DonutChartPropsContext,
  usePropsContext: useDonutChartPropsContext,
  withContext,
} = createComponent<DonutChartProps, DonutChartStyle>(
  "donut-chart",
  donutChartStyle,
)

export { DonutChartPropsContext, useDonutChartPropsContext }

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/donut-chart
 */
export const DonutChart = withContext<"div", DonutChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    chartProps,
    tooltipProps,
    ...rest
  }: DonutChartProps<Y>) => {
    const { getChartProps, getRootProps } = usePieChart(rest)
    const components = useMemo(
      () => [
        {
          component: ChartDonut,
          fallback: series.map((props, index) => (
            <ChartDonut key={index} {...props} />
          )),
        },
      ],
      [series],
    )
    const labelFormatter = useCallback<
      NonNullable<ChartTooltipProps["labelFormatter"]>
    >((label, payload) => {
      return label ?? payload[0]?.dataKey
    }, [])

    return (
      <PolarChart
        components={components}
        render={(props) => (
          <OriginalPieChart {...getChartProps({ ...props, ...chartProps })} />
        )}
        series={series}
        tooltipProps={{ labelFormatter, ...tooltipProps }}
        {...getRootProps()}
      >
        {children}
      </PolarChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: DonutChartProps<Y>): ReactElement
}>
