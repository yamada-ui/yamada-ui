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
import type { PieChartProps } from "./pie-chart"
import { ChartProvider, useChart } from "./use-chart"
import { useChartLabel } from "./use-chart-label"
import type { UseChartLabelOptions } from "./use-chart-label"
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
    labelFormatter,
    unit,
    paddingAngle,
    startAngle,
    endAngle,
    withLabels,
    withLabelLines,
    labelOffset,
    isPercent,
    innerRadius = withLabels ? "60%" : "80%",
    outerRadius,
    strokeWidth,
    legendProps,
    labelProps,
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
    isPercent,
    labelFormatter,
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
  const { getLabelProps } = useChartLabel({ labelProps, styles })

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
