"use client"

import type { LabelProps, XAxisProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Merge } from "../../utils"
import { useCallback } from "react"
import { useSystem, useTheme } from "../../core"
import { cx } from "../../utils"
import { xAxisProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseXAxisProps extends Merge<HTMLProps, XAxisProps> {
  css?: CSSObject | CSSObject[]
  /**
   * If `true`, X axis is visible.
   *
   * @default true
   */
  withXAxis?: boolean
  /**
   * A label to display below the X axis.
   */
  xAxisLabel?: string
  /**
   * A function to format X axis tick.
   */
  xAxisTickFormatter?: (value: any) => string
  /**
   * Props passed down to recharts 'XAxisLabel' component.
   */
  xAxisLabelProps?: LabelProps
}

export const useXAxis = (props: UseXAxisProps) => {
  const {
    css,
    withXAxis = true,
    xAxisLabel: _xAxisLabel,
    xAxisTickFormatter,
    xAxisLabelProps: _xAxisLabelProps,
  } = props

  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, propClassName] = getComponentProps(
    system,
    [props, xAxisProperties],
    css,
  )(theme)

  const getXAxisProps: PropGetter<
    undefined,
    Partial<XAxisProps>,
    XAxisProps
  > = useCallback(
    ({ className, ...props } = {}) => ({
      className: cx(className, propClassName),
      hide: !withXAxis,
      minTickGap: 5,
      stroke: "",
      tick: {
        fill: "currentColor",
        transform: "translate(0, 10)",
      },
      tickFormatter: xAxisTickFormatter,
      ...reChartsProps,
      ...props,
    }),
    [propClassName, reChartsProps, withXAxis, xAxisTickFormatter],
  )

  return { getXAxisProps }
}

export type UseXAxisReturn = ReturnType<typeof useXAxis>
