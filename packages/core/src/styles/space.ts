import * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const space: Configs = {
  margin: configs.space('margin'),
  marginTop: configs.space('marginTop'),
  marginBlockStart: configs.space('marginBlockStart'),
  marginRight: configs.space('marginRight'),
  marginInlineEnd: configs.space('marginInlineEnd'),
  marginBottom: configs.space('marginBottom'),
  marginBlockEnd: configs.space('marginBlockEnd'),
  marginLeft: configs.space('marginLeft'),
  marginInlineStart: configs.space('marginInlineStart'),
  marginX: configs.space(['marginInlineStart', 'marginInlineEnd']),
  marginInline: configs.space('marginInline'),
  marginY: configs.space(['marginTop', 'marginBottom']),
  marginBlock: configs.space('marginBlock'),
  padding: configs.space('padding'),
  paddingTop: configs.space('paddingTop'),
  paddingBlockStart: configs.space('paddingBlockStart'),
  paddingRight: configs.space('paddingRight'),
  paddingBottom: configs.space('paddingBottom'),
  paddingBlockEnd: configs.space('paddingBlockEnd'),
  paddingLeft: configs.space('paddingLeft'),
  paddingInlineStart: configs.space('paddingInlineStart'),
  paddingInlineEnd: configs.space('paddingInlineEnd'),
  paddingX: configs.space(['paddingInlineStart', 'paddingInlineEnd']),
  paddingInline: configs.space('paddingInline'),
  paddingY: configs.space(['paddingTop', 'paddingBottom']),
  paddingBlock: configs.space('paddingBlock'),
}

Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd,
})

export type SpaceProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `margin` property.
   */
  m?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  /**
   * The CSS `margin` property.
   */
  margin?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  /**
   * The CSS `margin-top` property.
   */
  mt?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  /**
   * The CSS `margin-block-start` property.
   */
  marginBlockStart?: Token<CSS.Property.MarginBlockStart | number, 'spaces', Y, M>
  /**
   * The CSS `margin-top` property.
   */
  marginTop?: Token<CSS.Property.MarginTop | number, 'spaces', Y, M>
  /**
   * The CSS `margin-right` property.
   */
  mr?: Token<CSS.Property.MarginRight | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-end` property.
   */
  marginInlineEnd?: Token<CSS.Property.MarginInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-end` property.
   */
  marginEnd?: Token<CSS.Property.MarginInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-end` property.
   */
  me?: Token<CSS.Property.MarginInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `margin-right` property.
   */
  marginRight?: Token<CSS.Property.MarginRight | number, 'spaces', Y, M>
  /**
   * The CSS `margin-bottom` property.
   */
  mb?: Token<CSS.Property.MarginBottom | number, 'spaces', Y, M>
  /**
   * The CSS `margin-block-end` property.
   */
  marginBlockEnd?: Token<CSS.Property.MarginBlockEnd | number, 'spaces', Y, M>
  /**
   * The CSS `margin-bottom` property.
   */
  marginBottom?: Token<CSS.Property.MarginBottom | number, 'spaces', Y, M>
  /**
   * The CSS `margin-left` property.
   */
  ml?: Token<CSS.Property.MarginLeft | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-start` property.
   */
  marginInlineStart?: Token<CSS.Property.MarginInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-start` property.
   */
  marginStart?: Token<CSS.Property.MarginInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-start` property.
   */
  ms?: Token<CSS.Property.MarginInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `margin-left` property.
   */
  marginLeft?: Token<CSS.Property.MarginLeft | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-start`, and `margin-inline-end` property.
   */
  mx?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline` property.
   */
  marginInline?: Token<CSS.Property.MarginInline | number, 'spaces', Y, M>
  /**
   * The CSS `margin-inline-start`, and `margin-inline-end` property.
   */
  marginX?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  /**
   * The CSS `margin-top`, and `margin-bottom` property.
   */
  my?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  /**
   * The CSS `margin-block` property.
   */
  marginBlock?: Token<CSS.Property.MarginBlock | number, 'spaces', Y, M>
  /**
   * The CSS `margin-top`, and `margin-bottom` property.
   */
  marginY?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  /**
   * The CSS `padding` property.
   */
  p?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  /**
   * The CSS `padding` property.
   */
  padding?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  /**
   * The CSS `padding-top` property.
   */
  pt?: Token<CSS.Property.PaddingTop | number, 'spaces', Y, M>
  /**
   * The CSS `padding-block-start` property.
   */
  paddingBlockStart?: Token<CSS.Property.PaddingBlockStart | number, 'spaces', Y, M>
  /**
   * The CSS `padding-top` property.
   */
  paddingTop?: Token<CSS.Property.PaddingTop | number, 'spaces', Y, M>
  /**
   * The CSS `padding-right` property.
   */
  pr?: Token<CSS.Property.PaddingRight | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-end` property.
   */
  paddingInlineEnd?: Token<CSS.Property.PaddingInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-end` property.
   */
  paddingEnd?: Token<CSS.Property.PaddingInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-end` property.
   */
  pe?: Token<CSS.Property.PaddingInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `padding-right` property.
   */
  paddingRight?: Token<CSS.Property.PaddingRight | number, 'spaces', Y, M>
  /**
   * The CSS `padding-bottom` property.
   */
  pb?: Token<CSS.Property.PaddingBottom | number, 'spaces', Y, M>
  /**
   * The CSS `padding-block-end` property.
   */
  paddingBlockEnd?: Token<CSS.Property.PaddingBlockEnd | number, 'spaces', Y, M>
  /**
   * The CSS `padding-bottom` property.
   */
  paddingBottom?: Token<CSS.Property.PaddingBottom | number, 'spaces', Y, M>
  /**
   * The CSS `padding-left` property.
   */
  pl?: Token<CSS.Property.PaddingLeft | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-start` property.
   */
  paddingInlineStart?: Token<CSS.Property.PaddingInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-start` property.
   */
  paddingStart?: Token<CSS.Property.PaddingInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-start` property.
   */
  ps?: Token<CSS.Property.PaddingInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `padding-left` property.
   */
  paddingLeft?: Token<CSS.Property.PaddingLeft | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-start`, and `padding-inline-end` property.
   */
  px?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline` property.
   */
  paddingInline?: Token<CSS.Property.PaddingInline | number, 'spaces', Y, M>
  /**
   * The CSS `padding-inline-start`, and `padding-inline-end` property.
   */
  paddingX?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  /**
   * The CSS `padding-top`, and `padding-bottom` property.
   */
  py?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  /**
   * The CSS `padding-block` property.
   */
  paddingBlock?: Token<CSS.Property.PaddingBlock | number, 'spaces', Y, M>
  /**
   * The CSS `padding-top`, and `padding-bottom` property.
   */
  paddingY?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
}
