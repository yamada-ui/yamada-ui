import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { getCSS, useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { createContext, cx, omitObject, splitObject } from "@yamada-ui/utils"
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
import {
  areaChartProperties,
  referenceLineProperties,
  type AreaChartSeries,
  type ChartPropGetter,
  type ReferenceUILineProps,
  type RequiredChartPropGetter,
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
  //baseid →　uuid
  const uuid = useId()
  const splitId = `${uuid}-split`
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const stacked = type === "stacked" || type === "percent"
  //todo アンダーバーが逆　withGradientPropのほうが主流 reduxでは_がつくと無視される
  const _withGradient =
    typeof withGradient === "boolean" ? withGradient : type === "default"

  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  const { theme } = useTheme()

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
      const PropClassName = getCSS(uiProps)(theme)

      return {
        ref,
        className: cx(className, PropClassName),
        data,
        stackOffset: type === "percent" ? "expand" : undefined,
        layout: orientation,
        ...props,
        ...reChartsProps,
      }
    },
    [areaChartProps, data, orientation, theme, type],
  )

  const getReferenceLineProps: RequiredChartPropGetter<
    "div",
    {
      line: ReferenceUILineProps
      index: number
    },
    Omit<ReferenceLineProps, "ref">
  > = useCallback(
    (props, ref = null) => {
      const line = props.line
      const index = props.index
      const [reChartsProps, uiProps] = splitObject(
        line,
        referenceLineProperties,
      )
      const stylesClassName = getCSS(styles)(theme)
      const className = getCSS(uiProps as CSSUIObject)(theme)
      //todo: スコープ内なので、areachartいらない
      const color = `var(--ui-areachart-referenceline-${index})`

      //todo: labelの変数にしてネストさせないのがよい
      return {
        ref,
        className: cx(props.className, className, stylesClassName),
        stroke: color,
        strokeWidth: styles.referenceLine.strokeWidth as number,
        label: {
          value: reChartsProps.label as string,
          fill: color,
          fontSize: styles.referenceLine.fontSize as number,
          position: "insideBottomLeft",
          ...(typeof reChartsProps.label === "object"
            ? reChartsProps.label
            : {}),
        },
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
    (props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        containerProps,
        containerProperties,
      )

      let className = getCSS(uiProps)(theme)
      //todo is number
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
    [containerProps, theme],
  )

  const getGridProps: ChartPropGetter<
    "div",
    Partial<CartesianGridProps>,
    CartesianGridProps
  > = useCallback(
    (props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(gridProps, gridProperties)
      const className = getCSS(uiProps as CSSUIObject)(theme)

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
    [gridProps, theme, strokeDasharray, gridAxis],
  )

  const getXAxisProps: ChartPropGetter<
    "div",
    Partial<XAxisProps>,
    XAxisProps
  > = useCallback(
    (props = {}) => {
      const [reChartsProps, uiProps] = splitObject(xAxisProps, xAxisProperties)
      const className = getCSS(uiProps as CSSUIObject)(theme)

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
    [dataKey, orientation, theme, withXAxis, withXTickLine, xAxisProps],
  )

  const getYAxisProps: ChartPropGetter<
    "div",
    Partial<YAxisProps>,
    YAxisProps
  > = useCallback(
    (props = {}) => {
      const [reChartsProps, uiProps] = splitObject(yAxisProps, yAxisProperties)

      //todo: useCSSで挿入した時の順番が担保されるのであれば2つ作った方がきれい
      const className = getCSS({
        ...styles.yAxis,
        ...(uiProps as CSSUIObject),
      })(theme)

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
    (props = {}, ref = null) => {
      const [reChartProps, uiProps] = splitObject(legendProps, legendProperties)

      const className = getCSS(uiProps as CSSUIObject)(theme)

      return {
        ref,
        className: cx(props.className, className),
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
    (props = {}, ref = null) => {
      const [reChartsProps, uiProps] = splitObject(
        tooltipProps,
        tooltipProperties,
      )
      const className = getCSS(uiProps)(theme)

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
    (props, ref = null) => {
      const item = props.item
      const index = props.index
      const id = `${uuid}-${item.color}`
      const color = `var(--ui-areachart-area-${index})`
      const dimmed = shouldHighlight && highlightedArea !== item.dataKey
      const [areaReChartsProps, areaUIProps] = splitObject(item, areaProperties)
      const areaClassName = getCSS(areaUIProps as CSSUIObject)(theme)

      const [activeDotReChartsProps, activeDotUIProps] = splitObject<
        Dict,
        string
      >(activeDotProps, dotProperties)
      const activeDotClassName = getCSS(activeDotUIProps)(theme)

      const [dotReChartsProps, dotUIProps] = splitObject<Dict, string>(
        dotProps,
        dotProperties,
      )
      const dotClassName = getCSS(dotUIProps)(theme)

      //todo if文は基本、波カッコに入れたい
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
        className: cx(item.className, areaClassName),
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

  //todo: yamada ui のどこかにありそう
  //todo: use area chartの外でいいのでは
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
