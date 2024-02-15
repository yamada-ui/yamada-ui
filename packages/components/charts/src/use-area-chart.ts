import { StyleSheet } from "@emotion/sheet"
import { useTheme, css } from "@yamada-ui/core"
import { useToken, useValue } from "@yamada-ui/react"
import type { PropGetter } from "@yamada-ui/utils"
import { createContext, createdDom, cx, splitObject } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef, ForwardedRef } from "react"
import { useCallback, useId, useState } from "react"
import type {
  AreaChart as ReChartsAreaChart,
  AreaProps,
  ReferenceLineProps,
  ResponsiveContainerProps,
  XAxisProps,
  YAxisProps,
  LegendProps,
  TooltipProps,
} from "recharts"
import type { AreaChartProps, AreaChartSeries } from "./area-chart"
import type { AreaGradientProps } from "./area-gradient"
import type { AreaSplitProps } from "./area-split"

type AreaChartPropGetter = (
  props?: ComponentPropsWithoutRef<typeof ReChartsAreaChart>,
  ref?: ForwardedRef<HTMLElement>,
) => ComponentPropsWithoutRef<typeof ReChartsAreaChart>
type AreaPropGetter = (
  item: AreaChartSeries,
  props?: Partial<AreaProps>,
  ref?: ForwardedRef<HTMLElement>,
) => Omit<AreaProps, "ref">
type ReferenceLinePropGetter = (
  props?: Partial<ReferenceLineProps>,
  ref?: ForwardedRef<HTMLElement>,
) => Omit<ReferenceLineProps, "ref">
type ResponsiveContainerPropGetter = (
  props?: Partial<Omit<ResponsiveContainerProps, "children">>,
  ref?: ForwardedRef<HTMLElement>,
) => Omit<ResponsiveContainerProps, "children">
type XAxisPropGetter = (props?: Partial<XAxisProps>) => XAxisProps
type YAxisPropGetter = (props?: Partial<YAxisProps>) => YAxisProps
type LegendPropGetter = (
  props?: Partial<LegendProps>,
  ref?: ForwardedRef<HTMLElement>,
) => Omit<LegendProps, "ref">
type TooltipPropGetter = (
  props?: Partial<TooltipProps<any, any>>,
  ref?: ForwardedRef<HTMLElement>,
) => Omit<TooltipProps<any, any>, "ref">
type AreaSplitPropGetter = (props?: Partial<AreaSplitProps>) => AreaSplitProps
type AreaGradientPropGetter = (
  props?: Partial<AreaGradientProps>,
) => AreaGradientProps

type AreaChartContext = {}

export const [AreaChartProvider, useAreaChartContext] =
  createContext<AreaChartContext>({
    name: "AreaChartContext",
    errorMessage: `useAreaChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<AreaChart />"`,
  })

export type AxisType = "x" | "y" | "xy" | "none"

export type UseAreaChartProps = AreaChartProps & {
  containerProps?: ResponsiveContainerProps
}

export const useAreaChart = ({
  height,
  data,
  series,
  type,
  areaChartProps,
  gridProps = {},
  strokeDasharray = "5 5",
  tickLine = "y",
  gridAxis = "x",
  orientation = "horizontal",
  withGradient,
  containerProps, //!入ってない
  xAxisProps,
  yAxisProps,
  withXAxis = true,
  withYAxis = true,
  dataKey,
  unit,
  withDots = true,
  withActiveDots = true,
  activeDotProps,
  dotProps,
  curveType = "monotone",
  strokeWidth = 2,
  connectNulls = true,
  legendProps,
  tooltipAnimationDuration = 0,
  tooltipProps,
  fillOpacity = 0.2,
  splitColors = ["#28412c", "#ff0000"],
  splitOffset,
  valueFormatter,
}: UseAreaChartProps) => {
  const baseId = useId()
  const splitId = `${baseId}-split`
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const _withGradient =
    typeof withGradient === "boolean" ? withGradient : type === "default"
  const stacked = type === "stacked" || type === "percent"

  //todo: legendでホバーした奴をハイライトするやつ
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  const getAreaChartProps: AreaChartPropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        ref,
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: orientation,
        ...props,
        ...areaChartProps,
      }
    },
    [areaChartProps, data, orientation, type],
  )

  const getAreaProps: AreaPropGetter = useCallback(
    (item, props = {}, ref = null) => {
      const id = `${baseId}-${item.color}`
      const color = (useToken("colors", useValue(item.color)) ??
        item.color) as string
      const dimmed = shouldHighlight && highlightedArea !== item.name

      return {
        ref,
        id,
        activeDot: withActiveDots
          ? {
              fill: "#fff",
              stroke: color,
              strokeWidth: 2,
              r: 4,
              ...activeDotProps,
            }
          : false,
        dot: withDots
          ? {
              fill: color,
              fillOpacity: dimmed ? 0 : 1,
              strokeWidth: 2,
              r: 4,
              ...dotProps,
            }
          : false,
        name: item.name,
        type: curveType,
        dataKey: item.name,
        fill: type === "split" ? `url(#${splitId})` : `url(#${id})`,
        strokeWidth: strokeWidth,
        stroke: color,
        isAnimationActive: false,
        connectNulls: connectNulls,
        stackId: stacked ? "stack" : undefined,
        fillOpacity: dimmed ? 0 : 1,
        strokeOpacity: dimmed ? 0.5 : 1,
        strokeDasharray: item.strokeDasharray,
        ...props,
      }
    },
    [
      activeDotProps,
      baseId,
      connectNulls,
      curveType,
      dotProps,
      highlightedArea,
      shouldHighlight,
      splitId,
      stacked,
      strokeWidth,
      type,
      withActiveDots,
      withDots,
    ],
  )

  const getReferenceLineProps: ReferenceLinePropGetter = useCallback(
    (props = {}, ref = null) => {
      const color = useToken("colors", useValue(props.color)) ?? props.color

      return {
        ref,
        stroke: color ?? "gray",
        strokeWidth: 1,
        ...props,
        label: {
          value: props.label as string,
          fill: color ?? "currentColor",
          fontSize: 12,
          position: "insideBottomLeft",
          ...(typeof props.label === "object" ? props.label : {}),
        },
      }
    },
    [],
  )

  const getContainerProps: ResponsiveContainerPropGetter = useCallback(
    (props = {}, ref = null) => {
      //!divに合わせてくれるなら、こっちでsize指定いらんくない？
      // const h = useToken("sizes", useValue(height)) ?? height
      // console.log(h)
      return {
        ...props,
        ref,
        ...containerProps,
      }
    },
    [containerProps],
  )

  const [gridRechartProps, gridUIProps] = splitObject(gridProps, [
    "x",
    "y",
    "width",
    "height",
    "horizontal",
    "vertical",
    "horizontalPoints",
    "horizontalCoordinatesGenerator",
    "verticalPoints",
    "verticalCoordinatesGenerator",
    "fill",
    "fillOpacity",
    "strokeDasharray",
  ])

  const styleSheet = createdDom()
    ? new StyleSheet({ key: "css", container: document.head })
    : undefined
  const { theme } = useTheme()
  //!styleが取れない
  const style = css({ ...gridUIProps })(theme)
  //!class名が取れない
  let gridClassName: string = ""
  //    const gridClassName = styleSheet?.insert(style)
  // if (style) {
  //    const before = new Set(document.styleSheets[0].rules)
  //    const gridClassName = styleSheet?.insert(style)
  //    const after = new Set(document.styleSheets[0].rules)
  //    const newRules = [...after].filter((rule) => !before.has(rule))
  //    gridClassName = newRules.map((rule) => rule.selectorText.substring(1))
  // }

  //参考　resizable config.ts carousel
  const getGridProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        strokeDasharray: strokeDasharray,
        vertical: gridAxis === "y" || gridAxis === "xy",
        horizontal: gridAxis === "x" || gridAxis === "xy",
        ...props,
        ref,
        ...gridRechartProps,
        className: cx(props.className, gridClassName),
      }
    },
    [strokeDasharray, gridAxis, gridRechartProps, gridClassName],
  )

  const getXAxisProps: XAxisPropGetter = useCallback(
    (props = {}) => {
      return {
        hide: !withXAxis,
        ...(orientation === "vertical" ? { type: "number" } : { dataKey }),
        tick: {
          transform: "translate(0, 10)",
          fontSize: 12,
          fill: "currentColor",
        },
        stroke: "",
        interval: "preserveStartEnd",
        tickLine: withXTickLine ? { stroke: "currentColor" } : false,
        minTickGap: 5,
        ...props,
        ...xAxisProps,
      }
    },
    [dataKey, orientation, withXAxis, withXTickLine, xAxisProps],
  )

  const getYAxisProps: YAxisPropGetter = useCallback(
    (props = {}) => {
      return {
        hide: !withYAxis,
        axisLine: false,
        ...(orientation === "vertical"
          ? { dataKey, type: "category" }
          : { type: "number" }),
        tickLine: withYTickLine ? { stroke: "currentColor" } : false,
        tick: {
          transform: "translate(-10, 0)",
          fontSize: 12,
          fill: "currentColor",
        },
        allowDecimals: true,
        unit: unit,
        tickFormatter: type === "percent" ? valueToPercent : valueFormatter,
        ...props,
        ...yAxisProps,
      }
    },
    [
      dataKey,
      orientation,
      type,
      unit,
      valueFormatter,
      withYAxis,
      withYTickLine,
      yAxisProps,
    ],
  )

  const getLegendProps: LegendPropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        ref,
        verticalAlign: "top",
        ...props,
        ...legendProps,
      }
    },
    [legendProps],
  )

  const getTooltipProps: TooltipPropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        ref,
        animationDuration: tooltipAnimationDuration,
        isAnimationActive: (tooltipAnimationDuration || 0) > 0,
        ...props,
        ...tooltipProps,
      }
    },
    [tooltipAnimationDuration, tooltipProps],
  )

  const getAreaSplitProps: AreaSplitPropGetter = useCallback(
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
          const dataKey = series[0].name
          return getSplitOffset({ dataKey })
        }

        return 0.5
      }

      return {
        id: splitId,
        colors: splitColors,
        offset: splitOffset ?? getDefaultSplitOffset(),
        fillOpacity,
        ...props,
      }
    },
    [data, fillOpacity, series, splitColors, splitId, splitOffset],
  )

  const getAreaGradientProps: AreaGradientPropGetter = useCallback(
    (props = {}) => {
      return {
        withGradient: _withGradient,
        fillOpacity,
        ...props,
      }
    },
    [_withGradient, fillOpacity],
  )

  function valueToPercent(value: number) {
    return `${(value * 100).toFixed(0)}%`
  }

  return {
    getAreaChartProps,
    getAreaProps,
    getReferenceLineProps,
    getGridProps,
    getContainerProps,
    getXAxisProps,
    getYAxisProps,
    getLegendProps,
    getTooltipProps,
    getAreaSplitProps,
    getAreaGradientProps,
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
