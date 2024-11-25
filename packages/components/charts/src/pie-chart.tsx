import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { TooltipDataSourceType } from "./chart.types"
import type { UseChartProps } from "./use-chart"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import type { UsePieChartOptions } from "./use-pie-chart"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { ChartProvider, useChart } from "./use-chart"
import { useChartLegend } from "./use-chart-legend"
import { useChartTooltip } from "./use-chart-tooltip"
import { usePieChart } from "./use-pie-chart"

interface PieChartOptions {
  /**
   * Determines which data is displayed in the tooltip.
   *
   * @default 'all'
   */
  tooltipDataSource?: TooltipDataSourceType
  /**
   * Unit displayed next to each value in tooltip.
   */
  unit?: string
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

export interface PieChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeWidth">,
    ThemeProps<"pieChart">,
    PieChartOptions,
    UsePieChartOptions,
    Omit<UseChartTooltipOptions, "labelFormatter">,
    UseChartLegendProps,
    UseChartProps {}

/**
 * `PieChart` is a component for drawing pie charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/pie-chart
 */
export const PieChart = forwardRef<PieChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("PieChart", props)
  const {
    className,
    data,
    endAngle,
    innerRadius,
    isPercent,
    labelFormatter,
    labelOffset,
    outerRadius,
    paddingAngle,
    percent,
    startAngle,
    strokeWidth,
    tooltipAnimationDuration,
    tooltipDataSource = "all",
    unit,
    valueFormatter,
    withLabelLines,
    withLabels,
    withLegend = false,
    withTooltip = true,
    cellProps,
    chartProps,
    containerProps,
    legendProps,
    pieProps,
    tooltipProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    pieVars,
    setHighlightedArea,
    getCellProps,
    getPieChartProps,
    getPieProps,
  } = usePieChart({
    data,
    endAngle,
    innerRadius,
    isPercent,
    labelFormatter,
    labelOffset,
    outerRadius,
    paddingAngle,
    percent,
    startAngle,
    strokeWidth,
    styles,
    withLabelLines,
    withLabels,
    cellProps,
    chartProps,
    pieProps,
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

  const cells = useMemo(
    () =>
      data.map(({ name }, index) => (
        <Cell
          key={`pie-cell-${name}`}
          {...getCellProps({ className: "ui-pie-chart__cell", index })}
        />
      )),
    [data, getCellProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-pie-chart", className)}
        __css={{ maxW: "full", vars: pieVars, ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-pie-chart__container" })}
        >
          <RechartsPieChart
            {...getPieChartProps({ className: "ui-pie-chart__chart" })}
          >
            <Pie
              {...getPieProps({
                className: "ui-pie-chart__pie",
              })}
            >
              {cells}
            </Pie>

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-pie-chart__legend"
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
                    className="ui-pie-chart__tooltip"
                    label={label}
                    payload={tooltipDataSource === "segment" ? payload : data}
                    unit={unit}
                    valueFormatter={valueFormatter}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}
          </RechartsPieChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})

PieChart.displayName = "PieChart"
PieChart.__ui__ = "PieChart"
