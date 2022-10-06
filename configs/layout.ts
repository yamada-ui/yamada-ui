import * as CSS from 'csstype'
import { Configs, configs } from 'configs'
import { Token } from 'types'

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
  display?: Token<CSS.Property.Display>
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
  overflow?: Token<CSS.Property.Overflow, Y, M>
  overflowX?: Token<CSS.Property.OverflowX, Y, M>
  overflowY?: Token<CSS.Property.OverflowY, Y, M>
  boxSizing?: CSS.Property.BoxSizing
  boxDecorationBreak?: Token<CSS.Property.BoxDecorationBreak, Y, M>
  float?: Token<CSS.Property.Float, Y, M>
  objectFit?: Token<CSS.Property.ObjectFit, Y, M>
  objectPosition?: Token<CSS.Property.ObjectPosition | number, Y, M>
  overscrollBehavior?: Token<CSS.Property.OverscrollBehavior, Y, M>
  overscroll?: Token<CSS.Property.OverscrollBehavior, Y, M>
  overscrollBehaviorX?: Token<CSS.Property.OverscrollBehaviorX, Y, M>
  overscrollX?: Token<CSS.Property.OverscrollBehaviorX, Y, M>
  overscrollBehaviorY?: Token<CSS.Property.OverscrollBehaviorY, Y, M>
  overscrollY?: Token<CSS.Property.OverscrollBehaviorY, Y, M>
  visibility?: Token<CSS.Property.Visibility, Y, M>
  isolation?: Token<CSS.Property.Isolation, Y, M>
}
