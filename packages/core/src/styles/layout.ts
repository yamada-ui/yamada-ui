import * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

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
  aspectRatio: true,
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

export type LayoutProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `display` property
   */
  display?: Token<CSS.Property.Display, unknown, Y, M>
  /**
   * The CSS `width` property
   */
  width?: Token<CSS.Property.Width | number, 'sizes', Y, M>
  /**
   * The CSS `width` property
   */
  w?: Token<CSS.Property.Width | number, 'sizes', Y, M>
  /**
   * The CSS `inline-size` property
   */
  inlineSize?: Token<CSS.Property.InlineSize | number, 'sizes', Y, M>
  /**
   * The CSS `width`, and `height` property
   */
  boxSize?: Token<CSS.Property.Width | number, 'sizes', Y, M>
  /**
   * The CSS `max-width` property
   */
  maxWidth?: Token<CSS.Property.MaxWidth | number, 'sizes', Y, M>
  /**
   * The CSS `max-width` property
   */
  maxW?: Token<CSS.Property.MaxWidth | number, 'sizes', Y, M>
  /**
   * The CSS `max-inline-size` property
   */
  maxInlineSize?: Token<CSS.Property.MaxInlineSize | number, 'sizes', Y, M>
  /**
   * The CSS `min-width` property
   */
  minWidth?: Token<CSS.Property.MinWidth | number, 'sizes', Y, M>
  /**
   * The CSS `min-width` property
   */
  minW?: Token<CSS.Property.MinWidth | number, 'sizes', Y, M>
  /**
   * The CSS `min-inline-size` property
   */
  minInlineSize?: Token<CSS.Property.MinInlineSize | number, 'sizes', Y, M>
  /**
   * The CSS `height` property
   */
  height?: Token<CSS.Property.Height | number, 'sizes', Y, M>
  /**
   * The CSS `height` property
   */
  h?: Token<CSS.Property.Height | number, 'sizes', Y, M>
  /**
   * The CSS `block-size` property
   */
  blockSize?: Token<CSS.Property.BlockSize | number, 'sizes', Y, M>
  /**
   * The CSS `max-height` property
   */
  maxHeight?: Token<CSS.Property.MaxHeight | number, 'sizes', Y, M>
  /**
   * The CSS `max-height` property
   */
  maxH?: Token<CSS.Property.MaxHeight | number, 'sizes', Y, M>
  /**
   * The CSS `max-block-size` property
   */
  maxBlockSize?: Token<CSS.Property.MaxBlockSize | number, 'sizes', Y, M>
  /**
   * The CSS `min-height` property
   */
  minHeight?: Token<CSS.Property.MinHeight | number, 'sizes', Y, M>
  /**
   * The CSS `min-height` property
   */
  minH?: Token<CSS.Property.MinHeight | number, 'sizes', Y, M>
  /**
   * The CSS `min-block-size` property
   */
  minBlockSize?: Token<CSS.Property.MinBlockSize | number, 'sizes', Y, M>
  /**
   * The CSS `vertical-align` property
   */
  verticalAlign?: Token<CSS.Property.VerticalAlign | number, Y, M>
  /**
   * The CSS `overflow` property
   */
  overflow?: Token<CSS.Property.Overflow, unknown, Y, M>
  /**
   * The CSS `overflow-x` property
   */
  overflowX?: Token<CSS.Property.OverflowX, unknown, Y, M>
  /**
   * The CSS `overflow-y` property
   */
  overflowY?: Token<CSS.Property.OverflowY, unknown, Y, M>
  /**
   * The CSS `overflow-x` property
   */
  boxSizing?: Token<CSS.Property.BoxSizing, unknown, Y, M>
  /**
   * The CSS `box-decoration-break` property
   */
  boxDecorationBreak?: Token<CSS.Property.BoxDecorationBreak, unknown, Y, M>
  /**
   * The CSS `float` property
   */
  float?: Token<CSS.Property.Float, unknown, Y, M>
  /**
   * The CSS `object-fit` property
   */
  objectFit?: Token<CSS.Property.ObjectFit, unknown, Y, M>
  /**
   * The CSS `object-position` property
   */
  objectPosition?: Token<CSS.Property.ObjectPosition | number, unknown, Y, M>
  /**
   * The CSS `overscroll-behavior` property
   */
  overscrollBehavior?: Token<CSS.Property.OverscrollBehavior, unknown, Y, M>
  /**
   * The CSS `overscroll-behavior` property
   */
  overscroll?: Token<CSS.Property.OverscrollBehavior, unknown, Y, M>
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollBehaviorX?: Token<CSS.Property.OverscrollBehaviorX, unknown, Y, M>
  /**
   * The CSS `overscroll-behavior-x` property
   */
  overscrollX?: Token<CSS.Property.OverscrollBehaviorX, unknown, Y, M>
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollBehaviorY?: Token<CSS.Property.OverscrollBehaviorY, unknown, Y, M>
  /**
   * The CSS `overscroll-behavior-y` property
   */
  overscrollY?: Token<CSS.Property.OverscrollBehaviorY, unknown, Y, M>
  /**
   * The CSS `visibility` property
   */
  visibility?: Token<CSS.Property.Visibility, unknown, Y, M>
  /**
   * The CSS `isolation` property
   */
  isolation?: Token<CSS.Property.Isolation, unknown, Y, M>
  /**
   * The CSS `aspect-ratio` property
   */
  aspectRatio?: Token<CSS.Property.AspectRatio, unknown, Y, M>
}
