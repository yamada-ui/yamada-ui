import { StringLiteral } from '@yamada-ui/utils'
import * as CSS from 'csstype'
import { Token } from '../'
import { Configs, configs, transforms } from './'

export const typography: Configs = {
  fontFamily: configs.prop('fontFamily', 'fonts'),
  fontSize: configs.prop('fontSize', 'fontSizes', transforms.px),
  fontWeight: configs.prop('fontWeight', 'fontWeights'),
  lineHeight: configs.prop('lineHeight', 'lineHeights'),
  letterSpacing: configs.prop('letterSpacing', 'letterSpacings'),
  textAlign: true,
  fontStyle: true,
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

export type TypographyProps<Y = 'responsive', M = 'colorScheme'> = {
  fontWeight?: Token<number | StringLiteral, 'fontWeights', Y, M>
  lineHeight?: Token<CSS.Property.LineHeight | number, 'lineHeights', Y, M>
  letterSpacing?: Token<CSS.Property.LetterSpacing | number, 'letterSpacings', Y, M>
  fontSize?: Token<CSS.Property.FontSize | number, 'fontSizes', Y, M>
  fontFamily?: Token<CSS.Property.FontFamily, 'fonts', Y, M>
  textAlign?: Token<CSS.Property.TextAlign, unknown, Y, M>
  fontStyle?: Token<CSS.Property.FontStyle, unknown, Y, M>
  wordBreak?: Token<CSS.Property.WordBreak, unknown, Y, M>
  overflowWrap?: Token<CSS.Property.OverflowWrap, unknown, Y, M>
  textOverflow?: Token<CSS.Property.TextOverflow, unknown, Y, M>
  textTransform?: Token<CSS.Property.TextTransform, unknown, Y, M>
  whiteSpace?: Token<CSS.Property.WhiteSpace, unknown, Y, M>
  textDecoration?: Token<CSS.Property.TextDecoration | number, unknown, Y, M>
  textDecor?: Token<CSS.Property.TextDecoration | number, unknown, Y, M>
  textDecorationColor?: Token<CSS.Property.TextDecorationColor, 'colors', Y, M>
  textDecorationThickness?: Token<CSS.Property.TextDecorationThickness, unknown, Y, M>
  textDecorationStyle?: Token<CSS.Property.TextDecorationStyle, unknown, Y, M>
  textDecorationLine?: Token<CSS.Property.TextDecorationLine, unknown, Y, M>
  textUnderlineOffset?: Token<CSS.Property.TextUnderlineOffset | number, unknown, Y, M>
  textShadow?: Token<CSS.Property.TextShadow | number, 'shadows', Y, M>
  noOfLines?: Token<number, unknown, Y, M>
  isTruncated?: Token<boolean, unknown, Y, M>
}
