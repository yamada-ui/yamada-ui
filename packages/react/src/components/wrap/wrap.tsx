import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { FlexProps } from "../flex"
import type { WrapStyle } from "./wrap.style"
import { createComponent } from "../../core"
import { Flex } from "../flex"
import { wrapStyle } from "./wrap.style"

export interface WrapProps
  extends WithoutThemeProps<FlexProps, WrapStyle>,
    ThemeProps<WrapStyle> {}

export const {
  PropsContext: WrapPropsContext,
  usePropsContext: useWrapPropsContext,
  withContext,
} = createComponent<WrapProps, WrapStyle>("wrap", wrapStyle)

/**
 * `Wrap` is a component that has `wrap` set on `Flex`. It inherits convenient style shorthand from `Flex`.
 *
 * @see https://yamada-ui.com/components/wrap
 */
export const Wrap = withContext(Flex)()
