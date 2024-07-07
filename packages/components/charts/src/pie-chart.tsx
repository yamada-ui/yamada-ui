import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useMultiComponentStyle,
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
import type { TooltipDataSourceType } from "./chart.types"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
import {
  useChartTooltip,
  type UseChartTooltipOptions,
} from "./use-chart-tooltip"
import type { UsePieChartOptions } from "./use-pie-chart"
import { usePieChart } from "./use-pie-chart"

type PieChartOptions = {
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
   * Determines which data is displayed in the tooltip.
   *
   * @default 'all'
   */
  tooltipDataSource?: TooltipDataSourceType
  /**
   * A function to format values inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
}

export type PieChartProps = HTMLUIProps<"div"> &
  ThemeProps<"pieChart"> &
  PieChartOptions &
  UsePieChartOptions &
  UseChartTooltipOptions &
  UseChartLegendProps &
  UseChartProps

/**
 * `PieChart` is a component for drawing pie charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/pie-chart
 */
export const PieChart = forwardRef<PieChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("PieChart", props)
  const {
    className,
    data,
    pieProps,
    chartProps,
    cellProps,
    containerProps,
    withTooltip = true,
    withLegend = false,
    tooltipProps,
    tooltipAnimationDuration,
    tooltipDataSource = "all",
    valueFormatter,
    unit,
    innerRadius,
    outerRadius,
    paddingAngle,
    startAngle,
    endAngle,
    withLabels,
    withLabelLines,
    labelOffset,
    isParcent,
    strokeWidth,
    legendProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    pieVars,
    getPieProps,
    getPieChartProps,
    getCellProps,
    setHighlightedArea,
  } = usePieChart({
    data,
    pieProps,
    chartProps,
    cellProps,
    innerRadius,
    outerRadius,
    paddingAngle,
    startAngle,
    endAngle,
    strokeWidth,
    withLabels,
    withLabelLines,
    labelOffset,
    isParcent,
    valueFormatter,
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

  const cells = useMemo(
    () =>
      data.map(({ name }, index) => (
        <Cell
          key={`pie-cell-${name}`}
          {...getCellProps({ index, className: "ui-pie-chart__cell" })}
        />
      )),
    [data, getCellProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-pie-chart", className)}
        var={pieVars}
        __css={{ maxW: "full", ...styles.container }}
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
                labelLineClassName: "ui-pie-chart__label-line",
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
                    valueFormatter={valueFormatter}
                    unit={unit}
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
