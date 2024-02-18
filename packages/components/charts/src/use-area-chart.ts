import { useCSS } from "@yamada-ui/core"
import type { CSSUIObject, StyleProps } from "@yamada-ui/react"
import type { Dict, PropGetter } from "@yamada-ui/utils"
import { createContext, cx, omitObject, splitObject } from "@yamada-ui/utils"
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
  DotProps,
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
  index: number,
  props?: Partial<AreaProps>,
  ref?: ForwardedRef<HTMLElement>,
) => Omit<AreaProps, "ref">
type ReferenceLinePropGetter = (
  index: number,
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

export type UseAreaChartProps = Omit<AreaChartProps, "fillOpacity"> & {
  fillOpacity?: number
}

export const useAreaChart = ({
  data,
  series,
  type,
  areaChartProps = {},
  areaProps = { dataKey: "" },
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

  const getAreaChartProps: AreaChartPropGetter = useCallback(
    (props = {}, ref = null) => {
      const [areaChartReChartsProps, areaChartUIProps] = splitObject(
        areaChartProps,
        [
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
        ],
      )
      const areaChartClassName = useCSS(areaChartUIProps)

      return {
        ref,
        className: cx(props.className, areaChartClassName),
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: orientation,
        ...props,
        ...areaChartReChartsProps,
      }
    },
    [areaChartProps, data, orientation, type],
  )

  //todo: ui props
  const getReferenceLineProps: ReferenceLinePropGetter = useCallback(
    (index, props = {}, ref = null) => {
      const color = `var(--ui-areachart-referenceline-${index})`

      return {
        ref,
        stroke: color,
        strokeWidth: 1,
        ...props,
        label: {
          value: props.label as string,
          fill: color,
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
      const [contaiterReChartsProps, containerUIProps] = splitObject(
        containerProps,
        [
          "aspect",
          "width",
          "height",
          "minWidth",
          "minHeight",
          "debounce",
          "onResize",
        ],
      )
      const containerClassName = useCSS(containerUIProps)

      let className: string
      if (typeof props.className === "number")
        className = cx(props.className.toString(), containerClassName)
      else className = cx(props.className, containerClassName)

      return {
        ref,
        className,
        ...props,
        ...contaiterReChartsProps,
      }
    },
    [containerProps],
  )

  const getGridProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const [gridReChartsProps, gridUIProps] = splitObject(gridProps, [
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
      const gridClassName = useCSS(gridUIProps as CSSUIObject)

      return {
        ref,
        className: cx(props.className, gridClassName),
        strokeDasharray: strokeDasharray,
        vertical: gridAxis === "y" || gridAxis === "xy",
        horizontal: gridAxis === "x" || gridAxis === "xy",
        ...props,
        ...gridReChartsProps,
      }
    },
    [gridProps, strokeDasharray, gridAxis],
  )

  const getXAxisProps: XAxisPropGetter = useCallback(
    (props = {}) => {
      const [xAxisReChartsProps, xAxisUIProps] = splitObject(xAxisProps, [
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
      const xAxisClassName = useCSS(xAxisUIProps as CSSUIObject)

      return {
        className: cx(props.className, xAxisClassName),
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
        ...xAxisReChartsProps,
      }
    },
    [dataKey, orientation, withXAxis, withXTickLine, xAxisProps],
  )

  const getYAxisProps: YAxisPropGetter = useCallback(
    (props = {}) => {
      const [yAxisReChartsProps, yAxisUIProps] = splitObject(yAxisProps, [
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
      const yAxisClassName = useCSS(yAxisUIProps as CSSUIObject)

      return {
        className: cx(props.className, yAxisClassName),
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
        ...yAxisReChartsProps,
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
      const [legendReChartProps, legendUIProps] = splitObject(legendProps, [
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

      const legendClassName = useCSS(legendUIProps as CSSUIObject)

      return {
        ref,
        className: cx(props.className, legendClassName),
        verticalAlign: "top",
        ...props,
        ...legendReChartProps,
      }
    },
    [legendProps],
  )

  const getTooltipProps: TooltipPropGetter = useCallback(
    (props = {}, ref = null) => {
      const [tooltipReChartsProps, tooltipUIProps] = splitObject(tooltipProps, [
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
      const tooltipClassName = useCSS(tooltipUIProps)

      return {
        ref,
        labelClassName: cx(props.labelClassName, tooltipClassName),
        wrapperClassName: cx(props.wrapperClassName, tooltipClassName),
        animationDuration: tooltipAnimationDuration,
        isAnimationActive: (tooltipAnimationDuration || 0) > 0,
        ...props,
        ...tooltipReChartsProps,
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
        offset: splitOffset ?? getDefaultSplitOffset(),
        fillOpacity,
        ...props,
      }
    },
    [data, fillOpacity, series, splitId, splitOffset],
  )

  //todo: 各エリアのPropsをループでとる必要がある
  //todo: useCSSはダメなのでは
  const getAreaProps: AreaPropGetter = useCallback(
    (item, index, props = {}, ref = null) => {
      const id = `${baseId}-${item.color}`
      const color = `var(--ui-areachart-area-${index})`
      const dimmed = shouldHighlight && highlightedArea !== item.name
      const [areaReChartsProps, areaUIProps] = splitObject(areaProps, [
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

      let activeDot: DotProps | undefined
      if (withActiveDots)
        activeDot = {
          className: activeDotClassName,
          fill: "#fff",
          stroke: color,
          strokeWidth: 2,
          r: 4,
          ...(areaReChartsProps["activeDot"] as DotProps),
          ...activeDotReChartsProps,
        }

      let dot: DotProps | undefined
      if (withDots)
        dot = {
          className: dotClassName,
          fill: color,
          fillOpacity: dimmed ? 0 : 1,
          strokeWidth: 2,
          r: 4,
          ...(areaReChartsProps["dot"] as DotProps),
          ...dotReChartsProps,
        }

      return {
        ref,
        className: cx(props.className, areaClassName),
        id,
        activeDot,
        dot,
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
        ...omitObject(areaReChartsProps, ["dataKey", "dot", "activeDot"]),
      }
    },
    [
      activeDotProps,
      dotProps,
      areaProps,
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
    const areaColors: StyleProps["var"] = series.map((item, index) => ({
      name: `areachart-area-${index}`,
      token: "colors",
      value: item.color ?? "gray",
    }))

    const areaSplitColors: StyleProps["var"] = splitColors.map(
      (color, index) => ({
        name: `areachart-areasplit-${index}`,
        token: "colors",
        value: color,
      }),
    )

    const referenceLineColors: StyleProps["var"] = referenceLines
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
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
