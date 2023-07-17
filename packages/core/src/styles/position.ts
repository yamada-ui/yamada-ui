import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const position: Configs = {
  position: true,
  pos: configs.prop('position'),
  zIndex: configs.prop('zIndex', 'zIndices'),
  inset: configs.space('inset'),
  insetX: configs.space(['left', 'right']),
  insetInline: configs.space('insetInline'),
  insetY: configs.space(['top', 'bottom']),
  insetBlock: configs.space('insetBlock'),
  top: configs.space('top'),
  insetBlockStart: configs.space('insetBlockStart'),
  bottom: configs.space('bottom'),
  insetBlockEnd: configs.space('insetBlockEnd'),
  left: configs.space('left'),
  insetInlineStart: configs.space('insetInlineStart'),
  right: configs.space('right'),
  insetInlineEnd: configs.space('insetInlineEnd'),
}

Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd,
})

export type PositionProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `z-index` property.
   */
  zIndex?: Token<CSS.Property.ZIndex, 'zIndices', Y, M>
  /**
   * The CSS `top` property.
   */
  top?: Token<CSS.Property.Top | number, 'spaces', Y, M>
  /**
   * The CSS `inset-block-start` property.
   */
  insetBlockStart?: Token<CSS.Property.InsetBlockStart | number, 'spaces', Y, M>
  /**
   * The CSS `right` property.
   */
  right?: Token<CSS.Property.Right | number, 'spaces', Y, M>
  /**
   * The CSS `inset-inline-end` property.
   */
  insetInlineEnd?: Token<CSS.Property.InsetInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `inset-inline-end` property.
   */
  insetEnd?: Token<CSS.Property.InsetInlineEnd | number, 'spaces', Y, M>
  /**
   * The CSS `bottom` property.
   */
  bottom?: Token<CSS.Property.Bottom | number, 'spaces', Y, M>
  /**
   * The CSS `inset-block-end` property.
   */
  insetBlockEnd?: Token<CSS.Property.InsetBlockEnd | number, 'spaces', Y, M>
  /**
   * The CSS `left` property.
   */
  left?: Token<CSS.Property.Left | number, 'spaces', Y, M>
  /**
   * The CSS `inset-inline-start` property.
   */
  insetInlineStart?: Token<CSS.Property.InsetInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `inset-start` property.
   */
  insetStart?: Token<CSS.Property.InsetInlineStart | number, 'spaces', Y, M>
  /**
   * The CSS `top`, `left`, `bottom`, `right` property.
   */
  inset?: Token<CSS.Property.Inset | number, 'spaces', Y, M>
  /**
   * The CSS `left`, and `right` property.
   */
  insetX?: Token<CSS.Property.Inset | number, 'spaces', Y, M>
  /**
   * The CSS `top`, and `bottom` property.
   */
  insetY?: Token<CSS.Property.Inset | number, 'spaces', Y, M>
  /**
   * The CSS `position` property.
   */
  pos?: Token<CSS.Property.Position, unknown, Y, M>
  /**
   * The CSS `position` property.
   */
  position?: Token<CSS.Property.Position, unknown, Y, M>
  /**
   * The CSS `inset-inline` property.
   */
  insetInline?: Token<CSS.Property.InsetInline, unknown, Y, M>
  /**
   * The CSS `inset-block` property.
   */
  insetBlock?: Token<CSS.Property.InsetBlock, unknown, Y, M>
}
