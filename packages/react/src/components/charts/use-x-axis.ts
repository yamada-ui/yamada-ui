"use client"

import type { LabelProps, XAxisProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { useSystem, useTheme } from "../../core"
import { cx } from "../../utils"
import { xAxisProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseXAxisProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<XAxisProps, "color" | "fill" | "stroke">
  > {
  css?: CSSObject | CSSObject[]
  /**
   * A label to display below the X axis.
   */
  label?: string
  /**
   * A function to format tick value.
   */
  tickFormatter?: (value: any) => string
  /**
   * Props passed down to recharts 'Label' component.
   */
  labelProps?: LabelProps
}

export const useXAxis = ({
  css,
  dataKey = "name",
  label: _label,
  tickFormatter,
  labelProps: _labelProps,
  ...rest
}: UseXAxisProps) => {
  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, propClassName] = getComponentProps<
    Dict,
    keyof XAxisProps
  >(
    system,
    [rest, xAxisProperties],
    css,
  )(theme)

  const getXAxisProps: PropGetter<
    undefined,
    Partial<XAxisProps>,
    XAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, propClassName),
      dataKey,
      minTickGap: 5,
      stroke: "",
      tick: {
        fill: "currentColor",
        transform: "translate(0, 10)",
      },
      tickFormatter,
      ...reChartsProps,
      ...props,
    }),
    [dataKey, propClassName, reChartsProps, tickFormatter],
  )

  return { getXAxisProps }
}

export type UseXAxisReturn = ReturnType<typeof useXAxis>
