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
  Legend,
  BarChart as ReChartsBarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { useBarChart } from "./use-bar-chart"
import type { UseBarChartOptions } from "./use-bar-chart"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import { useChartAxis } from "./use-chart-axis"
import { useChartGrid, type UseChartGridOptions } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
import {
  useChartReferenceLine,
  type UseChartReferenceLineOptions,
} from "./use-chart-reference-line"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import { useChartTooltip } from "./use-chart-tooltip"

type BarChartOptions = {
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
}

export type BarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"BarChart"> &
  BarChartOptions &
  UseBarChartOptions &
  UseChartProps &
  UseChartAxisOptions &
  UseChartReferenceLineOptions &
  UseChartGridOptions &
  UseChartTooltipOptions &
  UseChartLegendProps

/**
 * `BarChart` is a component for drawing bar charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/bar-chart
 */
export const BarChart = forwardRef<BarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("BarChart", props)
  const {
    className,
    series,
    dataKey,
    layoutType,
    tickLine,
    gridAxis,
    withXAxis,
    withYAxis,
    barProps,
    xAxisProps,
    yAxisProps,
    xAxisLabel,
    yAxisLabel,
    xAxisLabelProps,
    yAxisLabelProps,
    type = "default",
    withTooltip = true,
    withLegend = false,
    containerProps,
    unit,
    yAxisTickFormatter,
    xAxisTickFormatter,
    valueFormatter,
    labelFormatter,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    data,
    referenceLineProps = [],
    gridProps,
    strokeDasharray,
    fillOpacity,
    chartProps,
    syncId,
    cell,
    ...rest
  } = omitThemeProps(mergedProps)

  const { bars, barVars, getBarChartProps, setHighlightedArea } = useBarChart({
    data,
    series,
    cell,
    type,
    layoutType,
    chartProps,
    barProps,
    referenceLineProps,
    fillOpacity,
    syncId,
    xAxisLabel,
    yAxisLabel,
    styles,
  })
  const { getContainerProps } = useChart({ containerProps })
  const {
    getXAxisProps,
    getYAxisProps,
    getXAxisLabelProps,
    getYAxisLabelProps,
  } = useChartAxis({
    dataKey,
    type,
    layoutType,
    tickLine,
    gridAxis,
    withXAxis,
    withYAxis,
    xAxisProps,
    yAxisProps,
    xAxisLabel,
    yAxisLabel,
    xAxisLabelProps,
    yAxisLabelProps,
    unit,
    yAxisTickFormatter,
    xAxisTickFormatter,
    styles,
  })
  const { getReferenceLineProps } = useChartReferenceLine({
    referenceLineProps,
    styles,
  })
  const { getGridProps } = useChartGrid({
    gridProps,
    gridAxis,
    strokeDasharray,
    styles,
  })
  const { tooltipProps: computedTooltipProps, getTooltipProps } =
    useChartTooltip({
      tooltipProps,
      tooltipAnimationDuration,
      styles,
    })
  const { legendProps: computedLegendProps, getLegendProps } = useChartLegend({
    legendProps,
  })

  const referenceLinesItems = useMemo(
    () =>
      referenceLineProps.map((_, index) => (
        <ReferenceLine
          key={`referenceLine-${index}`}
          {...getReferenceLineProps({
            index,
            className: "ui-bar-chart__reference-line",
          })}
        />
      )),
    [getReferenceLineProps, referenceLineProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-bar-chart", className)}
        var={barVars}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-bar-chart__container" })}
        >
          <ReChartsBarChart
            {...getBarChartProps({ className: "ui-bar-chart__chart" })}
          >
            <CartesianGrid
              {...getGridProps({ className: "ui-bar-chart__grid" })}
            />

            <XAxis {...getXAxisProps({ className: "ui-bar-chart__x-axis" })}>
              <Label
                {...getXAxisLabelProps({
                  className: "ui-bar-chart__x-axis-label",
                })}
              />
            </XAxis>

            <YAxis {...getYAxisProps({ className: "ui-bar-chart__y-axis" })}>
              <Label
                {...getYAxisLabelProps({
                  className: "ui-bar-chart__y-axis-label",
                })}
              />
            </YAxis>

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-bar-chart__legend"
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
                    className="ui-bar-chart__tooltip"
                    label={label}
                    payload={payload}
                    valueFormatter={valueFormatter}
                    labelFormatter={labelFormatter}
                    unit={unit}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}

            {bars}
            {referenceLinesItems}
          </ReChartsBarChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
