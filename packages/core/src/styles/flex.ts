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

export type FlexProps = {
  /**
   * The CSS `align-items` property.
   */
  alignItems?: Token<CSS.Property.AlignItems>
  /**
   * The CSS `align-content` property.
   */
  alignContent?: Token<CSS.Property.AlignContent>
  /**
   * The CSS `justify-items` property.
   */
  justifyItems?: Token<CSS.Property.JustifyItems>
  /**
   * The CSS `justify-content` property.
   */
  justifyContent?: Token<CSS.Property.JustifyContent>
  /**
   * The CSS `flex-wrap` property.
   */
  flexWrap?: Token<CSS.Property.FlexWrap>
  /**
   * The CSS `flex-flow` property.
   */
  flexFlow?: Token<CSS.Property.FlexFlow>
  /**
   * The CSS `flex-basis` property.
   */
  flexBasis?: Token<CSS.Property.FlexBasis | number>
  /**
   * The CSS `flex-direction` property.
   */
  flexDirection?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex-direction` property.
   */
  flexDir?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex` property.
   */
  flex?: Token<CSS.Property.Flex | number>
  /**
   * The CSS `gap` property.
   */
  gap?: Token<CSS.Property.Gap | number, 'spaces'>
  /**
   * The CSS `row-gap` property.
   */
  rowGap?: Token<CSS.Property.RowGap | number, 'spaces'>
  /**
   * The CSS `column-gap` property.
   */
  columnGap?: Token<CSS.Property.ColumnGap | number, 'spaces'>
  /**
   * The CSS `justify-self` property.
   */
  justifySelf?: Token<CSS.Property.JustifySelf>
  /**
   * The CSS `align-self` property.
   */
  alignSelf?: Token<CSS.Property.AlignSelf>
  /**
   * The CSS `order` property.
   */
  order?: Token<CSS.Property.Order>
  /**
   * The CSS `flex-grow` property.
   */
  flexGrow?: Token<CSS.Property.FlexGrow | (string & number)>
  /**
   * The CSS `flex-shrink` property.
   */
  flexShrink?: Token<CSS.Property.FlexShrink | (string & number)>
  /**
   * The CSS `place-items` property.
   */
  placeItems?: Token<CSS.Property.PlaceItems>
  /**
   * The CSS `place-content` property.
   */
  placeContent?: Token<CSS.Property.PlaceContent>
  /**
   * The CSS `place-self` property.
   */
  placeSelf?: Token<CSS.Property.PlaceSelf>
}
