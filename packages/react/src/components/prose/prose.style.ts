import type { CSSObject } from "../../core"
import { defineComponentStyle, getStyle } from "../../core"
import { isObject } from "../../utils"
import { blockquoteStyle } from "../blockquote"
import { codeStyle } from "../code"
import { headingStyle } from "../heading"
import { linkStyle } from "../link"
import { listStyle } from "../list"
import { nativeTableStyle } from "../native-table"
import { separatorStyle } from "../separator"

function getSelector<Y extends string>(selector: Y) {
  return `& :where(${selector}):not(:where(.not-prose, .not-prose *))` as const
}
function getScopedStyle(style?: CSSObject): CSSObject | undefined {
  if (!style) return style

  return Object.fromEntries(
    Object.entries(style).map(([key, value]) => [
      key,
      isObject(value) && !getStyle(key) && !key.startsWith("--")
        ? {
            "&:not(:where(.not-prose, .not-prose *))": getScopedStyle(value),
          }
        : value,
    ]),
  )
}
function replaceVariants<Y extends string, M extends object | undefined>(
  selector: Y,
  style: M,
  additionalStyle: CSSObject = {},
): { [D in keyof NonNullable<M>]: { [H in Y]: CSSObject } } {
  return Object.fromEntries(
    Object.entries(style ?? {}).map(([key, value]) => [
      key,
      { [selector]: { ...value, ...additionalStyle } },
    ]),
  ) as { [D in keyof NonNullable<M>]: { [H in Y]: CSSObject } }
}
function pickSlot<Y extends object | undefined>(
  variants: Y,
  slot: keyof NonNullable<Y>[keyof NonNullable<Y>],
): { [D in keyof NonNullable<Y>]: CSSObject } {
  return Object.fromEntries(
    Object.entries(variants ?? {}).map(([key, value]) => [key, value[slot]]),
  ) as { [D in keyof NonNullable<Y>]: CSSObject }
}

export const proseStyle = defineComponentStyle({
  /* oxlint-disable perfectionist/sort-objects */
  base: {
    minW: "0",
    w: "full",
    overflowWrap: "break-word",
    [getSelector("*")]: {
      "&::before, &::after": {
        textBoxEdge: "inherit",
        textBoxTrim: "inherit",
      },
      color: "fg.emphasized",
      textBoxEdge: "text",
      textBoxTrim: "trim-both",
    },
    "& :where(.not-prose)": { textBoxEdge: "auto", textBoxTrim: "none" },
    [getSelector(
      "h1 *, h2 *, h3 *, h4 *, h5 *, h6 *, a[href] *, blockquote *, th *",
    )]: {
      color: "inherit",
    },
    [getSelector("p, ul, ol, dl, hr, blockquote, pre, table, figure")]: {
      my: "{space}",
    },
    [getSelector("h1, h2, h3, h4, h5, h6")]: {
      ...headingStyle.base,
      color: "fg",
      my: "{space}",
    },
    [getSelector("h1")]: { fontSize: "2em", mt: "calc({space} * 2)" },
    [getSelector("h2")]: { fontSize: "1.5em", mt: "calc({space} * 2)" },
    [getSelector("h3")]: { fontSize: "1.25em", mt: "calc({space} * 1.5)" },
    [getSelector("h4")]: { fontSize: "1.125em", mt: "calc({space} * 1.5)" },
    [getSelector("h5")]: { fontSize: "1em" },
    [getSelector("h6")]: { fontSize: "0.875em" },
    [getSelector("a[href]")]: { ...linkStyle.base, color: "link.fg" },
    [getSelector("b, strong, dt")]: { fontWeight: "semibold" },
    [getSelector("em, i")]: { fontStyle: "italic" },
    [getSelector("ul, ol")]: listStyle.base?.root,
    [getSelector("ul")]: {
      ...listStyle.props?.styleType.disc.root,
      listStyleType: "disc",
    },
    [getSelector("ol")]: {
      ...listStyle.props?.styleType.decimal.root,
      listStyleType: "decimal",
    },
    [getSelector("li")]: listStyle.base?.item,
    [getSelector("li > ul, li > ol")]: {
      mb: "0",
      mt: listStyle.base?.root?.gap,
    },
    [getSelector("li > [data-list-icon]")]: listStyle.base?.icon,
    [getSelector("dd")]: { mt: "0.5em", ps: "1.5em" },
    [getSelector("blockquote")]: { color: "fg", ps: "1em" },
    [getSelector("figcaption")]: {
      ...blockquoteStyle.base?.caption,
      color: "fg",
      fontSize: "0.875em",
      my: "calc({space} / 2)",
      textAlign: "end",
    },
    [getSelector("cite")]: blockquoteStyle.base?.cite,
    [getSelector("code:not(pre code), kbd")]: codeStyle.base,
    [getSelector("pre")]: {
      bg: "bg.subtle",
      fontFamily: "mono",
      fontSize: "0.875em",
      overflowWrap: "normal",
      overflowX: "auto",
      p: "{space}",
      rounded: "l2",
      whiteSpace: "pre",
    },
    [getSelector("pre code")]: { color: "fg" },
    [getSelector("table")]: getScopedStyle(nativeTableStyle.base?.root),
    [getSelector("thead")]: getScopedStyle(nativeTableStyle.base?.thead),
    [getSelector("tbody")]: getScopedStyle(nativeTableStyle.base?.tbody),
    [getSelector("tfoot")]: getScopedStyle(nativeTableStyle.base?.tfoot),
    [getSelector("tr")]: getScopedStyle(nativeTableStyle.base?.tr),
    [getSelector("th")]: {
      ...getScopedStyle(nativeTableStyle.base?.th),
      color: "fg",
    },
    [getSelector("td")]: getScopedStyle(nativeTableStyle.base?.td),
    [getSelector("caption")]: {
      ...getScopedStyle(nativeTableStyle.base?.caption),
      fontSize: "0.875em",
      my: "calc({space} / 2)",
    },
    [getSelector("hr")]: { ...separatorStyle.base, borderTopWidth: "1px" },
    [getSelector("img, video")]: { h: "auto", maxW: "full" },
    "& > :where(:not(style, :not(style) ~ *)):not(:where(.not-prose, .not-prose *))":
      {
        mt: "0",
      },
    "& > :where(:not(style, :has(~ :not(style)))):not(:where(.not-prose, .not-prose *))":
      {
        mb: "0",
      },
  },
  /* oxlint-enable perfectionist/sort-objects */

  props: {
    blockquote: replaceVariants(
      getSelector("blockquote"),
      pickSlot(blockquoteStyle.variants, "root"),
      { px: undefined },
    ),
    code: replaceVariants(
      getSelector("code:not(pre code)"),
      codeStyle.variants,
    ),
    hr: replaceVariants(getSelector("hr"), separatorStyle.variants),
    kbd: replaceVariants(getSelector("kbd"), codeStyle.variants),
    link: replaceVariants(getSelector("a[href]"), linkStyle.variants, {
      color: undefined,
    }),
    table: {
      line: {
        [getSelector("tbody")]: getScopedStyle(
          nativeTableStyle.variants?.line.tbody,
        ),
        [getSelector("tfoot")]: getScopedStyle(
          nativeTableStyle.variants?.line.tfoot,
        ),
        [getSelector("thead")]: getScopedStyle(
          nativeTableStyle.variants?.line.thead,
        ),
      },
      outline: {
        [getSelector("table")]: getScopedStyle(
          nativeTableStyle.variants?.outline.root,
        ),
        [getSelector("tbody")]: getScopedStyle(
          nativeTableStyle.variants?.outline.tbody,
        ),
        [getSelector("tfoot")]: getScopedStyle(
          nativeTableStyle.variants?.outline.tfoot,
        ),
        [getSelector("thead")]: getScopedStyle(
          nativeTableStyle.variants?.outline.thead,
        ),
      },
    },
  },

  sizes: {
    sm: {
      "--space": "fontSizes.sm",
      fontSize: "sm",
      [getSelector("code:not(pre code), kbd")]: codeStyle.sizes?.sm,
      [getSelector("table")]: getScopedStyle(nativeTableStyle.sizes?.sm.root),
      [getSelector("td")]: getScopedStyle(nativeTableStyle.sizes?.sm.td),
      [getSelector("th")]: getScopedStyle(nativeTableStyle.sizes?.sm.th),
    },
    md: {
      "--space": "fontSizes.md",
      fontSize: "md",
      [getSelector("code:not(pre code), kbd")]: codeStyle.sizes?.md,
      [getSelector("table")]: getScopedStyle(nativeTableStyle.sizes?.md.root),
      [getSelector("td")]: getScopedStyle(nativeTableStyle.sizes?.md.td),
      [getSelector("th")]: getScopedStyle(nativeTableStyle.sizes?.md.th),
    },
    lg: {
      "--space": "fontSizes.lg",
      fontSize: "lg",
      [getSelector("code:not(pre code), kbd")]: codeStyle.sizes?.md,
      [getSelector("table")]: getScopedStyle(nativeTableStyle.sizes?.lg.root),
      [getSelector("td")]: getScopedStyle(nativeTableStyle.sizes?.lg.td),
      [getSelector("th")]: getScopedStyle(nativeTableStyle.sizes?.lg.th),
    },
  },

  defaultProps: {
    size: "md",
    blockquote: "subtle",
    code: "subtle",
    kbd: "outline",
    link: "plain",
    table: "line",
  },
})

export type ProseStyle = typeof proseStyle
