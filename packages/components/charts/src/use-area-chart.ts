import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { getCSS, useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import {
  createContext,
  cx,
  isNumber,
  isObject,
  omitObject,
  splitObject,
} from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useId, useState } from "react"
import type {
  AreaChart,
  AreaProps,
  ReferenceLineProps,
  ResponsiveContainerProps,
  XAxisProps,
  YAxisProps,
  LegendProps,
  TooltipProps,
  DotProps,
  CartesianGridProps,
} from "recharts"
import type { AreaChartProps } from "./area-chart"
import type { AreaGradientProps } from "./area-gradient"
import type { AreaSplitProps } from "./area-split"
import type {
  AreaChartSeries,
  ChartPropGetter,
  ReferenceUILineProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  areaChartProperties,
  referenceLineProperties,
  containerProperties,
  gridProperties,
  xAxisProperties,
  yAxisProperties,
  legendProperties,
  tooltipProperties,
  dotProperties,
  areaProperties,
} from "./chart.types"

type AreaChartContext = {}

export const [AreaChartProvider, useAreaChartContext] =
  createContext<AreaChartContext>({
    name: "AreaChartContext",
    errorMessage: `useAreaChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<AreaChart />"`,
  })

export type UseAreaChartProps = Omit<AreaChartProps, "fillOpacity"> & {
  fillOpacity?: number
  styles: Dict<CSSUIObject>
}

export const useAreaChart = ({
  data,
  series,
  type,
  areaChartProps = {},
  gridProps = {},
  containerProps = {},
  xAxisProps = {},
  yAxisProps = {},
  activeDotProps = {},
  dotProps = {},
  legendProps = {},
  tooltipProps = {},
  strokeDasharray = "5 5",
  tickLine = "y",
  gridAxis = "x",
  orientation = "horizontal",
  withGradient: withGradientProp,
  withXAxis = true,
  withYAxis = true,
  dataKey,
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
  referenceLines,
  valueFormatter,
  styles,
}: UseAreaChartProps) => {
  const uuid = useId()
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

  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  const { theme } = useTheme()

  //todo: classnameだけで変更可能かは要検証　できるならそっちの方がよい
  //?...propでとったやつ渡す必要ないのでは？
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
      const PropClassName = getCSS(uiProps)(theme)

      return {
        ref,
        className: cx(className, PropClassName, styleClassName),
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: orientation,
        ...props,
        ...reChartsProps,
      }
    },
    [areaChartProps, data, orientation, styles.areaChart, theme, type],
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
      const stylesClassName = getCSS(styles.referenceLine)(theme)
      const PropClassName = getCSS(uiProps as CSSUIObject)(theme)
      const color = `var(--ui-referenceline-${index})`

      const label: ReferenceLineProps["label"] = {
        value: reChartsProps.label as string,
        fill: color,
        position: "insideBottomLeft",
        ...(isObject(reChartsProps.label) ? reChartsProps.label : {}),
      }

      return {
        ref,
        className: cx(className, PropClassName, stylesClassName),
        stroke: color,
        label,
        ...omitObject(reChartsProps, ["label"]),
      }
    },
    [styles, theme],
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

  const getGridProps: ChartPropGetter<
    "div",
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(gridProps, gridProperties)
      const styleClassName = getCSS(styles.grid)(theme)
      const propClassName = getCSS(uiProps as CSSUIObject)(theme)

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
    [gridProps, styles.grid, theme, strokeDasharray, gridAxis],
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
        ...reChartsProps,
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
        ...reChartsProps,
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

  const getAreaSplitProps: ChartPropGetter<
    "div",
    Partial<AreaSplitProps>,
    AreaSplitProps
  > = useCallback(
    (props = {}) => {
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

      return {
        id: splitId,
        offset: splitOffset ?? getDefaultSplitOffset(),
        fillOpacity,
        ...props,
      }
    },
    [data, fillOpacity, series, splitId, splitOffset],
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
          fill: "white",
          stroke: color,
          strokeWidth: 2,
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
        name: `areasplit-${index}`,
        token: "colors",
        value: color,
      }),
    )

    const referenceLineColors: CSSUIProps["var"] = referenceLines
      ? referenceLines.map((line, index) => ({
          name: `referenceline-${index}`,
          token: "colors",
          value: line.color ?? "gray",
        }))
      : []

    return [...areaColors, ...areaSplitColors, ...referenceLineColors]
  }, [referenceLines, series, splitColors])

  return {
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
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>

const valueToPercent = (value: number) => {
  return `${(value * 100).toFixed(0)}%`
}
