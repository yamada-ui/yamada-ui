import type { HTMLUIProps, ThemeProps } from "../../core"
import type { UseChartProps } from "./use-chart"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import type { UsePolarGridOptions } from "./use-polar-grid"
import type { UseRadarChartOptions } from "./use-radar-chart"
import { useMemo } from "react"
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as ReChartsRadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx } from "../../utils"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { ChartProvider, useChart } from "./use-chart"
import { useChartLegend } from "./use-chart-legend"
import { useChartTooltip } from "./use-chart-tooltip"
import { usePolarGrid } from "./use-polar-grid"
import { useRadarChart } from "./use-radar-chart"

interface RadarChartOptions {
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
  /**
   * Determines whether polarAngleAxis should be displayed.
   *
   * @default true
   */
  withPolarAngleAxis?: boolean
  /**
   * Determines whether polarGrid should be displayed.
   *
   * @default true
   */
  withPolarGrid?: boolean
  /**
   * Determines whether polarRadiusAxis should be displayed.
   *
   * @default false
   */
  withPolarRadiusAxis?: boolean
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
}

export interface RadarChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeDasharray" | "strokeWidth">,
    ThemeProps<"RadarChart">,
    RadarChartOptions,
    UseChartProps,
    Omit<UseChartTooltipOptions, "labelFormatter">,
    UseChartLegendProps,
    UsePolarGridOptions,
    UseRadarChartOptions {}

/**
 * `RadarChart` is a component for drawing radar charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/radar-chart
 */
export const RadarChart = forwardRef<RadarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("RadarChart", props)
  const {
    className,
    data,
    dataKey,
    fillOpacity,
    polarAngleAxisTickFormatter,
    polarRadiusAxisTickFormatter,
    series,
    strokeDasharray,
    strokeWidth,
    tooltipAnimationDuration,
    unit,
    valueFormatter,
    withActiveDots,
    withDots,
    withLegend = false,
    withPolarAngleAxis = true,
    withPolarGrid = true,
    withPolarRadiusAxis = false,
    withTooltip = true,
    chartProps,
    containerProps,
    legendProps,
    polarAngleAxisProps,
    polarAngleAxisTickProps,
    polarGridProps,
    polarRadiusAxisProps,
    polarRadiusAxisTickProps,
    radarProps,
    tooltipProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    radarVars,
    setHighlightedArea,
    getPolarAngleAxisProps,
    getPolarRadiusAxisProps,
    getRadarChartProps,
    getRadarProps,
  } = useRadarChart({
    data,
    dataKey,
    fillOpacity,
    polarAngleAxisTickFormatter,
    polarRadiusAxisTickFormatter,
    series,
    strokeWidth,
    styles,
    withActiveDots,
    withDots,
    chartProps,
    polarAngleAxisProps,
    polarAngleAxisTickProps,
    polarRadiusAxisProps,
    polarRadiusAxisTickProps,
    radarProps,
  })
  const { getContainerProps } = useChart({ containerProps })
  const { getTooltipProps, tooltipProps: computedTooltipProps } =
    useChartTooltip({
      styles,
      tooltipAnimationDuration,
      tooltipProps,
    })
  const { getLegendProps, legendProps: computedLegendProps } = useChartLegend({
    legendProps,
  })
  const { getPolarGridProps } = usePolarGrid({
    strokeDasharray,
    styles,
    polarGridProps,
  })

  const radars = useMemo(
    () =>
      series.map(({ dataKey }, index) => (
        <Radar
          key={`radar-${dataKey}`}
          {...getRadarProps({ className: "ui-radar-chart__radar", index })}
        />
      )),
    [getRadarProps, series],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-radar-chart", className)}
        __css={{ maxW: "full", vars: radarVars, ...styles.container }}
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
                    unit={unit}
                    valueFormatter={valueFormatter}
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

RadarChart.displayName = "RadarChart"
RadarChart.__ui__ = "RadarChart"
