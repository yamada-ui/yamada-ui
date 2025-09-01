import type { FC } from "react"
import type { MarkProps } from "../mark"
import type { TextProps } from "../text"
import { Fragment } from "react"
import { Mark } from "../mark"
import { Text } from "../text"
import { useHighlight } from "./use-highlight"

export interface HighlightProps extends Omit<TextProps, "children"> {
  /**
   * The text used for searching.
   */
  children: string
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
 * @see https://yamada-ui.com/components/highlight
 */
export const Highlight: FC<HighlightProps> = ({
  children: text,
  fragment = false,
  query,
  markProps,
  ...rest
}) => {
  const chunks = useHighlight({ query, text })
  const { colorScheme } = rest

  if (fragment) {
    return (
      <>
        {chunks.map(({ match, text }, index) =>
          match ? (
            <Mark key={index} colorScheme={colorScheme} {...markProps}>
              {text}
            </Mark>
          ) : (
            <Fragment key={index}>{text}</Fragment>
          ),
        )}
      </>
    )
  } else {
    return (
      <Text {...rest}>
        {chunks.map(({ match, text }, index) =>
          match ? (
            <Mark key={index} colorScheme={colorScheme} {...markProps}>
              {text}
            </Mark>
          ) : (
            <Fragment key={index}>{text}</Fragment>
          ),
        )}
      </Text>
    )
  }
}
