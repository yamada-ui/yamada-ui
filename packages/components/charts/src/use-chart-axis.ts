import type { CSSUIObject } from "@yamada-ui/core"
import { getCSS, useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx, splitObject } from "@yamada-ui/utils"
import type { SVGProps } from "react"
import { useCallback, useMemo } from "react"
import type { XAxisProps, YAxisProps } from "recharts"
import type {
  AxisType,
  LayoutType,
  XAxisUIProps,
  YAxisUIProps,
  ChartPropGetter,
  AreaChartType,
} from "./chart.types"
import { xAxisProperties, yAxisProperties } from "./chart.types"

export type UseChartAxisOptions = {
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
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: LayoutType
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
   *  Props passed down to recharts 'XAxis' component.
   */
  xAxisProps?: XAxisUIProps
  /**
   *  Props passed down to recharts 'YAxis' component.
   */
  yAxisProps?: YAxisUIProps
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
  xAxisProps = {},
  yAxisProps = {},
  unit,
  valueFormatter,
  styles,
}: UseChartAxisProps) => {
  const { theme } = useTheme()
  const xAxisKey: XAxisProps = useMemo(
    () => (layoutType === "vertical" ? { type: "number" } : { dataKey }),
    [dataKey, layoutType],
  )
  const yAxisKey: YAxisProps = useMemo(
    () =>
      layoutType === "vertical"
        ? { dataKey, type: "category" }
        : { type: "number" },
    [dataKey, layoutType],
  )
  const [xAxisReChartsProps, xAxisUiProps] = splitObject(
    xAxisProps,
    xAxisProperties,
  )
  const xAxisStyleClassName = getCSS(styles.xAxis)(theme)
  const xAxisPropClassName = getCSS(xAxisUiProps as CSSUIObject)(theme)
  const [yAxisReChartsProps, yAxisUiProps] = splitObject(
    yAxisProps,
    yAxisProperties,
  )
  const yAxisStyleClassName = getCSS(styles.yAxis)(theme)
  const yAxisPropClassName = getCSS(yAxisUiProps as CSSUIObject)(theme)
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
  const tickFormatter = type === "percent" ? valueToPercent : valueFormatter

  const getXAxisProps: ChartPropGetter<
    "div",
    Partial<XAxisProps>,
    XAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, xAxisPropClassName, xAxisStyleClassName),
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
      ...props,
      ...(xAxisReChartsProps as XAxisProps),
    }),
    [
      xAxisPropClassName,
      xAxisStyleClassName,
      withXAxis,
      xAxisKey,
      xTickLine,
      xAxisReChartsProps,
    ],
  )

  const getYAxisProps: ChartPropGetter<
    "div",
    Partial<YAxisProps>,
    YAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, yAxisPropClassName, yAxisStyleClassName),
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
      tickFormatter: tickFormatter,
      ...props,
      ...(yAxisReChartsProps as YAxisProps),
    }),
    [
      yAxisPropClassName,
      yAxisStyleClassName,
      withYAxis,
      yAxisKey,
      yTickLine,
      unit,
      tickFormatter,
      yAxisReChartsProps,
    ],
  )
  return { getXAxisProps, getYAxisProps }
}

const valueToPercent = (value: number) => {
  return `${(value * 100).toFixed(0)}%`
}
