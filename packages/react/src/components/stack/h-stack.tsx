"use client"

import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { HStackStyle } from "./h-stack.style"
import type { StackProps } from "./stack"
import { createComponent } from "../../core"
import { hStackStyle } from "./h-stack.style"
import { Stack } from "./stack"

export interface HStackProps
  extends WithoutThemeProps<StackProps, HStackStyle>,
    ThemeProps<HStackStyle> {}

const {
  PropsContext: HStackPropsContext,
  usePropsContext: useHStackPropsContext,
  withContext,
} = createComponent<HStackProps, HStackStyle>("stack--horizontal", hStackStyle)

export { HStackPropsContext, useHStackPropsContext }

/**
 * `HStack` is a component that groups elements and provides space between child elements.
 *
 * @see https://yamada-ui.com/docs/components/stack
 */
export const HStack = withContext<"div", HStackProps>(Stack)(undefined, {
  direction: "row",
})
