import { StringLiteral } from '@yamada-ui/utils'
import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs, transforms } from './config'

export const typography: Configs = {
  fontFamily: configs.prop('fontFamily', 'fonts'),
  fontSize: configs.prop('fontSize', 'fontSizes', transforms.px),
  fontWeight: configs.prop('fontWeight', 'fontWeights'),
  lineHeight: configs.prop('lineHeight', 'lineHeights'),
  letterSpacing: configs.prop('letterSpacing', 'letterSpacings'),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecorationColor: configs.color('textDecorationColor'),
  textDecoration: true,
  textDecor: { property: 'textDecoration' },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: configs.shadow('textShadow'),
  noOfLines: {
    static: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 'var(--ui-line-clamp)',
    },
    property: '--ui-line-clamp',
  },
  isTruncated: {
    transform: transforms.isTruncated,
  },
}

export type TypographyProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `font-weight` property.
   */
  fontWeight?: Token<number | StringLiteral, 'fontWeights', Y, M>
  /**
   * The CSS `line-height` property.
   */
  lineHeight?: Token<CSS.Property.LineHeight | number, 'lineHeights', Y, M>
  /**
   * The CSS `letter-spacing` property.
   */
  letterSpacing?: Token<
    CSS.Property.LetterSpacing | number,
    'letterSpacings',
    Y,
    M
  >
  /**
   * The CSS `font-size` property.
   */
  fontSize?: Token<CSS.Property.FontSize | number, 'fontSizes', Y, M>
  /**
   * The CSS `font-family` property.
   */
  fontFamily?: Token<CSS.Property.FontFamily, 'fonts', Y, M>
  /**
   * The CSS `text-align` property.
   */
  textAlign?: Token<CSS.Property.TextAlign, unknown, Y, M>
  /**
   * The CSS `font-style` property.
   */
  fontStyle?: Token<CSS.Property.FontStyle, unknown, Y, M>
  /**
   * The CSS `text-indent` property.
   */
  textIndent?: Token<CSS.Property.TextIndent, unknown, Y, M>
  /**
   * The CSS `word-break` property.
   */
  wordBreak?: Token<CSS.Property.WordBreak, unknown, Y, M>
  /**
   * The CSS `overflow-wrap` property.
   */
  overflowWrap?: Token<CSS.Property.OverflowWrap, unknown, Y, M>
  /**
   * The CSS `text-overflow` property.
   */
  textOverflow?: Token<CSS.Property.TextOverflow, unknown, Y, M>
  /**
   * The CSS `text-transform` property.
   */
  textTransform?: Token<CSS.Property.TextTransform, unknown, Y, M>
  /**
   * The CSS `white-space` property.
   */
  whiteSpace?: Token<CSS.Property.WhiteSpace, unknown, Y, M>
  /**
   * The CSS `text-decoration` property.
   */
  textDecoration?: Token<CSS.Property.TextDecoration | number, unknown, Y, M>
  /**
   * The CSS `text-decoration` property.
   */
  textDecor?: Token<CSS.Property.TextDecoration | number, unknown, Y, M>
  /**
   * The CSS `text-decoration-color` property.
   */
  textDecorationColor?: Token<CSS.Property.TextDecorationColor, 'colors', Y, M>
  /**
   * The CSS `text-decoration-thickness` property.
   */
  textDecorationThickness?: Token<
    CSS.Property.TextDecorationThickness,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `text-decoration-style` property.
   */
  textDecorationStyle?: Token<CSS.Property.TextDecorationStyle, unknown, Y, M>
  /**
   * The CSS `text-decoration-line` property.
   */
  textDecorationLine?: Token<CSS.Property.TextDecorationLine, unknown, Y, M>
  /**
   * The CSS `text-underline-offset` property.
   */
  textUnderlineOffset?: Token<
    CSS.Property.TextUnderlineOffset | number,
    unknown,
    Y,
    M
  >
  /**
   * The `text-shadow` property.
   */
  textShadow?: Token<CSS.Property.TextShadow | number, 'shadows', Y, M>
  /**
   * Used to visually truncate a text after a number of lines.
   */
  noOfLines?: Token<number, unknown, Y, M>
  /**
   * If `true`, it clamps truncate a text after one line.
   */
  isTruncated?: Token<boolean, unknown, Y, M>
}
