import type { HTMLUIProps, ThemeProps } from "../../core"
import type { UseAreaChartOptions } from "./use-area-chart"
import type { UseChartProps } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import { Fragment, useMemo } from "react"
import {
  Area,
  CartesianGrid,
  Label,
  Legend,
  AreaChart as ReChartsAreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx } from "../../utils"
import { AreaGradient } from "./area-chart-gradient"
import { AreaSplit } from "./area-chart-split"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { useAreaChart } from "./use-area-chart"
import { ChartProvider, useChart } from "./use-chart"
import { useChartAxis } from "./use-chart-axis"
import { useChartGrid } from "./use-chart-grid"
import { useChartLegend } from "./use-chart-legend"
import { useChartReferenceLine } from "./use-chart-reference-line"
import { useChartTooltip } from "./use-chart-tooltip"

interface AreaChartOptions {
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

export interface AreaChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeDasharray" | "strokeWidth">,
    ThemeProps<"AreaChart">,
    AreaChartOptions,
    UseAreaChartOptions,
    UseChartProps,
    UseChartAxisOptions,
    UseChartReferenceLineOptions,
    UseChartGridOptions,
    UseChartTooltipOptions,
    UseChartLegendProps {}

/**
 * `AreaChart` is a component for drawing area charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/components/data-display/area-chart
 */
export const AreaChart = forwardRef<AreaChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("AreaChart", props)
  const {
    type = "default",
    className,
    connectNulls,
    curveType,
    data,
    dataKey,
    fillOpacity,
    gridAxis,
    labelFormatter,
    layoutType,
    series,
    splitColors,
    splitOffset,
    strokeDasharray,
    strokeWidth,
    syncId,
    tickLine,
    tooltipAnimationDuration,
    unit,
    valueFormatter,
    withActiveDots,
    withDots,
    withGradient,
    withLegend = false,
    withTooltip = true,
    withXAxis,
    withYAxis,
    xAxisLabel,
    xAxisTickFormatter,
    yAxisLabel,
    yAxisTickFormatter,
    areaProps,
    chartProps,
    containerProps,
    gridProps,
    legendProps,
    referenceLineProps = [],
    tooltipProps,
    xAxisLabelProps,
    xAxisProps,
    yAxisLabelProps,
    yAxisProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    areaVars,
    setHighlightedArea,
    getAreaChartProps,
    getAreaGradientProps,
    getAreaProps,
    getAreaSplitProps,
  } = useAreaChart({
    type,
    connectNulls,
    curveType,
    data,
    fillOpacity,
    layoutType,
    series,
    splitColors,
    splitOffset,
    strokeWidth,
    styles,
    syncId,
    withActiveDots,
    withDots,
    withGradient,
    xAxisLabel,
    yAxisLabel,
    areaProps,
    chartProps,
    referenceLineProps,
  })
  const { getContainerProps } = useChart({ containerProps })
  const {
    getXAxisLabelProps,
    getXAxisProps,
    getYAxisLabelProps,
    getYAxisProps,
  } = useChartAxis({
    type,
    dataKey,
    gridAxis,
    layoutType,
    styles,
    tickLine,
    unit,
    withXAxis,
    withYAxis,
    xAxisLabel,
    xAxisTickFormatter,
    yAxisLabel,
    yAxisTickFormatter,
    xAxisLabelProps,
    xAxisProps,
    yAxisLabelProps,
    yAxisProps,
  })
  const { getReferenceLineProps } = useChartReferenceLine({
    styles,
    referenceLineProps,
  })
  const { getGridProps } = useChartGrid({
    gridAxis,
    strokeDasharray,
    styles,
    gridProps,
  })
  const { getTooltipProps, tooltipProps: computedTooltipProps } =
    useChartTooltip({
      styles,
      tooltipAnimationDuration,
      tooltipProps,
    })
  const { getLegendProps, legendProps: computedLegendProps } = useChartLegend({
    legendProps,
  })

  const areas = useMemo(
    () =>
      series.map(({ dataKey }, index) => {
        const { id, stroke, ...rest } = getAreaProps({
          className: "ui-area-chart__area",
          index,
        })

        return (
          <Fragment key={`area-${dataKey}`}>
            <defs>
              <AreaGradient {...getAreaGradientProps({ id, color: stroke })} />
            </defs>

            <Area id={id} stroke={stroke} {...rest} />
          </Fragment>
        )
      }),
    [getAreaGradientProps, getAreaProps, series],
  )

  const referenceLinesItems = useMemo(
    () =>
      referenceLineProps.map((_, index) => (
        <ReferenceLine
          key={`referenceLine-${index}`}
          {...getReferenceLineProps({
            className: "ui-area-chart__reference-line",
            index,
          })}
        />
      )),
    [getReferenceLineProps, referenceLineProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-area-chart", className)}
        __css={{ maxW: "full", vars: areaVars, ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-area-chart__container" })}
        >
          <ReChartsAreaChart
            {...getAreaChartProps({ className: "ui-area-chart__chart" })}
          >
            <CartesianGrid
              {...getGridProps({ className: "ui-area-chart__grid" })}
            />

            <XAxis {...getXAxisProps({ className: "ui-area-chart__x-axis" })}>
              <Label
                {...getXAxisLabelProps({
                  className: "ui-area-chart__x-axis-label",
                })}
              />
            </XAxis>

            <YAxis {...getYAxisProps({ className: "ui-area-chart__y-axis" })}>
              <Label
                {...getYAxisLabelProps({
                  className: "ui-area-chart__y-axis-label",
                })}
              />
            </YAxis>

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
                    className="ui-area-chart__tooltip"
                    label={label}
                    labelFormatter={labelFormatter}
                    payload={payload}
                    unit={unit}
                    valueFormatter={valueFormatter}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}

            {type === "split" ? (
              <defs>
                <AreaSplit {...getAreaSplitProps()} />
              </defs>
            ) : null}

            {areas}
            {referenceLinesItems}
          </ReChartsAreaChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})

AreaChart.displayName = "AreaChart"
AreaChart.__ui__ = "AreaChart"
