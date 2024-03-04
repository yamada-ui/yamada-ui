import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { getCSS, useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx, omitObject, splitObject } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useId, useState } from "react"
import type { AreaChart, AreaProps, DotProps } from "recharts"
import type { AreaGradientProps } from "./area-chart-gradient"
import type { AreaSplitProps } from "./area-chart-split"
import type {
  AreaChartCurveType,
  AreaChartSeries,
  AreaChartType,
  AreaChartUIProps,
  ChartPropGetter,
  DotUIProps,
  LayoutType,
  ReferenceLineUIProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  areaChartProperties,
  dotProperties,
  areaProperties,
} from "./chart.types"

export type UseAreaChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
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
  referenceLineProps?: ReferenceLineUIProps[]
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
  series,
  type,
  areaChartProps = {},
  activeDotProps = {},
  dotProps = {},
  layoutType = "horizontal",
  withGradient: withGradientProp,
  withDots = true,
  withActiveDots = true,
  curveType = "monotone",
  strokeWidth = 2,
  connectNulls = true,
  fillOpacity = 0.2,
  splitColors = ["red.400", "green.400"],
  splitOffset,
  referenceLineProps,
  styles,
}: UseAreaChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const splitId = `${uuid}-split`
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
    (props = {}) => ({
      id: splitId,
      offset: splitOffset ?? defaultSplitOffset,
      fillOpacity,
      ...props,
    }),
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
    (props = {}) => ({
      withGradient: withGradient,
      fillOpacity,
      ...props,
    }),
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
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    getCSSvariables,
    setHighlightedArea,
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
