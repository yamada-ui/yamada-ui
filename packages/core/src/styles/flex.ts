import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const flex: Configs = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flexDir: { properties: 'flexDirection' },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: configs.size('flexBasis'),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: configs.space('gap'),
  rowGap: configs.space('rowGap'),
  columnGap: configs.space('columnGap'),
}

export type FlexProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `align-items` property.
   */
  alignItems?: Token<CSS.Property.AlignItems, unknown, Y, M>
  /**
   * The CSS `align-content` property.
   */
  alignContent?: Token<CSS.Property.AlignContent, unknown, Y, M>
  /**
   * The CSS `justify-items` property.
   */
  justifyItems?: Token<CSS.Property.JustifyItems, unknown, Y, M>
  /**
   * The CSS `justify-content` property.
   */
  justifyContent?: Token<CSS.Property.JustifyContent, unknown, Y, M>
  /**
   * The CSS `flex-wrap` property.
   */
  flexWrap?: Token<CSS.Property.FlexWrap, unknown, Y, M>
  /**
   * The CSS `flex-flow` property.
   */
  flexFlow?: Token<CSS.Property.FlexFlow, unknown, Y, M>
  /**
   * The CSS `flex-basis` property.
   */
  flexBasis?: Token<CSS.Property.FlexBasis | number, unknown, Y, M>
  /**
   * The CSS `flex-direction` property.
   */
  flexDirection?: Token<CSS.Property.FlexDirection, unknown, Y, M>
  /**
   * The CSS `flex-direction` property.
   */
  flexDir?: Token<CSS.Property.FlexDirection, unknown, Y, M>
  /**
   * The CSS `flex` property.
   */
  flex?: Token<CSS.Property.Flex | number, unknown, Y, M>
  /**
   * The CSS `gap` property.
   */
  gap?: Token<CSS.Property.Gap | number, 'spaces', Y, M>
  /**
   * The CSS `row-gap` property.
   */
  rowGap?: Token<CSS.Property.RowGap | number, 'spaces', Y, M>
  /**
   * The CSS `column-gap` property.
   */
  columnGap?: Token<CSS.Property.ColumnGap | number, 'spaces', Y, M>
  /**
   * The CSS `justify-self` property.
   */
  justifySelf?: Token<CSS.Property.JustifySelf, unknown, Y, M>
  /**
   * The CSS `align-self` property.
   */
  alignSelf?: Token<CSS.Property.AlignSelf, unknown, Y, M>
  /**
   * The CSS `order` property.
   */
  order?: Token<CSS.Property.Order, unknown, Y, M>
  /**
   * The CSS `flex-grow` property.
   */
  flexGrow?: Token<CSS.Property.FlexGrow | (string & number), unknown, Y, M>
  /**
   * The CSS `flex-shrink` property.
   */
  flexShrink?: Token<CSS.Property.FlexShrink | (string & number), unknown, Y, M>
  /**
   * The CSS `place-items` property.
   */
  placeItems?: Token<CSS.Property.PlaceItems, unknown, Y, M>
  /**
   * The CSS `place-content` property.
   */
  placeContent?: Token<CSS.Property.PlaceContent, unknown, Y, M>
  /**
   * The CSS `place-self` property.
   */
  placeSelf?: Token<CSS.Property.PlaceSelf, unknown, Y, M>
}
