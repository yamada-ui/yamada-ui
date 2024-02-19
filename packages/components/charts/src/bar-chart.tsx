import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { useToken, useValue } from "@yamada-ui/react"
import { cx } from "@yamada-ui/utils"
import { useState } from "react"
import {
  Bar,
  CartesianGrid,
  Legend,
  BarChart as ReChartsBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { LegendProps, XAxisProps, YAxisProps } from "recharts"
import { BarChartProvider, useBarChart } from "./use-bar-chart"
import { ChartProvider, useChart } from "./use-chart"

export type LayoutType = "horizontal" | "vertical"
export interface BarChartSeries extends ChartSeries {}
export type ChartSeries = {
  name: string
  color: string
  label?: string
}

type BarChartOptions = {
  /**
   * Chart data.
   */
  data: Record<string, any>[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: BarChartSeries[]
  /**
   *  The key of a group of data which should be unique in an area chart.
   */
  dataKey?: string
  /**
   *  Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: string
  /**
   *  Controls fill opacity of all areas.
   *
   * @default 1
   */
  fillOpacity?: number
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
   * The option is the configuration of tick lines.
   *
   * @default 'y'
   */
  tickLine?: "x" | "y" | "xy" | "none"
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: "x" | "y" | "xy" | "none"
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical"
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
}

export type BarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"BarChart"> &
  BarChartOptions

export const BarChart = forwardRef<BarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("BarChart", props)
  const {
    className,
    data,
    dataKey,
    series,
    fillOpacity = 1,
    withXAxis = true,
    withYAxis = true,
    withTooltip = true,
    withLegend = false,
    tickLine = "y",
    gridAxis = "x",
    orientation = "horizontal",
    onMouseLeave,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {} = useBarChart(computedProps)

  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const css: CSSUIObject = {}

  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setHighlightedArea(null)
    onMouseLeave?.(event)
  }

  const bars = series.map((item) => {
    const color = useToken("colors", useValue(item.color)) ?? item.color
    const dimmed = shouldHighlight && highlightedArea !== item.name

    return (
      <Bar
        key={item.name}
        dataKey={item.name}
        fillOpacity={dimmed ? 0.1 : fillOpacity}
        strokeOpacity={dimmed ? 0.2 : 0}
        fill={color}
        stroke={color}
      />
    )
  })

  return (
    <ChartProvider value={{ styles }}>
      <BarChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-line-chart", className)}
          __css={css}
        >
          <ReChartsBarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              hide={!withXAxis}
              {...(orientation === "vertical"
                ? { type: "number" }
                : { dataKey })}
              tickLine={withXTickLine ? { stroke: "currentColor" } : false}
            />
            <YAxis
              hide={!withYAxis}
              axisLine={false}
              {...(orientation === "vertical"
                ? { dataKey, type: "category" }
                : { type: "number" })}
              tickLine={withYTickLine ? { stroke: "currentColor" } : false}
            />
            {withTooltip ? <Tooltip /> : null}
            {withLegend ? <Legend /> : null}
            <Legend />
            <Tooltip />
            {bars}
          </ReChartsBarChart>
        </ui.div>
      </BarChartProvider>
    </ChartProvider>
  )
})
