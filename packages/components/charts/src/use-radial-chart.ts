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
  fillOpacity,
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
      ...chartProps,
      ...props,
    }),
    [chartClassName, chartProps, data],
  )

  //TODO: labelの分離　色の指定
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

  return { getRadialChartProps, getRadialBarProps, radialVars }
}

export type UseRadialChartReturn = ReturnType<typeof useRadialChart>
