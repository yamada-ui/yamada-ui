import type {
  CSSUIObject,
  CSSUIProps,
  PropGetter,
  RequiredPropGetter,
} from "@yamada-ui/core"
import { getVar, useTheme } from "@yamada-ui/core"
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
  ChartLayoutType,
  ReferenceLineProps,
} from "./chart.types"
import {
  areaChartProperties,
  dotProperties,
  areaProperties,
} from "./rechart-properties"

export interface UseAreaChartOptions {
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

interface UseAreaChartProps extends UseAreaChartOptions {
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
    dimDot = {},
    dimArea = {},
    ...computedAreaProps
  } = rest.areaProps ?? {}

  const areaColors: CSSUIProps["vars"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        name: `area-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const areaSplitColors: CSSUIProps["vars"] = useMemo(
    () =>
      splitColors.map((color, index) => ({
        name: `area-split-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [splitColors],
  )

  const referenceLineColors: CSSUIProps["vars"] = useMemo(
    () =>
      referenceLineProps
        ? referenceLineProps.map(({ color }, index) => ({
            name: `reference-line-${index}`,
            token: "colors",
            value: color ?? "transparent",
          }))
        : [],
    [referenceLineProps],
  )

  const areaVars: CSSUIProps["vars"] = useMemo(() => {
    return [
      ...areaColors,
      ...areaSplitColors,
      ...referenceLineColors,
      { name: "fill-opacity", value: fillOpacity },
    ]
  }, [areaColors, areaSplitColors, referenceLineColors, fillOpacity])
  const fillOpacityVar = useMemo(() => getVar("fill-opacity")(theme), [theme])

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
      ...computedAreaProps,
    }

    return getComponentProps<Dict, string>(
      [resolvedAreaProps, areaProperties],
      styles.area,
    )(theme)
  }, [computedAreaProps, styles.area, theme])

  const [dimAreaProps, dimAreaClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [dimArea, areaProperties],
        styles.dimArea,
      )(theme),
    [dimArea, styles.dimArea, theme],
  )

  const [dotProps, dotClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>([dot, dotProperties], styles.dot)(theme),
    [dot, styles.dot, theme],
  )

  const [activeDotProps, activeDotClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [activeDot, dotProperties],
        styles.activeDot,
      )(theme),
    [activeDot, styles.activeDot, theme],
  )

  const [dimDotProps, dimDotClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [dimDot, dotProperties],
        styles.dimDot,
      )(theme),
    [dimDot, styles.dimDot, theme],
  )

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
        const color = getVar(`area-${index}`)(theme)
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
            className: cx(
              "ui-area-chart__dot",
              "ui-area-chart__dot--active",
              className,
            ),
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

  const getAreaChartProps: RequiredPropGetter<
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

  const getAreaSplitProps: PropGetter<
    Partial<AreaSplitProps>,
    AreaSplitProps
  > = useCallback(
    (props = {}) => ({
      id: splitId,
      offset: splitOffset ?? defaultSplitOffset,
      fillOpacity: fillOpacityVar,
      ...props,
    }),
    [defaultSplitOffset, splitId, splitOffset, fillOpacityVar],
  )

  const getAreaProps: RequiredPropGetter<
    Partial<Recharts.AreaProps> & { index: number },
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

  const getAreaGradientProps: PropGetter<
    Partial<AreaGradientProps>,
    AreaGradientProps
  > = useCallback(
    (props = {}) => ({
      withGradient,
      fillOpacity: fillOpacityVar,
      ...props,
    }),
    [withGradient, fillOpacityVar],
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
