import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import {
  ResponsiveContainer,
  RadarChart as ReChartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts"
import { ChartTooltip } from "./chart-tooltip"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import { useChartTooltip } from "./use-chart-tooltip"
import type { UseRadarChartOptions } from "./use-radar-chart"
import { useRadarChart } from "./use-radar-chart"

type RadarChartOptions = {
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
  /**
   * Determines whether polarGrid should be displayed.
   *
   * @default true
   */
  withPolarGrid?: boolean
  /**
   * Determines whether polarAngleAxis should be displayed.
   *
   * @default true
   */
  withPolarAngleAxis?: boolean
  /**
   * Determines whether polarRadiusAxis should be displayed.
   *
   * @default false
   */
  withPolarRadiusAxis?: boolean
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
}

export type RadarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"RadarChart"> &
  RadarChartOptions &
  UseChartProps &
  UseChartTooltipOptions &
  UseRadarChartOptions

export const RadarChart = forwardRef<RadarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("RadarChart", props)
  const {
    className,
    data,
    series,
    dataKey,
    radarProps,
    radarChartProps,
    polarGridProps,
    polarAngleAxisProps,
    polarRadiusAxisProps,
    containerProps,
    tooltipProps,
    tooltipAnimationDuration,
    unit,
    valueFormatter,
    withDots,
    withActiveDots,
    strokeWidth,
    fillOpacity,
    withTooltip = true,
    withPolarGrid = true,
    withPolarAngleAxis = true,
    withPolarRadiusAxis = false,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    getRadarProps,
    getRadarChartProps,
    getPolarGridProps,
    getPolarAngleAxisProps,
    getPolarRadiusAxisProps,
    radarVars,
  } = useRadarChart({
    data,
    series,
    dataKey,
    radarProps,
    radarChartProps,
    polarGridProps,
    polarAngleAxisProps,
    polarRadiusAxisProps,
    withDots,
    withActiveDots,
    strokeWidth,
    fillOpacity,
    valueFormatter,
    styles,
  })
  const { getContainerProps } = useChart({ containerProps })
  const {
    tooltipProps: computedTooltipProps,
    getTooltipProps,
    tooltipVars,
  } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
    styles,
  })

  const radars = useMemo(
    () =>
      series.map(({ dataKey }, index) => (
        <Radar
          key={`radar=${dataKey}`}
          {...getRadarProps({ index, className: "ui-radar-chart__radar" })}
        />
      )),
    [getRadarProps, series],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-radar-chart", className)}
        var={[...radarVars, ...tooltipVars]}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-radar-chart__container" })}
        >
          <ReChartsRadarChart
            {...getRadarChartProps({ className: "ui-radar-chart__chart" })}
          >
            {withPolarGrid ? (
              <PolarGrid
                {...getPolarGridProps({
                  className: "ui-radar-chart__polar-grid",
                })}
              />
            ) : null}
            {withPolarAngleAxis ? (
              <PolarAngleAxis
                {...getPolarAngleAxisProps({
                  className: "ui-radar-chart__polar-angle-axis",
                })}
              />
            ) : null}
            {withPolarRadiusAxis ? (
              <PolarRadiusAxis
                {...getPolarRadiusAxisProps({
                  className: "ui-radar-chart__polar-radius-axis",
                })}
              />
            ) : null}

            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip
                    className="ui-line-chart__tooltip"
                    label={label}
                    payload={payload}
                    valueFormatter={valueFormatter}
                    unit={unit}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}

            {radars}
          </ReChartsRadarChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
