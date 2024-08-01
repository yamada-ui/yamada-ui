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
  Legend,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
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
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
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
  Omit<UseChartTooltipOptions, "labelFormatter"> &
  UseChartLegendProps &
  UseRadarChartOptions

/**
 * `RadarChart` is a component for drawing radar charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/radar-chart
 */
export const RadarChart = forwardRef<RadarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("RadarChart", props)
  const {
    className,
    data,
    series,
    dataKey,
    radarProps,
    chartProps,
    polarGridProps,
    polarAngleAxisProps,
    polarAngleAxisTickProps,
    polarRadiusAxisProps,
    polarRadiusAxisTickProps,
    containerProps,
    tooltipProps,
    legendProps,
    tooltipAnimationDuration,
    unit,
    valueFormatter,
    polarAngleAxisTickFormatter = valueFormatter,
    polarRadiusAxisTickFormatter = valueFormatter,
    strokeDasharray,
    withDots,
    withActiveDots,
    strokeWidth,
    fillOpacity,
    withTooltip = true,
    withLegend = false,
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
    setHighlightedArea,
  } = useRadarChart({
    data,
    series,
    dataKey,
    radarProps,
    chartProps,
    polarGridProps,
    polarAngleAxisProps,
    polarAngleAxisTickProps,
    polarRadiusAxisProps,
    polarRadiusAxisTickProps,
    withDots,
    withActiveDots,
    strokeWidth,
    fillOpacity,
    polarAngleAxisTickFormatter,
    polarRadiusAxisTickFormatter,
    strokeDasharray,
    styles,
  })
  const { getContainerProps } = useChart({ containerProps })
  const { tooltipProps: computedTooltipProps, getTooltipProps } =
    useChartTooltip({
      tooltipProps,
      tooltipAnimationDuration,
      styles,
    })
  const { legendProps: computedLegendProps, getLegendProps } = useChartLegend({
    legendProps,
  })

  const radars = useMemo(
    () =>
      series.map(({ dataKey }, index) => (
        <Radar
          key={`radar-${dataKey}`}
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
        var={radarVars}
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

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-area-chart__legend"
                    payload={payload}
                    onHighlight={setHighlightedArea}
                    {...computedLegendProps}
                  />
                )}
                {...getLegendProps()}
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
