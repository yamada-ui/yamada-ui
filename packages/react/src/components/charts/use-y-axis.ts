"use client"

import type { LabelProps, YAxisProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { useSystem, useTheme } from "../../core"
import { cx } from "../../utils"
import { yAxisProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseYAxisProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<YAxisProps, "color" | "fill" | "stroke">
  > {
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
  orientation,
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
      orientation,
      stroke: "",
      tick: {
        fill: "currentColor",
        transform:
          orientation === "right" ? "translate(10, 0)" : "translate(-10, 0)",
      },
      tickFormatter,
      unit,
      ...reChartsProps,
      ...props,
    }),
    [orientation, propClassName, reChartsProps, tickFormatter, unit],
  )

  return { getYAxisProps }
}

export type useYAxisReturn = ReturnType<typeof useYAxis>
