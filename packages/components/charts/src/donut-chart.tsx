import type { PieChartProps } from "./pie-chart"
import type { UseChartLabelOptions } from "./use-chart-label"
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
  Label,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { ChartProvider, useChart } from "./use-chart"
import { useChartLabel } from "./use-chart-label"
import { useChartLegend } from "./use-chart-legend"
import { useChartTooltip } from "./use-chart-tooltip"
import { usePieChart } from "./use-pie-chart"

interface DonutChartOptions {
  /**
   * Controls innerRadius of the chart segments.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
   *
   * @default '60%'
   */
  innerRadius?: number | string
}

export interface DonutChartProps
  extends PieChartProps,
    DonutChartOptions,
    UseChartLabelOptions {}

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/donut-chart
 */
export const DonutChart = forwardRef<DonutChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("DonutChart", props)
  const {
    className,
    data,
    endAngle,
    withLabels,
    innerRadius = withLabels ? "60%" : "80%",
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
    withLegend = false,
    withTooltip = true,
    cellProps,
    chartProps,
    containerProps,
    labelProps,
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
  const { getLabelProps } = useChartLabel({ styles, labelProps })

  const cells = useMemo(
    () =>
      data.map(({ name }, index) => (
        <Cell
          key={`donut-cell-${name}`}
          {...getCellProps({ className: "ui-donut-chart__cell", index })}
        />
      )),
    [data, getCellProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-donut-chart", className)}
        __css={{ maxW: "full", vars: pieVars, ...styles.container }}
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
              <Label
                {...getLabelProps({ className: "ui-donut-chart__label" })}
              />
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

DonutChart.displayName = "DonutChart"
DonutChart.__ui__ = "DonutChart"
