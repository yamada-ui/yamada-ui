"use client"

import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { StackProps } from "./stack"
import type { VStackStyle } from "./v-stack.style"
import { createComponent } from "../../core"
import { Stack } from "./stack"
import { vStackStyle } from "./v-stack.style"

export interface VStackProps
  extends WithoutThemeProps<StackProps, VStackStyle>, ThemeProps<VStackStyle> {}

const {
  PropsContext: VStackPropsContext,
  usePropsContext: useVStackPropsContext,
  withContext,
} = createComponent<VStackProps, VStackStyle>("stack--vertical", vStackStyle)

export { useVStackPropsContext, VStackPropsContext }

/**
 * `VStack` is a component that groups elements and provides space between child elements.
 *
 * @see https://yamada-ui.com/docs/components/stack
 */
export const VStack = withContext<"div", VStackProps>(Stack)(undefined, {
  direction: "column",
})
