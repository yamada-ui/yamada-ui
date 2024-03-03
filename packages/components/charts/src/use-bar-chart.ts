import {
  type CSSUIObject,
  getCSS,
  useTheme,
  type CSSUIProps,
} from "@yamada-ui/core"
import {
  type Dict,
  createContext,
  cx,
  splitObject,
  isNumber,
  omitObject,
} from "@yamada-ui/utils"
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useState,
  useId,
} from "react"
import type {
  BarChart,
  YAxisProps,
  XAxisProps,
  LegendProps,
  TooltipProps,
  ResponsiveContainerProps,
  BarProps,
} from "recharts"
import type { BarChartProps } from "./bar-chart"
import {
  containerProperties,
  xAxisProperties,
  yAxisProperties,
  legendProperties,
  tooltipProperties,
  areaChartProperties,
  barProperties,
} from "./chart.types"
import type {
  BarChartSeries,
  ChartPropGetter,
  RequiredChartPropGetter,
} from "./chart.types"

type BarChartContext = {}

export const [BarChartProvider, useBarChartContext] =
  createContext<BarChartContext>({
    name: "BarChartContext",
    errorMessage: `useBarChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<BarChart />"`,
  })

export type UseBarChartProps = BarChartProps & {
  styles: Dict<CSSUIObject>
}

export const useBarChart = ({
  data,
  series,
  type,
  barChartProps = {},
  containerProps = {},
  xAxisProps = {},
  yAxisProps = {},
  withXAxis = true,
  withYAxis = true,
  tickLine = "y",
  gridAxis = "x",
  dataKey,
  unit,
  splitColors = ["red.400", "green.400"],
  legendProps = {},
  tooltipProps = {},
  connectNulls = true,
  tooltipAnimationDuration = 0,
  orientation = "horizontal",
  valueFormatter,
  styles,
}: UseBarChartProps) => {
  const { theme } = useTheme()
  const uuid = useId()
  const stacked = type === "stacked" || type === "percent"

  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")

  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  const getBarProps: RequiredChartPropGetter<
    "div",
    {
      item: BarChartSeries
      index: number
    },
    Omit<BarProps, "ref">
  > = useCallback(
    ({ item, index, className, ...props }, ref = null) => {
      const id = `${uuid}-${item.color}`
      const color = `var(--ui-bar-${index})`
      const dimmed = shouldHighlight && highlightedArea !== item.dataKey
      const [barReChartsProps, barUIProps] = splitObject(item, barProperties)
      const areaStyleClassName = getCSS(styles.area)(theme)
      const areaClassName = getCSS(barUIProps as CSSUIObject)(theme)

      return {
        ref,
        className: cx(className, areaClassName, areaStyleClassName),
        id,
        name: item.dataKey as string,
        dataKey: item.dataKey,
        fill: color,
        stroke: color,
        isAnimationActive: false,
        connectNulls,
        stackId: stacked ? "stack" : undefined,
        fillOpacity: dimmed ? 0.1 : 1,
        strokeOpacity: dimmed ? 0.2 : 0,
        strokeDasharray: item.strokeDasharray,
        ...(props as Omit<BarProps, "dataKey">),
        ...omitObject(barReChartsProps, ["dataKey", "color"]),
      }
    },
    [
      uuid,
      shouldHighlight,
      highlightedArea,
      styles.area,
      theme,
      connectNulls,
      stacked,
    ],
  )

  const getBarChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof BarChart>,
    ComponentPropsWithoutRef<typeof BarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        barChartProps,
        areaChartProperties,
      )
      const styleClassName = getCSS(styles.barChart)(theme)
      const propClassName = getCSS(uiProps)(theme)

      return {
        ref,
        className: cx(className, propClassName, styleClassName),
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: orientation,
        ...props,
        ...reChartsProps,
      }
    },
    [barChartProps, data, orientation, styles.barChart, theme, type],
  )

  const getContainerProps: ChartPropGetter<
    "div",
    Partial<Omit<ResponsiveContainerProps, "children">>,
    Omit<ResponsiveContainerProps, "children">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        containerProps,
        containerProperties,
      )

      const PropClassName = getCSS(uiProps)(theme)

      let containerClassName: string
      if (isNumber(className))
        containerClassName = cx(className.toString(), PropClassName)
      else containerClassName = cx(className, className)

      return {
        ref,
        containerClassName,
        ...props,
        ...reChartsProps,
      }
    },
    [containerProps, theme],
  )

  const getXAxisProps: ChartPropGetter<
    "div",
    Partial<XAxisProps>,
    XAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => {
      const [reChartsProps, uiProps] = splitObject(xAxisProps, xAxisProperties)
      const styleClassName = getCSS(styles.xAxis)(theme)
      const propClassName = getCSS(uiProps as CSSUIObject)(theme)

      return {
        className: cx(className, propClassName, styleClassName),
        hide: !withXAxis,
        ...(orientation === "vertical" ? { type: "number" } : { dataKey }),
        tick: {
          transform: "translate(0, 10)",
          fill: "currentColor",
        },
        stroke: "",
        interval: "preserveStartEnd",
        tickLine: withXTickLine ? { stroke: "currentColor" } : false,
        minTickGap: 5,
        ...props,
        ...(reChartsProps as XAxisProps),
      }
    },
    [
      dataKey,
      orientation,
      styles.xAxis,
      theme,
      withXAxis,
      withXTickLine,
      xAxisProps,
    ],
  )

  const getYAxisProps: ChartPropGetter<
    "div",
    Partial<YAxisProps>,
    YAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => {
      const [reChartsProps, uiProps] = splitObject(yAxisProps, yAxisProperties)

      const styleClassName = getCSS(styles.yAxis)(theme)
      const propClassName = getCSS(uiProps as CSSUIObject)(theme)

      return {
        className: cx(className, propClassName, styleClassName),
        hide: !withYAxis,
        axisLine: false,
        ...(orientation === "vertical"
          ? { dataKey, type: "category" }
          : { type: "number" }),
        tickLine: withYTickLine ? { stroke: "currentColor" } : false,
        tick: {
          transform: "translate(-10, 0)",
          fill: "currentColor",
        },
        allowDecimals: true,
        unit: unit,
        tickFormatter: type === "percent" ? valueToPercent : valueFormatter,
        ...props,
        ...(reChartsProps as YAxisProps),
      }
    },
    [
      yAxisProps,
      styles.yAxis,
      theme,
      withYAxis,
      orientation,
      dataKey,
      withYTickLine,
      unit,
      type,
      valueFormatter,
    ],
  )

  const getLegendProps: ChartPropGetter<
    "div",
    Partial<LegendProps>,
    Omit<LegendProps, "ref">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      const [reChartProps, uiProps] = splitObject(legendProps, legendProperties)
      const propClassName = getCSS(uiProps as CSSUIObject)(theme)

      return {
        ref,
        className: cx(className, propClassName),
        verticalAlign: "top",
        ...props,
        ...reChartProps,
      }
    },
    [legendProps, theme],
  )

  const getTooltipProps: ChartPropGetter<
    "div",
    Partial<TooltipProps<any, any>>,
    Omit<TooltipProps<any, any>, "ref">
  > = useCallback(
    ({ labelClassName, wrapperClassName, ...props } = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        tooltipProps,
        tooltipProperties,
      )
      const propClassName = getCSS(uiProps)(theme)

      return {
        ref,
        labelClassName: cx(labelClassName, propClassName),
        wrapperClassName: cx(wrapperClassName, propClassName),
        animationDuration: tooltipAnimationDuration,
        isAnimationActive: (tooltipAnimationDuration || 0) > 0,
        ...props,
        ...reChartsProps,
      }
    },
    [theme, tooltipAnimationDuration, tooltipProps],
  )

  const getCSSvariables = useCallback(() => {
    const areaColors: CSSUIProps["var"] = series.map((item, index) => ({
      name: `bar-${index}`,
      token: "colors",
      value: item.color ?? "gray",
    }))

    const areaSplitColors: CSSUIProps["var"] = splitColors.map(
      (color, index) => ({
        name: `barsplit-${index}`,
        token: "colors",
        value: color,
      }),
    )

    return [...areaColors, ...areaSplitColors]
  }, [series, splitColors])

  return {
    getBarProps,
    getBarChartProps,
    getContainerProps,
    getXAxisProps,
    getYAxisProps,
    getLegendProps,
    getTooltipProps,
    setHighlightedArea,
    getCSSvariables,
  }
}

export type UseBarChartReturn = ReturnType<typeof useBarChart>

const valueToPercent = (value: number) => {
  return `${(value * 100).toFixed(0)}%`
}
