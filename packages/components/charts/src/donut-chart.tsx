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
import type { PieChartProps } from "./pie-chart"
import { ChartProvider, useChart } from "./use-chart"
import { useChartLegend } from "./use-chart-legend"
import { useChartTooltip } from "./use-chart-tooltip"
import { usePieChart } from "./use-pie-chart"

type DonutChartOptions = {
  /**
   * Controls innerRadius of the chart segments.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
   *
   * @default '60%'
   */
  innerRadius?: number | string
}

export type DonutChartProps = PieChartProps & DonutChartOptions

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/donut-chart
 */
export const DonutChart = forwardRef<DonutChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("DonutChart", props)
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
    paddingAngle,
    startAngle,
    endAngle,
    withLabels,
    withLabelLines,
    labelOffset,
    isParcent,
    innerRadius = withLabels ? "60%" : "80%",
    outerRadius,
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
          key={`donut-cell-${name}`}
          {...getCellProps({ index, className: "ui-donut-chart__cell" })}
        />
      )),
    [data, getCellProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-donut-chart", className)}
        var={pieVars}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-donut-chart__container" })}
        >
          <RechartsPieChart
            {...getPieChartProps({ className: "ui-donut-chart__chart" })}
          >
            <Pie
              {...getPieProps({
                className: "ui-donut-chart__donut",
              })}
            >
              {cells}
            </Pie>

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-donut-chart__legend"
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
                    className="ui-donut-chart__tooltip"
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
