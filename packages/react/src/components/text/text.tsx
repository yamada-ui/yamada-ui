import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { TextStyle } from "./text.style"
import { createComponent } from "../../core"
import { textStyle } from "./text.style"

interface TextOptions {
  /**
   * The CSS `text-align` property.
   */
  align?: CSSProps["textAlign"]
  /**
   * The CSS `text-transform` property.
   */
  casing?: CSSProps["textTransform"]
  /**
   * The CSS `text-decoration` property.
   */
  decoration?: CSSProps["textDecoration"]
}

export interface TextProps
  extends HTMLStyledProps<"p">,
    ThemeProps<TextStyle>,
    TextOptions {}

export const {
  PropsContext: TextPropsContext,
  usePropsContext: useTextPropsContext,
  withContext,
} = createComponent<TextProps, TextStyle>("text", textStyle)

/**
 * `Text` is a component that represents a paragraph of text. By default, it renders a `p` element.
 *
 * @see https://yamada-ui.com/components/text
 */
export const Text = withContext("p")(
  undefined,
  ({
    align: textAlign,
    casing: textTransform,
    decoration: textDecoration,
    ...rest
  }) => ({
    textAlign,
    textDecoration,
    textTransform,
    ...rest,
  }),
)
