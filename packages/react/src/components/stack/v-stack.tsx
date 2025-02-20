import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { StackProps } from "./stack"
import type { VStackStyle } from "./v-stack.style"
import { createComponent } from "../../core"
import { Stack } from "./stack"
import { vStackStyle } from "./v-stack.style"

export interface VStackProps
  extends WithoutThemeProps<StackProps>,
    ThemeProps<VStackStyle> {}

export const {
  PropsContext: VStackPropsContext,
  usePropsContext: useVStackPropsContext,
  withContext,
} = createComponent<VStackProps, VStackStyle>("stack--vertical", vStackStyle)

/**
 * `VStack` is a component that groups elements and provides space between child elements.
 *
 * @see Docs https://yamada-ui.com/components/stack
 */
export const VStack = withContext(Stack)(undefined, {
  direction: "column",
})
