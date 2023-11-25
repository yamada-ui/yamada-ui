import type { HTMLUIProps, ThemeProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { TextProps } from "@yamada-ui/typography"
import { Text } from "@yamada-ui/typography"
import { cx, isArray } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import { Fragment, useMemo } from "react"

type Options = { text: string; query: string | string[] }

type Chunk = { text: string; match: boolean }

const escapeRegexp = (term: string): string =>
  term.replace(/[|\\{}()[\]^$+*?.-]/g, (char: string) => `\\${char}`)

const buildRegex = (query: string[]): RegExp | undefined => {
  query = query.filter(Boolean).map((text) => escapeRegexp(text.trim()))

  if (query.length) return new RegExp(`(${query.join("|")})`, "ig")
}

const highlightWords = ({ text, query }: Options): Chunk[] => {
  const regex = buildRegex(isArray(query) ? query : [query])

  if (!regex) return [{ text, match: false }]

  return text
    .split(regex)
    .filter(Boolean)
    .map((text) => ({ text, match: regex.test(text) }))
}

export const useHighlight = ({ text, query }: Options): Chunk[] =>
  useMemo(() => highlightWords({ text, query }), [text, query])

export type HighlightProps = TextProps & {
  /**
   * If `true`, `Fragment` is used for rendering.
   *
   * @default false
   */
  isFragment?: boolean
  /**
   * Can be a single string or an array of strings. These are the terms that are highlighted in the text.
   */
  query: string | string[]
  /**
   * Accepts a string or a function. If it's a function, it should return a `ReactNode` and accept an array of `Chunk` objects as its argument.
   */
  children: string | ((props: Chunk[]) => ReactNode)
  /**
   * Properties passed to the Mark component which is used to highlight the matched terms.
   */
  markProps?: MarkProps
}

export const Highlight: FC<HighlightProps> = ({
  isFragment = false,
  query,
  children: text,
  markProps,
  lineHeight = "tall",
  ...rest
}) => {
  if (typeof text !== "string")
    throw new Error("The children prop of Highlight must be a string")

  const chunks = useHighlight({ query, text })

  const Component: FC = isFragment ? Fragment : Text

  return (
    <Component {...(!isFragment ? { lineHeight } : {})} {...rest}>
      {chunks.map(({ text, match }, i) =>
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

export type MarkProps = HTMLUIProps<"mark"> & ThemeProps<"Mark">

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
