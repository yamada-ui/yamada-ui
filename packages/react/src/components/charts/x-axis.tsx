"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseXAxisProps } from "./use-x-axis"
import type { XAxisStyle } from "./x-axis.style"
import { XAxis as RechartsXAxis } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { useXAxis } from "./use-x-axis"
import { xAxisStyle } from "./x-axis.style"

export interface XAxisProps
  extends Merge<HTMLStyledProps<"svg">, UseXAxisProps>,
    ThemeProps<XAxisStyle> {}

const {
  ComponentContext: XAxisComponentContext,
  PropsContext: XAxisPropsContext,
  useComponentContext: useXAxisComponentContext,
  usePropsContext: useXAxisPropsContext,
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

export const XAxis = withProvider<"svg", XAxisProps>((props) => {
  const customProps = useXAxisComponentContext()
  const { getXAxisProps, styledXAxisProps } = useXAxis({
    ...customProps,
    ...props,
  })

  return (
    <styled.svg asChild {...styledXAxisProps}>
      <RechartsXAxis {...getXAxisProps()} />
    </styled.svg>
  )
}, "root")()
