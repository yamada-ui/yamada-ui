"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseXAxisProps } from "./use-x-axis"
import type { XAxisStyle } from "./x-axis.style"
import { XAxis as RechartsXAxis } from "recharts"
import { createComponent } from "../../core"
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
  withContext,
} = createComponent<XAxisProps, XAxisStyle, XAxisProps>(
  "chart-x-axis",
  xAxisStyle,
)

export {
  useXAxisComponentContext,
  useXAxisPropsContext,
  XAxisComponentContext,
  XAxisPropsContext,
}

// NOTE: When processed with the second argument, properties such as `stroke` are absorbed by YamadaUI.
export const XAxis = withContext<"svg", XAxisProps>((props) => {
  const customProps = useXAxisComponentContext()
  const { getXAxisProps } = useXAxis({ ...customProps, ...props })

  return <RechartsXAxis {...getXAxisProps()} />
})()
