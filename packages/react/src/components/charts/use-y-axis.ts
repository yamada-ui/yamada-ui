"use client"

import type { LabelProps, YAxisProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { useSystem, useTheme } from "../../core"
import { cx } from "../../utils"
import { yAxisProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseYAxisProps extends Merge<YAxisProps, HTMLProps> {
  css?: CSSObject | CSSObject[]
  /**
   * A label to display below the Y axis.
   */
  label?: string
  /**
   * A function to format tick value.
   */
  tickFormatter?: (value: any) => string
  /**
   * Unit displayed next to each tick.
   */
  unit?: string
  /**
   * Props passed down to recharts 'Label' component.
   */
  labelProps?: LabelProps
}

export const useYAxis = ({
  css,
  label: _label,
  tickFormatter,
  unit,
  labelProps: _labelProps,
  ...rest
}: UseYAxisProps) => {
  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, propClassName] = getComponentProps<
    Dict,
    keyof YAxisProps
  >(
    system,
    [rest, yAxisProperties],
    css,
  )(theme)

  const getYAxisProps: PropGetter<
    undefined,
    Partial<YAxisProps>,
    YAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, propClassName),
      allowDecimals: true,
      axisLine: false,
      tick: {
        fill: "currentColor",
        transform: "translate(-10, 0)",
      },
      tickFormatter,
      unit: unit,
      ...reChartsProps,
      ...props,
    }),
    [propClassName, reChartsProps, tickFormatter, unit],
  )

  return { getYAxisProps }
}

export type useYAxisReturn = ReturnType<typeof useYAxis>
