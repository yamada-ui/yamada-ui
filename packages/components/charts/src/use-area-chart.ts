import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { useCSS, useTheme } from "@yamada-ui/core"
import type { Dict, PropGetter } from "@yamada-ui/utils"
import { createContext, cx, omitObject, splitObject } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef, ForwardedRef } from "react"
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
} from "recharts"
import type { AreaChartProps } from "./area-chart"
import type { AreaGradientProps } from "./area-gradient"
import type { AreaSplitProps } from "./area-split"
import type { AreaChartSeries, ReferenceUILineProps } from "./chart.types"

//todo Propgetterを使う
type AreaChartPropGetter = (
  props?: ComponentPropsWithoutRef<typeof AreaChart>,
  ref?: ForwardedRef<HTMLElement>,
) => ComponentPropsWithoutRef<typeof AreaChart>
type AreaPropGetter = (
  item: AreaChartSeries,
  index: number,
  props?: Partial<AreaProps>,
  ref?: ForwardedRef<HTMLElement>,
) => Omit<AreaProps, "ref">
type ReferenceLinePropGetter = (
  index: number,
  props?: Partial<ReferenceUILineProps>,
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
  withGradient,
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
  const baseId = useId()
  const splitId = `${baseId}-split`
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const stacked = type === "stacked" || type === "percent"
  const _withGradient =
    typeof withGradient === "boolean" ? withGradient : type === "default"

  //todo: legendでホバーした奴をハイライトするやつ
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  //todo:
  const { theme } = useTheme()
  // getCSS(props)(theme)
  //todo: typeはuseAreaChartにすべて突っ込む　chart.types.ts motionがある

  const getAreaChartProps: AreaChartPropGetter = useCallback(
    (props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(areaChartProps, [
        "layout",
        "syncId",
        "syncMethod",
        "width",
        "height",
        "data",
        "margin",
        "stackOffset",
        "onClick",
        "onMouseEnter",
        "onMouseMove",
        "onMouseLeave",
      ])
      const className = useCSS(uiProps)

      return {
        ref,
        className: cx(props.className, className),
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: orientation,
        ...props,
        ...reChartsProps,
      }
    },
    [areaChartProps, data, orientation, type],
  )

  const getReferenceLineProps: ReferenceLinePropGetter = useCallback(
    (index, props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(props, [
        "xAxisId",
        "yAxisId",
        "x",
        "y",
        "ifOverflow",
        "viewBox",
        "xAxis",
        "yAxis",
        "label",
        "isFront",
        "strokeWidth",
        "segment",
      ])
      const className = useCSS(uiProps as CSSUIObject)
      const color = `var(--ui-areachart-referenceline-${index})`

      return {
        ref,
        className: cx(props.className, className),
        stroke: color,
        strokeWidth: 1,
        label: {
          value: reChartsProps.label as string,
          fill: color,
          fontSize: 12,
          position: "insideBottomLeft",
          ...(typeof reChartsProps.label === "object"
            ? reChartsProps.label
            : {}),
        },
        ...omitObject(reChartsProps, ["label"]),
      }
    },
    [],
  )

  const getContainerProps: ResponsiveContainerPropGetter = useCallback(
    (props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(containerProps, [
        "aspect",
        "width",
        "height",
        "minWidth",
        "minHeight",
        "debounce",
        "onResize",
      ])

      let className = useCSS(uiProps)
      if (typeof props.className === "number")
        className = cx(props.className.toString(), className)
      else className = cx(props.className, className)

      return {
        ref,
        className,
        ...props,
        ...reChartsProps,
      }
    },
    [containerProps],
  )

  const getGridProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(gridProps, [
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
      const className = useCSS(uiProps as CSSUIObject)

      return {
        ref,
        className: cx(props.className, className),
        strokeDasharray: strokeDasharray,
        vertical: gridAxis === "y" || gridAxis === "xy",
        horizontal: gridAxis === "x" || gridAxis === "xy",
        ...props,
        ...reChartsProps,
      }
    },
    [gridProps, strokeDasharray, gridAxis],
  )

  const getXAxisProps: XAxisPropGetter = useCallback(
    (props = {}) => {
      const [reChartsProps, uiProps] = splitObject(xAxisProps, [
        "hide",
        "dataKey",
        "xAxisId",
        "width",
        "height",
        "orientation",
        "type",
        "allowDecimals",
        "allowDataOverflow",
        "allowDuplicatedCategory",
        "angle",
        "tickCount",
        "domain",
        "includeHidden",
        "interval",
        "padding",
        "minTickGap",
        "axisLine",
        "tickLine",
        "tickSize",
        "tickFormatter",
        "ticks",
        "tick",
        "mirror",
        "reversed",
        "label",
        "scale",
        "unit",
        "name",
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onMouseMove",
        "onMouseOver",
        "onMouseOut",
        "onMouseEnter",
        "onMouseLeave",
        "tickMargin",
      ])
      const className = useCSS(uiProps as CSSUIObject)

      return {
        className: cx(props.className, className),
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
        ...reChartsProps,
      }
    },
    [dataKey, orientation, withXAxis, withXTickLine, xAxisProps],
  )

  const getYAxisProps: YAxisPropGetter = useCallback(
    (props = {}) => {
      const [reChartsProps, uiProps] = splitObject(yAxisProps, [
        "hide",
        "dataKey",
        "yAxisId",
        "width",
        "height",
        "orientation",
        "type",
        "tickCount",
        "domain",
        "includeHidden",
        "interval",
        "padding",
        "minTickGap",
        "allowDecimals",
        "allowDataOverflow",
        "allowDuplicatedCategory",
        "axisLine",
        "tickLine",
        "tickSize",
        "tickFormatter",
        "ticks",
        "tick",
        "mirror",
        "reversed",
        "label",
        "scale",
        "unit",
        "name",
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onMouseMove",
        "onMouseOver",
        "onMouseOut",
        "onMouseEnter",
        "onMouseLeave",
        "tickMargin",
      ])

      //todo: useCSSで挿入した時の順番が担保されるのであれば2つ作った方がきれい
      const className = useCSS({
        ...styles.yAxisProps,
        ...(uiProps as CSSUIObject),
      })

      return {
        className: cx(props.className, className),
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
        ...reChartsProps,
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
      styles,
    ],
  )

  const getLegendProps: LegendPropGetter = useCallback(
    (props = {}, ref = null) => {
      const [reChartProps, uiProps] = splitObject(legendProps, [
        "width",
        "height",
        "layout",
        "align",
        "verticalAlign",
        "iconSize",
        "iconType",
        "payload",
        "chartWidth",
        "chartHeight",
        "margin",
        "content",
        "formatter",
        "wrapperStyle",
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onMouseMove",
        "onMouseOver",
        "onMouseOut",
        "onMouseEnter",
        "onMouseLeave",
      ])

      const className = useCSS(uiProps as CSSUIObject)

      return {
        ref,
        className: cx(props.className, className),
        verticalAlign: "top",
        ...props,
        ...reChartProps,
      }
    },
    [legendProps],
  )

  const getTooltipProps: TooltipPropGetter = useCallback(
    (props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(tooltipProps, [
        "offset",
        "filterNull",
        "itemStyle",
        "wrapperStyle",
        "contentStyle",
        "labelStyle",
        "cursor",
        "viewBox",
        "allowEscapeViewBox",
        "active",
        "position",
        "coordinate",
        "payload",
        "label",
        "content",
        "formatter",
        "labelFormatter",
        "itemSorter",
        "isAnimationActive",
        "animationDuration",
        "animationEasing",
      ])
      const className = useCSS(uiProps)

      return {
        ref,
        labelClassName: cx(props.labelClassName, className),
        wrapperClassName: cx(props.wrapperClassName, className),
        animationDuration: tooltipAnimationDuration,
        isAnimationActive: (tooltipAnimationDuration || 0) > 0,
        ...props,
        ...reChartsProps,
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

  //todo: useCSSはダメなのでは
  const getAreaProps: AreaPropGetter = useCallback(
    (item, index, props = {}, ref = null) => {
      const id = `${baseId}-${item.color}`
      const color = `var(--ui-areachart-area-${index})`
      const dimmed = shouldHighlight && highlightedArea !== item.dataKey
      const [areaReChartsProps, areaUIProps] = splitObject(item, [
        "type",
        "dataKey",
        "xAxisId",
        "yAxisId",
        "legendType",
        "dot",
        "activeDot",
        "label",
        "stroke",
        "strokeWidth",
        "layout",
        "baseLine",
        "points",
        "stackId",
        "connectNulls",
        "unit",
        "name",
        "isAnimationActive",
        "animationBegin",
        "animationDuration",
        "animationEasing",
        "id",
        "onAnimationStart",
        "onAnimationEnd",
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onMouseMove",
        "onMouseOver",
        "onMouseOut",
        "onMouseEnter",
        "onMouseLeave",
      ])
      const areaClassName = useCSS(areaUIProps as CSSUIObject)

      const dotParams = [
        "cx",
        "cy",
        "r",
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onMouseMove",
        "onMouseOver",
        "onMouseOut",
        "onMouseEnter",
        "onMouseLeave",
      ]
      const [activeDotReChartsProps, activeDotUIProps] = splitObject<
        Dict,
        string
      >(activeDotProps, dotParams)
      const activeDotClassName = useCSS(activeDotUIProps)

      const [dotReChartsProps, dotUIProps] = splitObject<Dict, string>(
        dotProps,
        dotParams,
      )
      const dotClassName = useCSS(dotUIProps)

      let activeDot: DotProps | boolean
      if (withActiveDots)
        activeDot = {
          className: activeDotClassName,
          fill: "#fff",
          stroke: color,
          strokeWidth: 2,
          r: 4,
          ...activeDotReChartsProps,
          ...(areaReChartsProps["activeDot"] as DotProps),
        }
      else activeDot = false

      let dot: DotProps | boolean
      if (withDots)
        dot = {
          className: dotClassName,
          fill: color,
          fillOpacity: dimmed ? 0 : 1,
          strokeWidth: 2,
          r: 4,
          ...dotReChartsProps,
          ...(areaReChartsProps["dot"] as DotProps),
        }
      else dot = false

      return {
        ref,
        className: cx(props.className, areaClassName),
        id,
        activeDot,
        dot,
        name: item.dataKey as string,
        type: curveType,
        dataKey: item.dataKey,
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
        ...omitObject(areaReChartsProps, ["dataKey", "dot", "activeDot"]),
      }
    },
    [
      activeDotProps,
      dotProps,
      baseId,
      connectNulls,
      curveType,
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

  const getCSSvariables = useCallback(() => {
    const areaColors: CSSUIProps["var"] = series.map((item, index) => ({
      name: `areachart-area-${index}`,
      token: "colors",
      value: item.color ?? "gray",
    }))

    const areaSplitColors: CSSUIProps["var"] = splitColors.map(
      (color, index) => ({
        name: `areachart-areasplit-${index}`,
        token: "colors",
        value: color,
      }),
    )

    const referenceLineColors: CSSUIProps["var"] = referenceLines
      ? referenceLines.map((line, index) => ({
          name: `areachart-referenceline-${index}`,
          token: "colors",
          value: line.color ?? "gray",
        }))
      : []

    return [...areaColors, ...areaSplitColors, ...referenceLineColors]
  }, [referenceLines, series, splitColors])

  const valueToPercent = (value: number) => {
    return `${(value * 100).toFixed(0)}%`
  }

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
