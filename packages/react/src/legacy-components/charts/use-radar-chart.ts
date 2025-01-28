import type { ComponentPropsWithoutRef } from "react"
import type * as Recharts from "recharts"
import type {
  CSSUIObject,
  CSSUIProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { Dict } from "../../utils"
import type {
  PolarAngleAxisProps,
  PolarRadiusAxisProps,
  RadarChartProps,
  RadarProps,
} from "./chart.types"
import { useCallback, useMemo, useState } from "react"
import { getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getClassName, getComponentProps } from "./chart-utils"
import {
  dotProperties,
  polarAngleAxisProperties,
  polarRadiusAxisProperties,
  radarChartProperties,
  radarProperties,
} from "./rechart-properties"

export interface UseRadarChartOptions {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: string
  /**
   * An array of objects with `dataKey` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: RadarProps[]
  /**
   * Controls fill opacity of all radars.
   *
   * @default 1
   */
  fillOpacity?: [number, number] | number
  /**
   * A function to format Y axis tick.
   */
  polarAngleAxisTickFormatter?: (value: number) => string
  /**
   * A function to format X axis tick.
   */
  polarRadiusAxisTickFormatter?: (value: number) => string
  /**
   * Stroke width for the chart radars.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   * Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   * Determines whether dots should be displayed.
   *
   * @default false
   */
  withDots?: boolean
  /**
   * Props passed down to recharts `RadarChart` component.
   */
  chartProps?: RadarChartProps
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
   * Props for the radar.
   */
  radarProps?: Partial<RadarProps>
}

interface UseRadarChartProps extends UseRadarChartOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const useRadarChart = ({
  data,
  dataKey,
  fillOpacity = 0.4,
  polarAngleAxisTickFormatter,
  polarRadiusAxisTickFormatter,
  series,
  strokeWidth = 2,
  styles,
  withActiveDots = false,
  withDots = false,
  ...rest
}: UseRadarChartProps) => {
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<null | string>(null)
  const shouldHighlight = highlightedArea !== null
  const {
    activeDot = {},
    dimDot,
    dimRadar,
    dot = {},
    ...computedRadarProps
  } = rest.radarProps ?? {}

  const radarColors: CSSUIProps["vars"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        name: `radar-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const radarVars: CSSUIProps["vars"] = useMemo(
    () =>
      [
        ...radarColors,
        { name: "fill-opacity", value: fillOpacity },
      ] as Required<CSSUIProps>["vars"],
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
      fillOpacity: "$fill-opacity",
      ...computedRadarProps,
    }

    return getComponentProps<Dict, string>(
      [resolvedRadarProps, radarProperties],
      styles.radar,
    )(theme)
  }, [computedRadarProps, styles.radar, theme])

  const [dimRadarProps, dimRadarClassName] = useMemo(() => {
    const resolvedDimRadar = {
      fillOpacity: 0.3,
      strokeOpacity: 0.3,
      ...dimRadar,
    }

    return getComponentProps<Dict, string>([resolvedDimRadar, radarProperties])(
      theme,
    )
  }, [dimRadar, theme])

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

  const radarPropList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          activeDot = {},
          dataKey,
          dimDot = {},
          dimRadar = {},
          dot = {},
          ...computedProps
        } = props
        const color = getVar(`radar-${index}`)(theme)
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

        let resolvedActiveDot: boolean | Recharts.DotProps

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
            className: cx("ui-radar-chart__active-dot", className),
            fill: color,
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
          activeDot: resolvedActiveDot,
          color,
          dataKey,
          dot: resolvedDot,
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

  const getRadarChartProps: PropGetter<
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

  const getRadarProps: RequiredPropGetter<
    { index: number } & Partial<Recharts.RadarProps>,
    Omit<Recharts.RadarProps, "ref">
  > = useCallback(
    ({ className: classNameProp, index, ...props }, ref = null) => {
      const {
        className,
        activeDot,
        color,
        dataKey = "",
        dot,
        ...rest
      } = radarPropList[index] ?? {}

      return {
        ref,
        name: dataKey as string,
        className: cx(classNameProp, className),
        activeDot,
        dataKey,
        dot,
        fill: color,
        isAnimationActive: false,
        stroke: color,
        strokeWidth,
        ...(props as Omit<Recharts.RadarProps, "dataKey">),
        ...rest,
      }
    },
    [radarPropList, strokeWidth],
  )

  const getPolarAngleAxisProps: PropGetter<
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

  const getPolarRadiusAxisProps: PropGetter<
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
    setHighlightedArea,
    getPolarAngleAxisProps,
    getPolarRadiusAxisProps,
    getRadarChartProps,
    getRadarProps,
  }
}

export type UseRadarChartReturn = ReturnType<typeof useRadarChart>
