import type { ReactNode } from "react"
import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { TextProps } from "../text"
import type { MarkStyle } from "./highlight.style"
import type { Chunk } from "./use-highlight"
import { Fragment } from "react"
import { createComponent } from "../../core"
import { Text } from "../text"
import { markStyle } from "./highlight.style"
import { useHighlight } from "./use-highlight"

export interface HighlightProps extends Omit<TextProps, "children"> {
  /**
   * Accepts a string or a function. If it's a function, it should return a `ReactNode` and accept an array of `Chunk` objects as its argument.
   */
  children: ((props: Chunk[]) => ReactNode) | string
  /**
   * Can be a single string or an array of strings. These are the terms that are highlighted in the text.
   */
  query: string | string[]
  /**
   * If `true`, `Fragment` is used for rendering.
   *
   * @default false
   */
  fragment?: boolean
  /**
   * Properties passed to the Mark component which is used to highlight the matched terms.
   */
  markProps?: MarkProps
}

/**
 * `Highlight` is a component that highlights specified strings within text. By default, it renders a `p` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/highlight
 */
export const Highlight: FC<HighlightProps> = ({
  children: text,
  fragment = false,
  lineHeight = "tall",
  query,
  markProps,
  ...rest
}) => {
  if (typeof text !== "string")
    throw new Error("The children prop of Highlight must be a string")

  const chunks = useHighlight({ query, text })

  const Component: FC = fragment ? Fragment : Text

  return (
    <Component {...(!fragment ? { lineHeight } : {})} {...rest}>
      {chunks.map(({ match, text }, i) =>
        match ? (
          <Mark key={i} {...markProps}>
            {text}
          </Mark>
        ) : (
          <Fragment key={i}>{text}</Fragment>
        ),
      )}
    </Component>
  )
}

Highlight.displayName = "Highlight"
Highlight.__ui__ = "Highlight"

export interface MarkProps extends HTMLUIProps<"mark">, ThemeProps<MarkStyle> {}

export const {
  PropsContext: MarkPropsContext,
  usePropsContext: useMarkPropsContext,
  withContext,
} = createComponent<MarkProps, MarkStyle>("mark", markStyle)

export const Mark = withContext<"mark", MarkProps>("mark")()
