import type { CSSUIProps, CSSUIObject } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import { cx, type Dict } from "@yamada-ui/utils"
import { useCallback, useMemo, type ComponentPropsWithRef } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type {
  ChartPropGetter,
  RadialBarProps,
  RadialChartProps,
  RequiredChartPropGetter,
} from "./chart.types"
import {
  radialBarProperties,
  radialChartProperties,
} from "./rechart-properties"

export type UseRadialChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: string
  /**
   * Props passed down to recharts `RadialBarChart` component.
   */
  chartProps?: RadialChartProps
  /**
   * Props for the radialBar.
   */
  radialBarProps?: Partial<RadialBarProps>
  /**
   * Controls innerRadius of the chart segments.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
   *
   * @default '0%'
   */
  innerRadius?: number | string
  /**
   * Controls thickness of the chart segments. If it is a number, it is calculated as px.
   * If it is a number, it is the width of the radius.
   * For example, `60` means the radius is `60px` and the diameter is `120px`.
   *
   * @default '80%'
   */
  outerRadius?: number | string
  /**
   * Controls angle at which chart starts.
   *
   * @default 180
   */
  startAngle?: number
  /**
   * Controls angle at which chart ends.
   *
   * @default 0
   */
  endAngle?: number
  /**
   * Controls fill opacity of all pies.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
}

type UseRadialChartProps = UseRadialChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useRadialChart = ({
  data: dataProp,
  dataKey,
  innerRadius = "0%",
  outerRadius = "80%",
  startAngle = 180,
  endAngle = 0,
  fillOpacity = 1,
  styles,
  ...rest
}: UseRadialChartProps) => {
  const { theme } = useTheme()
  const { background: backgroundProps = {}, ...computedRadialBarProps } =
    rest.radialBarProps ?? {}

  const radialBarColors: CSSUIProps["var"] = useMemo(
    () =>
      dataProp.map(({ color }, index) => ({
        __prefix: "ui",
        name: `radial-bar-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [dataProp],
  )

  const radialVars: CSSUIProps["var"] = useMemo(
    () =>
      [
        ...radialBarColors,
        { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
      ] as Required<CSSUIProps>["var"],
    [radialBarColors, fillOpacity],
  )

  const data = useMemo(
    () =>
      dataProp.map((prev, index) => ({
        ...prev,
        fill: `var(--ui-radial-bar-${index})`,
        fillOpacity: "var(--ui-fill-opacity)",
      })),
    [dataProp],
  )

  const [chartProps, chartClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.chartProps ?? {}, radialChartProperties],
        styles.chart,
      )(theme),
    [rest.chartProps, styles.chart, theme],
  )

  const background = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [backgroundProps, radialBarProperties],
        styles.background,
      )(theme, true),
    [backgroundProps, styles.background, theme],
  )

  const [radialBarProps, radialBarClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [computedRadialBarProps ?? {}, radialBarProperties],
        styles.radialBar,
      )(theme),
    [computedRadialBarProps, styles.radialBar, theme],
  )

  const getRadialChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithRef<typeof Recharts.RadialBarChart>,
    ComponentPropsWithRef<typeof Recharts.RadialBarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, chartClassName),
      data,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      ...chartProps,
      ...props,
    }),
    [
      chartClassName,
      chartProps,
      data,
      endAngle,
      innerRadius,
      outerRadius,
      startAngle,
    ],
  )

  const getRadialBarProps: RequiredChartPropGetter<
    "div",
    Partial<Recharts.RadialBarProps>,
    Omit<Recharts.RadialBarProps, "ref">
  > = useCallback(
    ({ className, ...props }, ref = null) => ({
      ref,
      className: cx(className, radialBarClassName),
      dataKey,
      isAnimationActive: false,
      background,
      ...radialBarProps,
      ...props,
    }),
    [background, dataKey, radialBarClassName, radialBarProps],
  )

  return {
    radialVars,
    getRadialChartProps,
    getRadialBarProps,
  }
}

export type UseRadialChartReturn = ReturnType<typeof useRadialChart>
