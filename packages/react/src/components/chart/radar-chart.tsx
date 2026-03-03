"use client"

import type { ReactElement } from "react"
import type { PolarChartProps as OriginalPolarChartProps } from "recharts/types/util/types"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { ChartRadarProps, PolarChartProps } from "./polar-chart"
import type { RadarChartStyle } from "./radar-chart.style"
import { useMemo } from "react"
import { RadarChart as OriginalRadarChart } from "recharts"
import { createComponent } from "../../core"
import { ChartRadar, PolarChart } from "./polar-chart"
import { radarChartStyle } from "./radar-chart.style"

export interface RadarChartProps<Y extends Dict = Dict>
  extends
    Omit<PolarChartProps<Y>, "components" | "render">,
    ThemeProps<RadarChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartRadarProps<Y>[]
  /**
   * Props for the polar chart component.
   */
  chartProps?: Omit<OriginalPolarChartProps, "data">
}

const {
  PropsContext: RadarChartPropsContext,
  usePropsContext: useRadarChartPropsContext,
  withContext,
} = createComponent<RadarChartProps, RadarChartStyle>(
  "radar-chart",
  radarChartStyle,
)

export { RadarChartPropsContext, useRadarChartPropsContext }

/**
 * `RadarChart` is a component for drawing radar charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/radar-chart
 */
export const RadarChart = withContext<"div", RadarChartProps>(
  <Y extends Dict>({
    children,
    nameKey,
    series = [],
    withAngleAxis = !!nameKey,
    withGrid = true,
    ...rest
  }: RadarChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartRadar,
          fallback: series.map((props, index) => (
            <ChartRadar key={index} {...props} />
          )),
        },
      ],
      [series],
    )

    return (
      <PolarChart
        components={components}
        nameKey={nameKey}
        render={(props) => <OriginalRadarChart {...props} />}
        withAngleAxis={withAngleAxis}
        withGrid={withGrid}
        {...rest}
      >
        {children}
      </PolarChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: RadarChartProps<Y>): ReactElement
}>
