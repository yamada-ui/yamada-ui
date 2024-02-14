import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { useToken, useValue } from "@yamada-ui/react"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { Fragment } from "react"
import {
  Area,
  CartesianGrid,
  Legend,
  AreaChart as ReChartsAreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type {
  ReferenceLineProps,
  DotProps,
  XAxisProps,
  YAxisProps,
  LegendProps,
  CartesianGridProps,
  TooltipProps,
} from "recharts"
import { AreaGradient } from "./area-gradient"
import { AreaSplit } from "./area-split"
import type { AxisType } from "./use-area-chart"
import { AreaChartProvider, useAreaChart } from "./use-area-chart"
import { ChartProvider, useChart } from "./use-chart"

export type LayoutType = "horizontal" | "vertical"

export type ChartSeries = {
  name: string
  color: CSSUIProps["color"]
  label?: string
}

export type AreaChartSeries = ChartSeries & {
  strokeDasharray?: string | number
}

export type AreaChartType = "default" | "stacked" | "percent" | "split"

export type AreaChartCurveType =
  | "bump"
  | "linear"
  | "natural"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"

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
   * @default ["#28412c", "#ff0000"]
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
  tickLine?: string
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
  referenceLines?: ReferenceLineProps[]
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
  areaChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsAreaChart>
  /**
   *  Props passed down to all dots. Ignored if `withDots={false}` is set.
   */
  dotProps?: Omit<DotProps, "ref">
  /**
   *  Props passed down to all active dots. Ignored if `withDots={false}` is set.
   */
  activeDotProps?: Omit<DotProps, "ref">
  /**
   *  Props passed down to recharts 'XAxis' component.
   */
  xAxisProps?: XAxisProps
  /**
   *  Props passed down to recharts 'YAxis' component.
   */
  yAxisProps?: YAxisProps
  /**
   *  Props passed down to recharts 'Legend' component.
   */
  legendProps?: Omit<LegendProps, "ref">
  /**
   *  Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: Omit<TooltipProps<any, any>, "ref">
  /**
   *  Props passed down to recharts 'CartesianGrid' component.
   */
  gridProps?: CSSUIObject & CartesianGridProps
}

//!rechartのやつがあるなら、それを&で合わせればよいのでは
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
    data,
    series,
    dataKey,
    type = "default",
    withGradient,
    curveType = "monotone",
    withDots = true,
    withActiveDots = true,
    strokeWidth = 2,
    fillOpacity = 0.2,
    splitColors = ["#28412c", "#ff0000"],
    splitOffset,
    withXAxis = true,
    withYAxis = true,
    withTooltip = true,
    withLegend = false,
    connectNulls = true,
    tooltipAnimationDuration = 0,
    tickLine = "y",
    gridAxis = "x",
    orientation = "horizontal",
    referenceLines,
    strokeDasharray = "5 5",
    unit,
    valueFormatter,
    areaChartProps,
    dotProps,
    activeDotProps,
    xAxisProps,
    yAxisProps,
    legendProps,
    tooltipProps,
    gridProps,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {
    baseId,
    splitId,
    withXTickLine,
    withYTickLine,
    _withGradient,
    stacked,
    shouldHighlight,
    highlightedArea,
    getDefaultSplitOffset,
    getGridProps,
    getContainerProps,
    valueToPercent,
  } = useAreaChart({
    height,
    data,
    series,
    gridProps,
    strokeDasharray,
    gridAxis,
    tickLine,
    withGradient,
    type,
  })

  //!ループの中でhook使うのはダメ
  //!どうしてもこのアプローチしかないならuseをつけない関数を作る
  const areas = series.map((item) => {
    const id = `${baseId}-${item.color}`
    const color = (useToken("colors", useValue(item.color)) ??
      item.color) as string
    const dimmed = shouldHighlight && highlightedArea !== item.name

    return (
      <Fragment key={item.name}>
        <defs>
          <AreaGradient
            color={color}
            withGradient={_withGradient}
            id={id}
            fillOpacity={fillOpacity}
          />
        </defs>
        <Area
          activeDot={
            withActiveDots
              ? {
                  fill: "#fff",
                  stroke: color,
                  strokeWidth: 2,
                  r: 4,
                  ...activeDotProps,
                }
              : false
          }
          dot={
            withDots
              ? {
                  fill: color,
                  fillOpacity: dimmed ? 0 : 1,
                  strokeWidth: 2,
                  r: 4,
                  ...dotProps,
                }
              : false
          }
          name={item.name}
          type={curveType}
          dataKey={item.name}
          fill={type === "split" ? `url(#${splitId})` : `url(#${id})`}
          strokeWidth={strokeWidth}
          stroke={color}
          isAnimationActive={false}
          connectNulls={connectNulls}
          stackId={stacked ? "stack" : undefined}
          fillOpacity={dimmed ? 0 : 1}
          strokeOpacity={dimmed ? 0.5 : 1}
          strokeDasharray={item.strokeDasharray}
        />
      </Fragment>
    )
  })

  const referenceLinesItems = referenceLines?.map((line, index) => {
    const color = useToken("colors", useValue(line.color)) ?? line.color
    return (
      <ReferenceLine
        key={index}
        stroke={color ?? "gray"}
        strokeWidth={1}
        {...line}
        label={{
          value: line.label as string,
          fill: color ?? "currentColor",
          fontSize: 12,
          position: "insideBottomLeft",
        }}
      />
    )
  })

  return (
    <ui.div
      className={cx("ui-area-chart", className)}
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
      <ChartProvider value={{ styles }}>
        <AreaChartProvider value={{}}>
          <ResponsiveContainer
          // {...getContainerProps({}, ref)}
          >
            <ReChartsAreaChart
              ref={ref}
              data={data}
              stackOffset={type === "percent" ? "expand" : undefined}
              layout={orientation}
              {...areaChartProps}
            >
              {referenceLinesItems}
              {withLegend ? (
                <Legend verticalAlign="top" {...legendProps} />
              ) : null}

              <CartesianGrid {...getGridProps({}, ref)} />

              <XAxis
                hide={!withXAxis}
                {...(orientation === "vertical"
                  ? { type: "number" }
                  : { dataKey })}
                tick={{
                  transform: "translate(0, 10)",
                  fontSize: 12,
                  fill: "currentColor",
                }}
                stroke=""
                interval="preserveStartEnd"
                tickLine={withXTickLine ? { stroke: "currentColor" } : false}
                minTickGap={5}
                // {...styles.xAxis}
                {...xAxisProps}
              />

              <YAxis
                hide={!withYAxis}
                axisLine={false}
                {...(orientation === "vertical"
                  ? { dataKey, type: "category" }
                  : { type: "number" })}
                tickLine={withYTickLine ? { stroke: "currentColor" } : false}
                tick={{
                  transform: "translate(-10, 0)",
                  fontSize: 12,
                  fill: "currentColor",
                }}
                allowDecimals
                unit={unit}
                tickFormatter={
                  type === "percent" ? valueToPercent : valueFormatter
                }
                // {...styles.yAxis}
                {...yAxisProps}
              />

              {withTooltip ? (
                <Tooltip
                  animationDuration={tooltipAnimationDuration}
                  isAnimationActive={(tooltipAnimationDuration || 0) > 0}
                  {...tooltipProps}
                />
              ) : null}

              {type === "split" && (
                <defs>
                  <AreaSplit
                    colors={splitColors!}
                    id={splitId}
                    offset={splitOffset ?? getDefaultSplitOffset()}
                    fillOpacity={fillOpacity}
                  />
                </defs>
              )}

              {areas}
            </ReChartsAreaChart>
          </ResponsiveContainer>
        </AreaChartProvider>
      </ChartProvider>
    </ui.div>
  )
})
