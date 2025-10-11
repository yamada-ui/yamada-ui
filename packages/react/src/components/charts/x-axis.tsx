"use client"

import type { XAxisProps as RechartsXAxisProps } from "recharts"
import type { XAxisStyle } from "./x-axis.style"
import { XAxis as RechartsXAxis } from "recharts"
import { createComponent } from "../../core"
import { xAxisStyle } from "./x-axis.style"

export interface XAxisProps extends RechartsXAxisProps {}

const {
  ComponentContext: XAxisComponentContext,
  PropsContext: XAxisPropsContext,
  useComponentContext: useXAxisComponentContext,
  usePropsContext: useXAxisPropsContext,
  withContext,
} = createComponent<XAxisProps, XAxisStyle>("chart-x-axis", xAxisStyle)

export {
  useXAxisComponentContext,
  useXAxisPropsContext,
  XAxisComponentContext,
  XAxisPropsContext,
}

export const XAxis = withContext<"div", XAxisProps>(RechartsXAxis)()
