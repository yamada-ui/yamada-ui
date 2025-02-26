import type { HTMLUIProps, ThemeProps } from "../../core"
import type { AreaChartStyle } from "./area-chart.style"
import type { UseAreaChartOptions } from "./use-area-chart"
import type { UseChartProps } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import { useMemo } from "react"
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
import { createSlotComponent, ui } from "../../core"
import { AreaGradient } from "./area-chart-gradient"
import { AreaSplit } from "./area-chart-split"
import { areaChartStyle } from "./area-chart.style"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { useAreaChart } from "./use-area-chart"
import { useChart } from "./use-chart"
import { useChartAxis } from "./use-chart-axis"
import { useChartGrid } from "./use-chart-grid"
import { useChartLegend } from "./use-chart-legend"
import { useChartReferenceLine } from "./use-chart-reference-line"
import { useChartTooltip } from "./use-chart-tooltip"

export interface AreaChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeDasharray" | "strokeWidth">,
    ThemeProps<AreaChartStyle>,
    UseAreaChartOptions,
    UseChartProps,
    UseChartAxisOptions,
    UseChartReferenceLineOptions,
    UseChartGridOptions,
    UseChartTooltipOptions,
    UseChartLegendProps {
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
  PropsContext: AreaChartPropsContext,
  usePropsContext: useAreaChartPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<AreaChartProps, AreaChartStyle>(
  "area-chart",
  areaChartStyle,
)

/**
 * `AreaChart` is a component for drawing area charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/area-chart
 */
export const AreaChart = withProvider<"div", AreaChartProps>(
  ({
    type = "default",
    fillOpacity,
    labelFormatter,
    series,
    strokeDasharray,
    strokeWidth,
    unit,
    valueFormatter,
    withLegend,
    withTooltip = true,
    referenceLineProps = [],
    ...rest
  }) => {
    const styles = useStyleContext()

    const { getContainerProps } = useChart(rest)
    const {
      areaVars,
      setHighlightedArea,
      getAreaChartProps,
      getAreaGradientProps,
      getAreaProps,
      getAreaSplitProps,
    } = useAreaChart({
      type,
      fillOpacity,
      series,
      strokeWidth,
      styles,
      referenceLineProps,
      ...rest,
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
    const { getReferenceLineProps } = useChartReferenceLine({
      styles,
      referenceLineProps,
    })
    const {
      getXAxisLabelProps,
      getXAxisProps,
      getYAxisLabelProps,
      getYAxisProps,
    } = useChartAxis({
      type,
      styles,
      unit,
      ...rest,
    })

    const gradients = useMemo(
      () =>
        series.map((_, index) => (
          <defs key={index}>
            <AreaGradient {...getAreaGradientProps({ index })} />
          </defs>
        )),
      [getAreaGradientProps, series],
    )

    const areas = useMemo(
      () =>
        series.map((_, index) => (
          <Area
            key={index}
            {...getAreaProps({
              className: "ui-area-chart__area",
              index,
            })}
          />
        )),
      [getAreaProps, series],
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
      <ui.div vars={areaVars} {...rest}>
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
                    className="ui-area-chart__tooltip"
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

            {type === "split" ? (
              <defs>
                <AreaSplit {...getAreaSplitProps()} />
              </defs>
            ) : null}

            {gradients}
            {areas}
            {referenceLinesItems}
          </ReChartsAreaChart>
        </ResponsiveContainer>
      </ui.div>
    )
  },
  "root",
)()
