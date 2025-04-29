import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { CodeStyle } from "./code.style"
import { createComponent } from "../../core"
import { codeStyle } from "./code.style"

export interface CodeProps
  extends HTMLStyledProps<"code">,
    ThemeProps<CodeStyle> {}

export const {
  PropsContext: CodePropsContext,
  usePropsContext: useCodePropsContext,
  withContext,
} = createComponent<CodeProps, CodeStyle>("code", codeStyle)

/**
 * `Code` is a component that represents a code block. By default, it renders a `code` element.
 *
 * @see https://yamada-ui.com/components/code
 */
export const Code = withContext("code")()
