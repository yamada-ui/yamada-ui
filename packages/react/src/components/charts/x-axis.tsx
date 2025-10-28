"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { Label } from "./chart.types"
import type { UseLabelProps } from "./use-label"
import type { UseXAxisProps } from "./use-x-axis"
import type { XAxisStyle } from "./x-axis.style"
import { Label as RechartsLabel, XAxis as RechartsXAxis } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { isNumber, isString } from "../../utils"
import { useLabel } from "./use-label"
import { useXAxis } from "./use-x-axis"
import { xAxisStyle } from "./x-axis.style"

export interface XAxisProps
  extends Merge<HTMLStyledProps<"svg">, UseXAxisProps>,
    ThemeProps<XAxisStyle> {
  /**
   * Props passed down to 'Label' component or function that returns a React element.
   */
  label?: Label
}

const {
  ComponentContext: XAxisComponentContext,
  PropsContext: XAxisPropsContext,
  useComponentContext: useXAxisComponentContext,
  usePropsContext: useXAxisPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<XAxisProps, XAxisStyle, XAxisProps>(
  "chart-x-axis",
  xAxisStyle,
)

export {
  useXAxisComponentContext,
  useXAxisPropsContext,
  XAxisComponentContext,
  XAxisPropsContext,
}

export const XAxis = withProvider<"svg", XAxisProps>(({ label, ...props }) => {
  const customProps = useXAxisComponentContext()
  const { getXAxisProps, styledXAxisProps } = useXAxis({
    ...customProps,
    ...props,
  })

  return (
    <styled.svg asChild {...styledXAxisProps}>
      <RechartsXAxis {...getXAxisProps()}>
        {label ? (
          isNumber(label) || isString(label) ? (
            <XAxisLabel>{label}</XAxisLabel>
          ) : (
            <XAxisLabel {...label} />
          )
        ) : null}
      </RechartsXAxis>
    </styled.svg>
  )
}, "root")()

interface XAxisLabelProps
  extends Merge<HTMLStyledProps<"text">, UseLabelProps> {}

const XAxisLabel = withContext<"text", XAxisLabelProps>((props) => {
  const { getLabelProps, styledLabelProps } = useLabel(props)

  return (
    <styled.text asChild {...styledLabelProps}>
      <RechartsLabel {...getLabelProps()} />
    </styled.text>
  )
}, "label")()
