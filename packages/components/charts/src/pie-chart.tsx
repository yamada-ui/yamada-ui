import type { CSSUIProps, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import {
  Pie,
  Tooltip,
  PieChart as ReChartsPieChart,
  ResponsiveContainer,
  Cell,
} from "recharts"
import type { PieChartUIProps, PieUIProps } from "./chart.types"
import { ChartProvider, type UseChartProps, useChart } from "./use-chart"
import { useChartCell } from "./use-chart-cell"
import type { UseChartTooltipProps } from "./use-chart-tooltip"
import { ChartTooltip } from "./chart-tooltip"
import { useChartTooltip } from "./use-chart-tooltip"
import { usePieChart } from "./use-pie-chart"

export type PieChartCell = {
  name: string
  value: number
  color: CSSUIProps["color"]
}

/**
 * @see https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/charts/src/PieChart/PieChart.story.tsx
 */
export type PieChartOptions = {
  /**
   * Chart data.
   */
  data: PieChartCell[]

  /**
   * Determines whether the tooltip should be displayed when one of the section is hovered, `true` by default
   *
   * @default false
   */
  withTooltip?: boolean

  /**
   * Props passed down to recharts `PieChart` component
   */
  pieChartProps?: PieChartUIProps

  /**
   * Props passed down to recharts `Pie` component
   */
  pieProps?: PieUIProps

  /**
   * Determines whether each segment should have associated label, `false` by default
   *
   * @default false
   */
  withLabels?: boolean

  /**
   * Determines whether segments labels should have lines that connect the segment with the label, `true` by default
   *
   * @default true
   */
  withLabelsLine?: boolean

  /**
   * Controls width of segments stroke, `1` by default
   *
   * @default 1
   */
  strokeWidth?: number

  /**
   * Controls padding between segments.
   *
   * @default 0
   */
  paddingAngle?: number

  /**
   * Controls angle at which chart starts, `0` by default. Set to `180` to render the chart as semicircle.
   *
   * @default 0
   */
  startAngle?: number

  /**
   * Controls angle at which charts ends, `360` by default. Set to `0` to render the chart as semicircle.
   *
   * @default 360
   */
  endAngle?: number

  animationDuration?: number

  /**
   * Determines which data is displayed in the tooltip. `'all'` – display all values, `'segment'` – display only hovered segment. `'all'` by default.
   *
   * @default
   */
  tooltipDataSource?: "segment" | "all"

  /**
   * Controls labels position relative to the segment, `'outside'` by default
   *
   * @default 'inside'
   */
  labelsPosition?: "inside" | "outside"

  /**
   * A function to format values inside the tooltip
   */
  valueFormatter?: (value: number) => string
}

export type PieChartProps = Omit<HTMLUIProps<"div">, "scale"> &
  ThemeProps<"PieChart"> &
  PieChartOptions &
  UseChartProps &
  UseChartTooltipProps

const defaultProps: Partial<PieChartProps> = {
  withTooltip: false,
  withLabelsLine: true,
  withLabels: false,
  paddingAngle: 0,
  strokeWidth: 1,
  startAngle: 0,
  endAngle: 360,
  tooltipDataSource: "all",
  labelsPosition: "inside",
}

export const PieChart = forwardRef<PieChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("PieChart", props)
  const {
    w,
    width,
    minW,
    minWidth,
    maxW,
    maxWidth,
    h,
    height,
    minH,
    minHeight,
    maxH,
    maxHeight,
    data,
    strokeWidth,
    withTooltip,
    className,
    pieChartProps,
    tooltipProps,
    tooltipAnimationDuration,
    containerProps,
    ...computedProps
  } = omitThemeProps({ ...defaultProps, ...mergedProps })

  const { getContainerProps } = useChart({ containerProps })

  const { getPieProps, cssVariables } = usePieChart({
    data,
    styles,
    ...computedProps,
  })

  const { getCellProps } = useChartCell({
    data,
    styles,
  })

  const { getTooltipProps } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
  })

  const cellEl = useMemo(
    () =>
      data.map((item, index) => (
        <Cell
          key={`cell-${index}`}
          strokeWidth={strokeWidth}
          {...getCellProps({ item, index }, ref)}
        />
      )),
    [data, getCellProps, ref, strokeWidth],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-pie-chart", className)}
        var={cssVariables}
        {...{
          w,
          width,
          minW,
          minWidth,
          maxW,
          maxWidth,
          h,
          height,
          minH,
          minHeight,
          maxH,
          maxHeight,
        }}
        __css={{ ...styles.container }}
      >
        <ResponsiveContainer {...getContainerProps({}, ref)}>
          <ReChartsPieChart {...pieChartProps}>
            <Pie {...getPieProps({}, ref)}>{cellEl}</Pie>
            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip ref={ref} label={label} payload={payload} />
                )}
                {...getTooltipProps({}, ref)}
              />
            ) : null}
          </ReChartsPieChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
