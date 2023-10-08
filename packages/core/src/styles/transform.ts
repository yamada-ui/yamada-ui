import { StringLiteral } from '@yamada-ui/utils'
import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs, transforms } from './config'

export const transform: Configs = {
  clipPath: true,
  transform: { transform: transforms.transform },
  transformOrigin: true,
  transformStyle: true,
  perspective: true,
  translateX: configs.space('--ui-translate-x'),
  translateY: configs.space('--ui-translate-y'),
  scale: configs.prop(['--ui-scale-x', '--ui-scale-y']),
  scaleX: configs.prop('--ui-scale-x'),
  scaleY: configs.prop('--ui-scale-y'),
  rotate: { properties: '--ui-rotate', transform: transforms.deg },
  skewX: { properties: '--ui-skew-x', transform: transforms.deg },
  skewY: { properties: '--ui-skew-y', transform: transforms.deg },
}

export type TransformProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `clip-path` property.
   */
  clipPath?: Token<CSS.Property.ClipPath, unknown, Y, M>
  /**
   * The CSS `transform` property.
   */
  transform?: Token<CSS.Property.Transform | 'auto' | 'auto-3d', unknown, Y, M>
  /**
   * The CSS `transform-origin` property.
   */
  transformOrigin?: Token<CSS.Property.TransformOrigin | number, 'sizes', Y, M>
  /**
   * The CSS `transform-style` property.
   */
  transformStyle?: Token<CSS.Property.TransformStyle, unknown, Y, M>
  /**
   * The CSS `perspective` property.
   */
  perspective?: Token<CSS.Property.Perspective, unknown, Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-translate-x`.
   */
  translateX?: Token<StringLiteral, 'spaces', Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-translate-y`.
   */
  translateY?: Token<StringLiteral, 'spaces', Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-x` and `--ui-scale-y`.
   */
  scale?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-x`.
   */
  scaleX?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-y`.
   */
  scaleY?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-rotate`.
   */
  rotate?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-skew-x`.
   */
  skewX?: Token<StringLiteral, unknown, Y, M>
  /**
   * If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-skew-y`.
   */
  skewY?: Token<StringLiteral, unknown, Y, M>
}
