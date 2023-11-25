import type { StringLiteral } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { Token } from "../css"
import type { Configs } from "./config"
import { configs, transforms } from "./config"

export const typography: Configs = {
  fontFamily: configs.prop("fontFamily", "fonts"),
  fontSize: configs.prop("fontSize", "fontSizes", transforms.px),
  fontWeight: configs.prop("fontWeight", "fontWeights"),
  lineHeight: configs.prop("lineHeight", "lineHeights"),
  letterSpacing: configs.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecorationColor: configs.color("textDecorationColor"),
  textDecoration: true,
  textDecor: { properties: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: configs.shadow("textShadow"),
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--ui-line-clamp)",
    },
    properties: "--ui-line-clamp",
  },
  isTruncated: {
    transform: transforms.isTruncated,
  },
}

export type TypographyProps = {
  /**
   * The CSS `font-weight` property.
   */
  fontWeight?: Token<number | StringLiteral, "fontWeights">
  /**
   * The CSS `line-height` property.
   */
  lineHeight?: Token<CSS.Property.LineHeight | number, "lineHeights">
  /**
   * The CSS `letter-spacing` property.
   */
  letterSpacing?: Token<CSS.Property.LetterSpacing | number, "letterSpacings">
  /**
   * The CSS `font-size` property.
   */
  fontSize?: Token<CSS.Property.FontSize | number, "fontSizes">
  /**
   * The CSS `font-family` property.
   */
  fontFamily?: Token<CSS.Property.FontFamily, "fonts">
  /**
   * The CSS `text-align` property.
   */
  textAlign?: Token<CSS.Property.TextAlign>
  /**
   * The CSS `font-style` property.
   */
  fontStyle?: Token<CSS.Property.FontStyle>
  /**
   * The CSS `text-indent` property.
   */
  textIndent?: Token<CSS.Property.TextIndent>
  /**
   * The CSS `word-break` property.
   */
  wordBreak?: Token<CSS.Property.WordBreak>
  /**
   * The CSS `overflow-wrap` property.
   */
  overflowWrap?: Token<CSS.Property.OverflowWrap>
  /**
   * The CSS `text-overflow` property.
   */
  textOverflow?: Token<CSS.Property.TextOverflow>
  /**
   * The CSS `text-transform` property.
   */
  textTransform?: Token<CSS.Property.TextTransform>
  /**
   * The CSS `white-space` property.
   */
  whiteSpace?: Token<CSS.Property.WhiteSpace>
  /**
   * The CSS `text-decoration` property.
   */
  textDecoration?: Token<CSS.Property.TextDecoration | number>
  /**
   * The CSS `text-decoration` property.
   */
  textDecor?: Token<CSS.Property.TextDecoration | number>
  /**
   * The CSS `text-decoration-color` property.
   */
  textDecorationColor?: Token<CSS.Property.TextDecorationColor, "colors">
  /**
   * The CSS `text-decoration-thickness` property.
   */
  textDecorationThickness?: Token<CSS.Property.TextDecorationThickness>
  /**
   * The CSS `text-decoration-style` property.
   */
  textDecorationStyle?: Token<CSS.Property.TextDecorationStyle>
  /**
   * The CSS `text-decoration-line` property.
   */
  textDecorationLine?: Token<CSS.Property.TextDecorationLine>
  /**
   * The CSS `text-underline-offset` property.
   */
  textUnderlineOffset?: Token<CSS.Property.TextUnderlineOffset | number>
  /**
   * The `text-shadow` property.
   */
  textShadow?: Token<CSS.Property.TextShadow | number, "shadows">
  /**
   * Used to visually truncate a text after a number of lines.
   */
  noOfLines?: Token<number>
  /**
   * If `true`, it clamps truncate a text after one line.
   */
  isTruncated?: Token<boolean>
}
