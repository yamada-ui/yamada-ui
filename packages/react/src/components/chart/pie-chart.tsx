"use client"

import type { ReactElement } from "react"
import type { PolarChartProps as OriginalPolarChartProps } from "recharts/types/util/types"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { ChartTooltipProps } from "./chart"
import type { PieChartStyle } from "./pie-chart.style"
import type { ChartPieProps, PolarChartProps } from "./polar-chart"
import type { UsePieChartProps } from "./use-pie-chart"
import { useCallback, useMemo } from "react"
import { PieChart as OriginalPieChart } from "recharts"
import { createComponent } from "../../core"
import { pieChartStyle } from "./pie-chart.style"
import { ChartPie, PolarChart } from "./polar-chart"
import { usePieChart } from "./use-pie-chart"

export interface PieChartProps<Y extends Dict = Dict>
  extends
    Omit<PolarChartProps<Y>, "components" | "render" | "series">,
    UsePieChartProps<Y>,
    ThemeProps<PieChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartPieProps<Y>[]
  /**
   * Props for the polar chart component.
   */
  chartProps?: Omit<OriginalPolarChartProps, "data">
}

const {
  PropsContext: PieChartPropsContext,
  usePropsContext: usePieChartPropsContext,
  withContext,
} = createComponent<PieChartProps, PieChartStyle>("pie-chart", pieChartStyle)

export { PieChartPropsContext, usePieChartPropsContext }

/**
 * `PieChart` is a component for drawing pie charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/pie-chart
 */
export const PieChart = withContext<"div", PieChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    chartProps,
    tooltipProps,
    ...rest
  }: PieChartProps<Y>) => {
    const { getChartProps, getRootProps } = usePieChart(rest)
    const components = useMemo(
      () => [
        {
          component: ChartPie,
          fallback: series.map((props, index) => (
            <ChartPie key={index} {...props} />
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
  <Y extends Dict>(props: PieChartProps<Y>): ReactElement
}>
