import * as CSS from 'csstype'
import { Token } from '../types'
import { Configs, configs } from './'

export const layout: Configs = {
  width: configs.sizeTransform('width'),
  inlineSize: configs.sizeTransform('inlineSize'),
  height: configs.size('height'),
  blockSize: configs.size('blockSize'),
  boxSize: configs.size(['width', 'height']),
  minWidth: configs.size('minWidth'),
  minInlineSize: configs.size('minInlineSize'),
  minHeight: configs.size('minHeight'),
  minBlockSize: configs.size('minBlockSize'),
  maxWidth: configs.size('maxWidth'),
  maxInlineSize: configs.size('maxInlineSize'),
  maxHeight: configs.size('maxHeight'),
  maxBlockSize: configs.size('maxBlockSize'),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: true,
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true,
}

Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY,
})

export type LayoutProps<Y = 'responsive', M = 'scheme'> = {
  display?: Token<CSS.Property.Display, unknown, Y, M>
  width?: Token<CSS.Property.Width | number, 'sizes', Y, M>
  w?: Token<CSS.Property.Width | number, 'sizes', Y, M>
  inlineSize?: Token<CSS.Property.InlineSize | number, 'sizes', Y, M>
  boxSize?: Token<CSS.Property.Width | number, 'sizes', Y, M>
  maxWidth?: Token<CSS.Property.MaxWidth | number, 'sizes', Y, M>
  maxW?: Token<CSS.Property.MaxWidth | number, 'sizes', Y, M>
  maxInlineSize?: Token<CSS.Property.MaxInlineSize | number, 'sizes', Y, M>
  minWidth?: Token<CSS.Property.MinWidth | number, 'sizes', Y, M>
  minW?: Token<CSS.Property.MinWidth | number, 'sizes', Y, M>
  minInlineSize?: Token<CSS.Property.MinInlineSize | number, 'sizes', Y, M>
  height?: Token<CSS.Property.Height | number, 'sizes', Y, M>
  h?: Token<CSS.Property.Height | number, 'sizes', Y, M>
  blockSize?: Token<CSS.Property.BlockSize | number, 'sizes', Y, M>
  maxHeight?: Token<CSS.Property.MaxHeight | number, 'sizes', Y, M>
  maxH?: Token<CSS.Property.MaxHeight | number, 'sizes', Y, M>
  maxBlockSize?: Token<CSS.Property.MaxBlockSize | number, 'sizes', Y, M>
  minHeight?: Token<CSS.Property.MinHeight | number, 'sizes', Y, M>
  minH?: Token<CSS.Property.MinHeight | number, 'sizes', Y, M>
  minBlockSize?: Token<CSS.Property.MinBlockSize | number, 'sizes', Y, M>
  verticalAlign?: Token<CSS.Property.VerticalAlign | number, Y, M>
  overflow?: Token<CSS.Property.Overflow, unknown, Y, M>
  overflowX?: Token<CSS.Property.OverflowX, unknown, Y, M>
  overflowY?: Token<CSS.Property.OverflowY, unknown, Y, M>
  boxSizing?: Token<CSS.Property.BoxSizing, unknown, Y, M>
  boxDecorationBreak?: Token<CSS.Property.BoxDecorationBreak, unknown, Y, M>
  float?: Token<CSS.Property.Float, unknown, Y, M>
  objectFit?: Token<CSS.Property.ObjectFit, unknown, Y, M>
  objectPosition?: Token<CSS.Property.ObjectPosition | number, unknown, Y, M>
  overscrollBehavior?: Token<CSS.Property.OverscrollBehavior, unknown, Y, M>
  overscroll?: Token<CSS.Property.OverscrollBehavior, unknown, Y, M>
  overscrollBehaviorX?: Token<CSS.Property.OverscrollBehaviorX, unknown, Y, M>
  overscrollX?: Token<CSS.Property.OverscrollBehaviorX, unknown, Y, M>
  overscrollBehaviorY?: Token<CSS.Property.OverscrollBehaviorY, unknown, Y, M>
  overscrollY?: Token<CSS.Property.OverscrollBehaviorY, unknown, Y, M>
  visibility?: Token<CSS.Property.Visibility, unknown, Y, M>
  isolation?: Token<CSS.Property.Isolation, unknown, Y, M>
}
