import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import {
  Legend,
  PieChart as RechartsDonutChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import { useChartLegend, type UseChartLegendProps } from "./use-chart-legend"
import {
  useChartTooltip,
  type UseChartTooltipOptions,
} from "./use-chart-tooltip"
import type { UseDonutChartOptions } from "./use-donut-chart"
import { useDonutChart } from "./use-donut-chart"

type DonutChartOptions = {
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
   * A function to format values on Y axis and inside the tooltip.
   */
  valueFormatter?: (value: number) => string
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
}

export type DonutChartProps = HTMLUIProps<"div"> &
  ThemeProps<"DonutChart"> &
  DonutChartOptions &
  UseDonutChartOptions &
  UseChartTooltipOptions &
  UseChartLegendProps &
  UseChartProps

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/donut-chart
 */
export const DonutChart = forwardRef<DonutChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("DonutChart", props)
  const {
    className,
    containerProps,
    withLegend,
    legendProps,
    withTooltip,
    tooltipProps,
    tooltipAnimationDuration,
    valueFormatter,
    unit,
    ...rest
  } = omitThemeProps(mergedProps)

  const { setHighlightedArea } = useDonutChart({ styles })
  const { getContainerProps } = useChart({ containerProps })
  const {
    tooltipProps: computedTooltipProps,
    getTooltipProps,
    // tooltipVars,
  } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
    styles,
  })
  const { legendProps: computedLegendProps, getLegendProps } = useChartLegend({
    legendProps,
  })

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-donut-chart", className)}
        // var={[...areaVars, ...tooltipVars]}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-donut-chart__container" })}
        >
          <RechartsDonutChart>
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
                    valueFormatter={valueFormatter}
                    unit={unit}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}
          </RechartsDonutChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
