import * as CSS from 'csstype'
import { Token } from '../types'
import { Configs, configs } from './'

export const scroll: Configs = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollMargin: configs.space('scrollMargin'),
  scrollMarginTop: configs.space('scrollMarginTop'),
  scrollMarginBottom: configs.space('scrollMarginBottom'),
  scrollMarginLeft: configs.space('scrollMarginLeft'),
  scrollMarginRight: configs.space('scrollMarginRight'),
  scrollMarginX: configs.space(['scrollMarginLeft', 'scrollMarginRight']),
  scrollMarginY: configs.space(['scrollMarginTop', 'scrollMarginBottom']),
  scrollPadding: configs.space('scrollPadding'),
  scrollPaddingTop: configs.space('scrollPaddingTop'),
  scrollPaddingBottom: configs.space('scrollPaddingBottom'),
  scrollPaddingLeft: configs.space('scrollPaddingLeft'),
  scrollPaddingRight: configs.space('scrollPaddingRight'),
  scrollPaddingX: configs.space(['scrollPaddingLeft', 'scrollPaddingRight']),
  scrollPaddingY: configs.space(['scrollPaddingTop', 'scrollPaddingBottom']),
}

export type ScrollProps<Y = 'responsive', M = 'scheme'> = {
  scrollBehavior?: Token<CSS.Property.ScrollBehavior, unknown, Y, M>
  scrollSnapAlign?: Token<CSS.Property.ScrollSnapAlign, unknown, Y, M>
  scrollSnapStop?: Token<CSS.Property.ScrollSnapStop, unknown, Y, M>
  scrollSnapType?: Token<CSS.Property.ScrollSnapType, unknown, Y, M>
  scrollMargin?: Token<CSS.Property.ScrollMargin | number, 'spaces', Y, M>
  scrollMarginTop?: Token<CSS.Property.ScrollMarginTop | number, 'spaces', Y, M>
  scrollMarginBottom?: Token<CSS.Property.ScrollMarginBottom | number, 'spaces', Y, M>
  scrollMarginLeft?: Token<CSS.Property.ScrollMarginLeft | number, 'spaces', Y, M>
  scrollMarginRight?: Token<CSS.Property.ScrollMarginRight | number, 'spaces', Y, M>
  scrollMarginX?: Token<CSS.Property.ScrollMargin | number, 'spaces', Y, M>
  scrollMarginY?: Token<CSS.Property.ScrollMargin | number, 'spaces', Y, M>
  scrollPadding?: Token<CSS.Property.ScrollPadding | number, 'spaces', Y, M>
  scrollPaddingTop?: Token<CSS.Property.ScrollPaddingTop | number, 'spaces', Y, M>
  scrollPaddingBottom?: Token<CSS.Property.ScrollPaddingBottom | number, 'spaces', Y, M>
  scrollPaddingLeft?: Token<CSS.Property.ScrollPaddingLeft | number, 'spaces', Y, M>
  scrollPaddingRight?: Token<CSS.Property.ScrollPaddingRight | number, 'spaces', Y, M>
  scrollPaddingX?: Token<CSS.Property.ScrollPadding | number, 'spaces', Y, M>
  scrollPaddingY?: Token<CSS.Property.ScrollPadding | number, 'spaces', Y, M>
}
