import { type CSSUIObject, useTheme, type CSSUIProps } from "@yamada-ui/core"
import { type Dict, cx } from "@yamada-ui/utils"
import {
  type ComponentPropsWithoutRef,
  useCallback,
  useState,
  useId,
  useMemo,
} from "react"
import type { BarChart, BarProps } from "recharts"
import { getClassName, getComponentProps } from "./chart-utils"
import { barChartProperties, barProperties } from "./chart.types"
import type {
  BarChartSeries,
  BarChartType,
  BarChartUIProps,
  ChartPropGetter,
  LayoutType,
  ReferenceLineUIProps,
  RequiredChartPropGetter,
} from "./chart.types"

export type UseBarChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: BarChartSeries[]
  /**
   * Controls how chart bars are positioned relative to each other
   *
   * @default `default`
   */
  type?: BarChartType
  /**
   * Props for the bars.
   */
  barProps?: CSSUIProps
  /**
   * Props passed down to dim bars.
   *
   * @default "{ fillOpacity: 0.1, strokeOpacity: 0.2 }"
   */
  dimBarProps?: CSSUIProps
  /**
   * Props for the background of bars.
   */
  barBackgroundProps?: CSSUIProps
  /**
   * Props for the active bars.
   */
  activeBarProps?: CSSUIProps
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layoutType?: LayoutType
  /**
   * Props passed down to recharts `BarChart` component.
   */
  barChartProps?: BarChartUIProps
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineUIProps[]
  /**
   * Controls fill opacity of all bars.
   *
   * @default 1
   */
  fillOpacity?: number | [number, number]
}

export type UseBarChartProps = UseBarChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useBarChart = ({
  data,
  series,
  type = "default",
  barProps: _barProps = {},
  barBackgroundProps: _barBackgroundProps = {},
  dimBarProps = { fillOpacity: 0.1, strokeOpacity: 0 },
  activeBarProps: _activeBarProps = {},
  barChartProps: _barChartProps = {},
  layoutType = "horizontal",
  referenceLineProps = [],
  fillOpacity = 1,
  styles,
}: UseBarChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)

  const stacked = type === "stacked" || type === "percent"
  const shouldHighlight = highlightedArea !== null

  const barColors: CSSUIProps["var"] = useMemo(
    () =>
      series.map(({ color }, index) => ({
        __prefix: "ui",
        name: `bar-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [series],
  )

  const referenceLineColors: CSSUIProps["var"] = useMemo(
    () =>
      referenceLineProps.map(({ color }, index) => ({
        __prefix: "ui",
        name: `reference-line-${index}`,
        token: "colors",
        value: color ?? "transparent",
      })),
    [referenceLineProps],
  )

  const barVars: CSSUIProps["var"] = useMemo(() => {
    return [
      ...barColors,
      ...referenceLineColors,
      { __prefix: "ui", name: "fill-opacity", value: fillOpacity },
    ]
  }, [barColors, fillOpacity, referenceLineColors])

  const [barChartProps, barChartClassName] = getComponentProps<Dict, string>(
    [_barChartProps, barChartProperties],
    styles.barChart,
  )(theme)
  const barClassName = getClassName(styles.bar, _barProps)(theme)
  const barBackgroundClassName = getClassName(
    styles.barBackground,
    _barBackgroundProps,
  )(theme)
  const activeBarClassName = getClassName(
    styles.activeBar,
    _activeBarProps,
  )(theme)

  const barPropsList = useMemo(
    () =>
      series.map((props, index) => {
        const {
          dataKey,
          activeBar: activeBarProp = {},
          background: backgroundProp = {},
          ...computedProps
        } = props
        const id = `${uuid}-${dataKey}`
        const color = `var(--ui-bar-${index})`
        const dimmed = shouldHighlight && highlightedArea !== dataKey

        const resolvedProps = {
          fillOpacity: "var(--ui-fill-opacity)",
          strokeOpacity: 1,
          ...computedProps,
          ...(dimmed ? dimBarProps : {}),
        }
        const [rest, className] = getComponentProps<Dict, string>(
          [resolvedProps, barProperties],
          barClassName,
        )(theme)

        const activeBar = {
          className: getClassName(activeBarClassName, activeBarProp)(theme),
        }

        const background = {
          className: getClassName(
            barBackgroundClassName,
            backgroundProp,
          )(theme),
          // TODO:
          // radiusをどうするか。また、その他のpropsはどうするか。型定義が間違っている。
        }

        return {
          id,
          dimmed,
          className,
          activeBar,
          background,
          ...rest,
          color,
          dataKey,
        }
      }),
    [
      activeBarClassName,
      barBackgroundClassName,
      barClassName,
      dimBarProps,
      highlightedArea,
      series,
      shouldHighlight,
      theme,
      uuid,
    ],
  )

  const getBarProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<BarProps, "ref">
  > = useCallback(
    ({ index, className: classNameProp, ...props }, ref = null) => {
      const { id, className, activeBar, background, color, dataKey, ...rest } =
        barPropsList[index]

      return {
        ref,
        className: cx(classNameProp, className),
        activeBar,
        background,
        id,
        name: dataKey as string,
        dataKey,
        fill: color,
        stroke: color,
        isAnimationActive: false,
        stackId: stacked ? "stack" : undefined,
        ...(props as Omit<BarProps, "dataKey">),
        ...rest,
      } as BarProps
    },
    [barPropsList, stacked],
  )

  const getBarChartProps: ChartPropGetter<
    "div",
    ComponentPropsWithoutRef<typeof BarChart>,
    ComponentPropsWithoutRef<typeof BarChart>
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, barChartClassName),
      data,
      stackOffset: type === "percent" ? "expand" : undefined,
      layout: layoutType,
      ...props,
      ...barChartProps,
    }),
    [barChartClassName, barChartProps, data, layoutType, type],
  )

  return {
    barVars,
    getBarProps,
    getBarChartProps,
    setHighlightedArea,
  }
}

export type UseBarChartReturn = ReturnType<typeof useBarChart>
