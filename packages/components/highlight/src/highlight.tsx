import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { TextProps } from "@yamada-ui/typography"
import type { ReactNode } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { Text } from "@yamada-ui/typography"
import { cx, isArray } from "@yamada-ui/utils"
import { Fragment, useMemo } from "react"

interface Options {
  query: string | string[]
  text: string
}

interface Chunk {
  match: boolean
  text: string
}

const escapeRegexp = (term: string): string =>
  term.replace(/[|\\{}()[\]^$+*?.-]/g, (char: string) => `\\${char}`)

const buildRegex = (query: string[]): RegExp | undefined => {
  query = query.filter(Boolean).map((text) => escapeRegexp(text.trim()))

  if (query.length) return new RegExp(`(${query.join("|")})`, "ig")
}

const highlightWords = ({ query, text }: Options): Chunk[] => {
  const regex = buildRegex(isArray(query) ? query : [query])

  if (!regex) return [{ match: false, text }]

  return text
    .split(regex)
    .filter(Boolean)
    .map((text) => ({ match: regex.test(text), text }))
}

export const useHighlight = ({ query, text }: Options): Chunk[] =>
  useMemo(() => highlightWords({ query, text }), [text, query])

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
   * If `true`, `Fragment` is used for rendering.
   *
   * @default false
   *
   * @deprecated Use `fragment` instead.
   */
  isFragment?: boolean
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
  isFragment = false,
  fragment = isFragment,
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

export interface MarkProps extends HTMLUIProps<"mark">, ThemeProps<"Mark"> {}

export const Mark = forwardRef<MarkProps, "mark">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Mark", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    bg: "transparent",
    whiteSpace: "nowrap",
    ...styles,
  }

  return (
    <ui.mark
      ref={ref}
      className={cx("ui-mark", className)}
      __css={css}
      {...rest}
    />
  )
})

Mark.displayName = "Mark"
Mark.__ui__ = "Mark"
