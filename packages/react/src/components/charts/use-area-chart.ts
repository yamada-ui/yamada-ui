import type { ComponentPropsWithoutRef } from "react"
import type * as Recharts from "recharts"
import type {
  CSSObject,
  CSSProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { Dict } from "../../utils"
import type { AreaGradientProps } from "./area-chart-gradient"
import type { AreaSplitProps } from "./area-chart-split"
import type {
  AreaChartProps,
  AreaChartType,
  AreaProps,
  ChartCurveType,
  ChartLayoutType,
  ReferenceLineProps,
} from "./chart.types"
import { useCallback, useId, useMemo, useState } from "react"
import { getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getComponentProps } from "./chart-utils"
import {
  areaChartProperties,
  areaProperties,
  dotProperties,
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
   * Controls how chart areas are positioned relative to each other.
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   * Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   * Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: ChartCurveType
  /**
   * Controls fill opacity of all areas.
   *
   * @default 0.4
   */
  fillOpacity?: [number, number] | number
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: ChartLayoutType
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
   * Stroke width for the chart areas.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   * If any two categorical charts have the same syncId,
   * these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.
   */
  syncId?: number | string
  /**
   * Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   * Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   * Determines whether the chart area should be represented with a gradient instead of the solid color.
   */
  withGradient?: boolean
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A label to display below the Y axis.
   */
  yAxisLabel?: string
  /**
   * Props for the areas.
   */
  areaProps?: Partial<AreaProps>
  /**
   * Props passed down to recharts `AreaChart` component.
   */
  chartProps?: AreaChartProps
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
}

interface UseAreaChartProps extends UseAreaChartOptions {
  styles: Dict<CSSObject | undefined>
}

export const useAreaChart = ({
  type,
  connectNulls = true,
  curveType = "monotone",
  data,
  fillOpacity = 0.4,
  layoutType = "horizontal",
  series,
  splitColors = ["#ee6a5d", "#5fce7d"],
  splitOffset,
  strokeWidth = 2,
  styles,
  syncId,
  withActiveDots = true,
  withDots = true,
  withGradient: withGradientProp,
  xAxisLabel,
  yAxisLabel,
  referenceLineProps,
  ...rest
}: UseAreaChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<null | string>(null)
  const splitId = `${uuid}-split`
  const stacked = type === "stacked" || type === "percent"
  const withGradient =
    typeof withGradientProp === "boolean"
      ? withGradientProp
      : type === "default"
  const shouldHighlight = highlightedArea !== null
  const {
    activeDot = {},
    dimArea,
    dimDot,
    dot = {},
    ...computedAreaProps
  } = rest.areaProps ?? {}

  const areaColors: CSSProps["vars"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        name: `area-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const areaSplitColors: CSSProps["vars"] = useMemo(
    () =>
      splitColors.map((color, index) => ({
        name: `area-split-${index}`,
        token: "colors",
        value: color || "transparent",
      })),
    [splitColors],
  )

  const referenceLineColors: CSSProps["vars"] = useMemo(
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

  const areaVars: CSSProps["vars"] = useMemo(() => {
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
      const dataKey = series[0]?.dataKey as string

      if (dataKey) {
        const dataMax = Math.max(...data.map((item) => item[dataKey]))
        const dataMin = Math.min(...data.map((item) => item[dataKey]))

        if (dataMax <= 0) return 0
        if (dataMin >= 0) return 1

        return dataMax / (dataMax - dataMin)
      }
    }

    return 0.5
  }, [data, series])

  const areaPropsList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          activeDot = {},
          dataKey,
          dimArea = {},
          dimDot = {},
          dot = {},
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

        let resolvedActiveDot: boolean | Recharts.DotProps

        if (withActiveDots) {
          const computedActiveDot = { ...activeDotProps, ...activeDot }

          const [rest, className] = getComponentProps(
            [computedActiveDot, dotProperties],
            activeDotClassName,
          )(theme)

          resolvedActiveDot = {
            className: cx("ui-area-chart__active-dot", className),
            r: 4,
            stroke: color,
            ...rest,
          } as Recharts.DotProps
        } else {
          resolvedActiveDot = false
        }

        let resolvedDot: boolean | Recharts.DotProps

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
          activeDot: resolvedActiveDot,
          color,
          dataKey,
          dot: resolvedDot,
          strokeDasharray,
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
    ComponentPropsWithoutRef<typeof Recharts.AreaChart>
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, areaChartClassName),
      data,
      layout: layoutType,
      margin: {
        bottom: xAxisLabel ? 30 : undefined,
        left: yAxisLabel ? 10 : undefined,
        right: yAxisLabel ? 5 : undefined,
      },
      stackOffset: type === "percent" ? "expand" : undefined,
      syncId,
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
    undefined,
    AreaSplitProps
  > = useCallback(
    (props) => ({
      id: splitId,
      fillOpacity: fillOpacityVar,
      offset: splitOffset ?? defaultSplitOffset,
      ...props,
    }),
    [defaultSplitOffset, splitId, splitOffset, fillOpacityVar],
  )

  const getAreaProps: RequiredPropGetter<
    Partial<Recharts.AreaProps> & { index: number },
    undefined,
    Omit<Recharts.AreaProps, "ref">
  > = useCallback(
    ({ className: classNameProp, index, ...props }) => {
      const {
        id,
        className,
        activeDot,
        color,
        dataKey = "",
        dot,
        strokeDasharray,
        ...rest
      } = areaPropsList[index] ?? {}

      return {
        id,
        type: curveType,
        name: dataKey as string,
        className: cx(classNameProp, className),
        activeDot,
        connectNulls,
        dataKey,
        dot,
        fill: type === "split" ? `url(#${splitId})` : `url(#${id})`,
        isAnimationActive: false,
        stackId: stacked ? "stack" : undefined,
        stroke: color,
        strokeDasharray,
        strokeWidth,
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

  const getAreaGradientProps: RequiredPropGetter<
    Partial<AreaGradientProps> & { index: number },
    undefined,
    AreaGradientProps
  > = useCallback(
    ({ index, ...props }) => {
      const { id, color } = areaPropsList[index] ?? {}

      return {
        id,
        color,
        fillOpacity: fillOpacityVar,
        withGradient,
        ...props,
      }
    },
    [withGradient, fillOpacityVar, areaPropsList],
  )

  return {
    areaVars,
    setHighlightedArea,
    getAreaChartProps,
    getAreaGradientProps,
    getAreaProps,
    getAreaSplitProps,
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
