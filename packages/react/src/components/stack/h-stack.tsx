import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { HStackStyle } from "./h-stack.style"
import type { StackProps } from "./stack"
import { createComponent } from "../../core"
import { hStackStyle } from "./h-stack.style"
import { Stack } from "./stack"

export interface HStackProps
  extends WithoutThemeProps<StackProps, HStackStyle>,
    ThemeProps<HStackStyle> {}

export const {
  PropsContext: HStackPropsContext,
  usePropsContext: useHStackPropsContext,
  withContext,
} = createComponent<HStackProps, HStackStyle>("stack--horizontal", hStackStyle)

/**
 * `HStack` is a component that groups elements and provides space between child elements.
 *
 * @see https://yamada-ui.com/components/stack
 */
export const HStack = withContext(Stack)(undefined, {
  direction: "row",
})
