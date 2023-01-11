import * as CSS from 'csstype'
import { Token } from '..'
import { Configs, configs } from '.'

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

export type SpaceProps<Y = 'responsive', M = 'colorScheme'> = {
  m?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  margin?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  mt?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  marginBlockStart?: Token<CSS.Property.MarginBlockStart | number, 'spaces', Y, M>
  marginTop?: Token<CSS.Property.MarginTop | number, 'spaces', Y, M>
  mr?: Token<CSS.Property.MarginRight | number, 'spaces', Y, M>
  marginInlineEnd?: Token<CSS.Property.MarginInlineEnd | number, 'spaces', Y, M>
  marginEnd?: Token<CSS.Property.MarginInlineEnd | number, 'spaces', Y, M>
  me?: Token<CSS.Property.MarginInlineEnd | number, 'spaces', Y, M>
  marginRight?: Token<CSS.Property.MarginRight | number, 'spaces', Y, M>
  mb?: Token<CSS.Property.MarginBottom | number, 'spaces', Y, M>
  marginBlockEnd?: Token<CSS.Property.MarginBlockEnd | number, 'spaces', Y, M>
  marginBottom?: Token<CSS.Property.MarginBottom | number, 'spaces', Y, M>
  ml?: Token<CSS.Property.MarginLeft | number, 'spaces', Y, M>
  marginInlineStart?: Token<CSS.Property.MarginInlineStart | number, 'spaces', Y, M>
  marginStart?: Token<CSS.Property.MarginInlineStart | number, 'spaces', Y, M>
  ms?: Token<CSS.Property.MarginInlineStart | number, 'spaces', Y, M>
  marginLeft?: Token<CSS.Property.MarginLeft | number, 'spaces', Y, M>
  mx?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  marginInline?: Token<CSS.Property.MarginInline | number, 'spaces', Y, M>
  marginX?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  my?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  marginBlock?: Token<CSS.Property.MarginBlock | number, 'spaces', Y, M>
  marginY?: Token<CSS.Property.Margin | number, 'spaces', Y, M>
  p?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  padding?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  pt?: Token<CSS.Property.PaddingTop | number, 'spaces', Y, M>
  paddingBlockStart?: Token<CSS.Property.PaddingBlockStart | number, 'spaces', Y, M>
  paddingTop?: Token<CSS.Property.PaddingTop | number, 'spaces', Y, M>
  pr?: Token<CSS.Property.PaddingRight | number, 'spaces', Y, M>
  paddingInlineEnd?: Token<CSS.Property.PaddingInlineEnd | number, 'spaces', Y, M>
  paddingEnd?: Token<CSS.Property.PaddingInlineEnd | number, 'spaces', Y, M>
  pe?: Token<CSS.Property.PaddingInlineEnd | number, 'spaces', Y, M>
  paddingRight?: Token<CSS.Property.PaddingRight | number, 'spaces', Y, M>
  pb?: Token<CSS.Property.PaddingBottom | number, 'spaces', Y, M>
  paddingBlockEnd?: Token<CSS.Property.PaddingBlockEnd | number, 'spaces', Y, M>
  paddingBottom?: Token<CSS.Property.PaddingBottom | number, 'spaces', Y, M>
  pl?: Token<CSS.Property.PaddingLeft | number, 'spaces', Y, M>
  paddingInlineStart?: Token<CSS.Property.PaddingInlineStart | number, 'spaces', Y, M>
  paddingStart?: Token<CSS.Property.PaddingInlineStart | number, 'spaces', Y, M>
  ps?: Token<CSS.Property.PaddingInlineStart | number, 'spaces', Y, M>
  paddingLeft?: Token<CSS.Property.PaddingLeft | number, 'spaces', Y, M>
  px?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  paddingInline?: Token<CSS.Property.PaddingInline | number, 'spaces', Y, M>
  paddingX?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  py?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
  paddingBlock?: Token<CSS.Property.PaddingBlock | number, 'spaces', Y, M>
  paddingY?: Token<CSS.Property.Padding | number, 'spaces', Y, M>
}
