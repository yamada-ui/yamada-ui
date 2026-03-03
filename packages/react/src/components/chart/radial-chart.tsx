"use client"

import type { ReactElement } from "react"
import type { PolarChartProps as OriginalPolarChartProps } from "recharts/types/util/types"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { ChartTooltipProps } from "./chart"
import type { ChartRadialProps, PolarChartProps } from "./polar-chart"
import type { RadialChartStyle } from "./radial-chart.style"
import type { UseRadialChartProps } from "./use-radial-chart"
import { useCallback, useMemo } from "react"
import { RadialBarChart } from "recharts"
import { createComponent } from "../../core"
import { ChartRadial, PolarChart } from "./polar-chart"
import { radialChartStyle } from "./radial-chart.style"
import { useRadialChart } from "./use-radial-chart"

export interface RadialChartProps<Y extends Dict = Dict>
  extends
    Omit<
      PolarChartProps<Y>,
      | "angleAxisProps"
      | "components"
      | "donutProps"
      | "nameKey"
      | "pieProps"
      | "radarProps"
      | "radiusAxisProps"
      | "render"
      | "series"
      | "withAngleAxis"
      | "withRadiusAxis"
    >,
    UseRadialChartProps<Y>,
    ThemeProps<RadialChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartRadialProps<Y>[]
  /**
   * Props for the polar chart component.
   */
  chartProps?: Omit<OriginalPolarChartProps, "data">
}

const {
  PropsContext: RadialChartPropsContext,
  usePropsContext: useRadialChartPropsContext,
  withContext,
} = createComponent<RadialChartProps, RadialChartStyle>(
  "radial-chart",
  radialChartStyle,
)

export { RadialChartPropsContext, useRadialChartPropsContext }

/**
 * `RadialChart` is a component for drawing radial charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/radial-chart
 */
export const RadialChart = withContext<"div", RadialChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    chartProps,
    gridProps,
    tooltipProps,
    ...rest
  }: RadialChartProps<Y>) => {
    const { getChartProps, getRootProps } = useRadialChart({
      endAngle: -270,
      innerRadius: "20%",
      outerRadius: "90%",
      startAngle: 90,
      ...rest,
    })
    const components = useMemo(
      () => [
        {
          component: ChartRadial,
          fallback: series.map((props, index) => (
            <ChartRadial key={index} {...props} />
          )),
        },
      ],
      [series],
    )
    const labelFormatter = useCallback<
      NonNullable<ChartTooltipProps["labelFormatter"]>
    >(() => null, [])

    return (
      <PolarChart
        components={components}
        render={(props) => (
          <RadialBarChart {...getChartProps({ ...props, ...chartProps })} />
        )}
        gridProps={{ type: "circle", ...gridProps }}
        tooltipProps={{ labelFormatter, ...tooltipProps }}
        {...getRootProps()}
      >
        {children}
      </PolarChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: RadialChartProps<Y>): ReactElement
}>
