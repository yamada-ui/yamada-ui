import * as CSS from 'csstype'
import { Token } from '../'
import { Configs, configs } from './'

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

export type PositionProps<Y = 'responsive', M = 'scheme'> = {
  zIndex?: Token<CSS.Property.ZIndex, 'zIndices', Y, M>
  top?: Token<CSS.Property.Top | number, 'spaces', Y, M>
  insetBlockStart?: Token<CSS.Property.InsetBlockStart | number, 'spaces', Y, M>
  right?: Token<CSS.Property.Right | number, 'spaces', Y, M>
  insetInlineEnd?: Token<CSS.Property.InsetInlineEnd | number, 'spaces', Y, M>
  insetEnd?: Token<CSS.Property.InsetInlineEnd | number, 'spaces', Y, M>
  bottom?: Token<CSS.Property.Bottom | number, 'spaces', Y, M>
  insetBlockEnd?: Token<CSS.Property.InsetBlockEnd | number, 'spaces', Y, M>
  left?: Token<CSS.Property.Left | number, 'spaces', Y, M>
  insetInlineStart?: Token<CSS.Property.InsetInlineStart | number, 'spaces', Y, M>
  insetStart?: Token<CSS.Property.InsetInlineStart | number, 'spaces', Y, M>
  inset?: Token<CSS.Property.Inset | number, 'spaces', Y, M>
  insetX?: Token<CSS.Property.Inset | number, 'spaces', Y, M>
  insetY?: Token<CSS.Property.Inset | number, 'spaces', Y, M>
  pos?: Token<CSS.Property.Position, unknown, Y, M>
  position?: Token<CSS.Property.Position, unknown, Y, M>
  insetInline?: Token<CSS.Property.InsetInline, unknown, Y, M>
  insetBlock?: Token<CSS.Property.InsetBlock, unknown, Y, M>
}
