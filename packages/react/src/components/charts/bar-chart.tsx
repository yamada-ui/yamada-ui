import type { HTMLUIProps, ThemeProps } from "../../core"
import type { BarChartStyle } from "./bar-chart.style"
import type { UseBarChartOptions } from "./use-bar-chart"
import type { UseChartProps } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import { useMemo } from "react"
import {
  CartesianGrid,
  Label,
  Legend,
  BarChart as ReChartsBarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { createSlotComponent, ui } from "../../core"
import { barChartStyle } from "./bar-chart.style"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { useBarChart } from "./use-bar-chart"
import { useChart } from "./use-chart"
import { useChartAxis } from "./use-chart-axis"
import { useChartGrid } from "./use-chart-grid"
import { useChartLegend } from "./use-chart-legend"
import { useChartReferenceLine } from "./use-chart-reference-line"
import { useChartTooltip } from "./use-chart-tooltip"

export interface BarChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeDasharray" | "strokeWidth">,
    ThemeProps<BarChartStyle>,
    UseBarChartOptions,
    Omit<UseChartAxisOptions, "type">,
    UseChartGridOptions,
    UseChartLegendProps,
    UseChartProps,
    UseChartReferenceLineOptions,
    UseChartTooltipOptions {
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
}

export const {
  PropsContext: BarChartPropsContext,
  usePropsContext: useBarChartPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<BarChartProps, BarChartStyle>(
  "bar-chart",
  barChartStyle,
)

/**
 * `BarChart` is a component for drawing bar charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/bar-chart
 */
export const BarChart = withProvider<"div", BarChartProps>(
  ({
    fillOpacity,
    labelFormatter,
    strokeDasharray,
    unit,
    valueFormatter,
    withLegend,
    withTooltip = true,
    referenceLineProps = [],
    ...rest
  }) => {
    const styles = useStyleContext()

    const { bars, barVars, setHighlightedArea, getBarChartProps } = useBarChart(
      {
        fillOpacity,
        styles,
        referenceLineProps,
        ...rest,
      },
    )
    const { getContainerProps } = useChart(rest)
    const {
      getXAxisLabelProps,
      getXAxisProps,
      getYAxisLabelProps,
      getYAxisProps,
    } = useChartAxis({
      styles,
      ...rest,
    })
    const { getReferenceLineProps } = useChartReferenceLine({
      styles,
      referenceLineProps,
    })
    const { getGridProps } = useChartGrid({
      strokeDasharray,
      styles,
      ...rest,
    })
    const { getTooltipProps, tooltipProps: computedTooltipProps } =
      useChartTooltip({
        styles,
        ...rest,
      })
    const { getLegendProps, legendProps: computedLegendProps } =
      useChartLegend(rest)

    const referenceLinesItems = useMemo(
      () =>
        referenceLineProps.map((_, index) => (
          <ReferenceLine
            key={`referenceLine-${index}`}
            {...getReferenceLineProps({
              className: "ui-bar-chart__reference-line",
              index,
            })}
          />
        )),
      [getReferenceLineProps, referenceLineProps],
    )

    return (
      <ui.div vars={barVars} {...rest}>
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
                    styles={styles}
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
                    labelFormatter={labelFormatter}
                    payload={payload}
                    styles={styles}
                    unit={unit}
                    valueFormatter={valueFormatter}
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
    )
  },
  "root",
)()
