import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { Fragment } from "react"
import {
  CartesianGrid,
  Legend as ReChartsLegend,
  AreaChart as ReChartsAreaChart,
  Area,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AreaGradient } from "./area-gradient"
import { AreaSplit } from "./area-split"
import type {
  AreaChartCurveType,
  AreaChartSeries,
  AreaChartType,
  AreaChartUIProps,
  AxisType,
  ContainerUIProps,
  DotUIProps,
  GridUIProps,
  LayoutType,
  LegendUIProps,
  ReferenceUILineProps,
  TooltipUIProps,
  XAxisUIProps,
  YAxisUIProps,
} from "./chart.types"
import { Legend } from "./legend"
import { ChartTooltip } from "./tooltip"
import { AreaChartProvider, useAreaChart } from "./use-area-chart"
import { ChartProvider, useChart } from "./use-chart"

type AreaChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: AreaChartSeries[]
  /**
   *  The key of a group of data which should be unique in an area chart.
   */
  dataKey: string
  /**
   *  Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   *  Determines whether the chart area should be represented with a gradient instead of the solid color.
   */
  withGradient?: boolean
  /**
   *  Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: AreaChartCurveType
  /**
   *  Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   *  Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   *  Stroke width for the chart areas.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   *  Controls fill opacity of all areas.
   *
   * @default 0.2
   */
  fillOpacity?: number
  /**
   *  A tuple of colors used when `type="split"` is set, ignored in all other cases.
   *
   * @default ["red.400", "green.400"]
   */
  splitColors?: [string, string]
  /**
   *  Offset for the split gradient. By default, value is inferred from `data` and `series` if possible. Must be generated from the data array with `getSplitOffset` function.
   */
  splitOffset?: number
  /**
   *  Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * If `true`, X axis is visible.
   *
   * @default true
   */
  withXAxis?: boolean
  /**
   * If `true`, Y axis is visible.
   *
   * @default true
   */
  withYAxis?: boolean
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
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
  /**
   * The option is the configuration of tick lines.
   *
   * @default 'y'
   */
  tickLine?: AxisType
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: AxisType
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  orientation?: LayoutType
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLines?: ReferenceUILineProps[]
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   *
   * @default '5 5'
   */
  strokeDasharray?: string | number
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   *  Props passed down to recharts `AreaChart` component.
   */
  areaChartProps?: AreaChartUIProps
  /**
   *  Props passed down to recharts `ResponsiveContainer` component.
   */
  containerProps?: ContainerUIProps
  /**
   *  Props passed down to all dots. Ignored if `withDots={false}` is set.
   */
  dotProps?: DotUIProps
  /**
   *  Props passed down to all active dots. Ignored if `withDots={false}` is set.
   */
  activeDotProps?: DotUIProps
  /**
   *  Props passed down to recharts 'XAxis' component.
   */
  xAxisProps?: XAxisUIProps
  /**
   *  Props passed down to recharts 'YAxis' component.
   */
  yAxisProps?: YAxisUIProps
  /**
   *  Props passed down to recharts 'Legend' component.
   */
  legendProps?: LegendUIProps
  /**
   *  Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: TooltipUIProps
  /**
   *  Props passed down to recharts 'CartesianGrid' component.
   */
  gridProps?: GridUIProps
}

//AxisLineのプロパティも作っていいかも
export type AreaChartProps = HTMLUIProps<"div"> &
  ThemeProps<"AreaChart"> &
  AreaChartOptions

export const AreaChart = forwardRef<AreaChartProps, "svg">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("AreaChart", props)
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
    className,
    series,
    type = "default",
    withTooltip = true,
    withLegend = false,
    referenceLines,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {
    getAreaChartProps,
    getReferenceLineProps,
    getGridProps,
    getContainerProps,
    getXAxisProps,
    getYAxisProps,
    getLegendProps,
    getTooltipProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    getCSSvariables,
    setHighlightedArea,
  } = useAreaChart({
    type,
    series,
    referenceLines,
    styles,
    ...computedProps,
  })

  const areas = series.map((item, index) => {
    const { id, stroke, ...rest } = getAreaProps({ item, index }, ref)

    return (
      <Fragment key={`area-${item.dataKey}`}>
        <defs>
          <AreaGradient {...getAreaGradientProps({ id, color: stroke })} />
        </defs>
        <Area id={id} stroke={stroke} {...rest} />
      </Fragment>
    )
  })

  const referenceLinesItems = referenceLines?.map((line, index) => (
    <ReferenceLine
      key={`referenceLine-${index}`}
      {...getReferenceLineProps({ index, ...line }, ref)}
    />
  ))

  const legend = () => {
    const legendProps = getLegendProps({}, ref)
    if (withLegend)
      return (
        <ReChartsLegend
          content={(payload) => (
            <Legend
              ref={ref}
              payload={payload.payload}
              onHeightlight={setHighlightedArea}
            />
          )}
          {...legendProps}
        />
      )
  }

  const tooltip = () => {
    const tooltipProps = getTooltipProps({}, ref)
    if (withTooltip)
      return (
        <Tooltip
          content={({ label, payload }) => (
            <ChartTooltip ref={ref} label={label} payload={payload} />
          )}
          {...tooltipProps}
        />
      )
  }

  return (
    <ChartProvider value={{ styles }}>
      <AreaChartProvider value={{}}>
        <ui.div
          className={cx("ui-area-chart", className)}
          var={getCSSvariables()}
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
            <ReChartsAreaChart {...getAreaChartProps({}, ref)}>
              {referenceLinesItems}
              <CartesianGrid {...getGridProps({}, ref)} />
              <XAxis {...getXAxisProps()} />
              <YAxis {...getYAxisProps()} />
              {legend()}
              {tooltip()}
              {type === "split" ? (
                <defs>
                  <AreaSplit {...getAreaSplitProps()} />
                </defs>
              ) : null}
              {areas}
            </ReChartsAreaChart>
          </ResponsiveContainer>
        </ui.div>
      </AreaChartProvider>
    </ChartProvider>
  )
})
