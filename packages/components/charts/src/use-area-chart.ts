import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { getCSS, useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx, isObject, omitObject, splitObject } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useId, useState } from "react"
import type {
  AreaChart,
  AreaProps,
  ReferenceLineProps,
  XAxisProps,
  YAxisProps,
  LegendProps,
  TooltipProps,
  DotProps,
  CartesianGridProps,
} from "recharts"
import type { AreaGradientProps } from "./area-chart-gradient"
import type { AreaSplitProps } from "./area-chart-split"
import type {
  AreaChartCurveType,
  AreaChartSeries,
  AreaChartType,
  AreaChartUIProps,
  AxisType,
  ChartPropGetter,
  DotUIProps,
  GridUIProps,
  LayoutType,
  LegendUIProps,
  ReferenceUILineProps,
  RequiredChartPropGetter,
  TooltipUIProps,
  XAxisUIProps,
  YAxisUIProps,
} from "./chart.types"
import {
  areaChartProperties,
  referenceLineProperties,
  gridProperties,
  xAxisProperties,
  yAxisProperties,
  legendProperties,
  tooltipProperties,
  dotProperties,
  areaProperties,
} from "./chart.types"

export type UseAreaChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   *  The key of a group of data which should be unique in an area chart.
   */
  dataKey: string
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: AreaChartSeries[]
  /**
   *  Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   *  Props passed down to recharts `AreaChart` component.
   */
  areaChartProps?: AreaChartUIProps
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
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   *
   * @default '5 5'
   */
  strokeDasharray?: string | number
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
  layoutType?: LayoutType
  /**
   *  Determines whether the chart area should be represented with a gradient instead of the solid color.
   */
  withGradient?: boolean
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
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
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
   *  Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: AreaChartCurveType
  /**
   *  Stroke width for the chart areas.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   *  Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
  /**
   *  A tuple of colors used when `type="split"` is set, ignored in all other cases.
   *
   * @default '["red.400", "green.400"]'
   */
  splitColors?: [string, string]
  /**
   *  Offset for the split gradient. By default, value is inferred from `data` and `series` if possible. Must be generated from the data array with `getSplitOffset` function.
   */
  splitOffset?: number
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceUILineProps[]
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   *  Controls fill opacity of all areas.
   *
   * @default 0.2
   */
  fillOpacity?: number
}

export type UseAreaChartProps = UseAreaChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useAreaChart = ({
  data,
  dataKey,
  series,
  type,
  areaChartProps = {},
  gridProps = {},
  xAxisProps = {},
  yAxisProps = {},
  activeDotProps = {},
  dotProps = {},
  legendProps = {},
  tooltipProps = {},
  strokeDasharray = "5 5",
  tickLine = "y",
  gridAxis = "x",
  layoutType = "horizontal",
  withGradient: withGradientProp,
  withXAxis = true,
  withYAxis = true,
  unit,
  withDots = true,
  withActiveDots = true,
  curveType = "monotone",
  strokeWidth = 2,
  connectNulls = true,
  tooltipAnimationDuration = 0,
  fillOpacity = 0.2,
  splitColors = ["red.400", "green.400"],
  splitOffset,
  referenceLineProps,
  valueFormatter,
  styles,
}: UseAreaChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const splitId = `${uuid}-split`
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const stacked = type === "stacked" || type === "percent"
  const withGradient =
    typeof withGradientProp === "boolean"
      ? withGradientProp
      : type === "default"
  const shouldHighlight = highlightedArea !== null

  const getAreaChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof AreaChart>,
    ComponentPropsWithoutRef<typeof AreaChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        areaChartProps,
        areaChartProperties,
      )
      const styleClassName = getCSS(styles.areaChart)(theme)
      const propClassName = getCSS(uiProps)(theme)

      return {
        ref,
        className: cx(className, propClassName, styleClassName),
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: layoutType,
        ...props,
        ...reChartsProps,
      }
    },
    [areaChartProps, data, layoutType, styles.areaChart, theme, type],
  )

  const getReferenceLineProps: RequiredChartPropGetter<
    "div",
    {
      line: ReferenceUILineProps
      index: number
    },
    Omit<ReferenceLineProps, "ref">
  > = useCallback(
    ({ line, index, className, ...props }, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        line,
        referenceLineProperties,
      )
      const styleClassName = getCSS(styles.referenceLine)(theme)
      const propClassName = getCSS(uiProps as CSSUIObject)(theme)
      const color = `var(--ui-reference-line-${index})`

      const label: ReferenceLineProps["label"] = {
        value: reChartsProps.label as string,
        fill: color,
        position: "insideBottomLeft",
        ...(isObject(reChartsProps.label) ? reChartsProps.label : {}),
      }

      return {
        ref,
        className: cx(className, propClassName, styleClassName),
        stroke: color,
        label,
        ...(props as ReferenceLineProps),
        ...omitObject(reChartsProps, ["label"]),
      }
    },
    [styles, theme],
  )

  const [reChartsProps, uiProps] = splitObject(gridProps, gridProperties)
  const styleClassName = getCSS(styles.grid)(theme)
  const propClassName = getCSS(uiProps as CSSUIObject)(theme)

  const getGridProps: ChartPropGetter<
    "div",
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      return {
        ref,
        className: cx(className, propClassName, styleClassName),
        strokeDasharray: strokeDasharray,
        vertical: gridAxis === "y" || gridAxis === "xy",
        horizontal: gridAxis === "x" || gridAxis === "xy",
        ...props,
        ...reChartsProps,
      }
    },
    [propClassName, styleClassName, strokeDasharray, gridAxis, reChartsProps],
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
        ...(layoutType === "vertical" ? { type: "number" } : { dataKey }),
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
      layoutType,
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
        ...(layoutType === "vertical"
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
      layoutType,
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

  const getSplitOffset = ({ dataKey }: { dataKey: string }) => {
    const dataMax = Math.max(...data.map((item) => item[dataKey]))
    const dataMin = Math.min(...data.map((item) => item[dataKey]))

    if (dataMax <= 0) return 0
    if (dataMin >= 0) return 1

    return dataMax / (dataMax - dataMin)
  }

  const getDefaultSplitOffset = () => {
    if (series.length === 1) {
      const dataKey = series[0].dataKey as string
      return getSplitOffset({ dataKey })
    }

    return 0.5
  }

  const defaultSplitOffset = getDefaultSplitOffset()

  const getAreaSplitProps: ChartPropGetter<
    "div",
    Partial<AreaSplitProps>,
    AreaSplitProps
  > = useCallback(
    (props = {}) => {
      return {
        id: splitId,
        offset: splitOffset ?? defaultSplitOffset,
        fillOpacity,
        ...props,
      }
    },
    [defaultSplitOffset, fillOpacity, splitId, splitOffset],
  )

  const getAreaProps: RequiredChartPropGetter<
    "div",
    {
      item: AreaChartSeries
      index: number
    },
    Omit<AreaProps, "ref">
  > = useCallback(
    ({ item, index, className, ...props }, ref = null) => {
      const id = `${uuid}-${item.color}`
      const color = `var(--ui-area-${index})`
      const dimmed = shouldHighlight && highlightedArea !== item.dataKey
      const [areaReChartsProps, areaUIProps] = splitObject(item, areaProperties)

      const areaStyleClassName = getCSS(styles.area)(theme)
      const areaClassName = getCSS(areaUIProps as CSSUIObject)(theme)

      const [activeDotReChartsProps, activeDotUIProps] = splitObject<
        Dict,
        string
      >(activeDotProps, dotProperties)
      const activeDotStyleClassName = getCSS(styles.activeDot)(theme)
      const activeDotClassName = getCSS(activeDotUIProps)(theme)

      const [dotReChartsProps, dotUIProps] = splitObject<Dict, string>(
        dotProps,
        dotProperties,
      )
      const dotStyleClassName = getCSS(styles.dot)(theme)
      const dotClassName = getCSS(dotUIProps)(theme)

      let activeDot: DotProps | boolean
      if (withActiveDots) {
        activeDot = {
          className: cx(className, activeDotClassName, activeDotStyleClassName),
          stroke: color,
          r: 4,
          ...activeDotReChartsProps,
          ...(areaReChartsProps["activeDot"] as DotProps),
        }
      } else {
        activeDot = false
      }

      let dot: DotProps | boolean
      if (withDots) {
        dot = {
          className: cx(className, dotClassName, dotStyleClassName),
          fill: color,
          fillOpacity: dimmed ? 0 : 1,
          strokeWidth: 2,
          r: 4,
          ...dotReChartsProps,
          ...(areaReChartsProps["dot"] as DotProps),
        }
      } else {
        dot = false
      }

      return {
        ref,
        className: cx(className, areaClassName, areaStyleClassName),
        id,
        activeDot,
        dot,
        name: item.dataKey as string,
        type: curveType,
        dataKey: item.dataKey,
        fill: type === "split" ? `url(#${splitId})` : `url(#${id})`,
        strokeWidth,
        stroke: color,
        isAnimationActive: false,
        connectNulls,
        stackId: stacked ? "stack" : undefined,
        fillOpacity: dimmed ? 0 : 1,
        strokeOpacity: dimmed ? 0.5 : 1,
        strokeDasharray: item.strokeDasharray,
        ...(props as Omit<AreaProps, "dataKey">),
        ...omitObject(areaReChartsProps, [
          "dataKey",
          "dot",
          "activeDot",
          "color",
        ]),
      }
    },
    [
      uuid,
      shouldHighlight,
      highlightedArea,
      styles.area,
      styles.activeDot,
      styles.dot,
      theme,
      activeDotProps,
      dotProps,
      withActiveDots,
      withDots,
      curveType,
      type,
      splitId,
      strokeWidth,
      connectNulls,
      stacked,
    ],
  )

  const getAreaGradientProps: ChartPropGetter<
    "div",
    Partial<AreaGradientProps>,
    AreaGradientProps
  > = useCallback(
    (props = {}) => {
      return {
        withGradient: withGradient,
        fillOpacity,
        ...props,
      }
    },
    [withGradient, fillOpacity],
  )

  const getCSSvariables = useCallback(() => {
    const areaColors: CSSUIProps["var"] = series.map((item, index) => ({
      name: `area-${index}`,
      token: "colors",
      value: item.color ?? "gray",
    }))

    const areaSplitColors: CSSUIProps["var"] = splitColors.map(
      (color, index) => ({
        name: `area-split-${index}`,
        token: "colors",
        value: color,
      }),
    )

    const referenceLineColors: CSSUIProps["var"] = referenceLineProps
      ? referenceLineProps.map((line, index) => ({
          name: `reference-line-${index}`,
          token: "colors",
          value: line.color ?? "gray",
        }))
      : []

    return [...areaColors, ...areaSplitColors, ...referenceLineColors]
  }, [referenceLineProps, series, splitColors])

  return {
    getAreaChartProps,
    getReferenceLineProps,
    getGridProps,
    getXAxisProps,
    getYAxisProps,
    getLegendProps,
    getTooltipProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    getCSSvariables,
    setHighlightedArea,
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>

const valueToPercent = (value: number) => {
  return `${(value * 100).toFixed(0)}%`
}
