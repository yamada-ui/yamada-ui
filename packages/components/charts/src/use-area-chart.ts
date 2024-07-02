import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useId, useMemo, useState } from "react"
import type * as Recharts from "recharts"
import type { AreaGradientProps } from "./area-chart-gradient"
import type { AreaSplitProps } from "./area-chart-split"
import { getComponentProps } from "./chart-utils"
import type {
  ChartCurveType,
  AreaProps,
  AreaChartType,
  AreaChartProps,
  ChartPropGetter,
  ChartLayoutType,
  ReferenceLineProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  areaChartProperties,
  dotProperties,
  areaProperties,
} from "./rechart-properties"

export type UseAreaChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `dataKey` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: AreaProps[]
  /**
   * Props for the areas.
   */
  areaProps?: Partial<AreaProps>
  /**
   * Controls how chart areas are positioned relative to each other.
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   * Props passed down to recharts `AreaChart` component.
   */
  chartProps?: AreaChartProps
  /**
   * If any two categorical charts have the same syncId,
   * these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.
   */
  syncId?: number | string
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: ChartLayoutType
  /**
   * Determines whether the chart area should be represented with a gradient instead of the solid color.
   */
  withGradient?: boolean
  /**
   * Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   * Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   * Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: ChartCurveType
  /**
   * Stroke width for the chart areas.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   * Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * A tuple of colors used when `type="split"` is set, ignored in all other cases.
   *
   * @default '["red.400", "green.400"]'
   */
  splitColors?: [string, string]
  /**
   * Offset for the split gradient. By default, value is inferred from `data` and `series` if possible.
   * Must be generated from the data array with `getSplitOffset` function.
   */
  splitOffset?: number
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
  /**
   * Controls fill opacity of all areas.
   *
   * @default 0.4
   */
  fillOpacity?: number | [number, number]
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
}

export type UseAreaChartProps = UseAreaChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useAreaChart = ({
  data,
  series,
  type,
  layoutType = "horizontal",
  withGradient: withGradientProp,
  withDots = true,
  withActiveDots = true,
  curveType = "monotone",
  strokeWidth = 2,
  connectNulls = true,
  fillOpacity = 0.4,
  splitColors = ["#ee6a5d", "#5fce7d"],
  splitOffset,
  referenceLineProps,
  syncId,
  xAxisLabel,
  yAxisLabel,
  styles,
  ...rest
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
  const {
    dot = {},
    activeDot = {},
    dimDot,
    dimArea,
    ...computedAreaProps
  } = rest.areaProps ?? {}

  const areaColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        __prefix: "ui",
        name: `area-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const areaSplitColors: CSSUIProps["var"] = useMemo(
    () =>
      splitColors.map((color, index) => ({
        __prefix: "ui",
        name: `area-split-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [splitColors],
  )

  const referenceLineColors: CSSUIProps["var"] = useMemo(
    () =>
      referenceLineProps
        ? referenceLineProps.map(({ color }, index) => ({
            __prefix: "ui",
            name: `reference-line-${index}`,
            token: "colors",
            value: color ?? "transparent",
          }))
        : [],
    [referenceLineProps],
  )

  const areaVars: CSSUIProps["var"] = useMemo(() => {
    return [
      ...areaColors,
      ...areaSplitColors,
      ...referenceLineColors,
      { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
    ]
  }, [areaColors, areaSplitColors, referenceLineColors, fillOpacity])

  const [chartProps, areaChartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, areaChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const [areaProps, areaClassName] = useMemo(() => {
    const resolvedAreaProps = {
      fillOpacity: 1,
      strokeOpacity: 1,
      ...computedAreaProps,
    }

    return getComponentProps<Dict, string>(
      [resolvedAreaProps, areaProperties],
      styles.area,
    )(theme)
  }, [computedAreaProps, styles.area, theme])

  const [dimAreaProps, dimAreaClassName] = useMemo(() => {
    const resolvedDimArea = {
      fillOpacity: 0,
      strokeOpacity: 0.3,
      ...dimArea,
    }

    return getComponentProps<Dict, string>([resolvedDimArea, areaProperties])(
      theme,
    )
  }, [dimArea, theme])

  const [dotProps, dotClassName] = useMemo(() => {
    const resolvedDot = { fillOpacity: 1, strokeWidth: 2, ...dot }

    return getComponentProps<Dict, string>(
      [resolvedDot, dotProperties],
      styles.dot,
    )(theme)
  }, [dot, styles.dot, theme])

  const [activeDotProps, activeDotClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [activeDot, dotProperties],
        styles.activeDot,
      )(theme),
    [activeDot, styles.activeDot, theme],
  )

  const [dimDotProps, dimDotClassName] = useMemo(() => {
    const resolvedDimDot = { fillOpacity: 0, strokeOpacity: 0, ...dimDot }
    return getComponentProps<Dict, string>([resolvedDimDot, dotProperties])(
      theme,
    )
  }, [dimDot, theme])

  const defaultSplitOffset = useMemo(() => {
    if (series.length === 1) {
      const dataKey = series[0].dataKey as string

      const dataMax = Math.max(...data.map((item) => item[dataKey]))
      const dataMin = Math.min(...data.map((item) => item[dataKey]))

      if (dataMax <= 0) return 0
      if (dataMin >= 0) return 1

      return dataMax / (dataMax - dataMin)
    }

    return 0.5
  }, [data, series])

  const areaPropsList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          dataKey,
          dot = {},
          activeDot = {},
          dimDot = {},
          dimArea = {},
          strokeDasharray,
          ...computedProps
        } = props
        const id = `${uuid}-${dataKey}`
        const color = `var(--ui-area-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const computedDimArea = { ...dimAreaProps, ...dimArea }

        const resolvedProps = {
          ...areaProps,
          ...computedProps,
          ...(dimmed ? computedDimArea : {}),
        }
        const rest = getComponentProps<Dict, string>(
          [resolvedProps, areaProperties],
          areaClassName,
          dimmed ? dimAreaClassName : undefined,
        )(theme, true)

        let resolvedActiveDot: Recharts.DotProps | boolean

        if (withActiveDots) {
          const computedActiveDot = { ...activeDotProps, ...activeDot }

          const [rest, className] = getComponentProps(
            [computedActiveDot, dotProperties],
            activeDotClassName,
          )(theme)

          resolvedActiveDot = {
            className: cx("ui-area-chart__active-dot", className),
            stroke: color,
            r: 4,
            ...rest,
          } as Recharts.DotProps
        } else {
          resolvedActiveDot = false
        }

        let resolvedDot: Recharts.DotProps | boolean

        if (withDots) {
          const computedDimDot = { ...dimDotProps, ...dimDot }
          const computedDot = {
            ...dotProps,
            ...dot,
            ...(dimmed ? computedDimDot : {}),
          }

          const [rest, className] = getComponentProps(
            [computedDot, dotProperties],
            dotClassName,
            dimmed ? dimDotClassName : undefined,
          )(theme)

          resolvedDot = {
            className: cx("ui-area-chart__dot", className),
            fill: color,
            r: 4,
            ...rest,
          } as Recharts.DotProps
        } else {
          resolvedDot = false
        }

        return {
          ...rest,
          id,
          color,
          strokeDasharray,
          dataKey,
          activeDot: resolvedActiveDot,
          dot: resolvedDot,
        }
      }),
    [
      series,
      uuid,
      shouldHighlight,
      highlightedArea,
      dimAreaProps,
      dimDotProps,
      areaProps,
      areaClassName,
      dimAreaClassName,
      theme,
      withActiveDots,
      withDots,
      activeDotProps,
      activeDotClassName,
      dotProps,
      dotClassName,
      dimDotClassName,
    ],
  )

  const getAreaChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof Recharts.AreaChart>,
    ComponentPropsWithoutRef<typeof Recharts.AreaChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, areaChartClassName),
      data,
      stackOffset: type === "percent" ? "expand" : undefined,
      layout: layoutType,
      syncId,
      margin: {
        bottom: xAxisLabel ? 30 : undefined,
        left: yAxisLabel ? 10 : undefined,
        right: yAxisLabel ? 5 : undefined,
      },
      ...props,
      ...chartProps,
    }),
    [
      areaChartClassName,
      data,
      type,
      layoutType,
      syncId,
      xAxisLabel,
      yAxisLabel,
      chartProps,
    ],
  )

  const getAreaSplitProps: ChartPropGetter<
    "div",
    Partial<AreaSplitProps>,
    AreaSplitProps
  > = useCallback(
    (props = {}) => ({
      id: splitId,
      offset: splitOffset ?? defaultSplitOffset,
      fillOpacity: "var(--ui-fill-opacity)",
      ...props,
    }),
    [defaultSplitOffset, splitId, splitOffset],
  )

  const getAreaProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<Recharts.AreaProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const {
        id,
        color,
        className,
        dataKey,
        strokeDasharray,
        activeDot,
        dot,
        ...rest
      } = areaPropsList[index]

      return {
        ref,
        className: cx(classNameProp, className),
        id,
        activeDot,
        dot,
        name: dataKey as string,
        type: curveType,
        dataKey,
        fill: type === "split" ? `url(#${splitId})` : `url(#${id})`,
        strokeWidth,
        stroke: color,
        isAnimationActive: false,
        connectNulls,
        stackId: stacked ? "stack" : undefined,
        strokeDasharray,
        ...(props as Omit<Recharts.AreaProps, "dataKey">),
        ...rest,
      }
    },
    [
      areaPropsList,
      connectNulls,
      curveType,
      splitId,
      stacked,
      strokeWidth,
      type,
    ],
  )

  const getAreaGradientProps: ChartPropGetter<
    "div",
    Partial<AreaGradientProps>,
    AreaGradientProps
  > = useCallback(
    (props = {}) => ({
      withGradient,
      fillOpacity: "var(--ui-fill-opacity)",
      ...props,
    }),
    [withGradient],
  )

  return {
    getAreaChartProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    areaVars,
    setHighlightedArea,
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
