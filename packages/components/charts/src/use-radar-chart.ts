import { useTheme } from "@yamada-ui/core"
import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef } from "react"
import { useCallback, useMemo, useState } from "react"
import type * as Recharts from "recharts"
import { getClassName, getComponentProps } from "./chart-utils"
import type {
  ChartPropGetter,
  PolarAngleAxisProps,
  PolarGridProps,
  PolarRadiusAxisProps,
  RadarChartProps,
  RadarProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  dotProperties,
  polarAngleAxisProperties,
  polarGridProperties,
  polarRadiusAxisProperties,
  radarChartProperties,
  radarProperties,
} from "./rechart-properties"

export type UseRadarChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `dataKey` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: RadarProps[]
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: string
  /**
   * Props for the radar.
   */
  radarProps?: Partial<RadarProps>
  /**
   * Props passed down to recharts `RadarChart` component.
   */
  chartProps?: RadarChartProps
  /**
   * Props passed down to recharts `PolarGrid` component.
   */
  polarGridProps?: PolarGridProps
  /**
   * Props passed down to recharts `PolarAngleAxis` component.
   */
  polarAngleAxisProps?: PolarAngleAxisProps
  /**
   * Props passed down to recharts `tick` of `PolarAngleAxis` component.
   */
  polarAngleAxisTickProps?: CSSUIProps
  /**
   * Props passed down to recharts `PolarRadiusAxis` component.
   */
  polarRadiusAxisProps?: PolarRadiusAxisProps
  /**
   * Props passed down to recharts `tick` of `PolarRadiusAxis` component.
   */
  polarRadiusAxisTickProps?: CSSUIProps
  /**
   * Determines whether dots should be displayed.
   *
   * @default false
   */
  withDots?: boolean
  /**
   * Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   * Stroke width for the chart radars.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   * Controls fill opacity of all radars.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
  /**
   * A function to format Y axis tick.
   */
  polarAngleAxisTickFormatter?: (value: number) => string
  /**
   * A function to format X axis tick.
   */
  polarRadiusAxisTickFormatter?: (value: number) => string
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   */
  strokeDasharray?: string | number
}

type UseRadarChartProps = UseRadarChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useRadarChart = ({
  data,
  series,
  dataKey,
  withDots = false,
  withActiveDots = false,
  strokeWidth = 2,
  fillOpacity = 0.4,
  polarAngleAxisTickFormatter,
  polarRadiusAxisTickFormatter,
  strokeDasharray,
  styles,
  ...rest
}: UseRadarChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null
  const {
    dot = {},
    activeDot = {},
    dimDot = {},
    dimRadar = {},
    ...computedRadarProps
  } = rest.radarProps ?? {}

  const radarColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        __prefix: "ui",
        name: `radar-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const radarVars: CSSUIProps["var"] = useMemo(
    () =>
      [
        ...radarColors,
        { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
      ] as Required<CSSUIProps>["var"],
    [fillOpacity, radarColors],
  )

  const [chartProps, radarChartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, radarChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const [polarGridProps, polarGridClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.polarGridProps ?? {}, polarGridProperties],
        styles.polarGrid,
      )(theme),
    [rest.polarGridProps, styles.polarGrid, theme],
  )

  const [polarAngleAxisProps, polarAngleAxisClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.polarAngleAxisProps ?? {}, polarAngleAxisProperties],
        styles.polarAngleAxis,
      )(theme),
    [rest.polarAngleAxisProps, styles.polarAngleAxis, theme],
  )

  const polarAngleAxisTickClassName = useMemo(
    () =>
      getClassName({
        ...styles.polarAngleAxisTick,
        ...rest.polarAngleAxisTickProps,
      })(theme),
    [rest.polarAngleAxisTickProps, styles.polarAngleAxisTick, theme],
  )

  const [polarRadiusAxisProps, polarRadiusAxisClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.polarRadiusAxisProps ?? {}, polarRadiusAxisProperties],
        styles.polarRadiusAxis,
      )(theme),
    [rest.polarRadiusAxisProps, styles.polarRadiusAxis, theme],
  )

  const polarRadiusAxisTickClassName = useMemo(
    () =>
      getClassName({
        ...styles.polarRadiusAxisTick,
        ...rest.polarRadiusAxisTickProps,
      })(theme),
    [rest.polarRadiusAxisTickProps, styles.polarRadiusAxisTick, theme],
  )

  const [radarProps, radarClassName] = useMemo(() => {
    const resolvedRadarProps = {
      fillOpacity: "var(--ui-fill-opacity)",
      ...computedRadarProps,
    }

    return getComponentProps<Dict, string>(
      [resolvedRadarProps, radarProperties],
      styles.radar,
    )(theme)
  }, [computedRadarProps, styles.radar, theme])

  const [dimRadarProps, dimRadarClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [dimRadar, radarProperties],
        styles.dimRadar,
      )(theme),
    [dimRadar, styles.dimRadar, theme],
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

  const radarPropList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          dataKey,
          dot = {},
          activeDot = {},
          dimDot = {},
          dimRadar = {},
          ...computedProps
        } = props
        const color = `var(--ui-radar-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey
        const computedDimRadar = { ...dimRadarProps, ...dimRadar }

        const resolvedProps = {
          ...radarProps,
          ...computedProps,
          ...(dimmed ? computedDimRadar : {}),
        }
        const rest = getComponentProps<Dict, string>(
          [resolvedProps, radarProperties],
          radarClassName,
          dimmed ? dimRadarClassName : undefined,
        )(theme, true)

        let resolvedActiveDot: Recharts.DotProps | boolean

        if (withActiveDots) {
          const computedActiveDot = {
            ...activeDotProps,
            ...activeDot,
          }

          const [rest, className] = getComponentProps<Dict, string>(
            [computedActiveDot, dotProperties],
            activeDotClassName,
          )(theme)

          resolvedActiveDot = {
            className: cx(
              "ui-radar-chart__dot",
              "ui-radar-chart__dot--active",
              className,
            ),
            fill: color,
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
            className: cx("ui-radar-chart__dot", className),
            fill: color,
            r: 4,
            ...rest,
          } as Recharts.DotProps
        } else {
          resolvedDot = false
        }

        return {
          ...rest,
          color,
          dataKey,
          dot: resolvedDot,
          activeDot: resolvedActiveDot,
        }
      }),
    [
      activeDotClassName,
      activeDotProps,
      dimDotClassName,
      dimDotProps,
      dimRadarClassName,
      dimRadarProps,
      dotClassName,
      dotProps,
      highlightedArea,
      radarClassName,
      radarProps,
      series,
      shouldHighlight,
      theme,
      withActiveDots,
      withDots,
    ],
  )

  const getRadarChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof Recharts.RadarChart>,
    ComponentPropsWithoutRef<typeof Recharts.RadarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, radarChartClassName),
      data,
      ...props,
      ...chartProps,
    }),
    [data, radarChartClassName, chartProps],
  )

  const getRadarProps: RequiredChartPropGetter<
    "div",
    { index: number },
    Omit<Recharts.RadarProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const { color, className, dataKey, activeDot, dot, ...rest } =
        radarPropList[index]

      return {
        ref,
        className: cx(classNameProp, className),
        activeDot,
        dot,
        name: dataKey as string,
        dataKey,
        fill: color,
        strokeWidth,
        stroke: color,
        isAnimationActive: false,
        ...(props as Omit<Recharts.RadarProps, "dataKey">),
        ...rest,
      }
    },
    [radarPropList, strokeWidth],
  )

  const getPolarGridProps: ChartPropGetter<
    "div",
    Recharts.PolarGridProps,
    Recharts.PolarGridProps
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, polarGridClassName),
      strokeDasharray,
      ...props,
      ...polarGridProps,
    }),
    [polarGridClassName, polarGridProps, strokeDasharray],
  )

  const getPolarAngleAxisProps: ChartPropGetter<
    "div",
    Recharts.PolarAngleAxisProps,
    Omit<Recharts.PolarAngleAxisProps, "ref">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, polarAngleAxisClassName),
      dataKey,
      tick: {
        className: cx(
          "ui-radar-chart__polar-angle-axis-tick",
          polarAngleAxisTickClassName,
        ),
      },
      tickFormatter: polarAngleAxisTickFormatter,
      tickSize: 16,
      ...props,
      ...polarAngleAxisProps,
    }),
    [
      dataKey,
      polarAngleAxisClassName,
      polarAngleAxisProps,
      polarAngleAxisTickClassName,
      polarAngleAxisTickFormatter,
    ],
  )

  const getPolarRadiusAxisProps: ChartPropGetter<
    "div",
    Recharts.PolarRadiusAxisProps,
    Omit<Recharts.PolarRadiusAxisProps, "ref">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, polarRadiusAxisClassName),
      tick: {
        className: cx(
          "ui-radar-chart__polar-radius-axis-tick",
          polarRadiusAxisTickClassName,
        ),
      },
      tickFormatter: polarRadiusAxisTickFormatter,
      ...props,
      ...polarRadiusAxisProps,
    }),
    [
      polarRadiusAxisClassName,
      polarRadiusAxisProps,
      polarRadiusAxisTickClassName,
      polarRadiusAxisTickFormatter,
    ],
  )

  return {
    radarVars,
    getRadarChartProps,
    getRadarProps,
    getPolarGridProps,
    getPolarAngleAxisProps,
    getPolarRadiusAxisProps,
    setHighlightedArea,
  }
}

export type UseRadarChartReturn = ReturnType<typeof useRadarChart>
