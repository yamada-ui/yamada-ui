import * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const flex: Configs = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
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

Object.assign(flex, {
  flexDir: flex.flexDirection,
})

export type FlexProps<Y = 'responsive', M = 'colorScheme'> = {
  alignItems?: Token<CSS.Property.AlignItems, unknown, Y, M>
  alignContent?: Token<CSS.Property.AlignContent, unknown, Y, M>
  justifyItems?: Token<CSS.Property.JustifyItems, unknown, Y, M>
  justifyContent?: Token<CSS.Property.JustifyContent, unknown, Y, M>
  flexWrap?: Token<CSS.Property.FlexWrap, unknown, Y, M>
  flexFlow?: Token<CSS.Property.FlexFlow, unknown, Y, M>
  flexBasis?: Token<CSS.Property.FlexBasis | number, unknown, Y, M>
  flexDirection?: Token<CSS.Property.FlexDirection, unknown, Y, M>
  flexDir?: Token<CSS.Property.FlexDirection, unknown, Y, M>
  flex?: Token<CSS.Property.Flex | number, unknown, Y, M>
  gap?: Token<CSS.Property.Gap | number, 'spaces', Y, M>
  rowGap?: Token<CSS.Property.RowGap | number, 'spaces', Y, M>
  columnGap?: Token<CSS.Property.ColumnGap | number, 'spaces', Y, M>
  justifySelf?: Token<CSS.Property.JustifySelf, unknown, Y, M>
  alignSelf?: Token<CSS.Property.AlignSelf, unknown, Y, M>
  order?: Token<CSS.Property.Order, unknown, Y, M>
  flexGrow?: Token<CSS.Property.FlexGrow | (string & number), unknown, Y, M>
  flexShrink?: Token<CSS.Property.FlexShrink | (string & number), unknown, Y, M>
  placeItems?: Token<CSS.Property.PlaceItems, unknown, Y, M>
  placeContent?: Token<CSS.Property.PlaceContent, unknown, Y, M>
  placeSelf?: Token<CSS.Property.PlaceSelf, unknown, Y, M>
}
