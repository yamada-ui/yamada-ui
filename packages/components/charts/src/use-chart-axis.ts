import type { CSSUIObject } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import type { SVGProps } from "react"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type {
  ChartAxisType,
  ChartLayoutType,
  XAxisProps,
  YAxisProps,
  ChartPropGetter,
  AreaChartType,
  LabelProps,
} from "./chart.types"
import { xAxisProperties, yAxisProperties } from "./rechart-properties"

export type UseChartAxisOptions = {
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: string
  /**
   * Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: ChartLayoutType
  /**
   * The option is the configuration of tick lines.
   *
   * @default 'y'
   */
  tickLine?: ChartAxisType
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: ChartAxisType
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
   * Props passed down to recharts 'XAxis' component.
   */
  xAxisProps?: XAxisProps
  /**
   * Props passed down to recharts 'YAxis' component.
   */
  yAxisProps?: YAxisProps
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
  /**
   * Props passed down to recharts 'XAxisLabel' component.
   */
  xAxisLabelProps?: LabelProps
  /**
   * Props passed down to recharts 'YAxisLabel' component.
   */
  yAxisLabelProps?: LabelProps
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
}

export type UseChartAxisProps = UseChartAxisOptions & {
  styles: Dict<CSSUIObject>
}

export const useChartAxis = ({
  dataKey,
  type,
  layoutType = "horizontal",
  tickLine = "y",
  gridAxis = "x",
  withXAxis = true,
  withYAxis = true,
  xAxisProps: _xAxisProps = {},
  yAxisProps: _yAxisProps = {},
  xAxisLabel,
  yAxisLabel,
  // xAxisLabelProps,
  // yAxisLabelProps,
  unit,
  valueFormatter,
  styles,
}: UseChartAxisProps) => {
  const { theme } = useTheme()
  const xAxisKey: Recharts.XAxisProps = useMemo(
    () => (layoutType === "vertical" ? { type: "number" } : { dataKey }),
    [dataKey, layoutType],
  )

  const yAxisKey: Recharts.YAxisProps = useMemo(
    () =>
      layoutType === "vertical"
        ? { dataKey, type: "category" }
        : { type: "number" },
    [dataKey, layoutType],
  )
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const getTickLine = (
    withTickLine: boolean,
  ): boolean | SVGProps<SVGTextElement> =>
    withTickLine ? { stroke: "currentColor" } : false
  const xTickLine = getTickLine(withXTickLine)
  const yTickLine = getTickLine(withYTickLine)
  const yAxisTickFormatter =
    type === "percent" && layoutType !== "vertical"
      ? valueToPercent
      : valueFormatter
  const xAxisTickFormatter =
    type === "percent" && layoutType === "vertical"
      ? valueToPercent
      : valueFormatter

  const [xAxisReChartsProps, xAxisClassName] = getComponentProps<Dict, string>(
    [_xAxisProps, xAxisProperties],
    styles.xAxis,
  )(theme)

  const [yAxisReChartsProps, yAxisClassName] = getComponentProps<Dict, string>(
    [_yAxisProps, yAxisProperties],
    styles.yAxis,
  )(theme)

  const getXAxisProps: ChartPropGetter<
    "div",
    Partial<Recharts.XAxisProps>,
    Recharts.XAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, xAxisClassName),
      hide: !withXAxis,
      ...xAxisKey,
      tick: {
        transform: "translate(0, 10)",
        fill: "currentColor",
      },
      stroke: "",
      interval: "preserveStartEnd",
      tickLine: xTickLine,
      minTickGap: 5,
      tickFormatter: xAxisTickFormatter,
      ...props,
      ...(xAxisReChartsProps as Recharts.XAxisProps),
    }),
    [
      xAxisClassName,
      withXAxis,
      xAxisKey,
      xTickLine,
      xAxisTickFormatter,
      xAxisReChartsProps,
    ],
  )

  const getYAxisProps: ChartPropGetter<
    "div",
    Partial<Recharts.YAxisProps>,
    Recharts.YAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, yAxisClassName),
      hide: !withYAxis,
      axisLine: false,
      ...yAxisKey,
      tickLine: yTickLine,
      tick: {
        transform: "translate(-10, 0)",
        fill: "currentColor",
      },
      allowDecimals: true,
      unit: unit,
      tickFormatter: yAxisTickFormatter,
      ...props,
      ...(yAxisReChartsProps as Recharts.YAxisProps),
    }),
    [
      yAxisClassName,
      withYAxis,
      yAxisKey,
      yTickLine,
      unit,
      yAxisTickFormatter,
      yAxisReChartsProps,
    ],
  )

  const getXAxisLabelProps: ChartPropGetter<
    "div",
    Partial<Recharts.LabelProps>,
    Recharts.LabelProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className),
      value: xAxisLabel,
      position: "insideBottom",
      offset: -20,
      fontSize: 12,
      ...props,
    }),
    [xAxisLabel],
  )

  const getYAxisLabelProps: ChartPropGetter<
    "div",
    Partial<Recharts.LabelProps>,
    Recharts.LabelProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className),
      value: yAxisLabel,
      position: "insideLeft",
      angle: -90,
      textAnchor: "middle",
      fontSize: 12,
      offset: -5,
      ...props,
    }),
    [yAxisLabel],
  )

  return {
    getXAxisProps,
    getYAxisProps,
    getXAxisLabelProps,
    getYAxisLabelProps,
  }
}

const valueToPercent = (value: number) => {
  return `${(value * 100).toFixed(0)}%`
}
